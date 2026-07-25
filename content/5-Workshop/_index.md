---
title : "Workshop"
date: 2026-05-11 
weight : 5 
chapter : false
pre: " <b> 5. </b> "
---

# Hands-on Lab: Building a Serverless Todo API on AWS

---

### Overview

In this hands-on workshop, you will step-by-step build a production-ready **Serverless Todo Application REST API** leveraging three core AWS cloud services: **Amazon API Gateway**, **AWS Lambda**, and **Amazon DynamoDB**.

#### Workshop Objectives & Key Values:
- **Serverless Architectural Mindset**: Master how to design, deploy, and test an enterprise-grade RESTful API with **zero servers to manage or provision**.
- **Seamless Auto-Scaling**: Build a resilient infrastructure that automatically scales from zero to thousands of requests per second with no manual intervention.
- **Cost Optimization (Pay-per-Use)**: Experience true pay-as-you-go pricing with zero idle maintenance cost when there is no traffic.
- **End-to-End CRUD Operations**: Gain hands-on experience designing NoSQL database tables, writing business logic functions (Create, Read, Update, Delete) with Node.js/Python, configuring IAM least-privilege policies, and exposing secure public HTTP endpoints.

---

### System Architecture

```
Client (Postman / Web Browser / Mobile App)
                   │
                   ▼ (HTTPS Requests)
      ┌──────────────────────────┐
      │    Amazon API Gateway    │  (HTTP Endpoints & Request Routing)
      └────────────┬─────────────┘
                   │ (Event Triggers)
                   ▼
      ┌──────────────────────────┐
      │   AWS Lambda Functions   │  (CRUD Business Logic Execution)
      └────────────┬─────────────┘
                   │ (NoSQL Queries)
                   ▼
      ┌──────────────────────────┐
      │     Amazon DynamoDB      │  (Persistent Key-Value Storage)
      └──────────────────────────┘
```

---

### AWS Services Used

| AWS Service | Role in Architecture |
| --- | --- |
| **Amazon API Gateway** | Exposes public HTTP endpoints, handles request validation, routing, and security. |
| **AWS Lambda** | Suite of serverless functions processing business logic for CRUD operations (Create, Read, Update, Delete). |
| **Amazon DynamoDB** | Fully managed NoSQL database storing todo items as Key-Value pairs with sub-10ms latency. |
| **AWS IAM** | Enforces granular access control and least-privilege security roles across AWS services. |
| **Amazon CloudWatch** | Aggregates application logs, tracks execution metrics, and monitors real-time system health. |

---

### Workshop Steps

1. [Introduce](5.1-introduce/)
2. [Prerequisite](5.2-prerequiste/)
3. [Setup](5.3-setup/)
4. [Implementation](5.4-implementation/)
5. [Testing](5.5-testing/)
6. [Cleanup](5.6-cleanup/)
