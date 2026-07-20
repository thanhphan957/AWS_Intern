---
title : "Cài đặt thành phần nền tảng"
date : 2024-01-01
weight : 2
chapter : false
pre : " <b> 5.4.2 </b> "
---

#### Mục tiêu

Sau khi EKS sẵn sàng, cần cài các thành phần nền tảng để cluster có thể nhận ingress, đồng bộ secret và triển khai ứng dụng theo GitOps. Ba thành phần quan trọng nhất là AWS Load Balancer Controller, External Secrets Operator và Argo CD.

#### Thành phần cài đặt

| Thành phần | Namespace | Vai trò |
|------------|-----------|---------|
| AWS Load Balancer Controller | <code>kube-system</code> | Tạo ALB từ Kubernetes Ingress |
| External Secrets Operator | <code>external-secrets</code> | Đồng bộ secret từ AWS Secrets Manager |
| Argo CD | <code>argocd</code> | Đồng bộ manifest từ GitOps repository |
| Online Boutique | <code>boutique</code> | Chạy workload ứng dụng |

#### Cài AWS Load Balancer Controller

~~~powershell
.\scripts\install-aws-lbc.ps1
~~~

Kiểm tra:

~~~powershell
kubectl get pods -n kube-system -l app.kubernetes.io/name=aws-load-balancer-controller
~~~

Controller này chịu trách nhiệm tạo ALB khi phát hiện Ingress trong cluster.

#### Cài External Secrets Operator

~~~powershell
.\scripts\install-eso.ps1
~~~

Kiểm tra:

~~~powershell
kubectl get pods -n external-secrets
~~~

ESO giúp lấy secret từ AWS Secrets Manager vào Kubernetes mà không cần commit thông tin nhạy cảm vào GitOps repository.

#### Cài Argo CD

~~~powershell
.\scripts\install-argocd.ps1
~~~

Argo CD đọc manifest từ repository GitOps và đồng bộ trạng thái mong muốn vào EKS.

{{% notice info %}}
Trước khi Argo CD đồng bộ ứng dụng, ECR cần có image cho các service chính. Image được tạo bởi GitHub Actions hoặc workflow dispatch.
{{% /notice %}}

#### Kiểm tra trạng thái

~~~powershell
kubectl get application online-boutique -n argocd
kubectl get pods -n boutique
kubectl get clustersecretstore aws-secretsmanager
kubectl get externalsecret -n boutique
~~~

Kết quả mong đợi:

| Tài nguyên | Trạng thái |
|------------|------------|
| Application <code>online-boutique</code> | Synced / Healthy |
| Pod trong <code>boutique</code> | 6 pod Running (frontend, productcatalog, cart, checkout, currency, redis) |
| ClusterSecretStore <code>aws-secretsmanager</code> | Valid / Ready |
| ExternalSecret <code>rds-master</code> | SecretSynced |

![kubectl get pods trong external-secrets, argocd và boutique — 6 pod Running (log PowerShell thật)](/images/5-Workshop/5.4-aws-eks/platform-pods-live.png)

![Argo CD Application online-boutique Synced/Healthy, ClusterSecretStore và ExternalSecret rds-master (log PowerShell thật)](/images/5-Workshop/5.4-aws-eks/argocd-sync-live.png)

#### Kết quả

Hoàn tất bước này, cluster đã có đầy đủ thành phần nền tảng để triển khai ứng dụng và công bố dịch vụ ra bên ngoài.
