---
title: "Worklog Tuần 11"
date: 2026-06-29
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục tiêu tuần 11:

* Thiết lập pipeline tự động hóa CI/CD cho dự án bằng GitHub Actions.
* Viết tài liệu hướng dẫn kỹ thuật chi tiết.
* Tối ưu hóa hiệu suất và tính năng cơ sở dữ liệu.

### Khung thời gian tuần: **29/06/2026 – 05/07/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | - Nghiên cứu dịch vụ GitHub Actions và cách viết file workflow tự động hóa CI/CD. | 29/06/2026 | 29/06/2026 | GitHub Actions |
| Thứ 3 | - Viết tệp tin `.github/workflows/deploy.yml` tích hợp các tác vụ: Lint check, Build dự án và deploy lên AWS bằng SAM CLI. | 30/06/2026 | 30/06/2026 | CI/CD Workflows |
| Thứ 4 | - Cấu hình tính năng Time-To-Live (TTL) cho DynamoDB để tự động dọn dẹp các Todo đã hoàn thành quá 30 ngày. | 01/07/2026 | 02/07/2026 | DynamoDB TTL |
| Thứ 5 | - Viết tài liệu kỹ thuật chi tiết: Thiết kế kiến trúc, mô tả các API endpoints, cấu trúc bảng dữ liệu. | 02/07/2026 | 03/07/2026 | Tài liệu kỹ thuật |
| Thứ 6 | - Biên soạn tài liệu Readme hướng dẫn cài đặt và sử dụng nhanh dự án dành cho lập trình viên khác. | 03/07/2026 | 04/07/2026 | Readme Docs |
| Thứ 7 | - Họp nhóm tuần đánh giá chất lượng tài liệu và kiểm tra chi phí AWS Budgets. | 04/07/2026 | 04/07/2026 | Tài liệu nhóm |

### Kết quả đạt được tuần 11:

* Tự động hóa quá trình deploy hạ tầng và code Lambda khi push code lên GitHub.
* Cấu hình tính năng TTL cho DynamoDB tự động dọn dẹp dữ liệu cũ.
* Hoàn thiện tài liệu kiến trúc hệ thống và tài liệu bàn giao.