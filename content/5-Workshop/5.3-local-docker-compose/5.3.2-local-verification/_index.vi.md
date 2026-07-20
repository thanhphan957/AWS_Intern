---
title : "Kiểm tra stack local"
date : 2024-01-01
weight : 2
chapter : false
pre : " <b> 5.3.2 </b> "
---

#### Mục tiêu kiểm tra

Sau khi các container đã chạy, cần xác minh ứng dụng thật sự phản hồi đúng và luồng nghiệp vụ có thể hoàn tất. Việc kiểm tra gồm smoke test tự động, kiểm tra database và kiểm thử thủ công trên giao diện.

#### Smoke test frontend

~~~powershell
.\scripts\smoke-local.ps1
~~~

~~~bash
./scripts/smoke-local.sh
~~~

Kết quả mong đợi là dòng <code>PASS: frontend HTTP 200</code> khi script kiểm tra <code>http://127.0.0.1:8080</code>.

![Kết quả smoke-local.ps1 hiển thị PASS: frontend HTTP 200 (chụp thực tế)](/images/5-Workshop/5.3-local-docker-compose/smoke-local-live.png)

#### Kiểm tra PostgreSQL

~~~powershell
.\scripts\verify-platform-db.ps1
~~~

Script này kiểm tra kết nối tới PostgreSQL trong Docker Compose. Kết quả mong đợi gồm bảng <code>platform_db_ok</code> trả về <code>1</code> và dòng <code>Platform PostgreSQL connectivity OK</code>. Đây là bước xác nhận platform database hoạt động bình thường trước khi đối chiếu với RDS ở môi trường AWS.

![Kết quả verify-platform-db.ps1 với platform_db_ok và Platform PostgreSQL connectivity OK (chụp thực tế)](/images/5-Workshop/5.3-local-docker-compose/verify-db-live.png)

#### Kiểm tra giao diện

Quy trình kiểm tra thủ công gồm:

1. Truy cập <code>http://127.0.0.1:8080</code> và xác nhận nhãn <code>local</code> trên giao diện.
2. Mở sản phẩm <strong>Sunglasses</strong> ($19.99) và nhấn <strong>Add To Cart</strong>.
3. Mở giỏ hàng, xác nhận 1 sản phẩm với tổng $28.98 (gồm phí ship $8.99).
4. Điền form Shipping & Payment (email, địa chỉ, thẻ thử nghiệm) và nhấn <strong>Place Order</strong>.
5. Xác nhận trang <strong>Your order is complete!</strong> hiển thị mã xác nhận và tracking number.

![Trang chi tiết Sunglasses $19.99 với nhãn local (chụp thực tế)](/images/5-Workshop/5.3-local-docker-compose/local-product-real.png)

![Giỏ hàng 1 sản phẩm và form Shipping & Payment (chụp thực tế)](/images/5-Workshop/5.3-local-docker-compose/local-cart-real.png)

![Trang Your order is complete! với tổng $28.98 (chụp thực tế)](/images/5-Workshop/5.3-local-docker-compose/local-checkout-real.png)

{{% notice note %}}
Luồng thanh toán đầy đủ (payment, email, shipping) được kiểm thử trên Docker Compose với 10 container. Trên AWS EKS Phase 1, namespace <code>boutique</code> triển khai 6 workload (frontend, productcatalog, cart, checkout, currency, redis); các service phụ trợ như payment, email và shipping chưa được đưa lên cluster.
{{% /notice %}}

#### Dừng môi trường local

~~~powershell
docker compose down
~~~

Nếu cần xóa cả volume:

~~~powershell
docker compose down -v
~~~

#### Kết quả

Sau bước này, có thể kết luận ứng dụng chạy ổn định trên môi trường local và đủ điều kiện chuyển sang triển khai AWS.
