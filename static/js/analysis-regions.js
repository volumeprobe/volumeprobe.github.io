/* Interactive hit regions for the original Analysis PNGs.
 * Coordinates are normalized to a 1000 x 1000 SVG viewBox.
 * Paths identify pixels to highlight; they are not replacement experimental data.
 * Tooltip numbers are transcribed only from labels printed in the figures.
 */
window.VOLUMEPROBE_ANALYSIS = {
  "analysisAnatomy": {
    "figure": 4,
    "width": 2156,
    "height": 1257,
    "intro": "VolumeProbe favors organ-rich regions, improving foreground and organ occupancy.",
    "regions": [
      {
        "id": "reference-0",
        "label": "Anatomical reference · Axial (XY)",
        "detail": "Purple intensity shows the anatomical reference density; the gray outline is the organ-union contour.",
        "rect": [
          72.266,
          62.814,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "Anatomical reference"
      },
      {
        "id": "reference-1",
        "label": "Anatomical reference · Coronal (XZ)",
        "detail": "Purple intensity shows the anatomical reference density; the gray outline is the organ-union contour.",
        "rect": [
          266.602,
          62.814,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "Anatomical reference"
      },
      {
        "id": "reference-2",
        "label": "Anatomical reference · Sagittal (YZ)",
        "detail": "Purple intensity shows the anatomical reference density; the gray outline is the organ-union contour.",
        "rect": [
          460.938,
          62.814,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "Anatomical reference"
      },
      {
        "id": "random-0",
        "label": "Random · Axial (XY)",
        "detail": "Random sampling is shown against the anatomical reference. Reported occupancy: foreground 55.83%; organ 19.79%.",
        "rect": [
          72.266,
          279.732,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "Random"
      },
      {
        "id": "random-1",
        "label": "Random · Coronal (XZ)",
        "detail": "Random sampling is shown against the anatomical reference. Reported occupancy: foreground 55.83%; organ 19.79%.",
        "rect": [
          266.602,
          279.732,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "Random"
      },
      {
        "id": "random-2",
        "label": "Random · Sagittal (YZ)",
        "detail": "Random sampling is shown against the anatomical reference. Reported occupancy: foreground 55.83%; organ 19.79%.",
        "rect": [
          460.938,
          279.732,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "Random"
      },
      {
        "id": "without-anatomy-0",
        "label": "w/o A · Axial (XY)",
        "detail": "Removing anatomy-awareness concentrates crop centers in a few locations. Reported occupancy: foreground 63.16%; organ 31.40%.",
        "rect": [
          72.266,
          495.812,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "w/o A"
      },
      {
        "id": "without-anatomy-1",
        "label": "w/o A · Coronal (XZ)",
        "detail": "Removing anatomy-awareness concentrates crop centers in a few locations. Reported occupancy: foreground 63.16%; organ 31.40%.",
        "rect": [
          266.602,
          495.812,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "w/o A"
      },
      {
        "id": "without-anatomy-2",
        "label": "w/o A · Sagittal (YZ)",
        "detail": "Removing anatomy-awareness concentrates crop centers in a few locations. Reported occupancy: foreground 63.16%; organ 31.40%.",
        "rect": [
          460.938,
          495.812,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "w/o A"
      },
      {
        "id": "volumeprobe-0",
        "label": "VolumeProbe · Axial (XY)",
        "detail": "The crop-center density follows the anatomical reference more closely. Reported occupancy: foreground 75.63%; organ 45.71%.",
        "rect": [
          72.266,
          711.893,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "VolumeProbe"
      },
      {
        "id": "volumeprobe-1",
        "label": "VolumeProbe · Coronal (XZ)",
        "detail": "The crop-center density follows the anatomical reference more closely. Reported occupancy: foreground 75.63%; organ 45.71%.",
        "rect": [
          266.602,
          711.893,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "VolumeProbe"
      },
      {
        "id": "volumeprobe-2",
        "label": "VolumeProbe · Sagittal (YZ)",
        "detail": "The crop-center density follows the anatomical reference more closely. Reported occupancy: foreground 75.63%; organ 45.71%.",
        "rect": [
          460.938,
          711.893,
          181.641,
          199.33
        ],
        "kind": "tile",
        "group": "VolumeProbe"
      },
      {
        "id": "occupancy-random",
        "label": "Random · occupancy",
        "detail": "Foreground occupancy: 55.83%. Organ occupancy: 19.79%.",
        "rect": [
          723.145,
          313.233,
          256.348,
          148.241
        ],
        "kind": "region"
      },
      {
        "id": "occupancy-without-anatomy",
        "label": "w/o A · occupancy",
        "detail": "Foreground occupancy: 63.16% (+7.33 percentage points vs Random). Organ occupancy: 31.40% (+11.61 percentage points).",
        "rect": [
          723.145,
          489.112,
          256.348,
          155.779
        ],
        "kind": "region"
      },
      {
        "id": "occupancy-volumeprobe",
        "label": "VolumeProbe · occupancy",
        "detail": "Foreground occupancy: 75.63% (+19.80 percentage points vs Random). Organ occupancy: 45.71% (+25.92 percentage points).",
        "rect": [
          723.145,
          695.98,
          256.348,
          154.941
        ],
        "kind": "region"
      }
    ]
  },
  "analysisInformation": {
    "figure": 6,
    "width": 2416,
    "height": 1137,
    "intro": "VolumeProbe accumulates more useful image and anatomical evidence under the same budget.",
    "shadeRects": [
      [
        87.402,
        118.257,
        373.535,
        529.046
      ],
      [
        579.102,
        118.257,
        374.023,
        529.046
      ]
    ],
    "regions": [
      {
        "id": "internal-Random-mean_cum_grad",
        "label": "Random · Cumulative gradient utility",
        "detail": "Solid line. Random accumulates less gradient utility than the two guided strategies at the same observation budget.",
        "kind": "line",
        "paths": [
          [
            [
              102.942,
              620.44
            ],
            [
              111.646,
              618.074
            ],
            [
              120.349,
              615.537
            ],
            [
              129.053,
              612.67
            ],
            [
              137.756,
              609.693
            ],
            [
              146.46,
              606.413
            ],
            [
              155.164,
              602.988
            ],
            [
              163.867,
              599.505
            ],
            [
              172.571,
              595.951
            ],
            [
              181.274,
              592.302
            ],
            [
              189.978,
              588.618
            ],
            [
              198.682,
              584.957
            ],
            [
              207.385,
              581.409
            ],
            [
              216.089,
              577.52
            ],
            [
              224.792,
              573.776
            ],
            [
              233.496,
              569.922
            ],
            [
              242.2,
              566.176
            ],
            [
              250.903,
              562.451
            ],
            [
              259.607,
              558.65
            ],
            [
              268.311,
              554.908
            ],
            [
              277.014,
              551.038
            ],
            [
              285.718,
              547.283
            ],
            [
              294.421,
              543.46
            ],
            [
              303.125,
              539.709
            ],
            [
              311.829,
              535.887
            ],
            [
              320.532,
              532.056
            ],
            [
              329.236,
              528.288
            ],
            [
              337.939,
              524.437
            ],
            [
              346.643,
              520.611
            ],
            [
              355.347,
              516.729
            ],
            [
              364.05,
              512.995
            ],
            [
              372.754,
              509.26
            ],
            [
              381.458,
              505.371
            ],
            [
              390.161,
              501.504
            ],
            [
              398.865,
              497.785
            ],
            [
              407.568,
              494.064
            ],
            [
              416.272,
              490.297
            ],
            [
              424.976,
              486.569
            ],
            [
              433.679,
              482.806
            ],
            [
              442.383,
              479.046
            ]
          ]
        ],
        "group": "Random",
        "color": "#a9cbe5"
      },
      {
        "id": "internal-Random-mean_cum_entropy",
        "label": "Random · Cumulative entropy utility",
        "detail": "Dashed line. Random accumulates less entropy utility than the two guided strategies at the same observation budget.",
        "kind": "line",
        "paths": [
          [
            [
              102.942,
              619.183
            ],
            [
              111.646,
              616.546
            ],
            [
              120.349,
              613.693
            ],
            [
              129.053,
              610.467
            ],
            [
              137.756,
              607.143
            ],
            [
              146.46,
              603.457
            ],
            [
              155.164,
              599.596
            ],
            [
              163.867,
              595.684
            ],
            [
              172.571,
              591.692
            ],
            [
              181.274,
              587.593
            ],
            [
              189.978,
              583.46
            ],
            [
              198.682,
              579.326
            ],
            [
              207.385,
              575.35
            ],
            [
              216.089,
              570.983
            ],
            [
              224.792,
              566.761
            ],
            [
              233.496,
              562.429
            ],
            [
              242.2,
              558.213
            ],
            [
              250.903,
              554.021
            ],
            [
              259.607,
              549.773
            ],
            [
              268.311,
              545.558
            ],
            [
              277.014,
              541.207
            ],
            [
              285.718,
              536.982
            ],
            [
              294.421,
              532.69
            ],
            [
              303.125,
              528.474
            ],
            [
              311.829,
              524.165
            ],
            [
              320.532,
              519.851
            ],
            [
              329.236,
              515.622
            ],
            [
              337.939,
              511.291
            ],
            [
              346.643,
              506.974
            ],
            [
              355.347,
              502.62
            ],
            [
              364.05,
              498.412
            ],
            [
              372.754,
              494.215
            ],
            [
              381.458,
              489.844
            ],
            [
              390.161,
              485.505
            ],
            [
              398.865,
              481.329
            ],
            [
              407.568,
              477.154
            ],
            [
              416.272,
              472.914
            ],
            [
              424.976,
              468.726
            ],
            [
              433.679,
              464.511
            ],
            [
              442.383,
              460.303
            ]
          ]
        ],
        "group": "Random",
        "color": "#a9cbe5"
      },
      {
        "id": "anatomy-Random-mean_cum_unique_organs",
        "label": "Random · Cumulative unique-organ count",
        "detail": "Solid line. Random has the lowest cumulative unique-organ count. Its curve rises rapidly at first, then grows more gradually.",
        "kind": "line",
        "paths": [
          [
            [
              596.118,
              581.912
            ],
            [
              604.834,
              542.279
            ],
            [
              613.55,
              509.602
            ],
            [
              622.266,
              479.688
            ],
            [
              630.981,
              453.953
            ],
            [
              639.697,
              434.369
            ],
            [
              648.413,
              418.16
            ],
            [
              657.129,
              404.856
            ],
            [
              665.845,
              388.17
            ],
            [
              674.561,
              372.144
            ],
            [
              683.276,
              360.461
            ],
            [
              691.992,
              351.175
            ],
            [
              700.708,
              343.331
            ],
            [
              709.424,
              333.42
            ],
            [
              718.14,
              325.428
            ],
            [
              726.855,
              318.93
            ],
            [
              735.571,
              312.559
            ],
            [
              744.287,
              305.735
            ],
            [
              753.003,
              300.645
            ],
            [
              761.719,
              297.851
            ],
            [
              770.435,
              295.146
            ],
            [
              779.15,
              292.434
            ],
            [
              787.866,
              290.438
            ],
            [
              796.582,
              287.371
            ],
            [
              805.298,
              283.983
            ],
            [
              814.014,
              282.431
            ],
            [
              822.729,
              279.665
            ],
            [
              831.445,
              276.703
            ],
            [
              840.161,
              274.482
            ],
            [
              848.877,
              271.852
            ],
            [
              857.593,
              269.561
            ],
            [
              866.309,
              266.943
            ],
            [
              875.024,
              264.155
            ],
            [
              883.74,
              261.235
            ],
            [
              892.456,
              258.729
            ],
            [
              901.172,
              255.928
            ],
            [
              909.888,
              253.603
            ],
            [
              918.604,
              251.31
            ],
            [
              927.319,
              249.355
            ],
            [
              936.035,
              247.256
            ]
          ]
        ],
        "group": "Random",
        "color": "#a9cbe5"
      },
      {
        "id": "anatomy-Random-mean_cum_any_organ_hits",
        "label": "Random · Cumulative any-organ hits",
        "detail": "Dashed line. Random accumulates any-organ hits most slowly among the three methods shown.",
        "kind": "line",
        "paths": [
          [
            [
              596.118,
              624.339
            ],
            [
              604.834,
              619.668
            ],
            [
              613.55,
              615.519
            ],
            [
              622.266,
              609.498
            ],
            [
              630.981,
              603.892
            ],
            [
              639.697,
              597.619
            ],
            [
              648.413,
              591.341
            ],
            [
              657.129,
              582.788
            ],
            [
              665.845,
              575.002
            ],
            [
              674.561,
              568.887
            ],
            [
              683.276,
              562.658
            ],
            [
              691.992,
              556.38
            ],
            [
              700.708,
              550.164
            ],
            [
              709.424,
              546.165
            ],
            [
              718.14,
              540.703
            ],
            [
              726.855,
              534.908
            ],
            [
              735.571,
              529.779
            ],
            [
              744.287,
              525.222
            ],
            [
              753.003,
              518.748
            ],
            [
              761.719,
              512.67
            ],
            [
              770.435,
              506.304
            ],
            [
              779.15,
              500.785
            ],
            [
              787.866,
              494.588
            ],
            [
              796.582,
              488.385
            ],
            [
              805.298,
              482.106
            ],
            [
              814.014,
              475.797
            ],
            [
              822.729,
              469.537
            ],
            [
              831.445,
              463.371
            ],
            [
              840.161,
              457.111
            ],
            [
              848.877,
              450.952
            ],
            [
              857.593,
              444.617
            ],
            [
              866.309,
              438.476
            ],
            [
              875.024,
              432.285
            ],
            [
              883.74,
              426.013
            ],
            [
              892.456,
              419.791
            ],
            [
              901.172,
              413.569
            ],
            [
              909.888,
              407.334
            ],
            [
              918.604,
              401.156
            ],
            [
              927.319,
              394.946
            ],
            [
              936.035,
              388.718
            ]
          ]
        ],
        "group": "Random",
        "color": "#a9cbe5"
      },
      {
        "id": "internal-wo_I-mean_cum_grad",
        "label": "w/o I · Cumulative gradient utility",
        "detail": "Solid line. Without informativeness, cumulative gradient utility lies between Random and VolumeProbe; the gap from VolumeProbe widens as the budget grows.",
        "kind": "line",
        "paths": [
          [
            [
              102.942,
              623.047
            ],
            [
              111.646,
              615.414
            ],
            [
              120.349,
              607.734
            ],
            [
              129.053,
              600.106
            ],
            [
              137.756,
              592.466
            ],
            [
              146.46,
              584.807
            ],
            [
              155.164,
              577.172
            ],
            [
              163.867,
              569.498
            ],
            [
              172.571,
              561.869
            ],
            [
              181.274,
              554.202
            ],
            [
              189.978,
              546.509
            ],
            [
              198.682,
              538.816
            ],
            [
              207.385,
              531.145
            ],
            [
              216.089,
              523.469
            ],
            [
              224.792,
              515.81
            ],
            [
              233.496,
              508.173
            ],
            [
              242.2,
              500.53
            ],
            [
              250.903,
              492.845
            ],
            [
              259.607,
              485.191
            ],
            [
              268.311,
              477.483
            ],
            [
              277.014,
              469.787
            ],
            [
              285.718,
              462.102
            ],
            [
              294.421,
              454.453
            ],
            [
              303.125,
              446.798
            ],
            [
              311.829,
              439.14
            ],
            [
              320.532,
              431.501
            ],
            [
              329.236,
              423.83
            ],
            [
              337.939,
              416.168
            ],
            [
              346.643,
              408.511
            ],
            [
              355.347,
              400.815
            ],
            [
              364.05,
              393.179
            ],
            [
              372.754,
              385.556
            ],
            [
              381.458,
              377.894
            ],
            [
              390.161,
              370.211
            ],
            [
              398.865,
              362.568
            ],
            [
              407.568,
              354.929
            ],
            [
              416.272,
              347.291
            ],
            [
              424.976,
              339.62
            ],
            [
              433.679,
              331.937
            ],
            [
              442.383,
              324.29
            ]
          ]
        ],
        "group": "w/o I",
        "color": "#8096c9"
      },
      {
        "id": "internal-wo_I-mean_cum_entropy",
        "label": "w/o I · Cumulative entropy utility",
        "detail": "Dashed line. Without informativeness, cumulative entropy utility lies between Random and VolumeProbe; the gap from VolumeProbe widens as the budget grows.",
        "kind": "line",
        "paths": [
          [
            [
              102.942,
              621.388
            ],
            [
              111.646,
              612.097
            ],
            [
              120.349,
              602.738
            ],
            [
              129.053,
              593.448
            ],
            [
              137.756,
              584.128
            ],
            [
              146.46,
              574.778
            ],
            [
              155.164,
              565.469
            ],
            [
              163.867,
              556.113
            ],
            [
              172.571,
              546.803
            ],
            [
              181.274,
              537.458
            ],
            [
              189.978,
              528.076
            ],
            [
              198.682,
              518.723
            ],
            [
              207.385,
              509.403
            ],
            [
              216.089,
              500.066
            ],
            [
              224.792,
              490.728
            ],
            [
              233.496,
              481.412
            ],
            [
              242.2,
              472.113
            ],
            [
              250.903,
              462.781
            ],
            [
              259.607,
              453.432
            ],
            [
              268.311,
              444.058
            ],
            [
              277.014,
              434.728
            ],
            [
              285.718,
              425.359
            ],
            [
              294.421,
              416.053
            ],
            [
              303.125,
              406.726
            ],
            [
              311.829,
              397.388
            ],
            [
              320.532,
              388.07
            ],
            [
              329.236,
              378.711
            ],
            [
              337.939,
              369.338
            ],
            [
              346.643,
              359.997
            ],
            [
              355.347,
              350.662
            ],
            [
              364.05,
              341.363
            ],
            [
              372.754,
              332.046
            ],
            [
              381.458,
              322.733
            ],
            [
              390.161,
              313.409
            ],
            [
              398.865,
              304.084
            ],
            [
              407.568,
              294.767
            ],
            [
              416.272,
              285.446
            ],
            [
              424.976,
              276.118
            ],
            [
              433.679,
              266.776
            ],
            [
              442.383,
              257.443
            ]
          ]
        ],
        "group": "w/o I",
        "color": "#8096c9"
      },
      {
        "id": "anatomy-wo_I-mean_cum_unique_organs",
        "label": "w/o I · Cumulative unique-organ count",
        "detail": "Solid line. The informativeness ablation reaches more unique organs than Random, but remains below VolumeProbe as the observation budget grows.",
        "kind": "line",
        "paths": [
          [
            [
              596.118,
              553.935
            ],
            [
              604.834,
              508.042
            ],
            [
              613.55,
              473.172
            ],
            [
              622.266,
              444.475
            ],
            [
              630.981,
              419.616
            ],
            [
              639.697,
              398.233
            ],
            [
              648.413,
              380.524
            ],
            [
              657.129,
              366.787
            ],
            [
              665.845,
              352.344
            ],
            [
              674.561,
              338.842
            ],
            [
              683.276,
              328.945
            ],
            [
              691.992,
              320.165
            ],
            [
              700.708,
              312.614
            ],
            [
              709.424,
              304.537
            ],
            [
              718.14,
              297.159
            ],
            [
              726.855,
              290.341
            ],
            [
              735.571,
              284.061
            ],
            [
              744.287,
              277.956
            ],
            [
              753.003,
              272.707
            ],
            [
              761.719,
              269.062
            ],
            [
              770.435,
              264.936
            ],
            [
              779.15,
              261.879
            ],
            [
              787.866,
              259.007
            ],
            [
              796.582,
              255.785
            ],
            [
              805.298,
              252.01
            ],
            [
              814.014,
              250.052
            ],
            [
              822.729,
              247.238
            ],
            [
              831.445,
              244.121
            ],
            [
              840.161,
              241.599
            ],
            [
              848.877,
              239.237
            ],
            [
              857.593,
              236.616
            ],
            [
              866.309,
              233.962
            ],
            [
              875.024,
              230.878
            ],
            [
              883.74,
              227.66
            ],
            [
              892.456,
              224.471
            ],
            [
              901.172,
              221.672
            ],
            [
              909.888,
              218.847
            ],
            [
              918.604,
              216.041
            ],
            [
              927.319,
              214.058
            ],
            [
              936.035,
              211.77
            ]
          ]
        ],
        "group": "w/o I",
        "color": "#8096c9"
      },
      {
        "id": "anatomy-wo_I-mean_cum_any_organ_hits",
        "label": "w/o I · Cumulative any-organ hits",
        "detail": "Dashed line. The informativeness ablation accumulates any-organ hits faster than Random and more slowly than VolumeProbe.",
        "kind": "line",
        "paths": [
          [
            [
              596.118,
              624.791
            ],
            [
              604.834,
              617.558
            ],
            [
              613.55,
              609.488
            ],
            [
              622.266,
              602.714
            ],
            [
              630.981,
              594.846
            ],
            [
              639.697,
              590.081
            ],
            [
              648.413,
              585.311
            ],
            [
              657.129,
              578.115
            ],
            [
              665.845,
              571.61
            ],
            [
              674.561,
              565.118
            ],
            [
              683.276,
              558.135
            ],
            [
              691.992,
              551.103
            ],
            [
              700.708,
              544.133
            ],
            [
              709.424,
              536.366
            ],
            [
              718.14,
              526.381
            ],
            [
              726.855,
              518.626
            ],
            [
              735.571,
              511.688
            ],
            [
              744.287,
              505.472
            ],
            [
              753.003,
              499.149
            ],
            [
              761.719,
              493.071
            ],
            [
              770.435,
              485.197
            ],
            [
              779.15,
              478.171
            ],
            [
              787.866,
              471.974
            ],
            [
              796.582,
              466.525
            ],
            [
              805.298,
              460.246
            ],
            [
              814.014,
              453.936
            ],
            [
              822.729,
              447.676
            ],
            [
              831.445,
              440.757
            ],
            [
              840.161,
              435.251
            ],
            [
              848.877,
              429.845
            ],
            [
              857.593,
              423.51
            ],
            [
              866.309,
              416.531
            ],
            [
              875.024,
              410.425
            ],
            [
              883.74,
              404.153
            ],
            [
              892.456,
              397.93
            ],
            [
              901.172,
              391.708
            ],
            [
              909.888,
              384.72
            ],
            [
              918.604,
              377.788
            ],
            [
              927.319,
              370.824
            ],
            [
              936.035,
              364.596
            ]
          ]
        ],
        "group": "w/o I",
        "color": "#8096c9"
      },
      {
        "id": "internal-VP-Full-mean_cum_grad",
        "label": "VolumeProbe (Ours) · Cumulative gradient utility",
        "detail": "Solid line. VolumeProbe shows the strongest cumulative gradient utility, with a growing advantage over Random and the informativeness ablation.",
        "kind": "line",
        "paths": [
          [
            [
              102.942,
              620.607
            ],
            [
              111.646,
              610.556
            ],
            [
              120.349,
              600.501
            ],
            [
              129.053,
              590.47
            ],
            [
              137.756,
              580.446
            ],
            [
              146.46,
              570.454
            ],
            [
              155.164,
              560.427
            ],
            [
              163.867,
              550.445
            ],
            [
              172.571,
              540.434
            ],
            [
              181.274,
              530.442
            ],
            [
              189.978,
              520.417
            ],
            [
              198.682,
              510.416
            ],
            [
              207.385,
              500.436
            ],
            [
              216.089,
              490.416
            ],
            [
              224.792,
              480.437
            ],
            [
              233.496,
              470.445
            ],
            [
              242.2,
              460.473
            ],
            [
              250.903,
              450.481
            ],
            [
              259.607,
              440.485
            ],
            [
              268.311,
              430.492
            ],
            [
              277.014,
              420.526
            ],
            [
              285.718,
              410.542
            ],
            [
              294.421,
              400.576
            ],
            [
              303.125,
              390.615
            ],
            [
              311.829,
              380.594
            ],
            [
              320.532,
              370.606
            ],
            [
              329.236,
              360.608
            ],
            [
              337.939,
              350.618
            ],
            [
              346.643,
              340.62
            ],
            [
              355.347,
              330.629
            ],
            [
              364.05,
              320.655
            ],
            [
              372.754,
              310.676
            ],
            [
              381.458,
              300.688
            ],
            [
              390.161,
              290.733
            ],
            [
              398.865,
              280.765
            ],
            [
              407.568,
              270.783
            ],
            [
              416.272,
              260.823
            ],
            [
              424.976,
              250.791
            ],
            [
              433.679,
              240.8
            ],
            [
              442.383,
              230.775
            ]
          ]
        ],
        "group": "VolumeProbe (Ours)",
        "color": "#6d6ab6"
      },
      {
        "id": "internal-VP-Full-mean_cum_entropy",
        "label": "VolumeProbe (Ours) · Cumulative entropy utility",
        "detail": "Dashed line. VolumeProbe shows the strongest cumulative entropy utility, with a growing advantage over Random and the informativeness ablation.",
        "kind": "line",
        "paths": [
          [
            [
              102.942,
              619.266
            ],
            [
              111.646,
              607.861
            ],
            [
              120.349,
              596.428
            ],
            [
              129.053,
              585.024
            ],
            [
              137.756,
              573.617
            ],
            [
              146.46,
              562.225
            ],
            [
              155.164,
              550.837
            ],
            [
              163.867,
              539.439
            ],
            [
              172.571,
              528.059
            ],
            [
              181.274,
              516.686
            ],
            [
              189.978,
              505.292
            ],
            [
              198.682,
              493.931
            ],
            [
              207.385,
              482.54
            ],
            [
              216.089,
              471.18
            ],
            [
              224.792,
              459.804
            ],
            [
              233.496,
              448.428
            ],
            [
              242.2,
              437.042
            ],
            [
              250.903,
              425.677
            ],
            [
              259.607,
              414.3
            ],
            [
              268.311,
              402.933
            ],
            [
              277.014,
              391.564
            ],
            [
              285.718,
              380.214
            ],
            [
              294.421,
              368.847
            ],
            [
              303.125,
              357.494
            ],
            [
              311.829,
              346.133
            ],
            [
              320.532,
              334.787
            ],
            [
              329.236,
              323.405
            ],
            [
              337.939,
              312.014
            ],
            [
              346.643,
              300.642
            ],
            [
              355.347,
              289.266
            ],
            [
              364.05,
              277.89
            ],
            [
              372.754,
              266.501
            ],
            [
              381.458,
              255.104
            ],
            [
              390.161,
              243.723
            ],
            [
              398.865,
              232.348
            ],
            [
              407.568,
              220.969
            ],
            [
              416.272,
              209.603
            ],
            [
              424.976,
              198.24
            ],
            [
              433.679,
              186.869
            ],
            [
              442.383,
              175.457
            ]
          ]
        ],
        "group": "VolumeProbe (Ours)",
        "color": "#6d6ab6"
      },
      {
        "id": "anatomy-VP-Full-mean_cum_unique_organs",
        "label": "VolumeProbe (Ours) · Cumulative unique-organ count",
        "detail": "Solid line. VolumeProbe reaches the highest cumulative unique-organ count, with an early lead that persists across the shown budgets.",
        "kind": "line",
        "paths": [
          [
            [
              596.118,
              508.225
            ],
            [
              604.834,
              459.334
            ],
            [
              613.55,
              419.525
            ],
            [
              622.266,
              389.688
            ],
            [
              630.981,
              365.16
            ],
            [
              639.697,
              343.022
            ],
            [
              648.413,
              323.996
            ],
            [
              657.129,
              309.271
            ],
            [
              665.845,
              298.356
            ],
            [
              674.561,
              289.865
            ],
            [
              683.276,
              282.541
            ],
            [
              691.992,
              275.715
            ],
            [
              700.708,
              269.48
            ],
            [
              709.424,
              263.756
            ],
            [
              718.14,
              257.842
            ],
            [
              726.855,
              251.626
            ],
            [
              735.571,
              245.773
            ],
            [
              744.287,
              240.481
            ],
            [
              753.003,
              235.28
            ],
            [
              761.719,
              229.879
            ],
            [
              770.435,
              224.635
            ],
            [
              779.15,
              220.023
            ],
            [
              787.866,
              215.955
            ],
            [
              796.582,
              212.103
            ],
            [
              805.298,
              208.504
            ],
            [
              814.014,
              205.3
            ],
            [
              822.729,
              202.295
            ],
            [
              831.445,
              199.314
            ],
            [
              840.161,
              196.529
            ],
            [
              848.877,
              193.934
            ],
            [
              857.593,
              191.215
            ],
            [
              866.309,
              188.179
            ],
            [
              875.024,
              184.762
            ],
            [
              883.74,
              181.026
            ],
            [
              892.456,
              177.293
            ],
            [
              901.172,
              173.758
            ],
            [
              909.888,
              170.34
            ],
            [
              918.604,
              167.175
            ],
            [
              927.319,
              164.443
            ],
            [
              936.035,
              161.951
            ]
          ]
        ],
        "group": "VolumeProbe (Ours)",
        "color": "#6d6ab6"
      },
      {
        "id": "anatomy-VP-Full-mean_cum_any_organ_hits",
        "label": "VolumeProbe (Ours) · Cumulative any-organ hits",
        "detail": "Dashed line. VolumeProbe accumulates any-organ hits fastest, producing the steepest dashed curve in this panel.",
        "kind": "line",
        "paths": [
          [
            [
              596.118,
              623.174
            ],
            [
              604.834,
              615.642
            ],
            [
              613.55,
              608.116
            ],
            [
              622.266,
              600.578
            ],
            [
              630.981,
              593.047
            ],
            [
              639.697,
              585.509
            ],
            [
              648.413,
              577.97
            ],
            [
              657.129,
              570.432
            ],
            [
              665.845,
              562.894
            ],
            [
              674.561,
              555.356
            ],
            [
              683.276,
              547.818
            ],
            [
              691.992,
              540.287
            ],
            [
              700.708,
              532.755
            ],
            [
              709.424,
              525.217
            ],
            [
              718.14,
              517.679
            ],
            [
              726.855,
              510.147
            ],
            [
              735.571,
              502.609
            ],
            [
              744.287,
              495.077
            ],
            [
              753.003,
              487.539
            ],
            [
              761.719,
              480.007
            ],
            [
              770.435,
              472.476
            ],
            [
              779.15,
              464.944
            ],
            [
              787.866,
              457.418
            ],
            [
              796.582,
              449.887
            ],
            [
              805.298,
              442.355
            ],
            [
              814.014,
              434.829
            ],
            [
              822.729,
              427.297
            ],
            [
              831.445,
              419.759
            ],
            [
              840.161,
              412.228
            ],
            [
              848.877,
              404.69
            ],
            [
              857.593,
              397.158
            ],
            [
              866.309,
              389.626
            ],
            [
              875.024,
              382.088
            ],
            [
              883.74,
              374.55
            ],
            [
              892.456,
              367.012
            ],
            [
              901.172,
              359.48
            ],
            [
              909.888,
              351.942
            ],
            [
              918.604,
              344.41
            ],
            [
              927.319,
              336.885
            ],
            [
              936.035,
              329.347
            ]
          ]
        ],
        "group": "VolumeProbe (Ours)",
        "color": "#6d6ab6"
      }
    ]
  },
  "analysisDiversity": {
    "figure": 7,
    "width": 2385,
    "height": 1065,
    "intro": "VolumeProbe increases spatial coverage while reducing repeated observations.",
    "shadeRects": [
      [
        110.84,
        124.59,
        377.93,
        690.71
      ],
      [
        610.352,
        124.59,
        376.953,
        690.71
      ]
    ],
    "regions": [
      {
        "id": "coverage-Random",
        "label": "Random · Coverage growth",
        "detail": "Random coverage grows with the candidate budget. At larger budgets it lies above the diversity ablation and below VolumeProbe.",
        "kind": "line",
        "paths": [
          [
            [
              127.441,
              748.042
            ],
            [
              150.391,
              687.363
            ],
            [
              173.34,
              633.522
            ],
            [
              196.289,
              586.615
            ],
            [
              219.238,
              545.545
            ],
            [
              242.188,
              510.207
            ],
            [
              265.137,
              478.495
            ],
            [
              288.086,
              450.62
            ],
            [
              311.035,
              425.519
            ],
            [
              333.984,
              403.129
            ],
            [
              356.934,
              383.513
            ],
            [
              379.883,
              366.347
            ],
            [
              402.832,
              351.308
            ],
            [
              425.781,
              337.747
            ],
            [
              448.73,
              325.672
            ],
            [
              471.68,
              314.942
            ]
          ]
        ],
        "group": "Random",
        "color": "#a9cbe5",
        "hitRects": [
          [
            317.383,
            587.978,
            152.832,
            53.552
          ]
        ]
      },
      {
        "id": "redundancy-Random",
        "label": "Random · Redundancy distribution",
        "detail": "Random has an intermediate same-bin candidate ratio: its distribution is centered below the diversity ablation and above VolumeProbe.",
        "rect": [
          632.812,
          239.344,
          96.191,
          415.301
        ],
        "kind": "region",
        "group": "Random"
      },
      {
        "id": "coverage-w/o D",
        "label": "w/o D · Coverage growth",
        "detail": "Removing diversity produces the lowest coverage curve as the budget grows: additional candidates span fewer new spatial bins.",
        "kind": "line",
        "paths": [
          [
            [
              127.441,
              748.042
            ],
            [
              150.391,
              695.031
            ],
            [
              173.34,
              657.517
            ],
            [
              196.289,
              627.657
            ],
            [
              219.238,
              603.049
            ],
            [
              242.188,
              581.877
            ],
            [
              265.137,
              562.373
            ],
            [
              288.086,
              544.257
            ],
            [
              311.035,
              527.204
            ],
            [
              333.984,
              511.263
            ],
            [
              356.934,
              495.569
            ],
            [
              379.883,
              480.347
            ],
            [
              402.832,
              466.117
            ],
            [
              425.781,
              451.908
            ],
            [
              448.73,
              438.214
            ],
            [
              471.68,
              425.308
            ]
          ]
        ],
        "group": "w/o D",
        "color": "#8096c9",
        "hitRects": [
          [
            317.383,
            654.645,
            152.832,
            53.552
          ]
        ]
      },
      {
        "id": "redundancy-w/o D",
        "label": "w/o D · Redundancy distribution",
        "detail": "Removing diversity shifts the same-bin candidate ratios higher, showing more repetition within the candidate bank.",
        "rect": [
          758.789,
          239.344,
          96.68,
          419.672
        ],
        "kind": "region",
        "group": "w/o D"
      },
      {
        "id": "coverage-VP-full",
        "label": "VolumeProbe (Ours) · Coverage growth",
        "detail": "VolumeProbe coverage grows the most and reaches the highest level at the largest shown candidate budget.",
        "kind": "line",
        "paths": [
          [
            [
              127.441,
              748.042
            ],
            [
              150.391,
              687.356
            ],
            [
              173.34,
              634.359
            ],
            [
              196.289,
              587.671
            ],
            [
              219.238,
              544.151
            ],
            [
              242.188,
              504.68
            ],
            [
              265.137,
              468.307
            ],
            [
              288.086,
              436.496
            ],
            [
              311.035,
              406.988
            ],
            [
              333.984,
              377.479
            ],
            [
              356.934,
              348.541
            ],
            [
              379.883,
              320.962
            ],
            [
              402.832,
              294.615
            ],
            [
              425.781,
              270.098
            ],
            [
              448.73,
              246.004
            ],
            [
              471.68,
              223.699
            ]
          ]
        ],
        "group": "VolumeProbe (Ours)",
        "color": "#6d6ab6",
        "hitRects": [
          [
            317.383,
            722.404,
            152.832,
            53.552
          ]
        ]
      },
      {
        "id": "redundancy-VP-full",
        "label": "VolumeProbe (Ours) · Redundancy distribution",
        "detail": "VolumeProbe shifts the same-bin candidate ratios lower, showing less repetition within the candidate bank.",
        "rect": [
          883.789,
          406.557,
          97.656,
          374.863
        ],
        "kind": "region",
        "group": "VolumeProbe (Ours)"
      }
    ]
  },
  "analysisAssociation": {
    "figure": 9,
    "width": 4389,
    "height": 4077,
    "intro": "Sampling diagnostics and downstream Mean Dice across strategies. The bottom row reports Spearman correlations; joint rank has the strongest association with Mean Dice.",
    "regions": [
      {
        "id": "metric-0-0",
        "label": "Random · Organ occupancy (%)",
        "detail": "Reported value: 19.79%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          83.828,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Random"
      },
      {
        "id": "metric-0-1",
        "label": "Random · Internal utility @40",
        "detail": "Reported value: 11.36. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          83.828,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Random"
      },
      {
        "id": "metric-0-2",
        "label": "Random · Coverage @15",
        "detail": "Reported value: 0.226. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          83.828,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Random"
      },
      {
        "id": "metric-0-3",
        "label": "Random · Joint rank",
        "detail": "Reported value: 0.233. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          83.828,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Random"
      },
      {
        "id": "metric-0-4",
        "label": "Random · Mean Dice (%)",
        "detail": "Reported value: 84.12%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          83.828,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Random"
      },
      {
        "id": "metric-1-0",
        "label": "Center-Biased · Organ occupancy (%)",
        "detail": "Reported value: 34.61%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          165.875,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Center-Biased"
      },
      {
        "id": "metric-1-1",
        "label": "Center-Biased · Internal utility @40",
        "detail": "Reported value: 19.69. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          165.875,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Center-Biased"
      },
      {
        "id": "metric-1-2",
        "label": "Center-Biased · Coverage @15",
        "detail": "Reported value: 0.186. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          165.875,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Center-Biased"
      },
      {
        "id": "metric-1-3",
        "label": "Center-Biased · Joint rank",
        "detail": "Reported value: 0.400. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          165.875,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Center-Biased"
      },
      {
        "id": "metric-1-4",
        "label": "Center-Biased · Mean Dice (%)",
        "detail": "Reported value: 84.35%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          165.875,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Center-Biased"
      },
      {
        "id": "metric-2-0",
        "label": "Uniform-Grid · Organ occupancy (%)",
        "detail": "Reported value: 28.57%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          247.921,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Uniform-Grid"
      },
      {
        "id": "metric-2-1",
        "label": "Uniform-Grid · Internal utility @40",
        "detail": "Reported value: 17.68. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          247.921,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Uniform-Grid"
      },
      {
        "id": "metric-2-2",
        "label": "Uniform-Grid · Coverage @15",
        "detail": "Reported value: 0.292. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          247.921,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Uniform-Grid"
      },
      {
        "id": "metric-2-3",
        "label": "Uniform-Grid · Joint rank",
        "detail": "Reported value: 0.467. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          247.921,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Uniform-Grid"
      },
      {
        "id": "metric-2-4",
        "label": "Uniform-Grid · Mean Dice (%)",
        "detail": "Reported value: 84.98%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          247.921,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Uniform-Grid"
      },
      {
        "id": "metric-3-0",
        "label": "Grad-Only · Organ occupancy (%)",
        "detail": "Reported value: 32.90%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          329.967,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Grad-Only"
      },
      {
        "id": "metric-3-1",
        "label": "Grad-Only · Internal utility @40",
        "detail": "Reported value: 26.14. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          329.967,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Grad-Only"
      },
      {
        "id": "metric-3-2",
        "label": "Grad-Only · Coverage @15",
        "detail": "Reported value: 0.127. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          329.967,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Grad-Only"
      },
      {
        "id": "metric-3-3",
        "label": "Grad-Only · Joint rank",
        "detail": "Reported value: 0.367. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          329.967,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Grad-Only"
      },
      {
        "id": "metric-3-4",
        "label": "Grad-Only · Mean Dice (%)",
        "detail": "Reported value: 84.05%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          329.967,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Grad-Only"
      },
      {
        "id": "metric-4-0",
        "label": "Entropy-Only · Organ occupancy (%)",
        "detail": "Reported value: 36.08%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          412.013,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Entropy-Only"
      },
      {
        "id": "metric-4-1",
        "label": "Entropy-Only · Internal utility @40",
        "detail": "Reported value: 25.72. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          412.013,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Entropy-Only"
      },
      {
        "id": "metric-4-2",
        "label": "Entropy-Only · Coverage @15",
        "detail": "Reported value: 0.134. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          412.013,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Entropy-Only"
      },
      {
        "id": "metric-4-3",
        "label": "Entropy-Only · Joint rank",
        "detail": "Reported value: 0.433. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          412.013,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Entropy-Only"
      },
      {
        "id": "metric-4-4",
        "label": "Entropy-Only · Mean Dice (%)",
        "detail": "Reported value: 84.04%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          412.013,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "Entropy-Only"
      },
      {
        "id": "metric-5-0",
        "label": "w/o A · Organ occupancy (%)",
        "detail": "Reported value: 31.40%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          494.059,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o A"
      },
      {
        "id": "metric-5-1",
        "label": "w/o A · Internal utility @40",
        "detail": "Reported value: 31.27. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          494.059,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o A"
      },
      {
        "id": "metric-5-2",
        "label": "w/o A · Coverage @15",
        "detail": "Reported value: 0.243. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          494.059,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o A"
      },
      {
        "id": "metric-5-3",
        "label": "w/o A · Joint rank",
        "detail": "Reported value: 0.600. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          494.059,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o A"
      },
      {
        "id": "metric-5-4",
        "label": "w/o A · Mean Dice (%)",
        "detail": "Reported value: 84.43%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          494.059,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o A"
      },
      {
        "id": "metric-6-0",
        "label": "w/o I · Organ occupancy (%)",
        "detail": "Reported value: 41.93%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          576.106,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o I"
      },
      {
        "id": "metric-6-1",
        "label": "w/o I · Internal utility @40",
        "detail": "Reported value: 22.95. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          576.106,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o I"
      },
      {
        "id": "metric-6-2",
        "label": "w/o I · Coverage @15",
        "detail": "Reported value: 0.266. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          576.106,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o I"
      },
      {
        "id": "metric-6-3",
        "label": "w/o I · Joint rank",
        "detail": "Reported value: 0.600. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          576.106,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o I"
      },
      {
        "id": "metric-6-4",
        "label": "w/o I · Mean Dice (%)",
        "detail": "Reported value: 84.93%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          576.106,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o I"
      },
      {
        "id": "metric-7-0",
        "label": "w/o D · Organ occupancy (%)",
        "detail": "Reported value: 44.76%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          658.152,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o D"
      },
      {
        "id": "metric-7-1",
        "label": "w/o D · Internal utility @40",
        "detail": "Reported value: 31.76. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          658.152,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o D"
      },
      {
        "id": "metric-7-2",
        "label": "w/o D · Coverage @15",
        "detail": "Reported value: 0.176. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          658.152,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o D"
      },
      {
        "id": "metric-7-3",
        "label": "w/o D · Joint rank",
        "detail": "Reported value: 0.700. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          658.152,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o D"
      },
      {
        "id": "metric-7-4",
        "label": "w/o D · Mean Dice (%)",
        "detail": "Reported value: 85.44%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          658.152,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "w/o D"
      },
      {
        "id": "metric-8-0",
        "label": "VolumeProbe-Feat · Organ occupancy (%)",
        "detail": "Reported value: 44.92%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          740.198,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Feat"
      },
      {
        "id": "metric-8-1",
        "label": "VolumeProbe-Feat · Internal utility @40",
        "detail": "Reported value: 28.74. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          740.198,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Feat"
      },
      {
        "id": "metric-8-2",
        "label": "VolumeProbe-Feat · Coverage @15",
        "detail": "Reported value: 0.269. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          740.198,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Feat"
      },
      {
        "id": "metric-8-3",
        "label": "VolumeProbe-Feat · Joint rank",
        "detail": "Reported value: 0.833. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          740.198,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Feat"
      },
      {
        "id": "metric-8-4",
        "label": "VolumeProbe-Feat · Mean Dice (%)",
        "detail": "Reported value: 85.34%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          740.198,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Feat"
      },
      {
        "id": "metric-9-0",
        "label": "VolumeProbe-Lite · Organ occupancy (%)",
        "detail": "Reported value: 45.71%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          271.446,
          822.244,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Lite"
      },
      {
        "id": "metric-9-1",
        "label": "VolumeProbe-Lite · Internal utility @40",
        "detail": "Reported value: 29.96. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          415.441,
          822.244,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Lite"
      },
      {
        "id": "metric-9-2",
        "label": "VolumeProbe-Lite · Coverage @15",
        "detail": "Reported value: 0.267. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          559.436,
          822.244,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Lite"
      },
      {
        "id": "metric-9-3",
        "label": "VolumeProbe-Lite · Joint rank",
        "detail": "Reported value: 0.867. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          703.431,
          822.244,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Lite"
      },
      {
        "id": "metric-9-4",
        "label": "VolumeProbe-Lite · Mean Dice (%)",
        "detail": "Reported value: 85.68%. Colors are normalized separately within each metric column; compare numeric values within the same column.",
        "rect": [
          847.426,
          822.244,
          143.995,
          82.046
        ],
        "kind": "cell",
        "group": "VolumeProbe-Lite"
      },
      {
        "id": "correlation-0",
        "label": "Organ occupancy (%) · Spearman correlation",
        "detail": "Spearman ρ with Mean Dice: 0.600. This is the correlation reported in the figure.",
        "rect": [
          271.446,
          911.551,
          143.995,
          79.868
        ],
        "kind": "cell",
        "group": "Spearman correlation"
      },
      {
        "id": "correlation-1",
        "label": "Internal utility @40 · Spearman correlation",
        "detail": "Spearman ρ with Mean Dice: 0.467. This is the correlation reported in the figure.",
        "rect": [
          415.441,
          911.551,
          143.995,
          79.868
        ],
        "kind": "cell",
        "group": "Spearman correlation"
      },
      {
        "id": "correlation-2",
        "label": "Coverage @15 · Spearman correlation",
        "detail": "Spearman ρ with Mean Dice: 0.648. This is the correlation reported in the figure.",
        "rect": [
          559.436,
          911.551,
          143.995,
          79.868
        ],
        "kind": "cell",
        "group": "Spearman correlation"
      },
      {
        "id": "correlation-3",
        "label": "Joint rank · Spearman correlation",
        "detail": "Spearman ρ with Mean Dice: 0.863. This is the correlation reported in the figure.",
        "rect": [
          703.431,
          911.551,
          143.995,
          79.868
        ],
        "kind": "cell",
        "group": "Spearman correlation"
      },
      {
        "id": "correlation-4",
        "label": "Mean Dice (%) · Spearman correlation",
        "detail": "The figure leaves the correlation of Mean Dice with itself unreported (—).",
        "rect": [
          847.426,
          911.551,
          143.995,
          79.868
        ],
        "kind": "cell",
        "group": "Spearman correlation"
      }
    ]
  },
  "analysisLearning": {
    "figure": 8,
    "width": 2826,
    "height": 1273,
    "intro": "Early learning curves, representation diversity, and feature responses across training checkpoints. Rows align the same input across sampling methods and training steps.",
    "shadeRects": [
      [
        71.777,
        62.839,
        284.18,
        340.195
      ],
      [
        49.316,
        628.386,
        136.23,
        295.775
      ],
      [
        238.77,
        628.386,
        136.23,
        295.775
      ]
    ],
    "regions": [
      {
        "id": "loss-random",
        "label": "Random · Early-epoch loss",
        "detail": "After an initial dip, Random loss rises before falling; it remains above VolumeProbe through the later shown training steps.",
        "kind": "line",
        "paths": [
          [
            [
              84.473,
              101.842
            ],
            [
              96.191,
              127.844
            ],
            [
              109.375,
              106.176
            ],
            [
              122.559,
              82.34
            ],
            [
              135.742,
              73.673
            ],
            [
              148.926,
              92.091
            ],
            [
              162.109,
              156.013
            ],
            [
              174.805,
              188.516
            ],
            [
              187.5,
              221.018
            ],
            [
              200.684,
              245.937
            ],
            [
              213.867,
              263.272
            ],
            [
              227.051,
              284.94
            ],
            [
              239.746,
              296.858
            ],
            [
              252.93,
              307.692
            ],
            [
              266.113,
              314.193
            ],
            [
              278.809,
              318.527
            ],
            [
              291.504,
              326.111
            ],
            [
              304.199,
              329.361
            ],
            [
              317.383,
              335.861
            ],
            [
              330.566,
              339.112
            ],
            [
              343.262,
              339.112
            ]
          ]
        ],
        "group": "Random",
        "color": "#87a3e1",
        "hitRects": [
          [
            229.492,
            78.007,
            118.652,
            33.586
          ]
        ],
        "maskWidth": 20
      },
      {
        "id": "loss-volumeprobe",
        "label": "VolumeProbe · Early-epoch loss",
        "detail": "VolumeProbe loss decreases earlier and remains below Random through the later shown steps, illustrating faster early learning.",
        "kind": "line",
        "paths": [
          [
            [
              84.473,
              101.842
            ],
            [
              96.191,
              174.431
            ],
            [
              109.375,
              199.35
            ],
            [
              122.559,
              230.769
            ],
            [
              135.742,
              265.439
            ],
            [
              148.926,
              289.274
            ],
            [
              162.109,
              317.443
            ],
            [
              174.805,
              332.611
            ],
            [
              187.5,
              343.445
            ],
            [
              200.684,
              352.113
            ],
            [
              213.867,
              358.613
            ],
            [
              227.051,
              366.197
            ],
            [
              239.746,
              369.447
            ],
            [
              252.93,
              374.865
            ],
            [
              266.113,
              377.031
            ],
            [
              278.809,
              380.282
            ],
            [
              291.504,
              382.449
            ],
            [
              304.199,
              383.532
            ],
            [
              317.383,
              384.615
            ],
            [
              330.566,
              386.782
            ],
            [
              343.262,
              388.949
            ]
          ]
        ],
        "group": "VolumeProbe",
        "color": "#7167b1",
        "hitRects": [
          [
            229.492,
            119.177,
            118.652,
            35.753
          ]
        ],
        "maskWidth": 20
      },
      {
        "id": "diversity-random",
        "label": "Random · Token cosine diversity",
        "detail": "Random token cosine diversity increases across the shown checkpoints, while remaining below VolumeProbe at each one.",
        "kind": "line",
        "paths": [
          [
            [
              54.688,
              882.99
            ],
            [
              117.188,
              854.821
            ],
            [
              179.688,
              763.814
            ]
          ]
        ],
        "group": "Random",
        "color": "#87a3e1",
        "maskWidth": 20
      },
      {
        "id": "diversity-volumeprobe",
        "label": "VolumeProbe · Token cosine diversity",
        "detail": "VolumeProbe has higher token cosine diversity than Random at all three shown checkpoints; both methods increase over training.",
        "kind": "line",
        "paths": [
          [
            [
              54.688,
              862.405
            ],
            [
              117.188,
              816.901
            ],
            [
              179.688,
              705.309
            ]
          ]
        ],
        "group": "VolumeProbe",
        "color": "#7167b1",
        "maskWidth": 20
      },
      {
        "id": "rank-random",
        "label": "Random · Effective rank",
        "detail": "Random effective rank increases across the shown checkpoints, while remaining below VolumeProbe at each one.",
        "kind": "line",
        "paths": [
          [
            [
              243.652,
              899.242
            ],
            [
              306.152,
              834.236
            ],
            [
              369.141,
              745.395
            ]
          ]
        ],
        "group": "Random",
        "color": "#87a3e1",
        "maskWidth": 20
      },
      {
        "id": "rank-volumeprobe",
        "label": "VolumeProbe · Effective rank",
        "detail": "VolumeProbe has higher effective rank than Random at all three shown checkpoints; both methods increase over training.",
        "kind": "line",
        "paths": [
          [
            [
              243.652,
              887.324
            ],
            [
              306.152,
              763.814
            ],
            [
              369.141,
              684.724
            ]
          ]
        ],
        "group": "VolumeProbe",
        "color": "#7167b1",
        "maskWidth": 20
      },
      {
        "id": "feature-0-input",
        "label": "Example 1 · Input",
        "detail": "Input CT crop for example 1. Compare the same row across methods and checkpoints.",
        "rect": [
          402.344,
          195.016,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 1"
      },
      {
        "id": "feature-0-5k-random",
        "label": "Example 1 · Random · 5k steps",
        "detail": "Random feature response for example 1 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          485.352,
          195.016,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 1"
      },
      {
        "id": "feature-0-5k-vp",
        "label": "Example 1 · VolumeProbe · 5k steps",
        "detail": "VolumeProbe feature response for example 1 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          563.965,
          195.016,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 1"
      },
      {
        "id": "feature-0-10k-random",
        "label": "Example 1 · Random · 10k steps",
        "detail": "Random feature response for example 1 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          661.133,
          195.016,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 1"
      },
      {
        "id": "feature-0-10k-vp",
        "label": "Example 1 · VolumeProbe · 10k steps",
        "detail": "VolumeProbe feature response for example 1 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          739.258,
          195.016,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 1"
      },
      {
        "id": "feature-0-20k-random",
        "label": "Example 1 · Random · 20k steps",
        "detail": "Random feature response for example 1 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          833.496,
          195.016,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 1"
      },
      {
        "id": "feature-0-20k-vp",
        "label": "Example 1 · VolumeProbe · 20k steps",
        "detail": "VolumeProbe feature response for example 1 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          911.133,
          195.016,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 1"
      },
      {
        "id": "feature-1-input",
        "label": "Example 2 · Input",
        "detail": "Input CT crop for example 2. Compare the same row across methods and checkpoints.",
        "rect": [
          402.344,
          365.114,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 2"
      },
      {
        "id": "feature-1-5k-random",
        "label": "Example 2 · Random · 5k steps",
        "detail": "Random feature response for example 2 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          485.352,
          365.114,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 2"
      },
      {
        "id": "feature-1-5k-vp",
        "label": "Example 2 · VolumeProbe · 5k steps",
        "detail": "VolumeProbe feature response for example 2 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          563.965,
          365.114,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 2"
      },
      {
        "id": "feature-1-10k-random",
        "label": "Example 2 · Random · 10k steps",
        "detail": "Random feature response for example 2 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          661.133,
          365.114,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 2"
      },
      {
        "id": "feature-1-10k-vp",
        "label": "Example 2 · VolumeProbe · 10k steps",
        "detail": "VolumeProbe feature response for example 2 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          739.258,
          365.114,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 2"
      },
      {
        "id": "feature-1-20k-random",
        "label": "Example 2 · Random · 20k steps",
        "detail": "Random feature response for example 2 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          833.496,
          365.114,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 2"
      },
      {
        "id": "feature-1-20k-vp",
        "label": "Example 2 · VolumeProbe · 20k steps",
        "detail": "VolumeProbe feature response for example 2 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          911.133,
          365.114,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 2"
      },
      {
        "id": "feature-2-input",
        "label": "Example 3 · Input",
        "detail": "Input CT crop for example 3. Compare the same row across methods and checkpoints.",
        "rect": [
          402.344,
          534.128,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 3"
      },
      {
        "id": "feature-2-5k-random",
        "label": "Example 3 · Random · 5k steps",
        "detail": "Random feature response for example 3 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          485.352,
          534.128,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 3"
      },
      {
        "id": "feature-2-5k-vp",
        "label": "Example 3 · VolumeProbe · 5k steps",
        "detail": "VolumeProbe feature response for example 3 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          563.965,
          534.128,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 3"
      },
      {
        "id": "feature-2-10k-random",
        "label": "Example 3 · Random · 10k steps",
        "detail": "Random feature response for example 3 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          661.133,
          534.128,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 3"
      },
      {
        "id": "feature-2-10k-vp",
        "label": "Example 3 · VolumeProbe · 10k steps",
        "detail": "VolumeProbe feature response for example 3 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          739.258,
          534.128,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 3"
      },
      {
        "id": "feature-2-20k-random",
        "label": "Example 3 · Random · 20k steps",
        "detail": "Random feature response for example 3 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          833.496,
          534.128,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 3"
      },
      {
        "id": "feature-2-20k-vp",
        "label": "Example 3 · VolumeProbe · 20k steps",
        "detail": "VolumeProbe feature response for example 3 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          911.133,
          534.128,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 3"
      },
      {
        "id": "feature-3-input",
        "label": "Example 4 · Input",
        "detail": "Input CT crop for example 4. Compare the same row across methods and checkpoints.",
        "rect": [
          402.344,
          700.975,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 4"
      },
      {
        "id": "feature-3-5k-random",
        "label": "Example 4 · Random · 5k steps",
        "detail": "Random feature response for example 4 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          485.352,
          700.975,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 4"
      },
      {
        "id": "feature-3-5k-vp",
        "label": "Example 4 · VolumeProbe · 5k steps",
        "detail": "VolumeProbe feature response for example 4 at 5k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          563.965,
          700.975,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 4"
      },
      {
        "id": "feature-3-10k-random",
        "label": "Example 4 · Random · 10k steps",
        "detail": "Random feature response for example 4 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          661.133,
          700.975,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 4"
      },
      {
        "id": "feature-3-10k-vp",
        "label": "Example 4 · VolumeProbe · 10k steps",
        "detail": "VolumeProbe feature response for example 4 at 10k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          739.258,
          700.975,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 4"
      },
      {
        "id": "feature-3-20k-random",
        "label": "Example 4 · Random · 20k steps",
        "detail": "Random feature response for example 4 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          833.496,
          700.975,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 4"
      },
      {
        "id": "feature-3-20k-vp",
        "label": "Example 4 · VolumeProbe · 20k steps",
        "detail": "VolumeProbe feature response for example 4 at 20k training steps. Compare with the input and the other method in the same row.",
        "rect": [
          911.133,
          700.975,
          70.312,
          156.013
        ],
        "kind": "tile",
        "group": "Example 4"
      }
    ]
  }
};
