---
title: "Worklog Tuần 11"
date: 2026-06-26
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục tiêu tuần 11:

* Tìm hiểu quy trình tích hợp GitHub Actions và cấu hình Secrets cho CI/CD.
* Xây dựng workflow GitHub Actions để kiểm tra mã, build và triển khai AWS SAM tự động.
* Cấu hình DynamoDB TTL để tự động xóa các Todo đã hoàn thành sau thời gian quy định.
* Hoàn thiện tài liệu kiến trúc hệ thống, API Specification và thiết kế cơ sở dữ liệu.
* Viết README hướng dẫn cấu hình và triển khai môi trường phát triển.
* Họp nhóm kiểm tra tài liệu, đánh giá tiến độ và dự toán chi phí AWS.

### Khung thời gian tuần: **26/06/2026 - 02/07/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 6 | - Nghiên cứu dịch vụ GitHub Actions và cách thiết lập quy trình tự động hóa CI/CD.<br>- Khai báo các thông số bảo mật GitHub Repository Secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`). | 26/06/2026 | 26/06/2026 | GitHub Actions Docs |
| Thứ 7 | - Xây dựng tập tin `.github/workflows/deploy.yml` tự động hóa luồng: Linting code, SAM Build và SAM Deploy khi push mã nguồn lên nhánh `main`. | 27/06/2026 | 27/06/2026 | CI/CD Pipeline |
| Chủ nhật / Thứ 2 | - Cấu hình tính năng Time-To-Live (TTL) cho DynamoDB để tự động dọn dẹp các bản ghi Todo đã hoàn thành sau khoảng thời gian quy định (ví dụ 30 ngày). | 28/06/2026 | 29/06/2026 | DynamoDB TTL Guide |
| Thứ 3 | - Chuẩn hóa và hoàn thiện bộ tài liệu kỹ thuật dự án: Sơ đồ kiến trúc hệ thống, tài liệu đặc tả API Endpoints và sơ đồ thiết kế bảng dữ liệu. | 30/06/2026 | 30/06/2026 | Technical Docs |
| Thứ 4 | - Soạn thảo tập tin `README.md` chi tiết hướng dẫn các bước thiết lập môi trường phát triển, cài đặt phụ thuộc, chạy local và triển khai dự án. | 01/07/2026 | 01/07/2026 | Project README |
| Thứ 5 | - Họp nhóm rà soát toàn bộ tài liệu, kiểm tra tiến độ tổng thể dự án và đánh giá lại chi phí thực tế trên AWS Budgets. | 02/07/2026 | 02/07/2026 | Tài liệu nhóm |

### Kết quả đạt được tuần 11:

* Thiết lập thành công Pipeline CI/CD tự động bằng GitHub Actions triển khai hạ tầng SAM lên AWS.
* Kích hoạt tính năng TTL trên DynamoDB giúp tự động hóa việc dọn dẹp dữ liệu cũ.
* Hoàn thiện bộ tài liệu kỹ thuật và file README hướng dẫn triển khai chuẩn mực.
* Kiểm tra tiến độ và bảo đảm ngân sách chi phí AWS nằm trong ngưỡng cho phép.