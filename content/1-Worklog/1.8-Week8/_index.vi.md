---
title: "Worklog Tuần 8"
date: 2026-06-08
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:

* Lập trình 5 hàm Lambda CRUD (Create, Read, Update, Delete) cho các công việc Todo.
* Tích hợp các hàm Lambda với Amazon API Gateway.
* Triển khai bản thử nghiệm API đầu tiên lên tài khoản AWS.

### Khung thời gian tuần: **08/06/2026 – 14/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | - Viết mã nguồn cho hàm Lambda xử lý nghiệp vụ tạo Todo mới (Create Todo) sử dụng thư viện AWS SDK để tương tác với DynamoDB. | 08/06/2026 | 08/06/2026 | AWS SDK Guide |
| Thứ 3 | - Lập trình các hàm Lambda Lấy danh sách Todo (Get List) và Lấy thông tin chi tiết một Todo (Get Item) dựa trên userId. | 09/06/2026 | 09/06/2026 | AWS SDK Guide |
| Thứ 4 | - Phát triển các hàm Lambda cập nhật trạng thái Todo (Update Todo - sửa tiêu đề, đánh dấu hoàn thành) và Xóa Todo (Delete Todo). | 10/06/2026 | 10/06/2026 | AWS SDK Guide |
| Thứ 5 | - Cấu hình tệp tin `template.yaml` của AWS SAM để khai báo API Gateway, các hàm Lambda và bảng DynamoDB. | 11/06/2026 | 11/06/2026 | AWS SAM Template |
| Thứ 6 | - Chạy kiểm thử các hàm Lambda cục bộ bằng lệnh `sam local start-api`.<br>- Sử dụng Postman để kiểm tra tính đúng đắn của các endpoint. | 12/06/2026 | 13/06/2026 | Postman Test |
| Thứ 7 | - Chạy lệnh `sam deploy --guided` để triển khai mã nguồn lên môi trường AWS Dev.<br>- Xác nhận deploy thành công và lưu lại API Gateway Endpoint. | 13/06/2026 | 13/06/2026 | AWS SAM Deploy |

### Kết quả đạt được tuần 8:

* Viết thành công mã nguồn Node.js/Python cho các hàm Lambda CRUD.
* Cấu hình API Gateway tích hợp Proxy Lambda và xử lý CORS.
* Triển khai thành công ứng dụng SAM lên môi trường AWS Dev.