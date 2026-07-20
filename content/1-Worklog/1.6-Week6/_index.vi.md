---
title: "Worklog Tuần 6"
date: 2026-05-25
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu tuần 6:

* **Hệ thống lại các kiến thức trọng tâm từ tuần trước:** Các dịch vụ hỗ trợ của AWS, quản trị AWS CLI trên EC2 và mô hình web độ sẵn sàng cao.
* **Khảo sát tổng quan và xây dựng tư duy chiến lược** khi dịch chuyển hệ thống (Cloud Migration) lên AWS.
* **Làm chủ quy trình di chuyển máy chủ ảo (VM)** bằng VM Import/Export và đồng bộ cơ sở dữ liệu bằng cặp công cụ AWS DMS & AWS SCT.
* **Kiểm soát an toàn bảo mật**, quản lý lưu lượng mạng và dọn dẹp các tài nguyên thử nghiệm sau khi hoàn tất.

### Khung thời gian tuần: **25/05/2026 – 31/05/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | Ôn tập lại nội dung tuần cũ về phương thức quản lý AWS CLI, hạ tầng web chịu lỗi và các công cụ bổ trợ liên quan. | 25/05/2026 | 25/05/2026 | [Hành trình lên đám mây – Di chuyển](https://cloudjourney.awsstudygroup.com/2-migrate/) |
| Thứ 3 | Tìm hiểu quy trình và các bước lập kế hoạch chuyển đổi hạ tầng: Đánh giá hệ thống hiện tại, phân tích rủi ro downtime, bảo mật và dự toán ngân sách phát sinh. | 26/05/2026 | 26/05/2026 | [Hành trình lên đám mây – Di chuyển](https://cloudjourney.awsstudygroup.com/2-migrate/) |
| Thứ 4 - 5 | Thực hành kỹ thuật VM Import/Export: Nghiên cứu các bước chuẩn bị file máy chủ ảo hóa cục bộ, đồng bộ lên S3 và khởi tạo thành các Amazon Machine Image (AMI) hoặc EC2 instance. | 27/05/2026 | 28/05/2026 | [Bài thực hành 14](https://000014.awsstudygroup.com/) |
| Thứ 6 - 7 | Ứng dụng AWS SCT để chuyển đổi lược đồ (schema) khác hệ quản trị và dùng AWS DMS để thực hiện cấu hình đồng bộ dữ liệu (toàn bộ hoặc CDC) từ nguồn đến đích. | 29/05/2026 | 30/05/2026 | [Phòng thí nghiệm 43](https://000043.awsstudygroup.com/) |
| Chủ Nhật | Cấu hình Security Group, Route Table, kiểm tra Logs và theo dõi tiến độ migration qua CloudWatch. <br><br> **Dọn dẹp:** Giải phóng các bản sao lưu, bộ nhớ S3, EC2, RDS đã tạo để tối ưu chi phí tài khoản. | 31/05/2026 | 31/05/2026 | [Phòng thí nghiệm 43](https://000043.awsstudygroup.com/) <br> [Bài thực hành 14](https://000014.awsstudygroup.com/) |

### Kết quả đạt được tuần 6:

* Làm chủ tư duy và các giai đoạn triển khai cốt lõi trong một dự án dịch chuyển hạ tầng lên nền tảng đám mây AWS.

* Thành thạo thao tác đóng gói, chuyển đổi và khởi chạy các máy chủ ảo hóa on-premises lên đám mây thông qua VM Import/Export.

* Có khả năng thiết lập, vận hành hệ thống chuyển đổi cơ sở dữ liệu đồng bộ và liên tục bằng bộ đôi giải pháp AWS DMS và AWS SCT.

* Thành thạo quy trình kiểm tra toàn vẹn dữ liệu, giám sát trạng thái kết nối mạng và dọn dẹp hạ tầng lab để tránh hao phí tài nguyên.
