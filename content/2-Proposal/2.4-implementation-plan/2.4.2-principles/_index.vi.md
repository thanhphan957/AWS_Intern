---
title: "Nguyên tắc triển khai đề xuất"
date: 2026-07-04
weight: 2
chapter: false
pre: " <b> 2.4.2 </b> "
---

Các nguyên tắc dưới đây đảm bảo quá trình triển khai đề xuất có kiểm soát, có thể đánh giá và phù hợp với bối cảnh thực tập.

| Nguyên tắc | Cách áp dụng trong dự án |
|---|---|
| **Thay đổi tăng dần, không đại tu** | Mỗi nhóm đề xuất triển khai trong một pull request hoặc một giai đoạn riêng; tránh thay đổi đồng thời nhiều lớp kiến trúc |
| **Ưu tiên giá trị đánh giá cao** | Nâng EKS version, HTTPS/WAF, progressive delivery và policy enforcement được thực hiện trước các hạng mục nâng cao |
| **Mọi thay đổi hạ tầng phải có plan** | `terraform plan` được review trước khi `apply`; kèm ước tính chi phí từ Infracost khi có thay đổi tài nguyên |
| **Mọi thay đổi triển khai đi qua GitOps** | Không `kubectl apply` thủ công lên cluster production/demo; mọi manifest thay đổi qua GitOps repository |
| **Mỗi đề xuất phải có bằng chứng** | Ảnh chụp màn hình, log pipeline, dashboard, workflow run hoặc endpoint kiểm chứng đi kèm từng giai đoạn |
| **Kiểm soát chi phí trước khi mở rộng** | Ước tính chi phí trước khi bật Multi-AZ, ElastiCache, nhiều node hoặc dịch vụ managed khác; đặt AWS Budget alert |

#### Ghi chú

Các nguyên tắc trên phù hợp với thực hành DevOps hiện đại và khung AWS Well-Architected Framework, đặc biệt các trụ cột **Operational Excellence**, **Security** và **Cost Optimization**.
