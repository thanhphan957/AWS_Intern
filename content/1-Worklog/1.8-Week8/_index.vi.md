---
title: "Worklog Tuần 8"
date: 2026-06-08
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:

* **Hệ thống lại toàn bộ nội dung Tuần 7** về tự động hóa với Lambda, hệ thống giám sát và triển khai hạ tầng bằng mã.
* **Nghiên cứu chuyên sâu và áp dụng thực tế** 4 trụ cột cốt lõi của AWS bao gồm: Bảo mật, Độ tin cậy, Hiệu suất vận hành và Tối ưu hóa chi phí.
* **Làm quen và cấu hình đồng bộ** bộ giải pháp nâng cao từ phân quyền bảo mật, kết nối mạng diện rộng, đóng gói ứng dụng cho đến phân tích dữ liệu chi phí tài nguyên.

### Khung thời gian tuần: **08/06/2026 – 14/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 - 3 | Rà soát bài học tuần trước. Nghiên cứu Trụ cột Bảo mật: Cấu hình phân quyền tập trung với AWS IAM Identity Center/SSO; đánh giá an toàn hạ tầng qua Security Hub; triển khai tường lửa AWS WAF bảo vệ API và quản lý mã hóa dữ liệu bằng AWS KMS. | 08/06/2026 | 09/06/2026 | [Bài thực hành 12](https://000012.awsstudygroup.com/), [30](https://000030.awsstudygroup.com/), [18](https://000018.awsstudygroup.com/), [26](https://000026.awsstudygroup.com/) / [Phòng lab 33](https://000033.awsstudygroup.com/) |
| Thứ 4 - 5 | Triển khai Trụ cột Độ tin cậy: Thiết lập chiến lược và tự động hóa quy trình sao lưu/khôi phục dữ liệu bằng AWS Backup; cấu hình kết nối liên kết nhiều mạng VPC thông qua VPC Peering và Transit Gateway để mở rộng quy mô hệ thống. | 10/06/2026 | 11/06/2026 | [Bài thực hành 13](https://000013.awsstudygroup.com/), [19](https://000019.awsstudygroup.com/), [20](https://000020.awsstudygroup.com/) |
| Thứ 6 | Thực hiện Trụ cột Hiệu suất & Triển khai: Củng cố kiến thức đóng gói ứng dụng với Dockerfile; thực hành khởi chạy và quản lý các container trên dịch vụ Amazon ECS, tích hợp tự động hóa quy trình CI/CD bằng AWS CodePipeline. | 12/06/2026 | 12/06/2026 | [Bài thực hành 15](https://000015.awsstudygroup.com/), [16](https://000016.awsstudygroup.com/), [17](https://000017.awsstudygroup.com/) |
| Thứ 7 | Áp dụng Trụ cột Tối ưu chi phí: Tìm hiểu giải pháp sử dụng Savings Plans, Reserved Instances cho EC2/RDS và trực quan hóa chi phí. Tiếp cận phương pháp phân tích, bóc tách ngân sách nâng cao sử dụng AWS Glue và Amazon Athena. | 13/06/2026 | 13/06/2026 | [Phòng thí nghiệm 42](https://000042.awsstudygroup.com/), [40](https://000040.awsstudygroup.com/) |
| Chủ Nhật | Tổng hợp kiến thức và đối chiếu 4 trụ cột tối ưu với hạ tầng thực tế sau khi dịch chuyển lên đám mây. <br><br> **Dọn dẹp:** Xóa bỏ toàn bộ tài nguyên lab (mẫu thử WAF, backup plan, kết nối mạng, các cluster ECS và pipeline) để tránh bị tính phí ngoài ý muốn. | 14/06/2026 | 14/06/2026 | [Hành trình lên đám mây – Tối ưu hóa](https://cloudjourney.awsstudygroup.com/3-optimize/) |

### Kết quả đạt được tuần 8:

* Hiểu rõ bản chất và biết cách áp dụng bộ khung 4 trụ cột tối ưu chuẩn kiến trúc AWS đám mây vào thực tế vận hành doanh nghiệp.

* Sử dụng thành thạo nhóm công cụ bảo mật nâng cao (Security Hub, WAF, KMS, Identity Center) và các phương thức thiết lập mạng an toàn, sao lưu dữ liệu tự động.

* Nắm vững quy trình đóng gói container và tự động hóa deploy ứng dụng lên Amazon ECS qua pipeline, đồng thời có tư duy bóc tách, tối ưu hóa ngân sách tài nguyên bằng các công cụ phân tích dữ liệu AWS.
