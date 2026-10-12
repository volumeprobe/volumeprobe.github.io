/* Selected paired comparisons from the same camera-ready data as the full tables. */
(function () {
  'use strict';

  const host = document.getElementById('performance-bars');
  const data = window.VOLUMEPROBE_RESULTS;
  if (!host || !data || !Array.isArray(data.tasks)) return;

  const selections = [
    { task: 'segmentation', dataset: 'word', metric: '1pct', baseline: 'voco', detail: 'Dice · 1% data', tone: 'green' },
    { task: 'classification', dataset: 'cc-ccii', metric: 'accuracy', baseline: 's2dc', detail: 'Accuracy', tone: 'blue' },
    { task: 'registration', dataset: 'ixi', metric: 'dice', baseline: 'medgmae', detail: 'Dice', tone: 'purple' }
  ];

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  const charts = selections.map((selection) => {
    const task = data.tasks.find((item) => item.id === selection.task);
    const dataset = task?.datasets.find((item) => item.id === selection.dataset);
    const baseline = dataset?.rows.find((row) => row.id === selection.baseline);
    const lite = dataset?.rows.find((row) => row.id === selection.baseline + '-volumeprobe-lite');
    if (!baseline || !lite) return null;
    const values = [lite, baseline].map((row) => row.values[selection.metric]);
    if (values.some((value) => value === null || value === undefined || !Number.isFinite(Number(value)) || Number(value) < 0 || Number(value) > 100)) return null;
    return { ...selection, task, dataset, baseline, lite };
  });
  // Leave the existing tables available if the data schema changes.
  if (charts.some((chart) => !chart)) return;

  host.className = 'vp-performance';
  host.setAttribute('role', 'region');
  host.setAttribute('aria-labelledby', 'vp-performance-title');
  const header = element('div', 'vp-performance-header');
  const heading = element('h3', '', 'Key performance');
  heading.id = 'vp-performance-title';
  header.append(heading);
  const grid = element('div', 'vp-performance-grid');
  const buttons = [];

  charts.forEach((chart) => {
    const card = element('article', 'vp-performance-chart vp-performance-' + chart.tone);
    card.dataset.dataset = chart.dataset.id;
    const title = element('h4', 'vp-performance-dataset', chart.dataset.label);
    title.id = 'vp-performance-' + chart.dataset.id;
    card.setAttribute('aria-labelledby', title.id);
    card.append(element('p', 'vp-performance-task', chart.task.label), title,
      element('p', 'vp-performance-metric', chart.detail));

    [chart.lite, chart.baseline].forEach((row) => {
      const value = row.values[chart.metric];
      const isLite = row.variant === 'lite';
      const button = element('button', 'vp-performance-bar' + (isLite ? ' is-lite' : ''));
      button.type = 'button';
      button.dataset.method = row.id;
      button.dataset.metric = chart.metric;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', row.method + ', ' + chart.dataset.label + ', ' + chart.detail + ', ' + value + ' percent. Highlight comparison.');
      const label = element('span', 'vp-performance-label');
      const method = element('span', 'vp-performance-method');
      method.append(element('span', 'vp-performance-backbone', row.baseMethod || row.method));
      if (isLite) method.append(element('span', 'vp-performance-addition', '+ VolumeProbe-Lite'));
      label.append(method, element('span', 'vp-performance-value', value));
      const track = element('span', 'vp-performance-track');
      track.setAttribute('aria-hidden', 'true');
      const fill = element('span', 'vp-performance-fill');
      fill.style.width = value + '%';
      track.append(fill);
      button.append(label, track);
      card.append(button);
      buttons.push(button);
    });

    const gain = (Number(chart.lite.values[chart.metric]) - Number(chart.baseline.values[chart.metric])).toFixed(2);
    const footer = element('p', 'vp-performance-gain');
    footer.append(element('strong', '', '+' + gain), document.createTextNode(' points'));
    footer.setAttribute('aria-label', gain + ' percentage-point improvement over ' + chart.baseline.method);
    card.append(footer);
    grid.append(card);
  });

  host.replaceChildren(header, grid);
  host.hidden = false;

  let hovered = null;
  let focused = null;
  let selected = null;
  function update() {
    const active = hovered || focused || selected;
    host.classList.toggle('is-exploring', Boolean(active));
    buttons.forEach((button) => {
      button.classList.toggle('is-active', button === active);
      button.setAttribute('aria-pressed', String(button === selected));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'touch') return;
      hovered = button;
      update();
    });
    button.addEventListener('pointerleave', () => {
      if (hovered === button) hovered = null;
      update();
    });
    button.addEventListener('focus', () => {
      if (button.matches(':focus-visible')) {
        hovered = null;
        focused = button;
      }
      update();
    });
    button.addEventListener('blur', () => {
      if (focused === button) focused = null;
      update();
    });
    button.addEventListener('click', () => {
      selected = selected === button ? null : button;
      update();
    });
  });
  document.addEventListener('pointerdown', (event) => {
    if (event.target.closest('#performance-bars .vp-performance-bar')) return;
    hovered = focused = selected = null;
    update();
  });
  host.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    hovered = focused = selected = null;
    update();
  });
}());
