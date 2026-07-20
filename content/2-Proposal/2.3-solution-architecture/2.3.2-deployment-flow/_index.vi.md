---
title: "Luồng triển khai sau khi mở rộng"
date: 2026-07-04
weight: 2
chapter: false
pre: " <b> 2.3.2 </b> "
---

<div class="deploy-flow">

<p class="deploy-flow-lead">
Sau khi kiến trúc được mở rộng theo định hướng mục tiêu (mục 2.3.1), quy trình phát hành chuyển sang mô hình <strong>GitOps kết hợp progressive delivery</strong>. Cụ thể: mã nguồn và hạ tầng được kiểm tra sớm tại pull request; container image được build, tạo SBOM, ký bằng Cosign và đẩy lên Amazon ECR; manifest triển khai được cập nhật trong GitOps repository; Argo CD đồng bộ trạng thái mong muốn lên EKS; Argo Rollouts thực hiện canary hoặc blue-green deployment. Trong suốt vòng đời release, metrics, traces, logs, SLO/SLI và cảnh báo chi phí được theo dõi liên tục để hỗ trợ rollback khi cần thiết.
</p>

<div class="deploy-flow-pipeline">
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fas fa-code-branch"></i></span>
    <span class="deploy-flow-pipeline__label">Phát triển & PR</span>
  </div>
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fas fa-shield-alt"></i></span>
    <span class="deploy-flow-pipeline__label">CI & bảo mật</span>
  </div>
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fab fa-docker"></i></span>
    <span class="deploy-flow-pipeline__label">Build & ECR</span>
  </div>
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fab fa-git"></i></span>
    <span class="deploy-flow-pipeline__label">GitOps sync</span>
  </div>
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fas fa-rocket"></i></span>
    <span class="deploy-flow-pipeline__label">Rollout</span>
  </div>
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fas fa-chart-line"></i></span>
    <span class="deploy-flow-pipeline__label">Quan sát & chi phí</span>
  </div>
</div>

<div class="deploy-flow-diagram">
  <div class="deploy-flow-diagram__track">
    <span class="deploy-flow-diagram__node">Developer</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Pull Request</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">CI &amp; Security</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node deploy-flow-diagram__node--accent">Merge main</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Build + SBOM</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Push ECR</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Update GitOps</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Argo CD</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Argo Rollouts</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Metrics / SLO</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node deploy-flow-diagram__node--warn">Rollback?</span>
    <span class="deploy-flow-diagram__arrow">→</span>
    <span class="deploy-flow-diagram__node">Cost monitoring</span>
  </div>
</div>

<div class="deploy-flow-phases">

<section class="deploy-phase deploy-phase--dev">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">01</span> Phát triển & kiểm tra sớm</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">1</span>
<div>
<h5 class="deploy-step__title">Tạo thay đổi trong source repository</h5>
<p class="deploy-step__text">Developer chỉnh sửa mã ứng dụng hoặc manifest hạ tầng (Terraform/Kustomize) trong repository nguồn, chuẩn bị cho vòng review và kiểm thử tự động.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">GitHub</span><span class="deploy-step__tag">Source repo</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">2</span>
<div>
<h5 class="deploy-step__title">Pull request chạy quality gate</h5>
<p class="deploy-step__text">Mỗi pull request kích hoạt pipeline kiểm tra mã nguồn, scan bảo mật bằng Snyk, validate Terraform và ước tính chi phí bằng Infracost trước khi merge.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Snyk</span><span class="deploy-step__tag">Terraform</span><span class="deploy-step__tag">Infracost</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--build">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">02</span> Build, ký image & cập nhật GitOps</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">3</span>
<div>
<h5 class="deploy-step__title">Build image an toàn sau khi merge</h5>
<p class="deploy-step__text">Khi merge vào nhánh chính, GitHub Actions assume IAM role qua OIDC, build container image, tạo SBOM, ký bằng Cosign và đẩy lên Amazon ECR để EKS pull phiên bản đã xác thực.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">OIDC</span><span class="deploy-step__tag">GitHub Actions</span><span class="deploy-step__tag">SBOM</span><span class="deploy-step__tag">Cosign</span><span class="deploy-step__tag">ECR</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">4</span>
<div>
<h5 class="deploy-step__title">Cập nhật manifest trong GitOps repository</h5>
<p class="deploy-step__text">Pipeline tự động cập nhật image tag hoặc manifest triển khai trong GitOps repo — nguồn sự thật (source of truth) cho trạng thái mong muốn trên cluster.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">GitOps repo</span><span class="deploy-step__tag">Kustomize/Helm</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--deploy">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">03</span> Đồng bộ & triển khai lên EKS</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">5</span>
<div>
<h5 class="deploy-step__title">Argo CD đồng bộ thay đổi vào cluster</h5>
<p class="deploy-step__text">Argo CD theo dõi GitOps repository và reconcile workload trên EKS theo trạng thái đã khai báo, đảm bảo cluster khớp với manifest đã được phê duyệt.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Argo CD</span><span class="deploy-step__tag">EKS</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">6</span>
<div>
<h5 class="deploy-step__title">Progressive delivery với Argo Rollouts</h5>
<p class="deploy-step__text">Thay vì thay thế toàn bộ phiên bản ngay lập tức, Argo Rollouts triển khai canary hoặc blue-green để giảm rủi ro khi đưa bản mới vào production.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Canary</span><span class="deploy-step__tag">Blue-Green</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--observe">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">04</span> Quan sát, SLO & rollback</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">7</span>
<div>
<h5 class="deploy-step__title">Theo dõi metrics, tracing, log và SLO</h5>
<p class="deploy-step__text">Trong suốt quá trình rollout, hệ thống thu thập metrics, distributed tracing, log và đối chiếu SLO/SLI để phát hiện suy giảm chất lượng dịch vụ sớm.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">CloudWatch</span><span class="deploy-step__tag">X-Ray</span><span class="deploy-step__tag">SLO/SLI</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">8</span>
<div>
<h5 class="deploy-step__title">Rollback khi phát hiện lỗi</h5>
<p class="deploy-step__text">Nếu error rate, latency hoặc health check vượt ngưỡng, pipeline rollout có thể tự động hoặc thủ công quay về phiên bản ổn định trước đó.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Auto rollback</span><span class="deploy-step__tag">Stable release</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--cost">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">05</span> Quản trị chi phí sau triển khai</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">9</span>
<div>
<h5 class="deploy-step__title">Cost monitoring & budget alert</h5>
<p class="deploy-step__text">Sau khi release hoàn tất, AWS Budgets, Infracost và ECR lifecycle policy tiếp tục theo dõi biến động chi phí hạ tầng và cảnh báo khi vượt ngưỡng đã đặt.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">AWS Budgets</span><span class="deploy-step__tag">Infracost</span><span class="deploy-step__tag">ECR lifecycle</span></div>
</div>
</article>

</div>
</section>

</div>

{{% notice info %}}
Luồng triển khai trên thể hiện ba nguyên tắc cốt lõi: **shift-left security** (kiểm tra bảo mật và chi phí ngay tại PR), **immutable artifact** (image đã ký, lưu trên ECR) và **progressive delivery** (rollout có kiểm soát, hỗ trợ rollback). Các nguyên tắc này phù hợp với kiến trúc mục tiêu tại [mục 2.3.1](../2.3.1-target-architecture/) và được triển khai theo từng giai đoạn tại [mục 2.4](../../2.4-implementation-plan/).
{{% /notice %}}

</div>
