---
title : "Khởi chạy Docker Compose"
date : 2024-01-01
weight : 1
chapter : false
pre : " <b> 5.3.1 </b> "
---

#### Mục tiêu

Bước này nhằm khởi chạy toàn bộ stack ứng dụng trên máy local. Sau khi hoàn tất, các container phải ở trạng thái running hoặc healthy và giao diện frontend phải truy cập được tại địa chỉ local.

#### Tạo file môi trường

Tại thư mục gốc repository, tạo file cấu hình local nếu chưa có:

~~~powershell
cp .env.example .env
~~~

File <code>.env</code> chứa các biến phục vụ Docker Compose, đặc biệt là cấu hình PostgreSQL. File này chỉ dùng cho môi trường cục bộ và không nên commit lên Git.

#### Build và chạy stack

~~~powershell
docker compose up --build -d
~~~

Tùy chọn <code>--build</code> bảo đảm image được build từ source code hiện tại. Tùy chọn <code>-d</code> chạy container ở chế độ nền để có thể tiếp tục kiểm tra trạng thái và log.

Kết quả mong đợi là <code>[+] up 10/10</code> với 10 container ở trạng thái Running hoặc Healthy.

![Kết quả docker compose up -d (chụp thực tế)](/images/5-Workshop/5.3-local-docker-compose/compose-up-live.png)

{{% notice info %}}
Lần build đầu tiên có thể mất 10 đến 20 phút vì dự án gồm nhiều runtime khác nhau như Go, .NET, Node.js và Python. Các lần chạy sau thường nhanh hơn nhờ Docker layer cache.
{{% /notice %}}

#### Kiểm tra container

~~~powershell
docker compose ps
~~~

Kết quả mong đợi là 10 service ở trạng thái <code>Up</code>. Trong ảnh minh chứng, <code>postgres</code> và <code>redis</code> hiển thị <code>(healthy)</code>; <code>frontend</code> map cổng <code>0.0.0.0:8080->8080/tcp</code>.

![Kết quả docker compose ps trên máy thực tế](/images/5-Workshop/5.3-local-docker-compose/compose-ps-screenshot.png)

#### Theo dõi log khi cần

~~~powershell
docker compose logs -f frontend
docker compose logs -f cartservice
~~~

Log giúp khoanh vùng lỗi theo service. Ví dụ, nếu frontend không lấy được danh mục sản phẩm, cần kiểm tra product catalog; nếu giỏ hàng lỗi, cần kiểm tra cartservice và Redis.

#### Các service trong Docker Compose

| Service | Vai trò |
|---------|---------|
| <code>frontend</code> | Giao diện web |
| <code>productcatalogservice</code> | Cung cấp danh mục sản phẩm |
| <code>cartservice</code> | Xử lý giỏ hàng và kết nối Redis |
| <code>checkoutservice</code> | Điều phối luồng thanh toán |
| <code>currencyservice</code> | Chuyển đổi tiền tệ |
| <code>paymentservice</code> | Mô phỏng thanh toán |
| <code>emailservice</code> | Mô phỏng email xác nhận |
| <code>shippingservice</code> | Tính phí vận chuyển |
| <code>redis</code> | Lưu trạng thái giỏ hàng |
| <code>postgres</code> | Platform database |

#### Truy cập giao diện

Mở trình duyệt tại:

~~~text
http://127.0.0.1:8080
~~~

![Trang chủ Online Boutique với nhãn local và lưới Hot Products (chụp thực tế)](/images/5-Workshop/5.3-local-docker-compose/local-home-real.png)

Trang chủ hiển thị nhãn <code>local</code> ở góc trái, mục <strong>Hot Products</strong> với 9 sản phẩm mẫu (Sunglasses, Tank Top, Watch, …). Nếu trang chủ hiển thị bình thường, có thể chuyển sang bước kiểm tra chức năng ở mục 5.3.2.
