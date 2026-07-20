---
title: "EKS version rollbacks"
date: 2026-07-01
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Nâng cấp cluster Amazon EKS với Kubernetes version rollbacks

#### 1. Thông tin nguồn

| Hạng mục | Nội dung |
|---|---|
| Tiêu đề gốc | Upgrade Amazon EKS clusters with confidence using Kubernetes version rollbacks |
| Nguồn | [AWS News Blog](https://aws.amazon.com/blogs/aws/upgrade-amazon-eks-clusters-with-confidence-using-kubernetes-version-rollbacks/) |
| Chủ đề | Amazon EKS, nâng cấp Kubernetes, rollback phiên bản |

![Hình minh họa từ bài viết gốc](/images/3-BlogsTranslated/3.1-Blog1/hero.png)

#### 2. Tóm tắt nội dung

Bài viết trình bày hạn chế lâu nay của việc nâng cấp control plane Kubernetes: Kubernetes mã nguồn mở không hỗ trợ rollback control plane, nên sau khi nâng cấp thường không thể quay lại phiên bản trước. Cộng đồng đang phát triển hướng tiếp cận emulated versions theo **KEP-4330**, nhưng trên thực tế nhiều tổ chức vẫn phải xây dựng cơ chế bù đắp phức tạp như bake period, stagger groups, automated sign-off và chu kỳ nâng cấp kéo dài hàng tháng.

Với tần suất phát hành **ba phiên bản minor mỗi năm**, các đội quản lý hàng trăm cluster — đặc biệt trong môi trường có quy định — thường trì hoãn nâng cấp vì thiếu niềm tin vào khả năng khôi phục khi sự cố. Hệ quả là cluster bị giữ ở phiên bản cũ, thiếu bản vá bảo mật và tiến gần mốc **extended support**.

AWS giới thiệu tính năng **Kubernetes version rollbacks** trên **Amazon Elastic Kubernetes Service (Amazon EKS)**, cho phép hoàn tác nâng cấp phiên bản Kubernetes trong vòng **bảy ngày** nếu phát sinh sự cố sau khi nâng cấp, đưa cluster về trạng thái hoạt động trước đó.

#### 3. Nội dung chính

**3.1. Cơ chế rollback**

Khác với emulated versions (giữ cluster ở trạng thái chuyển tiếp), EKS version rollback đưa cluster về **phiên bản đã được xác thực đầy đủ và từng chạy production**, không phải bản mô phỏng. Ví dụ trong bài viết: nâng cấp từ Kubernetes **1.34** lên **1.35**, nếu phát hiện lỗi tương thích có thể rollback về **1.34** trong bảy ngày mà không cần dựng lại cluster.

Việc rollback được thực hiện **một minor version mỗi lần**, cùng cách tiếp cận tăng dần như khi nâng cấp trên EKS. Trước khi thực hiện, EKS tự đánh giá mức sẵn sàng thông qua **cluster insights**, cảnh báo các hạng mục như tương thích phiên bản node hoặc phụ thuộc add-on. Trường hợp đã tự đánh giá rủi ro và cần thao tác nhanh, có thể dùng cờ `--force` để bỏ qua các kiểm tra đó.

Cơ chế trên áp dụng cho **mọi cluster EKS**, bất kể node do khách hàng tự quản lý hay do AWS quản lý.

![Tùy chọn rollback trên Amazon EKS console](/images/3-BlogsTranslated/3.1-Blog1/figure-1.png)

**3.2. Rollback trên EKS Auto Mode**

**EKS Auto Mode** tự động hóa quản lý compute, networking và storage. Với Auto Mode, **control plane và managed nodes phải được rollback đồng bộ**. Quá trình rollback node tuân thủ **pod disruption budgets**, nên thời gian phụ thuộc cấu hình.

AWS cung cấp **cancel API** để dừng rollback node tại bất kỳ thời điểm nào, phục vụ trường hợp cần điều chỉnh disruption budgets hoặc thay đổi hướng xử lý. Mặc định, EKS **không bỏ qua** disruption budgets trong quá trình rollback nhằm ưu tiên ổn định workload; người quản trị có thể tự chỉnh sửa hoặc gỡ budgets nếu cần tăng tốc.

![Thông tin cửa sổ rollback trên console](/images/3-BlogsTranslated/3.1-Blog1/figure-2.png)

**3.3. Quy trình thực hiện trên console**

Theo bài viết, quy trình gồm các bước: chọn cluster đã nâng cấp gần đây trên Amazon EKS console; khởi tạo version rollback và kiểm tra **rollback window** còn hiệu lực; rà soát rollback insights (trạng thái node và các cảnh báo cần xử lý); xác nhận thực hiện. Trong quá trình rollback, cluster vẫn duy trì hoạt động. Thời gian rollback control plane khoảng **20 phút**, tương đương một lần nâng cấp thông thường. Với cluster Auto Mode, node được rollback theo cấu hình disruption budget.

![Rollback insights trước khi thực hiện](/images/3-BlogsTranslated/3.1-Blog1/figure-3.png)

![Quá trình rollback đang diễn ra](/images/3-BlogsTranslated/3.1-Blog1/figure-4.png)

**3.4. Phạm vi áp dụng và chi phí**

Tính năng được cung cấp **không phát sinh chi phí bổ sung** tại **tất cả Region thương mại** có Amazon EKS. Người dùng chỉ trả chi phí EKS và compute thông thường.

| Hạng mục | Phạm vi |
|---|---|
| Rollback control plane | Mọi cluster EKS |
| Rollback node | Cluster chạy **EKS Auto Mode** |
| Phiên bản hỗ trợ | Kubernetes trong **standard support** và **extended support** |

#### 4. Nhận xét

Nội dung bài viết làm rõ một vấn đề thực tiễn trong vận hành Kubernetes: nâng cấp control plane vốn khó đảo ngược, nên nhiều tổ chức trì hoãn cập nhật và chấp nhận rủi ro bảo mật cũng như chi phí extended support. Việc Amazon EKS cung cấp rollback trong bảy ngày thay đổi cách tiếp cận quản trị phiên bản, vì quản trị viên có “lưới an toàn” rõ ràng thay vì phải dựng lại cluster khi sự cố xảy ra.

Về mặt kỹ thuật, điểm đáng chú ý là rollback đưa cluster về phiên bản production đã được xác thực, khác với hướng emulated versions chỉ giữ trạng thái chuyển tiếp. Cơ chế đánh giá qua cluster insights và tùy chọn `--force` thể hiện sự cân bằng giữa an toàn mặc định và linh hoạt vận hành. Với EKS Auto Mode, việc rollback đồng bộ control plane và node, đồng thời tôn trọng pod disruption budgets, cho thấy AWS ưu tiên ổn định workload hơn tốc độ hoàn tất thao tác.

Từ góc độ học tập và vận hành thực tế, bài viết hữu ích khi xây dựng quy trình nâng cấp có kiểm soát: cần xác định cửa sổ rollback, rà soát readiness trước khi thực hiện, và chuẩn bị phương án điều chỉnh disruption budgets nếu dùng Auto Mode. Tính năng này đặc biệt phù hợp môi trường yêu cầu tính sẵn sàng cao, có quy định tuân thủ, hoặc quản lý nhiều cluster nơi việc trì hoãn nâng cấp từng là lựa chọn phổ biến.
