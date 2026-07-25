---
title: "Event2"
date: 2026-07-25
weight: 2
chapter: false
pre: " <b> 4.2. </b> "
---

# Bài thu hoạch "FCAJ Community Day" (Lần 2)

### Thông tin sự kiện

| Hạng mục | Nội dung |
| --- | --- |
| **Tên sự kiện** | FCAJ Community Day (Lần 2) |
| **Thời gian** | 09:00, ngày 25/07/2026 |
| **Địa điểm** | Tầng 26 & 36, tòa nhà Bitexco, số 02 đường Hải Triều, phường Sài Gòn, thành phố Hồ Chí Minh |
| **Vai trò** | Người tham dự |
| **Số phiên chia sẻ** | 6 phiên kỹ thuật + phần khai mạc |

---

### 1. Mục Đích Của Sự Kiện

Buổi **FCAJ x AABW Cloud Workshop & Community Day** tập trung vào chủ đề trọng tâm: **"Trình bày quá trình giải quyết các thử thách kiến trúc (Architecture Challenges) để xây dựng nên dự án hoàn chỉnh tham dự cuộc thi Hackathon"**.

Sự kiện mang lại những giá trị chuyên môn sâu sắc:
- **Giải mã bài toán kiến trúc thực tế**: Phân tích những khó khăn, nút thắt cổ chai (bottlenecks) và thử thách kỹ thuật mà các nhóm gặp phải khi thiết kế ứng dụng cho cuộc thi Hackathon.
- **Học hỏi phương án tối ưu trên AWS**: Nghiên cứu cách lựa chọn dịch vụ AWS chuẩn Solution Architect (SA) để đảm bảo các tiêu chí: *Tốc độ phát triển nhanh, Tối ưu chi phí, Khả năng mở rộng tự động và Bảo mật*.
- **Rèn luyện tư duy thiết kế hệ thống (System Design Mindset)**: Tiếp cận quy trình từng bước từ việc phân tích yêu cầu bài toán ➔ Lựa chọn mô hình Serverless/Container ➔ Thiết kế luồng dữ liệu ➔ Đóng gói sản phẩm MVP chuẩn bị thi đấu.
- **Giao lưu & Kết nối cộng đồng**: Mở rộng mạng lưới kết nối giữa sinh viên thực tập Cloud (FCAJ) và các chuyên gia AWS Community Builders / AABW.

---

### 2. Chi Tiết Phân Tích Thử Thách Kiến Trúc Các Dự Án Hackathon

#### 2.1. Team 3KA - "Hackathon Journey: Thử Thách Xây Dựng MVP Serverless Trong 24h"
- **Thử thách kiến trúc đặt ra**: Làm thế nào để xây dựng một hệ thống hoàn chỉnh trong thời gian ngắn (24-48 giờ) nhưng vẫn đảm bảo chịu tải tốt khi Ban giám khảo Demo và chi phí duy trì tiệm cận 0 USD khi không có truy cập.
- **Giải pháp & Kiến trúc AWS**:
  - Lựa chọn mô hình **AWS Serverless Architecture** (Amazon API Gateway + AWS Lambda + Amazon DynamoDB).
  - Loại bỏ hoàn toàn việc quản lý máy chủ truyền thống (EC2), giảm thiểu thời gian cài đặt hạ tầng xuống dưới 10 phút.
  - Tự động mở rộng (Auto-scaling) theo lượng truy cập thực tế trong suốt quá trình chấm thi.

#### 2.2. OneTeam - "OneTeam Community Day: Thử Thách Tự Động Hóa Hạ Tầng & Quy Trình Hợp Tác"
- **Thử thách kiến trúc đặt ra**: Đồng bộ hóa quy trình làm việc giữa các thành viên đảm nhận vai trò Frontend, Backend, Cloud Architect và DevOps dưới tinh thần *OneTeam*, tránh lỗi xung đột phiên bản và nghẽn quy trình triển khai.
- **Giải pháp & Kiến trúc AWS**:
  - Áp dụng **Infrastructure as Code (IaC)** với Terraform để định nghĩa toàn bộ hạ tầng bằng mã nguồn.
  - Xây dựng **CI/CD Pipeline tự động** với GitHub Actions và AWS CodePipeline, giúp tự động kiểm thử và triển khai phiên bản mới lên AWS chỉ trong vài phút sau khi bấm Commit.

