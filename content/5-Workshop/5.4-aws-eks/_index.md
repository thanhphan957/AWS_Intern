---
title : "Deploy to AWS EKS"
date : 2024-01-01
weight : 4
chapter : false
pre : " <b> 5.4. </b> "
---

#### AWS deployment objective

This section documents deploying the DevOps platform to AWS. The focus is not only running the application on Kubernetes, but also demonstrating infrastructure provisioning with Terraform, installing platform components on EKS, syncing the application via GitOps, and adding system observability.

+ AWS infrastructure is provisioned with Terraform, including VPC, EKS, ECR, RDS, IAM, Secrets Manager, and CloudWatch.
+ Cluster <code>mini-ecommerce-devops</code> runs in region <code>ap-southeast-1</code>.
+ Users access the application through an Application Load Balancer created by the AWS Load Balancer Controller from a Kubernetes Ingress.

#### Main phases

- [Provision infrastructure with Terraform](5.4.1-prepare/) creates VPC, EKS, ECR, RDS, and IAM.
- [Install platform components](5.4.2-platform-components/) installs AWS Load Balancer Controller, External Secrets Operator, and Argo CD.
- [Verify GitOps and ALB](5.4.3-test-endpoint/) checks application status after sync and access via ALB.
- [System observability](5.4.4-observability/) deploys Prometheus, Grafana, and CloudWatch alarms.

This sequence reflects the correct deployment dependency order: infrastructure first, then controllers and GitOps, followed by application verification and the monitoring layer.

{{% notice note %}}
All evidence images in section 5.4 are real PowerShell terminal logs or real browser captures from the AWS EKS environment <code>mini-ecommerce-devops</code>. No rendered or AI-generated screenshots are used.
{{% /notice %}}
