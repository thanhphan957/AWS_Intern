---
title: "Worklog Tuần 11"
date: 2026-06-29
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục tiêu tuần 11:

* **Hệ thống lại toàn bộ kiến thức nâng cao của Tuần 10** về Docker, kho ECR và các môi trường điều phối container.
* **Thực hành thiết kế hạ tầng đa dịch vụ** bằng Docker Compose và vận hành container tinh gọn trên Lightsail Container Service.
* **Nghiên cứu sâu quy trình tự động hóa CI/CD** dành riêng cho container, phân rã kiến trúc phần mềm cũ và nâng cấp luồng xử lý workload trên hệ thống EKS/Fargate.

### Khung thời gian tuần: **29/06/2026 – 05/07/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | Ôn tập bài học cũ. Thực hành thiết lập file `docker-compose.yml` để khởi chạy đồng thời cụm ứng dụng đa thành phần (Frontend, API, Database); làm quen với cấu hình mạng nội bộ và volume cục bộ. | 29/06/2026 | 29/06/2026 | [Hành trình lên đám mây – Hiện đại hóa](https://cloudjourney.awsstudygroup.com/4-modernize/) / [Bài thực hành 15](https://000015.awsstudygroup.com/) |
| Thứ 3 | Tiếp cận Amazon Lightsail Container Service: Tạo lập dịch vụ, đẩy image và deploy container đơn giản. Phân tích so sánh ưu/nhược điểm về chi phí và độ phức tạp vận hành giữa Lightsail với cặp đôi ECS/Fargate. | 30/06/2026 | 30/06/2026 | [Phòng thí nghiệm 67](https://000067.awsstudygroup.com/) |
| Thứ 4 - 5 | Thực hiện phân rã kiến trúc Monolith sang Microservices: Phân chia các domain dịch vụ độc lập dựa trên giới hạn ngữ cảnh, tiến hành build độc lập từng image tương ứng và quy hoạch kho lưu trữ. | 01/07/2026 | 02/07/2026 | [Hành trình lên đám mây – Hiện đại hóa](https://cloudjourney.awsstudygroup.com/4-modernize/) |
| Thứ 6 | Thiết lập luồng CI/CD cho hạ tầng container: Xây dựng kịch bản tự động hóa bằng GitHub Actions (hoặc CodePipeline) để thực hiện các bước build image, quét mã lỗi bảo mật, đẩy lên ECR và update manifest. | 03/07/2026 | 03/07/2026 | [Phòng thí nghiệm 126](https://000126.awsstudygroup.com/) |
| Thứ 7 - CN | Cấu hình nâng cao trên cụm EKS/Fargate: Tối ưu các dịch vụ lõi thông qua Deployment và Service, kiểm tra tính tự phục hồi của Pod, theo dõi logs tập trung với kubectl và CloudWatch. <br><br> **Dọn dẹp:** Gỡ bỏ các endpoint Lightsail, dọn dẹp các bản deploy thử nghiệm trên EKS và giải phóng bộ nhớ ECR. | 04/07/2026 | 05/07/2026 | [Phòng thí nghiệm 126](https://000126.awsstudygroup.com/) / [Phòng thí nghiệm 67](https://000067.awsstudygroup.com/) |

### Kết quả đạt được tuần 11:

* Thành thạo kỹ năng sử dụng Docker Compose để quản lý và vận hành mượt mà các cụm ứng dụng đa dịch vụ ở môi trường local.

* Tích lũy kinh nghiệm thực tế trong việc cấu hình triển khai nhanh và tối ưu chi phí hạ tầng với Amazon Lightsail Container Service.

* Nắm chắc tư duy kiến trúc và quy trình bóc tách các hệ thống lớn, cồng kềnh thành các vi dịch vụ hoạt động độc lập, gọn nhẹ.

* Làm chủ quy trình xây dựng đường ống tự động hóa CI/CD bảo mật cho container và nâng cao năng lực kiểm soát tài nguyên trên nền tảng EKS/Fargate.
