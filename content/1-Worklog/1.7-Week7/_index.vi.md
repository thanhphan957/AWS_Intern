---
title: "Worklog Tuần 7"
date: 2026-05-29
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu tuần 7:

* Thiết kế cấu trúc DynamoDB với Partition Key (userId) và Sort Key (todoId) để phân tách dữ liệu người dùng.
* Xây dựng tài liệu API Specification gồm HTTP Methods, Endpoints, Request và Response Schema.
* Tìm hiểu AWS SAM để triển khai Infrastructure as Code cho ứng dụng Serverless.
* Khởi tạo GitHub Repository và thiết lập quy trình làm việc với các nhánh chính, phát triển.
* Cài đặt AWS SAM CLI, Docker và thiết lập DynamoDB Local cho môi trường phát triển.
* Họp nhóm, phân công nhiệm vụ phát triển Lambda cho các thành viên.

### Khung thời gian tuần: **29/05/2026 - 04/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 6 | - Thiết kế cấu trúc bảng DynamoDB chi tiết với Partition Key (`userId`) và Sort Key (`todoId`) nhằm đảm bảo tính phân tách dữ liệu tuyệt đối giữa các người dùng. | 29/05/2026 | 29/05/2026 | DynamoDB Design |
| Thứ 7 | - Xây dựng tài liệu Đặc tả API (API Specification) chi tiết bao gồm các HTTP Methods, Endpoints, Request Body và Response JSON Schema cho tất cả các luồng. | 30/05/2026 | 30/05/2026 | API Specification |
| Chủ nhật / Thứ 2 | - Tìm hiểu AWS Serverless Application Model (SAM) để quản lý Hạ tầng dưới dạng Mã nguồn (Infrastructure as Code - IaC). | 31/05/2026 | 01/06/2026 | AWS SAM Docs |
| Thứ 3 | - Khởi tạo GitHub Repository chính thức cho dự án.<br>- Thiết lập quy trình Git Flow với các nhánh chính (`main`, `dev`, `feature/*`). | 02/06/2026 | 02/06/2026 | GitHub Setup |
| Thứ 4 | - Cài đặt AWS SAM CLI, Docker và thiết lập DynamoDB Local chạy trên môi trường phát triển cục bộ của các thành viên. | 03/06/2026 | 03/06/2026 | SAM Local Setup |
| Thứ 5 | - Họp nhóm phân công chi tiết các module hàm Lambda cho từng thành viên (Create, Read, Update, Delete Todo). | 04/06/2026 | 04/06/2026 | Tài liệu nhóm |

### Kết quả đạt được tuần 7:

* Thiết kế hoàn chỉnh schema DynamoDB tối ưu với PK `userId` và SK `todoId`.
* Hoàn thiện bộ tài liệu chuẩn API Specification cho dự án Serverless Todo API.
* Khởi tạo thành công GitHub Repository và thống nhất quy trình làm việc nhóm bằng Git Flow.
* Cài đặt hoàn tất môi trường phát triển cục bộ với SAM CLI, Docker và DynamoDB Local.
* Phân công nhiệm vụ cụ thể cho từng thành viên lập trình các hàm Lambda.