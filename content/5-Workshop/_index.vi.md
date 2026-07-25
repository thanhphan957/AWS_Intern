---
title : "Workshop"
date: 2026-05-11 
weight : 5 
chapter : false
pre: " <b> 5. </b> "
---

### Tổng quan

Trong workshop này, bạn sẽ từng bước xây dựng một **API Ứng dụng Todo Serverless** hoàn chỉnh dựa trên ba dịch vụ AWS cốt lõi bao gồm Amazon API Gateway, AWS Lambda và Amazon DynamoDB. Thông qua bài thực hành, bạn sẽ học cách thiết kế, triển khai và kiểm thử một hệ thống RESTful API chuẩn doanh nghiệp — vận hành hoàn toàn không cần quản lý máy chủ, có khả năng tự động mở rộng linh hoạt theo lượng truy cập thực tế và tối ưu hóa chi phí dựa trên lưu lượng sử dụng.

### Kiến trúc

```
Client (Postman/Browser)
         ↓
Amazon API Gateway  (HTTP Endpoints)
         ↓
AWS Lambda Functions  (CRUD Business Logic)
         ↓
Amazon DynamoDB  (NoSQL Storage)
```

### Dịch vụ AWS sử dụng

| Dịch vụ | Vai trò |
|---|---|
| **Amazon API Gateway** | Cung cấp các HTTP endpoint công khai, xử lý routing |
| **AWS Lambda** | Các hàm serverless xử lý từng thao tác CRUD |
| **Amazon DynamoDB** | Cơ sở dữ liệu NoSQL được quản lý hoàn toàn |
| **AWS IAM** | Kiểm soát truy cập và bảo mật least-privilege |
| **Amazon CloudWatch** | Giám sát, logging và metrics |

### Nội dung

1. [Giới thiệu](5.1-introduce/)
2. [Điều kiện tiên quyết](5.2-prerequiste/)
3. [Tạo DynamoDB Table](5.3-setup/)
4. [Tạo Lambda Functions](5.4-implementation/)
5. [Cấu hình API Gateway & Kiểm thử](5.5-testing/)
6. [Dọn dẹp Tài nguyên](5.6-cleanup/)
