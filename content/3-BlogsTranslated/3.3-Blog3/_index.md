---
title: "ACM ACME support"
date: 2026-06-30
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# ACME support in AWS Certificate Manager

#### 1. Source information

| Item | Details |
|---|---|
| Original title | Automate public TLS certificate issuance with ACME support in AWS Certificate Manager |
| Source | [AWS News Blog](https://aws.amazon.com/blogs/aws/automate-public-tls-certificate-issuance-with-acme-support-in-aws-certificate-manager/) |
| Topic | AWS Certificate Manager, TLS certificates, ACME protocol |

![Original blog illustration](/images/3-BlogsTranslated/3.3-Blog3/hero.png)

#### 2. Summary

Certificate lifetimes are becoming shorter: the **CA/Browser Forum** mandates a maximum of **100 days starting March 2027** and **47 days by 2029**. **ACME** is the open protocol behind **Let’s Encrypt** and is supported by clients such as Certbot, cert-manager, and acme.sh.

ACM now provides a fully managed **ACMEv2** endpoint for public certificates issued by **Amazon Trust Services**. Organizations can create **one or more** managed ACME endpoints.

#### 3. Main content

**3.1. Administrative benefits**

PKI administrators can bind **IAM roles** to ACME accounts, define **domain scopes** at the endpoint level, and monitor through **CloudTrail**, **CloudWatch**, and ACM expiry notifications. All certificates—whether issued via console, API, or ACME—can be searched in ACM.

With ACME support in ACM, PKI administrators can:

- Bind **IAM roles** to ACME accounts to control which domains each client may request.
- Define **domain scopes** at the endpoint level to enforce organization-wide policy.
- Monitor certificate requests through **AWS CloudTrail**, operational metrics through **Amazon CloudWatch**, and expiry notifications through **ACM**.
- Search all certificates in ACM, whether issued through the console, API, or ACME.

**3.2. Setup process**

Create an ACME endpoint, configure **External Account Binding (EAB)**, validate domains at the endpoint level, and point ACME clients to the endpoint. Domain validation stays with the PKI administrator (DNS credentials are not distributed to application owners).

| Parameter | Details per the article |
|---|---|
| Endpoint type | **Public** (client connects over the public internet) |
| Certificate type | **Public** (Amazon Trust Services, trusted by browsers and operating systems by default) |
| Certificate key type | Default **ECDSA P-256**; also supports **RSA 2048** and **ECDSA P-384** |
| Domain scope | **Exact domain**, **Subdomains**, **Wildcards** (can be deselected to block corresponding certificate types) |

![ACME certificates page](/images/3-BlogsTranslated/3.3-Blog3/figure-1.png)

Route 53 can create CNAME records automatically; otherwise CNAME records must be created manually at the DNS provider.

![Create ACME endpoint](/images/3-BlogsTranslated/3.3-Blog3/figure-3.png)

![Domain and scope configuration](/images/3-BlogsTranslated/3.3-Blog3/figure-5.png)

![Endpoint setup progress](/images/3-BlogsTranslated/3.3-Blog3/figure-7.png)

EAB credentials consist of a **Key ID** and **HMAC key**. After registration, the client generates its own asymmetric key pair for subsequent requests.

![Create EAB credentials](/images/3-BlogsTranslated/3.3-Blog3/figure-11.png)

The console provides sample commands for Certbot and acme.sh. For example, with Certbot:

```bash
certbot certonly --standalone --non-interactive --agree-tos \
    --email <EMAIL> \
    --server https://acm-acme-enroll.us-east-1.api.aws/<ENDPOINT_ID>/directory \
    --eab-kid <EAB_KID> \
    --eab-hmac-key <EAB_HMAC_KEY> \
    --issuance-timeout <ISSUANCE_TIMEOUT> \
    -d <DOMAIN>
```

![CLI reference](/images/3-BlogsTranslated/3.3-Blog3/figure-19.png)

![Issued ACME certificates](/images/3-BlogsTranslated/3.3-Blog3/figure-21.png)

**3.3. Availability and pricing**

Available in **all commercial AWS Regions**; later availability is planned for **AWS GovCloud (US)**, **China Regions**, and the **AWS European Sovereign Cloud**. Pricing is per domain at issuance, with different rates for FQDNs and wildcards, and volume tiers based on total domain occurrences per month.

#### 4. Remarks

The article reflects the growing need to automate TLS certificate lifecycles as validity periods become shorter under CA/Browser Forum guidance. ACME support in ACM lets organizations reuse existing clients such as Certbot and cert-manager while keeping certificates under centralized AWS governance.

A key design point is role separation: PKI administrators validate domains and enforce scopes at the endpoint, while application owners request certificates with EAB credentials only. This reduces DNS-credential sprawl and supports consistent policy for exact domains, subdomains, and wildcards. CloudTrail, CloudWatch, and expiry notifications further improve auditability and day-2 operations.

For systems with many services, environments, or Kubernetes workloads, the article provides a practical reference for standardizing public HTTPS issuance. Adoption should consider scope policy, EAB credential lifetime, and domain-based pricing for FQDNs and wildcards.
