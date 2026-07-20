---
title : "Giới thiệu"
date : 2024-01-01
weight : 1
chapter : false
pre : " <b> 5.1. </b> "
---

#### Bối cảnh triển khai

Mini E-commerce DevOps Platform là đề tài xây dựng nền tảng DevOps cho một hệ thống microservices thương mại điện tử. Thay vì tập trung vào việc viết lại toàn bộ ứng dụng nghiệp vụ, đề tài kế thừa workload Online Boutique để tập trung vào phần có giá trị thực tập chính: container hóa, tự động hóa triển khai, quản lý hạ tầng bằng mã nguồn, quản lý secret, GitOps và quan sát hệ thống.

Ứng dụng được triển khai theo hai cấp độ. Cấp độ thứ nhất là môi trường local, dùng để kiểm tra đầy đủ chức năng nghiệp vụ. Cấp độ thứ hai là môi trường AWS, dùng để chứng minh năng lực triển khai trên cloud với EKS, ECR, RDS, ALB và các thành phần vận hành đi kèm.

#### Mục tiêu kỹ thuật

Workshop hướng tới ba mục tiêu chính. Thứ nhất, xác minh ứng dụng có thể chạy ổn định trên Docker Compose trước khi đưa lên cloud. Thứ hai, cung cấp hạ tầng AWS bằng Terraform để bảo đảm tính lặp lại và khả năng kiểm soát thay đổi. Thứ ba, thiết lập quy trình CI/CD và GitOps để image sau khi build có thể được triển khai lên EKS theo hướng có kiểm soát.

#### Kiến trúc triển khai

Hệ thống gồm các lớp chính sau:

+ Lớp ứng dụng: trên EKS (Phase 1) gồm <code>frontend</code>, <code>productcatalogservice</code>, <code>cartservice</code>, <code>checkoutservice</code>, <code>currencyservice</code> và Redis trong cluster; môi trường local chạy thêm payment, shipping và email để kiểm thử checkout đầy đủ.
+ Lớp hạ tầng gồm VPC <code>10.0.0.0/16</code>, public/private subnet, NAT Gateway, EKS <code>mini-ecommerce-devops</code> (v1.30), ECR (4 repository), RDS PostgreSQL 16, IAM OIDC/IRSA, S3 + DynamoDB cho Terraform state và Secrets Manager.
+ Lớp nền tảng Kubernetes gồm AWS Load Balancer Controller, External Secrets Operator, Argo CD, Prometheus/Grafana (namespace <code>observability</code>) và CloudWatch alarms.
+ Lớp CI/CD gồm GitHub Actions (<code>ci-build-push</code>, <code>terraform-plan</code>), GitHub OIDC, Trivy, cosign/SBOM và repository GitOps.
+ Truy cập công khai qua ALB HTTP cổng <code>:80</code> (chưa dùng Route 53/ACM HTTPS trong Phase 1).

<div class="arch-viewer" id="arch-viewer-vi" data-arch-viewer data-zoom-in="Phóng to" data-zoom-out="Thu nhỏ">
  <style>
    #arch-viewer-vi .arch-viewer__image { width: 100% !important; height: 100% !important; max-width: none !important; object-fit: contain !important; }
    #arch-viewer-vi.is-zoomed .arch-viewer__image { width: 230% !important; height: 230% !important; }
  </style>
  <button class="arch-viewer__toggle" type="button" aria-pressed="false">
    Phóng to
  </button>
  <div class="arch-viewer__stage" tabindex="0" aria-label="Kéo để xem sơ đồ kiến trúc">
    <img class="arch-viewer__image" src="../../../images/5-Workshop/5.1-Workshop-overview/architecture.svg?v=20260707-4" alt="Kiến trúc tổng quan" draggable="false" />
  </div>
</div>
<p class="arch-viewer-help"><em>Nhấn nút ở góc trái để phóng to/thu nhỏ. Khi đang phóng to, kéo ngang hoặc dùng con lăn/touchpad để xem chi tiết.</em></p>
<script src="../../../js/arch-viewer.js?v=20260707-3"></script>

#### Mô hình hai repository

Đề tài tách mã nguồn ứng dụng và manifest triển khai thành hai repository riêng:

| Repository | Vai trò |
|------------|---------|
| <code>VoAnhKiet1410/mini-ecommerce-devops</code> | Chứa mã nguồn, Docker Compose, Terraform, script vận hành và GitHub Actions |
| <code>VoAnhKiet1410/mini-ecommerce-gitops</code> | Chứa manifest Kubernetes, Kustomize overlay và Argo CD Application |

Cách tách này giúp pipeline ứng dụng và trạng thái triển khai độc lập hơn. Khi image mới được build, repository GitOps được cập nhật tag image, sau đó Argo CD mới đồng bộ thay đổi vào cluster. Điều này giúp rollback dễ hơn, vì có thể quay lại manifest hoặc image tag trước đó mà không cần sửa trực tiếp workload trong cluster.

#### Phạm vi triển khai giai đoạn hiện tại

| Thành phần | Local Compose | AWS EKS |
|------------|---------------|---------|
| Luồng duyệt sản phẩm | Có | Có |
| Giỏ hàng | Có | Có, dùng Redis trong cluster |
| Checkout đầy đủ | Có (10 container) | Giới hạn — thiếu payment, email, shipping |
| PostgreSQL | Có, chạy local (platform DB) | Có, RDS platform DB (Terraform + ESO) |
| Ingress công khai | Không cần | Có, ALB HTTP :80 |
| Workload trên EKS | — | 6 pod trong namespace boutique |
| Observability | Cơ bản | Prometheus, Grafana, CloudWatch |

#### Kết luận

Mục 5.1 thiết lập bối cảnh cho toàn bộ phần workshop. Các mục tiếp theo sẽ đi từ chuẩn bị môi trường, kiểm thử local, dựng hạ tầng AWS, đồng bộ GitOps, kiểm tra bảo mật đến thu hồi tài nguyên sau khi hoàn tất demo.
