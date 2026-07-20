---
title: "EC2 C9g / C9gd Graviton5"
date: 2026-06-30
weight: 5
chapter: false
pre: " <b> 3.5. </b> "
---

# Amazon EC2 C9g và C9gd trên AWS Graviton5

#### 1. Thông tin nguồn

| Hạng mục | Nội dung |
|---|---|
| Tiêu đề gốc | Amazon EC2 C9g and C9gd instances powered by AWS Graviton5 processors are now available |
| Nguồn | [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-ec2-c9g-and-c9gd-instances-powered-by-aws-graviton5-processors-are-now-available/) |
| Chủ đề | Amazon EC2, AWS Graviton5, instance compute-optimized |

![Hình minh họa từ bài viết gốc](/images/3-BlogsTranslated/3.5-Blog5/hero.png)

#### 2. Tóm tắt nội dung

Bài viết công bố **general availability** của dòng instance **Amazon EC2 C9g** và **C9gd** sử dụng bộ xử lý **AWS Graviton5**. Đây là nhóm instance **compute-optimized**, phù hợp các workload tính toán chuyên sâu như phân tích thời gian thực, xử lý theo lô, mã hóa video, mô hình khoa học, suy luận máy học trên CPU và các tác vụ agentic AI.

#### 3. Nội dung chính

**3.1. Đặc tính hiệu năng**

Theo bài viết, C9g mang lại hiệu năng trên mỗi vCPU cao hơn tới **25%** so với thế hệ trước **C8g**. Instance sử dụng bộ nhớ **DDR5 8800MT/s** — được mô tả là bộ nhớ nhanh nhất trong các instance dạng processor trên cloud — có bộ nhớ đệm **L3 lớn hơn 5 lần** và khả năng xử lý gói tin cao hơn tới **3 lần** so với các instance dựa trên **Graviton4**.

C9g phù hợp batch jobs, pipeline mã hóa video hoặc distributed analytics khi dùng **Amazon EBS** làm lưu trữ chính; đồng thời phù hợp workload agentic AI với nhiều môi trường đồng thời và các bước suy luận thiên về CPU.

**C9gd** bổ sung ổ **NVMe SSD** cục bộ tốc độ cao, độ trễ thấp — ví dụ không gian tạm trong mô phỏng HPC, cache tạm cho ML inference, hoặc buffer cục bộ cho ad-serving. Instance store NVMe trên Graviton5 hỗ trợ thống kê hiệu năng chi tiết (latency histogram theo kích thước I/O, độ phân giải tới **1 giây**), truy cập qua **Amazon CloudWatch** hoặc **nvme-cli**, **không phát sinh chi phí thêm**.

**3.2. Thông số chính**

Cả hai dòng có **11 kích thước** từ `medium` đến `48xlarge`, kèm tùy chọn **bare metal**. Trung bình, băng thông mạng cao hơn tới **15%** và băng thông EBS cao hơn tới **20%** so với thế hệ trước. Kích thước `48xlarge` đạt tới **100 Gbps** mạng và **72 Gbps** EBS (**gấp đôi** so với thế hệ trước ở mức lớn nhất).

**Bảng thông số C9g**

| C9g | vCPUs | Memory (GiB) | Network (Gbps) | EBS (Gbps) |
|---|---:|---:|---|---|
| medium | 1 | 2 | Up to 15 | Up to 12 |
| large | 2 | 4 | Up to 15 | Up to 12 |
| xlarge | 4 | 8 | Up to 15 | Up to 12 |
| 2xlarge | 8 | 16 | Up to 17 | Up to 12 |
| 4xlarge | 16 | 32 | Up to 17 | Up to 12 |
| 8xlarge | 32 | 64 | 17 | 12 |
| 12xlarge | 48 | 96 | 25 | 18 |
| 16xlarge | 64 | 128 | 34 | 24 |
| 24xlarge | 96 | 192 | 50 | 36 |
| 48xlarge | 192 | 384 | 100 | 72 |
| metal-48xl | 192 | 384 | 100 | 72 |

**Bảng thông số C9gd** (thêm instance storage; hiệu năng storage cục bộ cao hơn tới **30%** so với thế hệ trước)

