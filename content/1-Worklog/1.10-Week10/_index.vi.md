---
title: "Worklog Tuần 10"
date: 2026-06-19
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục tiêu tuần 10:

* Xây dựng giao diện Todo List bằng HTML, CSS và Bootstrap.
* Tích hợp Cognito SDK vào JavaScript để xử lý xác thực người dùng và quản lý token.
* Kết nối Frontend với Todo API Gateway thông qua Fetch API và JWT Authorization.
* Triển khai website tĩnh trên Amazon S3 và cấu hình Static Website Hosting.
* Thiết lập CloudFront với S3 Origin và cấu hình chứng chỉ ACM cho HTTPS.
* Kiểm thử toàn bộ luồng người dùng gồm đăng ký, đăng nhập, quản lý Todo và đăng xuất.

### Khung thời gian tuần: **19/06/2026 - 25/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 6 | - Lập trình xây dựng giao diện ứng dụng Todo List hiển thị danh sách công việc bằng HTML5, CSS3 và khung giao diện Bootstrap. | 19/06/2026 | 19/06/2026 | Frontend UI Design |
| Thứ 7 | - Tích hợp thư viện Amazon Cognito Identity SDK vào JavaScript.<br>- Xử lý các luồng Đăng ký tài khoản, Đăng nhập, lưu giữ JWT Token vào LocalStorage và tự động làm mới Token. | 20/06/2026 | 20/06/2026 | Cognito SDK Integration |
| Chủ nhật / Thứ 2 | - Viết mã JavaScript kết nối Frontend với API Gateway thông qua `fetch()` API.<br>- Đính kèm JWT Token trong request header `Authorization: Bearer <token>` cho tất cả các thao tác CRUD Todo. | 21/06/2026 | 22/06/2026 | Fetch API Integration |
| Thứ 3 | - Tạo S3 Bucket trên AWS Console, tải toàn bộ mã nguồn web tĩnh lên và bật tính năng Static Website Hosting. | 23/06/2026 | 23/06/2026 | AWS S3 Hosting |
| Thứ 4 | - Khởi tạo Amazon CloudFront Distribution kết nối với S3 Origin.<br>- Tạo và cấu hình chứng chỉ SSL/TLS từ AWS Certificate Manager (ACM) để kích hoạt chuẩn mã hóa HTTPS an toàn. | 24/06/2026 | 24/06/2026 | CloudFront & ACM |
| Thứ 5 | - Thực hiện kiểm thử toàn bộ trải nghiệm End-to-End người dùng: Đăng ký -> Xác minh Email -> Đăng nhập -> Tạo Todo -> Cập nhật Todo -> Xóa Todo -> Đăng xuất. | 25/06/2026 | 25/06/2026 | E2E Testing |

### Kết quả đạt được tuần 10:

* Xây dựng thành công giao diện trang web Todo List hiện đại, tương thích trên các thiết bị.
* Tích hợp thành công Cognito SDK cho luồng Auth trên giao diện người dùng.
* Kết nối mượt mà giữa Frontend và Backend API qua Fetch API có truyền JWT Token.
* Triển khai thành công website tĩnh lên S3, phân phối qua CDN CloudFront đạt chuẩn mã hóa HTTPS bảo mật.
* Hoàn thành kiểm thử End-to-End toàn bộ chức năng hệ thống không phát sinh lỗi.