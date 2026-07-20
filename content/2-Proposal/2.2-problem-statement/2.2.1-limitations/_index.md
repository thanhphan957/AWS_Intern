---
title: "Remaining Limitations"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.2.1 </b> "
---

#### General assessment

After evaluating the current state following the platform implementation phase, the project has achieved its goal of demonstrating an end-to-end DevOps workflow. However, when measured against real-world operations criteria, the system still has limitations that need to be addressed in a planned way before expanding usage scope or long-term public exposure.

#### Detailed limitation analysis

| Limitation group | Current state | Impact if expansion continues |
|---|---|---|
| High availability (HA) | Infrastructure prioritizes low cost for demos; Multi-AZ is not deployed consistently across all critical components | Failures in one node, AZ, or supporting component may cause prolonged service disruption |
| Amazon EKS lifecycle | The cluster runs EKS `1.30`; as of 04/07/2026 this version has moved to extended support | Control plane cost increases; support lifecycle and add-on compatibility risks grow if upgrades are delayed |
| Edge security | The application is accessed via ALB but HTTPS, custom domain, AWS WAF, and edge protection are incomplete | Does not meet security requirements for real users or long-term public environments |
| Release strategy | CI/CD and GitOps foundations exist, but canary, blue-green deployment, and metric-based automatic rollback are missing | Each new release still risks impacting all users |
| Scalability | The node group is designed compactly for demos; autoscaling is not a primary focus | Under higher traffic, workloads may lack resources or require manual intervention |
| Deep observability | Basic monitoring exists, but distributed tracing, SLO/SLI, synthetic checks, and incident workflows are missing | Root cause is hard to identify when errors span multiple microservices |
| Software supply chain security | Image scan/signing direction exists, but mandatory admission policies at the cluster layer are not enforced | Non-compliant images may still be deployed without tight controls |
| Long-term cost governance | Cost estimates and teardown exist, but automatic cost forecasting before infrastructure changes is missing | Costs may rise quickly when expanding environments or enabling more managed services |
| Business data layer | RDS is provisioned, but the application does not yet use it deeply for orders, purchase history, and reporting | The system remains more of a DevOps demonstration platform than a complete e-commerce application |

#### Problem conclusion

From the limitations above, the central problem for the next phase is defined as follows: **a controlled expansion roadmap is needed to move the project from a DevOps demo model toward a more operational platform model, while still managing cost and technical complexity within internship scope**.
