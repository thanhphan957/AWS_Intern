---
title : "Clean up"
date : 2024-01-01
weight : 6
chapter : false
pre : " <b> 5.6. </b> "
---

#### Resource teardown objective

The AWS environment for this project is designed to be temporary: provisioned for testing or demos, then torn down to avoid ongoing charges. Cleanup is therefore an important part of the operational workflow—not merely a final optional step.

#### Summary of deployed workflow

Before teardown, the workshop completed:

+ Running the microservices stack with Docker Compose.
+ Creating AWS infrastructure with Terraform.
+ Installing AWS Load Balancer Controller, External Secrets Operator, Argo CD, and monitoring.
+ Syncing the application to EKS via GitOps.
+ Exposing the frontend through ALB.
+ Setting up observability with Prometheus, Grafana, and CloudWatch.

#### Tear down AWS infrastructure

Before destroy, verify the correct AWS account, region, and environment directory. Resources that may be deleted include the EKS cluster, RDS instance, ALB, NAT Gateway, and related resources.

~~~powershell
cd infra/environments/aws
terraform destroy -auto-approve
aws eks list-clusters --region ap-southeast-1
terraform state list
~~~

Expected results: <code>clusters: []</code> and <code>(no resources – state empty)</code>. The screenshot records typical destroy times: RDS ~5 minutes, EKS cluster ~10 minutes, VPC ~7 minutes.

![terraform destroy -auto-approve and cluster removal verification (live capture)](/images/5-Workshop/5.6-Cleanup/terraform-destroy-live.png)

{{% notice warning %}}
EKS, RDS, NAT Gateway, and ALB can all incur charges. After the demo, tear down resources to avoid prolonged costs.
{{% /notice %}}

#### Post-destroy verification

- [ ] <code>aws eks list-clusters --region ap-southeast-1</code> shows no demo cluster.
- [ ] RDS instance has been deleted.
- [ ] Load Balancer has been removed.
- [ ] NAT Gateway no longer exists.
- [ ] Local Docker Compose has been stopped if no longer needed.

#### Note on remote state

The S3 bucket and DynamoDB table used for Terraform remote state are created in a separate bootstrap step. These resources can be retained for future deployments rather than deleted with the application environment.

#### Tear down local environment

~~~powershell
cd <repo-root>
docker compose down -v
~~~

The <code>-v</code> flag also removes volumes, so the next run starts from a clean state.

#### Reference documentation

| Document | Path |
|----------|------|
| AWS provisioning guide | <code>docs/runbooks/aws-up.md</code> |
| AWS teardown guide | <code>docs/runbooks/aws-down.md</code> |
| Demo checklist | <code>docs/runbooks/demo-checklist.md</code> |
| System architecture | <code>docs/architecture.md</code> |
| GitHub Actions setup | <code>docs/runbooks/github-actions-setup.md</code> |

#### Conclusion

Resource teardown helps control costs and demonstrates that the project infrastructure can be managed end-to-end with Infrastructure as Code.
