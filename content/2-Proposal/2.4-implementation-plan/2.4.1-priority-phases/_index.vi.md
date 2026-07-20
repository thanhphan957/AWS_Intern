---
title: "Giai đoạn ưu tiên"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.4.1 </b> "
---

#### Tổng quan

Các đề xuất được chia thành sáu giai đoạn triển khai, mỗi giai đoạn tập trung vào một nhóm năng lực cụ thể. Thứ tự giai đoạn phản ánh nguyên tắc **ổn định và bảo mật trước, mở rộng nghiệp vụ sau**.

| Giai đoạn | Nội dung triển khai | Sản phẩm / bằng chứng cần có |
|---|---|---|
| **Giai đoạn 1 — Củng cố nền tảng** | Nâng EKS version; rà soát Terraform module; bổ sung ECR lifecycle policy; chuẩn hóa runbook upgrade/teardown | Terraform plan đã review; cluster EKS phiên bản mới; lifecycle policy; runbook cập nhật |
| **Giai đoạn 2 — Hoàn thiện bảo mật truy cập** | Triển khai HTTPS (ACM), custom domain (Route 53), AWS WAF cho ALB | Domain truy cập HTTPS; WAF rule; ảnh chụp cấu hình ALB/WAF |
| **Giai đoạn 3 — Tăng an toàn triển khai** | Tích hợp Argo Rollouts; cấu hình canary deployment; rollback theo metric | Rollout manifest; demo canary; bằng chứng rollback thành công |
| **Giai đoạn 4 — Thực thi policy bảo mật** | Triển khai Kyverno/OPA: signed image, resource limit, non-root container, namespace policy | Policy YAML; kết quả reject workload không hợp lệ; workflow ký image |
| **Giai đoạn 5 — Observability nâng cao** | Bổ sung distributed tracing; dashboard SLO/SLI; log query; synthetic check | Trace xuyên service; dashboard SLO; alert rule có ngữ cảnh |
| **Giai đoạn 6 — Nâng cấp dữ liệu và nghiệp vụ** | Tích hợp RDS vào luồng đơn hàng; cân nhắc ElastiCache; thực hiện backup/restore test | Dữ liệu đơn hàng lưu DB; restore test thành công; sơ đồ dữ liệu cập nhật |

#### Tiêu chí hoàn thành mỗi giai đoạn

Một giai đoạn được coi là hoàn thành khi đáp ứng đồng thời: **(1)** thay đổi được merge qua pull request có review; **(2)** pipeline CI/CD và GitOps chạy thành công; **(3)** có bằng chứng kỹ thuật (ảnh chụp, log, dashboard, endpoint) phục vụ báo cáo; **(4)** tài nguyên không cần thiết được dọn dẹp hoặc tắt theo lịch để kiểm soát chi phí.