#### 2.3. Nhóm Dự Án Native App - "SA Professional Native App: Thử Thách Tích Hợp Mobile Native Với Cloud Backend"
- **Thử thách kiến trúc đặt ra**: Thiết kế ứng dụng di động Native (iOS/Android) kết hợp với Backend trên Cloud đòi hỏi độ trễ cực thấp (Low Latency), đồng bộ dữ liệu thời gian thực và quản lý định danh người dùng bảo mật chuẩn doanh nghiệp.
- **Giải pháp & Kiến trúc AWS**:
  - Áp dụng bộ công cụ **AWS Amplify** kết hợp **AWS AppSync (GraphQL API)** để truy vấn dữ liệu linh hoạt và đồng bộ thời gian thực.
  - Tích hợp **Amazon Cognito** quản lý đăng nhập/đăng ký với hạ tầng xác thực MFA và phân quyền IAM Roles chi tiết.
  - Lưu trữ dữ liệu chuẩn Serverless với **Amazon DynamoDB**, đảm bảo tốc độ phản hồi dưới 10ms.

#### 2.4. Nhóm Dự Án SignalScout - "SignalScout: Thử Thách Phân Tích Luồng Dữ Liệu Tín Hiệu Thời Gian Thực"
- **Thử thách kiến trúc đặt ra**: Xử lý và phân tích luồng dữ liệu tín hiệu cảm biến / Telemetry dữ liệu lớn gửi về liên tục theo thời gian thực (Real-time Stream Data Processing) mà không gây tắc nghẽn hoặc mất mát dữ liệu.
- **Giải pháp & Kiến trúc AWS**:
  - Xây dựng luồng thu thập dữ liệu với **Amazon Kinesis Data Streams** chịu tải hàng ngàn sự kiện mỗi giây.
  - Sử dụng **AWS Lambda** xử lý và làm sạch dữ liệu theo thời gian thực (Real-time Event Processing).
  - Lưu trữ dữ liệu lịch sử trên **Amazon S3** và xuất dữ liệu phân tích ra Dashboard trực quan cho người dùng.

---

### 3. Bảng Tóm Tắt Thử Thách Kiến Trúc & Giải Pháp Công Nghệ

| Nhóm / Dự án | Thử thách kiến trúc chính | Giải pháp AWS sử dụng | Kết quả đạt được |
| --- | --- | --- | --- |
| **Team 3KA** | Triển khai nhanh MVP trong 24h & chịu tải đột biến | AWS Lambda, API Gateway, DynamoDB (Serverless) | Hạ tầng cài đặt <10 phút, chịu tải cao, chi phí tối ưu |
| **OneTeam** | Đồng bộ hóa hợp tác đa vai trò & tránh nghẽn triển khai | Terraform (IaC), AWS CodePipeline, GitHub Actions | Triển khai tự động CI/CD chuẩn tinh thần OneTeam |
| **SA Native App** | Tích hợp Mobile Native với Cloud, độ trễ thấp & bảo mật | AWS Amplify, Amazon Cognito, AWS AppSync, DynamoDB | Đồng bộ thời gian thực, độ trễ <10ms, xác thực an toàn |
| **SignalScout** | Xử lý luồng dữ liệu tín hiệu dung lượng lớn thời gian thực | Amazon Kinesis Data Streams, AWS Lambda, Amazon S3 | Xử lý stream dữ liệu liên tục không nghẽn hệ thống |

---

### 4. Bài Học Thu Hoạch & Kế Hoạch Ứng Dụng

1. **Phương pháp giải quyết thử thách kiến trúc**: Hiểu rõ quy trình phân tích nút thắt cổ chai của dự án để lựa chọn đúng dịch vụ AWS (Serverless vs Container vs Managed Services).
2. **Tư duy Solution Architect (SA)**: Biết cách cân bằng giữa tính năng sản phẩm, tốc độ hoàn thành dự án và các trụ cột trong AWS Well-Architected Framework.
3. **Bài học ứng dụng vào thực tập**: Áp dụng mô hình kiến trúc Serverless và quy trình IaC/CI/CD vào bài Proposal và bài báo cáo thực tập cá nhân.

---

### 5. Tài Liệu Tham Khảo & Thư Viện Google Drive

- **Kho lưu trữ tài liệu sự kiện (Google Drive):** [FCAJ Community Day Event 2 Drive Folder](https://drive.google.com/drive/folders/1goIcF8jRIGZczB4DBHGTsS6mp41FWmLL?usp=sharing)
- **Tài liệu tham khảo chuyên môn:** [AWS Well-Architected Framework Docs](https://aws.amazon.com/architecture/well-architected/)

---

### 6. Hình Ảnh Thực Tế Tại Buổi Workshop & Thuyết Trình Hackathon

![Khai mạc buổi chia sẻ FCAJ x Agentic AI Build Week & Hackathon](event2_photo1.jpg)
![Báo cáo sản phẩm và giải mã bài toán Chatbot Agent](event2_photo2.jpg)
![Trình bày sơ đồ kiến trúc hệ thống Cloud AWS](event2_photo3.jpg)
![Thuyết trình giải pháp Solution Architect & Native App](event2_photo4.jpg)
![Chia sẻ lý do tham gia Hackathon & tinh thần đồng đội](event2_photo5.jpg)
