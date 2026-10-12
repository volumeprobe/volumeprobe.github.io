/* Hover geometry selects pixels from the supplied PNGs; it is not chart data. */
(() => {
  'use strict';
  const manifest = window.VOLUMEPROBE_ANALYSIS;
  if (!manifest) return;
  const NS = 'http://www.w3.org/2000/svg';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let serial = 0;
  const svg = (tag, attrs = {}) => {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };
  const html = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  };
  const box = ([x, y, width, height], attrs = {}) => svg('rect', { x, y, width, height, ...attrs });
  const path = points => points.map(([x, y], i) => `${i ? 'L' : 'M'}${x},${y}`).join(' ');
  const button = (text, handler) => {
    const node = html('button', 'analysis-action', text);
    node.type = 'button';
    node.addEventListener('click', handler);
    return node;
  };
  const dialog = html('dialog', 'analysis-explorer');
  dialog.setAttribute('aria-label', 'Interactive analysis figure');
  document.body.append(dialog);
  let restoreFocus;
  let disposeModal;
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('analysis-explorer-open');
    disposeModal?.();
    dialog.replaceChildren();
    restoreFocus?.focus({ preventScroll: true });
  });
  let backdropDown = false;
  dialog.addEventListener('pointerdown', event => { backdropDown = event.target === dialog; });
  dialog.addEventListener('click', event => {
    if (backdropDown && event.target === dialog) dialog.close();
  });

  function build(meta, source, alt, expanded = false) {
    const uid = `analysis-${++serial}`;
    const root = html('div', 'analysis-interactive');
    root.dataset.figure = meta.figure;
    root.style.setProperty('--analysis-ratio', meta.width / meta.height);
    const toolbar = html('div', 'analysis-toolbar');
    const actions = html('div', 'analysis-actions');
    const original = html('a', 'analysis-action', 'Original ↗');
    original.href = source;
    original.target = '_blank';
    original.rel = 'noopener';
    original.setAttribute('aria-label', `Open original Figure ${meta.figure}`);
    actions.append(original);
    if (expanded) {
      const close = button('Close ×', () => dialog.close());
      close.setAttribute('aria-label', 'Close interactive figure');
      actions.append(close);
    } else {
      const expand = button('Expand ↗', () => {
        if (dialog.open) return;
        restoreFocus = expand;
        const modal = build(meta, source, alt, true);
        disposeModal = modal.dispose;
        dialog.replaceChildren(modal.root);
        dialog.setAttribute('aria-label', `Explore Figure ${meta.figure}`);
        dialog.style.setProperty('--analysis-modal-width', meta.height > meta.width * .8 ? '770px' : '1250px');
        document.documentElement.classList.add('analysis-explorer-open');
        dialog.showModal();
        dialog.querySelector('[aria-label="Close interactive figure"]').focus();
      });
      expand.setAttribute('aria-label', `Expand interactive Figure ${meta.figure}`);
      actions.append(expand);
    }
    toolbar.append(actions);
    root.append(toolbar);
    const scroller = html('div', 'analysis-canvas-scroll');
    const stage = html('div', 'analysis-stage');
    const image = html('img');
    image.src = source;
    image.alt = alt;
    image.width = meta.width;
    image.height = meta.height;
    image.draggable = false;
    stage.append(image);
    const overlay = svg('svg', { viewBox: '0 0 1000 1000', preserveAspectRatio: 'none', class: 'analysis-overlay', role: 'group', 'aria-label': `Figure ${meta.figure} interactive regions. Arrow keys select a region; Enter pins it; Escape clears the selection.` });
    const defs = svg('defs');
    const shade = svg('g', { class: 'analysis-shade', 'aria-hidden': 'true' });
    const shadeRects = [...(meta.shadeRects || []), ...meta.regions.filter(region => region.rect).map(region => region.rect)];
    shadeRects.forEach(rect => shade.append(box(rect, { fill: '#fff' })));
    const hits = svg('g');
    const highlight = svg('g', { class: 'analysis-highlight', 'aria-hidden': 'true' });
    overlay.append(defs, shade, hits, highlight);
    stage.append(overlay);
    scroller.append(stage);
    root.append(scroller);

    const readout = html('div', 'analysis-readout');
    readout.id = `${uid}-readout`;
    readout.setAttribute('aria-live', 'polite');
    readout.setAttribute('aria-atomic', 'true');
    const title = html('strong', 'analysis-readout-title');
    const detail = html('p', 'analysis-readout-detail');
    readout.append(title, detail);
    root.append(readout);

    let hovered = null, focused = null, pinned = null, shown;
    const targets = [];
    const masks = new Map();
    meta.regions.forEach((region, index) => {
      const maskId = `${uid}-mask-${index}`;
      const mask = svg('mask', { id: maskId, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 1000, height: 1000, 'mask-type': 'alpha' });
      if (region.rect) mask.append(box(region.rect, { fill: '#fff' }));
      (region.paths || []).forEach(points => mask.append(svg('path', { d: path(points), fill: 'none', stroke: '#fff', 'stroke-width': region.maskWidth || 13, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })));
      defs.append(mask);
      masks.set(region.id, maskId);
      const hit = svg('g', { class: 'analysis-hit', role: 'button', tabindex: index === 0 ? '0' : '-1', 'aria-label': region.label, 'aria-pressed': 'false', 'data-region': region.id });
      if (region.rect) hit.append(box(region.rect));
      (region.hitRects || []).forEach(rect => hit.append(box(rect)));
      (region.paths || []).forEach(points => hit.append(svg('path', { d: path(points) })));
      hit.addEventListener('focus', () => { hovered = null; focused = region.id; render(); });
      hit.addEventListener('blur', () => { focused = null; render(); });
      hit.addEventListener('keydown', event => {
        if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
          event.preventDefault();
          const delta = ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1;
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? targets.length - 1 : (index + delta + targets.length) % targets.length;
          targets.forEach((target, i) => target.setAttribute('tabindex', i === next ? '0' : '-1'));
          targets[next].focus({ preventScroll: true });
          if (expanded) targets[next].scrollIntoView({ block: 'nearest', inline: 'nearest' });
        } else if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          pinned = pinned === region.id ? null : region.id;
          render();
        }
      });
      targets.push(hit);
      hits.append(hit);
    });

    function render() {
      const id = hovered || focused || pinned;
      const region = meta.regions.find(item => item.id === id);
      targets.forEach((target, index) => target.setAttribute('aria-pressed', String(meta.regions[index].id === pinned)));
      root.dataset.active = id || '';
      root.dataset.pinned = pinned || '';
      if (shown === id) return;
      shown = id;
      stage.classList.toggle('is-exploring', Boolean(region));
      highlight.replaceChildren();
      highlight.removeAttribute('transform');
      if (!region) {
        title.textContent = '';
        title.hidden = true;
        detail.textContent = meta.intro;
        return;
      }
      title.textContent = region.label;
      title.hidden = false;
      detail.textContent = region.detail;
      highlight.setAttribute('class', `analysis-highlight ${region.kind === 'line' ? 'is-line' : 'is-tile'}`);
      highlight.append(svg('image', { href: source, x: 0, y: 0, width: 1000, height: 1000, preserveAspectRatio: 'none', mask: `url(#${masks.get(region.id)})` }));
      if (region.rect) {
        const [x, y, w, h] = region.rect;
        highlight.append(box(region.rect, { fill: 'none', stroke: region.color || '#706bb2', 'stroke-width': 1.8, 'vector-effect': 'non-scaling-stroke' }));
        const scale = reduced.matches ? 1 : region.kind === 'cell' ? 1.16 : region.kind === 'tile' ? 1.18 : 1.04;
        const cx = x + w / 2, cy = y + h / 2;
        highlight.setAttribute('transform', `translate(${cx * (1 - scale)} ${cy * (1 - scale)}) scale(${scale})`);
      }
    }

    // Resolve the nearest line in screen pixels, so overlapping SVG hit paths
    // cannot steal a neighboring series simply because they appear later in DOM.
    function regionAt(event) {
      const bounds = stage.getBoundingClientRect();
      const px = event.clientX - bounds.left, py = event.clientY - bounds.top;
      const x = px / bounds.width * 1000, y = py / bounds.height * 1000;
      const contains = ([rx, ry, rw, rh]) => x >= rx && x <= rx + rw && y >= ry && y <= ry + rh;
      const rectangle = meta.regions.find(region => region.rect && contains(region.rect) || region.hitRects?.some(contains));
      if (rectangle) return rectangle.id;
      let distance = 11, nearest = null;
      meta.regions.forEach(region => (region.paths || []).forEach(points => {
        for (let i = 1; i < points.length; i++) {
          const ax = points[i - 1][0] / 1000 * bounds.width, ay = points[i - 1][1] / 1000 * bounds.height;
          const bx = points[i][0] / 1000 * bounds.width, by = points[i][1] / 1000 * bounds.height;
          const dx = bx - ax, dy = by - ay;
          const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1)));
          const d = Math.hypot(px - ax - t * dx, py - ay - t * dy);
          if (d < distance) { distance = d; nearest = region.id; }
        }
      }));
      return nearest;
    }
    stage.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch') return;
      hovered = regionAt(event);
      render();
    });
    stage.addEventListener('pointerleave', () => { hovered = null; render(); });
    stage.addEventListener('click', event => {
      // Pin the curve already under the pointer. MouseEvent coordinates can be
      // rounded to integers, unlike PointerEvent, near almost overlapping lines.
      const id = hovered || regionAt(event);
      pinned = pinned === id ? null : id;
      hovered = null;
      focused = null;
      shown = undefined;
      render();
    });
    function clear() { hovered = focused = pinned = null; shown = undefined; render(); }
    root.addEventListener('keydown', event => {
      if (event.key === 'Escape' && (hovered || focused || pinned)) {
        event.preventDefault();
        event.stopPropagation();
        clear();
      }
    });
    const motionChanged = () => { shown = undefined; render(); };
    reduced.addEventListener('change', motionChanged);
    // Initialize with the default caption even though there is no active region.
    shown = undefined;
    render();
    return { root, dispose: () => reduced.removeEventListener('change', motionChanged) };
  }

  for (const [key, meta] of Object.entries(manifest)) {
    const slot = document.querySelector(`[data-image="${key}"]`);
    const original = slot?.querySelector('img');
    if (!slot || !original) continue;
    const enhance = () => {
      if (slot.dataset.interactive || !original.naturalWidth) return;
      // If a replacement asset has another geometry, keep its static fallback.
      if (original.naturalWidth !== meta.width || original.naturalHeight !== meta.height) return;
      const component = build(meta, original.currentSrc || original.src, original.alt);
      slot.dataset.interactive = 'true';
      slot.replaceWith(component.root);
    };
    if (original.complete) enhance();
    else original.addEventListener('load', enhance, { once: true });
  }
})();
