---
title: "Lambda MicroVMs"
date: 2026-06-22
weight: 4
chapter: false
pre: " <b> 3.4. </b> "
---

# AWS Lambda MicroVMs

#### 1. Source information

| Item | Details |
|---|---|
| Original title | Run isolated sandboxes with full lifecycle control: AWS Lambda introduces MicroVMs |
| Source | [AWS News Blog](https://aws.amazon.com/blogs/aws/run-isolated-sandboxes-with-full-lifecycle-control-aws-lambda-introduces-microvms/) |
| Topic | AWS Lambda, isolated execution environments, Firecracker |

![Original blog illustration](/images/3-BlogsTranslated/3.4-Blog4/hero.jpeg)

#### 2. Summary

**Lambda MicroVMs** provide isolated, stateful execution environments for user- or AI-generated code, with VM-level isolation, near-instant launch and resume, and lifecycle control. They are powered by **Firecracker**, the same technology behind more than **15 trillion** monthly Lambda function invocations.

#### 3. Main content

**3.1. Context**

Use cases include AI coding assistants, interactive code environments, analytics platforms, vulnerability scanners, and **game servers** running user-supplied scripts.

| Approach | Advantages | Limitations |
|---|---|---|
| Traditional VMs | Strong isolation | Startup time measured in minutes |
| Containers | Startup in seconds | Shared kernel; more hardening needed for untrusted code |
| Classic request-response FaaS | Suited to event workloads | Not optimized for long interactive sessions with retained state |

**3.2. Usage flow**

Create a MicroVM Image from a Dockerfile and code artifact in Amazon S3 (example base image: `public.ecr.aws/lambda/microvms:al2023-minimal`). Build logs stream to CloudWatch under `/aws/lambda/microvms/`.

Example image creation command:

```bash
aws lambda-microvms create-microvm-image \
  --code-artifact uri=<path/to/s3/artifact.zip> --name <VM_image_name> \
  --base-image-arn arn:aws:lambda:us-east-1:aws:microvm-image:al2023-1 \
  --build-role-arn <IAM role ARN>
```

![Create MicroVM Image](/images/3-BlogsTranslated/3.4-Blog4/figure-1.png)

Run with an idle policy (article example: suspend after **15 minutes** with `maxIdleDurationSeconds: 900`, `suspendedDurationSeconds: 300`, and `autoResumeEnabled: true`).

```bash
aws lambda-microvms run-microvm \
  --image-identifier arn:aws:lambda:<region>:<acct>:microvm-image:my-image \
  --execution-role-arn arn:aws:iam::<acct>:role/MicroVMExecutionRole \
  --idle-policy '{"maxIdleDurationSeconds":900,"suspendedDurationSeconds":300,"autoResumeEnabled":true}'
```

**No manual networking setup** is required. Lambda assigns a unique ID and dedicated endpoint URL. Traffic uses a short-lived token in the **`X-aws-proxy-auth`** header. When the idle threshold is exceeded, the MicroVM is suspended and its memory/disk snapshot is retained; the next request can resume the application state.

![Run MicroVM](/images/3-BlogsTranslated/3.4-Blog4/figure-2.png)

**3.3. Core capabilities**

1. VM-level isolation with no shared kernel between users  
2. Image-then-launch from pre-initialized Firecracker snapshots  
3. Stateful execution for up to **8 hours** total runtime, with suspend/resume  

Applications that generate unique content or establish network connections during initialization may need service-provided hooks for compatibility. Lambda Functions remain appropriate for event-driven request-response workloads; MicroVMs complement them for untrusted code isolation.

**3.4. Availability**

| Item | Details |
|---|---|
| Regions | US East (N. Virginia, Ohio), US West (Oregon), Europe (Ireland), Asia Pacific (Tokyo) |
| Architecture | **ARM64** |
| Limits per MicroVM | 16 vCPUs, 32 GB memory, 32 GB disk |
| Suspend | Explicit API or automatic lifecycle policy |

Pricing details are listed on the AWS Lambda pricing page.

#### 4. Remarks

The article expands AWS Lambda from event-driven functions to session-oriented execution for a growing need: running user- or AI-generated code in isolation. Traditional choices among VMs, containers, and FaaS force trade-offs among isolation, startup time, and state retention. MicroVMs combine these properties on Firecracker at Lambda scale.

Architecturally, image-then-launch plus suspend/resume reduces idle cost while preserving session memory, disk, and processes. Details such as idle policies, the `X-aws-proxy-auth` header, and initialization-hook guidance show a product aimed at real multi-tenant systems. The separate API surface also emphasizes complementarity: Functions handle event flows, while MicroVMs isolate untrusted code.

For learning and system design, the article is relevant to AI coding assistants, interactive runtimes, vulnerability scanning, and platforms that execute user scripts. Evaluation should include Region and ARM64 limits, the eight-hour runtime cap, suspend policy, and Lambda pricing.
