---
title: "Worklog Tuần 9"
date: 2026-06-15
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu tuần 9:

* Thiết lập hệ thống bảo mật xác thực bằng AWS Cognito User Pool.
* Bảo mật API Gateway bằng Cognito Authorizer.
* Cài đặt dịch vụ gửi email tự động qua Amazon SES.

### Khung thời gian tuần: **15/06/2026 – 21/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | - Khởi tạo Cognito User Pool và Client App trên AWS Console.<br>- Cấu hình thuộc tính người dùng bắt buộc gồm email, password. | 15/06/2026 | 15/06/2026 | AWS Cognito Docs |
| Thứ 3 | - Tích hợp Cognito Authorizer vào API Gateway.<br>- Kiểm tra luồng xác thực bằng cách gọi API không truyền token và nhận mã lỗi 401 Unauthorized. | 16/06/2026 | 16/06/2026 | API Gateway Auth |
| Thứ 4 | - Nghiên cứu dịch vụ Amazon SES (Simple Email Service).<br>- Thực hiện verify địa chỉ email gửi và nhận trên bảng điều khiển AWS SES. | 17/06/2026 | 17/06/2026 | AWS SES Docs |
| Thứ 5 | - Sửa đổi code của hàm Create Todo Lambda, tích hợp gọi Amazon SES để gửi email tự động thông báo khi user tạo công việc mới. | 18/06/2026 | 18/06/2026 | AWS SES SDK |
| Thứ 6 | - Tối ưu hóa phân quyền IAM Role gắn kèm với các hàm Lambda, áp dụng các chính sách bảo mật chặt chẽ nhất. | 19/06/2026 | 20/06/2026 | AWS IAM Role |
| Thứ 7 | - Đẩy mã nguồn cập nhật lên nhánh `dev` của Git.<br>- Họp nhóm tuần rà soát hệ thống bảo mật API. | 20/06/2026 | 20/06/2026 | Tài liệu nhóm |

### Kết quả đạt được tuần 9:

* Cấu hình thành công AWS Cognito hỗ trợ đăng ký, đăng nhập và phát hành JWT Token.
* Thiết lập phân quyền thành công, chỉ cho phép người dùng có Token hợp lệ gọi API.
* Tích hợp thành công tính năng gửi email báo cáo công việc.