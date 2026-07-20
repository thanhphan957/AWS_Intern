---
title: "Các thành phần nên bổ sung"
date: 2026-07-04
weight: 3
chapter: false
pre: " <b> 2.3.3 </b> "
---

#### Tổng quan

Danh mục dưới đây liệt kê các thành phần đề xuất bổ sung, phân nhóm theo lĩnh vực và mức ưu tiên. Các mục đánh dấu **(trên sơ đồ)** đã được thể hiện trong [sơ đồ kiến trúc tổng thể](../); các mục còn lại triển khai theo giai đoạn tại [2.4](../../2.4-implementation-plan/).

#### Nhóm Edge và bảo mật biên

| Thành phần | Vai trò trong kiến trúc | Mức ưu tiên |
|---|---|:---:|
| Amazon Route 53 + ACM **(trên sơ đồ)** | Cung cấp custom domain và chứng chỉ TLS cho HTTPS | Cao |
| AWS WAF **(trên sơ đồ)** | Lọc request độc hại trước ALB; rate limiting và bảo vệ ALB | Cao |

#### Nhóm CI/CD và bảo mật pipeline

| Thành phần | Vai trò trong kiến trúc | Mức ưu tiên |
|---|---|:---:|
| Snyk **(trên sơ đồ)** | Scan lỗ hổng dependency và mã nguồn tại pull request | Cao |
| Infracost **(trên sơ đồ)** | Ước tính chi phí Terraform trong pull request trước khi merge | Trung bình |
| OIDC + IAM role push ECR **(trên sơ đồ)** | GitHub Actions assume role không dùng access key tĩnh | Cao |
| Cosign + SBOM | Ký image và tạo SBOM sau merge; phục vụ Kyverno thực thi chính sách signed image | Cao |

#### Nhóm Compute và triển khai

| Thành phần | Vai trò trong kiến trúc | Mức ưu tiên |
|---|---|:---:|
| EKS version upgrade | Đưa cluster về standard support; giảm chi phí extended support | Cao |
| HPA **(trên sơ đồ)** | Tự động scale số pod theo CPU/memory | Cao |
| Argo Rollouts **(trên sơ đồ)** | Triển khai canary/blue-green; rollback theo metric thay vì thay thế toàn bộ | Cao |
| Karpenter / Cluster Autoscaler | Tự động mở rộng node theo nhu cầu workload (không trên sơ đồ lõi) | Thấp – Trung bình |

#### Nhóm bảo mật runtime

| Thành phần | Vai trò trong kiến trúc | Mức ưu tiên |
|---|---|:---:|
| Kyverno / OPA Gatekeeper **(trên sơ đồ)** | Admission policy: signed image, resource limits, non-root container (độc lập với Argo Rollouts) | Cao |
| ESO + Secrets Manager **(trên sơ đồ)** | Đồng bộ secret từ AWS Secrets Manager vào Kubernetes Secrets | Cao |

#### Nhóm dữ liệu và cache

| Thành phần | Vai trò trong kiến trúc | Mức ưu tiên |
|---|---|:---:|
| RDS Multi-AZ + RDS Proxy **(trên sơ đồ)** | HA database; connection pool; restore test định kỳ | Trung bình |
| Amazon ElastiCache for Redis **(trên sơ đồ)** | Redis managed thay Redis pod; ổn định hơn cho session và catalog cache | Trung bình |

#### Nhóm Observability

| Thành phần | Vai trò trong kiến trúc | Mức ưu tiên |
|---|---|:---:|
| CloudWatch + AWS X-Ray + SLO/SLI **(trên sơ đồ)** | Log, metric, distributed tracing và theo dõi chất lượng dịch vụ | Trung bình |
| OpenTelemetry | Chuẩn hóa instrumentation trước khi export sang X-Ray (giai đoạn 5) | Trung bình |
| Synthetic monitoring | Kiểm tra endpoint định kỳ từ bên ngoài cluster | Thấp – Trung bình |

#### Nhóm quản trị chi phí và mạng

| Thành phần | Vai trò trong kiến trúc | Mức ưu tiên |
|---|---|:---:|
| AWS Budgets + ECR lifecycle **(trên sơ đồ)** | Cảnh báo vượt ngưỡng chi phí; tự động xóa image cũ | Trung bình |
| VPC Endpoints | Giảm traffic qua NAT Gateway cho S3, ECR, STS (không trên sơ đồ lõi) | Trung bình |

#### Ghi chú triển khai

Các thành phần mức **Cao** nên được ưu tiên trong giai đoạn 1–4 (xem mục [2.4.1](../../2.4-implementation-plan/2.4.1-priority-phases/)). Các thành phần mức **Trung bình** triển khai khi nền tảng đã ổn định và có ngân sách phù hợp. Việc bật đồng thời nhiều dịch vụ managed (RDS Multi-AZ + ElastiCache + autoscaling rộng) cần được cân nhắc kỹ về chi phí (xem mục [2.6](../../2.6-budget/)).
