---
title: "Worklog Tuần 7"
date: 2026-06-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu tuần 7:

* **Ôn tập và củng cố kiến thức Tuần 6** về chiến lược chuyển đổi đám mây, các kỹ thuật di chuyển máy chủ ảo và cơ sở dữ liệu.
* **Tiếp cận phương pháp luận tổng quan** để tối ưu hóa hạ tầng AWS trên các khía cạnh: Chi phí, hiệu suất, bảo mật và độ tin cậy.
* **Triển khai giải pháp tự động hóa vận hành** hệ thống bằng AWS Lambda, kết hợp giám sát trực quan qua CloudWatch và Grafana.
* **Làm quen với các công cụ quản trị hạ tầng nâng cao:** Quản lý tài nguyên bằng thẻ (Resource Tags), điều khiển từ xa qua AWS Systems Manager và định nghĩa hạ tầng bằng mã (Infrastructure as Code) với CloudFormation.

### Khung thời gian tuần: **01/06/2026 – 07/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | Hệ thống lại bài học tuần cũ. Nghiên cứu mô hình tối ưu hóa AWS tổng thể, định hình các mục tiêu chiến lược sau khi di chuyển hệ thống lên đám mây. | 01/06/2026 | 01/06/2026 | [Hành trình lên đám mây – Tối ưu hóa](https://cloudjourney.awsstudygroup.com/3-optimize/) |
| Thứ 3 - 4 | Ứng dụng AWS Lambda để tự động hóa bật/tắt các EC2 instance theo lịch trình hoặc điều kiện cụ thể, tích hợp gửi thông báo kết quả qua webhook Slack để tối ưu chi phí. | 02/06/2026 | 03/06/2026 | [Bài thực hành 22](https://000022.awsstudygroup.com/) |
| Thứ 5 | Triển khai Grafana trên EC2 kết nối dữ liệu từ CloudWatch để dựng dashboard giám sát nâng cao. Thực hành phân loại, quản lý tài nguyên tập trung bằng Resource Tags và Resource Groups. | 04/06/2026 | 04/06/2026 | [Bài thực hành 29](https://000029.awsstudygroup.com/) / [Bài thực hành 27](https://000027.awsstudygroup.com/) |
| Thứ 6 | Khai thác các tính năng của AWS Systems Manager (SSM): Dùng Run Command quản trị máy chủ hàng loạt, dùng Session Manager để SSH an toàn không cần mở port public và thiết lập chính sách IAM dựa trên thẻ tài nguyên. | 05/06/2026 | 05/06/2026 | [Bài thực hành 28](https://000028.awsstudygroup.com/) / [Bài thực hành 31](https://000031.awsstudygroup.com/) / [Phòng lab 58](https://000058.awsstudygroup.com/) |
| Thứ 7 | Nghiên cứu mô hình Infrastructure as Code (IaC) với AWS CloudFormation. Thực hành khởi tạo hạ tầng qua template mẫu, tìm hiểu cơ chế quản lý stack, rollback và phát hiện sai lệch cấu hình (drift detection). <br><br> **Dọn dẹp:** Xóa bỏ toàn bộ các tài nguyên thử nghiệm trong tuần để tránh phát sinh chi phí ngoài ý muốn. | 06/06/2026 | 07/06/2026 | [Bài thực hành 37](https://000037.awsstudygroup.com/) |

### Kết quả đạt được tuần 7:

* Định hình rõ ràng các giải pháp và tư duy chiến lược trong việc tối ưu hóa hiệu năng, nâng cao tính bảo mật và cắt giảm chi phí cho hệ thống đám mây.

* Có khả năng lập trình tự động hóa quy trình vận hành hạ tầng (như quản lý trạng thái EC2) bằng AWS Lambda kết hợp các công cụ kiểm soát như Resource Tags, Resource Groups và chính sách IAM nâng cao.

* Thành thạo việc thiết lập hệ thống giám sát hạ tầng trực quan bằng việc kết hợp CloudWatch metrics với công cụ Grafana.

* Làm chủ phương thức quản trị máy chủ từ xa an toàn qua AWS Systems Manager và bước đầu làm quen với tư duy triển khai hạ tầng tự động bằng mã thông qua AWS CloudFormation.
