---
title: "Risk Assessment"
date: 2026-07-04
weight: 7
chapter: false
pre: " <b> 2.7. </b> "
---

#### Overview

Expanding the project increases system realism but also technical complexity and operational risk. The table below identifies key risks, analyzes cause and impact, and proposes corresponding mitigation measures.

| Risk | Cause | Impact | Mitigation |
|---|---|---|---|
| Unexpected cost growth | Enabling WAF, ElastiCache, RDS Multi-AZ, tracing, or scaling many nodes | AWS cost exceeds personal budget | Estimate with Infracost; enable briefly; AWS Budget alerts; teardown after lab |
| EKS upgrade breaks workloads | New Kubernetes versions change APIs or add-on compatibility | Controllers/workloads may not operate normally | Check compatibility matrix; upgrade step by step; back up manifests; prepare rollback |
| WAF blocks valid requests | Rules too strict or insufficiently tested | Users cannot access the application | Start WAF in count mode; switch to block after verification |
| Incorrect canary/blue-green configuration | Rollout strategy or metric analysis is inaccurate | Traffic may route to the wrong version | Test rollout on staging first; limit initial traffic percentage |
| Policy enforcement blocks deployment | Kyverno/OPA rules too strict or incompatible with current manifests | Deploy pipeline fails repeatedly | Start in audit mode; gradually move to enforce |
| Observability generates excessive data | Log/tracing sampling too high; long retention | Increased CloudWatch/X-Ray cost | Limit retention; low sampling; collect only needed metrics |
| Business expansion increases complexity | Order/payment/email changes touch many services | Application errors outside DevOps scope | Split by service; maintain clear rollback; test each flow |

#### Overall risk assessment

With phased delivery, plan review, and verification evidence, **overall risk is assessed as medium and controllable**—provided implementation principles in section 2.4.2 and cost recommendations in section 2.6.3 are followed.
