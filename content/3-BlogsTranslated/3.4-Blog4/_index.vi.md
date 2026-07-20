---
title: "Lambda MicroVMs"
date: 2026-06-22
weight: 4
chapter: false
pre: " <b> 3.4. </b> "
---

# AWS Lambda MicroVMs

#### 1. Thông tin nguồn

| Hạng mục | Nội dung |
|---|---|
| Tiêu đề gốc | Run isolated sandboxes with full lifecycle control: AWS Lambda introduces MicroVMs |
| Nguồn | [AWS News Blog](https://aws.amazon.com/blogs/aws/run-isolated-sandboxes-with-full-lifecycle-control-aws-lambda-introduces-microvms/) |
| Chủ đề | AWS Lambda, môi trường thực thi cô lập, Firecracker |

![Hình minh họa từ bài viết gốc](/images/3-BlogsTranslated/3.4-Blog4/hero.jpeg)

#### 2. Tóm tắt nội dung

Bài viết giới thiệu **AWS Lambda MicroVMs**, mô hình compute serverless mới trong Lambda nhằm chạy mã do người dùng hoặc hệ thống AI tạo ra trong môi trường **cô lập và có trạng thái**. MicroVMs cung cấp cô lập mức máy ảo, khả năng khởi động và resume gần như tức thì, cùng kiểm soát vòng đời và trạng thái môi trường mà không yêu cầu tự vận hành hạ tầng ảo hóa phức tạp.

Nền tảng kỹ thuật sử dụng **Firecracker** — cùng công nghệ ảo hóa nhẹ đã phục vụ hơn **15 nghìn tỷ** lần gọi Lambda Functions mỗi tháng.

#### 3. Nội dung chính

**3.1. Bối cảnh và nhu cầu**

Nhiều ứng dụng đa tenant cần cấp cho mỗi người dùng cuối một môi trường thực thi riêng để chạy mã mà developer không viết sẵn. Các ví dụ trong bài viết gồm: trợ lý lập trình AI, môi trường code tương tác, nền tảng phân tích dữ liệu, hệ thống quét lỗ hổng và **game server** chạy script do người dùng cung cấp.

| Cách tiếp cận | Ưu điểm | Hạn chế |
|---|---|---|
| Máy ảo truyền thống | Cô lập mạnh | Thời gian khởi động tính bằng phút |
| Container | Khởi động trong vài giây | Chia sẻ kernel, cần harden nhiều để chứa mã không tin cậy |
| FaaS theo mô hình request-response | Phù hợp workload sự kiện | Không tối ưu cho phiên tương tác dài và giữ trạng thái giữa các tương tác |

Lambda MicroVMs được thiết kế cho khoảng trống nêu trên: mỗi phiên có một MicroVM riêng, khởi động nhanh, duy trì memory và disk trong phiên, đồng thời có thể tạm dừng với chi phí idle thấp khi người dùng rời đi. Vì dùng chung nền Firecracker với Lambda Functions, người dùng kế thừa độ chín vận hành của dịch vụ đã chạy ở quy mô lớn.

**3.2. Quy trình sử dụng**

Trên AWS Lambda console, **Lambda MicroVMs** xuất hiện ở menu điều hướng bên trái. Người dùng tạo **MicroVM Image** từ ứng dụng (bài viết dùng ví dụ Flask) và Dockerfile, đóng gói thành file zip và tải lên **Amazon S3**.

Base image trong ví dụ: `public.ecr.aws/lambda/microvms:al2023-minimal`. Lệnh tạo image:

```bash
aws lambda-microvms create-microvm-image \
  --code-artifact uri=<path/to/s3/artifact.zip> --name <VM_image_name> \
  --base-image-arn arn:aws:lambda:us-east-1:aws:microvm-image:al2023-1 \
  --build-role-arn <IAM role ARN>
```

Lambda lấy artifact từ S3, chạy Dockerfile, khởi tạo ứng dụng và tạo **Firecracker snapshot** gồm trạng thái disk và memory. Log build được stream thời gian thực tới **Amazon CloudWatch** dưới đường dẫn `/aws/lambda/microvms/`. Khi sẵn sàng, image xuất hiện trên console kèm ARN và số phiên bản.

![Tạo MicroVM Image trên console](/images/3-BlogsTranslated/3.4-Blog4/figure-1.png)

Khởi chạy MicroVM bằng console hoặc CLI, kèm **idle policy**. Ví dụ trong bài viết: tự động suspend sau **15 phút** không hoạt động (`maxIdleDurationSeconds: 900`), `suspendedDurationSeconds: 300`, và `autoResumeEnabled: true`.

```bash
aws lambda-microvms run-microvm \
  --image-identifier arn:aws:lambda:<region>:<acct>:microvm-image:my-image \
  --execution-role-arn arn:aws:iam::<acct>:role/MicroVMExecutionRole \
  --idle-policy '{"maxIdleDurationSeconds":900,"suspendedDurationSeconds":300,"autoResumeEnabled":true}'
```

Theo bài viết, **không cần thiết lập networking thủ công**. Lambda gán **ID duy nhất**, trả về **endpoint URL** riêng và khởi động MicroVM với ứng dụng đã chạy sẵn từ snapshot.

Traffic được gửi kèm token xác thực ngắn hạn trong header **`X-aws-proxy-auth`**. Khi vượt ngưỡng idle, MicroVM được suspend và lưu snapshot memory/disk; request tiếp theo sẽ resume với trạng thái ứng dụng nguyên vẹn.

![Khởi chạy MicroVM và endpoint](/images/3-BlogsTranslated/3.4-Blog4/figure-2.png)

**3.3. Các khả năng cốt lõi**

1. **Cô lập mức máy ảo** nhờ Firecracker: mỗi phiên một MicroVM riêng, không chia sẻ kernel và tài nguyên giữa các người dùng.
2. **Khởi động và resume nhanh** theo mô hình image-then-launch: mọi MicroVM sau đó resume từ snapshot đã khởi tạo sẵn, không boot lạnh.
3. **Thực thi có trạng thái**: duy trì memory, disk và tiến trình; hỗ trợ tổng thời gian chạy tới **8 giờ**; có thể suspend tự động theo cửa sổ idle cấu hình được.

Bài viết lưu ý: vì MicroVMs khởi động từ snapshot đã khởi tạo sẵn, các ứng dụng sinh nội dung duy nhất, thiết lập kết nối mạng hoặc tải dữ liệu tạm trong giai đoạn initialization có thể cần tích hợp hook do dịch vụ cung cấp để bảo đảm tương thích.

Lambda MicroVMs là tài nguyên mới trong AWS Lambda với bề mặt API riêng. **Lambda Functions** vẫn phù hợp workload sự kiện dạng request-response; MicroVMs phục vụ ứng dụng đa tenant cần môi trường cô lập cho mã do người dùng hoặc AI tạo ra. Hai mô hình có thể bổ sung cho nhau trong cùng một ứng dụng.

**3.4. Phạm vi áp dụng và tài nguyên**

| Hạng mục | Nội dung |
|---|---|
| Region | US East (N. Virginia, Ohio), US West (Oregon), Europe (Ireland), Asia Pacific (Tokyo) |
| Kiến trúc | **ARM64** |
| Tài nguyên tối đa mỗi MicroVM | 16 vCPU, 32 GB bộ nhớ, 32 GB ổ đĩa |
| Suspend | Qua API tường minh hoặc lifecycle policy tự động |

Chi tiết giá được nêu trên trang AWS Lambda pricing.

#### 4. Nhận xét

Bài viết mở rộng phạm vi của AWS Lambda từ mô hình hàm sự kiện sang môi trường thực thi theo phiên làm việc, nhắm đúng nhu cầu ngày càng phổ biến: chạy mã do người dùng hoặc hệ thống AI tạo ra trong không gian cô lập. Trước đây, việc lựa chọn giữa máy ảo, container và FaaS thường buộc phải đánh đổi giữa mức độ cô lập, thời gian khởi động và khả năng giữ trạng thái. Lambda MicroVMs kết hợp ba yếu tố này trên nền Firecracker đã được vận hành ở quy mô lớn.

Về mặt kiến trúc, mô hình image-then-launch và khả năng suspend/resume giúp giảm chi phí idle nhưng vẫn giữ memory, disk và tiến trình của phiên làm việc. Các chi tiết như idle policy, header xác thực `X-aws-proxy-auth`, và lưu ý về hook tương thích khi khởi tạo từ snapshot cho thấy đây là dịch vụ hướng tới sản phẩm đa tenant thực tế, không chỉ là lớp trừu tượng đơn giản. Việc tách biệt API với Lambda Functions cũng nhấn mạnh rằng hai mô hình bổ sung cho nhau: Functions xử lý luồng sự kiện, MicroVMs xử lý đoạn mã không tin cậy cần môi trường riêng.

Từ góc độ học tập và thiết kế hệ thống, bài viết hữu ích khi nghiên cứu trợ lý lập trình AI, môi trường thực thi tương tác, quét lỗ hổng hoặc các nền tảng cho phép người dùng chạy script. Khi đánh giá áp dụng, cần xem xét giới hạn Region/ARM64, thời gian chạy tối đa tám giờ, chính sách suspend và chi phí theo mô hình định giá Lambda. Đây là nội dung đáng tham khảo cho các hướng phát triển liên quan đến agentic workload và thực thi mã động trên cloud.
