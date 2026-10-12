(function () {
  'use strict';

  const host = document.getElementById('quantitative-results');
  const data = window.VOLUMEPROBE_RESULTS;
  if (!host || !data || !Array.isArray(data.tasks) || !data.tasks.length) return;

  const featuredMethods = new Set(['VoCo', 'VoCO', 'S2DC', 'MedGMAE']);
  const state = {
    task: data.tasks.find((task) => task.id === 'segmentation') || data.tasks[0],
    dataset: null,
    allMethods: false
  };
  state.dataset = state.task.datasets.find((dataset) => dataset.id.toLowerCase() === 'btcv') || state.task.datasets[0];

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function control(labelText, id) {
    const wrapper = element('div', 'vp-results-control');
    const label = element('label', '', labelText);
    label.htmlFor = id;
    const select = element('select');
    select.id = id;
    wrapper.append(label, select);
    return { wrapper, select };
  }

  function options(select, choices, selectedId) {
    select.replaceChildren(...choices.map((choice) => {
      const option = element('option', '', choice.label);
      option.value = choice.id;
      option.selected = choice.id === selectedId;
      return option;
    }));
  }

  host.classList.add('vp-results');
  const toolbar = element('div', 'vp-results-toolbar');
  const context = element('div', 'vp-results-context');
  const heading = element('h3', 'vp-results-heading');
  heading.id = 'vp-results-heading';
  const description = element('p', 'vp-results-description');
  context.append(heading, description);

  const controls = element('div', 'vp-results-controls');
  const taskControl = control('Task', 'vp-results-task');
  const datasetControl = control('Dataset', 'vp-results-dataset');
  const toggleWrapper = element('div', 'vp-results-control vp-results-toggle-control');
  const toggleLabel = element('span', 'vp-results-toggle-label', 'Methods');
  toggleLabel.id = 'vp-results-toggle-label';
  const toggle = element('button', 'vp-results-toggle');
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', 'vp-results-table');
  toggleWrapper.append(toggleLabel, toggle);
  controls.append(taskControl.wrapper, datasetControl.wrapper, toggleWrapper);
  toolbar.append(context, controls);

  const scroller = element('div', 'vp-results-scroll');
  scroller.tabIndex = 0;
  scroller.setAttribute('role', 'region');
  scroller.setAttribute('aria-labelledby', heading.id);
  const table = element('table', 'vp-results-table');
  table.id = 'vp-results-table';
  const caption = element('caption', 'vp-results-visually-hidden');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.append(caption, thead, tbody);
  scroller.append(table);

  const scrollHint = element('p', 'vp-results-scroll-hint', 'Swipe or scroll horizontally to view the full table.');
  const status = element('p', 'vp-results-visually-hidden');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  host.replaceChildren(toolbar, scroller, scrollHint, status);

  options(taskControl.select, data.tasks, state.task.id);

  function isFeatured(row) {
    return featuredMethods.has(row.baseMethod) && (row.variant === 'baseline' || row.variant === 'lite');
  }

  function metricDescription(metric) {
    const metricName = metric.metricName || metric.metric || state.dataset.metricName || state.dataset.metric || '';
    const unit = metric.unit || state.dataset.unit || '';
    const suffix = unit === '%' ? ' (%)' : unit ? ' (' + unit + ')' : '';
    return metricName + suffix;
  }

  function methodCell(row) {
    const cell = element('th', 'vp-results-method');
    cell.scope = 'row';
    // Each adapter keeps its backbone visible, including when rows are filtered.
    if ((row.variant === 'lite' || row.variant === 'feat') && row.baseMethod) {
      cell.append(element('span', 'vp-results-base', row.baseMethod));
      const addition = element('span', 'vp-results-addition');
      addition.append(document.createTextNode('+ VolumeProbe-'));
      addition.append(element('span', 'vp-results-variant', row.variant === 'lite' ? 'Lite' : 'Feat'));
      cell.append(addition);
    } else {
      cell.append(element('span', 'vp-results-base', row.method));
    }
    return cell;
  }

  function valueCell(row, metric) {
    const cell = element('td');
    const rawValue = row.values[metric.key];
    const value = rawValue === null || rawValue === undefined ? '—' : String(rawValue);
    const rank = row.ranks && row.ranks[metric.key];
    const score = element(rank === 1 ? 'strong' : 'span', rank === 2 ? 'vp-results-score vp-results-second' : 'vp-results-score', value);
    cell.append(score);
    const gain = row.gains && row.gains[metric.key];
    if (gain !== undefined && gain !== null && gain !== '') {
      const gainString = String(gain);
      const gainNode = element('span', 'vp-results-gain', '↑' + gainString);
      gainNode.setAttribute('aria-label', 'improvement of ' + gainString + ' percentage points over ' + row.baseMethod);
      cell.append(gainNode);
    }
    return cell;
  }

  function render(announce) {
    const dataset = state.dataset;
    const metrics = dataset.metrics;
    const rows = dataset.rows.filter((row) => state.allMethods || isFeatured(row));
    options(datasetControl.select, state.task.datasets, dataset.id);
    heading.textContent = dataset.label;
    const sourceTableValue = dataset.sourceTable || state.task.sourceTable || (state.task.id === 'registration' ? 2 : 1);
    const sourceTable = /^Table\s/i.test(String(sourceTableValue)) ? String(sourceTableValue) : 'Table ' + sourceTableValue;
    description.textContent = state.task.label;
    toggle.textContent = state.allMethods ? 'Show selected methods' : 'Show all methods';
    toggle.setAttribute('aria-pressed', String(state.allMethods));
    toggle.setAttribute('aria-label', state.allMethods ? 'Show selected methods: VoCo, S2DC, MedGMAE and their VolumeProbe-Lite variants' : 'Show all methods, including VolumeProbe-Feat diagnostic variants');
    caption.textContent = state.task.label + ' on ' + dataset.label + '. ' + sourceTable + ' from the camera-ready paper. Higher scores are better.';
    table.classList.toggle('vp-results-single-metric', metrics.length === 1);

    const header = document.createElement('tr');
    const methodHeader = element('th', '', 'Method');
    methodHeader.scope = 'col';
    header.append(methodHeader);
    metrics.forEach((metric) => {
      const cell = element('th');
      cell.scope = 'col';
      const direction = metric.direction === 'lower' || metric.direction === 'min' ? '↓' : '↑';
      const metricLabel = metric.label.replace(/\s*[↑↓]\s*$/, '');
      cell.append(element('span', 'vp-results-metric-label', metricLabel + ' ' + direction));
      const detail = metricDescription(metric);
      if (metrics.length > 1 && detail) cell.setAttribute('aria-label', metricLabel + ' ' + direction + ', ' + detail);
      header.append(cell);
    });
    thead.replaceChildren(header);

    const bodyRows = [];
    let previousGroup = null;
    rows.forEach((row) => {
      if (state.allMethods && row.group && row.group !== previousGroup) {
        const groupRow = element('tr', 'vp-results-group');
        const groupCell = element('th', '', row.group);
        groupCell.colSpan = metrics.length + 1;
        groupCell.scope = 'rowgroup';
        groupRow.append(groupCell);
        bodyRows.push(groupRow);
      }
      previousGroup = row.group;
      const tr = element('tr', row.variant === 'lite' ? 'vp-results-ours' : row.variant === 'feat' ? 'vp-results-diagnostic' : '');
      tr.dataset.method = row.id;
      tr.append(methodCell(row));
      metrics.forEach((metric) => tr.append(valueCell(row, metric)));
      bodyRows.push(tr);
    });
    tbody.replaceChildren(...bodyRows);

    if (announce) status.textContent = state.task.label + ', ' + dataset.label + ': ' + rows.length + ' methods displayed. ' + (state.allMethods ? 'All methods.' : 'Selected methods.');
  }

  taskControl.select.addEventListener('change', () => {
    state.task = data.tasks.find((task) => task.id === taskControl.select.value);
    state.dataset = state.task.datasets[0];
    render(true);
  });
  datasetControl.select.addEventListener('change', () => {
    state.dataset = state.task.datasets.find((dataset) => dataset.id === datasetControl.select.value);
    render(true);
  });
  toggle.addEventListener('click', () => {
    state.allMethods = !state.allMethods;
    render(true);
  });
  render(false);
}());
