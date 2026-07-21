---
title: "Project Proposal"
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# Serverless Todo API - Project Proposal

---

## 1. Project Overview

**Project Name**: Serverless Todo Application API  
**Duration**: 12 weeks (April 17 - July 09, 2026)  
**Intern**: Phan Nguyen Nhu Thanh  

### What is This Project?

A modern, scalable Todo management system built entirely on AWS serverless services. Users can create, read, update, and delete todo items through a REST API, perfect for learning AWS architecture and best practices.

![Serverless Architecture](KienTrucDuAn.jpg)
![DynamoDB Table](DynamoDb1.jpg)
![Email Notification](GiaodienEmail_WebHook.jpg)
![Web Interface](GiaoDien.jpg)

---

## 2. Problem Statement

### Current Challenges
- Traditional server-based applications require constant management
- Scaling issues with fixed infrastructure
- High operational costs from idle server resources
- Difficulty in learning cloud-native architecture

### Solution
Build a serverless solution that:
- Requires zero server management
- Auto-scales with demand
- Costs only for actual usage
- Demonstrates AWS best practices

---

## 3. Project Objectives

### Primary Objectives
1. **Learn AWS Services**: Hands-on experience with Lambda, DynamoDB, API Gateway, Cognito, SES.
2. **Build Production-Ready Code**: Write clean, maintainable Python/Node.js code.
3. **Understand Serverless Architecture**: Know when and how to use serverless effectively.
4. **Implement Security**: Apply IAM least privilege principles and JWT auth.
5. **Monitor & Troubleshoot**: Use CloudWatch for full system observability.

### Measurable Outcomes
- Complete CRUD API with all endpoints working smoothly.
- Zero errors in 100+ test requests.
- Sub-100ms average response time.
- Documentation for full deployment.
- Optimized cost within AWS Free Tier limit.

---

## 4. Solution Architecture

```
                          [Clients]
                              ↓
                   [API Gateway]
                   (REST endpoints)
                              ↓
        ┌─────────────────────┼─────────────────────┐
        ↓                      ↓                      ↓
  [CreateTodo]          [GetTodos]          [UpdateTodo/Delete]
  (Lambda Function)     (Lambda Function)   (Lambda Function)
        ↓                      ↓                      ↓
        └─────────────────────┼─────────────────────┘
                              ↓
                       [DynamoDB Table]
                       (todos - Data Store)
                              ↓
                       [CloudWatch Logs]
                       (Monitoring)
```

### AWS Services Used

| Service | Purpose | Why Choose |
|---------|---------|-----------|
| **API Gateway** | REST API endpoints | Managed, scalable, easy integration |
| **AWS Lambda** | Business logic execution | Pay-per-use, auto-scaling, fast |
| **DynamoDB** | Data persistence | Fully managed, infinite scalability |

---

## 5. Project Timeline

### Phase 1: Setup & Foundations (Weeks 1-5) ✅
- AWS account setup, CLI, IAM Roles, and custom VPC.
- Initial test database creation (RDS & DynamoDB).

### Phase 2: Serverless API Development (Weeks 6-10) ✅
- Lambda function development (Create/Read/Update/Delete Todo).
- API Gateway configuration, Cognito Authorizer & SES Notifications.
- Static Frontend UI integration with AWS S3 & CloudFront.

### Phase 3: Automation & Reporting (Weeks 11-12) ✅
- CI/CD Pipeline construction with GitHub Actions & AWS SAM.
- Load testing with Artillery & graduation internship final report completion.

---

## 6. Success Criteria

✅ **Functional Requirements**
- All 4 CRUD endpoints working seamlessly.
- 100% test pass rate.
- < 100ms average response time.

✅ **Non-Functional Requirements**
- IAM Least Privilege access enforcement.
- User authentication via JWT Token via Cognito.
- CloudWatch logs for system debugging & observability.

✅ **Documentation & Budget**
- Bilingual (Vietnamese/English) documentation.
- Step-by-step deployment guide.
- Cost < $1 USD.

---

**Proposal Status**: ✅ Approved & Implemented