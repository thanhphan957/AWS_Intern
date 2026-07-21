---
title: "Worklog Tuần 8"
date: 2026-06-05
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:

* Phát triển Lambda Create Todo sử dụng AWS SDK để thao tác lưu trữ dữ liệu trên DynamoDB.
* Xây dựng các hàm Lambda Get List và Get Item để truy vấn danh sách và chi tiết Todo.
* Triển khai chức năng Update Todo và Delete Todo bằng Lambda.
* Cấu hình SAM Template để khai báo API Gateway, Lambda và DynamoDB.
* Kiểm thử API cục bộ bằng SAM Local, Postman và kiểm tra dữ liệu JSON trả về.
* Triển khai ứng dụng lên AWS bằng SAM Deploy và lấy API Endpoint hoạt động.

### Khung thời gian tuần: **05/06/2026 - 11/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 6 | - Viết mã nguồn hàm Lambda `Create Todo` sử dụng AWS SDK để lưu trữ dữ liệu nhiệm vụ mới vào DynamoDB. | 05/06/2026 | 05/06/2026 | AWS Lambda SDK |
| Thứ 7 | - Xây dựng các hàm Lambda `Get List Todo` (lấy danh sách) và `Get Item Todo` (lấy chi tiết một nhiệm vụ) theo `userId`. | 06/06/2026 | 06/06/2026 | DynamoDB Query |
| Chủ nhật / Thứ 2 | - Triển khai các hàm Lambda `Update Todo` (cập nhật nội dung/trạng thái) và `Delete Todo` (xóa nhiệm vụ khỏi DynamoDB). | 07/06/2026 | 08/06/2026 | Lambda CRUD Code |
| Thứ 3 | - Soạn thảo và cấu hình tập tin `template.yaml` của AWS SAM để khai báo các tài nguyên API Gateway, các hàm Lambda và bảng DynamoDB. | 09/06/2026 | 09/06/2026 | SAM Template Guide |
| Thứ 4 | - Thực hiện kiểm thử API cục bộ bằng `sam local start-api` kết hợp với Postman.<br>- Kiểm tra chính xác định dạng dữ liệu JSON trả về và xử lý mã lỗi HTTP response. | 10/06/2026 | 10/06/2026 | Postman & SAM Local |
| Thứ 5 | - Triển khai ứng dụng Serverless lên hạ tầng AWS Cloud bằng lệnh `sam deploy --guided`.<br>- Thu thập và lưu lại API Gateway Live Endpoint phục vụ tích hợp. | 11/06/2026 | 11/06/2026 | SAM Deploy Lab |

### Kết quả đạt được tuần 8:

* Lập trình hoàn chỉnh 5 hàm Lambda xử lý trọn vẹn chu trình CRUD Todo.
* Khai báo hạ tầng thành công qua tệp cấu hình AWS SAM Template (`template.yaml`).
* Kiểm thử nội bộ 100% các API Endpoints bằng Postman và SAM Local thành công.
* Triển khai SAM Stack thành công lên môi trường AWS Cloud và lấy thành công live API Gateway Endpoint.