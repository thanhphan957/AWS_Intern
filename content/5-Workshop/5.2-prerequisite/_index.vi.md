---
title : "Các bước chuẩn bị"
date : 2024-01-01
weight : 2
chapter : false
pre : " <b> 5.2. </b> "
---

#### Mục đích chuẩn bị môi trường

Giai đoạn chuẩn bị giúp bảo đảm các công cụ, quyền truy cập và cấu hình nền tảng đã sẵn sàng trước khi chạy ứng dụng hoặc tạo tài nguyên AWS. Với một đề tài có cả Docker, Terraform, AWS, Kubernetes và GitHub Actions, việc thiếu một công cụ hoặc cấu hình sai region có thể làm quá trình triển khai lỗi ở nhiều bước phía sau.

#### Công cụ cần cài đặt

| Công cụ | Phiên bản khuyến nghị | Mục đích |
|---------|----------------------|----------|
| Docker Desktop hoặc Docker Engine | Mới nhất | Chạy môi trường local bằng Docker Compose |
| Terraform | >= 1.5 | Tạo hạ tầng AWS bằng Infrastructure as Code |
| AWS CLI v2 | Mới nhất | Xác thực AWS và thao tác với EKS |
| kubectl | Tương thích EKS 1.30 | Quản lý tài nguyên Kubernetes |
| Helm | 3.x trở lên | Cài các thành phần nền tảng trên EKS |
| Git | Mới nhất | Quản lý mã nguồn và GitOps repository |

Trên Windows, dự án cung cấp các script dạng <code>.ps1</code>; trên Linux hoặc macOS có thể dùng các script <code>.sh</code> tương ứng.

#### Clone repository

~~~powershell
git clone https://github.com/VoAnhKiet1410/mini-ecommerce-devops.git
cd mini-ecommerce-devops
~~~

Repository GitOps được Argo CD sử dụng để đồng bộ manifest:

~~~text
https://github.com/VoAnhKiet1410/mini-ecommerce-gitops
~~~

#### Kiểm tra AWS CLI

Tài khoản AWS cần có quyền tạo VPC, EKS, ECR, RDS, IAM, Secrets Manager và CloudWatch trong region <code>ap-southeast-1</code>.

~~~powershell
aws sts get-caller-identity
aws configure get region
~~~

Kết quả cần xác nhận đúng AWS account, đúng identity và đúng region. Đây là bước quan trọng vì nếu thao tác nhầm account hoặc region, tài nguyên có thể được tạo sai môi trường và phát sinh chi phí ngoài dự kiến.

{{% notice note %}}
Hạ tầng AWS có phát sinh chi phí khi chạy, đặc biệt là EKS control plane, NAT Gateway, RDS và ALB. Chỉ thực hiện <code>terraform apply</code> khi đã sẵn sàng kiểm thử và có kế hoạch thu hồi tài nguyên.
{{% /notice %}}

#### Bootstrap Terraform remote state

Terraform state được lưu trên S3 và khóa bằng DynamoDB để tránh xung đột khi thao tác nhiều lần.

~~~powershell
cd infra/bootstrap/state
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform apply
~~~

Sau khi bootstrap thành công, môi trường chính có thể dùng backend S3 để lưu trạng thái hạ tầng.

#### Cấu hình môi trường AWS

~~~powershell
cd infra/environments/aws
cp terraform.tfvars.example terraform.tfvars
cp backend.hcl.example backend.hcl
terraform init -backend-config=backend.hcl
~~~

Tệp <code>terraform.tfvars</code> chứa cấu hình môi trường như region, repository GitHub, CIDR và các tham số hạ tầng. Tệp <code>backend.hcl</code> chứa thông tin bucket và DynamoDB table cho remote state.

#### Cấu hình môi trường local

~~~powershell
cd <repo-root>
cp .env.example .env
~~~

Tệp <code>.env</code> phục vụ Docker Compose và không được commit lên repository vì có thể chứa giá trị nhạy cảm theo môi trường.

#### Secrets cho GitHub Actions

Sau khi Terraform apply thành công, cần cấu hình các secret sau trên GitHub:

| Secret | Nguồn |
|--------|-------|
| <code>AWS_ECR_ROLE_ARN</code> | <code>terraform output -raw github_actions_ecr_role_arn</code> |
| <code>AWS_TERRAFORM_PLAN_ROLE_ARN</code> | <code>terraform output -raw github_actions_terraform_plan_role_arn</code> |
| <code>AWS_TF_STATE_BUCKET</code> | Tên S3 bucket remote state |

#### Kiểm tra cuối trước khi triển khai

~~~powershell
docker --version
terraform version
aws --version
kubectl version --client
helm version --short
git --version
~~~

![Kết quả kiểm tra phiên bản công cụ trên máy thực tế](/images/5-Workshop/5.2-Prerequisite/tools-versions.png)

Ảnh minh chứng ghi nhận các phiên bản sau: Docker 29.2.1, Terraform v1.15.2, AWS CLI 2.34.36, kubectl client v1.34.1, Helm v4.2.0 và Git 2.54.0. Phiên bản cụ thể có thể khác tùy máy, miễn là lệnh chạy thành công và tương thích với EKS 1.30.

Khi các lệnh trên trả về bình thường, môi trường đã đủ điều kiện để chuyển sang bước chạy local và triển khai AWS.
