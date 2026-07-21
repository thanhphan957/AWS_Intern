---
title: "Worklog Tuần 4"
date: 2026-05-08
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu tuần 4:

* Tìm hiểu AWS IAM gồm User, Group, Policy, Role và nguyên tắc Least Privilege trong quản lý quyền truy cập.
* Xây dựng IAM Policy dạng JSON và tạo IAM Role cho phép EC2 truy cập Amazon S3.
* Nghiên cứu kiến trúc Amazon VPC với Subnet, Route Table, Internet Gateway, NAT Gateway và Elastic IP.
* Thực hành xây dựng VPC tùy chỉnh gồm Public Subnet và Private Subnet, cấu hình định tuyến mạng.
* Triển khai EC2 Bastion Host trong Public Subnet và EC2 Server trong Private Subnet, thiết lập NAT Gateway để cập nhật hệ thống.
* Dọn dẹp tài nguyên VPC, NAT Gateway, Elastic IP để tránh phát sinh chi phí.

### Khung thời gian tuần: **08/05/2026 - 14/05/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 6 | - Tìm hiểu AWS IAM bao gồm các khái niệm: User, Group, Policy, Role.<br>- Nghiên cứu nguyên tắc phân quyền tối thiểu (Least Privilege) trong quản lý truy cập bảo mật. | 08/05/2026 | 08/05/2026 | AWS IAM Docs |
| Thứ 7 | - Thực hành viết IAM Policy dạng JSON.<br>- Khởi tạo IAM Role và gán cho máy chủ EC2 cho phép truy cập tài nguyên Amazon S3 an toàn. | 09/05/2026 | 09/05/2026 | AWS IAM Lab |
| Chủ nhật / Thứ 2 | - Nghiên cứu chuyên sâu kiến trúc mạng Amazon VPC.<br>- Tìm hiểu chi tiết vai trò của Subnet, Route Table, Internet Gateway (IGW), NAT Gateway và Elastic IP. | 10/05/2026 | 11/05/2026 | AWS VPC Guide |
| Thứ 3 | - Thực hành xây dựng VPC tùy chỉnh (Custom VPC).<br>- Tạo Public Subnet và Private Subnet, cấu hình các bảng định tuyến (Route Table) tương ứng. | 12/05/2026 | 12/05/2026 | AWS VPC Lab |
| Thứ 4 | - Triển khai EC2 Bastion Host tại Public Subnet và máy chủ EC2 tại Private Subnet.<br>- Kết nối SSH an toàn vào Private EC2 thông qua Bastion Host.<br>- Cấu hình NAT Gateway cho Private Subnet để máy chủ ra Internet cập nhật phần mềm. | 13/05/2026 | 13/05/2026 | NAT Gateway Lab |
| Thứ 5 | - Họp nhóm tổng kết tuần 4.<br>- Dọn dẹp và xóa toàn bộ tài nguyên VPC, NAT Gateway, Elastic IP, EC2 để tối ưu chi phí AWS. | 14/05/2026 | 14/05/2026 | Tài liệu nhóm |

### Kết quả đạt được tuần 4:

* Hiểu sâu quản trị phân quyền bằng AWS IAM và tuân thủ chặt chẽ nguyên tắc Least Privilege.
* Tạo thành công IAM Policy JSON và phân quyền IAM Role cho EC2 truy cập S3.
* Làm chủ kỹ năng xây dựng kiến trúc hạ tầng mạng VPC tùy chỉnh có Public và Private Subnet.
* Triển khai mô hình kết nối an toàn qua Bastion Host và thiết lập NAT Gateway thành công.
* Dọn dẹp sạch sẽ tài nguyên thử nghiệm sau khi hoàn thành lab.