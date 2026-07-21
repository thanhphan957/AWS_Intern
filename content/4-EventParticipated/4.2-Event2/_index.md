---
title: "Event 2: AWS Partner & Scalable URL Shortener"
date: 2026-06-20
weight: 2
chapter: false
pre: " <b> 4.2. </b> "
---

# Event 2 Summary Report: "AWS Partner Journey & Scalable URL Shortening Service Architecture"

---

### 1. Purpose of the Event

- Explore career growth pathways in the AWS Cloud ecosystem and connect with AWS community leaders.
- Learn about AWS Student Builder and AWS Community Builder initiatives.
- Study high-scalability system design methodologies on AWS.
- Analyze a real-world case study: Building a scalable URL Shortening Service handling millions of requests.

---

### 2. Speaker List

- **Mr. Hieu Nghi**: AWS Community Builder & Solutions Architect.
- **Mr. Kien & Mr. Tho**: Cloud System Architects.

---

### 3. Highlighted Topics

#### Topic 1: From First Cloud AI Journey to AWS Partner
- Career roadmap from university student to Solutions Architect at an official AWS Partner.
- Community engagement programs: AWS Student Builder & AWS Community Builder.
- Career paths: Solutions Architect, DevOps Engineer, and Platform Engineer.
- Personal branding through technical writing, open-source contribution, and knowledge sharing.

#### Topic 2: A Scalable URL Shortening Service on AWS
- **System Requirements**: Sub-10ms latency, high throughput (millions of req/day), 99.99% availability.
- **AWS Tech Stack**:
  - *Amazon API Gateway*: REST Routing.
  - *AWS Lambda*: Serverless Base62 encoding logic execution.
  - *Amazon DynamoDB*: Fast Key-Value storage (`shortKey` → `originalUrl`).
  - *Amazon ElastiCache (Redis)*: In-memory caching for trending URLs.
  - *Amazon CloudFront*: Global CDN acceleration.
- **Cost & Performance Optimization**: DynamoDB TTL expiration and On-Demand billing.

---

### 4. Key Learnings & Application

- Mastered scalable system design principles: Decoupling, Caching, and NoSQL partitioning.
- Applied DynamoDB TTL and Partition Key strategies to the Serverless Todo API project.
