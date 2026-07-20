---
title : "Prerequiste"
date : 2024-01-01 
weight : 2 
chapter : false
pre : " <b> 5.2. </b> "
---

#### Purpose of environment preparation

The preparation phase ensures that tools, access permissions, and baseline configuration are ready before running the application or creating AWS resources. For a project spanning Docker, Terraform, AWS, Kubernetes, and GitHub Actions, a missing tool or incorrect region configuration can cause failures across many later steps.

#### Required tools

| Tool | Recommended version | Purpose |
|------|---------------------|---------|
| Docker Desktop or Docker Engine | Latest | Run the local environment with Docker Compose |
| Terraform | >= 1.5 | Provision AWS infrastructure with Infrastructure as Code |
| AWS CLI v2 | Latest | Authenticate to AWS and interact with EKS |
| kubectl | Compatible with EKS 1.30 | Manage Kubernetes resources |
| Helm | 3.x or later | Install platform components on EKS |
| Git | Latest | Manage source code and the GitOps repository |

On Windows, the project provides <code>.ps1</code> scripts; on Linux or macOS, use the corresponding <code>.sh</code> scripts.

#### Clone the repository

~~~powershell
git clone https://github.com/VoAnhKiet1410/mini-ecommerce-devops.git
cd mini-ecommerce-devops
~~~

The GitOps repository is used by Argo CD to sync manifests:

~~~text
https://github.com/VoAnhKiet1410/mini-ecommerce-gitops
~~~

#### Verify AWS CLI

The AWS account must have permissions to create VPC, EKS, ECR, RDS, IAM, Secrets Manager, and CloudWatch resources in region <code>ap-southeast-1</code>.

~~~powershell
aws sts get-caller-identity
aws configure get region
~~~

The output must confirm the correct AWS account, identity, and region. This step is important because operating in the wrong account or region can create resources in an unintended environment and incur unexpected costs.

{{% notice note %}}
AWS infrastructure incurs charges while running, especially the EKS control plane, NAT Gateway, RDS, and ALB. Only run <code>terraform apply</code> when you are ready to test and have a plan to tear down resources afterward.
{{% /notice %}}

#### Bootstrap Terraform remote state

Terraform state is stored in S3 and locked with DynamoDB to prevent conflicts during repeated operations.

~~~powershell
cd infra/bootstrap/state
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform apply
~~~

After a successful bootstrap, the main environment can use the S3 backend to store infrastructure state.

#### Configure the AWS environment

~~~powershell
cd infra/environments/aws
cp terraform.tfvars.example terraform.tfvars
cp backend.hcl.example backend.hcl
terraform init -backend-config=backend.hcl
~~~

The <code>terraform.tfvars</code> file contains environment settings such as region, GitHub repository, CIDR blocks, and infrastructure parameters. The <code>backend.hcl</code> file contains the bucket and DynamoDB table details for remote state.

#### Configure the local environment

~~~powershell
cd <repo-root>
cp .env.example .env
~~~

The <code>.env</code> file is used by Docker Compose and must not be committed to the repository because it may contain environment-specific sensitive values.

#### Secrets for GitHub Actions

After a successful Terraform apply, configure the following secrets in GitHub:

| Secret | Source |
|--------|--------|
| <code>AWS_ECR_ROLE_ARN</code> | <code>terraform output -raw github_actions_ecr_role_arn</code> |
| <code>AWS_TERRAFORM_PLAN_ROLE_ARN</code> | <code>terraform output -raw github_actions_terraform_plan_role_arn</code> |
| <code>AWS_TF_STATE_BUCKET</code> | S3 remote state bucket name |

#### Final check before deployment

~~~powershell
docker --version
terraform version
aws --version
kubectl version --client
helm version --short
git --version
~~~

![Tool version verification results (live capture)](/images/5-Workshop/5.2-Prerequisite/tools-versions.png)

The screenshot records: Docker 29.2.1, Terraform v1.15.2, AWS CLI 2.34.36, kubectl client v1.34.1, Helm v4.2.0, and Git 2.54.0. Exact versions may vary by machine as long as commands succeed and remain compatible with EKS 1.30.

When all commands return successfully, the environment is ready to proceed with local execution and AWS deployment.
