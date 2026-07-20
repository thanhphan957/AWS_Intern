---
title : "Install Platform Components"
date : 2024-01-01
weight : 2
chapter : false
pre : " <b> 5.4.2 </b> "
---

#### Objective

After EKS is ready, install platform components so the cluster can accept ingress, sync secrets, and deploy the application via GitOps. The three most important components are AWS Load Balancer Controller, External Secrets Operator, and Argo CD.

#### Components to install

| Component | Namespace | Role |
|-----------|-----------|------|
| AWS Load Balancer Controller | <code>kube-system</code> | Creates ALB from Kubernetes Ingress |
| External Secrets Operator | <code>external-secrets</code> | Syncs secrets from AWS Secrets Manager |
| Argo CD | <code>argocd</code> | Syncs manifests from the GitOps repository |
| Online Boutique | <code>boutique</code> | Application workload |

#### Install AWS Load Balancer Controller

~~~powershell
.\scripts\install-aws-lbc.ps1
~~~

Verify:

~~~powershell
kubectl get pods -n kube-system -l app.kubernetes.io/name=aws-load-balancer-controller
~~~

This controller creates an ALB when it detects an Ingress in the cluster.

#### Install External Secrets Operator

~~~powershell
.\scripts\install-eso.ps1
~~~

Verify:

~~~powershell
kubectl get pods -n external-secrets
~~~

ESO pulls secrets from AWS Secrets Manager into Kubernetes without committing sensitive data to the GitOps repository.

#### Install Argo CD

~~~powershell
.\scripts\install-argocd.ps1
~~~

Argo CD reads manifests from the GitOps repository and syncs the desired state to EKS.

{{% notice info %}}
Before Argo CD syncs the application, ECR must contain images for core services. Images are produced by GitHub Actions or workflow dispatch.
{{% /notice %}}

#### Verify status

~~~powershell
kubectl get application online-boutique -n argocd
kubectl get pods -n boutique
kubectl get clustersecretstore aws-secretsmanager
kubectl get externalsecret -n boutique
~~~

Expected results:

| Resource | Status |
|----------|--------|
| Application <code>online-boutique</code> | Synced / Healthy |
| Pods in <code>boutique</code> | 6 pods Running (frontend, productcatalog, cart, checkout, currency, redis) |
| ClusterSecretStore <code>aws-secretsmanager</code> | Valid / Ready |
| ExternalSecret <code>rds-master</code> | SecretSynced |

![kubectl get pods in external-secrets, argocd, and boutique — 6 Running pods (real PowerShell log)](/images/5-Workshop/5.4-aws-eks/platform-pods-live.png)

![Argo CD Application online-boutique Synced/Healthy, ClusterSecretStore, and ExternalSecret rds-master (real PowerShell log)](/images/5-Workshop/5.4-aws-eks/argocd-sync-live.png)

#### Result

After this step, the cluster has all platform components needed to deploy the application and expose services externally.
