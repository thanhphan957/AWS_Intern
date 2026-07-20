---
title: "Workshop"
date: 2026-07-04
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Mini E-commerce DevOps Platform

#### Workshop content overview

Section 5 documents the hands-on deployment of the Mini E-commerce DevOps Platform project. The content is written as a technical report—not merely a list of commands, but an explanation of objectives, context, expected outcomes, and the significance of each deployment phase.

The project uses the Online Boutique application as a sample microservices workload, then builds a DevOps layer comprising Docker Compose, Terraform, Amazon EKS, Amazon ECR, Amazon RDS, GitHub Actions, Argo CD, External Secrets Operator, Prometheus, Grafana, and CloudWatch. Deployment is split across two primary environments: a local environment for full business testing and an AWS environment to demonstrate operations on real cloud infrastructure.

#### Deployment scope

+ The local environment uses Docker Compose to run all application services, including frontend, catalog, cart, checkout, currency, shipping, payment, email, Redis, and PostgreSQL.
+ The AWS environment uses EKS and GitOps to deploy 6 workloads in the boutique namespace (frontend, catalog, cart, checkout, currency, redis), expose the application through an Application Load Balancer, and manage secrets via AWS Secrets Manager.
+ Cloud infrastructure is provisioned with Terraform and can be created and torn down on a temporary basis to control costs.
+ The CI/CD pipeline uses GitHub Actions with OIDC to build images, push to ECR, run security scans, and update the GitOps repository.

#### Section 5 structure

1. [Workshop overview](5.1-Workshop-overview/) presents the deployment architecture, scope, and two-repository model.
2. [Environment preparation](5.2-prerequisite/) describes tools, AWS CLI, Terraform backend, and initial configuration.
3. [Local development with Docker Compose](5.3-local-docker-compose/) tests the application locally before cloud deployment.
4. [Deploy to AWS EKS](5.4-aws-eks/) provisions infrastructure, installs platform components, and syncs the application via GitOps.
5. [CI/CD and security](5.5-cicd-security/) covers the pipeline, OIDC, vulnerability scanning, image signing, and secret management.
6. [Resource teardown](5.6-Cleanup/) describes how to clean up the environment after the demo to avoid ongoing charges.
