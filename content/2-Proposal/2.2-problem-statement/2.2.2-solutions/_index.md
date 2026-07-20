---
title: "Proposed Future Solutions"
date: 2026-07-04
weight: 2
chapter: false
pre: " <b> 2.2.2 </b> "
---

#### Approach principles

To address the limitations above, the proposal applies an **evolutionary expansion** strategy: keep the existing architecture and foundation, and add capability layers in priority order. This approach limits disruption risk, leverages current technical investment, and fits the project's internship timeline and budget.

#### Proposed solution groups

| Solution group | Implementation content | Goal achieved |
|---|---|---|
| EKS infrastructure upgrade | Upgrade EKS to a standard-support version; add multi-AZ node groups; deploy HPA (on diagram); Karpenter/Cluster Autoscaler by phase | Improve scalability; reduce extended-support cost and lifecycle risk |
| Data availability | RDS Multi-AZ + RDS Proxy (on diagram); backup/restore tests; ElastiCache for Redis instead of a Redis pod | Reduce data-loss risk; improve persistence layer stability |
| CI/CD pipeline security | Snyk scan in pull requests; OIDC assume role to push to ECR; Cosign image signing after merge | Reduce supply-chain risk; avoid storing static credentials on CI |
| Internet access security | Deploy Route 53, ACM TLS, and AWS WAF before ALB | Meet security requirements when publishing the application to the Internet |
| In-cluster policy enforcement | Kyverno admission policy (independent of Argo Rollouts); ESO sync from Secrets Manager | Prevent unsafe configurations from reaching EKS |
| Progressive delivery | Integrate Argo Rollouts for canary and blue-green deployment | Reduce risk when releasing new versions; support controlled rollback |
| Advanced observability | CloudWatch, AWS X-Ray, SLO/SLI dashboards (on diagram); OpenTelemetry and synthetic monitoring by phase | Support failure analysis across microservices |
| Proactive cost management | AWS Budgets, Infracost in PRs, ECR lifecycle policy (on diagram); VPC endpoints by phase | Detect cost impact before infrastructure changes |
| Application business expansion | Integrate RDS into checkout/order services; store order history; add email/payment workflows | Increase the practical value of the e-commerce application |

#### Implementation note

The solutions above **do not need to be—and should not be—deployed all at once**. The recommended priority order is: strengthen the foundation and security first, then safe release strategy, policy enforcement, observability, and finally application business expansion.
