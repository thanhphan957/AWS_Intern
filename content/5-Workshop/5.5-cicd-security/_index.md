---
title : "CI/CD and Security"
date : 2024-01-01
weight : 5
chapter : false
pre : " <b> 5.5. </b> "
---

#### Objective

This section presents the CI/CD pipeline and security layers integrated into the project. The focus is building a secure image release process without static AWS access keys and with controls before deployment to EKS.

#### Application CI/CD flow

The <code>ci-build-push.yml</code> workflow is triggered manually (<code>workflow_dispatch</code>) or when changes occur in <code>src/**</code> on <code>main</code>. The screenshot records run <strong>#35</strong> succeeding in 3m 32s with these jobs:

1. <code>check-aws-secrets</code> and <code>verify-oidc</code> — OIDC authentication.
2. <code>test-go</code> (frontend, productcatalogservice, checkoutservice) and <code>test-dotnet</code>.
3. <code>build-push</code> for 4 services: frontend, productcatalogservice, cartservice, checkoutservice — push to ECR.
4. <code>update-gitops</code> — update image tags in the GitOps repository.

![CI Build and Push to ECR #35 — 11 successful jobs, 12 artifacts (real GitHub Actions capture)](/images/5-Workshop/5.5-cicd-security/github-actions-ci-live.png)

The <code>build-push (frontend)</code> job shows Trivy gate, cosign keyless sign via GitHub OIDC, and SBOM attestation:

![Trivy gate, cosign sign, and SBOM attestation steps in build-push job (real GitHub Actions capture)](/images/5-Workshop/5.5-cicd-security/ci-trivy-cosign-live.png)

#### Infrastructure flow

When a pull request changes <code>infra/**</code>, the <code>terraform-plan.yml</code> workflow runs two parallel jobs:

+ <code>plan</code> — <code>terraform fmt -check</code>, <code>validate</code>, <code>plan</code>, and Checkov scan.
+ <code>infracost</code> — cost diff estimate (when enabled).

![terraform-plan.yml on PR with plan and infracost jobs (real GitHub Actions capture)](/images/5-Workshop/5.5-cicd-security/terraform-plan-pr-live.png)

{{% notice warning %}}
Terraform apply does not run in CI. Infrastructure apply is always performed manually after reviewing the plan.
{{% /notice %}}

#### Scheduled security scanning

The <code>security-scan.yml</code> workflow runs on a schedule (screenshot: <strong>Security Scan #110</strong>, triggered via schedule) and on pull requests. Two parallel jobs:

+ <code>checkov</code> — scan Terraform/IaC.
+ <code>trivy-fs</code> — filesystem scan for <code>infra</code> and <code>src</code> (2 artifacts).

![Security Scan #110 — checkov and trivy-fs jobs succeeded (real GitHub Actions capture)](/images/5-Workshop/5.5-cicd-security/security-scan-live.png)

#### Security layers

| Layer | Technology | Purpose |
|-------|------------|---------|
| CI authentication | GitHub OIDC | Avoid storing long-lived access keys in GitHub Secrets |
| Image scanning | Trivy | Detect critical vulnerabilities |
| Image signing | cosign | Prove image provenance |
| IaC scanning | Checkov | Validate Terraform configuration |
| Runtime secrets | Secrets Manager + ESO + IRSA | Sync secrets securely into the cluster |
| Runtime policy | Kyverno | Control which images are allowed to run |

#### Secret management

Secret flow on AWS:

~~~text
RDS credentials
  -> AWS Secrets Manager
  -> External Secrets Operator
  -> Kubernetes Secret in boutique namespace
~~~

This design avoids committing secrets to Git or hard-coding them in manifests. The screenshot shows <code>kubectl describe externalsecret rds-master -n boutique</code> output with secret key <code>mini-ecommerce-devops/rds/master</code> from ClusterSecretStore <code>aws-secretsmanager</code> in <code>SecretSynced</code> status.

![ExternalSecret rds-master SecretSynced from aws-secretsmanager (real PowerShell log)](/images/5-Workshop/5.5-cicd-security/externalsecret-live.png)

#### Kyverno image verification

After images are signed with cosign, Kyverno can verify signatures before allowing workloads to run:

~~~powershell
.\scripts\install-kyverno.ps1 -AuditOnly
.\scripts\install-kyverno.ps1
~~~

AuditOnly mode is used to observe behavior before switching to enforce mode. The screenshot shows ClusterPolicy <code>verify-boutique-images</code> in Ready status, verifying cosign keyless signatures from workflow <code>ci-build-push.yml</code> for ECR images <code>962765735385.dkr.ecr.ap-southeast-1.amazonaws.com/mini-ecommerce/*</code>.

![ClusterPolicy verify-boutique-images Ready — cosign keyless verification (real PowerShell log)](/images/5-Workshop/5.5-cicd-security/kyverno-policy-live.png)

#### Conclusion

The project pipeline does not only automate build and deploy—it adds the control layers required for DevSecOps: no static keys, vulnerability scanning, image signing, IaC checks, and secure secret management.
