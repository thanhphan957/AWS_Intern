---
title: "Khuyến nghị kiểm soát chi phí"
date: 2026-07-04
weight: 3
chapter: false
pre: " <b> 2.6.3 </b> "
---

#### Nguyên tắc FinOps áp dụng

| Khuyến nghị | Mô tả |
|---|---|
| Ưu tiên nâng EKS version trước | Có thể giảm chi phí extended support; giảm rủi ro vòng đời |
| Không bật đồng thời các dịch vụ tốn kém | Tránh kích hoạt RDS Multi-AZ + ElastiCache + autoscaling nhiều node nếu chỉ phục vụ báo cáo |
| WAF — rule tối thiểu | Chỉ bật rule cần thiết; bắt đầu ở chế độ count trước khi block; theo dõi số request |
| Tracing — sampling thấp | Đặt sampling rate thấp (ví dụ 5–10%) để tránh phát sinh trace/log quá mức |
| Infracost trong pull request | Mọi thay đổi Terraform kèm ước tính chi phí trước khi merge |
| ECR lifecycle policy | Tự động xóa image cũ không sử dụng; giảm chi phí lưu trữ |
| AWS Budget alert | Tạo budget ở các ngưỡng 10, 25, 50 và 100 USD; nhận cảnh báo qua email |
| Teardown sau lab | Tắt hoặc xóa tài nguyên không cần thiết ngay sau khi hoàn thành demo/bằng chứng |

#### Kết luận

Kiểm soát chi phí không chỉ là hạn chế chi tiêu, mà là **tích hợp tư duy FinOps vào quy trình DevOps**: dự báo trước, giám sát trong quá trình vận hành, và dọn dẹp sau khi hoàn thành — phù hợp cả môi trường thực tập lẫn thực tiễn vận hành production.
