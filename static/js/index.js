(() => {
  "use strict";

  // A navigation link or shared fragment also opens the requested reference.
  const openLinkedDisclosure = hash => {
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    let disclosure = document.getElementById(id)?.closest("details");
    while (disclosure) {
      disclosure.open = true;
      disclosure = disclosure.parentElement?.closest("details");
    }
  };
  openLinkedDisclosure(window.location.hash);
  window.addEventListener("hashchange", () => openLinkedDisclosure(window.location.hash));
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => openLinkedDisclosure(link.hash));
  });

  const setupReveals = () => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches || !("IntersectionObserver" in window)) return;

    const intro = [...document.querySelectorAll(
      ".project-name, .paper-title, .publication-authors, .publication-venue, .publication-links"
    )];
    const sections = [...document.querySelectorAll("main > section:not(.publication-header) > .container")];
    const targets = [...intro, ...sections];
    const reveal = (target, instant = false) => {
      if (instant) target.classList.add("reveal-instant");
      target.classList.add("is-revealed");
      observer.unobserve(target);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -7% 0px" });

    intro.forEach((target, index) => target.style.setProperty("--reveal-delay", `${index * 70}ms`));
    sections[0]?.style.setProperty("--reveal-delay", "210ms");
    targets.forEach(target => {
      target.classList.add("reveal-on-scroll");
      observer.observe(target);
    });
    document.documentElement.classList.add("motion-ready");

    // Keyboard focus and deep links should never wait for a scroll animation.
    document.addEventListener("focusin", event => {
      const target = event.target.closest(".reveal-on-scroll");
      if (target) reveal(target, true);
    });
    const revealAnchor = () => {
      let id;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const anchor = document.getElementById(id);
      if (!anchor) return;
      targets.filter(target => anchor.contains(target) || target.contains(anchor))
        .forEach(target => reveal(target, true));
    };
    window.addEventListener("hashchange", revealAnchor);
    revealAnchor();

    // Also respect a motion preference changed while this page is open.
    motionPreference.addEventListener("change", event => {
      if (!event.matches) return;
      observer.disconnect();
      targets.forEach(target => reveal(target, true));
      document.documentElement.classList.remove("motion-ready");
    });
  };
  setupReveals();

  const config = window.VOLUMEPROBE_CONFIG || {};
  for (const key of ["paper", "arxiv", "code"]) {
    const link = document.getElementById(`${key}-link`);
    const href = (config.links?.[key] || "").trim();
    if (!link || !href) continue;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.classList.remove("unavailable");
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
    link.removeAttribute("title");
  }

  for (const slot of document.querySelectorAll("[data-image]")) {
    const source = config.images?.[slot.dataset.image];
    if (!source) continue;
    const img = new Image();
    img.alt = slot.dataset.alt || "";
    img.loading = slot.dataset.image === "teaser" ? "eager" : "lazy";
    img.decoding = "async";
    img.addEventListener("load", () => {
      slot.querySelector(".media-placeholder")?.remove();
      slot.classList.add("has-media");
    }, { once: true });
    img.addEventListener("error", () => {
      img.remove();
      slot.classList.add("load-error");
    }, { once: true });
    slot.append(img);
    img.src = source;
  }

  for (const slot of document.querySelectorAll("[data-video]")) {
    const source = config.videos?.[slot.dataset.video];
    if (!source) continue;
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", slot.dataset.alt || "Method animation");
    const poster = config.videos?.[`${slot.dataset.video}Poster`];
    if (poster) video.poster = poster;
    video.addEventListener("loadedmetadata", () => {
      slot.querySelector(".media-placeholder")?.remove();
      slot.classList.add("has-media");
    }, { once: true });
    video.addEventListener("error", () => {
      video.remove();
      slot.classList.add("load-error");
    }, { once: true });
    slot.append(video);
    video.src = source;
  }

  const bibtex = (config.bibtex || "").trim();
  const bibtexCode = document.getElementById("bibtex-code");
  bibtexCode.textContent = bibtex;
  const copy = document.getElementById("copy-bibtex");
  const copyIcon = copy.querySelector("[data-copy-icon]");
  const copyStatus = document.getElementById("bibtex-copy-status");
  copy.disabled = !bibtex;
  copy.title = bibtex ? "Copy citation to clipboard" : "BibTeX is not available yet.";
  if (!bibtex) copyStatus.textContent = "BibTeX is not available yet.";
  if (bibtex) {
    let copyResetTimer;
    copy.addEventListener("click", async () => {
      clearTimeout(copyResetTimer);
      try {
        await navigator.clipboard.writeText(bibtex);
        copyIcon.className = "fas fa-check";
        copy.classList.add("is-copied");
        copy.setAttribute("aria-label", "BibTeX copied");
        copy.title = "Copied!";
        copyStatus.textContent = "BibTeX copied to clipboard.";
      } catch {
        const range = document.createRange();
        range.selectNodeContents(document.getElementById("bibtex-code"));
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        copyIcon.className = "fas fa-i-cursor";
        copy.classList.remove("is-copied");
        copy.setAttribute("aria-label", "BibTeX selected");
        copy.title = "Selected. Press Control+C or Command+C to copy.";
        copyStatus.textContent = "BibTeX selected. Press Control+C or Command+C to copy.";
      }
      copyResetTimer = setTimeout(() => {
        copyIcon.className = "fas fa-copy";
        copy.classList.remove("is-copied");
        copy.setAttribute("aria-label", "Copy BibTeX");
        copy.title = "Copy citation to clipboard";
      }, 2000);
    });
  }

  const backToTop = document.querySelector(".back-to-top");
  const syncBackToTop = () => backToTop.classList.toggle("is-inactive", window.scrollY <= 700);
  window.addEventListener("scroll", syncBackToTop, { passive: true });
  syncBackToTop();

  if ("IntersectionObserver" in window) {
    const navLinks = [...document.querySelectorAll(".nav-links a")];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }
})();
