---
title: "Sự kiện 1: FCJ Cloud Sharing & Career Orientation"
date: 2026-06-13
weight: 1
chapter: false
pre: " <b> 4.1. </b> "
---

# Bài thu hoạch Sự kiện: "AWS Cloud, DevOps & Orientations for Cloud Engineers"

---

### 1. Mục Đích Của Sự Kiện

- Chia sẻ góc nhìn thực tế về công việc của Data Analytics Engineer và DevOps Engineer trong môi trường doanh nghiệp.
- Học hỏi văn hóa doanh nghiệp chuẩn quốc tế tại các tập đoàn đa quốc gia (MNC).
- Tìm hiểu định hướng phát triển nghề nghiệp trên nền tảng AWS Cloud và kết nối với cộng đồng AWS Vietnam (AWS Community / Student Builder).
- Nghiên cứu phương pháp thiết kế kiến trúc hệ thống rút gọn URL có khả năng mở rộng cao (Scalable System Design) trên AWS.

---

### 2. Danh Sách Diễn Giả

- **Anh Đạt & Anh Cường**: Data Analytics Engineer - Chuyên gia phân tích dữ liệu & Văn hóa doanh nghiệp MNC.
- **Anh Hoàng Trọng**: Senior DevOps Engineer - Chuyên gia Hạ tầng & CI/CD Pipeline.
- **Anh Hiếu Nghị**: AWS Community Builder & Solution Architect - Chia sẻ hành trình từ First Cloud Journey đến AWS Partner.
- **Anh Kiên & Anh Thọ**: Cloud System Architects - Chuyên gia thiết kế hệ thống Cloud điện toán mây.

---

### 3. Nội Dung Nổi Bật

#### Diễn giả 1: Anh Đạt & Anh Cường - Câu chuyện thực tế đến văn hóa tại tập đoàn đa quốc gia (MNC)
- **Công việc thực tế của Data Analytics Engineer**: Phân tích dữ liệu tìm nguyên nhân gốc rễ (Root Cause Analysis) và đưa ra các đề xuất giải pháp cho doanh nghiệp thay vì chỉ dừng ở báo cáo số liệu.
- **Những kỹ năng quan trọng**: Tư duy phản biện (Critical Thinking), kỹ năng giao tiếp, kể chuyện dữ liệu (Data Storytelling) và giải quyết vấn đề.
- **Lộ trình phát triển 5 cấp độ**: *Follower → Learner → Problem Solver → System Thinker → Super Star*.
- **Văn hóa doanh nghiệp MNC**: Triết lý *No-Blame Culture* (không đổ lỗi), môi trường *Caring & Inclusive* (quan tâm & hòa nhập), và tư duy cải tiến liên tục (Kaizen).

#### Diễn giả 2: Anh Hoàng Trọng - What Does a DevOps Engineer Really Do?
- **Bản chất vai trò DevOps**: DevOps là văn hóa kết hợp giữa Development và Operations nhằm tối ưu hóa vòng đời phần mềm (SDLC).
- **Kỹ năng nền tảng**: Linux Administration, Networking, Git, CI/CD, Containerization (Docker/Kubernetes) và Scripting (Python/Golang).
- **Vòng đời ứng dụng**: Quản lý các giai đoạn Build, Test, Deploy, Logging, Configuration và Environment Variables.
- **Tư duy DevOps**: Đặt câu hỏi *"Why"* trước *"How"*, tự động hóa các công việc lặp đi lặp lại và sử dụng AI nâng cao năng suất mà không phụ thuộc máy móc.

#### Diễn giả 3: Anh Hiếu Nghị - From First Cloud AI Journey to AWS Partner
- **Lộ trình phát triển sự nghiệp**: Con đường từ sinh viên tìm hiểu Cloud đến Chuyên gia kiến trúc giải pháp tại đối tác AWS Partner.
- **Các chương trình cộng đồng**: Giới thiệu các chương trình AWS Student Builder và AWS Community Builder để phát triển chuyên môn và xây dựng thương hiệu cá nhân.
- **Định hướng nghề nghiệp**: Phân tích yêu cầu năng lực cho các vị trí Solutions Architect, DevOps Engineer và Platform Engineer.

#### Diễn giả 4: Anh Kiên & Anh Thọ - A Scalable URL Shortening Service on AWS
- **Kiến trúc dịch vụ rút gọn URL**: Thiết kế hệ thống chịu tải cao, độ trễ cực thấp (<10ms) và tính sẵn sàng 99.99%.
- **Ứng dụng các dịch vụ AWS**:
  - *Amazon API Gateway*: Tiếp nhận & định tuyến API.
  - *AWS Lambda*: Xử lý mã hóa thuật toán rút gọn link (Base62 Encoding/Hashing).
  - *Amazon DynamoDB*: Lưu trữ Key-Value cặp `shortKey` -> `originalUrl` với tốc độ cao.
  - *Amazon ElastiCache (Redis)*: Caching các URL phổ biến.
  - *Amazon CloudFront*: Phân phối nội dung CDN toàn cầu giúp tối ưu tốc độ chuyển hướng.

---

### 4. Những Gì Học Được

#### Tư Duy Kỹ Thuật & Kiến Trúc Hệ Thống
- Hiểu rõ tư duy hệ thống (System Thinking) giúp bao quát toàn bộ kiến trúc ứng dụng.
- Nắm vững các nguyên tắc thiết kế hệ thống chịu tải cao: Decoupling, Caching, Asynchronous Processing, và NoSQL Partitioning.

#### Kỹ Năng Mềm & Định Hướng Nghề Nghiệp
- Nhận thức sâu sắc về văn hóa No-Blame và tư duy đặt câu hỏi bản chất.
- Định hình rõ ràng lộ trình phát triển bản thân và kế hoạch chinh phục các chứng chỉ AWS.

---

### 5. Ứng Dụng Vào Công Việc & Dự Án Thực Tập

- **Tự động hóa CI/CD**: Áp dụng GitHub Actions và AWS SAM triển khai các hàm Lambda.
- **Tối ưu CSDL**: Thiết kế DynamoDB Partition Key / Sort Key và cấu hình TTL cleanup cho dự án Serverless Todo API.
- **Giám sát hệ thống**: Sử dụng CloudWatch Logs theo dõi hiệu năng và xử lý sự cố.

---

### 6. Trải Nghiệm & Bài Học Rút Ra

- Buổi sự kiện mang lại lượng kiến thức thực chiến phong phú và cái nhìn toàn diện về môi trường công nghệ Cloud/DevOps.
- **Bài học rút ra**: Một hệ thống tốt phải bắt đầu từ nhu cầu kinh doanh (Business-First), đảm bảo sự đơn giản, độ tin cậy và tối ưu chi phí vận hành.
