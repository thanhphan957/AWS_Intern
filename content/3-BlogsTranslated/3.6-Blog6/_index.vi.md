---
title: "S3 annotations"
date: 2026-06-16
weight: 6
chapter: false
pre: " <b> 3.6. </b> "
---

# Amazon S3 annotations

#### 1. Thông tin nguồn

| Hạng mục | Nội dung |
|---|---|
| Tiêu đề gốc | Amazon S3 annotations: attach rich, queryable context directly to your objects |
| Nguồn | [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-s3-annotations-attach-rich-queryable-context-directly-to-your-objects/) |
| Chủ đề | Amazon S3, metadata, truy vấn ngữ cảnh đối tượng |

![Hình minh họa từ bài viết gốc](/images/3-BlogsTranslated/3.6-Blog6/hero.png)

#### 2. Tóm tắt nội dung

Bài viết giới thiệu **annotations**, khả năng metadata mới trên **Amazon Simple Storage Service (Amazon S3)**, cho phép gắn ngữ cảnh nghiệp vụ phong phú trực tiếp lên đối tượng lưu trữ. Mỗi đối tượng có thể có tới **1.000** annotation được đặt tên; mỗi annotation tối đa **1 MB** và tổng dung lượng tối đa **1 GB** mỗi đối tượng. Dữ liệu annotation hỗ trợ các định dạng linh hoạt như JSON, XML, YAML và văn bản thuần, đồng thời có thể được cập nhật hoặc xóa mà không cần ghi lại đối tượng gốc.

Mục tiêu là hỗ trợ các workflow agentic cần tìm, hiểu và thao tác trên dữ liệu mà không cần can thiệp thủ công, với metadata có thể tiến hóa cùng dữ liệu, mở rộng tới quy mô petabyte và vẫn truy vấn được mà không phát sinh chi phí restore đắt đỏ.

#### 3. Nội dung chính

**3.1. Vai trò của annotations**

Ngữ cảnh gắn kèm đối tượng (ví dụ transcript do AI tạo, xếp hạng nội dung, thông số kỹ thuật) được di chuyển cùng đối tượng trong các thao tác **copy**, **replication** và **chuyển vùng**. Khi đối tượng bị xóa, annotation tương ứng cũng được gỡ bỏ. Nếu bật **S3 Metadata**, annotations tự động chảy vào **annotation tables** được quản lý đầy đủ và có thể truy vấn bằng **Amazon Athena** cùng các engine phân tích khác.

Các lĩnh vực ứng dụng nêu trong bài viết:

- **Media & Entertainment:** transcript, kết quả kiểm duyệt nội dung, phụ đề, metadata bản quyền trên video asset.
- **Financial Services:** tóm tắt đầu tư và phân tích cảm xúc do AI tạo trên tài liệu nghiên cứu, hỗ trợ agent tìm dataset bằng truy vấn ngôn ngữ tự nhiên.
- **Life Sciences:** trạng thái regulatory, thông tin cohort bệnh nhân, chuỗi phê duyệt trên dữ liệu thử nghiệm lâm sàng; ngữ cảnh vẫn truy cập được với dữ liệu lưu ở **Amazon S3 Glacier** mà **không mất phí retrieval**.

Có thể truy vấn annotations của đối tượng thuộc **mọi storage class**, không cần restore đối tượng và không trả phí retrieval chỉ để đọc annotation.

**3.2. So sánh với cơ chế metadata hiện có**

| Khả năng | Kích thước tối đa | Có thể thay đổi? | Mục đích phù hợp |
|---|---|---|---|
| System-defined metadata | Cố định | Không | Thuộc tính hệ thống (size, storage class, thời điểm tạo) |
| User-defined metadata | **2 KB** | Không (thiết lập lúc tải lên) | Cặp khóa–giá trị nhỏ |
| Object tags | **10 tags**, tối đa **128/256** ký tự cho key/value | Có | Access control, lifecycle, phân bổ chi phí |
| Annotations | **1 GB** (1.000 × 1 MB) | Có | Ngữ cảnh nghiệp vụ phong phú (JSON, XML, YAML, text) |

**3.3. Cách sử dụng cơ bản**

Cần cấp quyền IAM hoặc bucket policy cho `s3:PutObjectAnnotation` và `s3:GetObjectAnnotation`. Annotation được gắn bằng API `PutObjectAnnotation`.

Ví dụ gắn annotation kỹ thuật dạng JSON:

```bash
aws s3api put-object-annotation \
  --bucket my-media-bucket \
  --key videos/documentary-2026.mp4 \
  --annotation-name mediainfo \
  --annotation-payload ./mediainfo.json
```

Có thể gắn thêm annotation khác (ví dụ `ai_summary` dạng văn bản) trên cùng một đối tượng. Mỗi annotation có tên duy nhất, đọc và sửa độc lập, hỗ trợ nhiều luồng enrichment đồng thời mà không xung đột.

