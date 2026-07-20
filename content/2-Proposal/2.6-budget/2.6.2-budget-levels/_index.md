---
title: "Budget by Expansion Level"
date: 2026-07-04
weight: 2
chapter: false
pre: " <b> 2.6.2 </b> "
---

To flex with internship budgets, proposals are divided into five expansion levels. Each level can be implemented independently or combined, depending on evaluation goals.

| Expansion level | Recommended implementation | Estimated budget | Notes |
|---|---|:---:|---|
| **Level 1 — Required improvements** | Upgrade EKS version; ECR lifecycle; upgrade runbook; basic Infracost | +0–10 USD | Mostly configuration and documentation changes; may reduce EKS cost |
| **Level 2 — Public endpoint security** | Route 53; ACM; HTTPS; basic AWS WAF | +10–30 USD/month | Suitable when demoing via a real domain |
| **Level 3 — Safe deployment** | Argo Rollouts; canary/blue-green; policy enforcement | +0–20 USD | Cost mainly from cluster resources |
| **Level 4 — Advanced observability** | Distributed tracing; SLO dashboards; synthetic checks | +10–40 USD/month | Depends on trace/log volume sent to AWS |
| **Level 5 — Production-like data** | RDS Multi-AZ; ElastiCache; backup/restore tests | +50 USD/month or more | Enable only briefly when HA evidence is needed |
