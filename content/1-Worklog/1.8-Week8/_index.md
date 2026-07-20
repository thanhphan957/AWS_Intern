---
title: "Week 8 Worklog"
date: 2026-06-08
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives:

* Develop 5 CRUD Lambda functions for Todo operations.
* Integrate Lambda functions with Amazon API Gateway.
* Deploy the initial development API to AWS.

### Weekly Timeframe: **08/06/2026 – 14/06/2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | - Write Lambda function for creating new Todo tasks (Create Todo) using AWS SDK for DynamoDB operations. | 08/06/2026 | 08/06/2026 | AWS SDK Guide |
| Tuesday | - Implement Get List and Get Item Lambda functions filtering by query parameters. | 09/06/2026 | 09/06/2026 | AWS SDK Guide |
| Wednesday | - Code Lambda functions for updating tasks (Update Todo) and deleting tasks (Delete Todo). | 10/06/2026 | 10/06/2026 | AWS SDK Guide |
| Thursday | - Configure SAM `template.yaml` declaring API Gateway, Lambda integrations, and DynamoDB schemas. | 11/06/2026 | 11/06/2026 | AWS SAM Template |
| Friday | - Run local test environment using `sam local start-api`.<br>- Validate API JSON responses using Postman. | 12/06/2026 | 13/06/2026 | Postman Test |
| Saturday | - Deploy package to AWS cloud environment via `sam deploy --guided`.<br>- Record active API endpoint URL. | 13/06/2026 | 13/06/2026 | AWS SAM Deploy |

### Outcomes achieved in week 8:

* Developed Node.js/Python code for CRUD Lambda functions.
* Configured API Gateway integration via Lambda Proxy with CORS enabled.
* Successfully deployed AWS SAM application to the AWS Dev environment.