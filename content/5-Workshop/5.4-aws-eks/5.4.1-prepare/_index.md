---
title : "Provision Infrastructure with Terraform"
date : 2024-01-01
weight : 1
chapter : false
pre : " <b> 5.4.1 </b> "
---

#### Objective

This step creates all AWS infrastructure required to run the application on Kubernetes. All resources are defined in Terraform to ensure control, reproducibility, and teardown capability.

#### Terraform plan

~~~powershell
cd infra/environments/aws
terraform plan -out=tfplan
~~~

The plan previews resources that will be created or changed. Before applying, carefully review region, CIDR blocks, resource counts, and IAM roles.

{{% notice warning %}}
<code>terraform apply</code> does not run in CI. Infrastructure apply is performed manually after reviewing <code>tfplan</code>.
{{% /notice %}}

#### Terraform apply

~~~powershell
terraform apply tfplan
~~~

Apply typically takes 15 to 25 minutes because EKS and RDS require significant provisioning time.

After apply, run <code>terraform output</code> to capture key values. The screenshot records:

+ <code>eks_cluster_name</code> = <code>mini-ecommerce-devops</code>
+ <code>rds_endpoint</code> = <code>mini-ecommerce-devops-platform....ap-southeast-1.rds.amazonaws.com:5432</code>

A <code>Deprecated Parameter: dynamodb_table</code> warning may appear from the Terraform backend—it does not affect apply results.

![terraform output after apply (real PowerShell log)](/images/5-Workshop/5.4-aws-eks/terraform-plan-live.png)

#### Outputs to record

~~~powershell
terraform output eks_cluster_name
terraform output -raw ecr_repository_urls
terraform output -raw alb_controller_role_arn
terraform output -raw external_secrets_role_arn
terraform output rds_endpoint
terraform output -raw github_actions_ecr_role_arn
~~~

These outputs are used in subsequent steps for kubectl configuration, controller installation, GitHub Actions setup, and RDS verification.

#### Configure kubectl

~~~powershell
aws eks update-kubeconfig --region ap-southeast-1 --name mini-ecommerce-devops
kubectl get nodes -o wide
~~~

The expected result is 1 node in <code>Ready</code> status, version <code>v1.30.14-eks</code> (screenshot: node <code>ip-10-0-1-60.ap-southeast-1.compute.internal</code>, age ~19 minutes).

![aws eks update-kubeconfig and kubectl get nodes -o wide (real PowerShell log)](/images/5-Workshop/5.4-aws-eks/kubectl-nodes-live.png)

#### Resources created

| Module | Main resources |
|--------|----------------|
| <code>vpc</code> | VPC, subnets, Internet Gateway, NAT Gateway |
| <code>eks</code> | EKS cluster and managed node group |
| <code>ecr</code> | Image repositories for services |
| <code>rds</code> | PostgreSQL 16 |
| <code>secrets</code> | AWS Secrets Manager |
| <code>iam-github-oidc</code> | IAM role for GitHub Actions |
| <code>iam-irsa</code> | IAM roles for controllers in EKS |
| <code>observability-cloudwatch</code> | CloudWatch alarms |

#### Security note

In the demo, the EKS API endpoint may be publicly accessible for convenience when operating from a personal machine. To restrict access, set the public endpoint CIDR to a specific IP:

~~~hcl
cluster_endpoint_public_access_cidrs = ["YOUR_PUBLIC_IP/32"]
~~~

#### Result

After this step, AWS infrastructure is ready for platform component installation and application sync to the cluster.
