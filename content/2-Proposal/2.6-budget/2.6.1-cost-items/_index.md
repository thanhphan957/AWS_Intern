---
title: "Items That May Add Cost"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.6.1 </b> "
---

The table below lists items that may incur costs when implementing proposals, with control notes suited to an internship environment.

| Proposal | Added cost | Control note |
|---|---|---|
| Upgrade EKS version | May **reduce** cost when moving from extended support to standard support | Prioritize early |
| Route 53 + domain | Domain registration and hosted-zone fees (~a few USD/month) | Only needed when demoing via a real domain |
| ACM (AWS Certificate Manager) | Public certificates usually have **no separate fee** | Attach to ALB to enable HTTPS |
| AWS WAF | Web ACL, rule, and request-processing fees | Enable only minimum rules; monitor request volume |
| Argo Rollouts | No separate AWS service fee | Slight increase in pod/controller resources in the cluster |
| Kyverno / OPA Gatekeeper | No separate AWS service fee | Requires additional CPU/memory for policy controllers |
| OpenTelemetry / X-Ray | Fees based on trace volume and log ingest | Limit sampling rate during demos |
| ElastiCache for Redis | Managed Redis node fees (~from a few USD/hour depending on type) | Use only when replacing the Redis pod |
| RDS Multi-AZ | **Significant** database cost increase (roughly double Single-AZ) | Enable only briefly to demonstrate HA |
| Karpenter / Cluster Autoscaler | May increase node count as workload grows | Set maximum node limits and budget alerts |
| VPC Endpoints | Hourly endpoint and data-processing fees | Consider when NAT Gateway traffic is high |

#### Note

Actual costs depend on region (`ap-southeast-1`), instance type, runtime duration, and usage level. All Terraform changes should include **Infracost** output in pull requests to forecast cost before apply.
