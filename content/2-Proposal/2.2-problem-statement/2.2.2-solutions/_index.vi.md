---
title: "Đề xuất giải pháp phát triển"
date: 2026-07-04
weight: 2
chapter: false
pre: " <b> 2.2.2 </b> "
---

#### Nguyên tắc tiếp cận

Để giải quyết các hạn chế đã nêu, đề xuất áp dụng chiến lược **mở rộng tiến hóa (evolutionary expansion)**: giữ nguyên kiến trúc và nền tảng đã triển khai, bổ sung từng lớp năng lực theo thứ tự ưu tiên. Cách tiếp cận này hạn chế rủi ro gián đoạn, tận dụng đầu tư kỹ thuật hiện có và phù hợp với khung thời gian cũng như ngân sách của dự án thực tập.

#### Các nhóm giải pháp đề xuất

| Nhóm giải pháp | Nội dung triển khai | Mục tiêu đạt được |
|---|---|---|
| Nâng cấp hạ tầng EKS | Nâng EKS lên phiên bản còn standard support; bổ sung node group đa AZ; triển khai HPA (trên sơ đồ); Karpenter/Cluster Autoscaler theo giai đoạn | Tăng khả năng mở rộng; giảm chi phí extended support và rủi ro vòng đời |
| Tăng tính sẵn sàng dữ liệu | RDS Multi-AZ + RDS Proxy (trên sơ đồ); backup/restore test; ElastiCache for Redis thay Redis pod | Giảm rủi ro mất dữ liệu; nâng độ ổn định tầng persistence |
| Bảo mật pipeline CI/CD | Snyk scan tại PR; OIDC assume role để push ECR; Cosign ký image sau merge | Giảm rủi ro supply chain; không lưu credential tĩnh trên CI |
| Bảo mật truy cập Internet | Triển khai Route 53, ACM TLS, AWS WAF trước ALB | Đáp ứng yêu cầu bảo mật khi public ứng dụng ra Internet |
| Policy enforcement trong cluster | Kyverno admission policy (độc lập với Argo Rollouts); ESO đồng bộ Secrets Manager | Ngăn cấu hình không an toàn được đưa vào EKS |
| Progressive delivery | Tích hợp Argo Rollouts hỗ trợ canary và blue-green deployment | Giảm rủi ro khi phát hành phiên bản mới; hỗ trợ rollback có kiểm soát |
| Observability nâng cao | CloudWatch, AWS X-Ray, dashboard SLO/SLI (trên sơ đồ); OpenTelemetry và synthetic monitoring theo giai đoạn | Hỗ trợ phân tích lỗi xuyên suốt giữa các microservices |
| Quản trị chi phí chủ động | AWS Budgets, Infracost tại PR, ECR lifecycle policy (trên sơ đồ); VPC endpoints theo giai đoạn | Phát hiện tác động chi phí trước khi thay đổi hạ tầng |
| Mở rộng nghiệp vụ ứng dụng | Tích hợp RDS vào checkout/order service; lưu lịch sử đơn hàng; bổ sung luồng email/payment | Nâng tính thực tiễn của ứng dụng thương mại điện tử |

#### Lưu ý triển khai

Các giải pháp trên **không cần và không nên triển khai đồng thời**. Thứ tự ưu tiên được đề xuất: củng cố nền tảng và bảo mật trước, sau đó đến chiến lược release an toàn, policy enforcement, observability, và cuối cùng là mở rộng nghiệp vụ ứng dụng.
