---
title: "Worklog Tuần 12"
date: 2026-07-06
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

### Mục tiêu tuần 12:

* **Hệ thống và tổng duyệt các kiến thức nâng cao của Tuần 11** về hạ tầng container, CI/CD pipeline và chiến lược dịch chuyển sang vi dịch vụ.
* **Tiếp cận trọn vẹn hệ sinh thái AWS Data & Analytics** bao gồm: kiến trúc hồ dữ liệu (data lake), quy trình ETL/ELT, kho dữ liệu lớn, phân tích thời gian thực và trực quan hóa BI.
* **Thực hiện kịch bản mô phỏng xử lý dữ liệu đầu cuối (End-to-End)** và tiến hành làm sạch tài nguyên phòng lab để kết thúc chương trình thực tập.

### Khung thời gian tuần: **06/07/2026 – 12/07/2026**

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| Thứ 2 | Ôn tập bài học tuần cũ. Nghiên cứu tổng quan về nền tảng dữ liệu hiện đại: Tìm hiểu các giai đoạn thu thập, lưu trữ, xử lý, phân tích chuyên sâu và các thuật ngữ Data Lake, ETL/ELT, Business Intelligence (BI). | 06/07/2026 | 06/07/2026 | [Hành trình lên đám mây – Dữ liệu & Phân tích](https://cloudjourney.awsstudygroup.com/6-dataandanalytic/) / [Phòng thí nghiệm 72](https://000072.awsstudygroup.com/) |
| Thứ 3 - 4 | Xây dựng Data Lake với Amazon S3: Thực hành quy hoạch cấu trúc bucket/thư mục lưu trữ, quản lý phân vùng dữ liệu, thiết lập quy tắc bảo mật an toàn thông qua IAM và AWS KMS. | 07/07/2026 | 08/07/2026 | [Bài thực hành 35](https://000035.awsstudygroup.com/) / [Phòng thí nghiệm 70](https://000070.awsstudygroup.com/) |
| Thứ 5 | Khai thác bộ đôi AWS Glue và Amazon Athena: Ứng dụng AWS Glue Crawler tự động quét dữ liệu và tạo bảng trong Glue Data Catalog; sử dụng câu lệnh SQL trên Amazon Athena để truy vấn trực tiếp dữ liệu trên S3 và tối ưu phân vùng. | 09/07/2026 | 09/07/2026 | [Phòng thí nghiệm 40](https://000040.awsstudygroup.com/), [106](https://000106.awsstudygroup.com/) |
| Thứ 6 | Nghiên cứu giải pháp lưu trữ và stream dữ liệu: Khảo sát mô hình Data Warehouse quy mô lớn với Amazon Redshift; phân tích báo cáo trực quan bằng Amazon QuickSight; tìm hiểu cơ chế nạp luồng dữ liệu thời gian thực qua Amazon Kinesis Data Streams/Firehose. | 10/07/2026 | 10/07/2026 | [Phòng thí nghiệm 72](https://000072.awsstudygroup.com/), [73](https://000073.awsstudygroup.com/), [105](https://000105.awsstudygroup.com/) |
| Thứ 7 - CN | Thực hành pipeline phân tích dữ liệu tổng thể: Tạo S3 bucket, tải bộ dữ liệu mẫu CSV/JSON, chạy Glue Crawler lập chỉ mục, thực hiện truy vấn với Athena và dựng dashboard trực quan cơ bản bằng QuickSight. <br><br> **Dọn dẹp:** Giải phóng toàn bộ các database/bảng trong Glue Catalog, kết quả Athena, luồng Kinesis và dashboard thử nghiệm. | 11/07/2026 | 12/07/2026 | [Phòng thí nghiệm 70](https://000070.awsstudygroup.com/), [106](https://000106.awsstudygroup.com/), [73](https://000073.awsstudygroup.com/) |

### Kết quả đạt được tuần 12:

* Làm chủ tư duy xây dựng và quản trị một nền tảng dữ liệu hiện đại trên mây, từ khâu lưu trữ thô cho đến xử lý phân tích và trực quan hóa thông tin.

* Thành thạo quy trình vận hành và cấu hình tự động trích xuất cấu trúc dữ liệu với AWS Glue kết hợp truy vấn tối ưu bằng SQL thông qua Amazon Athena.

* Định hình rõ vai trò, cách phối hợp hoạt động của các dịch vụ cốt lõi: Amazon S3, AWS Glue, Amazon Athena, Amazon Redshift, Amazon QuickSight và Amazon Kinesis trong toàn bộ trục kiến trúc Data & Analytics.
