---
title: "CloudFormation Express mode"
date: 2026-06-30
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# AWS CloudFormation Express mode

#### 1. Thông tin nguồn

| Hạng mục | Nội dung |
|---|---|
| Tiêu đề gốc | Accelerate your infrastructure deployments by up to 4x with AWS CloudFormation Express mode |
| Nguồn | [AWS News Blog](https://aws.amazon.com/blogs/aws/accelerate-your-infrastructure-deployments-by-up-to-4x-with-aws-cloudformation-express-mode/) |
| Chủ đề | AWS CloudFormation, triển khai hạ tầng, tối ưu vòng lặp phát triển |

![Hình minh họa từ bài viết gốc](/images/3-BlogsTranslated/3.2-Blog2/hero.jpg)

#### 2. Tóm tắt nội dung

Bài viết giới thiệu **AWS CloudFormation Express mode**, chế độ triển khai mới nhằm tăng tốc deployment cho developer và công cụ AI khi lặp lại trên hạ tầng. Express mode hoàn tất khi CloudFormation xác nhận **cấu hình tài nguyên đã được áp dụng**, thay vì chờ các **stabilization checks** kéo dài. Theo bài viết, thời gian triển khai có thể giảm tới **bốn lần** đối với workflow phát triển lặp và các kịch bản production phù hợp.

#### 3. Nội dung chính

**3.1. Nguyên lý hoạt động**

Ở chế độ mặc định, mọi deployment CloudFormation đều thực hiện stabilization checks sau khi áp dụng cấu hình, nhằm bảo đảm tài nguyên sẵn sàng phục vụ traffic trước khi chuyển tải.

Express mode phục vụ **hai nhóm use case chính**: (1) vòng lặp phát triển lặp; (2) kịch bản production khi chấp nhận ổn định theo kiểu eventual. Các tình huống cụ thể gồm: chỉnh cấu hình hạ tầng trong quá trình phát triển, kiểm thử từng thành phần ứng dụng, và phát triển hạ tầng hỗ trợ AI cần phản hồi dưới một phút.

Với Express mode:

- Deployment hoàn tất khi cấu hình đã được apply, không chờ stabilization checks.
- Tài nguyên tiếp tục trở nên operational ở nền.
- CloudFormation **tự động retry** các tài nguyên phụ thuộc gặp lỗi tạm thời trong cùng stack, không cần can thiệp thủ công.
- Điểm thay đổi là **thời điểm hoàn tất**, không phải cách provision tài nguyên.

Ví dụ đo trong bài viết:

| Thao tác | Standard mode | Express mode |
|---|---|---|
| Tạo Amazon SQS kèm dead letter queue (DLQ) | khoảng 64 giây | tới khoảng 10 giây |
| Xóa AWS Lambda có network interface attachment | khoảng 20–30 phút | tới khoảng 10 giây |

**3.2. Cách kích hoạt**

Trên AWS Management Console, khi tạo stack, chọn **Enable** trong **Express mode** thuộc **Stack deployment options**.

Express mode cũng dùng được qua **AWS CLI**, **AWS SDKs**, **AWS CDK**, và các công cụ AI (bài viết nêu ví dụ **Kiro**).

Kích hoạt bằng tham số `--deployment-config` với mode `EXPRESS` khi **create**, **update** hoặc **delete** stack. **Không cần sửa template**. Express mode **tắt rollback mặc định** để ưu tiên tốc độ lặp; muốn bật lại rollback thì đặt `disableRollback` thành `false` trong `deployment-config`, hoặc thiết lập cơ chế giám sát/dọn dẹp khi triển khai thất bại.

![Bật Express mode trên CloudFormation console](/images/3-BlogsTranslated/3.2-Blog2/figure-1.jpg)

Ví dụ lệnh tạo stack:

```bash
aws cloudformation create-stack \
   --stack-name my-app \
   --template-body file://template.yaml \
   --deployment-config '{"mode": "EXPRESS", "disableRollback": true}'
```

Bài viết cũng minh họa xây dựng hạ tầng tăng dần (IAM role → Lambda → SQS và event source mapping), đồng thời nhấn mạnh template IAM cần tuân thủ nguyên tắc **least privilege**.

Với AWS CDK, dùng lệnh `cdk deploy --express`: lệnh này lấy template CloudFormation được sinh ra và triển khai qua Express mode.

Express mode hoạt động với **mọi template CloudFormation hiện có** và hỗ trợ các tính năng như **change sets** và **nested stacks**. Khi bật Express mode trên **parent stack**, **tất cả nested stacks cũng dùng Express mode**. Nếu cần tài nguyên fully operational trước khi chuyển traffic hoặc kiểm thử, nên tiếp tục dùng chế độ mặc định có stabilization checks.

**3.3. Phạm vi áp dụng**

Tính năng có mặt tại **tất cả Region thương mại** của AWS và **không phát sinh chi phí bổ sung**. Bài viết cũng đề cập có thể tra cứu khả dụng theo Region và tài liệu liên quan qua AWS Capabilities by Region, CloudFormation documentation và AWS MCP Server.

#### 4. Nhận xét

Bài viết nêu rõ sự đánh đổi cốt lõi trong triển khai hạ tầng bằng CloudFormation: chờ stabilization checks giúp bảo đảm tài nguyên sẵn sàng phục vụ, nhưng làm chậm vòng lặp phát triển. Express mode tách biệt thời điểm “cấu hình đã được áp dụng” khỏi thời điểm “tài nguyên đã ổn định hoàn toàn”, nhờ đó rút ngắn phản hồi cho developer và công cụ AI khi chỉnh sửa hạ tầng liên tục.

Các ví dụ đo thời gian trong bài viết (SQS kèm DLQ, xóa Lambda có network interface) cho thấy lợi ích rõ nhất ở các thao tác vốn bị stabilization kéo dài. Đồng thời, việc tắt rollback mặc định đòi hỏi người dùng chủ động thiết kế cơ chế giám sát và xử lý lỗi nếu áp dụng cho môi trường quan trọng. Việc parent stack bật Express mode sẽ lan sang toàn bộ nested stacks cũng là điểm cần lưu ý khi tổ chức hạ tầng theo nhiều lớp stack.

Trong thực tế, Express mode phù hợp giai đoạn phát triển, kiểm thử thành phần và các thay đổi production chấp nhận eventual stabilization. Ngược lại, với thay đổi liên quan chuyển traffic, phát hành dịch vụ hoặc tài nguyên phụ thuộc chặt vào trạng thái sẵn sàng, chế độ mặc định vẫn là lựa chọn thận trọng hơn. Bài viết vì vậy không chỉ giới thiệu tính năng mới mà còn định hướng cách chọn chế độ triển khai theo mức rủi ro của từng thay đổi.
