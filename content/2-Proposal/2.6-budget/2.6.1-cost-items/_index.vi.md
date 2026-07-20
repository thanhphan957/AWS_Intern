---
title: "Hạng mục phát sinh chi phí"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.6.1 </b> "
---

Bảng dưới đây liệt kê các hạng mục có thể phát sinh chi phí khi triển khai đề xuất, kèm ghi chú kiểm soát phù hợp môi trường thực tập.

| Đề xuất | Chi phí phát sinh | Ghi chú kiểm soát |
|---|---|---|
| Nâng EKS version | Có thể **giảm** chi phí nếu chuyển từ extended support về standard support | Nên ưu tiên thực hiện sớm nhất |
| Route 53 + domain | Phí đăng ký domain và hosted zone (~vài USD/tháng) | Chỉ cần khi demo qua domain thật |
| ACM (AWS Certificate Manager) | Chứng chỉ public thường **không tính phí** riêng | Gắn với ALB để bật HTTPS |
| AWS WAF | Phí Web ACL, rule và request processed | Chỉ bật rule tối thiểu; theo dõi số request |
| Argo Rollouts | Không có phí dịch vụ AWS riêng | Tăng nhẹ tài nguyên pod/controller trong cluster |
| Kyverno / OPA Gatekeeper | Không có phí dịch vụ AWS riêng | Cần thêm CPU/memory cho policy controller |
| OpenTelemetry / X-Ray | Phí theo lượng trace và log ingest | Giới hạn sampling rate khi demo |
| ElastiCache for Redis | Phí node Redis managed (~từ vài USD/giờ tùy loại) | Chỉ dùng khi cần thay Redis pod |
| RDS Multi-AZ | Tăng chi phí database **đáng kể** (gấp đôi so với Single-AZ) | Chỉ bật ngắn hạn để chứng minh HA |
| Karpenter / Cluster Autoscaler | Có thể tăng số node khi workload tăng | Đặt giới hạn node tối đa và budget alert |
| VPC Endpoints | Phí endpoint theo giờ + data processing | Cân nhắc khi traffic NAT Gateway cao |

#### Lưu ý

Chi phí thực tế phụ thuộc vào region (`ap-southeast-1`), loại instance, thời gian chạy và mức sử dụng. Mọi thay đổi Terraform nên kèm output từ **Infracost** trong pull request để dự báo trước khi apply.
