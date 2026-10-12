/* Figure 5: hit regions select the existing PNG pixels, without changing the image.
 * Occupancy values are transcribed from the nine case/method panels, not individual crops.
 * Coordinates below use a 1963 x 1248 reference view, normalized for any rendered size.
 */
(() => {
  'use strict';
  if (!window.VOLUMEPROBE_ANALYSIS) return;
  const rect = ([x, y, w, h]) => [x / 1963 * 1000, y / 1248 * 1000, w / 1963 * 1000, h / 1248 * 1000].map(n => +n.toFixed(3));
  const methods = [
    { id: 'random', label: 'Random', color: '#679de1' },
    { id: 'lite', label: 'VolumeProbe-Lite', color: '#6e69b7' },
    { id: 'feat', label: 'VolumeProbe-Feat', color: '#82509d' }
  ];
  // Per case: 3D scene x/width, projection x, crop columns, occupancy x/width.
  const columns = [
    { scene: [102, 216], projection: 326, crops: [532, 609], occupancy: [333, 345] },
    { scene: [704, 224], projection: 932, crops: [1141, 1218], occupancy: [937, 347] },
    { scene: [1333, 242], projection: 1583, crops: [1794, 1871], occupancy: [1585, 345] }
  ];
  const rows = [
    { scene: [92, 287], projection: 93, crops: [112, 187], occupancy: 292 },
    { scene: [461, 289], projection: 459, crops: [478, 554], occupancy: 662 },
    { scene: [840, 295], projection: 839, crops: [857, 932], occupancy: 1038 }
  ];
  // Case-major, then Random / Lite / Feat; foreground %, organ %.
  const occupancy = [
    [['51.70', '8.13'], ['76.04', '13.96'], ['77.17', '16.06']],
    [['34.24', '12.66'], ['61.44', '26.47'], ['58.52', '25.19']],
    [['48.13', '18.84'], ['61.76', '40.73'], ['64.43', '42.09']]
  ];
  const regions = [];
  columns.forEach((column, c) => rows.forEach((row, r) => {
    const method = methods[r];
    const prefix = `Case ${c + 1} · ${method.label}`;
    const id = `case-${c + 1}-${method.id}`;
    const [foreground, organ] = occupancy[c][r];
    const add = (suffix, label, bounds, detail, kind = 'tile') => regions.push({
      id: `${id}-${suffix}`, label: `${prefix} · ${label}`, detail,
      rect: rect(bounds), kind, group: prefix, color: method.color
    });
    add('3d', '3D sampled crops', [column.scene[0], row.scene[0], column.scene[1], row.scene[1]],
      `Crop boxes show the spatial placement of ${method.label} observations within the body envelope and organ masks for Case ${c + 1}.`);
    add('projection', 'Coronal projection', [column.projection, row.projection, 187, 187],
      `Coronal view of crop centers, their density, and sampled crop boxes for Case ${c + 1} with ${method.label}.`);
    row.crops.forEach((y, cropRow) => column.crops.forEach((x, cropColumn) => {
      const crop = cropRow * 2 + cropColumn + 1;
      add(`crop-${crop}`, `Sampled crop ${crop}`, [x, y, 66, 67],
        `Coronal crop ${crop} from Case ${c + 1} with ${method.label}. Compare the visible anatomical content with the other sampling methods.`);
    }));
    add('occupancy', 'Occupancy', [column.occupancy[0], row.occupancy, column.occupancy[1], 84],
      `Case ${c + 1}, ${method.label}: foreground occupancy ${foreground}%; organ occupancy ${organ}%. These values summarize the case/method panel.`, 'region');
  }));
  window.VOLUMEPROBE_ANALYSIS.analysisCases = {
    figure: 5, width: 2118, height: 1347,
    intro: 'Three representative cases compare Random, VolumeProbe-Lite, and VolumeProbe-Feat through crop placement, coronal views, sampled crops, and occupancy.',
    regions
  };
})();
