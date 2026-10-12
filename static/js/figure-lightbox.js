(() => {
  "use strict";

  const dialog = document.getElementById("figure-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const media = dialog.querySelector(".figure-lightbox-media");
  const caption = dialog.querySelector(".figure-lightbox-caption");
  const content = dialog.querySelector(".figure-lightbox-content");
  const closeButton = dialog.querySelector(".figure-lightbox-close");
  let lastTrigger = null;

  const openFigure = (image, trigger) => {
    if (dialog.open) return;
    const enlarged = new Image();
    enlarged.alt = image.alt;
    enlarged.width = image.naturalWidth;
    enlarged.height = image.naturalHeight;
    enlarged.src = image.currentSrc || image.src;
    media.replaceChildren(enlarged);

    const originalCaption = image.closest("figure")?.querySelector("figcaption");
    if (originalCaption) {
      caption.replaceChildren(...[...originalCaption.childNodes].map(node => node.cloneNode(true)));
    } else {
      caption.textContent = image.alt;
    }
    caption.hidden = !caption.textContent.trim();
    lastTrigger = trigger;
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--figure-scrollbar-gap", `${scrollbarGap}px`);
    document.documentElement.classList.add("figure-lightbox-open");
    dialog.showModal();
    dialog.scrollTop = 0;
    closeButton.focus({ preventScroll: true });
  };

  const enhanceImage = image => {
    if (!image.matches("main .paper-figure img") || !image.complete || !image.naturalWidth) return;
    if (image.closest("button, a, .analysis-interactive")) return;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "figure-zoom";
    trigger.setAttribute("aria-label", `Enlarge ${image.alt || "figure"}`);
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-controls", dialog.id);
    image.replaceWith(trigger);
    trigger.append(image);
    trigger.addEventListener("click", () => openFigure(image, trigger));
  };

  // Capture lazy-loaded/configured figures, including images added in future updates.
  document.addEventListener("load", event => {
    if (event.target instanceof HTMLImageElement) enhanceImage(event.target);
  }, true);
  document.querySelectorAll("main .paper-figure img").forEach(enhanceImage);

  closeButton.addEventListener("click", () => dialog.close());
  let startedOnBackdrop = false;
  const isBackdrop = target => target === dialog || target === content;
  dialog.addEventListener("pointerdown", event => {
    startedOnBackdrop = isBackdrop(event.target);
  });
  dialog.addEventListener("click", event => {
    if (startedOnBackdrop && isBackdrop(event.target)) dialog.close();
  });
  // Keep keyboard navigation inside the figure while the native dialog makes the page inert.
  dialog.addEventListener("keydown", event => {
    if (event.key !== "Tab") return;
    const focusable = [...dialog.querySelectorAll("button:not(:disabled), a[href], [tabindex='0']")]
      .filter(element => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if ((!event.shiftKey && document.activeElement === last) ||
        (event.shiftKey && document.activeElement === first)) {
      event.preventDefault();
      (event.shiftKey ? last : first)?.focus();
    }
  });
  // Native Escape handling also reaches this cleanup path.
  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("figure-lightbox-open");
    document.documentElement.style.removeProperty("--figure-scrollbar-gap");
    media.replaceChildren();
    caption.replaceChildren();
    lastTrigger?.focus({ preventScroll: true });
    lastTrigger = null;
  });
})();
