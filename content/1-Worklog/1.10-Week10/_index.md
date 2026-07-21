---
title: "Week 10 Worklog"
date: 2026-06-19
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Week 10 Objectives:

* Build responsive Todo List frontend user interface using HTML, CSS, and Bootstrap.
* Integrate Cognito SDK into JavaScript to handle user authentication and token management.
* Connect Frontend with Todo API Gateway via Fetch API with JWT Authorization.
* Deploy static website onto Amazon S3 and configure Static Website Hosting.
* Configure Amazon CloudFront CDN with S3 Origin and ACM SSL/TLS certificates for HTTPS.
* Perform End-to-End testing of full user workflows including registration, login, Todo management, and logout.

### Weekly Timeframe: **19/06/2026 - 25/06/2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Friday | - Design and develop Todo List web app user interface using HTML5, CSS3, and Bootstrap framework components. | 19/06/2026 | 19/06/2026 | Frontend UI Design |
| Saturday | - Integrate Amazon Cognito Identity SDK into JavaScript codebase.<br>- Handle User Registration, Login, LocalStorage token management, and auto-refresh mechanisms. | 20/06/2026 | 20/06/2026 | Cognito SDK Integration |
| Sunday / Monday | - Write JavaScript client code connecting Frontend to API Gateway using JavaScript `fetch()` API.<br>- Attach JWT Bearer Tokens in request headers (`Authorization: Bearer <token>`) for all Todo CRUD requests. | 21/06/2026 | 22/06/2026 | Fetch API Integration |
| Tuesday | - Create S3 Bucket on AWS Console, upload static web assets, and enable Static Website Hosting feature. | 23/06/2026 | 23/06/2026 | AWS S3 Hosting |
| Wednesday | - Provision Amazon CloudFront distribution linked to S3 Origin.<br>- Request and configure SSL/TLS certificate from AWS Certificate Manager (ACM) to support secure HTTPS access. | 24/06/2026 | 24/06/2026 | CloudFront & ACM |
| Thursday | - Execute End-to-End user journey testing: Registration -> Email Verification -> Login -> Create Todo -> Update Todo -> Delete Todo -> Logout. | 25/06/2026 | 25/06/2026 | E2E Testing |

### Outcomes achieved in week 10:

* Built modern, fully responsive Todo List frontend web interface using HTML/CSS/Bootstrap.
* Integrated Cognito SDK for client-side authentication and token session handling.
* Connected Frontend with Backend APIs using Fetch API with JWT Authorization headers.
* Successfully hosted static site on S3 and distributed via CloudFront CDN over HTTPS.
* Verified full End-to-End application flow with zero critical defects.