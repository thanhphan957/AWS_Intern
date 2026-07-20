---
title: "Worklog Tuần 4"
date: 2026-05-11
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu tuần 4:

* Nghiên cứu AWS IAM (Identity and Access Management) và phân quyền bảo mật.
* Học cấu trúc mạng Amazon VPC (Virtual Private Cloud).
* Xây dựng kiến trúc mạng bảo mật trên môi trường đám mây.

### Khung thời gian tuần: **11/05/2026 – 17/05/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | - Tìm hiểu AWS IAM (Identity and Access Management).<br>- Phân biệt IAM User, Group, Policy (Chính sách), Role (Vai trò).<br>- Nghiên cứu nguyên tắc phân quyền tối thiểu (Least Privilege). | 11/05/2026 | 11/05/2026 | AWS IAM Docs |
| Thứ 3 | - Thực hành tạo chính sách IAM tùy chỉnh dưới dạng JSON.<br>- Tạo IAM Role cho phép máy chủ EC2 chỉ có quyền đọc ghi tệp tin trên Amazon S3. | 12/05/2026 | 12/05/2026 | AWS IAM Policies |
| Thứ 4 | - Học lý thuyết về Amazon VPC (Virtual Private Cloud).<br>- Tìm hiểu các thành phần: Subnet, Route Table, Internet Gateway, NAT Gateway. | 13/05/2026 | 13/05/2026 | AWS VPC Docs |
| Thứ 5 | - Thực hành xây dựng một VPC tùy chỉnh gồm 1 Public Subnet và 1 Private Subnet.<br>- Tạo Internet Gateway và cấu hình Route Table điều tuyến traffic ra ngoài Internet. | 14/05/2026 | 14/05/2026 | AWS VPC Practice |
| Thứ 6 | - Triển khai một máy chủ EC2 trong Public Subnet đóng vai trò làm Bastion Host.<br>- Triển khai một EC2 trong Private Subnet và cấu hình NAT Gateway để cho phép tải cập nhật phần mềm. | 15/05/2026 | 15/05/2026 | AWS VPC Bastion |
| Thứ 7 | - Họp nhóm tuần với mentor.<br>- Thực hiện dọn dẹp các tài nguyên mạng (NAT Gateway, VPC, EC2) để tránh bị tính phí quá hạn Free Tier. | 16/05/2026 | 16/05/2026 | Tài liệu nhóm |

### Kết quả đạt được tuần 4:

* Hiểu sâu về IAM User, Group, Policy, Role và nguyên tắc cấp quyền tối thiểu.
* Thiết kế và cấu hình thành công một VPC tùy chỉnh với Subnet công khai và bảo mật.
* Kết nối thành công máy chủ trong subnet bảo mật thông qua Bastion Host.