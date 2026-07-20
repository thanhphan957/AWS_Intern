---
title: "Deployment Flow After Expansion"
date: 2026-07-04
weight: 2
chapter: false
pre: " <b> 2.3.2 </b> "
---

<div class="deploy-flow">

<p class="deploy-flow-lead">
After architecture expansion per the target direction (section 2.3.1), releases follow a <strong>GitOps + progressive delivery</strong> model. Specifically: source code and infrastructure are validated early in pull requests; container images are built, SBOMs are generated, signed with Cosign, and pushed to Amazon ECR; deployment manifests are updated in the GitOps repository; Argo CD syncs the desired state to EKS; Argo Rollouts performs canary or blue-green deployment. Throughout the release lifecycle, metrics, traces, logs, SLO/SLI, and cost alerts are monitored continuously to support rollback when needed.
</p>

<div class="deploy-flow-pipeline">
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fas fa-code-branch"></i></span>
    <span class="deploy-flow-pipeline__label">Develop & PR</span>
  </div>
  <div class="deploy-flow-pipeline__item">
    <span class="deploy-flow-pipeline__icon"><i class="fas fa-shield-alt"></i></span>
    <span class="deploy-flow-pipeline__label">CI & security</span>
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
    <span class="deploy-flow-pipeline__label">Observe & cost</span>
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
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">01</span> Develop & early validation</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">1</span>
<div>
<h5 class="deploy-step__title">Change code in the source repository</h5>
<p class="deploy-step__text">Developers update application code or infrastructure manifests (Terraform/Kustomize) in the source repo, preparing changes for review and automated checks.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">GitHub</span><span class="deploy-step__tag">Source repo</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">2</span>
<div>
<h5 class="deploy-step__title">Pull request quality gates</h5>
<p class="deploy-step__text">Each pull request triggers source checks, Snyk security scans, Terraform validation, and Infracost estimates before merge.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Snyk</span><span class="deploy-step__tag">Terraform</span><span class="deploy-step__tag">Infracost</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--build">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">02</span> Build, sign & update GitOps</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">3</span>
<div>
<h5 class="deploy-step__title">Secure image build after merge</h5>
<p class="deploy-step__text">After merge to main, GitHub Actions assumes an IAM role via OIDC, builds the container image, generates an SBOM, signs it with Cosign, and pushes it to Amazon ECR for verified pulls on EKS.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">OIDC</span><span class="deploy-step__tag">GitHub Actions</span><span class="deploy-step__tag">SBOM</span><span class="deploy-step__tag">Cosign</span><span class="deploy-step__tag">ECR</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">4</span>
<div>
<h5 class="deploy-step__title">Update manifests in the GitOps repository</h5>
<p class="deploy-step__text">The pipeline updates image tags or deployment manifests in the GitOps repo—the source of truth for the desired cluster state.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">GitOps repo</span><span class="deploy-step__tag">Kustomize/Helm</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--deploy">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">03</span> Sync & deploy to EKS</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">5</span>
<div>
<h5 class="deploy-step__title">Argo CD syncs changes into the cluster</h5>
<p class="deploy-step__text">Argo CD watches the GitOps repository and reconciles workloads on EKS to match approved manifests.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Argo CD</span><span class="deploy-step__tag">EKS</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">6</span>
<div>
<h5 class="deploy-step__title">Progressive delivery with Argo Rollouts</h5>
<p class="deploy-step__text">Instead of replacing the full version immediately, Argo Rollouts performs canary or blue-green deployment to reduce production risk.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Canary</span><span class="deploy-step__tag">Blue-Green</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--observe">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">04</span> Observe, SLO & rollback</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">7</span>
<div>
<h5 class="deploy-step__title">Monitor metrics, tracing, logs, and SLOs</h5>
<p class="deploy-step__text">Throughout rollout, the system collects metrics, distributed traces, logs, and compares SLO/SLI signals to detect degradation early.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">CloudWatch</span><span class="deploy-step__tag">X-Ray</span><span class="deploy-step__tag">SLO/SLI</span></div>
</div>
</article>

<article class="deploy-step">
<span class="deploy-step__num">8</span>
<div>
<h5 class="deploy-step__title">Rollback when issues are detected</h5>
<p class="deploy-step__text">If error rate, latency, or health checks exceed thresholds, rollout can automatically or manually return to the previous stable version.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">Auto rollback</span><span class="deploy-step__tag">Stable release</span></div>
</div>
</article>

</div>
</section>

<section class="deploy-phase deploy-phase--cost">
<h4 class="deploy-phase__header"><span class="deploy-phase__badge">05</span> Post-release cost governance</h4>
<div class="deploy-phase__body">

<article class="deploy-step">
<span class="deploy-step__num">9</span>
<div>
<h5 class="deploy-step__title">Cost monitoring & budget alerts</h5>
<p class="deploy-step__text">After release completes, AWS Budgets, Infracost, and ECR lifecycle policies continue tracking infrastructure spend and alerting when thresholds are exceeded.</p>
<div class="deploy-step__tags"><span class="deploy-step__tag">AWS Budgets</span><span class="deploy-step__tag">Infracost</span><span class="deploy-step__tag">ECR lifecycle</span></div>
</div>
</article>

</div>
</section>

</div>

{{% notice info %}}
This flow reflects three core principles: **shift-left security** (security and cost checks at PR), **immutable artifacts** (signed images stored in ECR), and **progressive delivery** (controlled rollout with rollback support). These principles align with the target architecture in [section 2.3.1](../2.3.1-target-architecture/) and are delivered by phase in [section 2.4](../../2.4-implementation-plan/).
{{% /notice %}}

</div>
