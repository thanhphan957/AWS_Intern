---
title: "Đề Xuất Dự Án"
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# Serverless Todo API - Đề Xuất Dự Án

---

## 1. Tổng quan Dự án

**Tên Dự án**: Ứng dụng Todo Serverless API  
**Thời lượng**: 12 tuần (17/04 - 09/07/2026)  
**Thực tập sinh**: Phan Nguyễn Như Thành  

### Dự án là gì?

Một hệ thống quản lý Todo hiện đại, có thể mở rộng được xây dựng hoàn toàn trên các dịch vụ serverless của AWS. Người dùng có thể tạo, xem, cập nhật và xóa các công việc thông qua REST API, rất phù hợp để học kiến trúc AWS và các best practice.

![Kiến trúc Serverless](KienTrucDuAn.jpg)
![alt text](<DynamoDb1.jpg>) ![alt text](<GiaodienEmail_WebHook.jpg>) ![alt text](<NhapEmail_WebHook.jpg>) ![alt text](<DynamoDB.jpg>)

---

## 2. Vấn đề Cần Giải Quyết

### Thách Thức Hiện Tại
- Ứng dụng truyền thống dựa trên máy chủ đòi hỏi phải quản lý liên tục.
- Vấn đề scaling với hạ tầng cố định.
- Chi phí hoạt động cao từ tài nguyên máy chủ nhàn rỗi.
- Khó học và tiếp cận kiến trúc cloud-native.

### Giải Pháp
Xây dựng giải pháp serverless:
- Không cần quản lý máy chủ.
- Tự động mở rộng theo nhu cầu sử dụng.
- Chi phí chỉ tính cho lượng sử dụng thực tế.
- Minh họa chuẩn mực best practices của AWS.

---

## 3. Mục Tiêu Dự Án

### Mục Tiêu Chính
1. **Học AWS Services**: Thực hành chuyên sâu với Lambda, DynamoDB, API Gateway.
2. **Viết Code Chuyên Nghiệp**: Mã sạch, dễ bảo trì bằng Python / Node.js.
3. **Hiểu Kiến Trúc Serverless**: Nắm rõ thời điểm và cách áp dụng serverless hiệu quả.
4. **Triển Khai Bảo Mật**: Áp dụng nguyên tắc phân quyền tối thiểu (IAM Least Privilege).
5. **Giám Sát & Xử Lý Lỗi**: Sử dụng Amazon CloudWatch để tăng tính khả quan (Observability).

### Kết Quả Đo Lường Được
- Hoàn thiện trọn bộ CRUD API với tất cả endpoints hoạt động mượt mà.
- 0 lỗi trong hơn 100+ requests thử nghiệm.
- Thời gian phản hồi trung bình < 100ms.
- Tài liệu hướng dẫn triển khai đầy đủ.
- Chi phí tối ưu < $1 USD.

---

## 4. Kiến Trúc Giải Pháp

```
                          [Clients]
                              ↓
                   [API Gateway]
                   (REST endpoints)
                              ↓
        ┌─────────────────────┼─────────────────────┐
        ↓                      ↓                      ↓
  [CreateTodo]          [GetTodos]          [UpdateTodo/Delete]
  (Lambda Python)       (Lambda Python)     (Lambda Python)
        ↓                      ↓                      ↓
        └─────────────────────┼─────────────────────┘
                              ↓
                       [DynamoDB Table]
                       (todos - Data Store)
                              ↓
                       [CloudWatch Logs]
                       (Monitoring)
```

### Dịch Vụ AWS Sử Dụng (3 Dịch Vụ Cốt Lõi)

| Dịch Vụ | Mục Đích | Lý Do Chọn |
|---------|----------|----------|
| **API Gateway** | REST API endpoints | Được quản lý, dễ mở rộng, tích hợp tốt |
| **Lambda** | Logic kinh doanh | Thanh toán theo lượt dùng, tự động scale |
| **DynamoDB** | Lưu trữ dữ liệu | Quản lý hoàn toàn, khả năng mở rộng vô hạn |

### Bảo Mật IAM
- Nguyên tắc Least Privilege: Mỗi Lambda có quyền tối thiểu.
- Phân chia vai trò (Role) riêng biệt cho từng hàm.
- Không chứa credentials cứng trong mã nguồn.

---

## 5. Lộ Trình Dự Án (Timeline)

