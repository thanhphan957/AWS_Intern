---
title: "Worklog Tuần 7"
date: 2026-06-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu tuần 7:

* Thiết kế chi tiết cơ sở dữ liệu NoSQL DynamoDB cho dự án.
* Viết đặc tả các endpoint API RESTful.
* Nghiên cứu và cài đặt công cụ lập trình hạ tầng dạng mã (IaC).

### Khung thời gian tuần: **01/06/2026 – 07/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | - Thiết kế cấu trúc bảng DynamoDB: Xác định Partition Key (userId), Sort Key (todoId) để quản lý dữ liệu riêng biệt theo từng user. | 01/06/2026 | 01/06/2026 | DynamoDB Design |
| Thứ 3 | - Viết tài liệu đặc tả các API endpoints chi tiết: HTTP Method, URL, Body Request, Response (mã 200, 400, 500). | 02/06/2026 | 02/06/2026 | API Spec |
| Thứ 4 | - Học cách sử dụng AWS Serverless Application Model (SAM) để quản lý hạ tầng dạng mã (IaC). | 03/06/2026 | 03/06/2026 | AWS SAM Docs |
| Thứ 5 | - Khởi tạo repository Git chứa mã nguồn trên GitHub.<br>- Thiết lập quy trình làm việc phân nhánh Git Branching (main, dev). | 04/06/2026 | 04/06/2026 | Git Guides |
| Thứ 6 | - Cài đặt công cụ AWS SAM CLI và Docker trên máy tính cá nhân.<br>- Chạy DynamoDB Local trong container để phục vụ kiểm thử offline. | 05/06/2026 | 06/06/2026 | SAM CLI Guides |
| Thứ 7 | - Họp nhóm phân chia công việc phát triển các hàm Lambda cho từng thành viên trong nhóm. | 06/06/2026 | 06/06/2026 | Tài liệu nhóm |

### Kết quả đạt được tuần 7:

* Thiết kế bảng DynamoDB tối ưu cho nghiệp vụ Todo (Partition Key, Sort Key).
* Hoàn thiện tài liệu đặc tả các endpoints của API Gateway.
* Khởi tạo thành công repo Git và thiết lập môi trường phát triển cục bộ với AWS SAM.