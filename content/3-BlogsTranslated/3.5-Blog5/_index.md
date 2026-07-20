---
title: "EC2 C9g / C9gd Graviton5"
date: 2026-06-30
weight: 5
chapter: false
pre: " <b> 3.5. </b> "
---

# Amazon EC2 C9g and C9gd on AWS Graviton5

#### 1. Source information

| Item | Details |
|---|---|
| Original title | Amazon EC2 C9g and C9gd instances powered by AWS Graviton5 processors are now available |
| Source | [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-ec2-c9g-and-c9gd-instances-powered-by-aws-graviton5-processors-are-now-available/) |
| Topic | Amazon EC2, AWS Graviton5, compute-optimized instances |

![Original blog illustration](/images/3-BlogsTranslated/3.5-Blog5/hero.png)

#### 2. Summary

Amazon EC2 **C9g** and **C9gd** instances powered by **AWS Graviton5** are generally available. They are compute-optimized instances for workloads such as real-time analytics, batch processing, video encoding, scientific modeling, CPU-based ML inference, and agentic AI.

#### 3. Main content

**3.1. Performance characteristics**

C9g delivers up to **25%** higher performance per vCPU than **C8g**, with **DDR5 8800MT/s** memory (described as the fastest memory of any processor instance in the cloud), **5x** more L3 cache, and up to **3x** higher packet-processing performance than **Graviton4**-based instances.

**C9gd** adds local **NVMe SSD** storage. NVMe instance-store statistics include latency histograms by I/O size at up to **1-second** granularity via CloudWatch or `nvme-cli`, at no additional cost.

**3.2. Specifications**

Both families offer **11 sizes** from `medium` to `48xlarge`, plus bare metal. Average network bandwidth is up to **15%** higher and EBS bandwidth up to **20%** higher than the previous generation. The `48xlarge` size provides up to **100 Gbps** network and **72 Gbps** EBS (**2x** at the largest size).

**C9g**

| C9g | vCPUs | Memory (GiB) | Network (Gbps) | EBS (Gbps) |
|---|---:|---:|---|---|
| medium | 1 | 2 | Up to 15 | Up to 12 |
| large | 2 | 4 | Up to 15 | Up to 12 |
| xlarge | 4 | 8 | Up to 15 | Up to 12 |
| 2xlarge | 8 | 16 | Up to 17 | Up to 12 |
| 4xlarge | 16 | 32 | Up to 17 | Up to 12 |
| 8xlarge | 32 | 64 | 17 | 12 |
| 12xlarge | 48 | 96 | 25 | 18 |
| 16xlarge | 64 | 128 | 34 | 24 |
| 24xlarge | 96 | 192 | 50 | 36 |
| 48xlarge | 192 | 384 | 100 | 72 |
| metal-48xl | 192 | 384 | 100 | 72 |

**C9gd** (adds local storage; up to **30%** higher local storage performance than the previous generation)

| C9gd | vCPUs | Memory (GiB) | Instance Storage (GB) | Network (Gbps) | EBS (Gbps) |
|---|---:|---:|---|---|---|
| medium | 1 | 2 | 1 × 59 | Up to 15 | Up to 12 |
| large | 2 | 4 | 1 × 118 | Up to 15 | Up to 12 |
| xlarge | 4 | 8 | 1 × 237 | Up to 15 | Up to 12 |
| 2xlarge | 8 | 16 | 1 × 474 | Up to 17 | Up to 12 |
| 4xlarge | 16 | 32 | 1 × 950 | Up to 17 | Up to 12 |
| 8xlarge | 32 | 64 | 1 × 1900 | 17 | 12 |
| 12xlarge | 48 | 96 | 3 × 950 | 25 | 18 |
| 16xlarge | 64 | 128 | 1 × 3800 | 34 | 24 |
| 24xlarge | 96 | 192 | 3 × 1900 | 50 | 36 |
| 48xlarge | 192 | 384 | 3 × 3800 | 100 | 72 |
| metal-48xl | 192 | 384 | 3 × 3800 | 100 | 72 |

**3.3. Additional capabilities**

- **IBC:** adjust EBS vs VPC bandwidth allocation by up to **25%**
- **ENA Express**
- Up to **128** EBS volumes on virtual instances
- Savings Plans, On-Demand, Spot, Dedicated Instances, and Dedicated Hosts
- **Nitro Isolation Engine** with formal verification

**3.4. Availability**

Available in **US East (Ohio, N. Virginia)**, **US West (Oregon)**, and **Europe (Frankfurt)**; additional Regions will follow.

#### 4. Remarks

The article gives a detailed view of the new Graviton compute generation on EC2, covering not only overall performance gains but also memory, cache, packet processing, network/EBS bandwidth, and local storage options. Separating C9g and C9gd clarifies when EBS-backed compute is enough and when local NVMe is needed for scratch space, temporary caches, or low-latency buffers.

Comparisons with C8g and Graviton4, together with full size tables, support capacity planning and cost estimation better than high-level announcements alone. Features such as IBC, ENA Express, EBS attachment limits, and Nitro Isolation Engine also show attention to both performance and isolation requirements.

In practice, the article is useful when upgrading from earlier Graviton generations or selecting instances for HPC, batch, video encoding, CPU inference, or agentic AI. Adoption decisions should consider Regional availability, purchase options, and application I/O characteristics when choosing between C9g and C9gd.
