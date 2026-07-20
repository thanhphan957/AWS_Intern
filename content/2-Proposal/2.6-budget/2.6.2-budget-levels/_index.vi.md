---
title: "Ngân sách theo mức mở rộng"
date: 2026-07-04
weight: 2
chapter: false
pre: " <b> 2.6.2 </b> "
---

Để linh hoạt theo ngân sách thực tập, các đề xuất được phân thành năm mức mở rộng. Mỗi mức có thể triển khai độc lập hoặc kết hợp, tùy mục tiêu đánh giá.

| Mức mở rộng | Nội dung nên triển khai | Ngân sách dự kiến | Nhận xét |
|---|---|:---:|---|
| **Mức 1 — Cải tiến bắt buộc** | Nâng EKS version; ECR lifecycle; runbook upgrade; Infracost cơ bản | 0–10 USD thêm | Chủ yếu thay đổi cấu hình và tài liệu; có thể giảm chi phí EKS |
| **Mức 2 — Bảo mật public endpoint** | Route 53; ACM; HTTPS; AWS WAF cơ bản | 10–30 USD/tháng thêm | Phù hợp khi cần demo qua domain thật |
| **Mức 3 — Triển khai an toàn** | Argo Rollouts; canary/blue-green; policy enforcement | 0–20 USD thêm | Chi phí chủ yếu từ tài nguyên cluster |
| **Mức 4 — Observability nâng cao** | Distributed tracing; dashboard SLO; synthetic check | 10–40 USD/tháng thêm | Phụ thuộc lượng trace/log gửi lên AWS |
| **Mức 5 — Dữ liệu production-like** | RDS Multi-AZ; ElastiCache; backup/restore test | 50+ USD/tháng | Chỉ bật ngắn hạn khi cần minh chứng HA |
