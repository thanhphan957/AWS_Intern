---
title: "Workshop"
date: 2026-07-04
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Mini E-commerce DevOps Platform

#### Tổng quan nội dung workshop

Mục 5 trình bày quá trình triển khai thực nghiệm của đề tài Mini E-commerce DevOps Platform. Nội dung được viết theo hướng báo cáo kỹ thuật, không chỉ liệt kê câu lệnh mà còn giải thích mục tiêu, bối cảnh, kết quả mong đợi và ý nghĩa của từng giai đoạn triển khai.

Đề tài sử dụng ứng dụng Online Boutique làm workload microservices mẫu, sau đó xây dựng thêm lớp DevOps gồm Docker Compose, Terraform, Amazon EKS, Amazon ECR, Amazon RDS, GitHub Actions, Argo CD, External Secrets Operator, Prometheus, Grafana và CloudWatch. Việc triển khai được chia thành hai môi trường chính: môi trường local để kiểm thử đầy đủ nghiệp vụ và môi trường AWS để chứng minh khả năng vận hành trên hạ tầng cloud thực tế.

#### Phạm vi triển khai

+ Môi trường local dùng Docker Compose để chạy đầy đủ các service của ứng dụng, bao gồm frontend, catalog, cart, checkout, currency, shipping, payment, email, Redis và PostgreSQL.
+ Môi trường AWS dùng EKS và GitOps để triển khai 6 workload trong namespace boutique (frontend, catalog, cart, checkout, currency, redis), phơi bày giao diện qua Application Load Balancer và quản lý secret qua AWS Secrets Manager.
+ Hạ tầng cloud được tạo bằng Terraform, có thể dựng lại và thu hồi theo mô hình tạm thời nhằm kiểm soát chi phí.
+ Quy trình CI/CD sử dụng GitHub Actions với OIDC, build image, push lên ECR, quét bảo mật và cập nhật repository GitOps.

#### Cấu trúc mục 5

1. [Giới thiệu tổng quan](5.1-Workshop-overview/) trình bày kiến trúc triển khai, phạm vi và mô hình hai repository.
2. [Chuẩn bị môi trường](5.2-prerequisite/) mô tả công cụ, AWS CLI, Terraform backend và cấu hình ban đầu.
3. [Phát triển local với Docker Compose](5.3-local-docker-compose/) kiểm thử ứng dụng ở môi trường cục bộ trước khi triển khai cloud.
4. [Triển khai lên AWS EKS](5.4-aws-eks/) dựng hạ tầng, cài thành phần nền tảng và đồng bộ ứng dụng qua GitOps.
5. [CI/CD và bảo mật](5.5-cicd-security/) trình bày pipeline, OIDC, quét lỗ hổng, ký image và quản lý secret.
6. [Thu hồi tài nguyên](5.6-Cleanup/) mô tả cách dọn dẹp môi trường sau demo để tránh phát sinh chi phí.
