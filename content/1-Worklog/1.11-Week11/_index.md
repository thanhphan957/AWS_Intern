---
title: "Week 11 Worklog"
date: 2026-06-26
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 Objectives:

* Explore GitHub Actions integration workflow and configure repository Secrets for CI/CD.
* Construct GitHub Actions workflow to automatically test code, build, and deploy AWS SAM stacks.
* Configure DynamoDB TTL (Time-To-Live) to automatically delete completed Todos after specified retention periods.
* Complete system architecture documentation, API Specifications, and database schema designs.
* Write README documentation detailing local setup, configuration, and deployment procedures.
* Hold team meeting to audit documentation, evaluate overall progress, and review AWS cost estimates.

### Weekly Timeframe: **26/06/2026 - 02/07/2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Friday | - Research GitHub Actions workflows for automated CI/CD pipelines.<br>- Configure GitHub Repository Secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`). | 26/06/2026 | 26/06/2026 | GitHub Actions Docs |
| Saturday | - Write `.github/workflows/deploy.yml` pipeline file to automate Code Linting, SAM Build, and SAM Deploy triggers on `main` branch pushes. | 27/06/2026 | 27/06/2026 | CI/CD Pipeline |
| Sunday / Monday | - Enable Time-To-Live (TTL) attribute on DynamoDB table to automatically expire completed Todo records after defined retention periods (e.g. 30 days). | 28/06/2026 | 29/06/2026 | DynamoDB TTL Guide |
| Tuesday | - Finalize complete technical documentation package: System architecture diagram, API Endpoint specifications, and database schema. | 30/06/2026 | 30/06/2026 | Technical Docs |
| Wednesday | - Author comprehensive `README.md` guide covering local dev environment setup, dependencies, SAM deployment commands, and project usage. | 01/07/2026 | 01/07/2026 | Project README |
| Thursday | - Team meeting to review technical documentation, assess final progress, and verify AWS Budgets actual spend. | 02/07/2026 | 02/07/2026 | Team Docs |

### Outcomes achieved in week 11:

* Built automated CI/CD pipeline with GitHub Actions for automated SAM stack deployments.
* Enabled DynamoDB TTL feature for automated data cleanup and cost optimization.
* Completed comprehensive system architecture docs and deployment `README.md`.
* Verified project milestones and confirmed AWS cloud expenditures remained within budget.