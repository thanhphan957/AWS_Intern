---
title: "Sự kiện 2: AWS Partner & Scalable URL Shortener"
date: 2026-06-20
weight: 2
chapter: false
pre: " <b> 4.2. </b> "
---

# Bài thu hoạch Sự kiện 2: "Hành trình AWS Partner & Kiến trúc dịch vụ Scalable URL Shortener"

---

### 1. Mục Đích Của Sự Kiện

- Định hướng lộ trình phát triển sự nghiệp trên nền tảng AWS Cloud và kết nối cộng đồng AWS Vietnam.
- Tìm hiểu các chương trình AWS Student Builder và AWS Community Builder.
- Nghiên cứu phương pháp thiết kế kiến trúc hệ thống có khả năng mở rộng cao (Scalable System Design).
- Thực hành phân tích case study thiết kế dịch vụ rút gọn link (URL Shortener) đáp ứng triệu truy cập trên AWS.

---

### 2. Danh Sách Diễn Giả

- **Anh Hiếu Nghị**: AWS Community Builder & Solution Architect - Chia sẻ hành trình từ First Cloud Journey đến AWS Partner.
- **Anh Kiên & Anh Thọ**: Cloud System Architects - Chuyên gia thiết kế hạ tầng điện toán mây cao cấp trên AWS.

---

### 3. Nội Dung Nổi Bật

#### Chủ đề 1: From First Cloud AI Journey to AWS Partner
- **Lộ trình phát triển sự nghiệp AWS**: Chia sẻ con đường từ sinh viên tiếp cận Điện toán đám mây đến Chuyên gia kiến trúc giải pháp tại đối tác AWS Partner.
- **Các chương trình cộng đồng AWS**: Giới thiệu cơ hội tham gia AWS Student Builder, AWS Community Builder để học hỏi và xây dựng thương hiệu cá nhân.
- **Định hướng vị trí công việc**: Phân tích yêu cầu năng lực cho các vị trí Solutions Architect, DevOps Engineer, và Platform Engineer.
- **Xây dựng thương hiệu cá nhân**: Tầm quan trọng của việc chia sẻ kiến thức, viết blog kỹ thuật và đóng góp cho cộng đồng công nghệ.

#### Chủ đề 2: A Scalable URL Shortening Service on AWS
- **Bài toán hệ thống**: Thiết kế dịch vụ rút gọn URL có độ trễ cực thấp (<10ms), khả năng chịu tải hàng triệu requests/ngày và độ khả dụng 99.99%.
- **Lựa chọn dịch vụ AWS**:
  - *Amazon API Gateway*: Tiếp nhận HTTP Request và định tuyến API.
  - *AWS Lambda*: Xử lý mã hóa thuật toán sinh mã URL (Base62 Encoding/Hashing) không máy chủ.
  - *Amazon DynamoDB*: Lưu trữ Key-Value cặp `shortKey` -> `originalUrl` với tốc độ truy xuất cực nhanh.
  - *Amazon ElastiCache (Redis)*: Caching các URL phổ biến để giảm tải cho database.
  - *Amazon CloudFront*: Phân phối nội dung CDN toàn cầu giúp tối ưu tốc độ chuyển hướng.
- **Tối ưu chi phí & Hiệu năng**: Kỹ thuật phân vùng dữ liệu (Sharding), TTL cleanup cho URL hết hạn, và mô hình thanh toán On-Demand.

---

### 4. Những Gì Học Được

#### Kiến Trúc Hệ Thống Chuẩn Cloud
- Nắm vững các nguyên tắc thiết kế hệ thống chịu tải cao: Decoupling, Caching, Asynchronous Processing, và Distributed Data Store.
- Hiểu rõ trade-off giữa nhất quán dữ liệu (Consistency) và tính sẵn sàng (Availability) theo định lý CAP trong thiết kế NoSQL.

#### Phát Triển Bản Thân & Định Hướng Sự Nghiệp
- Nhận thức rõ giá trị của việc học tập chủ động và xây dựng bài viết chia sẻ tri thức cộng đồng.
- Nắm bắt được các tiêu chí tuyển dụng vị trí Cloud/DevOps tại các công ty đối tác AWS.

---

### 5. Ứng Dụng Vào Công Việc & Dự Án Thực Tập

- **Áp dụng cho dự án Serverless Todo API**: Thiết kế DynamoDB Partition Key và Sort Key tối ưu cho việc truy vấn theo `userId`.
- **Tích hợp Caching & TTL**: Cấu hình thuộc tính TTL trên DynamoDB giúp tự động dọn dẹp các bản ghi không còn sử dụng.
- **Định hướng chứng chỉ**: Đặt mục tiêu chinh phục chứng chỉ AWS Certified Solutions Architect Associate.

---

### 6. Trải Nghiệm & Bài Học Rút Ra

- Sự kiện đem lại những kiến thức thực chiến vô cùng giá trị về thiết kế hệ thống thực tế.
- **Bài học rút ra**: Một kiến trúc tốt không phải là kiến trúc phức tạp nhất, mà là kiến trúc đơn giản, tin cậy, tối ưu chi phí và giải quyết đúng bài toán của doanh nghiệp.
