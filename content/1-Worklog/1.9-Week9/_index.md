---
title: "Week 9 Worklog"
date: 2026-06-15
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives:

* Configure user authentication mechanism using AWS Cognito User Pools.
* Secure API Gateway endpoints with Cognito Authorizers.
* Integrate Amazon SES for automated transactional emails.

### Weekly Timeframe: **15/06/2026 – 21/06/2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | - Create AWS Cognito User Pool and App Client.<br>- Configure policies requiring strong passwords and email verification. | 15/06/2026 | 15/06/2026 | AWS Cognito Docs |
| Tuesday | - Bind Cognito Authorizer to API Gateway resources.<br>- Confirm 401 Unauthorized response from API endpoints when JWT is missing. | 16/06/2026 | 16/06/2026 | API Gateway Auth |
| Wednesday | - Study Amazon SES (Simple Email Service).<br>- Verify sender and recipient email addresses in the SES sandbox environment. | 17/06/2026 | 17/06/2026 | AWS SES Docs |
| Thursday | - Modify Create Todo Lambda to invoke Amazon SES and send notifications on task generation. | 18/06/2026 | 18/06/2026 | AWS SES SDK |
| Friday | - Restrict IAM Role policies linked to Lambdas to enforce minimal DynamoDB and SES permissions. | 19/06/2026 | 20/06/2026 | AWS IAM Role |
| Saturday | - Merge dev changes to GitHub repository.<br>- Perform code walkthrough during weekly group review. | 20/06/2026 | 20/06/2026 | Team Docs |

### Outcomes achieved in week 9:

* Configured AWS Cognito User Pool for user sign-up, sign-in, and JWT token issuance.
* Secured API Gateway resources with a Cognito Authorizer.
* Configured Amazon SES and sent email alerts when actions occur.