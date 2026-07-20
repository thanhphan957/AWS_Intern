---
title: "Cost-Control Recommendations"
date: 2026-07-04
weight: 3
chapter: false
pre: " <b> 2.6.3 </b> "
---

#### FinOps principles applied

| Recommendation | Description |
|---|---|
| Prioritize EKS version upgrade first | Can reduce extended-support cost; lowers lifecycle risk |
| Do not enable expensive services simultaneously | Avoid activating RDS Multi-AZ + ElastiCache + multi-node autoscaling if only for reporting |
| WAF — minimal rules | Enable only necessary rules; start in count mode before block; monitor request volume |
| Tracing — low sampling | Set low sampling rate (e.g. 5–10%) to avoid excessive trace/log cost |
| Infracost in pull requests | Every Terraform change includes cost estimate before merge |
| ECR lifecycle policy | Automatically delete unused old images; reduce storage cost |
| AWS Budget alert | Create budgets at 10, 25, 50, and 100 USD thresholds; receive email alerts |
| Teardown after lab | Shut down or delete unnecessary resources immediately after completing demo/evidence |

#### Conclusion

Cost control is not only about limiting spending but **integrating FinOps thinking into the DevOps workflow**: forecast upfront, monitor during operations, and clean up after completion — suitable for both internship environments and production operations practice.
