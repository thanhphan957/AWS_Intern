---
title: "EKS version rollbacks"
date: 2026-07-01
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Amazon EKS Kubernetes version rollbacks

#### 1. Source information

| Item | Details |
|---|---|
| Original title | Upgrade Amazon EKS clusters with confidence using Kubernetes version rollbacks |
| Source | [AWS News Blog](https://aws.amazon.com/blogs/aws/upgrade-amazon-eks-clusters-with-confidence-using-kubernetes-version-rollbacks/) |
| Topic | Amazon EKS, Kubernetes upgrades, version rollback |

![Original blog illustration](/images/3-BlogsTranslated/3.1-Blog1/hero.png)

#### 2. Summary

Open-source Kubernetes does not support control-plane rollback. Although the community is progressing with emulated versions under **KEP-4330**, organizations often rely on bake periods, stagger groups, automated sign-offs, and long upgrade cycles. With **three minor releases per year**, teams managing many clusters—especially in regulated environments—may delay upgrades and approach **extended support**.

Amazon EKS introduces **Kubernetes version rollbacks**, allowing an upgrade to be reversed within **seven days** if issues occur.

#### 3. Main content

**3.1. Rollback mechanism**

Unlike emulated versions, EKS rollback restores a fully validated previous production version. Example in the article: upgrade from Kubernetes **1.34** to **1.35**, then roll back to **1.34** within seven days without rebuilding the cluster.

Rollbacks proceed **one minor version at a time**. **Cluster insights** evaluate readiness (node version compatibility, add-on dependencies). The `--force` flag can bypass checks. The mechanism applies to **all EKS clusters**, whether nodes are customer-managed or AWS-managed.

![Rollback option in the EKS console](/images/3-BlogsTranslated/3.1-Blog1/figure-1.png)

**3.2. EKS Auto Mode**

For Auto Mode, the **control plane and managed nodes roll back together**. Node rollbacks respect **pod disruption budgets**. A **cancel API** can stop node rollback at any time. By default, EKS never bypasses disruption budgets.

![Rollback window information](/images/3-BlogsTranslated/3.1-Blog1/figure-2.png)

**3.3. Console procedure**

Select a recently upgraded cluster, review the rollback window and insights, then confirm. The cluster remains functional. Control-plane rollback takes about **20 minutes**.

![Rollback insights](/images/3-BlogsTranslated/3.1-Blog1/figure-3.png)

![Rollback in progress](/images/3-BlogsTranslated/3.1-Blog1/figure-4.png)

**3.4. Availability and cost**

Available at **no additional cost** in **all commercial Regions** where EKS is offered.

| Item | Scope |
|---|---|
| Control-plane rollback | All EKS clusters |
| Node rollback | Clusters running **EKS Auto Mode** |
| Supported versions | Kubernetes in **standard support** and **extended support** |

#### 4. Remarks

The article addresses a practical operations problem: control-plane upgrades are hard to reverse, so organizations often delay updates and accept security and extended-support risk. EKS version rollbacks provide a clear safety net within seven days, reducing the need to rebuild a cluster after a failed upgrade.

Technically, rollback restores a fully validated production version rather than an emulated transitional state. Cluster insights and the `--force` option balance default safety with operational flexibility. For Auto Mode, coordinated control-plane and node rollback with respect for pod disruption budgets shows that workload stability is prioritized over speed.

For learning and real operations, the article is useful when designing controlled upgrade procedures: define the rollback window, review readiness, and prepare disruption-budget adjustments for Auto Mode. The feature is especially relevant to high-availability, regulated, or multi-cluster environments where upgrade delays were previously common.
