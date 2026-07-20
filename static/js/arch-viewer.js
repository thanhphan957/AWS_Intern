(function () {
  function centerStage(stage) {
    stage.scrollLeft = Math.max(0, (stage.scrollWidth - stage.clientWidth) / 2);
    stage.scrollTop = Math.max(0, (stage.scrollHeight - stage.clientHeight) / 2);
  }

  function initArchitectureViewer(viewer) {
    const stage = viewer.querySelector(".arch-viewer__stage");
    const toggle = viewer.querySelector(".arch-viewer__toggle");
    if (!stage || !toggle) return;

    const zoomInLabel = viewer.dataset.zoomIn || "Zoom In";
    const zoomOutLabel = viewer.dataset.zoomOut || "Zoom Out";
    let zoomed = false;
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let startScrollTop = 0;
    let pendingFrame = 0;
    let pendingLeft = 0;
    let pendingTop = 0;

    function setZoom(nextZoomed) {
      zoomed = nextZoomed;
      viewer.classList.toggle("is-zoomed", zoomed);
      stage.classList.toggle("is-zoomed", zoomed);
      toggle.setAttribute("aria-pressed", zoomed ? "true" : "false");
      toggle.textContent = zoomed ? zoomOutLabel : zoomInLabel;

      if (zoomed) {
        requestAnimationFrame(() => centerStage(stage));
      } else {
        stage.scrollLeft = 0;
        stage.scrollTop = 0;
      }
    }

    function scheduleScroll(left, top) {
      pendingLeft = left;
      pendingTop = top;
      if (pendingFrame) return;

      pendingFrame = requestAnimationFrame(() => {
        stage.scrollLeft = pendingLeft;
        stage.scrollTop = pendingTop;
        pendingFrame = 0;
      });
    }

    toggle.addEventListener("click", () => setZoom(!zoomed));

    stage.addEventListener("pointerdown", (event) => {
      if (!zoomed || event.button > 0) return;
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      startScrollLeft = stage.scrollLeft;
      startScrollTop = stage.scrollTop;
      stage.classList.add("is-dragging");
      stage.setPointerCapture(event.pointerId);
      event.preventDefault();
    });

    stage.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      scheduleScroll(
        startScrollLeft - (event.clientX - startX),
        startScrollTop - (event.clientY - startY),
      );
      event.preventDefault();
    });

    function stopDragging(event) {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove("is-dragging");
      if (event && stage.hasPointerCapture(event.pointerId)) {
        stage.releasePointerCapture(event.pointerId);
      }
    }

    stage.addEventListener("pointerup", stopDragging);
    stage.addEventListener("pointercancel", stopDragging);
    stage.addEventListener("lostpointercapture", stopDragging);

    stage.addEventListener(
      "wheel",
      (event) => {
        if (!zoomed) return;
        stage.scrollLeft += event.deltaX || event.deltaY;
        stage.scrollTop += event.deltaX ? event.deltaY : 0;
        event.preventDefault();
      },
      { passive: false },
    );

    stage.addEventListener("keydown", (event) => {
      if (!zoomed) return;
      const step = event.shiftKey ? 180 : 70;
      if (event.key === "ArrowLeft") stage.scrollLeft -= step;
      else if (event.key === "ArrowRight") stage.scrollLeft += step;
      else if (event.key === "ArrowUp") stage.scrollTop -= step;
      else if (event.key === "ArrowDown") stage.scrollTop += step;
      else return;
      event.preventDefault();
    });

    window.addEventListener("resize", () => {
      if (zoomed) centerStage(stage);
    });

    setZoom(false);
  }

  function initAll() {
    document.querySelectorAll("[data-arch-viewer]").forEach(initArchitectureViewer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
