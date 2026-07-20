---
title: "Proposed Solution Architecture"
date: 2026-07-04
weight: 3
chapter: false
pre: " <b> 2.3. </b> "
---

#### Purpose and scope

This section presents the **target solution architecture** for the next development phase of the Mini E-commerce DevOps Platform. The proposed architecture builds on the existing foundation and adds security, scalability, observability, and cost governance capabilities — **without replacing the original design**.

#### Design principles

| Principle | Description |
|---|---|
| Controlled evolution | Keep the current VPC, EKS, GitOps, and CI/CD pipeline; add only necessary components |
| Clear layering | Separate edge, compute, data, security, observability, and cost governance |
| Defense in depth | Control from pull request, image signing, and admission policy through to edge WAF |
| Safe deployment | GitOps as source of truth; progressive delivery reduces release risk |
| End-to-end observability | Metrics, logs, traces, and SLO/SLI across the request lifecycle |
| Cost control | Forecast cost before infrastructure changes; lifecycle policies and budget alerts |

#### Overall architecture diagram

The diagram below describes the target architecture deployed in AWS Region `ap-southeast-1`, including the main functional zones:

![Mini E-commerce DevOps Platform solution architecture](/images/2-Proposal/mini-ecommerce-devops-architecture.png?v=20260707)

**Architecture zones (as shown in the diagram):**

| Zone | Main components | Role |
|---|---|---|
| CI/CD platform (outside AWS) | GitHub Source repo, GitHub Actions (Snyk, Infracost), GitOps repo | Dev/Admin commit/PR; security scan and cost estimate in CI; assume IAM role via OIDC to push images to ECR; update deployment manifests |
| Network (multi-AZ VPC) | Internet Gateway, Public Subnet (NAT Gateway, ALB), Private App/Data/Cache Subnets | Public/private separation; NAT for private outbound; ALB as the single HTTPS entry point |
| Edge / Public access | Route 53, AWS WAF, ACM TLS, ALB | DNS resolution; WAF filters requests before ALB; TLS certificate from ACM; route traffic to EKS workloads |
| Compute (Private App Subnet) | Amazon EKS: Workloads (Pods), HPA, Argo CD, Argo Rollouts, Kyverno, ESO | Run microservices; HPA scales pods; Argo CD syncs GitOps; Argo Rollouts for progressive delivery; Kyverno enforces admission policy; ESO syncs secrets |
| Data | RDS Proxy, RDS Primary/Standby (Private Data Subnet), ElastiCache (Private Cache Subnet) | Connection pooling via RDS Proxy; HA with Primary/Standby; session/catalog cache via ElastiCache |
| Registry & Secrets | Amazon ECR, AWS Secrets Manager | Store container images; manage credentials; ESO syncs secrets into Kubernetes Secrets |
| Observability | CloudWatch, AWS X-Ray, SLO/SLI | Collect logs/metrics, distributed traces, and service quality signals |
| Cost governance | AWS Budgets, Infracost, ECR lifecycle policy | Budget alerts; Terraform cost estimates in PRs; prune unused images on ECR |

{{% notice note %}}
Components **not shown on the core diagram** but proposed by phase (see [2.3.3](2.3.3-components/)): Karpenter/Cluster Autoscaler, OpenTelemetry, VPC Endpoints, synthetic monitoring, and Cosign/SBOM in the merge pipeline.
{{% /notice %}}

**Main data and control flows:**

1. **Deployment flow:** Dev/Admin → Commit/PR → GitHub Actions (Snyk, Infracost) → OIDC assume role → push ECR + update GitOps repo → Argo CD watch/sync → Argo Rollouts on EKS.
2. **User access flow:** User → Route 53 (DNS) → WAF → ALB (ACM TLS) → EKS workloads → RDS Proxy / ElastiCache.
3. **Security flow:** Secrets Manager → ESO → Kubernetes Secrets → Workloads; Kyverno controls workload admission; WAF protects the edge before ALB.
4. **Observability flow:** Workloads → CloudWatch (logs/metrics) and X-Ray (traces) → SLO/SLI dashboards.

#### Detailed contents

- [Target architecture direction by layer](2.3.1-target-architecture/)
- [Deployment flow after expansion](2.3.2-deployment-flow/)
- [Components to add and priority levels](2.3.3-components/)
