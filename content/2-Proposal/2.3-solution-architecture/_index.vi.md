---
title: "Kiến trúc giải pháp đề xuất"
date: 2026-07-04
weight: 3
chapter: false
pre: " <b> 2.3. </b> "
---

#### Mục đích và phạm vi

Mục này trình bày **kiến trúc giải pháp mục tiêu** cho giai đoạn phát triển tiếp theo của dự án Mini E-commerce DevOps Platform. Kiến trúc đề xuất được xây dựng trên nền tảng hiện có, bổ sung các lớp năng lực về bảo mật, khả năng mở rộng, quan sát hệ thống và quản trị chi phí — **không thay thế toàn bộ thiết kế ban đầu**.

#### Nguyên tắc thiết kế

| Nguyên tắc | Mô tả |
|---|---|
| Tiến hóa có kiểm soát | Giữ VPC, EKS, GitOps và pipeline CI/CD hiện tại; chỉ bổ sung thành phần cần thiết |
| Phân tầng rõ ràng | Tách biệt edge, compute, data, security, observability và cost governance |
| Bảo mật theo chiều sâu | Kiểm soát từ pull request, image signing, admission policy đến WAF ở biên |
| Triển khai an toàn | GitOps làm nguồn sự thật; progressive delivery giảm rủi ro release |
| Quan sát được end-to-end | Metrics, logs, traces và SLO/SLI xuyên suốt vòng đời request |
| Kiểm soát chi phí | Dự báo chi phí trước thay đổi hạ tầng; lifecycle policy và budget alert |

#### Sơ đồ kiến trúc tổng thể

Sơ đồ dưới đây mô tả kiến trúc mục tiêu triển khai trên AWS Region `ap-southeast-1`, gồm các vùng chức năng chính:

![Kiến trúc giải pháp Mini E-commerce DevOps Platform](/images/2-Proposal/mini-ecommerce-devops-architecture.png?v=20260707)

**Giải thích các vùng kiến trúc (theo sơ đồ):**

| Vùng | Thành phần chính | Vai trò |
|---|---|---|
| Nền tảng CI/CD (ngoài AWS) | GitHub Source repo, GitHub Actions (Snyk, Infracost), GitOps repo | Dev/Admin commit/PR; scan bảo mật và ước tính chi phí tại CI; assume IAM role qua OIDC để push image lên ECR; cập nhật manifest triển khai |
| Mạng (VPC đa AZ) | Internet Gateway, Public Subnet (NAT Gateway, ALB), Private App/Data/Cache Subnet | Phân tách vùng public/private; NAT cho outbound từ subnet private; ALB là điểm vào HTTPS duy nhất |
| Edge / Public access | Route 53, AWS WAF, ACM TLS, ALB | Phân giải DNS; WAF lọc request trước khi vào ALB; chứng chỉ TLS từ ACM; điều phối traffic vào workload EKS |
| Compute (Private App Subnet) | Amazon EKS: Workloads (Pods), HPA, Argo CD, Argo Rollouts, Kyverno, ESO | Chạy microservices; HPA scale pod; Argo CD đồng bộ GitOps; Argo Rollouts progressive delivery; Kyverno thực thi admission policy; ESO đồng bộ secret |
| Data | RDS Proxy, RDS Primary/Standby (Private Data Subnet), ElastiCache (Private Cache Subnet) | Connection pool qua RDS Proxy; HA với Primary/Standby; cache session/catalog qua ElastiCache |
| Registry & Secrets | Amazon ECR, AWS Secrets Manager | Lưu trữ container image; quản lý credential; ESO đồng bộ secret vào Kubernetes Secrets |
| Observability | CloudWatch, AWS X-Ray, SLO/SLI | Thu thập log/metric, distributed trace và theo dõi chất lượng dịch vụ |
| Cost governance | AWS Budgets, Infracost, ECR lifecycle policy | Cảnh báo vượt ngưỡng chi phí; ước tính Terraform tại PR; dọn image cũ trên ECR |

{{% notice note %}}
Các thành phần **không thể hiện trên sơ đồ tổng thể** nhưng được đề xuất bổ sung theo giai đoạn (xem [2.3.3](2.3.3-components/)): Karpenter/Cluster Autoscaler, OpenTelemetry, VPC Endpoints, synthetic monitoring và Cosign/SBOM trong pipeline merge.
{{% /notice %}}

**Luồng dữ liệu và điều khiển chính:**

1. **Luồng triển khai:** Dev/Admin → Commit/PR → GitHub Actions (Snyk, Infracost) → OIDC assume role → push ECR + cập nhật GitOps repo → Argo CD watch/sync → Argo Rollouts trên EKS.
2. **Luồng truy cập người dùng:** User → Route 53 (DNS) → WAF → ALB (ACM TLS) → workload trên EKS → RDS Proxy / ElastiCache.
3. **Luồng bảo mật:** Secrets Manager → ESO → Kubernetes Secrets → Workloads; Kyverno kiểm soát admission workload; WAF bảo vệ biên trước ALB.
4. **Luồng quan sát:** Workloads → CloudWatch (logs/metrics) và X-Ray (traces) → dashboard SLO/SLI.

#### Nội dung chi tiết

- [Định hướng kiến trúc mục tiêu theo từng lớp](2.3.1-target-architecture/)
- [Luồng triển khai sau khi mở rộng](2.3.2-deployment-flow/)
- [Các thành phần nên bổ sung và mức ưu tiên](2.3.3-components/)
