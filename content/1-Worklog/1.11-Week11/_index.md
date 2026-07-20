---
title: "Week 11 Worklog"
date: 2026-06-29
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 objectives:

* **Consolidate Week 10 advanced knowledge** on Docker, ECR registry, and container orchestration environments.
* **Practice designing multi-service infrastructure** using Docker Compose and operate streamlined containers on Amazon Lightsail Container Service.
* **Deeply study automated CI/CD processes** customized for containers, decompose legacy software architectures, and upgrade workload processing flows on EKS/Fargate systems.

### Week timeframe: **June 29–July 5, 2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference material |
| --- | --- | --- | --- | --- |
| Mon | Review old lessons. Practice configuring `docker-compose.yml` to launch a multi-component application suite (Frontend, API, Database) concurrently; get familiar with internal network configuration and local volumes. | June 29, 2026 | June 29, 2026 | [Application Modernization](https://cloudjourney.awsstudygroup.com/4-modernize/) / [Practice 15](https://000015.awsstudygroup.com/) |
| Tue | Approach Amazon Lightsail Container Service: Create services, push images, and deploy simple containers. Analyze and compare pros/cons regarding cost and operational complexity between Lightsail and ECS/Fargate. | June 30, 2026 | June 30, 2026 | [Lab 67](https://000067.awsstudygroup.com/) |
| Wed - Thu | Decompose Monolith to Microservices architecture: Divide independent service domains based on bounded context, build corresponding images independently, and plan storage repositories. | July 1, 2026 | July 2, 2026 | [Application Modernization](https://cloudjourney.awsstudygroup.com/4-modernize/) |
| Fri | Establish CI/CD flow for container infrastructure: Build automation scripts using GitHub Actions (or CodePipeline) to perform image building, security vulnerability scanning, pushing to ECR, and updating manifests. | July 3, 2026 | July 3, 2026 | [Lab 126](https://000126.awsstudygroup.com/) |
| Sat - Sun | Advanced configuration on EKS/Fargate clusters: Optimize core services via Deployment and Service, verify Pod self-healing, and monitor centralized logs with kubectl and CloudWatch. <br><br> **Cleanup:** Tear down Lightsail endpoints, clean up experimental deployment versions on EKS, and free ECR storage. | July 4, 2026 | July 5, 2026 | [Lab 126](https://000126.awsstudygroup.com/) / [Lab 67](https://000067.awsstudygroup.com/) |

### Week 11 achievements:

* Proficient in utilizing Docker Compose to manage and smoothly operate multi-service application clusters in local environments.

* Accumulate practical experience in configuring quick deployment and optimizing infrastructure costs using Amazon Lightsail Container Service.

* Firmly grasp architectural thinking and the workflow of decomposing large, bulky systems into lightweight, independently running microservices.

* Master secure automated CI/CD pipeline construction for containers and enhance resource monitoring capabilities on EKS/Fargate platforms.