![Gắn annotation cho đối tượng S3](/images/3-BlogsTranslated/3.6-Blog6/figure-1.png)

Các thao tác liên quan:

| API | Mục đích |
|---|---|
| `GetObjectAnnotation` | Đọc một annotation cụ thể |
| `ListObjectAnnotations` | Liệt kê toàn bộ annotation trên đối tượng |
| `DeleteObjectAnnotation` | Xóa một annotation |
| `PutObjectAnnotation` (cùng tên) | Cập nhật annotation hiện có |

Với đối tượng tải lên bằng **multipart upload**, cần gắn annotation **sau khi hoàn tất** multipart upload.

![Liệt kê annotations trên đối tượng](/images/3-BlogsTranslated/3.6-Blog6/figure-2.png)

**3.4. Truy vấn ở quy mô lớn**

Khi bật **S3 Metadata annotation tables** trên bucket (qua S3 console hoặc API `CreateBucketMetadataConfiguration`), S3 lập chỉ mục annotations vào bảng **Apache Iceberg** được quản lý. Nếu bucket đã có cấu hình metadata, dùng `UpdateBucketMetadataAnnotationTableConfiguration`.

- **Journal tables:** cập nhật gần thời gian thực, phục vụ theo dõi thay đổi annotation.
- **Annotation tables:** làm mới trong khoảng **một giờ**; tự thích ứng với cấu trúc JSON/XML/YAML, mỗi annotation là một dòng với nội dung trong cột `text_value`.
- Nếu bucket đã có đối tượng được gắn annotation trước đó, S3 thực hiện **backfill** ở nền; thời gian có thể từ **vài giờ đến vài ngày** tùy số lượng đối tượng.

Ví dụ truy vấn Athena tìm video có hơn 8 audio tracks:

```sql
SELECT DISTINCT bucket, object_key
FROM "s3tablescatalog/aws-s3"."b_my_media_bucket"."annotation"
WHERE name = 'mediainfo'
AND CAST(json_extract_scalar(text_value, '$.audio_tracks') AS INTEGER) > 8
```

Ví dụ theo dõi annotation mới trong 24 giờ qua journal table:

```sql
SELECT bucket, key, version_id, record_timestamp, annotation.name
FROM "s3tablescatalog/aws-s3"."b_my_media_bucket"."journal"
WHERE record_timestamp >= (current_date - interval '1' day)
AND annotation.name IS NOT NULL
AND record_type IN ('CREATE_ANNOTATION', 'DELETE_ANNOTATION')
```

Ngoài SQL, có thể tìm kiếm bằng ngôn ngữ tự nhiên qua agent trong **Amazon SageMaker Unified Studio** hoặc IDE dùng **S3 Tables MCP server**.

**3.5. Phạm vi áp dụng và chi phí**

- **Annotations:** có mặt tại **tất cả AWS Regions**, bao gồm **AWS China Regions**.
- **Annotation tables:** có mặt tại các Region đã hỗ trợ **S3 Metadata**.
- Dung lượng lưu trữ annotation luôn tính theo mức **S3 Standard**, kể cả khi đối tượng gốc thuộc **S3 Glacier** hoặc lớp lưu trữ khác.

#### 4. Nhận xét

Bài viết giải quyết một hạn chế phổ biến trong quản lý dữ liệu trên object storage: metadata nghiệp vụ thường nằm ở cơ sở dữ liệu hoặc file phụ bên ngoài, dẫn đến chi phí đồng bộ và rủi ro lệch trạng thái so với đối tượng gốc. S3 annotations gắn ngữ cảnh trực tiếp lên object, cho phép cập nhật độc lập và di chuyển cùng object khi copy hoặc replication, nhờ đó giảm độ phức tạp vận hành của lớp metadata tách rời.

Điểm mạnh về mặt kỹ thuật là quy mô và tính linh hoạt: dung lượng lớn hơn rõ rệt so với object tags hay user-defined metadata, hỗ trợ nhiều định dạng và nhiều annotation độc lập trên cùng một object. Việc lập chỉ mục vào bảng Iceberg và truy vấn bằng Athena mở rộng annotations từ thao tác trên từng object sang phân tích ở quy mô bucket. Khả năng truy vấn annotation mà không cần restore object ở các lớp lưu trữ lạnh cũng có ý nghĩa với dữ liệu lưu trữ dài hạn và kiểm toán tuân thủ.

Đối với các hệ thống data lake, quản lý tài nguyên số, hoặc ứng dụng agentic cần khám phá dữ liệu theo ngữ cảnh, bài viết cung cấp hướng tiếp cận thực tiễn để gắn và truy vấn metadata thống nhất. Khi áp dụng, cần lưu ý chi phí lưu trữ annotation theo mức S3 Standard, thời gian refresh của annotation tables, quá trình backfill, và phân quyền API liên quan. Nội dung này phù hợp để tham chiếu khi thiết kế lớp ngữ cảnh dữ liệu phục vụ phân tích và tự động hóa trên Amazon S3.