| C9gd | vCPUs | Memory (GiB) | Instance Storage (GB) | Network (Gbps) | EBS (Gbps) |
|---|---:|---:|---|---|---|
| medium | 1 | 2 | 1 × 59 | Up to 15 | Up to 12 |
| large | 2 | 4 | 1 × 118 | Up to 15 | Up to 12 |
| xlarge | 4 | 8 | 1 × 237 | Up to 15 | Up to 12 |
| 2xlarge | 8 | 16 | 1 × 474 | Up to 17 | Up to 12 |
| 4xlarge | 16 | 32 | 1 × 950 | Up to 17 | Up to 12 |
| 8xlarge | 32 | 64 | 1 × 1900 | 17 | 12 |
| 12xlarge | 48 | 96 | 3 × 950 | 25 | 18 |
| 16xlarge | 64 | 128 | 1 × 3800 | 34 | 24 |
| 24xlarge | 96 | 192 | 3 × 1900 | 50 | 36 |
| 48xlarge | 192 | 384 | 3 × 3800 | 100 | 72 |
| metal-48xl | 192 | 384 | 3 × 3800 | 100 | 72 |

Cả hai dòng phù hợp HPC, batch processing, gaming, video encoding, scientific modeling, distributed analytics, CPU-based ML inference và ad serving.

**3.3. Tính năng bổ sung và bảo mật**

- **Instance Bandwidth Configuration (IBC):** điều chỉnh phân bổ băng thông giữa Amazon EBS và Amazon VPC tới **25%**.
- Hỗ trợ **ENA Express**.
- Gắn tới **128 volume EBS** trên instance ảo.
- Hình thức mua: **Savings Plans**, **On-Demand**, **Spot Instances**, **Dedicated Instances** và **Dedicated Hosts**.
- **Nitro Isolation Engine:** C9g/C9gd là các instance compute-optimized đầu tiên tích hợp thành phần tăng cường của Nitro System, dùng formal verification để bảo đảm cô lập giữa các máy ảo, bao gồm kiểm soát truy cập memory, CPU register state và thiết bị I/O qua tập API tối thiểu.

**3.4. Phạm vi áp dụng**

Các instance hiện có tại **US East (Ohio, N. Virginia)**, **US West (Oregon)** và **Europe (Frankfurt)**; các Region khác sẽ được mở rộng sau. Có thể khởi chạy qua AWS Management Console, AWS CLI hoặc AWS SDKs.

#### 4. Nhận xét

Bài viết cung cấp bức tranh khá đầy đủ về thế hệ compute Graviton mới trên Amazon EC2, không chỉ nêu mức tăng hiệu năng tổng quát mà còn chi tiết hóa bộ nhớ, cache, khả năng xử lý gói tin, băng thông mạng/EBS và tùy chọn lưu trữ cục bộ. Việc tách C9g và C9gd giúp người đọc xác định rõ khi nào chỉ cần compute gắn EBS và khi nào cần NVMe local cho scratch, cache tạm hoặc buffer độ trễ thấp.

Các số liệu so sánh với C8g và Graviton4, cùng bảng kích thước đầy đủ, hỗ trợ việc lập kế hoạch capacity và ước lượng chi phí thực tế hơn so với các thông báo chỉ mang tính giới thiệu. Các tính năng bổ sung như IBC, ENA Express, giới hạn gắn volume EBS và Nitro Isolation Engine cho thấy dòng instance này hướng tới cả hiệu năng lẫn yêu cầu cô lập/bảo mật trong môi trường cloud dùng chung.

Trong thực tiễn, bài viết hữu ích khi đánh giá nâng cấp từ thế hệ Graviton trước, lựa chọn instance cho HPC, batch, video encoding, inference trên CPU hoặc workload agentic AI. Khi áp dụng, cần đối chiếu Region khả dụng, hình thức mua (On-Demand, Spot, Savings Plans, Dedicated) và đặc thù I/O của ứng dụng để quyết định giữa C9g và C9gd. Đây là tài liệu tham khảo tốt cho phần phân tích lựa chọn hạ tầng compute trong báo cáo kỹ thuật.
