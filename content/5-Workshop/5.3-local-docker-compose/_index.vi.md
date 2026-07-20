---
title : "Phát triển local với Docker Compose"
date : 2024-01-01
weight : 3
chapter : false
pre : " <b> 5.3. </b> "
---

#### Mục tiêu triển khai local

Môi trường local dùng Docker Compose để kiểm tra ứng dụng trước khi đưa lên AWS. Đây là bước cần thiết vì nó giúp tách lỗi ứng dụng khỏi lỗi hạ tầng cloud. Nếu ứng dụng chưa chạy ổn định ở local, việc triển khai lên EKS sẽ làm việc phân tích lỗi phức tạp hơn.

Docker Compose chạy đầy đủ các microservice cần thiết cho luồng nghiệp vụ chính, bao gồm frontend, product catalog, cart, checkout, currency, shipping, payment, email, Redis và PostgreSQL.

#### Vai trò của môi trường local

+ Kiểm tra nhanh mã nguồn và cấu hình service.
+ Xác minh luồng duyệt sản phẩm, thêm vào giỏ hàng và thanh toán.
+ Kiểm tra Redis dùng cho giỏ hàng và PostgreSQL dùng làm platform database.
+ Tạo bằng chứng rằng ứng dụng hoạt động đúng trước khi triển khai lên AWS.

#### Nội dung triển khai

- [Khởi chạy Docker Compose](5.3.1-compose-up/) trình bày quá trình build và chạy các container.
- [Kiểm tra stack local](5.3.2-local-verification/) trình bày smoke test, kiểm tra database và kiểm thử giao diện.

Việc tách hai bước này giúp báo cáo rõ ràng hơn: một phần nói về dựng môi trường, phần còn lại nói về xác minh kết quả vận hành.
