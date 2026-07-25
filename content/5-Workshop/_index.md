---
title : "Workshop"
date: 2026-05-11 
weight : 5 
chapter : false
pre: " <b> 5. </b> "
---

# Serverless Todo API on AWS

### Overview

In this workshop, you will step-by-step build a complete **Serverless Todo Application API** leveraging three core AWS services: Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. You will learn how to design, implement, and test an enterprise-ready RESTful API — operating fully serverless with zero servers to manage, automatic scaling based on real-time traffic, and cost optimization powered by pay-per-use pricing.

### Architecture

```
Client (Postman/Browser)
         ↓
Amazon API Gateway  (HTTP Endpoints)
         ↓
AWS Lambda Functions  (CRUD Business Logic)
         ↓
Amazon DynamoDB  (NoSQL Storage)
```

### AWS Services Used

| Service | Role |
|---|---|
| **Amazon API Gateway** | Exposes public HTTP endpoints, handles routing |
| **AWS Lambda** | Serverless functions that process each CRUD operation |
| **Amazon DynamoDB** | Fully managed NoSQL database for storing todo items |
| **AWS IAM** | Access control and least-privilege security |
| **Amazon CloudWatch** | Monitoring, logging, and metrics |

### Content

1. [Introduce](5.1-introduce/)
2. [Prerequisite](5.2-prerequiste/)
3. [Setup](5.3-setup/)
4. [Implementation](5.4-implementation/)
5. [Testing](5.5-testing/)
6. [Cleanup](5.6-cleanup/)
