---
title : "Verify Local Stack"
date : 2024-01-01 
weight : 2
chapter : false
pre : " <b> 5.3.2 </b> "
---

#### Verification objective

After containers are running, verify that the application responds correctly and business flows can be completed. Verification includes automated smoke tests, database checks, and manual UI testing.

#### Frontend smoke test

~~~powershell
.\scripts\smoke-local.ps1
~~~

~~~bash
./scripts/smoke-local.sh
~~~

The expected result is the line <code>PASS: frontend HTTP 200</code> when the script checks <code>http://127.0.0.1:8080</code>.

![smoke-local.ps1 showing PASS: frontend HTTP 200 (live capture)](/images/5-Workshop/5.3-local-docker-compose/smoke-local-live.png)

#### PostgreSQL check

~~~powershell
.\scripts\verify-platform-db.ps1
~~~

This script verifies connectivity to PostgreSQL in Docker Compose. The expected output includes a <code>platform_db_ok</code> table returning <code>1</code> and the line <code>Platform PostgreSQL connectivity OK</code>. It confirms the platform database is working before comparing with RDS in the AWS environment.

![verify-platform-db.ps1 with platform_db_ok and Platform PostgreSQL connectivity OK (live capture)](/images/5-Workshop/5.3-local-docker-compose/verify-db-live.png)

#### UI verification

Manual verification steps:

1. Open <code>http://127.0.0.1:8080</code> and confirm the <code>local</code> badge on the UI.
2. Open the <strong>Sunglasses</strong> product ($19.99) and click <strong>Add To Cart</strong>.
3. Open the cart and confirm 1 item with total $28.98 (including $8.99 shipping).
4. Fill in the Shipping & Payment form (email, address, test card) and click <strong>Place Order</strong>.
5. Confirm the <strong>Your order is complete!</strong> page shows a confirmation and tracking number.

![Sunglasses product detail $19.99 with local badge (live capture)](/images/5-Workshop/5.3-local-docker-compose/local-product-real.png)

![Cart with 1 item and Shipping & Payment form (live capture)](/images/5-Workshop/5.3-local-docker-compose/local-cart-real.png)

![Your order is complete! page with total $28.98 (live capture)](/images/5-Workshop/5.3-local-docker-compose/local-checkout-real.png)

{{% notice note %}}
The full checkout flow (payment, email, shipping) is tested on Docker Compose with 10 containers. On AWS EKS Phase 1, the <code>boutique</code> namespace runs 6 workloads (frontend, productcatalog, cart, checkout, currency, redis); supporting services such as payment, email, and shipping are not deployed to the cluster.
{{% /notice %}}

#### Stop the local environment

~~~powershell
docker compose down
~~~

To also remove volumes:

~~~powershell
docker compose down -v
~~~

#### Result

After this step, you can conclude that the application runs stably in the local environment and is ready for AWS deployment.
