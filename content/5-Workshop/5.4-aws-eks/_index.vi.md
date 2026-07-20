---
title : "Triển khai lên AWS EKS"
date : 2024-01-01
weight : 4
chapter : false
pre : " <b> 5.4. </b> "
---

#### Mục tiêu triển khai AWS

Mục này trình bày quá trình đưa nền tảng DevOps lên AWS. Trọng tâm không chỉ là chạy ứng dụng trên Kubernetes, mà còn là chứng minh khả năng cung cấp hạ tầng bằng Terraform, cài đặt các thành phần nền tảng trên EKS, đồng bộ ứng dụng bằng GitOps và bổ sung quan sát hệ thống.

+ Hạ tầng AWS được dựng bằng Terraform, gồm VPC, EKS, ECR, RDS, IAM, Secrets Manager và CloudWatch.
+ Cluster <code>mini-ecommerce-devops</code> chạy tại region <code>ap-southeast-1</code>.
+ Người dùng truy cập ứng dụng qua Application Load Balancer do AWS Load Balancer Controller tạo từ Kubernetes Ingress.

#### Các giai đoạn chính

- [Cung cấp hạ tầng bằng Terraform](5.4.1-prepare/) tạo VPC, EKS, ECR, RDS và IAM.
- [Cài đặt thành phần nền tảng](5.4.2-platform-components/) cài AWS Load Balancer Controller, External Secrets Operator và Argo CD.
- [Xác minh GitOps và ALB](5.4.3-test-endpoint/) kiểm tra trạng thái ứng dụng sau đồng bộ và truy cập qua ALB.
- [Quan sát hệ thống](5.4.4-observability/) triển khai Prometheus, Grafana và CloudWatch alarms.

Trình tự này phản ánh đúng quan hệ phụ thuộc khi triển khai: có hạ tầng trước, có controller và GitOps sau, sau đó mới xác minh ứng dụng và bổ sung lớp giám sát.

{{% notice note %}}
Tất cả ảnh minh chứng trong mục 5.4 đều là log terminal PowerShell thật hoặc ảnh chụp trình duyệt thật từ môi trường AWS EKS <code>mini-ecommerce-devops</code>, không dùng ảnh render hoặc AI generate.
{{% /notice %}}
