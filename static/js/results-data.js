/* Exact Table 1 and Table 2 scores from the camera-ready paper. Values remain strings to preserve precision. */
window.VOLUMEPROBE_RESULTS = {
  "schemaVersion": 1,
  "source": {
    "path": "VolumeProbe_Neurips2026_CR_10.10.pdf",
    "sha256": "87580c82d13cefbf7d6835411b9ba26996b20b6e64f3b3c69a347760fecb9313",
    "tables": [
      1,
      2
    ],
    "pages": [
      6,
      7
    ]
  },
  "conventions": {
    "decimalPlaces": 2,
    "errorBars": null,
    "gains": "Absolute score-point improvements over the paired baseline; printed as upward arrows. These are not standard deviations.",
    "rank": "1 = bold best, 2 = underlined second best in the original complete table; do not rerank the focused subset.",
    "mainMethod": "VolumeProbe-Lite",
    "diagnosticVariant": "VolumeProbe-Feat",
    "defaultView": "Three paired SSL baselines and their VolumeProbe-Lite rows; six rows per dataset.",
    "nameSpelling": "The PDF spells the baseline VoCo. The user wrote VoCO; the data preserves the paper spelling.",
    "dataFractions": "The Table 1 caption says training data proportions (1%, 10%, 100%)."
  },
  "tasks": [
    {
      "id": "segmentation",
      "label": "Segmentation",
      "datasets": [
        {
          "id": "btcv",
          "label": "BTCV",
          "metricName": "Dice Score",
          "unit": "%",
          "direction": "higher",
          "sourceTable": 1,
          "sourcePage": 6,
          "metrics": [
            {
              "key": "1pct",
              "label": "1% data",
              "direction": "higher"
            },
            {
              "key": "10pct",
              "label": "10% data",
              "direction": "higher"
            },
            {
              "key": "100pct",
              "label": "100% data",
              "direction": "higher"
            }
          ],
          "rows": [
            {
              "id": "unetr-scratch",
              "method": "UNETR",
              "sourceLabel": "UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 18,
              "values": {
                "1pct": "28.05",
                "10pct": "42.85",
                "100pct": "79.82"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-scratch",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 17,
              "values": {
                "1pct": "27.71",
                "10pct": "51.33",
                "100pct": "80.53"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mae3d",
              "method": "MAE3D",
              "sourceLabel": "MAE3D",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 8,
              "values": {
                "1pct": "31.86",
                "10pct": "55.79",
                "100pct": "81.33"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "simmim",
              "method": "SimMIM",
              "sourceLabel": "SimMIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 72,
              "values": {
                "1pct": "34.73",
                "10pct": "56.34",
                "100pct": "76.03"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mocov3",
              "method": "MoCo v3",
              "sourceLabel": "MoCo v3",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 19,
              "values": {
                "1pct": "38.27",
                "10pct": "77.91",
                "100pct": "79.54"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-ssl",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 17,
              "values": {
                "1pct": "28.52",
                "10pct": "48.31",
                "100pct": "81.54"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gvsl",
              "method": "GVSL",
              "sourceLabel": "GVSL",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 21,
              "values": {
                "1pct": "24.86",
                "10pct": "41.79",
                "100pct": "81.87"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gl-mae",
              "method": "GL-MAE",
              "sourceLabel": "GL-MAE",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 81,
              "values": {
                "1pct": "52.46",
                "10pct": "65.83",
                "100pct": "82.01"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mim",
              "method": "MIM",
              "sourceLabel": "MIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 82,
              "values": {
                "1pct": "60.53",
                "10pct": "74.20",
                "100pct": "81.97"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco",
              "method": "VoCo",
              "sourceLabel": "VoCo",
              "variant": "baseline",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": 68,
              "values": {
                "1pct": "63.33",
                "10pct": "77.85",
                "100pct": "83.85"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco-volumeprobe-lite",
              "method": "VoCo + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "67.21",
                "10pct": "79.39",
                "100pct": "83.97"
              },
              "gains": {
                "1pct": "3.88",
                "10pct": "1.54",
                "100pct": "0.12"
              },
              "ranks": {
                "1pct": null,
                "10pct": 2,
                "100pct": null
              }
            },
            {
              "id": "voco-volumeprobe-feat",
              "method": "VoCo + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "68.07",
                "10pct": "79.51",
                "100pct": "83.89"
              },
              "gains": {
                "1pct": "4.74",
                "10pct": "1.66",
                "100pct": "0.04"
              },
              "ranks": {
                "1pct": null,
                "10pct": 1,
                "100pct": null
              }
            },
            {
              "id": "s2dc",
              "method": "S2DC",
              "sourceLabel": "S2DC",
              "variant": "baseline",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": 48,
              "values": {
                "1pct": "66.77",
                "10pct": "77.93",
                "100pct": "84.09"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc-volumeprobe-lite",
              "method": "S2DC + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "69.47",
                "10pct": "78.74",
                "100pct": "84.43"
              },
              "gains": {
                "1pct": "2.70",
                "10pct": "0.81",
                "100pct": "0.34"
              },
              "ranks": {
                "1pct": 1,
                "10pct": null,
                "100pct": 1
              }
            },
            {
              "id": "s2dc-volumeprobe-feat",
              "method": "S2DC + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "68.76",
                "10pct": "78.92",
                "100pct": "84.19"
              },
              "gains": {
                "1pct": "1.99",
                "10pct": "0.99",
                "100pct": "0.10"
              },
              "ranks": {
                "1pct": 2,
                "10pct": null,
                "100pct": 2
              }
            },
            {
              "id": "medgmae",
              "method": "MedGMAE",
              "sourceLabel": "MedGMAE",
              "variant": "baseline",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": 13,
              "values": {
                "1pct": "66.19",
                "10pct": "77.11",
                "100pct": "83.22"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae-volumeprobe-lite",
              "method": "MedGMAE + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "66.85",
                "10pct": "78.44",
                "100pct": "83.48"
              },
              "gains": {
                "1pct": "0.66",
                "10pct": "1.33",
                "100pct": "0.26"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae-volumeprobe-feat",
              "method": "MedGMAE + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "66.57",
                "10pct": "79.09",
                "100pct": "83.29"
              },
              "gains": {
                "1pct": "0.38",
                "10pct": "1.98",
                "100pct": "0.07"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            }
          ]
        },
        {
          "id": "amos",
          "label": "AMOS",
          "metricName": "Dice Score",
          "unit": "%",
          "direction": "higher",
          "sourceTable": 1,
          "sourcePage": 6,
          "metrics": [
            {
              "key": "1pct",
              "label": "1% data",
              "direction": "higher"
            },
            {
              "key": "10pct",
              "label": "10% data",
              "direction": "higher"
            },
            {
              "key": "100pct",
              "label": "100% data",
              "direction": "higher"
            }
          ],
          "rows": [
            {
              "id": "unetr-scratch",
              "method": "UNETR",
              "sourceLabel": "UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 18,
              "values": {
                "1pct": "23.67",
                "10pct": "60.06",
                "100pct": "77.02"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-scratch",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 17,
              "values": {
                "1pct": "28.94",
                "10pct": "63.45",
                "100pct": "82.51"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mae3d",
              "method": "MAE3D",
              "sourceLabel": "MAE3D",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 8,
              "values": {
                "1pct": "37.82",
                "10pct": "62.83",
                "100pct": "82.26"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "simmim",
              "method": "SimMIM",
              "sourceLabel": "SimMIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 72,
              "values": {
                "1pct": "30.98",
                "10pct": "63.70",
                "100pct": "80.83"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mocov3",
              "method": "MoCo v3",
              "sourceLabel": "MoCo v3",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 19,
              "values": {
                "1pct": "34.67",
                "10pct": "65.76",
                "100pct": "81.95"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-ssl",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 17,
              "values": {
                "1pct": "24.63",
                "10pct": "65.49",
                "100pct": "80.97"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gvsl",
              "method": "GVSL",
              "sourceLabel": "GVSL",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 21,
              "values": {
                "1pct": "34.39",
                "10pct": "63.45",
                "100pct": "81.38"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gl-mae",
              "method": "GL-MAE",
              "sourceLabel": "GL-MAE",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 81,
              "values": {
                "1pct": "48.14",
                "10pct": "72.43",
                "100pct": "84.20"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mim",
              "method": "MIM",
              "sourceLabel": "MIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 82,
              "values": {
                "1pct": "50.40",
                "10pct": "73.59",
                "100pct": "84.72"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco",
              "method": "VoCo",
              "sourceLabel": "VoCo",
              "variant": "baseline",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": 68,
              "values": {
                "1pct": "55.81",
                "10pct": "73.34",
                "100pct": "84.44"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco-volumeprobe-lite",
              "method": "VoCo + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "58.64",
                "10pct": "74.95",
                "100pct": "87.52"
              },
              "gains": {
                "1pct": "2.83",
                "10pct": "1.61",
                "100pct": "3.08"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": 1
              }
            },
            {
              "id": "voco-volumeprobe-feat",
              "method": "VoCo + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "57.86",
                "10pct": "74.70",
                "100pct": "87.13"
              },
              "gains": {
                "1pct": "2.05",
                "10pct": "1.36",
                "100pct": "2.69"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc",
              "method": "S2DC",
              "sourceLabel": "S2DC",
              "variant": "baseline",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": 48,
              "values": {
                "1pct": "55.19",
                "10pct": "74.28",
                "100pct": "84.68"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc-volumeprobe-lite",
              "method": "S2DC + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "58.83",
                "10pct": "75.31",
                "100pct": "87.17"
              },
              "gains": {
                "1pct": "3.64",
                "10pct": "1.03",
                "100pct": "2.49"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": 2
              }
            },
            {
              "id": "s2dc-volumeprobe-feat",
              "method": "S2DC + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "59.47",
                "10pct": "75.17",
                "100pct": "86.87"
              },
              "gains": {
                "1pct": "4.28",
                "10pct": "0.89",
                "100pct": "2.19"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae",
              "method": "MedGMAE",
              "sourceLabel": "MedGMAE",
              "variant": "baseline",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": 13,
              "values": {
                "1pct": "58.79",
                "10pct": "75.65",
                "100pct": "84.90"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae-volumeprobe-lite",
              "method": "MedGMAE + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "60.26",
                "10pct": "77.14",
                "100pct": "85.62"
              },
              "gains": {
                "1pct": "1.47",
                "10pct": "1.49",
                "100pct": "0.72"
              },
              "ranks": {
                "1pct": 1,
                "10pct": 1,
                "100pct": null
              }
            },
            {
              "id": "medgmae-volumeprobe-feat",
              "method": "MedGMAE + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "59.57",
                "10pct": "76.80",
                "100pct": "85.93"
              },
              "gains": {
                "1pct": "0.78",
                "10pct": "1.15",
                "100pct": "1.03"
              },
              "ranks": {
                "1pct": 2,
                "10pct": 2,
                "100pct": null
              }
            }
          ]
        },
        {
          "id": "word",
          "label": "WORD",
          "metricName": "Dice Score",
          "unit": "%",
          "direction": "higher",
          "sourceTable": 1,
          "sourcePage": 6,
          "metrics": [
            {
              "key": "1pct",
              "label": "1% data",
              "direction": "higher"
            },
            {
              "key": "10pct",
              "label": "10% data",
              "direction": "higher"
            },
            {
              "key": "100pct",
              "label": "100% data",
              "direction": "higher"
            }
          ],
          "rows": [
            {
              "id": "unetr-scratch",
              "method": "UNETR",
              "sourceLabel": "UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 18,
              "values": {
                "1pct": "30.89",
                "10pct": "73.76",
                "100pct": "78.73"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-scratch",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 17,
              "values": {
                "1pct": "43.68",
                "10pct": "74.03",
                "100pct": "80.39"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mae3d",
              "method": "MAE3D",
              "sourceLabel": "MAE3D",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 8,
              "values": {
                "1pct": "39.23",
                "10pct": "72.53",
                "100pct": "78.97"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "simmim",
              "method": "SimMIM",
              "sourceLabel": "SimMIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 72,
              "values": {
                "1pct": "37.56",
                "10pct": "73.25",
                "100pct": "79.60"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mocov3",
              "method": "MoCo v3",
              "sourceLabel": "MoCo v3",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 19,
              "values": {
                "1pct": "41.43",
                "10pct": "72.89",
                "100pct": "80.73"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-ssl",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 17,
              "values": {
                "1pct": "48.16",
                "10pct": "75.07",
                "100pct": "81.79"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gvsl",
              "method": "GVSL",
              "sourceLabel": "GVSL",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 21,
              "values": {
                "1pct": "37.87",
                "10pct": "74.10",
                "100pct": "82.36"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gl-mae",
              "method": "GL-MAE",
              "sourceLabel": "GL-MAE",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 81,
              "values": {
                "1pct": "62.60",
                "10pct": "75.42",
                "100pct": "83.17"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mim",
              "method": "MIM",
              "sourceLabel": "MIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 82,
              "values": {
                "1pct": "60.58",
                "10pct": "77.03",
                "100pct": "83.98"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco",
              "method": "VoCo",
              "sourceLabel": "VoCo",
              "variant": "baseline",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": 68,
              "values": {
                "1pct": "64.24",
                "10pct": "77.28",
                "100pct": "84.06"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco-volumeprobe-lite",
              "method": "VoCo + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "68.93",
                "10pct": "80.12",
                "100pct": "85.56"
              },
              "gains": {
                "1pct": "4.69",
                "10pct": "2.84",
                "100pct": "1.50"
              },
              "ranks": {
                "1pct": null,
                "10pct": 1,
                "100pct": 1
              }
            },
            {
              "id": "voco-volumeprobe-feat",
              "method": "VoCo + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "68.42",
                "10pct": "79.74",
                "100pct": "84.99"
              },
              "gains": {
                "1pct": "4.18",
                "10pct": "2.46",
                "100pct": "0.93"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc",
              "method": "S2DC",
              "sourceLabel": "S2DC",
              "variant": "baseline",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": 48,
              "values": {
                "1pct": "69.14",
                "10pct": "78.96",
                "100pct": "84.46"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc-volumeprobe-lite",
              "method": "S2DC + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "69.73",
                "10pct": "80.04",
                "100pct": "85.22"
              },
              "gains": {
                "1pct": "0.59",
                "10pct": "1.08",
                "100pct": "0.76"
              },
              "ranks": {
                "1pct": null,
                "10pct": 2,
                "100pct": null
              }
            },
            {
              "id": "s2dc-volumeprobe-feat",
              "method": "S2DC + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "70.28",
                "10pct": "79.82",
                "100pct": "85.43"
              },
              "gains": {
                "1pct": "1.14",
                "10pct": "0.86",
                "100pct": "0.97"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": 2
              }
            },
            {
              "id": "medgmae",
              "method": "MedGMAE",
              "sourceLabel": "MedGMAE",
              "variant": "baseline",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": 13,
              "values": {
                "1pct": "68.09",
                "10pct": "77.73",
                "100pct": "84.19"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae-volumeprobe-lite",
              "method": "MedGMAE + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "70.67",
                "10pct": "79.42",
                "100pct": "84.36"
              },
              "gains": {
                "1pct": "2.58",
                "10pct": "1.69",
                "100pct": "0.17"
              },
              "ranks": {
                "1pct": 2,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae-volumeprobe-feat",
              "method": "MedGMAE + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "71.15",
                "10pct": "79.08",
                "100pct": "84.25"
              },
              "gains": {
                "1pct": "3.06",
                "10pct": "1.35",
                "100pct": "0.06"
              },
              "ranks": {
                "1pct": 1,
                "10pct": null,
                "100pct": null
              }
            }
          ]
        },
        {
          "id": "atlas-mri",
          "label": "Atlas-MRI",
          "metricName": "Dice Score",
          "unit": "%",
          "direction": "higher",
          "sourceTable": 1,
          "sourcePage": 6,
          "metrics": [
            {
              "key": "1pct",
              "label": "1% data",
              "direction": "higher"
            },
            {
              "key": "10pct",
              "label": "10% data",
              "direction": "higher"
            },
            {
              "key": "100pct",
              "label": "100% data",
              "direction": "higher"
            }
          ],
          "rows": [
            {
              "id": "unetr-scratch",
              "method": "UNETR",
              "sourceLabel": "UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 18,
              "values": {
                "1pct": "18.65",
                "10pct": "40.83",
                "100pct": "49.97"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-scratch",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 17,
              "values": {
                "1pct": "17.19",
                "10pct": "39.46",
                "100pct": "48.50"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mae3d",
              "method": "MAE3D",
              "sourceLabel": "MAE3D",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 8,
              "values": {
                "1pct": "28.46",
                "10pct": "42.01",
                "100pct": "52.85"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "simmim",
              "method": "SimMIM",
              "sourceLabel": "SimMIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 72,
              "values": {
                "1pct": "26.22",
                "10pct": "41.53",
                "100pct": "52.47"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mocov3",
              "method": "MoCo v3",
              "sourceLabel": "MoCo v3",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 19,
              "values": {
                "1pct": "30.57",
                "10pct": "43.28",
                "100pct": "54.31"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "swin-unetr-ssl",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 17,
              "values": {
                "1pct": "24.09",
                "10pct": "41.96",
                "100pct": "53.38"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gvsl",
              "method": "GVSL",
              "sourceLabel": "GVSL",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 21,
              "values": {
                "1pct": "28.63",
                "10pct": "42.83",
                "100pct": "54.86"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "gl-mae",
              "method": "GL-MAE",
              "sourceLabel": "GL-MAE",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 81,
              "values": {
                "1pct": "32.54",
                "10pct": "46.02",
                "100pct": "57.19"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "mim",
              "method": "MIM",
              "sourceLabel": "MIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 82,
              "values": {
                "1pct": "33.19",
                "10pct": "45.20",
                "100pct": "57.03"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco",
              "method": "VoCo",
              "sourceLabel": "VoCo",
              "variant": "baseline",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": 68,
              "values": {
                "1pct": "34.85",
                "10pct": "47.56",
                "100pct": "58.83"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco-volumeprobe-lite",
              "method": "VoCo + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "38.68",
                "10pct": "49.27",
                "100pct": "59.98"
              },
              "gains": {
                "1pct": "3.83",
                "10pct": "1.71",
                "100pct": "1.15"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "voco-volumeprobe-feat",
              "method": "VoCo + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "37.93",
                "10pct": "49.06",
                "100pct": "59.42"
              },
              "gains": {
                "1pct": "3.08",
                "10pct": "1.50",
                "100pct": "0.59"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc",
              "method": "S2DC",
              "sourceLabel": "S2DC",
              "variant": "baseline",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": 48,
              "values": {
                "1pct": "33.79",
                "10pct": "46.18",
                "100pct": "58.53"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc-volumeprobe-lite",
              "method": "S2DC + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "37.16",
                "10pct": "48.08",
                "100pct": "59.44"
              },
              "gains": {
                "1pct": "3.37",
                "10pct": "1.90",
                "100pct": "0.91"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "s2dc-volumeprobe-feat",
              "method": "S2DC + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "38.19",
                "10pct": "48.83",
                "100pct": "59.81"
              },
              "gains": {
                "1pct": "4.40",
                "10pct": "2.65",
                "100pct": "1.28"
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae",
              "method": "MedGMAE",
              "sourceLabel": "MedGMAE",
              "variant": "baseline",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": 13,
              "values": {
                "1pct": "36.24",
                "10pct": "48.16",
                "100pct": "59.42"
              },
              "gains": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              },
              "ranks": {
                "1pct": null,
                "10pct": null,
                "100pct": null
              }
            },
            {
              "id": "medgmae-volumeprobe-lite",
              "method": "MedGMAE + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "39.71",
                "10pct": "50.23",
                "100pct": "60.19"
              },
              "gains": {
                "1pct": "3.47",
                "10pct": "2.07",
                "100pct": "0.77"
              },
              "ranks": {
                "1pct": 1,
                "10pct": 1,
                "100pct": 2
              }
            },
            {
              "id": "medgmae-volumeprobe-feat",
              "method": "MedGMAE + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "1pct": "39.48",
                "10pct": "49.83",
                "100pct": "60.40"
              },
              "gains": {
                "1pct": "3.24",
                "10pct": "1.67",
                "100pct": "0.98"
              },
              "ranks": {
                "1pct": 2,
                "10pct": 2,
                "100pct": 1
              }
            }
          ]
        }
      ]
    },
    {
      "id": "classification",
      "label": "Classification",
      "datasets": [
        {
          "id": "cc-ccii",
          "label": "CC-CCII",
          "metricName": "Accuracy",
          "unit": "%",
          "direction": "higher",
          "sourceTable": 1,
          "sourcePage": 6,
          "metrics": [
            {
              "key": "accuracy",
              "label": "Accuracy (%) ↑",
              "direction": "higher"
            }
          ],
          "rows": [
            {
              "id": "unetr-scratch",
              "method": "UNETR",
              "sourceLabel": "UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 18,
              "values": {
                "accuracy": "88.65"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "swin-unetr-scratch",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 17,
              "values": {
                "accuracy": "88.32"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "mae3d",
              "method": "MAE3D",
              "sourceLabel": "MAE3D",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 8,
              "values": {
                "accuracy": "90.09"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "simmim",
              "method": "SimMIM",
              "sourceLabel": "SimMIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 72,
              "values": {
                "accuracy": "91.27"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "mocov3",
              "method": "MoCo v3",
              "sourceLabel": "MoCo v3",
              "variant": "baseline",
              "baseMethod": null,
              "group": "General SSL",
              "citation": 19,
              "values": {
                "accuracy": "87.76"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "swin-unetr-ssl",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 17,
              "values": {
                "accuracy": "89.42"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "gvsl",
              "method": "GVSL",
              "sourceLabel": "GVSL",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 21,
              "values": {
                "accuracy": "93.26"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "gl-mae",
              "method": "GL-MAE",
              "sourceLabel": "GL-MAE",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 81,
              "values": {
                "accuracy": "92.13"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "mim",
              "method": "MIM",
              "sourceLabel": "MIM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 82,
              "values": {
                "accuracy": "92.75"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "voco",
              "method": "VoCo",
              "sourceLabel": "VoCo",
              "variant": "baseline",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": 68,
              "values": {
                "accuracy": "93.45"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "voco-volumeprobe-lite",
              "method": "VoCo + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "accuracy": "93.98"
              },
              "gains": {
                "accuracy": "0.53"
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "voco-volumeprobe-feat",
              "method": "VoCo + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "accuracy": "94.25"
              },
              "gains": {
                "accuracy": "0.80"
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "s2dc",
              "method": "S2DC",
              "sourceLabel": "S2DC",
              "variant": "baseline",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": 48,
              "values": {
                "accuracy": "94.19"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "s2dc-volumeprobe-lite",
              "method": "S2DC + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "accuracy": "94.87"
              },
              "gains": {
                "accuracy": "0.68"
              },
              "ranks": {
                "accuracy": 1
              }
            },
            {
              "id": "s2dc-volumeprobe-feat",
              "method": "S2DC + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "accuracy": "94.34"
              },
              "gains": {
                "accuracy": "0.15"
              },
              "ranks": {
                "accuracy": 2
              }
            },
            {
              "id": "medgmae",
              "method": "MedGMAE",
              "sourceLabel": "MedGMAE",
              "variant": "baseline",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": 13,
              "values": {
                "accuracy": "93.08"
              },
              "gains": {
                "accuracy": null
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "medgmae-volumeprobe-lite",
              "method": "MedGMAE + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "accuracy": "93.58"
              },
              "gains": {
                "accuracy": "0.50"
              },
              "ranks": {
                "accuracy": null
              }
            },
            {
              "id": "medgmae-volumeprobe-feat",
              "method": "MedGMAE + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "accuracy": "93.81"
              },
              "gains": {
                "accuracy": "0.73"
              },
              "ranks": {
                "accuracy": null
              }
            }
          ]
        }
      ]
    },
    {
      "id": "registration",
      "label": "Registration",
      "datasets": [
        {
          "id": "ixi",
          "label": "IXI",
          "metricName": "Dice Score",
          "unit": "%",
          "direction": "higher",
          "sourceTable": 2,
          "sourcePage": 7,
          "metrics": [
            {
              "key": "dice",
              "label": "Dice (%) ↑",
              "direction": "higher"
            }
          ],
          "rows": [
            {
              "id": "voxelmorph-scratch",
              "method": "VoxelMorph",
              "sourceLabel": "VoxelMorph",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 1,
              "values": {
                "dice": "71.54"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "transmorph-scratch",
              "method": "TransMorph",
              "sourceLabel": "TransMorph",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 6,
              "values": {
                "dice": "74.46"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": 2
              }
            },
            {
              "id": "swin-unetr-scratch",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 17,
              "values": {
                "dice": "72.63"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "sup",
              "method": "SUP",
              "sourceLabel": "SUP",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 58,
              "values": {
                "dice": "67.67"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "suprem",
              "method": "SuPreM",
              "sourceLabel": "SuPreM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 38,
              "values": {
                "dice": "72.90"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "voco",
              "method": "VoCo",
              "sourceLabel": "VoCo",
              "variant": "baseline",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": 68,
              "values": {
                "dice": "73.66"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "voco-volumeprobe-lite",
              "method": "VoCo + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "74.39"
              },
              "gains": {
                "dice": "0.73"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "voco-volumeprobe-feat",
              "method": "VoCo + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "74.17"
              },
              "gains": {
                "dice": "0.51"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "s2dc",
              "method": "S2DC",
              "sourceLabel": "S2DC",
              "variant": "baseline",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": 48,
              "values": {
                "dice": "72.93"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "s2dc-volumeprobe-lite",
              "method": "S2DC + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "73.70"
              },
              "gains": {
                "dice": "0.77"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "s2dc-volumeprobe-feat",
              "method": "S2DC + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "73.98"
              },
              "gains": {
                "dice": "1.05"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "medgmae",
              "method": "MedGMAE",
              "sourceLabel": "MedGMAE",
              "variant": "baseline",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": 13,
              "values": {
                "dice": "73.69"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "medgmae-volumeprobe-lite",
              "method": "MedGMAE + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "74.88"
              },
              "gains": {
                "dice": "1.19"
              },
              "ranks": {
                "dice": 1
              }
            },
            {
              "id": "medgmae-volumeprobe-feat",
              "method": "MedGMAE + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "74.28"
              },
              "gains": {
                "dice": "0.59"
              },
              "ranks": {
                "dice": null
              }
            }
          ]
        },
        {
          "id": "oasis",
          "label": "OASIS",
          "metricName": "Dice Score",
          "unit": "%",
          "direction": "higher",
          "sourceTable": 2,
          "sourcePage": 7,
          "metrics": [
            {
              "key": "dice",
              "label": "Dice (%) ↑",
              "direction": "higher"
            }
          ],
          "rows": [
            {
              "id": "voxelmorph-scratch",
              "method": "VoxelMorph",
              "sourceLabel": "VoxelMorph",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 1,
              "values": {
                "dice": "78.55"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "transmorph-scratch",
              "method": "TransMorph",
              "sourceLabel": "TransMorph",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 6,
              "values": {
                "dice": "81.61"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "swin-unetr-scratch",
              "method": "Swin-UNETR",
              "sourceLabel": "Swin-UNETR",
              "variant": "baseline",
              "baseMethod": null,
              "group": "From Scratch",
              "citation": 17,
              "values": {
                "dice": "81.81"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "sup",
              "method": "SUP",
              "sourceLabel": "SUP",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 58,
              "values": {
                "dice": "81.54"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "suprem",
              "method": "SuPreM",
              "sourceLabel": "SuPreM",
              "variant": "baseline",
              "baseMethod": null,
              "group": "Medical Image SSL",
              "citation": 38,
              "values": {
                "dice": "81.18"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "voco",
              "method": "VoCo",
              "sourceLabel": "VoCo",
              "variant": "baseline",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": 68,
              "values": {
                "dice": "84.38"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "voco-volumeprobe-lite",
              "method": "VoCo + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "85.55"
              },
              "gains": {
                "dice": "1.17"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "voco-volumeprobe-feat",
              "method": "VoCo + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "VoCo",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "85.19"
              },
              "gains": {
                "dice": "0.81"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "s2dc",
              "method": "S2DC",
              "sourceLabel": "S2DC",
              "variant": "baseline",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": 48,
              "values": {
                "dice": "82.97"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "s2dc-volumeprobe-lite",
              "method": "S2DC + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "84.09"
              },
              "gains": {
                "dice": "1.12"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "s2dc-volumeprobe-feat",
              "method": "S2DC + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "S2DC",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "83.86"
              },
              "gains": {
                "dice": "0.89"
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "medgmae",
              "method": "MedGMAE",
              "sourceLabel": "MedGMAE",
              "variant": "baseline",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": 13,
              "values": {
                "dice": "85.71"
              },
              "gains": {
                "dice": null
              },
              "ranks": {
                "dice": null
              }
            },
            {
              "id": "medgmae-volumeprobe-lite",
              "method": "MedGMAE + VolumeProbe-Lite",
              "sourceLabel": "+ VolumeProbe-Lite",
              "variant": "lite",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "85.96"
              },
              "gains": {
                "dice": "0.25"
              },
              "ranks": {
                "dice": 2
              }
            },
            {
              "id": "medgmae-volumeprobe-feat",
              "method": "MedGMAE + VolumeProbe-Feat",
              "sourceLabel": "+ VolumeProbe-Feat",
              "variant": "feat",
              "baseMethod": "MedGMAE",
              "group": "Medical Image SSL",
              "citation": null,
              "values": {
                "dice": "86.17"
              },
              "gains": {
                "dice": "0.46"
              },
              "ranks": {
                "dice": 1
              }
            }
          ]
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "3 tasks · 7 datasets",
      "text": "Segmentation, classification, and registration across CT and MRI benchmarks.",
      "source": "Tables 1 and 2; Section 4.1"
    },
    {
      "value": "45 / 45",
      "text": "VolumeProbe-Lite improves every paired backbone–setting comparison in the two main tables.",
      "source": "Computed from Tables 1 and 2: 3 backbones × 15 settings; all gains > 0."
    },
    {
      "value": "+4.69",
      "unit": "Dice points",
      "text": "WORD segmentation with only 1% training data, paired with VoCo.",
      "source": "Table 1: 64.24 → 68.93."
    },
    {
      "value": "+3.08",
      "unit": "Dice points",
      "text": "AMOS segmentation at 100% training data, paired with VoCo.",
      "source": "Table 1: 84.44 → 87.52."
    }
  ],
  "validation": {
    "table1Rows": 18,
    "table1Metrics": 13,
    "table1Cells": 234,
    "table2Rows": 14,
    "table2Metrics": 2,
    "table2Cells": 28,
    "totalCells": 262,
    "allPrintedGainsMatchPairedDifferences": true,
    "visualReview": [
      "tables-page-6.png",
      "tables-page-7.png"
    ],
    "missingValues": 0
  }
};
