---
title: "Tóm tắt điều hành"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.1. </b> "
---

#### Hiện trạng dự án

Dự án **Mini E-commerce DevOps Platform** đã chứng minh khả năng triển khai end-to-end một hệ thống microservices thương mại điện tử trên AWS: từ phát triển cục bộ, đóng gói container, cung cấp hạ tầng bằng Terraform, vận hành trên Amazon EKS, tự động hóa pipeline CI/CD (GitHub Actions), đồng bộ cấu hình triển khai qua Argo CD, cùng các năng lực quản lý secret và giám sát ở mức nền tảng.

#### Vấn đề cần giải quyết

Khi chuyển từ môi trường demo sang hướng vận hành bền vững hơn, hệ thống cần được bổ sung các năng lực sau: **tính sẵn sàng cao**, **bảo mật biên truy cập**, **chiến lược phát hành có kiểm soát rủi ro**, **khả năng mở rộng tự động**, **quan sát hệ thống chuyên sâu**, **quản trị chi phí chủ động** và **khả năng khôi phục sau sự cố**.

#### Định hướng đề xuất

| Nhóm đề xuất | Mục tiêu | Giá trị đạt được |
|---|---|---|
| Nâng cấp hạ tầng production-ready | Bổ sung high availability, autoscaling, backup và disaster recovery | Tăng độ ổn định và khả năng phục hồi khi có sự cố |
| Hoàn thiện bảo mật | Triển khai HTTPS, AWS WAF, policy enforcement, xác thực image và network policy | Giảm rủi ro khi đưa workload ra Internet |
| Mở rộng CI/CD và GitOps | Hỗ trợ đa môi trường, canary/blue-green deployment và rollback theo metric | Hạn chế ảnh hưởng toàn cục khi phát hành phiên bản mới |
| Nâng cấp observability | Bổ sung distributed tracing, SLO/SLI, dashboard vận hành và cảnh báo theo ngữ cảnh | Rút ngắn thời gian phát hiện và xử lý sự cố |
| Tối ưu chi phí | AWS Budgets, Infracost tại PR, ECR lifecycle policy (trên sơ đồ); Spot node, VPC endpoint và lịch tắt tài nguyên theo giai đoạn | Kiểm soát chi phí trong vận hành dài hạn |
| Mở rộng chức năng ứng dụng | Tích hợp RDS vào luồng đơn hàng; bổ sung payment, email và lịch sử mua hàng | Nâng giá trị nghiệp vụ, không chỉ dừng ở nền tảng DevOps |

#### Thứ tự ưu tiên

Các đề xuất được sắp xếp theo nguyên tắc **ưu tiên ổn định và bảo mật trước, mở rộng nghiệp vụ sau**. Cụ thể: nâng cấp vòng đời EKS và củng cố nền tảng → hoàn thiện HTTPS/WAF → triển khai progressive delivery → thực thi policy bảo mật → nâng cấp observability → mở rộng tầng dữ liệu và nghiệp vụ. Cách tiếp cận này phù hợp với thời gian thực tập, ngân sách hạn chế và yêu cầu chứng minh năng lực kỹ thuật trong báo cáo.
