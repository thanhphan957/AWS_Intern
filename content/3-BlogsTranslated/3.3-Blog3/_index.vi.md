---
title: "ACM hỗ trợ ACME"
date: 2026-06-30
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# Hỗ trợ giao thức ACME trên AWS Certificate Manager

#### 1. Thông tin nguồn

| Hạng mục | Nội dung |
|---|---|
| Tiêu đề gốc | Automate public TLS certificate issuance with ACME support in AWS Certificate Manager |
| Nguồn | [AWS News Blog](https://aws.amazon.com/blogs/aws/automate-public-tls-certificate-issuance-with-acme-support-in-aws-certificate-manager/) |
| Chủ đề | AWS Certificate Manager, chứng chỉ TLS, giao thức ACME |

![Hình minh họa từ bài viết gốc](/images/3-BlogsTranslated/3.3-Blog3/hero.png)

#### 2. Tóm tắt nội dung

Bài viết phân tích nhu cầu tự động hóa quản lý chứng chỉ TLS khi thời hạn hiệu lực ngày càng ngắn. Theo định hướng của **CA/Browser Forum**, thời hạn tối đa giảm còn **100 ngày từ tháng 3/2027** và còn **47 ngày vào năm 2029**, khiến gia hạn thủ công không còn khả thi.

**ACME** (Automatic Certificate Management Environment) là giao thức mở dùng để yêu cầu, gia hạn và thu hồi chứng chỉ TLS tự động — cùng giao thức đứng sau **Let’s Encrypt**, được hỗ trợ bởi nhiều client như Certbot, cert-manager cho Kubernetes, acme.sh và các client ACMEv2 khác.

AWS bổ sung hỗ trợ ACME cho chứng chỉ công khai trên **AWS Certificate Manager (ACM)**. ACM cung cấp **endpoint máy chủ ACME được quản lý đầy đủ**, tương thích ACMEv2. Chứng chỉ TLS công khai được cấp bởi **Amazon Trust Services** thông qua giao thức ACME chuẩn. Có thể thiết lập **một hoặc nhiều** ACME endpoint để quản lý và giám sát tập trung trong tổ chức.

#### 3. Nội dung chính

**3.1. Vấn đề trước đây và lợi ích quản trị**

Trước đây, tự động hóa theo ACME thường phụ thuộc nhà cung cấp chứng chỉ bên ngoài song song với ACM, dẫn đến chứng chỉ phân tán, thiếu dashboard tập trung và hạn chế khả năng kiểm soát ai được yêu cầu chứng chỉ cũng như domain nào được phép.

Với ACME trên ACM, quản trị PKI có thể:

- Gắn **IAM roles** với tài khoản ACME để kiểm soát chi tiết domain mà từng client được yêu cầu.
- Định nghĩa **domain scopes** ở cấp endpoint để áp dụng chính sách toàn tổ chức.
- Giám sát tập trung: **AWS CloudTrail** ghi nhận mọi yêu cầu chứng chỉ; **Amazon CloudWatch** theo dõi metric vận hành; **ACM** gửi thông báo sắp hết hạn.
- Tra cứu toàn bộ chứng chỉ trên ACM, bất kể được cấp qua console, API hay ACME.

**3.2. Quy trình thiết lập**

Quy trình gồm: tạo ACME endpoint; cấu hình ủy quyền bằng **External Account Binding (EAB)**; xác thực domain ở cấp endpoint; trỏ client ACME tới endpoint.

Bước xác thực domain có ý nghĩa quan trọng: tách người thiết lập cấp chứng chỉ khỏi người yêu cầu chứng chỉ. Quản trị PKI xác thực domain một lần ở cấp endpoint bằng credential DNS (giữ ở phía admin). Chủ ứng dụng chỉ đăng ký bằng EAB credential; endpoint tự thực thi phạm vi domain được phép. Nhờ đó có thể phân phối tự động hóa rộng mà không phân phối khóa DNS.

![Trang quản lý ACME certificates trên console ACM](/images/3-BlogsTranslated/3.3-Blog3/figure-1.png)

Khi tạo endpoint cần cấu hình:

| Tham số | Nội dung theo bài viết |
|---|---|
| Endpoint type | **Public** (client kết nối qua internet công cộng) |
| Certificate type | **Public** (Amazon Trust Services, được trình duyệt và HĐH tin cậy mặc định) |
| Certificate key type | Mặc định **ECDSA P-256**; cũng hỗ trợ **RSA 2048** và **ECDSA P-384** |
| Domain scope | **Exact domain**, **Subdomains**, **Wildcards** (có thể bỏ chọn để chặn loại chứng chỉ tương ứng) |

Có thể chọn **Amazon Route 53** hosted zone để ACM tự tạo bản ghi **CNAME** phục vụ DNS validation. Nếu domain không nằm trên Route 53, cần tạo thủ công CNAME do ACM cung cấp tại nhà cung cấp DNS. Đây là điểm khác biệt so với mô hình ACME thông thường, nơi mỗi client tự xử lý xác thực domain.

![Tạo ACME endpoint](/images/3-BlogsTranslated/3.3-Blog3/figure-3.png)

![Cấu hình domain và phạm vi cấp chứng chỉ](/images/3-BlogsTranslated/3.3-Blog3/figure-5.png)

Sau khi endpoint được tạo, console hiển thị **Setup progress**. Domain ở trạng thái Validating theo phương thức DNS validation. Khi dùng Route 53, có thể chọn tạo bản ghi tự động; sau khi thành công, trạng thái chuyển thành Success.

![Tiến trình thiết lập endpoint](/images/3-BlogsTranslated/3.3-Blog3/figure-7.png)

Tiếp theo, tạo **EAB credentials** gồm **Key ID** và **HMAC key** để client đăng ký tài khoản với máy chủ ACME. Sau khi đăng ký, client tự sinh cặp khóa bất đối xứng để xác thực các yêu cầu chứng chỉ tiếp theo. Có thể đặt thời hạn hết hạn cho credential, nên chỉ đủ dài để hoàn tất đăng ký client.

![Tạo EAB credentials](/images/3-BlogsTranslated/3.3-Blog3/figure-11.png)

Console cung cấp lệnh mẫu cho Certbot và acme.sh. Ví dụ với Certbot:

```bash
certbot certonly --standalone --non-interactive --agree-tos \
    --email <EMAIL> \
    --server https://acm-acme-enroll.us-east-1.api.aws/<ENDPOINT_ID>/directory \
    --eab-kid <EAB_KID> \
    --eab-hmac-key <EAB_HMAC_KEY> \
    --issuance-timeout <ISSUANCE_TIMEOUT> \
    -d <DOMAIN>
```

![Tham chiếu lệnh CLI trên console](/images/3-BlogsTranslated/3.3-Blog3/figure-19.png)

Certbot liên hệ endpoint ACME và nhận chứng chỉ do Amazon Trust Services ký. Bài viết cũng nêu việc dùng `openssl` để xem chứng chỉ trước khi cài đặt. Chứng chỉ xuất hiện trong tab **ACME certificates** trên ACM, cùng với chứng chỉ cấp qua console hoặc API.

![Danh sách chứng chỉ ACME trên console](/images/3-BlogsTranslated/3.3-Blog3/figure-21.png)

**3.3. Phạm vi áp dụng và chi phí**

Tính năng hiện có tại **tất cả Region thương mại** của AWS; sẽ có sau tại **AWS GovCloud (US)**, **China Regions** và **AWS European Sovereign Cloud**.

Chi phí tính **theo từng domain** trong mỗi chứng chỉ tại thời điểm phát hành, với mức khác nhau giữa **FQDN** và **wildcard**. Các bậc khối lượng được tính theo **tổng số lần xuất hiện domain** trên mọi chứng chỉ phát hành trong tháng của tài khoản AWS.

#### 4. Nhận xét

Bài viết phản ánh xu hướng bắt buộc phải tự động hóa vòng đời chứng chỉ TLS khi thời hạn hiệu lực ngày càng ngắn theo định hướng của CA/Browser Forum. Việc ACM hỗ trợ ACME giúp tổ chức dùng lại hệ sinh thái client sẵn có (Certbot, cert-manager, acme.sh) thay vì phụ thuộc quy trình riêng biệt, đồng thời vẫn giữ chứng chỉ trong một hệ thống quản trị tập trung trên AWS.

Điểm kỹ thuật đáng chú ý là mô hình tách vai trò: quản trị PKI xác thực domain và kiểm soát scope ở cấp endpoint, còn chủ ứng dụng chỉ dùng EAB credential để yêu cầu chứng chỉ. Cách tiếp cận này giảm rủi ro phân tán credential DNS và tăng khả năng áp dụng chính sách thống nhất (exact domain, subdomain, wildcard). Việc giám sát qua CloudTrail, CloudWatch và thông báo hết hạn trên ACM cũng hỗ trợ kiểm toán và vận hành lâu dài tốt hơn so với mô hình chứng chỉ nằm rải rác ở nhiều CA.

Đối với hệ thống có nhiều dịch vụ, nhiều môi trường hoặc triển khai trên Kubernetes, bài viết cung cấp hướng tham chiếu rõ ràng để chuẩn hóa cấp phát HTTPS. Khi áp dụng, cần cân nhắc cấu hình scope phù hợp mức độ bảo mật, quản lý vòng đời EAB credential, và theo dõi chi phí theo domain/FQDN/wildcard. Nội dung này đặc biệt hữu ích khi thiết kế nền tảng cần chứng chỉ công khai tin cậy trình duyệt mà vẫn kiểm soát được quyền và phạm vi cấp phát.
