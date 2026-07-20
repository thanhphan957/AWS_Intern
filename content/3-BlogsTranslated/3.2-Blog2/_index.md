---
title: "CloudFormation Express mode"
date: 2026-06-30
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# AWS CloudFormation Express mode

#### 1. Source information

| Item | Details |
|---|---|
| Original title | Accelerate your infrastructure deployments by up to 4x with AWS CloudFormation Express mode |
| Source | [AWS News Blog](https://aws.amazon.com/blogs/aws/accelerate-your-infrastructure-deployments-by-up-to-4x-with-aws-cloudformation-express-mode/) |
| Topic | AWS CloudFormation, infrastructure deployment, development iteration |

![Original blog illustration](/images/3-BlogsTranslated/3.2-Blog2/hero.jpg)

#### 2. Summary

**CloudFormation Express mode** completes deployments when resource configuration is applied, rather than after extended stabilization checks. Deployment time may be reduced by up to **4 times** for iterative development workflows and suitable production scenarios.

#### 3. Main content

**3.1. Operating principle**

Express mode targets two primary use cases: iterative development workflows and production scenarios that accept eventual stabilization, including AI-assisted infrastructure development with sub-minute feedback loops.

With Express mode:

- Deployments complete when configuration has been applied, without waiting for stabilization checks.
- Resources continue becoming operational in the background.
- CloudFormation automatically retries dependent resources that encounter transient failures within the same stack.
- The change is **when** deployment completes, not **how** resources are provisioned.

| Operation | Standard mode | Express mode |
|---|---|---|
| Create SQS queue with DLQ | about 64 seconds | up to about 10 seconds |
| Delete Lambda with network interface attachment | about 20–30 minutes | up to about 10 seconds |

**3.2. Activation**

Enable Express mode in the console under stack deployment options, or via AWS CLI, SDKs, CDK, and AI tools such as **Kiro**. Set `--deployment-config` to `EXPRESS` for **create**, **update**, or **delete**. **No template changes are required**. Rollback is disabled by default; set `disableRollback` to `false` for production if needed.

![Enable Express mode in the CloudFormation console](/images/3-BlogsTranslated/3.2-Blog2/figure-1.jpg)

```bash
aws cloudformation create-stack \
   --stack-name my-app \
   --template-body file://template.yaml \
   --deployment-config '{"mode": "EXPRESS", "disableRollback": true}'
```

CDK users can run `cdk deploy --express`. Express mode works with existing templates, change sets, and nested stacks. Enabling Express mode on a **parent stack** applies it to **all nested stacks**.

The article also illustrates incremental infrastructure development, such as building an IAM role, Lambda function, SQS queue, and event source mapping in stages. IAM templates should still follow the **least privilege** principle. If a workload must be fully operational before traffic shift or testing, the default mode with stabilization checks remains the safer choice.

**3.3. Availability**

Available in **all commercial AWS Regions** at **no additional cost**. The article also points readers to AWS Capabilities by Region, CloudFormation documentation, and the AWS MCP Server for Region availability and related documentation lookup.

#### 4. Remarks

The article highlights a core trade-off in CloudFormation deployments: stabilization checks improve confidence that resources can serve traffic, but they slow development feedback. Express mode separates “configuration applied” from “fully stabilized,” which benefits developers and AI tools iterating on infrastructure.

The timing examples show the largest gains for operations that normally wait a long time on stabilization. Disabling rollback by default also means production use requires deliberate monitoring and failure handling. Parent-stack inheritance to nested stacks is another operational detail that must be considered in multi-stack designs.

In practice, Express mode fits development, component testing, and production changes that accept eventual stabilization. Changes that shift traffic or depend on full readiness should still use the default mode. The article therefore guides mode selection by risk, not only by speed.
