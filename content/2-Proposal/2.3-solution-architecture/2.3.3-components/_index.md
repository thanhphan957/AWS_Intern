---
title: "Components to Add"
date: 2026-07-04
weight: 3
chapter: false
pre: " <b> 2.3.3 </b> "
---

#### Overview

The catalog below lists proposed components to add, grouped by domain and priority. Items marked **(on diagram)** appear in the [core architecture diagram](../); remaining items are delivered by phase in [2.4](../../2.4-implementation-plan/).

#### Edge and perimeter security

| Component | Role in architecture | Priority |
|---|---|:---:|
| Amazon Route 53 + ACM **(on diagram)** | Provide custom domain and TLS certificate for HTTPS | High |
| AWS WAF **(on diagram)** | Filter malicious requests before ALB; rate limiting and ALB protection | High |

#### CI/CD and pipeline security

| Component | Role in architecture | Priority |
|---|---|:---:|
| Snyk **(on diagram)** | Scan dependency and source vulnerabilities in pull requests | High |
| Infracost **(on diagram)** | Estimate Terraform cost in pull requests before merge | Medium |
| OIDC + IAM role for ECR push **(on diagram)** | GitHub Actions assumes role without static access keys | High |
| Cosign + SBOM | Sign images and generate SBOM after merge; supports Kyverno signed-image enforcement | High |

#### Compute and deployment

| Component | Role in architecture | Priority |
|---|---|:---:|
| EKS version upgrade | Move cluster to standard support; reduce extended-support cost | High |
| HPA **(on diagram)** | Auto-scale pod count by CPU/memory | High |
| Argo Rollouts **(on diagram)** | Canary/blue-green deployment; metric-based rollback instead of full replacement | High |
| Karpenter / Cluster Autoscaler | Auto-scale nodes with workload demand (not on core diagram) | Low – Medium |

#### Runtime security

| Component | Role in architecture | Priority |
|---|---|:---:|
| Kyverno / OPA Gatekeeper **(on diagram)** | Admission policy: signed image, resource limits, non-root container (independent of Argo Rollouts) | High |
| ESO + Secrets Manager **(on diagram)** | Sync secrets from AWS Secrets Manager into Kubernetes Secrets | High |

#### Data and cache

| Component | Role in architecture | Priority |
|---|---|:---:|
| RDS Multi-AZ + RDS Proxy **(on diagram)** | Database HA; connection pooling; periodic restore tests | Medium |
| Amazon ElastiCache for Redis **(on diagram)** | Managed Redis instead of a Redis pod; more stable session and catalog cache | Medium |

#### Observability

| Component | Role in architecture | Priority |
|---|---|:---:|
| CloudWatch + AWS X-Ray + SLO/SLI **(on diagram)** | Logs, metrics, distributed tracing, and service quality monitoring | Medium |
| OpenTelemetry | Standardize instrumentation before exporting to X-Ray (phase 5) | Medium |
| Synthetic monitoring | Periodic endpoint checks from outside the cluster | Low – Medium |

#### Cost governance and networking

| Component | Role in architecture | Priority |
|---|---|:---:|
| AWS Budgets + ECR lifecycle **(on diagram)** | Budget threshold alerts; automatic cleanup of old images | Medium |
| VPC Endpoints | Reduce NAT Gateway traffic for S3, ECR, STS (not on core diagram) | Medium |

#### Implementation note

**High**-priority components should be prioritized in phases 1–4 (see [2.4.1](../../2.4-implementation-plan/2.4.1-priority-phases/)). **Medium**-priority components are deployed when the foundation is stable and budget allows. Enabling multiple managed services at once (RDS Multi-AZ + ElastiCache + broad autoscaling) requires careful cost consideration (see [2.6](../../2.6-budget/)).
