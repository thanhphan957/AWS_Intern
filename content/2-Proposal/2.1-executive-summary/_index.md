---
title: "Executive Summary"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.1. </b> "
---

#### Current project state

The **Mini E-commerce DevOps Platform** project has demonstrated end-to-end deployment of a microservices e-commerce system on AWS: from local development and container packaging, infrastructure provisioning with Terraform, operations on Amazon EKS, CI/CD automation (GitHub Actions), deployment configuration synchronization via Argo CD, and platform-level secret management and monitoring capabilities.

#### Problems to address

As the system moves from a demo environment toward more sustainable operations, it needs additional capabilities in: **high availability**, **edge access security**, **risk-controlled release strategy**, **autoscaling**, **deep system observability**, **proactive cost governance**, and **disaster recovery**.

#### Proposed direction

| Proposal group | Goal | Value delivered |
|---|---|---|
| Production-ready infrastructure upgrade | Add high availability, autoscaling, backup, and disaster recovery | Higher stability and recoverability during incidents |
| Security hardening | Deploy HTTPS, AWS WAF, policy enforcement, image verification, and network policy | Lower risk when exposing workloads to the Internet |
| CI/CD and GitOps expansion | Support multiple environments, canary/blue-green deployment, and metric-based rollback | Limit global impact when releasing new versions |
| Observability upgrade | Add distributed tracing, SLO/SLI, operational dashboards, and contextual alerts | Shorter time to detect and resolve incidents |
| Cost optimization | AWS Budgets, Infracost in PRs, ECR lifecycle policy (on diagram); Spot nodes, VPC endpoints, and scheduled resource shutdown by phase | Control long-term operating costs |
| Application feature expansion | Integrate RDS into the order flow; add payment, email, and purchase history | Increase business value beyond DevOps platform alone |

#### Priority order

Proposals are ordered by the principle of **stability and security first, business expansion later**. Specifically: upgrade the EKS lifecycle and strengthen the foundation → complete HTTPS/WAF → deploy progressive delivery → enforce security policies → upgrade observability → expand the data and business layers. This approach fits internship timelines, limited budgets, and the need to demonstrate technical capability in the report.
