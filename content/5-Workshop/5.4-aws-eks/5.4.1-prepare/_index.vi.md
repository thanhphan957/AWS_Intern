---
title : "Cung cấp hạ tầng Terraform"
date : 2024-01-01
weight : 1
chapter : false
pre : " <b> 5.4.1 </b> "
---

#### Mục tiêu

Bước này tạo toàn bộ hạ tầng AWS cần thiết để chạy ứng dụng trên Kubernetes. Toàn bộ tài nguyên được định nghĩa bằng Terraform nhằm bảo đảm khả năng kiểm soát, tái tạo và thu hồi.

#### Terraform plan

~~~powershell
cd infra/environments/aws
terraform plan -out=tfplan
~~~

Plan giúp xem trước tài nguyên sẽ được tạo hoặc thay đổi. Trước khi apply, cần kiểm tra kỹ region, CIDR, số lượng tài nguyên và IAM role.

{{% notice warning %}}
<code>terraform apply</code> không chạy trong CI. Việc apply hạ tầng được thực hiện thủ công sau khi đã rà soát <code>tfplan</code>.
{{% /notice %}}

#### Terraform apply

~~~powershell
terraform apply tfplan
~~~

Thời gian apply thường kéo dài 15 đến 25 phút vì EKS và RDS cần nhiều thời gian provisioning.

Sau apply, chạy <code>terraform output</code> để lấy giá trị quan trọng. Ảnh minh chứng ghi nhận:

+ <code>eks_cluster_name</code> = <code>mini-ecommerce-devops</code>
+ <code>rds_endpoint</code> = <code>mini-ecommerce-devops-platform....ap-southeast-1.rds.amazonaws.com:5432</code>

Có thể xuất hiện cảnh báo <code>Deprecated Parameter: dynamodb_table</code> — đây là thông báo từ Terraform backend, không ảnh hưởng kết quả apply.

![Kết quả terraform output sau apply (log PowerShell thật)](/images/5-Workshop/5.4-aws-eks/terraform-plan-live.png)

#### Output cần ghi nhận

~~~powershell
terraform output eks_cluster_name
terraform output -raw ecr_repository_urls
terraform output -raw alb_controller_role_arn
terraform output -raw external_secrets_role_arn
terraform output rds_endpoint
terraform output -raw github_actions_ecr_role_arn
~~~

Các output này được dùng cho các bước tiếp theo như cấu hình kubectl, cài controller, cấu hình GitHub Actions và kiểm tra RDS.

#### Cấu hình kubectl

~~~powershell
aws eks update-kubeconfig --region ap-southeast-1 --name mini-ecommerce-devops
kubectl get nodes -o wide
~~~

Kết quả mong đợi là 1 node ở trạng thái <code>Ready</code>, phiên bản <code>v1.30.14-eks</code> (ảnh minh chứng: node <code>ip-10-0-1-60.ap-southeast-1.compute.internal</code>, age khoảng 19 phút).

![Kết quả aws eks update-kubeconfig và kubectl get nodes -o wide (log PowerShell thật)](/images/5-Workshop/5.4-aws-eks/kubectl-nodes-live.png)

#### Tài nguyên được tạo

| Module | Tài nguyên chính |
|--------|------------------|
| <code>vpc</code> | VPC, subnet, Internet Gateway, NAT Gateway |
| <code>eks</code> | EKS cluster và managed node group |
| <code>ecr</code> | Repository image cho các service |
| <code>rds</code> | PostgreSQL 16 |
| <code>secrets</code> | AWS Secrets Manager |
| <code>iam-github-oidc</code> | IAM role cho GitHub Actions |
| <code>iam-irsa</code> | IAM role cho controller trong EKS |
| <code>observability-cloudwatch</code> | CloudWatch alarms |

#### Lưu ý bảo mật

Trong demo, EKS API endpoint có thể được mở public để thuận tiện thao tác từ máy cá nhân. Khi cần siết truy cập, cấu hình CIDR public endpoint về IP cụ thể:

~~~hcl
cluster_endpoint_public_access_cidrs = ["YOUR_PUBLIC_IP/32"]
~~~

#### Kết quả

Sau bước này, hạ tầng AWS đã sẵn sàng để cài đặt các thành phần nền tảng và đồng bộ ứng dụng lên cluster.
