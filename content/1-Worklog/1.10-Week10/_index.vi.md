---
title: "Worklog Tuần 10"
date: 2026-06-22
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục tiêu tuần 10:

* **Củng cố kiến thức Tuần 9** liên quan đến xu hướng hiện đại hóa phần mềm, kiến trúc vi dịch vụ và điện toán phi máy chủ.
* **Nghiên cứu chuyên sâu về công nghệ đóng gói Docker**, kho lưu trữ Amazon ECR và các môi trường điều phối container bao gồm ECS, Fargate và EKS (Kubernetes).
* **Thực hành quy trình đóng gói**, vận hành, cấu hình chịu lỗi hạ tầng container và giải phóng tài nguyên lab sau khi hoàn thành.

### Khung thời gian tuần: **22/06/2026 – 28/06/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | Ôn tập bài cũ. Khảo sát tổng quan về Docker sinh thái: Tìm hiểu thành phần Image, Container, Dockerfile, Docker Engine và phân biệt kiến trúc ảo hóa Container với Máy ảo (VM). | 22/06/2026 | 22/06/2026 | [Hành trình lên đám mây – Container](https://cloudjourney.awsstudygroup.com/5-container/) / [Bài thực hành 15](https://000015.awsstudygroup.com/) |
| Thứ 3 - 4 | Thực hành viết Dockerfile đóng gói ứng dụng mẫu, xây dựng image và vận hành container ở môi trường local. Sử dụng các câu lệnh CLI cơ bản để quản lý mạng, ánh xạ port và kiểm tra nhật ký logs. | 23/06/2026 | 24/06/2026 | [Bài thực hành 15](https://000015.awsstudygroup.com/) |
| Thứ 5 | Cấu hình Amazon Elastic Container Registry (ECR): Thực hành tạo private repository, dùng AWS CLI xác thực tài khoản và thực hiện push/pull các image Docker an toàn. | 25/06/2026 | 25/06/2026 | [Phòng thí nghiệm 67](https://000067.awsstudygroup.com/) |
| Thứ 6 | Nghiên cứu mô hình vận hành Amazon ECS và AWS Fargate: Tìm hiểu định nghĩa Task Definition, Cluster, Service và thực nghiệm khởi chạy ứng dụng container theo dạng Serverless (không quản lý máy chủ). | 26/06/2026 | 26/06/2026 | [Phòng thí nghiệm 67](https://000067.awsstudygroup.com/) |
| Thứ 7 - CN | Triển khai container với Amazon EKS: Nghiên cứu kiến trúc Kubernetes (Cluster, Node, Pod, Deployment, Service). Thực hành tạo pod, kiểm soát chịu lỗi qua replica và quản lý trạng thái bằng kubectl. <br><br> **Dọn dẹp:** Xóa toàn bộ các deployment, service, pod, cluster EKS/ECS và image cũ trên ECR để tránh phát sinh chi phí tài khoản. | 27/06/2026 | 28/06/2026 | [Phòng thí nghiệm 126](https://000126.awsstudygroup.com/) / [Phòng thí nghiệm 67](https://000067.awsstudygroup.com/) |

### Kết quả đạt được tuần 10:

* Nắm vững tư duy thiết kế hệ thống sử dụng ảo hóa container và làm chủ quy trình viết Dockerfile để đóng gói phần mềm một cách nhất quán.

* Thành thạo kỹ năng quản lý, phân quyền và lưu trữ an toàn các Docker image trên môi trường đám mây với Amazon ECR.

* Hiểu rõ cơ chế hoạt động và cấu hình tốt các dịch vụ điều phối container cốt lõi của AWS bao gồm ECS, Fargate, cũng như nền tảng Kubernetes chuyên sâu qua Amazon EKS.

* Có khả năng triển khai ứng dụng chịu lỗi, theo dõi trạng thái tài nguyên hạ tầng tự động và tối ưu hóa ngân sách thông qua việc làm sạch các tài nguyên lab không còn sử dụng.
