---
title: "Lộ trình phát triển đề xuất"
date: 2026-07-04
weight: 5
chapter: false
pre: " <b> 2.5. </b> "
---

#### Tổng quan

Lộ trình dưới đây ánh xạ các giai đoạn triển khai (mục 2.4.1) vào khung thời gian cụ thể, ưu tiên các cải tiến có tác động trực tiếp đến **bảo mật**, **độ ổn định** và **khả năng đánh giá** trong phạm vi báo cáo thực tập. Thời gian là ước tính, có thể điều chỉnh theo tiến độ thực tế và phản hồi từ người hướng dẫn.

| Giai đoạn | Thời gian dự kiến | Trọng tâm công việc | Kết quả kỳ vọng |
|:---|:---:|---|---|
| **Giai đoạn 1** | 1–2 tuần | Nâng cấp EKS version; rà soát Terraform; ECR lifecycle policy | Nền tảng giảm rủi ro vòng đời hỗ trợ; kiểm soát image cũ tốt hơn |
| **Giai đoạn 2** | 1–2 tuần | HTTPS (ACM), custom domain (Route 53), AWS WAF | Ứng dụng public qua domain chính thức với lớp bảo vệ biên |
| **Giai đoạn 3** | 2 tuần | Argo Rollouts; canary/blue-green deployment | Phát hành phiên bản mới an toàn hơn; rollback rõ ràng |
| **Giai đoạn 4** | 2 tuần | Kyverno/OPA; signed image enforcement; Pod Security Standards/admission policy | Cluster có cơ chế chặn cấu hình không đạt chuẩn |
| **Giai đoạn 5** | 2–3 tuần | OpenTelemetry/X-Ray; dashboard SLO; synthetic monitoring | Quan sát hệ thống sâu hơn; phân tích lỗi hiệu quả hơn |
| **Giai đoạn 6** | 2–4 tuần | Tích hợp dữ liệu đơn hàng; RDS Multi-AZ/ElastiCache (nếu cần) | Ứng dụng có nghiệp vụ rõ hơn; tầng dữ liệu ổn định hơn |

#### Tổng thời gian ước tính

Toàn bộ lộ trình kéo dài khoảng **10–15 tuần** nếu triển khai tuần tự. Trong bối cảnh thực tập, có thể **rút gọn phạm vi** bằng cách chỉ triển khai đầy đủ giai đoạn 1–4 (nền tảng, bảo mật, release an toàn, policy) và trình bày giai đoạn 5–6 như định hướng tiếp theo — vẫn đảm bảo chiều sâu kỹ thuật cho phần báo cáo.

#### Mốc đánh giá

| Mốc | Thời điểm | Tiêu chí đạt |
|---|---|---|
| Mốc 1 — Nền tảng vững | Sau giai đoạn 1–2 | EKS upgraded; HTTPS hoạt động; WAF cấu hình |
| Mốc 2 — Release an toàn | Sau giai đoạn 3–4 | Canary demo thành công; policy enforce hoạt động |
| Mốc 3 — Vận hành chuyên sâu | Sau giai đoạn 5–6 | Trace end-to-end; dữ liệu đơn hàng lưu DB |
