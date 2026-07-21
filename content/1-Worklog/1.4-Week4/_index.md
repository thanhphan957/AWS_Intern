---
title: "Week 4 Worklog"
date: 2026-05-08
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Week 4 Objectives:

* Explore AWS IAM (Users, Groups, Policies, Roles) and the principle of Least Privilege for access control.
* Construct JSON-based IAM Policies and create IAM Roles allowing EC2 instances to access Amazon S3.
* Study Amazon VPC architecture including Subnets, Route Tables, Internet Gateways, NAT Gateways, and Elastic IPs.
* Practice building a custom VPC with Public and Private Subnets and configure route tables.
* Deploy an EC2 Bastion Host in a Public Subnet and an EC2 Server in a Private Subnet, and set up NAT Gateway for system updates.
* Clean up VPC resources, NAT Gateways, and Elastic IPs to prevent charges.

### Weekly Timeframe: **08/05/2026 - 14/05/2026**

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Friday | - Study AWS IAM core concepts: Users, Groups, Policies, Roles.<br>- Learn the principle of Least Privilege in cloud access control. | 08/05/2026 | 08/05/2026 | AWS IAM Docs |
| Saturday | - Write custom JSON IAM policies.<br>- Create an IAM Role and assign to EC2 instance for secure Amazon S3 access. | 09/05/2026 | 09/05/2026 | AWS IAM Lab |
| Sunday / Monday | - Research Amazon VPC network architecture.<br>- Study Subnet types, Route Tables, Internet Gateways (IGW), NAT Gateways, and Elastic IPs. | 10/05/2026 | 11/05/2026 | AWS VPC Guide |
| Tuesday | - Build a custom Amazon VPC from scratch.<br>- Create Public and Private Subnets and configure corresponding Route Tables. | 12/05/2026 | 12/05/2026 | AWS VPC Lab |
| Wednesday | - Deploy an EC2 Bastion Host in Public Subnet and an EC2 Server in Private Subnet.<br>- Connect to Private EC2 via Bastion Host over SSH.<br>- Configure NAT Gateway to allow Private EC2 outward internet access for system updates. | 13/05/2026 | 13/05/2026 | NAT Gateway Lab |
| Thursday | - Weekly team review of Week 4 milestones.<br>- Terminate VPC resources, NAT Gateways, Elastic IPs, and EC2 instances to eliminate costs. | 14/05/2026 | 14/05/2026 | Team Docs |

### Outcomes achieved in week 4:

* Mastered IAM access management and enforced Least Privilege access policies.
* Successfully authored JSON policies and attached IAM Roles for EC2-to-S3 access.
* Built custom Amazon VPC networking with segregated Public and Private subnets.
* Implemented secure Bastion Host jump boxes and configured NAT Gateway routing.
* Cleaned up all cloud resources to ensure zero lingering costs.