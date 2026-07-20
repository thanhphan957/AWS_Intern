---
title : "CI/CD và bảo mật"
date : 2024-01-01
weight : 5
chapter : false
pre : " <b> 5.5. </b> "
---

#### Mục tiêu

Mục này trình bày pipeline CI/CD và các lớp bảo mật được tích hợp trong dự án. Trọng tâm là xây dựng quy trình phát hành image an toàn, không dùng AWS access key tĩnh và có kiểm soát trước khi triển khai lên EKS.

#### Luồng CI/CD ứng dụng

Workflow <code>ci-build-push.yml</code> được kích hoạt thủ công (<code>workflow_dispatch</code>) hoặc khi có thay đổi trong <code>src/**</code> trên nhánh <code>main</code>. Ảnh minh chứng ghi nhận run <strong>#35</strong> thành công trong 3m 32s, gồm các job:

1. <code>check-aws-secrets</code> và <code>verify-oidc</code> — xác thực OIDC.
2. <code>test-go</code> (frontend, productcatalogservice, checkoutservice) và <code>test-dotnet</code>.
3. <code>build-push</code> cho 4 service: frontend, productcatalogservice, cartservice, checkoutservice — push lên ECR.
4. <code>update-gitops</code> — cập nhật image tag trong repository GitOps.

![Workflow CI Build and Push to ECR #35 — 11 job thành công, 12 artifacts (chụp GitHub Actions thật)](/images/5-Workshop/5.5-cicd-security/github-actions-ci-live.png)

Job <code>build-push (frontend)</code> thể hiện đầy đủ các bước: Trivy gate, cosign sign keyless qua GitHub OIDC và SBOM attestation:

![Các bước Trivy gate, cosign sign và SBOM attestation trong job build-push (chụp GitHub Actions thật)](/images/5-Workshop/5.5-cicd-security/ci-trivy-cosign-live.png)

#### Luồng hạ tầng

Khi pull request thay đổi <code>infra/**</code>, workflow <code>terraform-plan.yml</code> chạy hai job song song:

+ <code>plan</code> — <code>terraform fmt -check</code>, <code>validate</code>, <code>plan</code> và Checkov scan.
+ <code>infracost</code> — ước tính chi phí thay đổi (nếu được bật).

![Workflow terraform-plan.yml trên PR với job plan và infracost (chụp GitHub Actions thật)](/images/5-Workshop/5.5-cicd-security/terraform-plan-pr-live.png)

{{% notice warning %}}
Terraform apply không chạy trong CI. Việc apply hạ tầng luôn được thực hiện thủ công sau khi đã xem xét plan.
{{% /notice %}}

#### Quét bảo mật định kỳ

Workflow <code>security-scan.yml</code> chạy theo lịch (ảnh minh chứng: <strong>Security Scan #110</strong>, triggered via schedule) và trên pull request. Hai job song song:

+ <code>checkov</code> — quét Terraform/IaC.
+ <code>trivy-fs</code> — quét filesystem cho <code>infra</code> và <code>src</code> (2 artifacts).

![Security Scan #110 — job checkov và trivy-fs thành công (chụp GitHub Actions thật)](/images/5-Workshop/5.5-cicd-security/security-scan-live.png)

#### Các lớp bảo mật

| Lớp | Công nghệ | Mục đích |
|-----|-----------|----------|
| Xác thực CI | GitHub OIDC | Không lưu access key dài hạn trong GitHub Secrets |
| Image scanning | Trivy | Phát hiện lỗ hổng nghiêm trọng |
| Image signing | cosign | Chứng minh nguồn gốc image |
| IaC scanning | Checkov | Kiểm tra cấu hình Terraform |
| Secret runtime | Secrets Manager + ESO + IRSA | Đồng bộ secret an toàn vào cluster |
| Policy runtime | Kyverno | Kiểm soát image được phép chạy |

#### Quản lý secret

Luồng secret trên AWS:

~~~text
RDS credentials
  -> AWS Secrets Manager
  -> External Secrets Operator
  -> Kubernetes Secret trong namespace boutique
~~~

Thiết kế này giúp tránh việc commit secret vào Git hoặc hard-code trong manifest. Ảnh minh chứng là output <code>kubectl describe externalsecret rds-master -n boutique</code>, cho thấy secret key <code>mini-ecommerce-devops/rds/master</code> từ ClusterSecretStore <code>aws-secretsmanager</code> với trạng thái <code>SecretSynced</code>.

![ExternalSecret rds-master SecretSynced từ aws-secretsmanager (log PowerShell thật)](/images/5-Workshop/5.5-cicd-security/externalsecret-live.png)

#### Kyverno verify image

Sau khi image được ký bằng cosign, Kyverno có thể kiểm tra chữ ký trước khi cho phép workload chạy:

~~~powershell
.\scripts\install-kyverno.ps1 -AuditOnly
.\scripts\install-kyverno.ps1
~~~

Chế độ AuditOnly dùng để quan sát trước khi chuyển sang enforce. Ảnh minh chứng cho thấy ClusterPolicy <code>verify-boutique-images</code> ở trạng thái Ready, xác minh chữ ký cosign keyless từ workflow <code>ci-build-push.yml</code> cho image ECR <code>962765735385.dkr.ecr.ap-southeast-1.amazonaws.com/mini-ecommerce/*</code>.

![ClusterPolicy verify-boutique-images Ready — xác minh cosign keyless (log PowerShell thật)](/images/5-Workshop/5.5-cicd-security/kyverno-policy-live.png)

#### Kết luận

Pipeline của đề tài không chỉ tự động hóa build và deploy, mà còn bổ sung các lớp kiểm soát cần thiết cho DevSecOps: không dùng khóa tĩnh, quét lỗ hổng, ký image, kiểm tra IaC và quản lý secret an toàn.
