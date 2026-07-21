---
title: "Week 8 Worklog"
date: 2026-06-05
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives:

* Develop Create Todo Lambda function using AWS SDK for DynamoDB data persistence.
* Build Get List and Get Item Lambda functions to query Todo list and detail records.
* Implement Update Todo and Delete Todo functionality using AWS Lambda.
* Configure SAM Template to declare API Gateway, Lambda functions, and DynamoDB resources.
* Test APIs locally with SAM Local and Postman, validating returned JSON data structure.
* Deploy application to AWS using SAM Deploy and obtain live API Gateway Endpoint.

### Weekly Timeframe: **05/06/2026 - 11/06/2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Friday | - Write `Create Todo` Lambda handler code using AWS SDK to persist new task items into DynamoDB. | 05/06/2026 | 05/06/2026 | AWS Lambda SDK |
| Saturday | - Build `Get List Todo` and `Get Item Todo` Lambda functions to query tasks by `userId` and `todoId`. | 06/06/2026 | 06/06/2026 | DynamoDB Query |
| Sunday / Monday | - Implement `Update Todo` (modifying task content/status) and `Delete Todo` (removing task items) Lambda handlers. | 07/06/2026 | 08/06/2026 | Lambda CRUD Code |
| Tuesday | - Write and configure AWS SAM `template.yaml` declaring API Gateway endpoints, Lambda functions, and DynamoDB tables. | 09/06/2026 | 09/06/2026 | SAM Template Guide |
| Wednesday | - Run local API testing using `sam local start-api` along with Postman.<br>- Validate HTTP status codes and JSON payload structure responses. | 10/06/2026 | 10/06/2026 | Postman & SAM Local |
| Thursday | - Deploy Serverless application stack onto AWS Cloud via `sam deploy --guided`.<br>- Capture working live API Gateway Endpoint URLs. | 11/06/2026 | 11/06/2026 | SAM Deploy Lab |

### Outcomes achieved in week 8:

* Developed 5 complete Lambda handlers for full Todo CRUD lifecycle operations.
* Authored Infrastructure as Code using SAM `template.yaml`.
* Successfully tested all endpoints locally using Postman and SAM Local.
* Successfully deployed SAM stack onto AWS Cloud and obtained live working API Gateway Endpoints.