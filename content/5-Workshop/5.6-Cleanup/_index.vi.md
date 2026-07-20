---
title : "Thu hồi tài nguyên"
date : 2024-01-01
weight : 6
chapter : false
pre : " <b> 5.6. </b> "
---

#### Mục tiêu thu hồi tài nguyên

Môi trường AWS của đề tài được thiết kế theo hướng tạm thời: dựng lên khi cần kiểm thử hoặc demo, sau đó thu hồi để tránh phát sinh chi phí. Vì vậy, bước cleanup là một phần quan trọng của quy trình vận hành, không phải chỉ là thao tác phụ sau cùng.

#### Tổng kết quy trình đã triển khai

Trước khi thu hồi, workshop đã hoàn tất các nội dung:

+ Chạy stack microservices bằng Docker Compose.
+ Tạo hạ tầng AWS bằng Terraform.
+ Cài AWS Load Balancer Controller, External Secrets Operator, Argo CD và monitoring.
+ Đồng bộ ứng dụng lên EKS bằng GitOps.
+ Công bố frontend qua ALB.
+ Thiết lập quan sát bằng Prometheus, Grafana và CloudWatch.

#### Thu hồi hạ tầng AWS

Trước khi destroy, kiểm tra đúng AWS account, region và thư mục môi trường. Các tài nguyên có thể bị xóa gồm EKS cluster, RDS instance, ALB, NAT Gateway và các tài nguyên liên quan.

~~~powershell
cd infra/environments/aws
terraform destroy -auto-approve
aws eks list-clusters --region ap-southeast-1
terraform state list
~~~

Kết quả mong đợi: <code>clusters: []</code> và <code>(no resources – state empty)</code>. Ảnh minh chứng ghi nhận thời gian destroy tiêu biểu: RDS ~5 phút, EKS cluster ~10 phút, VPC ~7 phút.

![Kết quả terraform destroy -auto-approve và xác minh cluster đã xóa (chụp thực tế)](/images/5-Workshop/5.6-Cleanup/terraform-destroy-live.png)

{{% notice warning %}}
EKS, RDS, NAT Gateway và ALB đều có thể phát sinh chi phí. Sau khi demo xong, cần thu hồi tài nguyên để tránh chi phí kéo dài.
{{% /notice %}}

#### Kiểm tra sau khi destroy

- [ ] <code>aws eks list-clusters --region ap-southeast-1</code> không còn cluster demo.
- [ ] RDS instance đã được xóa.
- [ ] Load Balancer đã được thu hồi.
- [ ] NAT Gateway không còn tồn tại.
- [ ] Docker Compose local đã được dừng nếu không dùng nữa.

#### Lưu ý về remote state

S3 bucket và DynamoDB table dùng cho Terraform remote state được tạo ở bước bootstrap riêng. Các tài nguyên này có thể được giữ lại để phục vụ lần triển khai sau, thay vì xóa cùng môi trường ứng dụng.

#### Thu hồi môi trường local

~~~powershell
cd <repo-root>
docker compose down -v
~~~

Tùy chọn <code>-v</code> xóa cả volume, giúp lần chạy tiếp theo bắt đầu từ trạng thái sạch.

#### Tài liệu tham khảo

| Tài liệu | Đường dẫn |
|----------|-----------|
| Hướng dẫn khởi tạo AWS | <code>docs/runbooks/aws-up.md</code> |
| Hướng dẫn thu hồi AWS | <code>docs/runbooks/aws-down.md</code> |
| Checklist demo | <code>docs/runbooks/demo-checklist.md</code> |
| Kiến trúc hệ thống | <code>docs/architecture.md</code> |
| GitHub Actions setup | <code>docs/runbooks/github-actions-setup.md</code> |

#### Kết luận

Thu hồi tài nguyên giúp kiểm soát chi phí và chứng minh rằng hạ tầng của đề tài có thể được quản lý trọn vòng đời bằng Infrastructure as Code.
