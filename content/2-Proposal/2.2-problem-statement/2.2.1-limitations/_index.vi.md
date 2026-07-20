---
title: "Hạn chế còn tồn tại"
date: 2026-07-04
weight: 1
chapter: false
pre: " <b> 2.2.1 </b> "
---

#### Nhận định chung

Qua đánh giá hiện trạng sau giai đoạn triển khai nền tảng, dự án đã đạt được mục tiêu chứng minh quy trình DevOps end-to-end. Tuy nhiên, khi xét theo tiêu chí vận hành thực tế, hệ thống vẫn còn một số hạn chế cần được xử lý có kế hoạch trước khi mở rộng phạm vi sử dụng hoặc public lâu dài.

#### Phân tích chi tiết các hạn chế

| Nhóm hạn chế | Hiện trạng | Tác động nếu tiếp tục mở rộng |
|---|---|---|
| Tính sẵn sàng cao (HA) | Hạ tầng ưu tiên chi phí thấp cho demo; chưa triển khai Multi-AZ đồng bộ cho toàn bộ thành phần quan trọng | Sự cố tại một node, một AZ hoặc thành phần phụ trợ có thể gây gián đoạn dịch vụ kéo dài |
| Vòng đời Amazon EKS | Cluster đang dùng EKS `1.30`; tại thời điểm 04/07/2026 phiên bản này đã chuyển sang extended support | Chi phí control plane tăng; rủi ro về vòng đời hỗ trợ và tương thích add-on nếu không nâng cấp kịp |
| Bảo mật lớp edge | Ứng dụng truy cập qua ALB nhưng chưa hoàn thiện HTTPS, custom domain, AWS WAF và các biện pháp bảo vệ biên | Chưa đáp ứng yêu cầu bảo mật khi phục vụ người dùng thật hoặc môi trường public lâu dài |
| Chiến lược phát hành | CI/CD và GitOps đã có nền tảng, nhưng chưa có canary, blue-green deployment hay rollback tự động theo metric | Mỗi lần release mới vẫn mang rủi ro ảnh hưởng toàn bộ người dùng |
| Khả năng mở rộng (scalability) | Node group thiết kế gọn cho demo; autoscaling chưa là trọng tâm chính | Khi traffic tăng, workload có thể thiếu tài nguyên hoặc cần can thiệp thủ công |
| Observability chuyên sâu | Đã có monitoring cơ bản, nhưng thiếu distributed tracing, SLO/SLI, synthetic check và quy trình xử lý sự cố | Khó xác định nguyên nhân gốc khi lỗi xảy ra xuyên suốt nhiều microservices |
| Bảo mật chuỗi cung ứng phần mềm | Đã có hướng scan/ký image, nhưng chưa enforce policy bắt buộc ở tầng admission của cluster | Image không đạt chuẩn vẫn có nguy cơ được triển khai nếu thiếu kiểm soát chặt |
| Quản trị chi phí dài hạn | Đã có dự toán và teardown, nhưng chưa có cơ chế dự báo chi phí tự động trước khi thay đổi hạ tầng | Chi phí có thể tăng nhanh khi mở rộng nhiều môi trường hoặc bật thêm dịch vụ managed |
| Tầng dữ liệu nghiệp vụ | RDS đã được provision, nhưng ứng dụng chưa khai thác sâu cho đơn hàng, lịch sử mua hàng và báo cáo | Hệ thống vẫn thiên về nền tảng DevOps minh họa hơn là ứng dụng e-commerce hoàn chỉnh |

#### Kết luận vấn đề

Từ các hạn chế trên, vấn đề trung tâm của giai đoạn tiếp theo được xác định như sau: **cần một lộ trình mở rộng có kiểm soát, giúp dự án chuyển từ mô hình DevOps demo sang mô hình platform vận hành thực tế hơn, đồng thời vẫn đảm bảo khả năng quản lý chi phí và độ phức tạp kỹ thuật trong phạm vi thực tập**.
