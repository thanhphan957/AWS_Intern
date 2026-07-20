---
title: "Target Architecture Direction"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.3.1 </b> "
---

#### Overview

The target architecture is described using a **layered architecture** model to clarify the current state of each layer, upgrade direction, and the technical basis for each design decision. This presentation helps assess the impact of each change without losing system-wide coherence.

#### Layer direction matrix

| Architecture layer | Current state | Target direction | Basis for proposal |
|---|---|---|---|
| **Edge / Ingress** | ALB exposes the frontend; access mainly via load balancer DNS | Add Route 53 (custom domain), ACM (TLS), end-to-end HTTPS, AWS WAF, and rules to filter abnormal requests | Meet edge security requirements for public Internet access; standardize a single entry point |
| **Compute** | Small EKS managed node group for demos | Upgrade EKS to a standard-support version; multi-AZ node groups; HPA for pod scaling (shown on diagram); Karpenter/Cluster Autoscaler by phase | Improve load capacity and reduce cluster lifecycle risk |
| **Deployment** | GitOps with Argo CD; direct replacement deployment | Add Argo Rollouts for canary/blue-green; rollback by SLO/error-rate metrics | Reduce blast radius on release; suitable for near-production environments |
| **Data** | RDS PostgreSQL and Redis at demo scope | RDS Multi-AZ; RDS Proxy; periodic backup/restore tests; ElastiCache for Redis when higher stability is needed | Protect business data; separate cache from pods to reduce state-loss risk |
| **Security** | OIDC for CI, IRSA, image scan/signing at pipeline level | CI: Snyk scan + OIDC assume role to push ECR (on diagram); runtime: Kyverno admission policy, ESO sync from Secrets Manager; signed images (Cosign) and network policy by phase | Enforce defense-in-depth from supply chain to runtime |
| **Observability** | Basic Prometheus/Grafana/CloudWatch | CloudWatch, AWS X-Ray, SLO/SLI dashboards (on diagram); OpenTelemetry and synthetic monitoring in phase 5 | Support RCA (root cause analysis) across microservices |
| **Cost management** | Manual estimates and teardown after lab | AWS Budgets, Infracost in PRs, ECR lifecycle policy (on diagram); VPC endpoints and scheduled shutdown by phase | Integrate FinOps into infrastructure change workflows |

#### Network model and segmentation

The target architecture maintains a **multi-AZ VPC** model with clear subnet separation:

| Subnet | Components placed | Design rationale |
|---|---|---|
| Public Subnet (AZ A/B) | NAT Gateway, ALB | Allow outbound from private subnets; single HTTPS entry point from the Internet |
| Private App Subnet | Amazon EKS, workload pods | Workloads are not directly exposed to the Internet; reduced attack surface |
| Private Data Subnet | RDS Primary/Standby, RDS Proxy | Isolate the data layer; allow connections only from the app subnet via security groups |
| Private Cache Subnet | ElastiCache for Redis | Separate cache from compute; support stable session and catalog caching |

#### Cross-layer integration

- **Edge → Compute:** Users query DNS via Route 53; WAF filters requests before ALB; ALB routes HTTPS (ACM TLS) to Services/Ingress for microservices on EKS.
- **Compute → Data:** Workloads connect to RDS via RDS Proxy; cache via ElastiCache in the Private Cache Subnet.
- **CI/CD → Compute:** GitHub Actions assumes an IAM role via OIDC to push images to ECR; Argo CD watches the GitOps repo and reconciles workloads; pods pull images from ECR.
- **Security across layers:** ESO syncs secrets from Secrets Manager; Kyverno enforces admission policy (signed image, resource limits) — independent of Argo Rollouts; WAF protects the edge.
- **Observability across layers:** Workloads send logs/metrics to CloudWatch and traces to X-Ray; SLO/SLI tracks service quality throughout rollout.

#### Conclusion

The target architecture direction does not require redesigning the system, but **systematically upgrading each layer** in the priority order defined in sections 2.4 and 2.5, ensuring each change can be verified with specific technical evidence.
