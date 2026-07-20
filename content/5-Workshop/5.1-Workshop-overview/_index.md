---
title : "Introduction"
date : 2024-01-01 
weight : 1 
chapter : false
pre : " <b> 5.1. </b> "
---

#### Deployment context

Mini E-commerce DevOps Platform is a project that builds a DevOps foundation for a microservices e-commerce system. Rather than rewriting the entire business application, the project inherits the Online Boutique workload to focus on the core internship value: containerization, deployment automation, infrastructure as code, secret management, GitOps, and system observability.

The application is deployed at two levels. The first is a local environment used to verify full business functionality. The second is an AWS environment used to demonstrate cloud deployment capabilities with EKS, ECR, RDS, ALB, and supporting operational components.

#### Technical objectives

The workshop targets three main goals. First, verify that the application runs stably on Docker Compose before moving to the cloud. Second, provide AWS infrastructure with Terraform to ensure repeatability and change control. Third, establish CI/CD and GitOps workflows so that built images can be deployed to EKS in a controlled manner.

#### Deployment architecture

The system comprises the following main layers:

+ Application layer: on EKS (Phase 1), <code>frontend</code>, <code>productcatalogservice</code>, <code>cartservice</code>, <code>checkoutservice</code>, <code>currencyservice</code>, and in-cluster Redis; the local environment adds payment, shipping, and email for full checkout testing.
+ Infrastructure layer: VPC <code>10.0.0.0/16</code>, public/private subnets, NAT Gateway, EKS <code>mini-ecommerce-devops</code> (v1.30), ECR (4 repositories), RDS PostgreSQL 16, IAM OIDC/IRSA, S3 + DynamoDB for Terraform state, and Secrets Manager.
+ Kubernetes platform layer: AWS Load Balancer Controller, External Secrets Operator, Argo CD, Prometheus/Grafana (namespace <code>observability</code>), and CloudWatch alarms.
+ CI/CD layer: GitHub Actions (<code>ci-build-push</code>, <code>terraform-plan</code>), GitHub OIDC, Trivy, cosign/SBOM, and the GitOps repository.
+ Public access via ALB HTTP on port <code>:80</code> (Route 53/ACM HTTPS deferred in Phase 1).

<div class="arch-viewer" id="arch-viewer-en" data-arch-viewer data-zoom-in="Zoom In" data-zoom-out="Zoom Out">
  <style>
    #arch-viewer-en .arch-viewer__image { width: 100% !important; height: 100% !important; max-width: none !important; object-fit: contain !important; }
    #arch-viewer-en.is-zoomed .arch-viewer__image { width: 230% !important; height: 230% !important; }
  </style>
  <button class="arch-viewer__toggle" type="button" aria-pressed="false">
    Zoom In
  </button>
  <div class="arch-viewer__stage" tabindex="0" aria-label="Drag to inspect the architecture diagram">
    <img class="arch-viewer__image" src="../../images/5-Workshop/5.1-Workshop-overview/architecture.svg?v=20260707-4" alt="Overall architecture" draggable="false" />
  </div>
</div>
<p class="arch-viewer-help"><em>Use the top-left button to zoom in/out. While zoomed in, drag horizontally or use the mouse wheel/trackpad to inspect details.</em></p>
<script src="../../js/arch-viewer.js?v=20260707-3"></script>

#### Two-repository model

The project separates application source code and deployment manifests into two repositories:

| Repository | Role |
|------------|------|
| <code>VoAnhKiet1410/mini-ecommerce-devops</code> | Application source, Docker Compose, Terraform, operational scripts, and GitHub Actions |
| <code>VoAnhKiet1410/mini-ecommerce-gitops</code> | Kubernetes manifests, Kustomize overlays, and Argo CD Application |

This separation keeps the application pipeline and deployment state more independent. When a new image is built, the GitOps repository is updated with the image tag, and Argo CD syncs the change to the cluster. Rollback is easier because you can revert to a previous manifest or image tag without modifying workloads directly in the cluster.

#### Current deployment scope

| Component | Local Compose | AWS EKS |
|------------|---------------|---------|
| Product browsing | Yes | Yes |
| Shopping cart | Yes | Yes, using Redis in the cluster |
| Full checkout | Yes (10 containers) | Limited — payment, email, shipping not on cluster |
| PostgreSQL | Yes, runs locally (platform DB) | Yes, RDS platform DB (Terraform + ESO) |
| Public ingress | Not required | Yes, ALB HTTP :80 |
| Workloads on EKS | — | 6 pods in boutique namespace |
| Observability | Basic | Prometheus, Grafana, CloudWatch |

#### Conclusion

Section 5.1 establishes the context for the entire workshop. The following sections proceed from environment preparation, local testing, AWS infrastructure provisioning, GitOps synchronization, security verification, to resource teardown after the demo is complete.
