(() => {
  "use strict";

  const root = document.getElementById("method-walkthrough");
  if (!root) return;
  const player = root.querySelector("[data-method-player]");
  const video = root.querySelector("video");
  const source = video.querySelector("source");
  const config = window.VOLUMEPROBE_CONFIG?.videos || {};
  const mediaURL = config.method || source?.getAttribute("src") || video.getAttribute("src");
  const controls = root.querySelector("[data-method-controls]");
  const toggle = root.querySelector("[data-method-toggle]");
  const replay = root.querySelector("[data-method-replay]");
  const start = root.querySelector("[data-method-start]");
  const fullscreen = root.querySelector("[data-method-fullscreen]");
  const progress = root.querySelector("#method-progress");
  const time = root.querySelector("[data-method-time]");
  const message = root.querySelector("[data-method-message]");
  const error = root.querySelector("[data-method-error]");
  const retry = root.querySelector("[data-method-retry]");
  const direct = root.querySelector("[data-method-direct]");
  const chapters = [...root.querySelectorAll("[data-method-chapter]")];
  const details = [...root.querySelectorAll("[data-method-detail]")];
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let ready = false;
  let visible = false;
  let visibleForAutoplay = false;
  let attemptedAutoplay = false;
  let automaticallyPaused = false;
  let userPaused = false;
  let pendingPlay = false;
  let requestId = 0;
  let failed = false;
  let retryTimer = 0;
  let retryCount = 0;
  let resumeTime = 0;
  let playAfterRecovery = false;

  const seconds = () => Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 52;
  const stamp = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, "0")}`;
  const showMessage = text => {
    message.textContent = text;
    message.hidden = !text;
  };
  const syncTime = () => {
    if (failed) return;
    const duration = seconds();
    const current = Math.min(video.currentTime || 0, duration);
    progress.max = duration;
    progress.value = current;
    progress.style.setProperty("--method-progress", `${100 * current / duration}%`);
    progress.setAttribute("aria-valuetext", `${stamp(current)} of ${stamp(duration)}`);
    time.textContent = `${stamp(current)} / ${stamp(duration)}`;
    let chapter = 0;
    chapters.forEach((button, index) => {
      if (current >= Number(button.dataset.methodChapter)) chapter = index;
    });
    chapters.forEach((button, index) => {
      if (index === chapter) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
    details.forEach((detail, index) => { detail.hidden = index !== chapter; });
  };
  const syncPlayback = () => {
    const playing = !video.paused && !video.ended;
    toggle.setAttribute("aria-label", playing ? "Pause animation" : video.ended ? "Replay animation" : "Play animation");
    toggle.querySelector("[data-method-play-icon]").toggleAttribute("hidden", playing);
    toggle.querySelector("[data-method-pause-icon]").toggleAttribute("hidden", !playing);
    if (playing) start.hidden = true;
  };
  const pauseAutomatically = () => {
    if (video.paused && !pendingPlay) return;
    automaticallyPaused = true;
    pendingPlay = false;
    requestId += 1;
    video.pause();
    syncPlayback();
  };
  const play = async (manual = false) => {
    if (!ready || failed) return;
    const id = ++requestId;
    if (manual) {
      userPaused = false;
      attemptedAutoplay = true;
    }
    automaticallyPaused = false;
    pendingPlay = true;
    showMessage("");
    if (video.ended) video.currentTime = 0;
    try {
      await video.play();
      if (id !== requestId) return;
      pendingPlay = false;
      if (document.hidden || !visible) pauseAutomatically();
    } catch (failure) {
      if (id !== requestId) return;
      pendingPlay = false;
      // A scroll/visibility pause can interrupt an in-flight play request.
      if (failure.name !== "AbortError") {
        start.hidden = false;
        showMessage(manual ? "Playback could not start. Press play to try again." : "Press play to begin the walkthrough.");
      }
    }
    syncPlayback();
  };
  const considerAutoplay = () => {
    if (!ready || failed || !visibleForAutoplay || document.hidden || motion.matches || userPaused || video.ended) return;
    if (automaticallyPaused || !attemptedAutoplay) {
      attemptedAutoplay = true;
      play();
    }
  };
  const prepare = () => {
    if (video.error || video.readyState < 1 || (ready && !failed)) return;
    window.clearTimeout(retryTimer);
    retryTimer = 0;
    failed = false;
    ready = true;
    error.hidden = true;
    showMessage("");
    video.controls = false;
    video.tabIndex = -1;
    controls.hidden = false;
    chapters.forEach(button => { button.disabled = false; });
    if (motion.matches || !("IntersectionObserver" in window)) start.hidden = false;
    if (resumeTime > 0) {
      video.currentTime = Math.min(resumeTime, seconds());
      resumeTime = 0;
    }
    syncTime();
    syncPlayback();
    if (playAfterRecovery) {
      playAfterRecovery = false;
      play(true);
    } else considerAutoplay();
  };
  const reloadMedia = (manual = false) => {
    window.clearTimeout(retryTimer);
    retryTimer = 0;
    retryCount += 1;
    requestId += 1;
    ready = false;
    failed = false;
    pendingPlay = false;
    automaticallyPaused = false;
    attemptedAutoplay = false;
    playAfterRecovery = manual;
    if (manual) userPaused = false;
    error.hidden = true;
    controls.hidden = true;
    start.hidden = true;
    showMessage("Reloading the animation…");
    // Retry this asset with a fresh cache key after a transient source failure.
    const url = new URL(mediaURL, document.baseURI);
    url.searchParams.set("vp_retry", String(Date.now()));
    if (source) source.src = url.href;
    else video.src = url.href;
    if (direct) direct.href = url.href;
    video.load();
  };
  const handleError = () => {
    // A superseded <source> request can fail after the current video is ready.
    if (failed || (!video.error && video.readyState >= 1)) return;
    failed = true;
    ready = false;
    resumeTime = Math.max(resumeTime, video.currentTime || 0);
    requestId += 1;
    pendingPlay = false;
    automaticallyPaused = false;
    controls.hidden = true;
    start.hidden = true;
    video.controls = false;
    showMessage("");
    error.hidden = false;
    // Keep the poster and readable chapter descriptions available if media fails.
    details.forEach(detail => { detail.hidden = false; });
    chapters.forEach(button => {
      button.disabled = true;
      button.removeAttribute("aria-current");
    });
    // One automatic retry; persistent failures retain an explicit recovery path.
    if (retryCount === 0) {
      error.hidden = true;
      showMessage("Retrying the animation…");
      retryTimer = window.setTimeout(() => reloadMedia(), 300);
    }
  };

  retry?.addEventListener("click", () => reloadMedia(true));
  if (direct && mediaURL) direct.href = mediaURL;

  toggle.addEventListener("click", () => {
    if (video.paused || video.ended) play(true);
    else {
      userPaused = true;
      automaticallyPaused = false;
      pendingPlay = false;
      requestId += 1;
      video.pause();
    }
  });
  start.addEventListener("click", () => play(true));
  replay.addEventListener("click", () => {
    video.currentTime = 0;
    syncTime();
    play(true);
  });
  chapters.forEach(button => button.addEventListener("click", () => {
    video.currentTime = Number(button.dataset.methodChapter);
    syncTime();
    // Chapter navigation seeks without overriding an explicit pause.
    if (!userPaused && !motion.matches) play(true);
  }));
  progress.addEventListener("input", () => {
    video.currentTime = Number(progress.value);
    syncTime();
  });
  video.addEventListener("loadedmetadata", prepare);
  video.addEventListener("canplay", prepare);
  video.addEventListener("durationchange", syncTime);
  video.addEventListener("timeupdate", syncTime);
  video.addEventListener("seeked", syncTime);
  video.addEventListener("play", syncPlayback);
  video.addEventListener("pause", syncPlayback);
  video.addEventListener("ended", () => {
    automaticallyPaused = false;
    pendingPlay = false;
    syncTime();
    syncPlayback();
  });
  video.addEventListener("error", handleError);
  source?.addEventListener("error", handleError);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[entries.length - 1];
      // Start with both comparison rows in view; keep playing while the reader
      // scrolls slightly. Separate thresholds avoid rapid pause/resume changes.
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
      visibleForAutoplay = entry.isIntersecting && entry.intersectionRatio >= 0.55;
      if (!visible) pauseAutomatically();
      else if (visibleForAutoplay) considerAutoplay();
    }, { threshold: [0.15, 0.55] });
    observer.observe(video);
  } else {
    // Older browsers keep a manual player with the same controls.
    visible = true;
    attemptedAutoplay = true;
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseAutomatically();
    else considerAutoplay();
  });
  motion.addEventListener("change", event => {
    if (event.matches) {
      pauseAutomatically();
      automaticallyPaused = false;
      attemptedAutoplay = true;
      if (ready && !failed && !video.ended) start.hidden = false;
    }
  });

  if (player.requestFullscreen || video.webkitEnterFullscreen) {
    fullscreen.hidden = false;
    fullscreen.addEventListener("click", async () => {
      try {
        if (document.fullscreenElement === player) await document.exitFullscreen();
        else if (player.requestFullscreen) await player.requestFullscreen();
        else video.webkitEnterFullscreen();
      } catch {
        showMessage("Fullscreen is unavailable in this browser. You can keep watching here.");
      }
    });
    document.addEventListener("fullscreenchange", () => {
      fullscreen.setAttribute("aria-label", document.fullscreenElement === player ? "Exit fullscreen" : "Enter fullscreen");
    });
  }

  if (config.methodPoster) video.poster = config.methodPoster;
  if (config.method && source && source.getAttribute("src") !== config.method) {
    source.src = config.method;
    video.load();
  }
  // A cached source error can occur before this deferred script attaches listeners.
  if (video.error) handleError();
  else if (video.readyState >= 1) prepare();
  else window.setTimeout(() => {
    if (!ready && video.networkState === video.NETWORK_NO_SOURCE) handleError();
  }, 0);
})();
