---
title: "Week 9 Worklog"
date: 2026-06-12
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives:

* Create User Pool and App Client on AWS Cognito, configure password policies and email verification.
* Integrate Cognito Authorizer with API Gateway and test JWT authentication on API Endpoints.
* Explore Amazon SES, verify email addresses, and configure Sandbox email environment.
* Update Create Todo Lambda to integrate SES and send email notifications upon task creation.
* Optimize Lambda IAM Roles following Least Privilege principle, restricting access to DynamoDB and SES only.
* Merge changes to GitHub repository and perform peer code reviews within the team.

### Weekly Timeframe: **12/06/2026 - 18/06/2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Friday | - Provision Cognito User Pool and App Client on AWS Console.<br>- Configure password policy complexity and automated email verification codes. | 12/06/2026 | 12/06/2026 | AWS Cognito Docs |
| Saturday | - Integrate Cognito Authorizer into Amazon API Gateway endpoints.<br>- Validate JWT token authorization (200 OK with valid bearer token, 401 Unauthorized without token). | 13/06/2026 | 13/06/2026 | API Gateway Auth |
| Sunday / Monday | - Study Amazon SES (Simple Email Service).<br>- Verify sender and recipient email addresses in AWS SES Sandbox environment. | 14/06/2026 | 15/06/2026 | AWS SES Guide |
| Tuesday | - Update `Create Todo` Lambda function code, integrating AWS SDK for SES to dispatch automated notification emails when new tasks are added. | 16/06/2026 | 16/06/2026 | Lambda SES Integration |
| Wednesday | - Review and optimize IAM Execution Roles attached to Lambda functions based on Least Privilege principles (granting minimum DynamoDB & SES permissions). | 17/06/2026 | 17/06/2026 | AWS IAM Role |
| Thursday | - Merge feature branches into `main` and `dev` on GitHub.<br>- Conduct team code review session and perform sanity testing on Backend APIs. | 18/06/2026 | 18/06/2026 | GitHub Review |

### Outcomes achieved in week 9:

* Successfully set up secure user identity management using AWS Cognito User Pool.
* Secured all API Gateway endpoints with JWT Bearer Token authorization.
* Integrated automated email notifications upon Todo creation using Amazon SES.
* Applied IAM Least Privilege execution roles across all Lambda functions.
* Merged clean code to GitHub repository completing Backend API milestone.