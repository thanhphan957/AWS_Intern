---
title: "Worklog Tuần 10"
date: 2026-06-22
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục tiêu tuần 10:

* Xây dựng giao diện Front-end (UI) tương tác trực tiếp với API.
* Phát triển các tính năng đăng nhập và gọi API từ Front-end.
* Triển khai giao diện tĩnh lên AWS S3 và CloudFront.

### Khung thời gian tuần: **22/06/2026 – 28/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | - Phát triển cấu trúc giao diện Front-end HTML/CSS/JS sử dụng Bootstrap để hiển thị danh sách công việc Todo. | 22/06/2026 | 22/06/2026 | Front-end Design |
| Thứ 3 | - Viết mã nguồn JavaScript tích hợp với thư viện SDK Cognito để gọi API đăng ký, đăng nhập và lấy Token xác thực. | 23/06/2026 | 23/06/2026 | Cognito SDK |
| Thứ 4 | - Phát triển chức năng gọi API Gateway bằng lệnh Fetch API gửi kèm token xác thực JWT trong Header Authorization. | 24/06/2026 | 25/06/2026 | Fetch API Guide |
| Thứ 5 | - Khởi tạo S3 Bucket cấu hình tính năng Static Website Hosting và tải các tệp tin Front-end lên. | 25/06/2026 | 26/06/2026 | S3 Website |
| Thứ 6 | - Cấu hình Amazon CloudFront phân phối nội dung tĩnh từ S3, thiết lập chứng chỉ bảo mật SSL/TLS qua ACM. | 26/06/2026 | 27/06/2026 | AWS CloudFront |
| Thứ 7 | - Chạy kiểm thử End-to-End toàn diện từ khâu đăng ký, đăng nhập, thêm và hoàn thành Todo trực tiếp trên trang web. | 27/06/2026 | 27/06/2026 | Test Report |

### Kết quả đạt được tuần 10:

* Giao diện Front-end thân thiện bằng HTML/CSS/JS kết hợp thư viện Bootstrap.
* Tích hợp thành công SDK đăng nhập Cognito và xử lý token JWT.
* Triển khai trang web tĩnh chạy thực tế trên S3 + CloudFront có HTTPS bảo mật.