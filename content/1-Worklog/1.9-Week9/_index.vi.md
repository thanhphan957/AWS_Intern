---
title: "Worklog Tuần 9"
date: 2026-06-15
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu tuần 9:

* **Ôn tập nội dung Tuần 8** về 4 trụ cột cốt lõi: Bảo mật, độ tin cậy, hiệu suất và tối ưu hóa chi phí.
* **Tiếp cận lộ trình chuyển dịch hệ thống** từ kiến trúc khối ứng dụng truyền thống (Monolith) sang mô hình vi dịch vụ (Microservices) và Serverless.
* **Khai phá quy trình triển khai tự động CI/CD**, cơ chế tách biệt cơ sở dữ liệu riêng, hệ thống gửi tin nhắn/sự kiện bất đồng bộ và hạ tầng container nâng cao.

### Khung thời gian tuần: **15/06/2026 – 21/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | Tổng duyệt bài học tuần trước. Nghiên cứu chiến lược hiện đại hóa phần mềm, phương pháp chia tách ngữ cảnh và giảm thiểu sự phụ thuộc giữa các thành phần hệ thống. | 15/06/2026 | 15/06/2026 | [Hành trình lên đám mây – Hiện đại hóa](https://cloudjourney.awsstudygroup.com/4-modernize/) |
| Thứ 3 - 4 | Thực hành quy trình chuyển đổi ứng dụng nguyên khối (Java Spring Boot/RDBMS): Phân tách giao diện, cơ sở dữ liệu và thiết lập môi trường chạy thử nghiệm trên đám mây. | 16/06/2026 | 17/06/2026 | [Bài thực hành 50](https://000050.awsstudygroup.com/) |
| Thứ 5 - 6 | Xây dựng pipeline CI/CD tự động kiểm thử và đóng gói; thực hành phân rã ứng dụng thành các microservices độc lập sử dụng database riêng. Cấu hình giao tiếp bất đồng bộ qua SQS/SNS để xử lý sự kiện. | 18/06/2026 | 19/06/2026 | [Phòng thí nghiệm 51](https://000051.awsstudygroup.com/), [52](https://000052.awsstudygroup.com/), [53](https://000053.awsstudygroup.com/), [54](https://000054.awsstudygroup.com/) |
| Thứ 7 | Triển khai mô hình phi máy chủ (Serverless): Nghiên cứu kiến trúc ứng dụng SPA tích hợp xác thực Amazon Cognito, quản lý luồng qua API Gateway, Lambda, Step Functions và giám sát bằng X-Ray. | 20/06/2026 | 20/06/2026 | [Phòng thí nghiệm 55](https://000055.awsstudygroup.com/), [81](https://000081.awsstudygroup.com/) |
| Chủ Nhật | Tìm hiểu hạ tầng dịch vụ container nâng cao: Amazon EKS, AWS Fargate, Lightsail Container gắn liền với luồng CodePipeline/GitHub. <br><br> **Dọn dẹp:** Xóa sạch các demo microservices, API Gateway, Lambda, Cognito và pipeline để tránh phát sinh chi phí ngoài ý muốn. | 21/06/2026 | 21/06/2026 | [Phòng thí nghiệm 46](https://000046.awsstudygroup.com/), [126](https://000126.awsstudygroup.com/) <br> [Hành trình lên đám mây – Hiện đại hóa](https://cloudjourney.awsstudygroup.com/4-modernize/) |

### Kết quả đạt được tuần 9:

* Hiểu sâu sắc xu hướng công nghệ và lợi ích khi chuyển dịch hệ thống lên kiến trúc vi dịch vụ và điện toán phi máy chủ Serverless.

* Thành thạo quy trình tự động hóa CI/CD, phân tách dữ liệu độc lập cho từng dịch vụ và thiết lập mô hình trao đổi tin nhắn bất đồng bộ thông qua SQS/SNS.

* Làm chủ phương thức vận hành hạ tầng container hiện đại dựa trên nền tảng AWS EKS/Fargate và thiết lập hệ thống bảo mật, giám sát đầu cuối cho ứng dụng.
