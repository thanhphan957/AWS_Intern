---
title : "Verify GitOps and ALB"
date : 2024-01-01
weight : 3
chapter : false
pre : " <b> 5.4.3 </b> "
---

#### Objective

This step verifies that the application has been successfully synced to EKS by Argo CD and is accessible externally through the Application Load Balancer.

#### Run Phase 3 verification

~~~powershell
.\scripts\verify-phase3.ps1
~~~

The script checks Argo CD Application status, pods in the <code>boutique</code> namespace, ALB Ingress, and HTTP smoke test. The screenshot records:

+ **ESO:** 3 external-secrets pods Running; ClusterSecretStore <code>aws-secretsmanager</code> Valid; ExternalSecret <code>rds-master</code> SecretSynced.
+ **Argo CD:** <code>Application online-boutique: sync=Synced health=Healthy</code>.
+ **Boutique:** 6 pods Running; ALB hostname like <code>k8s-boutique-frontend-....ap-southeast-1.elb.amazonaws.com</code>; <code>PASS: frontend HTTP 200</code>.

#### Get ALB hostname

~~~powershell
kubectl get ingress frontend-ingress -n boutique -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
~~~

If the hostname is not yet available, wait for the AWS Load Balancer Controller to reconcile the Ingress or check controller logs.

#### Smoke test via ALB

~~~powershell
$alb = kubectl get ingress frontend-ingress -n boutique -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
.\scripts\smoke-aws.ps1 $alb
~~~

The expected result is HTTP 200 from the frontend.

![verify-phase3.ps1 with ESO, Argo CD, and PASS: frontend HTTP 200 (real PowerShell log)](/images/5-Workshop/5.4-aws-eks/verify-phase3-live.png)

#### Browser verification

1. Open the ALB URL (hostname from Ingress or script output).
2. Confirm the <strong>Hot Products</strong> page shows 9 products.
3. The UI still displays a <code>local</code> badge (default Online Boutique badge); the footer shows the actual Kubernetes pod, e.g. <code>frontend-6cc9f9d7c7-6r4zl</code>.

![Online Boutique home page via ALB with local badge and EKS frontend pod (real browser capture)](/images/5-Workshop/5.4-aws-eks/alb-browser-real.png)

{{% notice note %}}
Phase 1 on EKS deploys 6 workloads in the boutique namespace. The full checkout flow (payment, email, shipping) is still tested on Docker Compose because those services are not on the cluster.
{{% /notice %}}

#### Check Argo CD UI

~~~powershell
kubectl port-forward svc/argocd-server -n argocd 8081:443
~~~

Open <code>https://localhost:8081</code> and confirm the <code>online-boutique</code> application is Synced and Healthy.

#### Result

After this step, you can conclude that the application has been deployed to EKS via GitOps and is accessible through the ALB.
