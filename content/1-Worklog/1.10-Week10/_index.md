---
title: "Week 10 Worklog"
date: 2026-06-22
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Week 10 objectives:

* **Consolidate Week 9 knowledge** related to software modernization trends, microservices architecture, and serverless computing.
* **Deeply study Docker packaging technology**, Amazon ECR repository, and container orchestration environments including ECS, Fargate, and EKS (Kubernetes).
* **Practice packaging, operation, fault-tolerant configuration** of container infrastructure, and release lab resources after completion.

### Week timeframe: **June 22–28, 2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference material |
| --- | --- | --- | --- | --- |
| Mon | Review old lesson. Survey Docker ecosystem overview: Learn components Image, Container, Dockerfile, Docker Engine, and distinguish Container virtualization architecture from Virtual Machine (VM). | June 22, 2026 | June 22, 2026 | [Containers](https://cloudjourney.awsstudygroup.com/5-container/) / [Practice 15](https://000015.awsstudygroup.com/) |
| Tue - Wed | Practice writing Dockerfile to package a sample application, build the image, and operate containers in a local environment. Use basic CLI commands to manage networks, port mapping, and inspect logs. | June 23, 2026 | June 24, 2026 | [Practice 15](https://000015.awsstudygroup.com/) |
| Thu | Configure Amazon Elastic Container Registry (ECR): Practice creating private repositories, use AWS CLI to authenticate accounts, and securely perform Docker image push/pull operations. | June 25, 2026 | June 25, 2026 | [Lab 67](https://000067.awsstudygroup.com/) |
| Fri | Study Amazon ECS and AWS Fargate operational models: Learn Task Definition, Cluster, and Service definitions, and experiment with launching containerized applications in Serverless (no server management) mode. | June 26, 2026 | June 26, 2026 | [Lab 67](https://000067.awsstudygroup.com/) |
| Sat - Sun | Deploy container with Amazon EKS: Study Kubernetes architecture (Cluster, Node, Pod, Deployment, Service). Practice creating pods, controlling fault tolerance via replica, and managing status using kubectl. <br><br> **Cleanup:** Delete all deployments, services, pods, EKS/ECS clusters, and old images on ECR to avoid account charges. | June 27, 2026 | June 28, 2026 | [Lab 126](https://000126.awsstudygroup.com/) / [Lab 67](https://000067.awsstudygroup.com/) |

### Week 10 achievements:

* Master system design concepts utilizing container virtualization and write Dockerfiles to package software consistently.

* Proficient in managing, authorizing, and securely storing Docker images on cloud environments with Amazon ECR.

* Deeply understand the operational mechanism and configure AWS core container coordination services including ECS, Fargate, as well as EKS (Kubernetes) platform.

* Able to deploy fault-tolerant applications, monitor infrastructure resources automatically, and optimize budget by cleaning up unused lab resources.
