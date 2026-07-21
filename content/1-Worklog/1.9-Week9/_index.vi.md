---
title: "Worklog Tuần 9"
date: 2026-06-12
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu tuần 9:

* Tạo User Pool và App Client trên AWS Cognito, cấu hình chính sách mật khẩu và xác minh email.
* Tích hợp Cognito Authorizer với API Gateway và kiểm tra xác thực JWT cho các API Endpoint.
* Tìm hiểu Amazon SES, xác minh email và cấu hình môi trường gửi nhận thử nghiệm.
* Cập nhật Lambda Create Todo để tích hợp SES và gửi thông báo khi tạo nhiệm vụ.
* Tối ưu IAM Role cho Lambda theo nguyên tắc Least Privilege, chỉ cấp quyền cần thiết cho DynamoDB và SES.
* Merge thay đổi lên GitHub và thực hiện review mã nguồn trong nhóm.

### Khung thời gian tuần: **12/06/2026 - 18/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 6 | - Khởi tạo User Pool và App Client trên dịch vụ AWS Cognito.<br>- Cấu hình quy tắc mật khẩu an toàn và cơ chế xác minh tài khoản qua Email verification code. | 12/06/2026 | 12/06/2026 | AWS Cognito Docs |
| Thứ 7 | - Tích hợp Cognito Authorizer vào Amazon API Gateway.<br>- Kiểm thử luồng bảo mật JWT Token (truy cập hợp lệ trả về 200 OK, không có Token trả về 401 Unauthorized). | 13/06/2026 | 13/06/2026 | API Gateway Auth |
| Chủ nhật / Thứ 2 | - Tìm hiểu dịch vụ gửi email Amazon SES (Simple Email Service).<br>- Xác minh (verify) địa chỉ email gửi và nhận thử nghiệm trong môi trường Sandbox. | 14/06/2026 | 15/06/2026 | AWS SES Guide |
| Thứ 3 | - Cập nhật mã nguồn hàm Lambda `Create Todo`, tích hợp gọi AWS SES SDK để tự động gửi email thông báo cho người dùng khi tạo công việc mới thành công. | 16/06/2026 | 16/06/2026 | Lambda SES Integration |
| Thứ 4 | - Rà soát và tối ưu hóa các IAM Roles cấp cho từng hàm Lambda theo nguyên tắc Least Privilege (chỉ cấp đúng quyền đọc/ghi bảng DynamoDB và quyền gửi SES). | 17/06/2026 | 17/06/2026 | AWS IAM Role |
| Thứ 5 | - Thực hiện Merge các nhánh tính năng lên nhánh `main`/`dev` trên GitHub Repository.<br>- Tổ chức họp nhóm review mã nguồn và kiểm thử lại toàn bộ luồng Backend API. | 18/06/2026 | 18/06/2026 | GitHub Review |

### Kết quả đạt được tuần 9:

* Thiết lập hệ thống quản lý người dùng bảo mật thành công với AWS Cognito User Pool.
* Bảo vệ toàn bộ API Gateway endpoints bằng JWT Authorizer chuẩn hóa.
* Cấu hình gửi email tự động thành công thông qua Amazon SES khi tạo Todo.
* Áp dụng thành công IAM Least Privilege Policy bảo vệ các hàm Lambda.
* Merge mã nguồn thành công và hoàn tất giai đoạn phát triển Backend API.