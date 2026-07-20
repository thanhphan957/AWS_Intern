---
title: "Priority Phases"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.4.1 </b> "
---

#### Overview

Proposals are divided into six implementation phases, each focused on a specific capability group. Phase order reflects the principle of **stability and security first, business expansion later**.

| Phase | Implementation content | Required deliverables / evidence |
|---|---|---|
| **Phase 1 — Strengthen the foundation** | Upgrade EKS version; review Terraform modules; add ECR lifecycle policy; standardize upgrade/teardown runbooks | Reviewed Terraform plan; EKS cluster on new version; lifecycle policy; updated runbook |
| **Phase 2 — Complete access security** | Deploy HTTPS (ACM), custom domain (Route 53), AWS WAF for ALB | HTTPS domain access; WAF rules; ALB/WAF configuration screenshots |
| **Phase 3 — Safer deployments** | Integrate Argo Rollouts; configure canary deployment; metric-based rollback | Rollout manifests; canary demo; successful rollback evidence |
| **Phase 4 — Enforce security policies** | Deploy Kyverno/OPA: signed image, resource limits, non-root container, namespace policy | Policy YAML; rejected invalid workloads; image-signing workflow |
| **Phase 5 — Advanced observability** | Add distributed tracing; SLO/SLI dashboards; log queries; synthetic checks | Cross-service traces; SLO dashboards; contextual alert rules |
| **Phase 6 — Data and business upgrades** | Integrate RDS into the order flow; consider ElastiCache; run backup/restore tests | Order data stored in DB; successful restore test; updated data diagram |

#### Phase completion criteria

A phase is considered complete when all of the following are met: **(1)** changes are merged via a reviewed pull request; **(2)** CI/CD and GitOps pipelines run successfully; **(3)** technical evidence exists (screenshots, logs, dashboards, endpoints) for reporting; **(4)** unnecessary resources are cleaned up or scheduled for shutdown to control cost.
