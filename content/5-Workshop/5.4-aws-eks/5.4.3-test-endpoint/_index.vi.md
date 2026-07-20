---
title : "Xác minh GitOps và ALB"
date : 2024-01-01
weight : 3
chapter : false
pre : " <b> 5.4.3 </b> "
---

#### Mục tiêu

Bước này xác minh ứng dụng đã được Argo CD đồng bộ thành công lên EKS và có thể truy cập từ bên ngoài thông qua Application Load Balancer.

#### Chạy kiểm tra Phase 3

~~~powershell
.\scripts\verify-phase3.ps1
~~~

Script kiểm tra trạng thái Argo CD Application, pod trong namespace <code>boutique</code>, Ingress ALB và HTTP smoke test. Ảnh minh chứng ghi nhận:

+ **ESO:** 3 pod external-secrets Running; ClusterSecretStore <code>aws-secretsmanager</code> Valid; ExternalSecret <code>rds-master</code> SecretSynced.
+ **Argo CD:** <code>Application online-boutique: sync=Synced health=Healthy</code>.
+ **Boutique:** 6 pod Running; ALB hostname dạng <code>k8s-boutique-frontend-....ap-southeast-1.elb.amazonaws.com</code>; <code>PASS: frontend HTTP 200</code>.

#### Lấy ALB hostname

~~~powershell
kubectl get ingress frontend-ingress -n boutique -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
~~~

Nếu hostname chưa xuất hiện, cần chờ AWS Load Balancer Controller reconcile Ingress hoặc kiểm tra log controller.

#### Smoke test qua ALB

~~~powershell
$alb = kubectl get ingress frontend-ingress -n boutique -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
.\scripts\smoke-aws.ps1 $alb
~~~

Kết quả mong đợi là HTTP 200 từ frontend.

![Kết quả verify-phase3.ps1 với ESO, Argo CD và PASS: frontend HTTP 200 (log PowerShell thật)](/images/5-Workshop/5.4-aws-eks/verify-phase3-live.png)

#### Kiểm tra trình duyệt

1. Truy cập URL ALB (hostname từ Ingress hoặc output script).
2. Xác nhận trang <strong>Hot Products</strong> hiển thị 9 sản phẩm.
3. Giao diện vẫn hiển thị nhãn <code>local</code> (badge mặc định của Online Boutique); footer ghi pod Kubernetes thực tế, ví dụ <code>frontend-6cc9f9d7c7-6r4zl</code>.

![Trang chủ Online Boutique qua ALB với nhãn local và pod frontend trên EKS (chụp trình duyệt thật)](/images/5-Workshop/5.4-aws-eks/alb-browser-real.png)

{{% notice note %}}
Phase 1 trên EKS triển khai 6 workload trong namespace boutique. Luồng checkout đầy đủ (payment, email, shipping) vẫn được kiểm thử trên Docker Compose vì các service đó chưa có trên cluster.
{{% /notice %}}

#### Kiểm tra Argo CD UI

~~~powershell
kubectl port-forward svc/argocd-server -n argocd 8081:443
~~~

Truy cập <code>https://localhost:8081</code> và xác nhận application <code>online-boutique</code> ở trạng thái Synced và Healthy.

#### Kết quả

Sau bước này, có thể kết luận ứng dụng đã được triển khai lên EKS bằng GitOps và truy cập được qua ALB.
