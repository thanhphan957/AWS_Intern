---
title : "Workshop"
date: 2026-05-11 
weight : 5 
chapter : false
pre: " <b> 5. </b> "
---

# Thực hành Xây dựng Serverless Todo API trên AWS

---

### Tổng quan

Trong bài thực hành (Workshop) này, bạn sẽ từng bước xây dựng một **API Ứng dụng Quản lý Công việc (Todo App REST API)** hoàn chỉnh dựa trên mô hình điện toán không máy chủ (**Serverless Architecture**), tích hợp ba dịch vụ cốt lõi hàng đầu của AWS: **Amazon API Gateway**, **AWS Lambda**, và **Amazon DynamoDB**.

#### Mục tiêu & Giá trị cốt lõi của Workshop:
- **Tư duy Kiến trúc Serverless**: Nắm vững phương pháp thiết kế, xây dựng, triển khai và kiểm thử một hệ thống RESTful API chuẩn doanh nghiệp mà **không cần quản lý hay bảo trì bất kỳ máy chủ vật lý/máy chủ ảo (EC2)** nào.
- **Tự động mở rộng linh hoạt (Auto-scaling)**: Hệ thống có khả năng tự động xử lý mượt mà từ vài yêu cầu/giây đến hàng nghìn yêu cầu/giây mà không cần can thiệp thủ công.
- **Tối ưu hóa chi phí (Pay-as-you-go)**: Chỉ phát sinh chi phí khi có lượt gọi API và xử lý dữ liệu thực tế, giúp giảm tiệm cận 0 USD chi phí duy trì hệ thống khi không có truy cập.
- **Làm chủ quy trình CRUD toàn diện**: Thực hành trực tiếp việc thiết kế sơ đồ dữ liệu NoSQL, lập trình logic xử lý dữ liệu (Create, Read, Update, Delete) với Node.js/Python, phân quyền an toàn với IAM và định tuyến API công khai bảo mật.

---

### Kiến trúc Hệ thống

```
Client (Postman / Web Browser / Mobile App)
                   │
                   ▼ (HTTPS Requests)
      ┌──────────────────────────┐
      │    Amazon API Gateway    │  (HTTP Endpoints & Request Routing)
      └────────────┬─────────────┘
                   │ (Event Triggers)
                   ▼
      ┌──────────────────────────┐
      │   AWS Lambda Functions   │  (CRUD Business Logic Execution)
      └────────────┬─────────────┘
                   │ (NoSQL Queries)
                   ▼
      ┌──────────────────────────┐
      │     Amazon DynamoDB      │  (Persistent Key-Value Storage)
      └──────────────────────────┘
```

---

### Dịch vụ AWS Sử Dụng

| Dịch vụ AWS | Vai trò trong hệ thống |
| --- | --- |
| **Amazon API Gateway** | Cung cấp các HTTP Endpoints công khai, tiếp nhận request từ người dùng và định tuyến đến các hàm Lambda tương ứng. |
| **AWS Lambda** | Tập hợp các hàm Serverless xử lý logic nghiệp vụ từng thao tác CRUD (Tạo mới, Lấy danh sách, Cập nhật, Xóa công việc). |
| **Amazon DynamoDB** | Cơ sở dữ liệu NoSQL quản lý hoàn toàn, lưu trữ các mục Todo dưới dạng Key-Value với độ trễ cực thấp (<10ms). |
| **AWS IAM** | Quản lý và kiểm soát quyền truy cập theo nguyên tắc quyền tối thiểu (Least-Privilege Security) cho các dịch vụ. |
| **Amazon CloudWatch** | Thu thập Log, giám sát hiệu năng thực thi và theo dõi các chỉ số (Metrics) hệ thống thời gian thực. |

---

### Các Bước Thực Hiện

1. [Giới thiệu](5.1-introduce/)
2. [Điều kiện tiên quyết](5.2-prerequiste/)
3. [Tạo DynamoDB Table](5.3-setup/)
4. [Tạo Lambda Functions](5.4-implementation/)
5. [Cấu hình API Gateway & Kiểm thử](5.5-testing/)
6. [Dọn dẹp Tài nguyên](5.6-cleanup/)