### Giai Đoạn 1: Setup (Tuần 1-2) ✅
- Tạo tài khoản AWS và cấu hình AWS CLI.
- Tạo bảng DynamoDB.
- Thiết lập IAM Roles ban đầu.

### Giai Đoạn 2: Phát Triển (Tuần 3-10) ✅
- Lập trình các hàm Lambda (Create/Read/Update/Delete).
- Cấu hình API Gateway.
- Kiểm thử tích hợp.
- Giám sát qua CloudWatch.

### Giai Đoạn 3: Tài Liệu & Triển Khai (Tuần 11-12) ✅
- Hoàn thiện tài liệu song ngữ (Việt / Anh).
- Hạ tầng dưới dạng mã nguồn (CloudFormation / AWS SAM).
- Kiểm thử cuối cùng và dọn dẹp tài nguyên.

---

## 6. Yêu Cầu Kỹ Thuật (Technical Requirements)

### Đặc Tả Web API

#### POST /todos - Tạo Todo Mới
```
Request: {
  "title": "string (bắt buộc)",
  "description": "string",
  "status": "pending|completed"
}
Response: 201 {
  "todoId": "uuid",
  "createdAt": timestamp
}
```

#### GET /todos - Lấy Danh Sách Todo
```
Response: 200 [
  { "todoId": "...", ... }
]
```

#### PUT /todos/{id} - Cập Nhật Todo
```
Request: { "status": "completed" }
Response: 200 { ...updated item }
```

#### DELETE /todos/{id} - Xóa Todo
```
Response: 204 (No Content)
```

---

## 7. Tiêu Chí Thành Công

✅ **Yêu Cầu Chức Năng**
- Cả 4 endpoints CRUD hoạt động ổn định.
- Tỷ lệ vượt qua kiểm thử đạt 100%.
- Thời gian phản hồi trung bình < 100ms.

✅ **Yêu Cầu Phi Chức Năng**
- Không có lỗi không được xử lý (unhandled errors).
- Chi phí < $1 USD.
- Ghi log đầy đủ trên CloudWatch để phục vụ debug.

✅ **Tài Liệu**
- Song ngữ (Tiếng Việt / Tiếng Anh).
- Hướng dẫn triển khai từng bước.
- Sơ đồ kiến trúc rõ ràng.

---

## 8. Quản Lý Rủi Ro & Biện Pháp Khắc Phục

| Rủi Ro | Xác Suất | Mức Độ Ảnh Hưởng | Biện Pháp Khắc Phục |
|--------|----------|------------------|---------------------|
| Timeout ở Lambda | Thấp | Cao | Tối ưu code, tăng thời gian timeout |
| Giới hạn DynamoDB | Thấp | Trung bình | Sử dụng chế độ thanh toán On-demand |
| Lỗi API Gateway | Trung bình | Trung bình | Xử lý lỗi toàn diện (Error Handling) |
| Rào cản công nghệ | Trung bình | Cao | Tham khảo tài liệu chuẩn của AWS |

---

## 9. Lợi Ích & Kết Quả Học Tập

### Cho Sự Phát Triển Nghề Nghiệp
- Tiếp cận kiến trúc Serverless chuẩn công nghiệp.
- Chuẩn bị cho các chứng chỉ AWS.
- Xây dựng dự án chất lượng cho Hồ sơ cá nhân (Portfolio).
- Áp dụng các best practices về Cloud-Native.

### Cho Tổ Chức / Doanh Nghiệp
- Chi phí vận hành thấp, dễ bảo trì.
- Khả năng mở rộng cho hàng triệu người dùng.
- Tích hợp sẵn hệ thống giám sát và nhật ký.
- Dễ dàng nâng cấp và phát triển mở rộng.

---

## 10. Dự Toán Ngân Sách & Tài Nguyên

### Tài Nguyên AWS
- API Gateway: Thuộc gói Free Tier.
- Lambda: Free Tier (1 triệu yêu cầu/tháng).
- DynamoDB: Free Tier (25 GB dung lượng).
- **Chi phí dự kiến**: < $1 USD.

### Tài Nguyên Phát Triển
- Thời gian: 40 giờ (3 giờ/tuần × 12 tuần).
- Công cụ: VS Code, AWS CLI, Postman.
- Định dạng tài liệu: Markdown, Diagram.

---

**Trạng Thái Đề Xuất**: ✅ Phê Duyệt Triển Khai