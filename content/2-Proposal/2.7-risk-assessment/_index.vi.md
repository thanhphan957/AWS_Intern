---
title: "Đánh giá rủi ro"
date: 2026-07-04
weight: 7
chapter: false
pre: " <b> 2.7. </b> "
---

#### Tổng quan

Việc mở rộng dự án giúp nâng tính thực tiễn của hệ thống, đồng thời làm tăng độ phức tạp kỹ thuật và rủi ro vận hành. Bảng dưới đây xác định các rủi ro chính, phân tích nguyên nhân — tác động và đề xuất biện pháp giảm thiểu tương ứng.

| Rủi ro | Nguyên nhân | Tác động | Biện pháp giảm thiểu |
|---|---|---|---|
| Tăng chi phí ngoài dự kiến | Bật thêm WAF, ElastiCache, RDS Multi-AZ, tracing hoặc scale nhiều node | Chi phí AWS vượt ngân sách cá nhân | Ước tính bằng Infracost; bật ngắn hạn; AWS Budget alert; teardown sau lab |
| Nâng cấp EKS gây lỗi workload | Phiên bản Kubernetes mới thay đổi API hoặc add-on compatibility | Controller/workload có thể không hoạt động bình thường | Kiểm tra compatibility matrix; nâng từng bước; backup manifest; chuẩn bị rollback |
| WAF chặn nhầm request hợp lệ | Rule quá chặt hoặc chưa kiểm thử đủ | Người dùng không truy cập được ứng dụng | Bật WAF ở chế độ count trước; chuyển sang block sau khi xác nhận |
| Canary/blue-green cấu hình sai | Rollout strategy hoặc phân tích metric chưa chính xác | Traffic có thể route sai phiên bản | Test rollout trên staging trước; giới hạn % traffic ban đầu |
| Policy enforcement chặn deploy | Kyverno/OPA rule quá nghiêm hoặc chưa tương thích manifest hiện tại | Pipeline deploy thất bại liên tục | Bắt đầu ở audit mode; chuyển dần sang enforce |
| Observability phát sinh dữ liệu quá mức | Log/tracing sampling quá cao; retention dài | Tăng chi phí CloudWatch/X-Ray | Giới hạn retention; sampling thấp; chỉ thu thập metric cần thiết |
| Mở rộng nghiệp vụ tăng độ phức tạp | Thêm order/payment/email cần thay đổi nhiều service | Lỗi ứng dụng ngoài phạm vi DevOps | Chia nhỏ theo từng service; giữ rollback rõ ràng; test từng luồng |

#### Đánh giá mức độ rủi ro tổng thể

Với việc triển khai theo từng giai đoạn, có review plan và bằng chứng kiểm chứng, **mức độ rủi ro tổng thể được đánh giá ở mức trung bình và có thể kiểm soát** — miễn là tuân thủ nguyên tắc triển khai tại mục 2.4.2 và khuyến nghị chi phí tại mục 2.6.3.
