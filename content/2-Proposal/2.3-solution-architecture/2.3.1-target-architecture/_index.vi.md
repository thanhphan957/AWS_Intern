---
title: "Định hướng kiến trúc mục tiêu"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.3.1 </b> "
---

#### Tổng quan

Kiến trúc mục tiêu được mô tả theo mô hình **phân lớp (layered architecture)**, nhằm làm rõ hiện trạng từng lớp, định hướng nâng cấp và cơ sở kỹ thuật của từng quyết định thiết kế. Cách trình bày này giúp đánh giá tác động của từng thay đổi mà không làm mất tính liên thông của toàn hệ thống.

#### Ma trận định hướng theo lớp kiến trúc

| Lớp kiến trúc | Hiện trạng | Định hướng mục tiêu | Cơ sở đề xuất |
|---|---|---|---|
| **Edge / Ingress** | ALB công khai frontend; truy cập chủ yếu qua DNS của load balancer | Bổ sung Route 53 (custom domain), ACM (TLS), HTTPS end-to-end, AWS WAF và rule lọc request bất thường | Đáp ứng yêu cầu bảo mật biên khi công khai ra Internet; chuẩn hóa điểm vào duy nhất |
| **Compute** | EKS managed node group quy mô nhỏ, phục vụ demo | Nâng EKS lên phiên bản standard support; node group đa AZ; HPA scale pod (thể hiện trên sơ đồ); Karpenter/Cluster Autoscaler bổ sung theo giai đoạn | Tăng khả năng chịu tải và giảm rủi ro vòng đời cluster |
| **Deployment** | GitOps với Argo CD; deploy thay thế trực tiếp | Bổ sung Argo Rollouts cho canary/blue-green; rollback theo metric SLO/error rate | Giảm phạm vi ảnh hưởng khi phát hành; phù hợp môi trường gần production |
| **Data** | RDS PostgreSQL và Redis ở phạm vi demo | RDS Multi-AZ; RDS Proxy; backup/restore test định kỳ; ElastiCache for Redis khi cần độ ổn định cao | Bảo vệ dữ liệu nghiệp vụ; tách cache khỏi pod để giảm rủi ro mất trạng thái |
| **Security** | OIDC cho CI, IRSA, scan/ký image ở mức pipeline | CI: Snyk scan + OIDC assume role push ECR (trên sơ đồ); runtime: Kyverno admission policy, ESO đồng bộ Secrets Manager; signed image (Cosign) và network policy theo giai đoạn | Thực thi defense-in-depth: từ supply chain đến runtime |
| **Observability** | Prometheus/Grafana/CloudWatch cơ bản | CloudWatch, AWS X-Ray, dashboard SLO/SLI (trên sơ đồ); OpenTelemetry và synthetic monitoring bổ sung giai đoạn 5 | Hỗ trợ RCA (root cause analysis) xuyên microservices |
| **Cost management** | Dự toán thủ công và teardown sau lab | AWS Budgets, Infracost trong PR, ECR lifecycle policy (trên sơ đồ); VPC endpoints và scheduled shutdown theo giai đoạn | FinOps tích hợp vào quy trình thay đổi hạ tầng |

#### Mô hình mạng và phân vùng

Kiến trúc mục tiêu duy trì mô hình **VPC đa AZ** với phân tách subnet rõ ràng:

| Subnet | Thành phần đặt tại | Lý do thiết kế |
|---|---|---|
| Public Subnet (AZ A/B) | NAT Gateway, ALB | Cho phép outbound từ private subnet; điểm vào HTTPS duy nhất từ Internet |
| Private App Subnet | Amazon EKS, workload pods | Workload không expose trực tiếp ra Internet; giảm bề mặt tấn công |
| Private Data Subnet | RDS Primary/Standby, RDS Proxy | Cô lập tầng dữ liệu; chỉ cho phép kết nối từ app subnet qua security group |
| Private Cache Subnet | ElastiCache for Redis | Tách cache khỏi compute; hỗ trợ session và catalog cache ổn định |

#### Tích hợp giữa các lớp

- **Edge → Compute:** User query DNS qua Route 53; WAF lọc request trước ALB; ALB route HTTPS (ACM TLS) tới Service/Ingress của microservices trên EKS.
- **Compute → Data:** Workloads kết nối RDS qua RDS Proxy; cache qua ElastiCache trong Private Cache Subnet.
- **CI/CD → Compute:** GitHub Actions assume IAM role qua OIDC để push image lên ECR; Argo CD watch GitOps repo và reconcile workload; pods pull image từ ECR.
- **Security xuyên suốt:** ESO đồng bộ secret từ Secrets Manager; Kyverno thực thi admission policy (signed image, resource limits) — độc lập với Argo Rollouts; WAF bảo vệ biên.
- **Observability xuyên suốt:** Workloads gửi logs/metrics tới CloudWatch và traces tới X-Ray; SLO/SLI đối chiếu chất lượng dịch vụ trong suốt rollout.

#### Kết luận

Định hướng kiến trúc mục tiêu không yêu cầu tái thiết kế hệ thống, mà **nâng cấp có hệ thống từng lớp** theo thứ tự ưu tiên đã nêu ở mục 2.4 và 2.5, đảm bảo mỗi thay đổi đều có thể kiểm chứng bằng bằng chứng kỹ thuật cụ thể.
