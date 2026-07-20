---
title : "Local Development with Docker Compose"
date : 2024-01-01
weight : 3
chapter : false
pre : " <b> 5.3. </b> "
---

#### Local deployment objective

The local environment uses Docker Compose to test the application before deploying to AWS. This step is necessary because it separates application errors from cloud infrastructure errors. If the application is not stable locally, deploying to EKS makes troubleshooting significantly more complex.

Docker Compose runs all microservices required for the main business flow, including frontend, product catalog, cart, checkout, currency, shipping, payment, email, Redis, and PostgreSQL.

#### Role of the local environment

+ Quickly validate source code and service configuration.
+ Verify product browsing, add-to-cart, and checkout flows.
+ Test Redis for cart state and PostgreSQL as the platform database.
+ Provide evidence that the application works correctly before AWS deployment.

#### Deployment content

- [Start Docker Compose](5.3.1-compose-up/) covers building and running containers.
- [Verify the local stack](5.3.2-local-verification/) covers smoke tests, database checks, and UI testing.

Splitting these into two steps makes the report clearer: one part covers environment setup, the other covers operational verification.
