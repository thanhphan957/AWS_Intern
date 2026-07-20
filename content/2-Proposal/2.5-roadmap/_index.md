---
title: "Development Roadmap"
date: 2026-07-04
weight: 5
chapter: false
pre: " <b> 2.5. </b> "
---

#### Overview

The roadmap below maps implementation phases (section 2.4.1) to a concrete timeline, prioritizing improvements with direct impact on **security**, **stability**, and **evaluability** within the internship report scope. Timelines are estimates and may be adjusted based on actual progress and mentor feedback.

| Phase | Estimated time | Focus | Expected result |
|:---|:---:|---|---|
| **Phase 1** | 1–2 weeks | Upgrade EKS version; review Terraform; ECR lifecycle policy | Lower support-lifecycle risk; better control of old images |
| **Phase 2** | 1–2 weeks | HTTPS (ACM), custom domain (Route 53), AWS WAF | Public application via official domain with edge protection |
| **Phase 3** | 2 weeks | Argo Rollouts; canary/blue-green deployment | Safer new releases; clear rollback |
| **Phase 4** | 2 weeks | Kyverno/OPA; signed-image enforcement; Pod Security Standards/admission policy | Cluster can block non-compliant configurations |
| **Phase 5** | 2–3 weeks | OpenTelemetry/X-Ray; SLO dashboard; synthetic monitoring | Deeper system visibility; more effective failure analysis |
| **Phase 6** | 2–4 weeks | Order-data integration; RDS Multi-AZ/ElastiCache (if needed) | Clearer business logic; more stable data layer |

#### Total estimated duration

The full roadmap spans approximately **10–15 weeks** if implemented sequentially. In an internship context, scope can be **shortened** by fully implementing phases 1–4 only (foundation, security, safe release, policy) and presenting phases 5–6 as next steps — while still ensuring technical depth for the report.

#### Evaluation milestones

| Milestone | Timing | Success criteria |
|---|---|---|
| Milestone 1 — Solid foundation | After phases 1–2 | EKS upgraded; HTTPS working; WAF configured |
| Milestone 2 — Safe release | After phases 3–4 | Successful canary demo; policy enforcement working |
| Milestone 3 — Advanced operations | After phases 5–6 | End-to-end tracing; order data persisted in DB |
