TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_974CB095_9A6F_9FDD_4180_14A0737B405D",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 15.8,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 118,
           "class": "ImageResourceLevel",
           "width": 165,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -31.63
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6, this.camera_BD094E2D_A905_D055_41D8_C0081B5AA8E9); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "hfov": 15.8,
        "yaw": 2.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 236,
           "class": "ImageResourceLevel",
           "width": 330,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -31.63
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_945EC5AA_9A68_A1F7_41D5_1D12B08E2FF8",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 79,
           "class": "ImageResourceLevel",
           "width": 88,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.35
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25, this.camera_BD07BE1D_A905_D075_41A0_B94A21C3CB7E); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "hfov": 9.3,
        "yaw": 2.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 159,
           "class": "ImageResourceLevel",
           "width": 176,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -20.35
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_97F2A2AA_9A69_E3F7_41E2_83199B0555DF",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.15,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 62,
           "class": "ImageResourceLevel",
           "width": 83,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -13.27
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60, this.camera_BD1DFE3D_A905_D0B5_41E0_B8FFED16D530); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "items": [
       {
        "hfov": 9.15,
        "yaw": 2.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 125,
           "class": "ImageResourceLevel",
           "width": 167,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -13.27
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_96C4C774_9A6B_A153_41B6_62B005454B8E",
      "enabledInCardboard": true,
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 10.24,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 94,
           "class": "ImageResourceLevel",
           "width": 91,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": -3.12
       }
      ],
      "areas": [
       {
        "toolTip": "Welcome to Sam Houses",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "items": [
       {
        "hfov": 10.24,
        "yaw": 5,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 188,
           "class": "ImageResourceLevel",
           "width": 183,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -3.12
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_94F63F83_9A68_A1B5_41CD_E5A230EC6354",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 4.26,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -33.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 52,
           "class": "ImageResourceLevel",
           "width": 38,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": 2.48
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA, this.camera_BD2F4E4C_A905_D0DB_41B8_A7E99E5E628B); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "items": [
       {
        "hfov": 4.26,
        "yaw": -33.63,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 105,
           "class": "ImageResourceLevel",
           "width": 76,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 2.48
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_94529F48_9A68_62B3_41E1_41623C62C167",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 2.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -3.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 22,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": 11.24
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "items": [
       {
        "hfov": 2.5,
        "yaw": -3.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 93,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_6_0.png"
          }
         ]
        },
        "pitch": 11.24
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_95DB40DB_9A67_9F54_41C7_43C998E28A6D",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 2.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -7.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_7_0_0_map.gif"
          }
         ]
        },
        "pitch": 26.35
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502, this.camera_BD707E0C_A905_D05B_41D9_F306F0EA6634); this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "items": [
       {
        "hfov": 2.02,
        "yaw": -7.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 77,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_7_0.png"
          }
         ]
        },
        "pitch": 26.35
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_A4E3E900_A902_D04B_41E1_E17CC990FB61",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 4.6,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 4.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_8_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.53
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "items": [
       {
        "hfov": 4.6,
        "yaw": 4.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 82,
           "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_0_HS_8_0.png"
          }
         ]
        },
        "pitch": -4.53
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3210,
       "class": "ImageResourceLevel",
       "width": 6420,
       "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA.jpeg"
      }
     ]
    }
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_94165543_9A18_A6B5_41DE_26D45A568305",
         "enabledInCardboard": true,
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 18.69,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 20.66,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 101,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_0_1_0_map.gif"
             }
            ]
           },
           "pitch": -11.95
          }
         ],
         "areas": [
          {
           "toolTip": "V\u00e0o trong l\u1ea7u 3",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 20)"
          }
         ],
         "items": [
          {
           "hfov": 18.69,
           "yaw": 20.66,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 655,
              "class": "ImageResourceLevel",
              "width": 333,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -11.95
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_8AC22383_9A18_E1B5_41D2_1B761FC55B89",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 4.19,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 122.28,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 108,
              "class": "ImageResourceLevel",
              "width": 66,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -56.12
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "items": [
          {
           "hfov": 4.19,
           "yaw": 122.28,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 217,
              "class": "ImageResourceLevel",
              "width": 133,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -56.12
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_8AA13AAA_9A1B_A3F7_41CF_0ABF38E884F0",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 4.88,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 142.17,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 93,
              "class": "ImageResourceLevel",
              "width": 70,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -52.46
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25, this.camera_BD38CADE_A905_D1F6_41E2_E5E5C372E638); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "hfov": 4.88,
           "yaw": 142.17,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 187,
              "class": "ImageResourceLevel",
              "width": 141,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -52.46
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_8B599917_9A1B_EEDC_41D5_686AE5EEDC7A",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 4.1,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 159.68,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 48,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "pitch": -41.62
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6, this.camera_BD22FAAF_A905_D056_41CD_DB6EEEAFFFD3); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "items": [
          {
           "hfov": 4.1,
           "yaw": 159.68,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 96,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -41.62
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_8A6E1FFB_9A1B_A154_41D6_4991E64D0010",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 4.14,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 168.23,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 53,
              "class": "ImageResourceLevel",
              "width": 43,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "pitch": -32.65
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA, this.camera_BDCD1AF3_A905_D1CE_41C1_F9D08B80FCF8); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 4.14,
           "yaw": 168.23,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 106,
              "class": "ImageResourceLevel",
              "width": 87,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_5_0.png"
             }
            ]
           },
           "pitch": -32.65
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_A621182E_A907_3057_41D6_79129B807213",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 9.85,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 21.66,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 89,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_6_0_0_map.gif"
             }
            ]
           },
           "pitch": -13.08
          }
         ],
         "areas": [
          {
           "toolTip": "V\u00e0o trong l\u1ea7u 3",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792, this.camera_BD36AAC9_A905_D1DA_41D7_0B233A5B663E); this.mainPlayList.set('selectedIndex', 20)"
          }
         ],
         "items": [
          {
           "hfov": 9.85,
           "yaw": 21.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 160,
              "class": "ImageResourceLevel",
              "width": 178,
              "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_0_HS_6_0.png"
             }
            ]
           },
           "pitch": -13.08
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3186,
          "class": "ImageResourceLevel",
          "width": 6372,
          "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502.jpeg"
         }
        ]
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_971F64CF_9A19_A74D_41D2_4FF423006DC7",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 6.75,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -0.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 121,
                 "class": "ImageResourceLevel",
                 "width": 66,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.3
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25, this.camera_BAA7ED9C_A905_D07B_41E4_0EAD0594F964); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "items": [
             {
              "hfov": 6.75,
              "yaw": -0.91,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 242,
                 "class": "ImageResourceLevel",
                 "width": 133,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -25.3
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_95CB8B3D_9A18_E2CC_41B2_DF5BC76CD3C0",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 7.75,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 176.05,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 124,
                 "class": "ImageResourceLevel",
                 "width": 74,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -21.62
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA, this.camera_BABFDDBC_A905_D3BB_41C4_55AC61F265DF); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "items": [
             {
              "hfov": 7.75,
              "yaw": 176.05,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 248,
                 "class": "ImageResourceLevel",
                 "width": 149,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -21.62
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_970ADDF8_9A1B_A154_41E3_18FAEBD76CCB",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.72,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -1.28,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 82,
                 "class": "ImageResourceLevel",
                 "width": 52,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -14.18
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60, this.camera_BAAABDAC_A905_D05B_41B0_DE8A67B4F619); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "hfov": 5.72,
              "yaw": -1.28,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 165,
                 "class": "ImageResourceLevel",
                 "width": 105,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -14.18
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_95C36F8C_9A18_A1B3_41E0_1A3D6BD5AEEF",
            "enabledInCardboard": true,
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 13.88,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 2.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 125,
                 "class": "ImageResourceLevel",
                 "width": 124,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_4_1_0_map.gif"
                }
               ]
              },
              "pitch": -1.55
             }
            ],
            "areas": [
             {
              "toolTip": "Welcome to Sam Houses",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "items": [
             {
              "hfov": 13.88,
              "yaw": 2.96,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 251,
                 "class": "ImageResourceLevel",
                 "width": 249,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -1.55
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_9414ACB6_9A18_67DC_4196_7B5F66E25A58",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 3.87,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -51.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 69,
                 "class": "ImageResourceLevel",
                 "width": 34,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "pitch": 4.42
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA, this.camera_BD429DCC_A905_D3DB_41C0_D6E4B2D56D23); this.mainPlayList.set('selectedIndex', 13)"
             }
            ],
            "items": [
             {
              "hfov": 3.87,
              "yaw": -51.13,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 138,
                 "class": "ImageResourceLevel",
                 "width": 69,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_5_0.png"
                }
               ]
              },
              "pitch": 4.42
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_8A523A36_9A18_62DC_41A0_4D31BE527B37",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 3.65,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -11.61,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 69,
                 "class": "ImageResourceLevel",
                 "width": 34,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_6_0_0_map.gif"
                }
               ]
              },
              "pitch": 19.18
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 12)"
             }
            ],
            "items": [
             {
              "hfov": 3.65,
              "yaw": -11.61,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 138,
                 "class": "ImageResourceLevel",
                 "width": 69,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_6_0.png"
                }
               ]
              },
              "pitch": 19.18
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_95C4E0B4_9A19_FFDC_41B8_C8A2C5C1232C",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 2.54,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -14.89,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_7_0_0_map.gif"
                }
               ]
              },
              "pitch": 38.63
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502, this.camera_BA935D8C_A905_D05B_41D1_54E9E730792E); this.mainPlayList.set('selectedIndex', 19)"
             }
            ],
            "items": [
             {
              "hfov": 2.54,
              "yaw": -14.89,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 58,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_7_0.png"
                }
               ]
              },
              "pitch": 38.63
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_A71739E1_A903_33CD_41DC_65EACCB7888C",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 5.27,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 2.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "class": "ImageResourceLevel",
                 "width": 47,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_8_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.32
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "items": [
             {
              "hfov": 5.27,
              "yaw": 2.59,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 90,
                 "class": "ImageResourceLevel",
                 "width": 94,
                 "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_0_HS_8_0.png"
                }
               ]
              },
              "pitch": -3.32
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3218,
             "class": "ImageResourceLevel",
             "width": 6436,
             "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6.jpeg"
            }
           ]
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502",
          "yaw": -14.89,
          "backwardYaw": 159.68,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_9570E2EB_9A1B_A375_41E1_EC5679BE0703",
               "enabledInCardboard": true,
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 21.28,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 12.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 193,
                    "class": "ImageResourceLevel",
                    "width": 191,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_0_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -5.1
                }
               ],
               "areas": [
                {
                 "toolTip": "Welcome to Sam Houses",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "hfov": 21.28,
                 "yaw": 12.66,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 387,
                    "class": "ImageResourceLevel",
                    "width": 383,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -5.1
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_97038027_9A18_9EFC_41BB_8ACB202E4C04",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 14.56,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 133,
                    "class": "ImageResourceLevel",
                    "width": 152,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -31.72
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60, this.camera_BA302CFB_A905_D1BD_41D6_032671093BF1); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "items": [
                {
                 "hfov": 14.56,
                 "yaw": 7,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 266,
                    "class": "ImageResourceLevel",
                    "width": 305,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -31.72
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_9723A925_9A18_6EFC_41E2_FF5761F42CFF",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 15.8,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -173.64,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 130,
                    "class": "ImageResourceLevel",
                    "width": 152,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -22.6
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6, this.camera_BA2DDCEB_A905_D1DD_41DD_9E16ED7827C2); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "items": [
                {
                 "hfov": 15.8,
                 "yaw": -173.64,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 260,
                    "class": "ImageResourceLevel",
                    "width": 305,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -22.6
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_94456AB9_9A27_A3D4_41DF_BBD3AF52BBF3",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 5.13,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -173.22,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 77,
                    "class": "ImageResourceLevel",
                    "width": 46,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.03
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA, this.camera_BA243CDB_A905_D1FD_41C0_694751B8A742); this.mainPlayList.set('selectedIndex', 0)"
                }
               ],
               "items": [
                {
                 "hfov": 5.13,
                 "yaw": -173.22,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 154,
                    "class": "ImageResourceLevel",
                    "width": 92,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -10.03
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_97C65318_9A28_62D3_41C0_729EBCF6ACE4",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 5.88,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -62.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 52,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_5_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 6.01
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA, this.camera_BA39ED0B_A905_D05D_41D2_691DCF8A4A0D); this.mainPlayList.set('selectedIndex', 13)"
                }
               ],
               "items": [
                {
                 "hfov": 5.88,
                 "yaw": -62.7,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 174,
                    "class": "ImageResourceLevel",
                    "width": 105,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_5_0.png"
                   }
                  ]
                 },
                 "pitch": 6.01
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_97C8F3DA_9A28_E157_41D8_E22D717DC7C9",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 5.37,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -9.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 112,
                    "class": "ImageResourceLevel",
                    "width": 54,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_6_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 29.48
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 12)"
                }
               ],
               "items": [
                {
                 "hfov": 5.37,
                 "yaw": -9.33,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 224,
                    "class": "ImageResourceLevel",
                    "width": 109,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_6_0.png"
                   }
                  ]
                 },
                 "pitch": 29.48
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_95D8CCC2_9A28_A7B4_41E0_DB10D56B0D26",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 3.11,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -11.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 88,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_7_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 54.45
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502, this.camera_BA1E2CCA_A905_D1DF_41E2_38E0FA1A056E); this.mainPlayList.set('selectedIndex', 19)"
                }
               ],
               "items": [
                {
                 "hfov": 3.11,
                 "yaw": -11.72,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 176,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_7_0.png"
                   }
                  ]
                 },
                 "pitch": 54.45
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_97D14E9F_9A28_A3CD_41D3_0A29C369E8EF",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 8.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -4.67,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 61,
                    "class": "ImageResourceLevel",
                    "width": 78,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_8_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -15.62
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "rollOver": "this.showPopupPanoramaOverlay(this.popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF9E35D3_9A28_A155_41D5_29335C360823, null, null, null, null, false)"
                }
               ],
               "items": [
                {
                 "hfov": 8.48,
                 "yaw": -4.67,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 123,
                    "class": "ImageResourceLevel",
                    "width": 156,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_8_0.png"
                   }
                  ]
                 },
                 "pitch": -15.62
                }
               ]
              },
              {
               "hfov": 8.48,
               "rotationZ": 0,
               "yaw": -4.67,
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "showEasing": "cubic_in",
               "popupMaxWidth": "65%",
               "id": "popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0",
               "popupMaxHeight": "65%",
               "class": "PopupPanoramaOverlay",
               "hideDuration": 500,
               "showDuration": 500,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 1006,
                  "class": "ImageResourceLevel",
                  "width": 1024,
                  "url": "media/popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0_0_2.jpg"
                 }
                ]
               },
               "rotationY": 0,
               "pitch": -15.62
              },
              {
               "useHandCursor": true,
               "id": "overlay_A4B52DFD_A902_D3BA_41DE_73233B1D6E45",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 5.52,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 13.09,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 50,
                    "class": "ImageResourceLevel",
                    "width": 50,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_9_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -10.21
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "hfov": 5.52,
                 "yaw": 13.09,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 101,
                    "class": "ImageResourceLevel",
                    "width": 100,
                    "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_0_HS_9_0.png"
                   }
                  ]
                 },
                 "pitch": -10.21
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3208,
                "class": "ImageResourceLevel",
                "width": 6416,
                "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502",
             "yaw": -11.72,
             "backwardYaw": 142.17,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA",
             "yaw": -173.22,
             "backwardYaw": 2.33,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6",
             "yaw": -173.64,
             "backwardYaw": -0.91,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "vfov": 180,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_954187DC_9A28_A153_41DD_D92AF06956D6",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 6.45,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 153.95,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 125,
                       "class": "ImageResourceLevel",
                       "width": 65,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -29.42
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25, this.camera_BB92CB89_A905_D05A_419A_076FC3F2E794); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 6.45,
                    "yaw": 153.95,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 250,
                       "class": "ImageResourceLevel",
                       "width": 130,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -29.42
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_9537139E_9A2F_A1CF_41CB_08B353C3828E",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 5.22,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 154.02,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 91,
                       "class": "ImageResourceLevel",
                       "width": 48,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -19.14
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6, this.camera_BB8DDB68_A905_D0DA_41CE_3764702DA26E); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.22,
                    "yaw": 154.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 183,
                       "class": "ImageResourceLevel",
                       "width": 97,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -19.14
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_94DB5F01_9A28_A2B5_41DC_4F9DB066CD83",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 5.05,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 153.99,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 64,
                       "class": "ImageResourceLevel",
                       "width": 45,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -12.18
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA, this.camera_BB89FB79_A905_D0BA_41D0_31495F34C38F); this.mainPlayList.set('selectedIndex', 0)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.05,
                    "yaw": 153.99,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 128,
                       "class": "ImageResourceLevel",
                       "width": 91,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -12.18
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_8A75DCDB_9A2B_A754_41E1_FF27C7F82AA2",
                  "enabledInCardboard": true,
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 42.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -15.16,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "class": "ImageResourceLevel",
                       "width": 199,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_4_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.98
                   }
                  ],
                  "areas": [
                   {
                    "toolTip": "Welcome to Sam Houses",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76, this.camera_86176E47_A5B5_1016_41E1_56F6727EDBA7); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 42.91,
                    "yaw": -15.16,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 800,
                       "class": "ImageResourceLevel",
                       "width": 796,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -5.98
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_97E1FA56_9A29_A35C_41D5_B0DE8D0DC129",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 12.05,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -59.9,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 98,
                       "class": "ImageResourceLevel",
                       "width": 125,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -31.47
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "rollOver": "this.showPopupPanoramaOverlay(this.popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF85A5D8_9A28_A153_41D3_AF3E838A3317, null, null, null, null, false)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 12.05,
                    "yaw": -59.9,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 197,
                       "class": "ImageResourceLevel",
                       "width": 250,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_5_0.png"
                      }
                     ]
                    },
                    "pitch": -31.47
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_940406CF_9A28_634D_41D7_4F79400741D9",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 5.7,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -123.05,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 98,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 6.18
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA, this.camera_BDDF4B09_A905_D05A_41BE_50DC3CE72008); this.mainPlayList.set('selectedIndex', 13)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.7,
                    "yaw": -123.05,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 197,
                       "class": "ImageResourceLevel",
                       "width": 101,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_6_0.png"
                      }
                     ]
                    },
                    "pitch": 6.18
                   }
                  ]
                 },
                 {
                  "hfov": 12.05,
                  "rotationZ": 0,
                  "yaw": -59.9,
                  "rotationX": 0,
                  "hideEasing": "cubic_out",
                  "showEasing": "cubic_in",
                  "popupMaxWidth": "65%",
                  "id": "popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24",
                  "popupMaxHeight": "65%",
                  "class": "PopupPanoramaOverlay",
                  "hideDuration": 500,
                  "showDuration": 500,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 1006,
                     "class": "ImageResourceLevel",
                     "width": 1024,
                     "url": "media/popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24_0_2.jpg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "pitch": -31.47
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_A473DC15_A90D_F075_41CA_6F18DC86BC60",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 13.66,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -13.3,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 101,
                       "class": "ImageResourceLevel",
                       "width": 126,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -16.69
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76, this.camera_BDE30B25_A905_D04A_41CC_FCBF1DAD83E4); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 13.66,
                    "yaw": -13.3,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 202,
                       "class": "ImageResourceLevel",
                       "width": 252,
                       "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_0_HS_7_0.png"
                      }
                     ]
                    },
                    "pitch": -16.69
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3184,
                   "class": "ImageResourceLevel",
                   "width": 6368,
                   "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "vfov": 180,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_8AD04B6F_9A18_614D_41DD_A83A2B94A053",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 8.88,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 0.96,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 132,
                          "class": "ImageResourceLevel",
                          "width": 80,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 11
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0, this.camera_BD33AE5D_A905_D0F5_41E0_A288894D3870); this.mainPlayList.set('selectedIndex', 12)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 8.88,
                       "yaw": 0.96,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 265,
                          "class": "ImageResourceLevel",
                          "width": 160,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": 11
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_94F12477_9A18_E75D_41CC_C01DEB6614EF",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 5.81,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 84.49,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 95,
                          "class": "ImageResourceLevel",
                          "width": 54,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -18.66
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60, this.camera_BDDB3E8D_A905_D055_41D8_59328A776749); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 5.81,
                       "yaw": 84.49,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 190,
                          "class": "ImageResourceLevel",
                          "width": 109,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -18.66
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_952BBBED_9A27_E14D_41D6_236D04C51A95",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 6.34,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 104.5,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 85,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -17.69
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25, this.camera_BDC53E6D_A905_D0D5_41CD_D41A3F1FC9B8); this.mainPlayList.set('selectedIndex', 2)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 6.34,
                       "yaw": 104.5,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 170,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -17.69
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_947703B1_9A29_A1D5_41DB_39A679B51D54",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 4.77,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 130.28,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 69,
                          "class": "ImageResourceLevel",
                          "width": 43,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -14.61
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6, this.camera_BDD68E7E_A905_D0B7_41E1_127FD8649804); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 4.77,
                       "yaw": 130.28,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 138,
                          "class": "ImageResourceLevel",
                          "width": 87,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -14.61
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_8AB6FB17_9A28_A2DD_41DE_1EFDF38A18E8",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 3.87,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 147.52,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 52,
                          "class": "ImageResourceLevel",
                          "width": 35,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -11.13
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA, this.camera_BDEC9E9D_A905_D075_41D9_AABE8BBBC54B); this.mainPlayList.set('selectedIndex', 0)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 3.87,
                       "yaw": 147.52,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 105,
                          "class": "ImageResourceLevel",
                          "width": 70,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -11.13
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_95EFD63F_9A28_A2CD_41E1_27F7D06E33B6",
                     "enabledInCardboard": true,
                     "rollOverDisplay": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 7.43,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 64.11,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 161,
                          "class": "ImageResourceLevel",
                          "width": 66,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_5_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -13.54
                      }
                     ],
                     "areas": [
                      {
                       "toolTip": "Welcome to Sam Houses",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 7.43,
                       "yaw": 64.11,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 322,
                          "class": "ImageResourceLevel",
                          "width": 132,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": -13.54
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_A7B3C7BF_A907_3FB6_41C1_DFF4E7654EF3",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 5.87,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 64.13,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 48,
                          "class": "ImageResourceLevel",
                          "width": 53,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_7_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -13.7
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 5.87,
                       "yaw": 64.13,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 96,
                          "class": "ImageResourceLevel",
                          "width": 107,
                          "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_0_HS_7_0.png"
                         }
                        ]
                       },
                       "pitch": -13.7
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3200,
                      "class": "ImageResourceLevel",
                      "width": 6400,
                      "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "vfov": 180,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_8A924D23_9A1F_E6F5_41D2_C5D0E1B1B45A",
                        "enabledInCardboard": true,
                        "rollOverDisplay": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 79.04,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -37.74,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 200,
                             "class": "ImageResourceLevel",
                             "width": 147,
                             "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_0_HS_0_1_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -9.98
                         }
                        ],
                        "areas": [
                         {
                          "toolTip": "V\u00e0o trong l\u1ea7u 2",
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "displayTooltipInTouchScreens": true,
                          "click": "this.mainPlayList.set('selectedIndex', 11)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 79.04,
                          "yaw": -37.74,
                          "class": "HotspotPanoramaOverlayImage",
                          "roll": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 2048,
                             "class": "ImageResourceLevel",
                             "width": 1511,
                             "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -9.98
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_941F10BD_9A1B_BFCD_41C3_5F8717764EF1",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 11.71,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -147.06,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 154,
                             "class": "ImageResourceLevel",
                             "width": 113,
                             "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -24.35
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA, this.camera_BD5F9A02_A905_D04E_41DF_35B46151ED9C); this.mainPlayList.set('selectedIndex', 13)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 11.71,
                          "yaw": -147.06,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 309,
                             "class": "ImageResourceLevel",
                             "width": 226,
                             "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -24.35
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_A71FF557_A903_30F6_41E1_06C9B8D4D004",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 18.73,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -32.02,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 160,
                             "class": "ImageResourceLevel",
                             "width": 179,
                             "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -23.73
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA, this.camera_BD5799E9_A905_D3DA_4179_DB7D61EF9EFB); this.mainPlayList.set('selectedIndex', 11)"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 18.73,
                          "yaw": -32.02,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 321,
                             "class": "ImageResourceLevel",
                             "width": 359,
                             "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": -23.73
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3166,
                         "class": "ImageResourceLevel",
                         "width": 6332,
                         "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "vfov": 180,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_8B90DB33_9A18_A2D5_41C6_5E51331B61EE",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 5.06,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -148.62,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 80,
                                "class": "ImageResourceLevel",
                                "width": 45,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -9.12
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326, this.camera_BB9C0B9A_A905_D07E_41E4_846FD0E6DB24); this.mainPlayList.set('selectedIndex', 10)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 5.06,
                             "yaw": -148.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 160,
                                "class": "ImageResourceLevel",
                                "width": 90,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -9.12
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_947384A3_9A19_A7F5_41C5_30CAD0CC2C40",
                           "enabledInCardboard": true,
                           "rollOverDisplay": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 15.19,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -88.24,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 200,
                                "class": "ImageResourceLevel",
                                "width": 121,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_1_1_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -3.01
                            }
                           ],
                           "areas": [
                            {
                             "toolTip": "Ra lan can l\u1ea7u 2",
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "displayTooltipInTouchScreens": true,
                             "click": "this.mainPlayList.set('selectedIndex', 12)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 15.19,
                             "yaw": -88.24,
                             "class": "HotspotPanoramaOverlayImage",
                             "roll": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 441,
                                "class": "ImageResourceLevel",
                                "width": 268,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -3.01
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_8BE4F9EF_9A19_A14D_41C9_2CB562F244E0",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 5.48,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 164.81,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 80,
                                "class": "ImageResourceLevel",
                                "width": 50,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_3_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -16.67
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C, this.camera_BB98DBAB_A905_D05E_41D6_C5AB64DE7B96); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 5.48,
                             "yaw": 164.81,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 160,
                                "class": "ImageResourceLevel",
                                "width": 100,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_3_0.png"
                               }
                              ]
                             },
                             "pitch": -16.67
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_A3022007_9A18_9EBD_41D6_38B46C132A98",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 5.3,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 165.79,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 53,
                                "class": "ImageResourceLevel",
                                "width": 46,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_4_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": 1.83
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE, this.camera_BBAE9BD0_A905_D7CA_41B1_C6C9E127622D); this.mainPlayList.set('selectedIndex', 14)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 5.3,
                             "yaw": 165.79,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 107,
                                "class": "ImageResourceLevel",
                                "width": 93,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_4_0.png"
                               }
                              ]
                             },
                             "pitch": 1.83
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_A71C4973_A90D_D0CD_41D2_124A6CCD695B",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "hfov": 8.07,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -87.62,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 66,
                                "class": "ImageResourceLevel",
                                "width": 71,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_5_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -7.16
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0, this.camera_BBA2FBBC_A905_D7BA_41B1_CA4AE63982A0); this.mainPlayList.set('selectedIndex', 12)"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 8.07,
                             "yaw": -87.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 133,
                                "class": "ImageResourceLevel",
                                "width": 142,
                                "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_0_HS_5_0.png"
                               }
                              ]
                             },
                             "pitch": -7.16
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3158,
                            "class": "ImageResourceLevel",
                            "width": 6316,
                            "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "class": "ImageResourceLevel",
                            "width": 3217,
                            "url": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "vfov": 180,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_8A15DCD3_9AF8_E755_41E1_BAA4EBE16FA7",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "hfov": 7.69,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -41.7,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 68,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 8.64
                               }
                              ],
                              "areas": [
                               {
                                "toolTip": "M\u00f4 h\u00ecnh b\u00e1nh r\u0103ng c\u01b0a",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true,
                                "click": "this.showPopupPanoramaOverlay(this.popup_B9C800E0_9A19_9F74_41D9_FA104B074B35, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF7565E7_9A28_A17D_41B3_B48269FFED78, null, null, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 7.69,
                                "yaw": -41.7,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 115,
                                   "class": "ImageResourceLevel",
                                   "width": 136,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": 8.64
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_94970A90_9AE8_63D4_41DD_0B4870E22C06",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "hfov": 7.69,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -8.9,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 68,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 8.64
                               }
                              ],
                              "areas": [
                               {
                                "toolTip": "M\u00f4 h\u00ecnh b\u00e1nh r\u0103ng c\u01b0a",
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true,
                                "click": "this.showPopupPanoramaOverlay(this.popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF7A05E8_9A28_A173_41D7_777687E6D083, null, null, null, null, false)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 7.69,
                                "yaw": -8.9,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 115,
                                   "class": "ImageResourceLevel",
                                   "width": 136,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": 8.64
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_8BA81123_9AE9_BEF4_4190_B89C0381B791",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "hfov": 4.95,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 120.25,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 80,
                                   "class": "ImageResourceLevel",
                                   "width": 44,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -15.92
                               }
                              ],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA, this.camera_BD085A85_A905_D04A_41CF_FB8E8AE81AB9); this.mainPlayList.set('selectedIndex', 11)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 4.95,
                                "yaw": 120.25,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 160,
                                   "class": "ImageResourceLevel",
                                   "width": 89,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -15.92
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_8ADEF09C_9AE8_BFCC_41E1_C06B72CFC877",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "hfov": 5.18,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -147.16,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 93,
                                   "class": "ImageResourceLevel",
                                   "width": 52,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_3_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -29.47
                               }
                              ],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C, this.camera_BD1E1A9A_A905_D07E_41E3_4955F01D8C79); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 5.18,
                                "yaw": -147.16,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 186,
                                   "class": "ImageResourceLevel",
                                   "width": 104,
                                   "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "pitch": -29.47
                               }
                              ]
                             },
                             {
                              "hfov": 7.69,
                              "rotationZ": 0,
                              "yaw": -41.7,
                              "rotationX": 0,
                              "hideEasing": "cubic_out",
                              "showEasing": "cubic_in",
                              "popupMaxWidth": "50%",
                              "id": "popup_B9C800E0_9A19_9F74_41D9_FA104B074B35",
                              "popupMaxHeight": "50%",
                              "class": "PopupPanoramaOverlay",
                              "hideDuration": 500,
                              "showDuration": 500,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1024,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_B9C800E0_9A19_9F74_41D9_FA104B074B35_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "pitch": 8.64
                             },
                             {
                              "hfov": 7.69,
                              "rotationZ": 0,
                              "yaw": -8.9,
                              "rotationX": 0,
                              "hideEasing": "cubic_out",
                              "showEasing": "cubic_in",
                              "popupMaxWidth": "50%",
                              "id": "popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7",
                              "popupMaxHeight": "50%",
                              "class": "PopupPanoramaOverlay",
                              "hideDuration": 500,
                              "showDuration": 500,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 768,
                                 "class": "ImageResourceLevel",
                                 "width": 1024,
                                 "url": "media/popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7_0_2.jpg"
                                }
                               ]
                              },
                              "rotationY": 0,
                              "pitch": 8.64
                             }
                            ],
                            "thumbnailUrl": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3148,
                               "class": "ImageResourceLevel",
                               "width": 6296,
                               "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "class": "ImageResourceLevel",
                               "width": 3217,
                               "url": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA",
                            "yaw": 120.25,
                            "backwardYaw": -148.62,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "vfov": 180,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_94AFF926_9AFB_EEFC_41BF_D761C2581078",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "hfov": 4.62,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -140.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 76,
                                      "class": "ImageResourceLevel",
                                      "width": 42,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -16.88
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA, this.camera_BA50FC5C_A905_D0FA_41D1_983D25955BC1); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 4.62,
                                   "yaw": -140.31,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 152,
                                      "class": "ImageResourceLevel",
                                      "width": 85,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -16.88
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_94C7385D_9AF8_AF4C_41DD_C9FA16394255",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "hfov": 4.68,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 41.93,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 85,
                                      "class": "ImageResourceLevel",
                                      "width": 55,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -42.04
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F, this.camera_BA459C26_A905_D056_41E4_E1C2F8211294); this.mainPlayList.set('selectedIndex', 8)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 4.68,
                                   "yaw": 41.93,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 170,
                                      "class": "ImageResourceLevel",
                                      "width": 111,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -42.04
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_977C7E94_9AF8_63DC_41C2_5A05D4337256",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "hfov": 25.51,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 56.97,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 166,
                                      "class": "ImageResourceLevel",
                                      "width": 200,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_2_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -21.01
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "toolTip": "\u1ea2nh",
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "displayTooltipInTouchScreens": true,
                                   "click": "this.showPopupPanoramaOverlay(this.popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF74F5E6_9A28_A17F_41D1_C41888F78194, null, null, null, null, false)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 25.51,
                                   "yaw": 56.97,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "roll": 0,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 381,
                                      "class": "ImageResourceLevel",
                                      "width": 457,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -21.01
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_95D1112E_9AFF_9ECF_41E2_FE19E1C5FA9F",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "hfov": 6.29,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 38.84,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 85,
                                      "class": "ImageResourceLevel",
                                      "width": 55,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_3_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -0.13
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE, this.camera_BA497C4C_A905_D0DA_41D1_1127079FD471); this.mainPlayList.set('selectedIndex', 14)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 6.29,
                                   "yaw": 38.84,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 170,
                                      "class": "ImageResourceLevel",
                                      "width": 111,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -0.13
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_948B542A_9AF8_A6F7_4194_8E0C5F033DE4",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "hfov": 5.58,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 142.69,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 93,
                                      "class": "ImageResourceLevel",
                                      "width": 52,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -19.22
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326, this.camera_BA4C6C3A_A905_D0BE_41E3_168417756396); this.mainPlayList.set('selectedIndex', 10)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 5.58,
                                   "yaw": 142.69,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 186,
                                      "class": "ImageResourceLevel",
                                      "width": 104,
                                      "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -19.22
                                  }
                                 ]
                                },
                                {
                                 "hfov": 24.62,
                                 "rotationZ": 0,
                                 "yaw": 56.97,
                                 "rotationX": 0,
                                 "hideEasing": "cubic_out",
                                 "showEasing": "cubic_in",
                                 "popupMaxWidth": "60%",
                                 "id": "popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7",
                                 "popupMaxHeight": "60%",
                                 "class": "PopupPanoramaOverlay",
                                 "hideDuration": 500,
                                 "showDuration": 500,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 768,
                                    "class": "ImageResourceLevel",
                                    "width": 1024,
                                    "url": "media/popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7_0_2.jpg"
                                   }
                                  ]
                                 },
                                 "rotationY": 0,
                                 "pitch": -21.01
                                }
                               ],
                               "thumbnailUrl": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3176,
                                  "class": "ImageResourceLevel",
                                  "width": 6352,
                                  "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "class": "ImageResourceLevel",
                                  "width": 3217,
                                  "url": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "vfov": 180,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_95D33922_9A19_AEF7_41D4_E4E26B1188D9",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 5.17,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 176.59,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 101,
                                         "class": "ImageResourceLevel",
                                         "width": 54,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -32.84
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85, this.camera_BACC0D1B_A905_D07D_41AA_B8704D4CB811); this.mainPlayList.set('selectedIndex', 6)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 5.17,
                                      "yaw": 176.59,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 203,
                                         "class": "ImageResourceLevel",
                                         "width": 108,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -32.84
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_955FE495_9A18_A7DD_41BE_03F7F7578C4E",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 8.95,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 157.99,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 116,
                                         "class": "ImageResourceLevel",
                                         "width": 79,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 7.39
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C, this.camera_BAD58D2A_A905_D05F_41DA_1E4A8187E146); this.mainPlayList.set('selectedIndex', 9)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 8.95,
                                      "yaw": 157.99,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 232,
                                         "class": "ImageResourceLevel",
                                         "width": 158,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 7.39
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_95C0F3EF_9A18_A14D_41E0_9DE5BA96EE38",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 42.15,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -5.28,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "class": "ImageResourceLevel",
                                         "width": 127,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_2_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 6.03
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "toolTip": "\u1ea2nh",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.showPopupPanoramaOverlay(this.popup_855AEC72_9A18_E754_41E1_EBC5DD7AF312, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 42.15,
                                      "yaw": -5.28,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 1217,
                                         "class": "ImageResourceLevel",
                                         "width": 776,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 6.03
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_8A341903_9AE7_AEB5_41D5_A8E205A53B6E",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 30.41,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 35.22,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "class": "ImageResourceLevel",
                                         "width": 111,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_3_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -2.73
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "toolTip": "\u0110\u1ed3ng h\u1ed3 BigBen Lu\u00e2n \u0110\u00f4n",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.showPopupPanoramaOverlay(this.popup_BF3D3BDB_9A1B_E154_41A7_83C095BA6C28, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 30.41,
                                      "yaw": 35.22,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 977,
                                         "class": "ImageResourceLevel",
                                         "width": 547,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -2.73
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_9537AEE5_9AE9_A37D_41DA_4215D5B6D794",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 11.07,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 58.16,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 192,
                                         "class": "ImageResourceLevel",
                                         "width": 97,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_4_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -18.52
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "toolTip": "\u1ea2nh",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.showPopupPanoramaOverlay(this.popup_8558D9AC_9A1B_A1F3_41C9_D42734573471, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 11.07,
                                      "yaw": 58.16,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 385,
                                         "class": "ImageResourceLevel",
                                         "width": 195,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -18.52
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_8A92176B_9AEB_E174_41DF_77948061AC60",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 17.14,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 60.39,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "class": "ImageResourceLevel",
                                         "width": 80,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_5_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 14.72
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "toolTip": "Th\u00e1p Eiffel Paris",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.showPopupPanoramaOverlay(this.popup_BC5C5B9C_9A18_61D3_41CE_8DD7098C6C43, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 17.14,
                                      "yaw": 60.39,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 749,
                                         "class": "ImageResourceLevel",
                                         "width": 303,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 14.72
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_8A645AC3_9AE8_63B5_41E2_1A006103A336",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 26.81,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 35.83,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "class": "ImageResourceLevel",
                                         "width": 140,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_6_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 38.65
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "toolTip": "\u1ea2nh",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.showPopupPanoramaOverlay(this.popup_85B650A5_9A18_BFFD_41E1_41EE43D1D63F, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, null, null, null, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 26.81,
                                      "yaw": 35.83,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 685,
                                         "class": "ImageResourceLevel",
                                         "width": 480,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_6_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 38.65
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_95AA6510_9AE9_A6D3_41C1_9958DC3D4F46",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 7.62,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 72.85,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "class": "ImageResourceLevel",
                                         "width": 60,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_7_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 5.46
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "toolTip": "\u1ea2nh",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.showPopupPanoramaOverlay(this.popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF7605E5_9A28_A17D_41D2_461CC0F3E8E9, null, null, null, null, false)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 7.62,
                                      "yaw": 72.85,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 444,
                                         "class": "ImageResourceLevel",
                                         "width": 134,
                                         "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_0_HS_7_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 5.46
                                     }
                                    ]
                                   },
                                   {
                                    "hfov": 42.82,
                                    "rotationZ": 0,
                                    "yaw": -5.28,
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "showEasing": "cubic_in",
                                    "popupMaxWidth": "50%",
                                    "id": "popup_855AEC72_9A18_E754_41E1_EBC5DD7AF312",
                                    "popupMaxHeight": "50%",
                                    "class": "PopupPanoramaOverlay",
                                    "hideDuration": 500,
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 591,
                                       "class": "ImageResourceLevel",
                                       "width": 422,
                                       "url": "media/popup_855AEC72_9A18_E754_41E1_EBC5DD7AF312_0_0.jpg"
                                      },
                                      {
                                       "height": 512,
                                       "class": "ImageResourceLevel",
                                       "width": 365,
                                       "url": "media/popup_855AEC72_9A18_E754_41E1_EBC5DD7AF312_0_1.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "pitch": 6.03
                                   },
                                   {
                                    "hfov": 38.17,
                                    "rotationZ": 0,
                                    "yaw": 35.22,
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "showEasing": "cubic_in",
                                    "popupMaxWidth": "50%",
                                    "id": "popup_BF3D3BDB_9A1B_E154_41A7_83C095BA6C28",
                                    "popupMaxHeight": "50%",
                                    "class": "PopupPanoramaOverlay",
                                    "hideDuration": 500,
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 577,
                                       "class": "ImageResourceLevel",
                                       "width": 433,
                                       "url": "media/popup_BF3D3BDB_9A1B_E154_41A7_83C095BA6C28_0_0.jpg"
                                      },
                                      {
                                       "height": 512,
                                       "class": "ImageResourceLevel",
                                       "width": 384,
                                       "url": "media/popup_BF3D3BDB_9A1B_E154_41A7_83C095BA6C28_0_1.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "pitch": -2.73
                                   },
                                   {
                                    "hfov": 15.77,
                                    "rotationZ": 0,
                                    "yaw": 58.16,
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "showEasing": "cubic_in",
                                    "popupMaxWidth": "50%",
                                    "id": "popup_8558D9AC_9A1B_A1F3_41C9_D42734573471",
                                    "popupMaxHeight": "50%",
                                    "class": "PopupPanoramaOverlay",
                                    "hideDuration": 500,
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 577,
                                       "class": "ImageResourceLevel",
                                       "width": 432,
                                       "url": "media/popup_8558D9AC_9A1B_A1F3_41C9_D42734573471_0_0.jpg"
                                      },
                                      {
                                       "height": 512,
                                       "class": "ImageResourceLevel",
                                       "width": 383,
                                       "url": "media/popup_8558D9AC_9A1B_A1F3_41C9_D42734573471_0_1.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "pitch": -18.52
                                   },
                                   {
                                    "hfov": 19.69,
                                    "rotationZ": 0,
                                    "yaw": 35.83,
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "showEasing": "cubic_in",
                                    "popupMaxWidth": "50%",
                                    "id": "popup_85B650A5_9A18_BFFD_41E1_41EE43D1D63F",
                                    "popupMaxHeight": "50%",
                                    "class": "PopupPanoramaOverlay",
                                    "hideDuration": 500,
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 564,
                                       "class": "ImageResourceLevel",
                                       "width": 386,
                                       "url": "media/popup_85B650A5_9A18_BFFD_41E1_41EE43D1D63F_0_0.jpg"
                                      },
                                      {
                                       "height": 512,
                                       "class": "ImageResourceLevel",
                                       "width": 350,
                                       "url": "media/popup_85B650A5_9A18_BFFD_41E1_41EE43D1D63F_0_1.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "pitch": 38.65
                                   },
                                   {
                                    "hfov": 29.8,
                                    "rotationZ": 0,
                                    "yaw": 60.39,
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "showEasing": "cubic_in",
                                    "popupMaxWidth": "50%",
                                    "id": "popup_BC5C5B9C_9A18_61D3_41CE_8DD7098C6C43",
                                    "popupMaxHeight": "50%",
                                    "class": "PopupPanoramaOverlay",
                                    "hideDuration": 500,
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 577,
                                       "class": "ImageResourceLevel",
                                       "width": 432,
                                       "url": "media/popup_BC5C5B9C_9A18_61D3_41CE_8DD7098C6C43_0_0.jpg"
                                      },
                                      {
                                       "height": 512,
                                       "class": "ImageResourceLevel",
                                       "width": 383,
                                       "url": "media/popup_BC5C5B9C_9A18_61D3_41CE_8DD7098C6C43_0_1.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "pitch": 14.72
                                   },
                                   {
                                    "hfov": 20.34,
                                    "rotationZ": 0,
                                    "yaw": 72.85,
                                    "rotationX": 0,
                                    "hideEasing": "cubic_out",
                                    "showEasing": "cubic_in",
                                    "popupMaxWidth": "50%",
                                    "id": "popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15",
                                    "popupMaxHeight": "50%",
                                    "class": "PopupPanoramaOverlay",
                                    "hideDuration": 500,
                                    "showDuration": 500,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 1024,
                                       "class": "ImageResourceLevel",
                                       "width": 819,
                                       "url": "media/popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15_0_2.jpg"
                                      }
                                     ]
                                    },
                                    "rotationY": 0,
                                    "pitch": 5.46
                                   }
                                  ],
                                  "thumbnailUrl": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_t.jpg",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3166,
                                     "class": "ImageResourceLevel",
                                     "width": 6332,
                                     "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "class": "ImageResourceLevel",
                                     "width": 3217,
                                     "url": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "vfov": 180,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_97B6813B_9A2B_9ED4_41E2_B92E42ED4094",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 14.07,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 164.52,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 124,
                                            "class": "ImageResourceLevel",
                                            "width": 124,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_0_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -2.66
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "toolTip": "H\u1eb9n g\u1eb7p l\u1ea1i qu\u00fd kh\u00e1ch",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.mainPlayList.set('selectedIndex', 3)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 14.07,
                                         "yaw": 164.52,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "roll": 0,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 249,
                                            "class": "ImageResourceLevel",
                                            "width": 249,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -2.66
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_95BF11E6_9A28_A17C_418A_C3CD33C47669",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 3.5,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 163.47,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 57,
                                            "class": "ImageResourceLevel",
                                            "width": 31,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -11.41
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76, this.camera_BD5ABDED_A905_D3D5_41B3_B22DD15A4E5C); this.mainPlayList.set('selectedIndex', 4)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 3.5,
                                         "yaw": 163.47,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 114,
                                            "class": "ImageResourceLevel",
                                            "width": 63,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -11.41
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_97D9DEDD_9A27_A34C_41D8_29EDF9608884",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 5,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 150.04,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 97,
                                            "class": "ImageResourceLevel",
                                            "width": 47,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_3_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -20.17
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2, this.camera_BD6F3DFD_A905_D3B5_41E3_3DB108B3C457); this.mainPlayList.set('selectedIndex', 5)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 5,
                                         "yaw": 150.04,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 195,
                                            "class": "ImageResourceLevel",
                                            "width": 94,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -20.17
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_94F03659_9A18_E354_4197_2D25BFC90026",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 6.14,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 75.34,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 100,
                                            "class": "ImageResourceLevel",
                                            "width": 54,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 4.79
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F, this.camera_BD57FDDC_A905_D3F4_41D7_97B305F37856); this.mainPlayList.set('selectedIndex', 8)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 6.14,
                                         "yaw": 75.34,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 201,
                                            "class": "ImageResourceLevel",
                                            "width": 108,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 4.79
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_9551CF7C_9A19_E153_41E1_F55FB8AD6BE3",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 17.84,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 81.98,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 173,
                                            "class": "ImageResourceLevel",
                                            "width": 158,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_5_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 25.2
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "toolTip": "\u1ea2nh",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "displayTooltipInTouchScreens": true,
                                         "rollOver": "this.showPopupPanoramaOverlay(this.popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF8915DD_9A28_A14D_41C0_6EA2464BC124, null, null, null, null, false)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 17.84,
                                         "yaw": 81.98,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "roll": 0,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 346,
                                            "class": "ImageResourceLevel",
                                            "width": 317,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 25.2
                                        }
                                       ]
                                      },
                                      {
                                       "hfov": 17.21,
                                       "rotationZ": 0,
                                       "yaw": 81.98,
                                       "rotationX": 0,
                                       "hideEasing": "cubic_out",
                                       "showEasing": "cubic_in",
                                       "popupMaxWidth": "70%",
                                       "id": "popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2",
                                       "popupMaxHeight": "70%",
                                       "class": "PopupPanoramaOverlay",
                                       "hideDuration": 500,
                                       "showDuration": 500,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "height": 768,
                                          "class": "ImageResourceLevel",
                                          "width": 1024,
                                          "url": "media/popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2_0_2.jpg"
                                         }
                                        ]
                                       },
                                       "rotationY": 0,
                                       "pitch": 25.2
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_A4EB945B_A93D_70FD_41D3_C27DFF839212",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 5.52,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 164.38,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 34,
                                            "class": "ImageResourceLevel",
                                            "width": 49,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_6_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -6.27
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.mainPlayList.set('selectedIndex', 3)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 5.52,
                                         "yaw": 164.38,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 69,
                                            "class": "ImageResourceLevel",
                                            "width": 98,
                                            "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_0_HS_6_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -6.27
                                        }
                                       ]
                                      }
                                     ],
                                     "thumbnailUrl": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_t.jpg",
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 3178,
                                        "class": "ImageResourceLevel",
                                        "width": 6356,
                                        "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "class": "ImageResourceLevel",
                                        "width": 3217,
                                        "url": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F",
                                     "yaw": 75.34,
                                     "backwardYaw": 176.59,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "vfov": 180,
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_9726040A_9A39_E6B7_41D9_D59B158E0A7F",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 97.6,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 55.74,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 153,
                                               "class": "ImageResourceLevel",
                                               "width": 200,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_1_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -14.64
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "toolTip": "H\u1eb9n g\u1eb7p l\u1ea1i qu\u00fd kh\u00e1ch",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60, this.camera_84D7EF8A_A5B5_101E_41BD_A1B36CADBCEC); this.mainPlayList.set('selectedIndex', 3)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 97.6,
                                            "yaw": 55.74,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "roll": 0,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 1576,
                                               "class": "ImageResourceLevel",
                                               "width": 2048,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -14.64
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_97E824C5_9A3F_A7BD_41D7_CE2E4C0C3FF3",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 12.16,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -69.01,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 92,
                                               "class": "ImageResourceLevel",
                                               "width": 115,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 22.82
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.showPopupPanoramaOverlay(this.popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF8BD5DA_9A28_A157_41DE_E4EA8B4F090A, null, null, null, null, false)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 12.16,
                                            "yaw": -69.01,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 184,
                                               "class": "ImageResourceLevel",
                                               "width": 231,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 22.82
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_9481EEB6_9A38_A3DF_4185_DB7BCF810D61",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 6.37,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -125.28,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 108,
                                               "class": "ImageResourceLevel",
                                               "width": 59,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_3_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -21.3
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2, this.camera_BBB91C15_A905_D04A_41B5_8C5511D340E4); this.mainPlayList.set('selectedIndex', 5)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 6.37,
                                            "yaw": -125.28,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 216,
                                               "class": "ImageResourceLevel",
                                               "width": 119,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -21.3
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_8A899040_9A39_9EB3_41E1_5C080CF75FAB",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 5.17,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -135.94,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 61,
                                               "class": "ImageResourceLevel",
                                               "width": 45,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -7.38
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85, this.camera_BBBF1C05_A905_D04A_41DD_62F3F9A8E55D); this.mainPlayList.set('selectedIndex', 6)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 5.17,
                                            "yaw": -135.94,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 122,
                                               "class": "ImageResourceLevel",
                                               "width": 91,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -7.38
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_97E2B0FB_9A38_9F54_41D7_AC75360FFF1A",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 4.1,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 160.54,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 75,
                                               "class": "ImageResourceLevel",
                                               "width": 36,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_5_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -11.95
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB, this.camera_BBA97BE3_A905_D7CE_41C2_C876D0E930F4); this.mainPlayList.set('selectedIndex', 7)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 4.1,
                                            "yaw": 160.54,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 150,
                                               "class": "ImageResourceLevel",
                                               "width": 73,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -11.95
                                           }
                                          ]
                                         },
                                         {
                                          "hfov": 12.16,
                                          "rotationZ": 0,
                                          "yaw": -69.01,
                                          "rotationX": 0,
                                          "hideEasing": "cubic_out",
                                          "showEasing": "cubic_in",
                                          "popupMaxWidth": "70%",
                                          "id": "popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B",
                                          "popupMaxHeight": "70%",
                                          "class": "PopupPanoramaOverlay",
                                          "hideDuration": 500,
                                          "showDuration": 500,
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "height": 407,
                                             "class": "ImageResourceLevel",
                                             "width": 1024,
                                             "url": "media/popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B_0_3.jpg"
                                            }
                                           ]
                                          },
                                          "rotationY": 0,
                                          "pitch": 22.82
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_A4E1DB39_A905_D0BD_41CD_223D597A2BA6",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 15.7,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 56.43,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 162,
                                               "class": "ImageResourceLevel",
                                               "width": 165,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_6_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -34.08
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60, this.camera_BBB28BF4_A905_D7CA_41D9_10369D68107E); this.mainPlayList.set('selectedIndex', 3)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 15.7,
                                            "yaw": 56.43,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 324,
                                               "class": "ImageResourceLevel",
                                               "width": 331,
                                               "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_0_HS_6_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -34.08
                                           }
                                          ]
                                         }
                                        ],
                                        "thumbnailUrl": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_t.jpg",
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 3152,
                                           "class": "ImageResourceLevel",
                                           "width": 6304,
                                           "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "class": "ImageResourceLevel",
                                           "width": 3217,
                                           "url": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "vfov": 180,
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_97D8AA20_9A18_62F4_41E0_AD8409421EE2",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 14.44,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -135.52,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 93,
                                                  "class": "ImageResourceLevel",
                                                  "width": 127,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": 3.6
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.showPopupPanoramaOverlay(this.popup_87569139_9A68_BED4_41DA_FE311C42573D, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF8E35DE_9A28_A14F_41DF_A4F8ACBFEE97, null, null, null, null, false)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 14.44,
                                               "yaw": -135.52,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 186,
                                                  "class": "ImageResourceLevel",
                                                  "width": 254,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": 3.6
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_95314F7A_9A1B_A157_41DD_BB8C81F228F7",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 13.79,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 59.45,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 93,
                                                  "class": "ImageResourceLevel",
                                                  "width": 127,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_1_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -17.69
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.showPopupPanoramaOverlay(this.popup_86A62C71_9A68_6754_41C0_93189CD725C5, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF8CE5DF_9A28_A14D_41E0_36A164BDE95F, null, null, null, null, false)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 13.79,
                                               "yaw": 59.45,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 186,
                                                  "class": "ImageResourceLevel",
                                                  "width": 254,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -17.69
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_95D46E99_9A18_63D5_41E1_1C74CF62EC5A",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 5.03,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -40.49,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 90,
                                                  "class": "ImageResourceLevel",
                                                  "width": 45,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.46
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76, this.camera_BD4319BF_A905_D3B6_41A1_B04B8744BE08); this.mainPlayList.set('selectedIndex', 4)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 5.03,
                                               "yaw": -40.49,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 180,
                                                  "class": "ImageResourceLevel",
                                                  "width": 90,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.46
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_9481CB43_9A18_A2B5_41E3_12044FE10E99",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 5.03,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -68.27,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 89,
                                                  "class": "ImageResourceLevel",
                                                  "width": 44,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_3_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -10.23
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2, this.camera_BD4A19D4_A905_D3CA_41D3_E4D5A6E9C570); this.mainPlayList.set('selectedIndex', 5)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 5.03,
                                               "yaw": -68.27,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 179,
                                                  "class": "ImageResourceLevel",
                                                  "width": 89,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -10.23
                                              }
                                             ]
                                            },
                                            {
                                             "hfov": 14.44,
                                             "rotationZ": 0,
                                             "yaw": -135.52,
                                             "rotationX": 0,
                                             "hideEasing": "cubic_out",
                                             "showEasing": "cubic_in",
                                             "popupMaxWidth": "70%",
                                             "id": "popup_87569139_9A68_BED4_41DA_FE311C42573D",
                                             "popupMaxHeight": "70%",
                                             "class": "PopupPanoramaOverlay",
                                             "hideDuration": 500,
                                             "showDuration": 500,
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "height": 768,
                                                "class": "ImageResourceLevel",
                                                "width": 1024,
                                                "url": "media/popup_87569139_9A68_BED4_41DA_FE311C42573D_0_2.jpg"
                                               }
                                              ]
                                             },
                                             "rotationY": 0,
                                             "pitch": 3.6
                                            },
                                            {
                                             "hfov": 13.79,
                                             "rotationZ": 0,
                                             "yaw": 59.45,
                                             "rotationX": 0,
                                             "hideEasing": "cubic_out",
                                             "showEasing": "cubic_in",
                                             "popupMaxWidth": "60%",
                                             "id": "popup_86A62C71_9A68_6754_41C0_93189CD725C5",
                                             "popupMaxHeight": "60%",
                                             "class": "PopupPanoramaOverlay",
                                             "hideDuration": 500,
                                             "showDuration": 500,
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "height": 1006,
                                                "class": "ImageResourceLevel",
                                                "width": 1024,
                                                "url": "media/popup_86A62C71_9A68_6754_41C0_93189CD725C5_0_2.jpg"
                                               }
                                              ]
                                             },
                                             "rotationY": 0,
                                             "pitch": -17.69
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_A4CD6994_A905_504A_41D8_2B936B0C1F51",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 7.05,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -19.62,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 67,
                                                  "class": "ImageResourceLevel",
                                                  "width": 62,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_4_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.5
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "toolTip": "H\u1eb9n g\u1eb7 l\u1ea1i qu\u00fd kh\u00e1ch",
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "displayTooltipInTouchScreens": true,
                                               "click": "this.mainPlayList.set('selectedIndex', 3)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 7.05,
                                               "yaw": -19.62,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 135,
                                                  "class": "ImageResourceLevel",
                                                  "width": 124,
                                                  "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.5
                                              }
                                             ]
                                            }
                                           ],
                                           "thumbnailUrl": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_t.jpg",
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "height": 3172,
                                              "class": "ImageResourceLevel",
                                              "width": 6344,
                                              "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "class": "ImageResourceLevel",
                                              "width": 3217,
                                              "url": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76",
                                           "yaw": -40.49,
                                           "backwardYaw": 160.54,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "vfov": 180,
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_971560BF_9A3B_9FCD_41B1_2A7306F97796",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 5.97,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -176.17,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 80,
                                                     "class": "ImageResourceLevel",
                                                     "width": 57,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_0_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -23.8
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76, this.camera_BD749A3E_A905_D0B6_41DD_201FCB109A21); this.mainPlayList.set('selectedIndex', 4)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 5.97,
                                                  "yaw": -176.17,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 160,
                                                     "class": "ImageResourceLevel",
                                                     "width": 114,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -23.8
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_94C58BE8_9A39_A174_41D2_1233A201D876",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 16.87,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -171.71,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 200,
                                                     "class": "ImageResourceLevel",
                                                     "width": 121,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_1_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -4.37
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "toolTip": "H\u1eb9n g\u1eb7p l\u1ea1i qu\u00fd kh\u00e1ch",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "displayTooltipInTouchScreens": true,
                                                  "click": "this.mainPlayList.set('selectedIndex', 3)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 16.87,
                                                  "yaw": -171.71,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "roll": 0,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 490,
                                                     "class": "ImageResourceLevel",
                                                     "width": 298,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -4.37
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_94B9C7E2_9A28_6175_41DA_53ABF1B11983",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 3.36,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -120.78,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 54,
                                                     "class": "ImageResourceLevel",
                                                     "width": 30,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_2_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -13.74
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB, this.camera_BD7D2A5A_A905_D0FE_41D0_9F5C1BE38C2C); this.mainPlayList.set('selectedIndex', 7)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 3.36,
                                                  "yaw": -120.78,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 108,
                                                     "class": "ImageResourceLevel",
                                                     "width": 60,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_2_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -13.74
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_97D6F152_9A28_E154_41DE_839818891BD2",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 10.23,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -49.72,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 200,
                                                     "class": "ImageResourceLevel",
                                                     "width": 37,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_3_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -5.08
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "toolTip": "B\u00ean trong qu\u1ea7y pha ch\u1ebf",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "displayTooltipInTouchScreens": true,
                                                  "click": "this.showPopupPanoramaOverlay(this.popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF8825DB_9A28_A155_41E0_6A2BCC2E2BF3, null, null, null, null, false)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 10.23,
                                                  "yaw": -49.72,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "roll": 0,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 962,
                                                     "class": "ImageResourceLevel",
                                                     "width": 180,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_3_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -5.08
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_97AC9E5A_9A28_E354_41C1_052657AC9C37",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 6.27,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -18.36,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 79,
                                                     "class": "ImageResourceLevel",
                                                     "width": 57,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_4_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.86
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85, this.camera_BD034A70_A905_D0CA_41BA_B594326D16E7); this.mainPlayList.set('selectedIndex', 6)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 6.27,
                                                  "yaw": -18.36,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 159,
                                                     "class": "ImageResourceLevel",
                                                     "width": 114,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_4_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.86
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_940F3D8D_9A2F_E1CC_41B1_4DD7A75FCBD0",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 4.81,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 33.06,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 74,
                                                     "class": "ImageResourceLevel",
                                                     "width": 42,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_6_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 8.95
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 8)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 4.81,
                                                  "yaw": 33.06,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 148,
                                                     "class": "ImageResourceLevel",
                                                     "width": 85,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_6_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 8.95
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_95C605F3_9A29_E155_41D4_29BD6865EDA5",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 10.77,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 174.77,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 200,
                                                     "class": "ImageResourceLevel",
                                                     "width": 78,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_7_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -4.37
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "toolTip": "H\u1eb9n g\u1eb7p l\u1ea1i qu\u00fd kh\u00e1ch",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "displayTooltipInTouchScreens": true,
                                                  "click": "this.mainPlayList.set('selectedIndex', 3)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 10.77,
                                                  "yaw": 174.77,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "roll": 0,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 480,
                                                     "class": "ImageResourceLevel",
                                                     "width": 189,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_7_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -4.37
                                                 }
                                                ]
                                               },
                                               {
                                                "hfov": 11.22,
                                                "rotationZ": 0,
                                                "yaw": -49.72,
                                                "rotationX": 0,
                                                "hideEasing": "cubic_out",
                                                "showEasing": "cubic_in",
                                                "popupMaxWidth": "65%",
                                                "id": "popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406",
                                                "popupMaxHeight": "65%",
                                                "class": "PopupPanoramaOverlay",
                                                "hideDuration": 500,
                                                "showDuration": 500,
                                                "image": {
                                                 "class": "ImageResource",
                                                 "levels": [
                                                  {
                                                   "height": 768,
                                                   "class": "ImageResourceLevel",
                                                   "width": 1024,
                                                   "url": "media/popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406_0_2.jpg"
                                                  }
                                                 ]
                                                },
                                                "rotationY": 0,
                                                "pitch": -5.08
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_A4A53B37_A905_D0B6_41E1_55CC5BBCC14D",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 5.84,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -176.22,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 55,
                                                     "class": "ImageResourceLevel",
                                                     "width": 52,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_8_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -9.98
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 3)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 5.84,
                                                  "yaw": -176.22,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 110,
                                                     "class": "ImageResourceLevel",
                                                     "width": 104,
                                                     "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_0_HS_8_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -9.98
                                                 }
                                                ]
                                               }
                                              ],
                                              "thumbnailUrl": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_t.jpg",
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "height": 3160,
                                                 "class": "ImageResourceLevel",
                                                 "width": 6320,
                                                 "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_hq.jpeg"
                                                },
                                                {
                                                 "height": 1608,
                                                 "class": "ImageResourceLevel",
                                                 "width": 3217,
                                                 "url": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2.jpeg"
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76",
                                              "yaw": -176.17,
                                              "backwardYaw": -125.28,
                                              "distance": 1
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB",
                                              "yaw": -120.78,
                                              "backwardYaw": -68.27,
                                              "distance": 1
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85",
                                              "yaw": -18.36,
                                              "backwardYaw": 150.04,
                                              "distance": 1
                                             }
                                            ],
                                            "hfovMin": 60,
                                            "partial": false,
                                            "id": "panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2",
                                            "hfov": 360,
                                            "cardboardMenu": {
                                             "fontFamily": "Arial",
                                             "rollOverFontColor": "#FFFFFF",
                                             "label": "Media",
                                             "backgroundColor": "#404040",
                                             "rollOverBackgroundColor": "#000000",
                                             "fontColor": "#FFFFFF",
                                             "selectedFontColor": "#FFFFFF",
                                             "id": "Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                             "selectedBackgroundColor": "#202020",
                                             "rollOverOpacity": 0.8,
                                             "class": "Menu",
                                             "children": [
                                              {
                                               "class": "MenuItem",
                                               "label": "1",
                                               "click": "this.mainPlayList.set('selectedIndex', 0)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "2",
                                               "click": "this.mainPlayList.set('selectedIndex', 1)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "3",
                                               "click": "this.mainPlayList.set('selectedIndex', 2)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "4",
                                               "click": "this.mainPlayList.set('selectedIndex', 3)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "5",
                                               "click": "this.mainPlayList.set('selectedIndex', 4)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "6",
                                               "click": "this.mainPlayList.set('selectedIndex', 5)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "7",
                                               "click": "this.mainPlayList.set('selectedIndex', 6)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "8",
                                               "click": "this.mainPlayList.set('selectedIndex', 7)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "9",
                                               "click": "this.mainPlayList.set('selectedIndex', 8)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "10",
                                               "click": "this.mainPlayList.set('selectedIndex', 9)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "11",
                                               "click": "this.mainPlayList.set('selectedIndex', 10)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "12",
                                               "click": "this.mainPlayList.set('selectedIndex', 11)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "13",
                                               "click": "this.mainPlayList.set('selectedIndex', 12)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "14",
                                               "click": "this.mainPlayList.set('selectedIndex', 13)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "15",
                                               "click": "this.mainPlayList.set('selectedIndex', 14)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "16",
                                               "click": "this.mainPlayList.set('selectedIndex', 15)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "17",
                                               "click": "this.mainPlayList.set('selectedIndex', 16)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "18",
                                               "click": "this.mainPlayList.set('selectedIndex', 17)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "19",
                                               "click": "this.mainPlayList.set('selectedIndex', 18)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "20",
                                               "click": "this.mainPlayList.set('selectedIndex', 19)"
                                              },
                                              {
                                               "class": "MenuItem",
                                               "label": "21",
                                               "click": "this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "opacity": 0.4
                                            },
                                            "label": "6",
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_t.jpg",
                                            "class": "Panorama",
                                            "hfovMax": 120
                                           },
                                           "yaw": -68.27,
                                           "backwardYaw": -120.78,
                                           "distance": 1
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "partial": false,
                                         "id": "panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB",
                                         "hfov": 360,
                                         "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                         "label": "8",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_t.jpg",
                                         "class": "Panorama",
                                         "hfovMax": 120
                                        },
                                        "yaw": 160.54,
                                        "backwardYaw": -40.49,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60",
                                        "yaw": 56.43,
                                        "backwardYaw": -13.3,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85",
                                        "yaw": -135.94,
                                        "backwardYaw": 163.47,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2",
                                        "yaw": -125.28,
                                        "backwardYaw": -176.17,
                                        "distance": 1
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "partial": false,
                                      "id": "panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76",
                                      "hfov": 360,
                                      "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                      "label": "5",
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_t.jpg",
                                      "class": "Panorama",
                                      "hfovMax": 120
                                     },
                                     "yaw": 163.47,
                                     "backwardYaw": -135.94,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2",
                                     "yaw": 150.04,
                                     "backwardYaw": -18.36,
                                     "distance": 1
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "partial": false,
                                   "id": "panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85",
                                   "hfov": 360,
                                   "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                   "label": "7",
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_t.jpg",
                                   "class": "Panorama",
                                   "hfovMax": 120
                                  },
                                  "yaw": 176.59,
                                  "backwardYaw": 75.34,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C",
                                  "yaw": 157.99,
                                  "backwardYaw": 41.93,
                                  "distance": 1
                                 }
                                ],
                                "hfovMin": 60,
                                "partial": false,
                                "id": "panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F",
                                "hfov": 360,
                                "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                "label": "9",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_t.jpg",
                                "class": "Panorama",
                                "hfovMax": 120
                               },
                               "yaw": 41.93,
                               "backwardYaw": 157.99,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326",
                               "yaw": 142.69,
                               "backwardYaw": -147.16,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "vfov": 180,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_94F45A4C_9A29_A2B3_41E1_C0E3E130456A",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 6.87,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 165.38,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 114,
                                         "class": "ImageResourceLevel",
                                         "width": 73,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -33.85
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C, this.camera_BA03FCAA_A905_D05F_41D5_2705B9A617A9); this.mainPlayList.set('selectedIndex', 9)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 6.87,
                                      "yaw": 165.38,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 228,
                                         "class": "ImageResourceLevel",
                                         "width": 147,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -33.85
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_9487079A_9A28_A1D7_41B0_2FA6DCDABE04",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 6.92,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 170.53,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 73,
                                         "class": "ImageResourceLevel",
                                         "width": 65,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -18.24
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA, this.camera_BA084CBA_A905_D1BF_41D5_7A2596CBF766); this.mainPlayList.set('selectedIndex', 11)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 6.92,
                                      "yaw": 170.53,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 146,
                                         "class": "ImageResourceLevel",
                                         "width": 130,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -18.24
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_95AF2B02_9A38_62B4_41DF_729DFB27B383",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 14.29,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 164.37,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "class": "ImageResourceLevel",
                                         "width": 75,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_3_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 23.47
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "toolTip": "L\u00ean l\u1ea7u 3",
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "displayTooltipInTouchScreens": true,
                                      "click": "this.startPanoramaWithCamera(this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D, this.camera_86360E07_A5B5_1016_41DB_DD90F04625D5); this.mainPlayList.set('selectedIndex', 15)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 14.29,
                                      "yaw": 164.37,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 679,
                                         "class": "ImageResourceLevel",
                                         "width": 256,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 23.47
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_A7AC87FB_A905_FFBE_41E0_8044C71C6620",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "hfov": 7.79,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 165.23,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 72,
                                         "class": "ImageResourceLevel",
                                         "width": 71,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_4_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 14.88
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D, this.camera_BA7DFC9A_A905_D07F_41D7_6802C99BA478); this.mainPlayList.set('selectedIndex', 15)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 7.79,
                                      "yaw": 165.23,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 144,
                                         "class": "ImageResourceLevel",
                                         "width": 143,
                                         "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 14.88
                                     }
                                    ]
                                   }
                                  ],
                                  "thumbnailUrl": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_t.jpg",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3212,
                                     "class": "ImageResourceLevel",
                                     "width": 6424,
                                     "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "class": "ImageResourceLevel",
                                     "width": 3217,
                                     "url": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "vfov": 180,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_95845EB6_9A38_63DC_41DD_F69188EC3283",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 5.62,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -35.71,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 126,
                                            "class": "ImageResourceLevel",
                                            "width": 68,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -42.89
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE, this.camera_BAFBCD6A_A905_D0DF_41E3_AF3C28F1743F); this.mainPlayList.set('selectedIndex', 14)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 5.62,
                                         "yaw": -35.71,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 253,
                                            "class": "ImageResourceLevel",
                                            "width": 136,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -42.89
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_94024AAD_9A39_E3CD_41E2_C0AA293C6E83",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 25.32,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 168.08,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "class": "ImageResourceLevel",
                                            "width": 49,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_1_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -2.95
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "toolTip": "B\u00ean trong l\u1ea7u 3",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.mainPlayList.set('selectedIndex', 16)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 25.32,
                                         "yaw": 168.08,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "roll": 0,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 1837,
                                            "class": "ImageResourceLevel",
                                            "width": 457,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -2.95
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_8A3E92AE_9A38_A3CF_41D3_B03A9D6DE2F5",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 21.5,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -169.58,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "class": "ImageResourceLevel",
                                            "width": 43,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_3_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -2.35
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "toolTip": "B\u00ean trong l\u1ea7u 3",
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "displayTooltipInTouchScreens": true,
                                         "click": "this.startPanoramaWithCamera(this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867, this.camera_871D7026_A5B2_F016_41C2_9C26AEC6B461); this.mainPlayList.set('selectedIndex', 16)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 21.5,
                                         "yaw": -169.58,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "roll": 0,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 1776,
                                            "class": "ImageResourceLevel",
                                            "width": 386,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -2.35
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_A77AE568_A903_F0DA_41E0_B34FEC5C7234",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "hfov": 14.72,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 176.49,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 158,
                                            "class": "ImageResourceLevel",
                                            "width": 155,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -32.58
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867, this.camera_BA8E1D7B_A905_D0BD_41B8_48527CAA095C); this.mainPlayList.set('selectedIndex', 16)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 14.72,
                                         "yaw": 176.49,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 316,
                                            "class": "ImageResourceLevel",
                                            "width": 310,
                                            "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -32.58
                                        }
                                       ]
                                      }
                                     ],
                                     "thumbnailUrl": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_t.jpg",
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 3196,
                                        "class": "ImageResourceLevel",
                                        "width": 6392,
                                        "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "class": "ImageResourceLevel",
                                        "width": 3217,
                                        "url": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE",
                                     "yaw": -35.71,
                                     "backwardYaw": 165.23,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "vfov": 180,
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_8ABC9242_9A38_E2B7_4188_9E95059AC54C",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 6.49,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 0.46,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 114,
                                               "class": "ImageResourceLevel",
                                               "width": 60,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -18.72
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792, this.camera_BA6EBC7C_A905_D0BA_41E4_5EBE199E77FF); this.mainPlayList.set('selectedIndex', 20)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 6.49,
                                            "yaw": 0.46,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 228,
                                               "class": "ImageResourceLevel",
                                               "width": 120,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -18.72
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_94F892BE_9A38_A3CF_41DF_092AF5E1F81B",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 6.89,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -21.26,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 51,
                                               "class": "ImageResourceLevel",
                                               "width": 61,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_1_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 9.61
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "toolTip": "Tranh t\u01b0\u1eddng",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.showPopupPanoramaOverlay(this.popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF7CE5ED_9A28_A14D_41E0_B17D112BC242, null, null, null, null, false)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 6.89,
                                            "yaw": -21.26,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 103,
                                               "class": "ImageResourceLevel",
                                               "width": 122,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 9.61
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_94FADD8B_9A39_A1B5_41B7_F2EEA60F1441",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 6.56,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -79.43,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 93,
                                               "class": "ImageResourceLevel",
                                               "width": 60,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -17.26
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.mainPlayList.set('selectedIndex', 19)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 6.56,
                                            "yaw": -79.43,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 186,
                                               "class": "ImageResourceLevel",
                                               "width": 120,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -17.26
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_954C7F7B_9A38_A155_41C3_1CF44E496006",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 10.25,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -80.94,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 187,
                                               "class": "ImageResourceLevel",
                                               "width": 90,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_3_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -4.16
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "toolTip": "Lan can l\u1ea7u 3",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.mainPlayList.set('selectedIndex', 19)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 10.25,
                                            "yaw": -80.94,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "roll": 0,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 374,
                                               "class": "ImageResourceLevel",
                                               "width": 180,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.16
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_94C8AB77_9A27_A15C_41BC_AFD16619986D",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 7.49,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -137.94,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 115,
                                               "class": "ImageResourceLevel",
                                               "width": 73,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -26.36
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3, this.camera_BA748C8B_A905_D05E_41DA_9231DEE32E9C); this.mainPlayList.set('selectedIndex', 17)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 7.49,
                                            "yaw": -137.94,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 230,
                                               "class": "ImageResourceLevel",
                                               "width": 147,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -26.36
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_8AEA21FA_9A28_A154_41E2_1F95DCDCCC8E",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 26.3,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 109.97,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 200,
                                               "class": "ImageResourceLevel",
                                               "width": 37,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_6_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -14.28
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "toolTip": "Xu\u1ed1ng c\u1ea7u thang",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D, this.camera_873D2FD8_A5B5_103A_41DC_0796CD848A40); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 26.3,
                                            "yaw": 109.97,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "roll": 0,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 2048,
                                               "class": "ImageResourceLevel",
                                               "width": 386,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_6_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -14.28
                                           }
                                          ]
                                         },
                                         {
                                          "hfov": 6.89,
                                          "rotationZ": 0,
                                          "yaw": -21.26,
                                          "rotationX": 0,
                                          "hideEasing": "cubic_out",
                                          "showEasing": "cubic_in",
                                          "popupMaxWidth": "70%",
                                          "id": "popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08",
                                          "popupMaxHeight": "70%",
                                          "class": "PopupPanoramaOverlay",
                                          "hideDuration": 500,
                                          "showDuration": 500,
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "height": 576,
                                             "class": "ImageResourceLevel",
                                             "width": 1024,
                                             "url": "media/popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08_0_2.jpg"
                                            }
                                           ]
                                          },
                                          "rotationY": 0,
                                          "pitch": 9.61
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_A767F617_A91D_7076_41BD_F684712D5CD2",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 13.81,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 108.63,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 127,
                                               "class": "ImageResourceLevel",
                                               "width": 127,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_7_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -18.34
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D, this.camera_BA663C6C_A905_D0DA_4191_3905878A77A1); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 13.81,
                                            "yaw": 108.63,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 255,
                                               "class": "ImageResourceLevel",
                                               "width": 255,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_7_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -18.34
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_A7AE5B57_A91E_D0F6_41DD_ED11CB1D384B",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "hfov": 8.02,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -80.93,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 68,
                                               "class": "ImageResourceLevel",
                                               "width": 70,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_8_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -4.64
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "toolTip": "Lan can l\u1ea7u 3",
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "displayTooltipInTouchScreens": true,
                                            "click": "this.mainPlayList.set('selectedIndex', 19)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 8.02,
                                            "yaw": -80.93,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 136,
                                               "class": "ImageResourceLevel",
                                               "width": 141,
                                               "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_0_HS_8_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.64
                                           }
                                          ]
                                         }
                                        ],
                                        "thumbnailUrl": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_t.jpg",
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 3168,
                                           "class": "ImageResourceLevel",
                                           "width": 6336,
                                           "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "class": "ImageResourceLevel",
                                           "width": 3217,
                                           "url": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D",
                                        "yaw": 108.63,
                                        "backwardYaw": 176.49,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "vfov": 180,
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_8A925816_9A68_6EDC_41D7_7B92535DA073",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 7.37,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 99.24,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 112,
                                                  "class": "ImageResourceLevel",
                                                  "width": 70,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_1_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -22.23
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867, this.camera_BAF57D59_A905_D0FD_41D9_B2A21F6B8DFC); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 7.37,
                                               "yaw": 99.24,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 224,
                                                  "class": "ImageResourceLevel",
                                                  "width": 140,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -22.23
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_8BB4C1A8_9A68_A1F4_41C9_3796A6E80F68",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 7.06,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 141.19,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 82,
                                                  "class": "ImageResourceLevel",
                                                  "width": 63,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -12.59
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B, this.camera_BAD8CD39_A905_D0BD_4180_CCB7E447407C); this.mainPlayList.set('selectedIndex', 18)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 7.06,
                                               "yaw": 141.19,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 164,
                                                  "class": "ImageResourceLevel",
                                                  "width": 127,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -12.59
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_94A70383_9A68_E1B4_41C5_174D458C030A",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 11.22,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 162.43,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 199,
                                                  "class": "ImageResourceLevel",
                                                  "width": 99,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_4_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -1.63
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "toolTip": "Lan can l\u1ea7u 3",
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "displayTooltipInTouchScreens": true,
                                               "click": "this.startPanoramaWithCamera(this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502, this.camera_878C8D65_A5B5_100A_41D4_B673539AF0F3); this.mainPlayList.set('selectedIndex', 19)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 11.22,
                                               "yaw": 162.43,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "roll": 0,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 398,
                                                  "class": "ImageResourceLevel",
                                                  "width": 198,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -1.63
                                              }
                                             ]
                                            },
                                            {
                                             "hfov": 8.88,
                                             "rotationZ": 0,
                                             "yaw": 27.65,
                                             "rotationX": 0,
                                             "hideEasing": "cubic_out",
                                             "showEasing": "cubic_in",
                                             "popupMaxWidth": "70%",
                                             "id": "popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D",
                                             "popupMaxHeight": "70%",
                                             "class": "PopupPanoramaOverlay",
                                             "hideDuration": 500,
                                             "showDuration": 500,
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "height": 682,
                                                "class": "ImageResourceLevel",
                                                "width": 1024,
                                                "url": "media/popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D_0_2.jpg"
                                               }
                                              ]
                                             },
                                             "rotationY": 0,
                                             "pitch": 7.75
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_A6891910_A902_F04B_41C2_8BAAC186BB8F",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 8.88,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 27.65,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 77,
                                                  "class": "ImageResourceLevel",
                                                  "width": 78,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_5_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": 7.75
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.showPopupPanoramaOverlay(this.popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_A17348FA_9BF8_EF57_41D2_0B94AF571978, null, null, null, null, false)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 8.88,
                                               "yaw": 27.65,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 155,
                                                  "class": "ImageResourceLevel",
                                                  "width": 157,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_5_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": 7.75
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_A6181C52_A90D_50CC_419A_DBECB27AC2E9",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "hfov": 7.19,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 162.66,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 57,
                                                  "class": "ImageResourceLevel",
                                                  "width": 63,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_6_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.48
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502, this.camera_BAEF0D49_A905_D0DD_41D2_11854F103E43); this.mainPlayList.set('selectedIndex', 19)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 7.19,
                                               "yaw": 162.66,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 115,
                                                  "class": "ImageResourceLevel",
                                                  "width": 126,
                                                  "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_0_HS_6_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.48
                                              }
                                             ]
                                            }
                                           ],
                                           "thumbnailUrl": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_t.jpg",
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "height": 3168,
                                              "class": "ImageResourceLevel",
                                              "width": 6336,
                                              "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "class": "ImageResourceLevel",
                                              "width": 3217,
                                              "url": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "vfov": 180,
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_94884798_9A29_A1D3_41D6_437EC0BB041D",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 8.03,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -160.63,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 144,
                                                     "class": "ImageResourceLevel",
                                                     "width": 89,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_0_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -37.48
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 16)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 8.03,
                                                  "yaw": -160.63,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 288,
                                                     "class": "ImageResourceLevel",
                                                     "width": 178,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -37.48
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_95658410_9A29_E6D4_41CF_133EE164F77A",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 5.92,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -70.6,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 94,
                                                     "class": "ImageResourceLevel",
                                                     "width": 53,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_1_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -12.17
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3, this.camera_BD4659A8_A905_D05A_41D9_3DE1886FB53E); this.mainPlayList.set('selectedIndex', 17)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 5.92,
                                                  "yaw": -70.6,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 188,
                                                     "class": "ImageResourceLevel",
                                                     "width": 107,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -12.17
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_8A2B2401_9A28_66B5_41DA_41B9F63440BD",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 7.32,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 129.64,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 105,
                                                     "class": "ImageResourceLevel",
                                                     "width": 67,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_2_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.6
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792, this.camera_BABFC993_A905_D04D_41BB_4A9368623886); this.mainPlayList.set('selectedIndex', 20)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 7.32,
                                                  "yaw": 129.64,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 210,
                                                     "class": "ImageResourceLevel",
                                                     "width": 134,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_2_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.6
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_958BF66B_9A18_E375_4196_541A449722B1",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 18.56,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 3.97,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 199,
                                                     "class": "ImageResourceLevel",
                                                     "width": 102,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_5_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -8.03
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "toolTip": "Lan can l\u1ea7u 3",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "displayTooltipInTouchScreens": true,
                                                  "click": "this.mainPlayList.set('selectedIndex', 19)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 18.56,
                                                  "yaw": 3.97,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "roll": 0,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 645,
                                                     "class": "ImageResourceLevel",
                                                     "width": 330,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_5_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -8.03
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_9573D6EF_9A1B_E34C_41B2_0FB7C6AEA392",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 6.82,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 100.72,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 52,
                                                     "class": "ImageResourceLevel",
                                                     "width": 61,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_6_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 11.91
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "toolTip": "Tranh t\u01b0\u1eddng",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "displayTooltipInTouchScreens": true,
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 6.82,
                                                  "yaw": 100.72,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 104,
                                                     "class": "ImageResourceLevel",
                                                     "width": 123,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_6_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": 11.91
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_8A3FDAE1_9A19_A375_41DD_283B767CD3D0",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 8.36,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -157.56,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 200,
                                                     "class": "ImageResourceLevel",
                                                     "width": 41,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_7_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -6.63
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "toolTip": "Xu\u1ed1ng l\u1ea7u 3",
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "displayTooltipInTouchScreens": true,
                                                  "click": "this.mainPlayList.set('selectedIndex', 15)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 8.36,
                                                  "yaw": -157.56,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "roll": 0,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 699,
                                                     "class": "ImageResourceLevel",
                                                     "width": 147,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_7_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -6.63
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_A68D2F7E_A903_D0B6_41C0_3BDD30A25358",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 10.42,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 3.89,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 87,
                                                     "class": "ImageResourceLevel",
                                                     "width": 94,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_8_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -12.43
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 19)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 10.42,
                                                  "yaw": 3.89,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 174,
                                                     "class": "ImageResourceLevel",
                                                     "width": 188,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_8_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -12.43
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_A61631FB_A905_D3BD_41C3_4839FF95C704",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "hfov": 6.25,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -157.61,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 90,
                                                     "class": "ImageResourceLevel",
                                                     "width": 56,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_9_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -10.39
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 15)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 6.25,
                                                  "yaw": -157.61,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 180,
                                                     "class": "ImageResourceLevel",
                                                     "width": 112,
                                                     "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_0_HS_9_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -10.39
                                                 }
                                                ]
                                               }
                                              ],
                                              "thumbnailUrl": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_t.jpg",
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "height": 3178,
                                                 "class": "ImageResourceLevel",
                                                 "width": 6356,
                                                 "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_hq.jpeg"
                                                },
                                                {
                                                 "height": 1608,
                                                 "class": "ImageResourceLevel",
                                                 "width": 3217,
                                                 "url": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B.jpeg"
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792",
                                              "yaw": 129.64,
                                              "backwardYaw": 141.19,
                                              "distance": 1
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "vfov": 180,
                                               "frames": [
                                                {
                                                 "class": "SphericPanoramaFrame",
                                                 "overlays": [
                                                  {
                                                   "useHandCursor": true,
                                                   "id": "overlay_8AE54097_9A28_7FDC_41E2_D58B76CAED32",
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "hfov": 8.02,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 50.99,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 200,
                                                        "class": "ImageResourceLevel",
                                                        "width": 41,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_0_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -7.23
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "toolTip": "Lan can l\u1ea7u 3",
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "displayTooltipInTouchScreens": true,
                                                     "click": "this.mainPlayList.set('selectedIndex', 19)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "hfov": 8.02,
                                                     "yaw": 50.99,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "roll": 0,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 672,
                                                        "class": "ImageResourceLevel",
                                                        "width": 141,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_0_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -7.23
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "id": "overlay_95ED6795_9A2F_E1DC_41DB_745159F54863",
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "hfov": 7.55,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 76.87,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 113,
                                                        "class": "ImageResourceLevel",
                                                        "width": 69,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_1_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -17.36
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B, this.camera_BD64FA16_A905_D076_41E3_233E9E380B70); this.mainPlayList.set('selectedIndex', 18)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "hfov": 7.55,
                                                     "yaw": 76.87,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 226,
                                                        "class": "ImageResourceLevel",
                                                        "width": 139,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_1_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -17.36
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "id": "overlay_94DDF66B_9A28_A374_41DA_DBF72D29D89C",
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "hfov": 5.87,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 105.7,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 70,
                                                        "class": "ImageResourceLevel",
                                                        "width": 52,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_2_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -11.05
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.mainPlayList.set('selectedIndex', 20)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "hfov": 5.87,
                                                     "yaw": 105.7,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 141,
                                                        "class": "ImageResourceLevel",
                                                        "width": 105,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_2_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -11.05
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "id": "overlay_955F70D1_9A29_9F54_41DB_D85B1F6FE21F",
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "hfov": 4.99,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 101.62,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 45,
                                                        "class": "ImageResourceLevel",
                                                        "width": 44,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_3_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 9.45
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "toolTip": "Tranh t\u01b0\u1eddng",
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "displayTooltipInTouchScreens": true,
                                                     "click": "this.showPopupPanoramaOverlay(this.popup_A88D18E2_9A39_AF74_41D9_AF6784222B47, {'pressedBackgroundOpacity':0.3,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'paddingBottom':5,'paddingRight':5,'pressedIconHeight':20,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverIconColor':'#666666','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconLineWidth':5,'iconColor':'#000000','borderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'pressedIconColor':'#888888','paddingTop':5,'rollOverBorderSize':0,'pressedBorderSize':0}, this.ImageResource_AF7D85EF_9A28_A14D_41DF_F929DD3462FC, null, null, null, null, false)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "hfov": 4.99,
                                                     "yaw": 101.62,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 90,
                                                        "class": "ImageResourceLevel",
                                                        "width": 89,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_3_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": 9.45
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "id": "overlay_94FECA9D_9A28_A3CD_4190_FCEDC9E430E9",
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "hfov": 4.8,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 140.21,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 83,
                                                        "class": "ImageResourceLevel",
                                                        "width": 42,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_4_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -9.05
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867, this.camera_BD6C6A2A_A905_D05E_41DC_34011DF54D52); this.mainPlayList.set('selectedIndex', 16)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "hfov": 4.8,
                                                     "yaw": 140.21,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 167,
                                                        "class": "ImageResourceLevel",
                                                        "width": 85,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_4_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -9.05
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "hfov": 4.99,
                                                   "rotationZ": 0,
                                                   "yaw": 101.62,
                                                   "rotationX": 0,
                                                   "hideEasing": "cubic_out",
                                                   "showEasing": "cubic_in",
                                                   "popupMaxWidth": "70%",
                                                   "id": "popup_A88D18E2_9A39_AF74_41D9_AF6784222B47",
                                                   "popupMaxHeight": "70%",
                                                   "class": "PopupPanoramaOverlay",
                                                   "hideDuration": 500,
                                                   "showDuration": 500,
                                                   "image": {
                                                    "class": "ImageResource",
                                                    "levels": [
                                                     {
                                                      "height": 576,
                                                      "class": "ImageResourceLevel",
                                                      "width": 1024,
                                                      "url": "media/popup_A88D18E2_9A39_AF74_41D9_AF6784222B47_0_2.jpg"
                                                     }
                                                    ]
                                                   },
                                                   "rotationY": 0,
                                                   "pitch": 9.45
                                                  },
                                                  {
                                                   "useHandCursor": true,
                                                   "id": "overlay_A660976C_A91E_F0DB_41DA_4EC255BA8986",
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "maps": [
                                                    {
                                                     "hfov": 8.55,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 51.7,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 75,
                                                        "class": "ImageResourceLevel",
                                                        "width": 75,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_5_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -5.04
                                                    }
                                                   ],
                                                   "areas": [
                                                    {
                                                     "toolTip": "Lan can l\u1ea7u 3",
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "displayTooltipInTouchScreens": true,
                                                     "click": "this.mainPlayList.set('selectedIndex', 19)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "hfov": 8.55,
                                                     "yaw": 51.7,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 151,
                                                        "class": "ImageResourceLevel",
                                                        "width": 151,
                                                        "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_0_HS_5_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -5.04
                                                    }
                                                   ]
                                                  }
                                                 ],
                                                 "thumbnailUrl": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_t.jpg",
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "height": 3166,
                                                    "class": "ImageResourceLevel",
                                                    "width": 6332,
                                                    "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_hq.jpeg"
                                                   },
                                                   {
                                                    "height": 1608,
                                                    "class": "ImageResourceLevel",
                                                    "width": 3217,
                                                    "url": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3.jpeg"
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B",
                                                 "yaw": 76.87,
                                                 "backwardYaw": -70.6,
                                                 "distance": 1
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867",
                                                 "yaw": 140.21,
                                                 "backwardYaw": -137.94,
                                                 "distance": 1
                                                }
                                               ],
                                               "hfovMin": 60,
                                               "partial": false,
                                               "id": "panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3",
                                               "hfov": 360,
                                               "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                               "label": "18",
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_t.jpg",
                                               "class": "Panorama",
                                               "hfovMax": 120
                                              },
                                              "yaw": -70.6,
                                              "backwardYaw": 76.87,
                                              "distance": 1
                                             }
                                            ],
                                            "hfovMin": 60,
                                            "partial": false,
                                            "id": "panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B",
                                            "hfov": 360,
                                            "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                            "label": "19",
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_t.jpg",
                                            "class": "Panorama",
                                            "hfovMax": 120
                                           },
                                           "yaw": 141.19,
                                           "backwardYaw": 129.64,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502",
                                           "yaw": 162.66,
                                           "backwardYaw": 21.66,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867",
                                           "yaw": 99.24,
                                           "backwardYaw": 0.46,
                                           "distance": 1
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "partial": false,
                                         "id": "panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792",
                                         "hfov": 360,
                                         "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                         "label": "21",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_t.jpg",
                                         "class": "Panorama",
                                         "hfovMax": 120
                                        },
                                        "yaw": 0.46,
                                        "backwardYaw": 99.24,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3",
                                        "yaw": -137.94,
                                        "backwardYaw": 140.21,
                                        "distance": 1
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "partial": false,
                                      "id": "panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867",
                                      "hfov": 360,
                                      "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                      "label": "17",
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_t.jpg",
                                      "class": "Panorama",
                                      "hfovMax": 120
                                     },
                                     "yaw": 176.49,
                                     "backwardYaw": 108.63,
                                     "distance": 1
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "partial": false,
                                   "id": "panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D",
                                   "hfov": 360,
                                   "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                   "label": "16",
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_t.jpg",
                                   "class": "Panorama",
                                   "hfovMax": 120
                                  },
                                  "yaw": 165.23,
                                  "backwardYaw": -35.71,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C",
                                  "yaw": 165.38,
                                  "backwardYaw": 38.84,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA",
                                  "yaw": 170.53,
                                  "backwardYaw": 165.79,
                                  "distance": 1
                                 }
                                ],
                                "hfovMin": 60,
                                "partial": false,
                                "id": "panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE",
                                "hfov": 360,
                                "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                                "label": "15",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_t.jpg",
                                "class": "Panorama",
                                "hfovMax": 120
                               },
                               "yaw": 38.84,
                               "backwardYaw": 165.38,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA",
                               "yaw": -140.31,
                               "backwardYaw": 164.81,
                               "distance": 1
                              }
                             ],
                             "hfovMin": 60,
                             "partial": false,
                             "id": "panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C",
                             "hfov": 360,
                             "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                             "label": "10",
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_t.jpg",
                             "class": "Panorama",
                             "hfovMax": 120
                            },
                            "yaw": -147.16,
                            "backwardYaw": 142.69,
                            "distance": 1
                           }
                          ],
                          "hfovMin": 60,
                          "partial": false,
                          "id": "panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326",
                          "hfov": 360,
                          "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                          "label": "11",
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_t.jpg",
                          "class": "Panorama",
                          "hfovMax": 120
                         },
                         "yaw": -148.62,
                         "backwardYaw": 120.25,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C",
                         "yaw": 164.81,
                         "backwardYaw": -140.31,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0",
                         "yaw": -87.62,
                         "backwardYaw": -32.02,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE",
                         "yaw": 165.79,
                         "backwardYaw": 170.53,
                         "distance": 1
                        }
                       ],
                       "hfovMin": 60,
                       "partial": false,
                       "id": "panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA",
                       "hfov": 360,
                       "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                       "label": "12",
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_t.jpg",
                       "class": "Panorama",
                       "hfovMax": 120
                      },
                      "yaw": -32.02,
                      "backwardYaw": -87.62,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA",
                      "yaw": -147.06,
                      "backwardYaw": 0.96,
                      "distance": 1
                     }
                    ],
                    "hfovMin": 60,
                    "partial": false,
                    "id": "panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0",
                    "hfov": 360,
                    "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                    "label": "13",
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_t.jpg",
                    "class": "Panorama",
                    "hfovMax": 120
                   },
                   "yaw": 0.96,
                   "backwardYaw": -147.06,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25",
                   "yaw": 104.5,
                   "backwardYaw": -62.7,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6",
                   "yaw": 130.28,
                   "backwardYaw": -51.13,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60",
                   "yaw": 84.49,
                   "backwardYaw": -123.05,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA",
                   "yaw": 147.52,
                   "backwardYaw": -33.63,
                   "distance": 1
                  }
                 ],
                 "hfovMin": 60,
                 "partial": false,
                 "id": "panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA",
                 "hfov": 360,
                 "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
                 "label": "14",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_t.jpg",
                 "class": "Panorama",
                 "hfovMax": 120
                },
                "yaw": -123.05,
                "backwardYaw": 84.49,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76",
                "yaw": -13.3,
                "backwardYaw": 56.43,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6",
                "yaw": 154.02,
                "backwardYaw": -1.28,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA",
                "yaw": 153.99,
                "backwardYaw": 2.13,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25",
                "yaw": 153.95,
                "backwardYaw": 7,
                "distance": 1
               }
              ],
              "hfovMin": 60,
              "partial": false,
              "id": "panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60",
              "hfov": 360,
              "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
              "label": "4",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_t.jpg",
              "class": "Panorama",
              "hfovMax": 120
             },
             "yaw": 7,
             "backwardYaw": 153.95,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA",
             "yaw": -62.7,
             "backwardYaw": 104.5,
             "distance": 1
            }
           ],
           "hfovMin": 60,
           "partial": false,
           "id": "panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25",
           "hfov": 360,
           "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
           "label": "3",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_t.jpg",
           "class": "Panorama",
           "hfovMax": 120
          },
          "yaw": -0.91,
          "backwardYaw": -173.64,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60",
          "yaw": -1.28,
          "backwardYaw": 154.02,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA",
          "yaw": 176.05,
          "backwardYaw": 2.19,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA",
          "yaw": -51.13,
          "backwardYaw": 130.28,
          "distance": 1
         }
        ],
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6",
        "hfov": 360,
        "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
        "label": "2",
        "pitch": 0,
        "thumbnailUrl": "media/panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_t.jpg",
        "class": "Panorama",
        "hfovMax": 120
       },
       "yaw": 159.68,
       "backwardYaw": -14.89,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792",
       "yaw": 21.66,
       "backwardYaw": 162.66,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25",
       "yaw": 142.17,
       "backwardYaw": -11.72,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA",
       "yaw": 168.23,
       "backwardYaw": -7.47,
       "distance": 1
      }
     ],
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_93B4434A_9A68_A2B4_41D5_C688367C9502",
     "hfov": 360,
     "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
     "label": "20",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_t.jpg",
     "class": "Panorama",
     "hfovMax": 120
    },
    "yaw": -7.47,
    "backwardYaw": 168.23,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25",
    "yaw": 2.33,
    "backwardYaw": -173.22,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6",
    "yaw": 2.19,
    "backwardYaw": 176.05,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60",
    "yaw": 2.13,
    "backwardYaw": 153.99,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA",
    "yaw": -33.63,
    "backwardYaw": 147.52,
    "distance": 1
   }
  ],
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA",
  "hfov": 360,
  "cardboardMenu": "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
  "label": "1",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_t.jpg",
  "class": "Panorama",
  "hfovMax": 120
 },
 {
  "mouseControlMode": "drag_rotation",
  "buttonCardboardView": {
   "verticalAlign": "middle",
   "maxHeight": 36,
   "paddingRight": 0,
   "width": 49,
   "transparencyActive": false,
   "height": 36,
   "mode": "push",
   "minHeight": 1,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "borderSize": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "bottom": "2.91%",
   "id": "IconButton_B975E0A1_A903_704A_41C6_0778F3912D30",
   "maxWidth": 49,
   "paddingTop": 0,
   "minWidth": 1,
   "borderRadius": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_B975E0A1_A903_704A_41C6_0778F3912D30.png",
   "right": "0.89%"
  },
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "gyroscopeEnabled": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.94,
   "pitch": -17.37
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA"
   },
   {
    "camera": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6"
   },
   {
    "camera": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25"
   },
   {
    "camera": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60"
   },
   {
    "camera": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76"
   },
   {
    "camera": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2"
   },
   {
    "camera": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85"
   },
   {
    "camera": "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB"
   },
   {
    "camera": "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F"
   },
   {
    "camera": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C"
   },
   {
    "camera": "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326"
   },
   {
    "camera": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA"
   },
   {
    "camera": "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0"
   },
   {
    "camera": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA"
   },
   {
    "camera": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE"
   },
   {
    "camera": "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D"
   },
   {
    "camera": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867"
   },
   {
    "camera": "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3"
   },
   {
    "camera": "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B"
   },
   {
    "camera": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502"
   },
   {
    "camera": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
    "media": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist",
  "items": [
   {
    "camera": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 0, 1)",
    "media": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA"
   },
   {
    "camera": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 1, 2)",
    "media": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6"
   },
   {
    "camera": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 2, 3)",
    "media": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25"
   },
   {
    "camera": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 3, 4)",
    "media": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60"
   },
   {
    "camera": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 4, 5)",
    "media": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76"
   },
   {
    "camera": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 5, 6)",
    "media": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2"
   },
   {
    "camera": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 6, 7)",
    "media": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85"
   },
   {
    "camera": "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 7, 8)",
    "media": "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB"
   },
   {
    "camera": "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 8, 9)",
    "media": "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F"
   },
   {
    "camera": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 9, 10)",
    "media": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C"
   },
   {
    "camera": "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 10, 11)",
    "media": "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326"
   },
   {
    "camera": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 11, 12)",
    "media": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA"
   },
   {
    "camera": "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 12, 13)",
    "media": "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0"
   },
   {
    "camera": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 13, 14)",
    "media": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA"
   },
   {
    "camera": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 14, 15)",
    "media": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE"
   },
   {
    "camera": "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 15, 16)",
    "media": "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D"
   },
   {
    "camera": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 16, 17)",
    "media": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867"
   },
   {
    "camera": "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 17, 18)",
    "media": "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3"
   },
   {
    "camera": "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 18, 19)",
    "media": "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B"
   },
   {
    "camera": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 19, 20)",
    "media": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502"
   },
   {
    "camera": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist, 20, 0)",
    "media": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist",
  "items": [
   {
    "camera": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 0, 1)",
    "media": "this.panorama_9087A180_9A67_A1B3_41D5_B6A35B1CE5DA"
   },
   {
    "camera": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 1, 2)",
    "media": "this.panorama_93B4B23F_9A67_A2CC_41A9_3B29872756E6"
   },
   {
    "camera": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 2, 3)",
    "media": "this.panorama_93B23BCA_9A67_A1B7_41D5_9B7753B4BD25"
   },
   {
    "camera": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 3, 4)",
    "media": "this.panorama_93B2355B_9A67_E154_41D7_D5A3E5BADE60"
   },
   {
    "camera": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 4, 5)",
    "media": "this.panorama_93B28EA6_9A67_E3FF_41DC_7B759DF53D76"
   },
   {
    "camera": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 5, 6)",
    "media": "this.panorama_93B2D7AC_9A67_E1F3_41D8_3B3BF52D6DC2"
   },
   {
    "camera": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 6, 7)",
    "media": "this.panorama_93B310CC_9A67_9F4C_41D9_2CC2D8CF3D85"
   },
   {
    "camera": "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist, 7, 0)",
    "media": "this.panorama_93B369C1_9A67_A1B4_41CC_2C7AD1283BBB"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist",
  "items": [
   {
    "camera": "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist, 0, 1)",
    "media": "this.panorama_93B312D2_9A67_A357_41E0_F83D5BD5672F"
   },
   {
    "camera": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist, 1, 2)",
    "media": "this.panorama_93B3FC27_9A67_A6FC_41CC_7B76D4A7B29C"
   },
   {
    "camera": "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist, 2, 3)",
    "media": "this.panorama_93BAA581_9A68_61B5_41D4_133CE2FD5326"
   },
   {
    "camera": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist, 3, 4)",
    "media": "this.panorama_93B30F76_9A68_615F_41B1_2A923B91BCBA"
   },
   {
    "camera": "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist, 4, 5)",
    "media": "this.panorama_93B3A937_9A68_6EDC_41D7_6C5263A0A1B0"
   },
   {
    "camera": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist, 5, 0)",
    "media": "this.panorama_93B37311_9A68_A2D5_41C3_F41E285ABCEA"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist",
  "items": [
   {
    "camera": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist, 0, 1)",
    "media": "this.panorama_93B37D06_9A68_A6BC_41D6_A80567D5E7AE"
   },
   {
    "camera": "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist, 1, 2)",
    "media": "this.panorama_93B4A737_9A68_A2DD_41AB_F689E53F5E2D"
   },
   {
    "camera": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist, 2, 3)",
    "media": "this.panorama_93B4E198_9A68_E1D4_41E0_4A0735AE4867"
   },
   {
    "camera": "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist, 3, 4)",
    "media": "this.panorama_93B4AB3B_9A68_E2D5_41CF_A61A6B00F2B3"
   },
   {
    "camera": "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist, 4, 5)",
    "media": "this.panorama_93B42538_9A68_E6D4_41B7_1FC314888D5B"
   },
   {
    "camera": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist, 5, 6)",
    "media": "this.panorama_93B4434A_9A68_A2B4_41D5_C688367C9502"
   },
   {
    "camera": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist, 6, 0)",
    "media": "this.panorama_93B43F17_9A68_A2DC_41B0_D74D493E1792"
   }
  ]
 },
 "this.Menu_BA9FE932_A905_D04E_41D6_8EACD773A5BA",
 {
  "class": "FadeInEffect",
  "id": "effect_B36CF56E_A4B3_1019_41D0_F993AE16FA78",
  "duration": 500,
  "easing": "linear"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_BDC7DFC3_A55F_100F_41D1_24CF4A5CABC4",
  "duration": 500,
  "easing": "linear"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_BD6F6589_A573_101A_41E1_EC4B69291F6F",
  "duration": 500,
  "easing": "linear"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_BDB835CF_A572_F016_41D0_28671894A3D2",
  "duration": 500,
  "easing": "linear"
 },
 "this.popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2880,
    "class": "ImageResourceLevel",
    "width": 2929,
    "url": "media/popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0_0_0.jpg"
   },
   {
    "height": 2013,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0_0_1.jpg"
   },
   {
    "height": 1006,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0_0_2.jpg"
   },
   {
    "height": 503,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_8D7145D6_9A78_615C_41C5_4DB84F3FF4B0_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF9E35D3_9A28_A155_41D5_29335C360823"
 },
 "this.popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2880,
    "class": "ImageResourceLevel",
    "width": 2929,
    "url": "media/popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24_0_0.jpg"
   },
   {
    "height": 2013,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24_0_1.jpg"
   },
   {
    "height": 1006,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24_0_2.jpg"
   },
   {
    "height": 503,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_834105D7_9A7F_E15D_41D2_6EA8802D0F24_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF85A5D8_9A28_A153_41D3_AF3E838A3317"
 },
 "this.popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 1821,
    "class": "ImageResourceLevel",
    "width": 4574,
    "url": "media/popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B_0_0.jpg"
   },
   {
    "height": 1630,
    "class": "ImageResourceLevel",
    "width": 4096,
    "url": "media/popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B_0_1.jpg"
   },
   {
    "height": 815,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B_0_2.jpg"
   },
   {
    "height": 407,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B_0_3.jpg"
   },
   {
    "height": 203,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_875C53AE_9A78_61CF_41BC_5D8558E7B60B_0_4.jpg"
   }
  ],
  "id": "ImageResource_AF8BD5DA_9A28_A157_41DE_E4EA8B4F090A"
 },
 "this.popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_857A5F81_9A67_A1B5_41DA_5AF1D8F87406_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF8825DB_9A28_A155_41E0_6A2BCC2E2BF3"
 },
 "this.popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_BEB29080_9A18_FFB4_41DC_00A83389AEA2_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF8915DD_9A28_A14D_41C0_6EA2464BC124"
 },
 "this.popup_87569139_9A68_BED4_41DA_FE311C42573D",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_87569139_9A68_BED4_41DA_FE311C42573D_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_87569139_9A68_BED4_41DA_FE311C42573D_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_87569139_9A68_BED4_41DA_FE311C42573D_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_87569139_9A68_BED4_41DA_FE311C42573D_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF8E35DE_9A28_A14F_41DF_A4F8ACBFEE97"
 },
 "this.popup_86A62C71_9A68_6754_41C0_93189CD725C5",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2880,
    "class": "ImageResourceLevel",
    "width": 2929,
    "url": "media/popup_86A62C71_9A68_6754_41C0_93189CD725C5_0_0.jpg"
   },
   {
    "height": 2013,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_86A62C71_9A68_6754_41C0_93189CD725C5_0_1.jpg"
   },
   {
    "height": 1006,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_86A62C71_9A68_6754_41C0_93189CD725C5_0_2.jpg"
   },
   {
    "height": 503,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_86A62C71_9A68_6754_41C0_93189CD725C5_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF8CE5DF_9A28_A14D_41E0_36A164BDE95F"
 },
 "this.popup_855AEC72_9A18_E754_41E1_EBC5DD7AF312",
 "this.popup_BF3D3BDB_9A1B_E154_41A7_83C095BA6C28",
 "this.popup_8558D9AC_9A1B_A1F3_41C9_D42734573471",
 "this.popup_BC5C5B9C_9A18_61D3_41CE_8DD7098C6C43",
 "this.popup_85B650A5_9A18_BFFD_41E1_41EE43D1D63F",
 "this.popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2112,
    "class": "ImageResourceLevel",
    "width": 1690,
    "url": "media/popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 1638,
    "url": "media/popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 819,
    "url": "media/popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 409,
    "url": "media/popup_BCC3606B_9A18_9F75_41E3_459E15BE2F15_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF7605E5_9A28_A17D_41D2_461CC0F3E8E9"
 },
 "this.popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_BA5125F9_9A19_E155_41DE_9C47EF667DD7_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF74F5E6_9A28_A17F_41D1_C41888F78194"
 },
 "this.popup_B9C800E0_9A19_9F74_41D9_FA104B074B35",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2374,
    "class": "ImageResourceLevel",
    "width": 2374,
    "url": "media/popup_B9C800E0_9A19_9F74_41D9_FA104B074B35_0_0.jpg"
   },
   {
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_B9C800E0_9A19_9F74_41D9_FA104B074B35_0_1.jpg"
   },
   {
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_B9C800E0_9A19_9F74_41D9_FA104B074B35_0_2.jpg"
   },
   {
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_B9C800E0_9A19_9F74_41D9_FA104B074B35_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF7565E7_9A28_A17D_41B3_B48269FFED78"
 },
 "this.popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_BFC88BD1_9A18_A154_41DA_F6DD820AD9A7_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF7A05E8_9A28_A173_41D7_777687E6D083"
 },
 "this.popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 1771,
    "class": "ImageResourceLevel",
    "width": 3148,
    "url": "media/popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08_0_0.jpg"
   },
   {
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08_0_1.jpg"
   },
   {
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08_0_2.jpg"
   },
   {
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_B4C29D89_9A39_A1B4_41B1_42A7FDB57B08_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF7CE5ED_9A28_A14D_41E0_B17D112BC242"
 },
 "this.popup_A88D18E2_9A39_AF74_41D9_AF6784222B47",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 1771,
    "class": "ImageResourceLevel",
    "width": 3148,
    "url": "media/popup_A88D18E2_9A39_AF74_41D9_AF6784222B47_0_0.jpg"
   },
   {
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_A88D18E2_9A39_AF74_41D9_AF6784222B47_0_1.jpg"
   },
   {
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_A88D18E2_9A39_AF74_41D9_AF6784222B47_0_2.jpg"
   },
   {
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_A88D18E2_9A39_AF74_41D9_AF6784222B47_0_3.jpg"
   }
  ],
  "id": "ImageResource_AF7D85EF_9A28_A14D_41DF_F929DD3462FC"
 },
 "this.popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 2277,
    "class": "ImageResourceLevel",
    "width": 3416,
    "url": "media/popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D_0_0.jpg"
   },
   {
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D_0_1.jpg"
   },
   {
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D_0_2.jpg"
   },
   {
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_A30FBDAD_9BE8_61CC_41DA_4FAFE834910D_0_3.jpg"
   }
  ],
  "id": "ImageResource_A17348FA_9BF8_EF57_41D2_0B94AF571978"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BABFC993_A905_D04D_41BB_4A9368623886",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD4659A8_A905_D05A_41D9_3DE1886FB53E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -103.13,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD4319BF_A905_D3B6_41A1_B04B8744BE08",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.46,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD4A19D4_A905_D3CA_41D3_E4D5A6E9C570",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 59.22,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD5799E9_A905_D3DA_4179_DB7D61EF9EFB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.38,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD5F9A02_A905_D04E_41DF_35B46151ED9C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD64FA16_A905_D076_41E3_233E9E380B70",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD6C6A2A_A905_D05E_41DC_34011DF54D52",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.06,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD749A3E_A905_D0B6_41DD_201FCB109A21",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 54.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD7D2A5A_A905_D0FE_41D0_9F5C1BE38C2C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.73,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD034A70_A905_D0CA_41BA_B594326D16E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD085A85_A905_D04A_41CF_FB8E8AE81AB9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.38,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD1E1A9A_A905_D07E_41E3_4955F01D8C79",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -37.31,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD22FAAF_A905_D056_41CD_DB6EEEAFFFD3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.11,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD36AAC9_A905_D1DA_41D7_0B233A5B663E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -17.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD38CADE_A905_D1F6_41E2_E5E5C372E638",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.28,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BDCD1AF3_A905_D1CE_41C1_F9D08B80FCF8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 172.53,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BDDF4B09_A905_D05A_41BE_50DC3CE72008",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -95.51,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BDE30B25_A905_D04A_41CC_FCBF1DAD83E4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.57,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BB8DDB68_A905_D0DA_41CE_3764702DA26E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BB89FB79_A905_D0BA_41D0_31495F34C38F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BB92CB89_A905_D05A_419A_076FC3F2E794",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BB9C0B9A_A905_D07E_41E4_846FD0E6DB24",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -59.75,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BB98DBAB_A905_D05E_41D6_C5AB64DE7B96",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.69,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BBA2FBBC_A905_D7BA_41B1_CA4AE63982A0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.98,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BBAE9BD0_A905_D7CA_41B1_C6C9E127622D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.47,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BBA97BE3_A905_D7CE_41C2_C876D0E930F4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 139.51,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BBB28BF4_A905_D7CA_41D9_10369D68107E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BBBF1C05_A905_D04A_41DD_62F3F9A8E55D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.53,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BBB91C15_A905_D04A_41B5_8C5511D340E4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.83,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA459C26_A905_D056_41E4_E1C2F8211294",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -22.01,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA4C6C3A_A905_D0BE_41E3_168417756396",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 32.84,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA497C4C_A905_D0DA_41D1_1127079FD471",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.62,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA50FC5C_A905_D0FA_41D1_983D25955BC1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.19,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA663C6C_A905_D0DA_4191_3905878A77A1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.51,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA6EBC7C_A905_D0BA_41E4_5EBE199E77FF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.76,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA748C8B_A905_D05E_41DA_9231DEE32E9C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA7DFC9A_A905_D07F_41D7_6802C99BA478",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 144.29,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA03FCAA_A905_D05F_41D5_2705B9A617A9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.16,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA084CBA_A905_D1BF_41D5_7A2596CBF766",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.21,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA1E2CCA_A905_D1DF_41E2_38E0FA1A056E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -37.83,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA243CDB_A905_D1FD_41C0_694751B8A742",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA2DDCEB_A905_D1DD_41DD_9E16ED7827C2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA302CFB_A905_D1BD_41D6_032671093BF1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.05,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA39ED0B_A905_D05D_41D2_691DCF8A4A0D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -75.5,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BACC0D1B_A905_D07D_41AA_B8704D4CB811",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -104.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BAD58D2A_A905_D05F_41DA_1E4A8187E146",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.07,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BAD8CD39_A905_D0BD_4180_CCB7E447407C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.36,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BAEF0D49_A905_D0DD_41D2_11854F103E43",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BAF57D59_A905_D0FD_41D9_B2A21F6B8DFC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.54,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BAFBCD6A_A905_D0DF_41E3_AF3C28F1743F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.77,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA8E1D7B_A905_D0BD_41B8_48527CAA095C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -71.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BA935D8C_A905_D05B_41D1_54E9E730792E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -20.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BAA7ED9C_A905_D07B_41E4_0EAD0594F964",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.36,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BAAABDAC_A905_D05B_41B0_DE8A67B4F619",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -25.98,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BABFDDBC_A905_D3BB_41C4_55AC61F265DF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD429DCC_A905_D3DB_41C0_D6E4B2D56D23",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD57FDDC_A905_D3F4_41D7_97B305F37856",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.41,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD5ABDED_A905_D3D5_41B3_B22DD15A4E5C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.06,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD6F3DFD_A905_D3B5_41E3_3DB108B3C457",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.64,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD707E0C_A905_D05B_41D9_F306F0EA6634",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.77,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD07BE1D_A905_D075_41A0_B94A21C3CB7E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD094E2D_A905_D055_41D8_C0081B5AA8E9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.95,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD1DFE3D_A905_D0B5_41E0_B8FFED16D530",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.01,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD2F4E4C_A905_D0DB_41B8_A7E99E5E628B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.48,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BD33AE5D_A905_D0F5_41E0_A288894D3870",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 32.94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BDC53E6D_A905_D0D5_41CD_D41A3F1FC9B8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 117.3,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BDD68E7E_A905_D0B7_41E1_127FD8649804",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 128.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BDDB3E8D_A905_D055_41D8_59328A776749",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 56.95,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_BDEC9E9D_A905_D075_41D9_AABE8BBBC54B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 146.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 5,
  "playbackBarBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarOpacity": 1,
  "progressRight": 0,
  "shadow": false,
  "progressBottom": 0,
  "progressBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderSize": 0,
  "paddingTop": 0,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "playbackBarHeadShadow": true,
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingTop": 4,
  "progressOpacity": 1,
  "class": "ViewerArea",
  "toolTipBorderRadius": 3,
  "toolTipFontColor": "#606060",
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowBlurRadius": 3,
  "width": "100%",
  "toolTipShadowSpread": 0,
  "borderSize": 0,
  "minHeight": 50,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "paddingLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "top": 0,
  "progressBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "bottom": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarRight": 0,
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowVerticalLength": 0,
  "toolTipFontWeight": "normal",
  "borderRadius": 0,
  "left": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeight": 10,
  "playbackBarHeadBorderSize": 0,
  "toolTipFontSize": 12,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "toolTipFontStyle": "normal"
 },
 {
  "verticalAlign": "bottom",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "children": [
   {
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.4,
    "paddingRight": 16,
    "width": "91.451%",
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "fontSize": 16,
      "minHeight": 1,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "text": "Panorama list",
      "fontFamily": "Arial",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "height": "100%",
      "fontStyle": "normal",
      "borderSize": 0,
      "shadow": false,
      "width": "15%",
      "click": "this.setComponentVisibility(this.Container_B22AA757_A4AF_3036_41C0_DB240E7ABE5D, true, 0, this.effect_B36CF56E_A4B3_1019_41D0_F993AE16FA78, 'showEffect', false)",
      "fontWeight": "bold",
      "paddingBottom": 0,
      "id": "Label_B11FEDC7_A4F3_7017_41DC_ED1A27E4F996",
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "class": "Label"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "fontSize": 16,
      "minHeight": 1,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "text": "Tầng trệt",
      "fontFamily": "Arial",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "height": "57.692%",
      "fontStyle": "normal",
      "borderSize": 0,
      "shadow": false,
      "width": "10%",
      "click": "this.setComponentVisibility(this.Container_B3C1BF35_A4AF_100A_41B2_9B5338979379, true, 0, this.effect_BDC7DFC3_A55F_100F_41D1_24CF4A5CABC4, 'showEffect', false)",
      "fontWeight": "bold",
      "paddingBottom": 0,
      "id": "Label_B21F92CE_A4B3_7016_41E3_2CEC6C91676B",
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "class": "Label"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "fontSize": 16,
      "minHeight": 1,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "text": "Lầu 1",
      "fontFamily": "Arial",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "height": "57.692%",
      "fontStyle": "normal",
      "borderSize": 0,
      "shadow": false,
      "width": "7.428%",
      "click": "this.setComponentVisibility(this.Container_BD2C2C22_A553_300E_41B9_8972E3ED94C2, true, 0, this.effect_BD6F6589_A573_101A_41E1_EC4B69291F6F, 'showEffect', false)",
      "fontWeight": "bold",
      "paddingBottom": 0,
      "id": "Label_BD7755EC_A553_101A_41E3_4F8A58FC7DD5",
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "class": "Label"
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "fontSize": 16,
      "minHeight": 1,
      "textDecoration": "none",
      "backgroundOpacity": 0,
      "text": "Lầu 2",
      "fontFamily": "Arial",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "height": "58.696%",
      "fontStyle": "normal",
      "borderSize": 0,
      "shadow": false,
      "width": "7.654%",
      "click": "this.setComponentVisibility(this.Container_BC1D2EA2_A575_1009_41C8_AB1AAD0C4E7D, true, 0, this.effect_BDB835CF_A572_F016_41D0_28671894A3D2, 'showEffect', false)",
      "fontWeight": "bold",
      "paddingBottom": 0,
      "id": "Label_BDA39D99_A573_303A_41BC_025C7A9EC2CB",
      "paddingTop": 0,
      "minWidth": 1,
      "borderRadius": 0,
      "class": "Label"
     }
    ],
    "minHeight": 1,
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "horizontalAlign": "left",
    "paddingLeft": 10,
    "scrollBarMargin": 2,
    "height": "26.744%",
    "shadow": false,
    "gap": 10,
    "overflow": "visible",
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "bottom": 0,
    "id": "Container_B6E49C0B_A4D7_101E_41D8_01A7E89B86A4",
    "layout": "horizontal",
    "paddingTop": 0,
    "contentOpaque": true,
    "minWidth": 1,
    "borderRadius": 0,
    "left": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "maxHeight": 2,
    "paddingRight": 0,
    "width": "100%",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "url": "skin/Image_BB56AB03_A5B3_300E_41E4_4585B2DDA2E9.png",
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fill",
    "shadow": false,
    "top": "72.09%",
    "paddingBottom": 0,
    "bottom": "26.74%",
    "id": "Image_BB56AB03_A5B3_300E_41E4_4585B2DDA2E9",
    "maxWidth": 1918,
    "paddingTop": 0,
    "borderRadius": 0,
    "minWidth": 1,
    "left": "0%",
    "class": "Image"
   },
   "this.IconButton_B975E0A1_A903_704A_41C6_0778F3912D30"
  ],
  "height": 172,
  "minHeight": 20,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "borderSize": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "shadow": false,
  "gap": 10,
  "overflow": "visible",
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "bottom": 0,
  "layout": "absolute",
  "paddingTop": 0,
  "minWidth": 20,
  "contentOpaque": false,
  "borderRadius": 0,
  "left": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "right": 0
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "minHeight": 1,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 20,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "minHeight": 1,
    "backgroundOpacity": 0.91,
    "paddingLeft": 20,
    "width": "91.216%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": "12.171%",
    "shadow": false,
    "top": "0%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>Panorama list</B></SPAN></SPAN></DIV></div>",
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "id": "HTMLText_B200DBD6_A4AD_1036_41B1_05C0F9EDBF80",
    "paddingTop": 20,
    "minWidth": 1,
    "backgroundColorRatios": [
     0
    ],
    "borderRadius": 10,
    "left": "0%",
    "backgroundColorDirection": "vertical",
    "class": "HTMLText",
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "maxHeight": 50,
    "paddingRight": 0,
    "mode": "push",
    "width": 48,
    "transparencyActive": false,
    "height": 47,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_B22AA757_A4AF_3036_41C0_DB240E7ABE5D, false, 0, null, null, false)",
    "borderSize": 0,
    "shadow": false,
    "top": "1.97%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_B2387118_A4B3_103A_41D7_4D9E415F9B76",
    "maxWidth": 50,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "class": "IconButton",
    "iconURL": "skin/IconButton_B2387118_A4B3_103A_41D7_4D9E415F9B76.png",
    "right": "1.74%"
   },
   {
    "verticalAlign": "middle",
    "itemOpacity": 1,
    "paddingRight": 20,
    "itemLabelFontFamily": "Arial",
    "itemMinHeight": 50,
    "gap": 34,
    "backgroundOpacity": 0,
    "itemThumbnailShadowSpread": 1,
    "horizontalAlign": "center",
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowBlurRadius": 8,
    "itemThumbnailBorderRadius": 0,
    "itemPaddingRight": 3,
    "shadow": false,
    "itemWidth": 150,
    "itemBackgroundOpacity": 0,
    "itemBackgroundColorRatios": [],
    "itemPaddingBottom": 3,
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemThumbnailWidth": 230,
    "itemMinWidth": 50,
    "paddingBottom": 10,
    "itemLabelFontStyle": "normal",
    "itemThumbnailOpacity": 1,
    "paddingTop": 10,
    "itemBackgroundColorDirection": "vertical",
    "minWidth": 20,
    "itemLabelFontSize": 14,
    "itemLabelHorizontalAlign": "center",
    "itemMode": "normal",
    "scrollBarVisible": "rollOver",
    "class": "ThumbnailGrid",
    "playList": "this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist",
    "scrollBarOpacity": 0.5,
    "itemMaxWidth": 1000,
    "itemBackgroundColor": [],
    "itemPaddingTop": 3,
    "rollOverItemBackgroundOpacity": 0,
    "itemMaxHeight": 1000,
    "width": "99.796%",
    "minHeight": 20,
    "selectedItemLabelFontColor": "#000000",
    "itemLabelPosition": "bottom",
    "borderSize": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "paddingLeft": 20,
    "itemPaddingLeft": 3,
    "itemLabelGap": 8,
    "itemVerticalAlign": "middle",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "itemThumbnailShadow": true,
    "itemHeight": 120,
    "top": "11.84%",
    "itemLabelTextDecoration": "none",
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowOpacity": 0.54,
    "itemThumbnailShadowVerticalLength": 3,
    "bottom": "0%",
    "id": "ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893",
    "itemThumbnailScaleMode": "fit_outside",
    "itemHorizontalAlign": "left",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailHeight": 90,
    "borderRadius": 5,
    "left": "0%",
    "rollOverItemLabelFontWeight": "bold",
    "itemLabelFontColor": "#000000"
   }
  ],
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "height": "100%",
  "shadow": false,
  "width": "88.678%",
  "gap": 10,
  "overflow": "scroll",
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_B22AA757_A4AF_3036_41C0_DB240E7ABE5D",
  "paddingTop": 0,
  "minWidth": 1,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "right": "0%"
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "minHeight": 1,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "children": [
   {
    "verticalAlign": "middle",
    "maxHeight": 50,
    "paddingRight": 0,
    "mode": "push",
    "width": 43,
    "transparencyActive": false,
    "height": 41,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_B3C1BF35_A4AF_100A_41B2_9B5338979379, false, 0, null, null, false)",
    "borderSize": 0,
    "shadow": false,
    "top": "2.63%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_B3A060D1_A4AD_700A_41CE_C3095FF9434C",
    "maxWidth": 50,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "class": "IconButton",
    "iconURL": "skin/IconButton_B3A060D1_A4AD_700A_41CE_C3095FF9434C.png",
    "right": "1.84%"
   },
   {
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 20,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "minHeight": 1,
    "backgroundOpacity": 0.91,
    "paddingLeft": 20,
    "width": "91.726%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": "11.02%",
    "shadow": false,
    "top": "0.16%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>Floor 1 Panorama</B></SPAN></SPAN></DIV></div>",
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "id": "HTMLText_B3796830_A4AD_100A_41C9_98F84C7C0115",
    "paddingTop": 20,
    "minWidth": 1,
    "backgroundColorRatios": [
     0
    ],
    "borderRadius": 10,
    "left": "0%",
    "backgroundColorDirection": "vertical",
    "class": "HTMLText",
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "itemOpacity": 1,
    "paddingRight": 20,
    "itemLabelFontFamily": "Arial",
    "itemMinHeight": 50,
    "gap": 43,
    "backgroundOpacity": 0,
    "itemThumbnailShadowSpread": 1,
    "horizontalAlign": "center",
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowBlurRadius": 8,
    "itemThumbnailBorderRadius": 5,
    "itemPaddingRight": 3,
    "shadow": false,
    "itemWidth": 150,
    "itemBackgroundOpacity": 0,
    "itemBackgroundColorRatios": [],
    "itemPaddingBottom": 3,
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemThumbnailWidth": 250,
    "itemMinWidth": 50,
    "paddingBottom": 10,
    "itemLabelFontStyle": "normal",
    "itemThumbnailOpacity": 1,
    "paddingTop": 10,
    "itemBackgroundColorDirection": "vertical",
    "minWidth": 1,
    "itemLabelFontSize": 14,
    "itemLabelHorizontalAlign": "center",
    "itemMode": "normal",
    "scrollBarVisible": "rollOver",
    "class": "ThumbnailGrid",
    "playList": "this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist",
    "scrollBarOpacity": 0.5,
    "itemMaxWidth": 1000,
    "itemBackgroundColor": [],
    "itemPaddingTop": 3,
    "width": "100%",
    "itemMaxHeight": 1000,
    "minHeight": 1,
    "selectedItemLabelFontColor": "#000000",
    "itemLabelPosition": "bottom",
    "borderSize": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "paddingLeft": 20,
    "itemPaddingLeft": 3,
    "itemLabelGap": 2,
    "itemVerticalAlign": "middle",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "itemThumbnailShadow": true,
    "itemHeight": 120,
    "top": "12.01%",
    "itemLabelTextDecoration": "none",
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowOpacity": 0.57,
    "itemThumbnailShadowVerticalLength": 3,
    "bottom": "32.57%",
    "id": "ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B",
    "itemThumbnailScaleMode": "fit_outside",
    "itemHorizontalAlign": "left",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailHeight": 100,
    "borderRadius": 5,
    "left": "0%",
    "rollOverItemLabelFontWeight": "bold",
    "itemLabelFontColor": "#000000",
    "rollOverItemLabelFontColor": "#000000"
   }
  ],
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "height": "100%",
  "shadow": false,
  "width": "88.68%",
  "gap": 10,
  "overflow": "scroll",
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_B3C1BF35_A4AF_100A_41B2_9B5338979379",
  "paddingTop": 0,
  "minWidth": 1,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "right": "0%"
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "minHeight": 1,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "children": [
   {
    "verticalAlign": "middle",
    "maxHeight": 50,
    "paddingRight": 0,
    "mode": "push",
    "width": 46.05,
    "transparencyActive": false,
    "height": 49,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_BD2C2C22_A553_300E_41B9_8972E3ED94C2, false, 0, null, null, false)",
    "borderSize": 0,
    "shadow": false,
    "top": "1.48%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_BD1F217D_A555_10FA_41E0_0196275877AF",
    "maxWidth": 50,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "class": "IconButton",
    "iconURL": "skin/IconButton_BD1F217D_A555_10FA_41E0_0196275877AF.png",
    "right": "1.74%"
   },
   {
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 20,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "minHeight": 1,
    "backgroundOpacity": 0.91,
    "paddingLeft": 20,
    "width": "92.135%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": "10.708%",
    "shadow": false,
    "top": "0%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>Floor 2 Panorama </B></SPAN></SPAN></DIV></div>",
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "id": "HTMLText_BDA4F8E2_A555_1009_41DC_314EAFE6EF2B",
    "paddingTop": 20,
    "minWidth": 1,
    "backgroundColorRatios": [
     0
    ],
    "borderRadius": 10,
    "left": "0%",
    "backgroundColorDirection": "vertical",
    "class": "HTMLText",
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "itemOpacity": 1,
    "paddingRight": 20,
    "itemLabelFontFamily": "Arial",
    "itemMinHeight": 50,
    "gap": 46,
    "backgroundOpacity": 0,
    "itemThumbnailShadowSpread": 1,
    "horizontalAlign": "center",
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowBlurRadius": 8,
    "itemThumbnailBorderRadius": 0,
    "itemPaddingRight": 3,
    "shadow": false,
    "itemWidth": 150,
    "itemBackgroundOpacity": 0,
    "itemBackgroundColorRatios": [],
    "itemPaddingBottom": 3,
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemThumbnailWidth": 250,
    "itemMinWidth": 50,
    "paddingBottom": 10,
    "itemLabelFontStyle": "normal",
    "itemThumbnailOpacity": 1,
    "paddingTop": 10,
    "itemBackgroundColorDirection": "vertical",
    "minWidth": 1,
    "itemLabelFontSize": 14,
    "itemLabelHorizontalAlign": "center",
    "itemMode": "normal",
    "scrollBarVisible": "rollOver",
    "class": "ThumbnailGrid",
    "playList": "this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist",
    "scrollBarOpacity": 0.5,
    "itemMaxWidth": 1000,
    "itemBackgroundColor": [],
    "itemPaddingTop": 3,
    "width": "100%",
    "itemMaxHeight": 1000,
    "minHeight": 1,
    "selectedItemLabelFontColor": "#000000",
    "itemLabelPosition": "bottom",
    "borderSize": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "scrollBarWidth": 10,
    "itemPaddingLeft": 3,
    "height": "49.753%",
    "itemLabelGap": 0,
    "itemVerticalAlign": "middle",
    "paddingLeft": 20,
    "scrollBarMargin": 2,
    "itemThumbnailShadow": true,
    "itemHeight": 120,
    "top": "11.7%",
    "itemLabelTextDecoration": "none",
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowOpacity": 0.57,
    "itemThumbnailShadowVerticalLength": 3,
    "id": "ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721",
    "itemThumbnailScaleMode": "fit_outside",
    "itemHorizontalAlign": "center",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailHeight": 100,
    "borderRadius": 5,
    "left": "0%",
    "rollOverItemLabelFontWeight": "bold",
    "itemLabelFontColor": "#000000"
   }
  ],
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "height": "99.836%",
  "shadow": false,
  "width": "88.68%",
  "gap": 10,
  "overflow": "scroll",
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_BD2C2C22_A553_300E_41B9_8972E3ED94C2",
  "paddingTop": 0,
  "minWidth": 1,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "right": "0%"
 },
 {
  "verticalAlign": "top",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "borderSize": 0,
  "minHeight": 1,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "children": [
   {
    "verticalAlign": "middle",
    "maxHeight": 50,
    "paddingRight": 0,
    "mode": "push",
    "width": 46,
    "transparencyActive": false,
    "height": 46,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.Container_BC1D2EA2_A575_1009_41C8_AB1AAD0C4E7D, false, 0, null, null, false)",
    "borderSize": 0,
    "shadow": false,
    "top": "2.14%",
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_BDB89F94_A572_F00A_41D2_BAEE42075409",
    "maxWidth": 50,
    "paddingTop": 0,
    "minWidth": 1,
    "borderRadius": 0,
    "class": "IconButton",
    "iconURL": "skin/IconButton_BDB89F94_A572_F00A_41D2_BAEE42075409.png",
    "right": "1.74%"
   },
   {
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 20,
    "scrollBarOpacity": 0.5,
    "borderSize": 0,
    "minHeight": 1,
    "backgroundOpacity": 0.91,
    "paddingLeft": 20,
    "width": "91.318%",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": "10.691%",
    "shadow": false,
    "top": "0.16%",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>Floor 2 Panorama</B></SPAN></SPAN></DIV></div>",
    "scrollBarColor": "#000000",
    "paddingBottom": 10,
    "id": "HTMLText_BDE6B137_A573_7076_41D4_A194189E97D6",
    "paddingTop": 20,
    "minWidth": 1,
    "backgroundColorRatios": [
     0
    ],
    "borderRadius": 10,
    "left": "0.61%",
    "backgroundColorDirection": "vertical",
    "class": "HTMLText",
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "middle",
    "itemOpacity": 1,
    "paddingRight": 20,
    "itemLabelFontFamily": "Arial",
    "itemMinHeight": 50,
    "gap": 44,
    "backgroundOpacity": 0,
    "itemThumbnailShadowSpread": 1,
    "horizontalAlign": "center",
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowBlurRadius": 8,
    "itemThumbnailBorderRadius": 0,
    "itemPaddingRight": 3,
    "shadow": false,
    "itemWidth": 150,
    "itemBackgroundOpacity": 0,
    "itemBackgroundColorRatios": [],
    "itemPaddingBottom": 3,
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemThumbnailWidth": 250,
    "itemMinWidth": 50,
    "paddingBottom": 10,
    "itemLabelFontStyle": "normal",
    "itemThumbnailOpacity": 1,
    "paddingTop": 10,
    "itemBackgroundColorDirection": "vertical",
    "minWidth": 1,
    "itemLabelFontSize": 14,
    "itemLabelHorizontalAlign": "center",
    "itemMode": "normal",
    "scrollBarVisible": "rollOver",
    "class": "ThumbnailGrid",
    "playList": "this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist",
    "scrollBarOpacity": 0.5,
    "itemMaxWidth": 1000,
    "itemBackgroundColor": [],
    "itemPaddingTop": 3,
    "width": "99.796%",
    "itemMaxHeight": 1000,
    "minHeight": 1,
    "selectedItemLabelFontColor": "#000000",
    "itemLabelPosition": "bottom",
    "borderSize": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "scrollBarWidth": 10,
    "itemPaddingLeft": 3,
    "height": "52.138%",
    "itemLabelGap": 0,
    "itemVerticalAlign": "middle",
    "paddingLeft": 20,
    "scrollBarMargin": 2,
    "itemThumbnailShadow": true,
    "itemHeight": 120,
    "top": "12.34%",
    "itemLabelTextDecoration": "none",
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowOpacity": 0.57,
    "itemThumbnailShadowVerticalLength": 3,
    "id": "ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE",
    "itemThumbnailScaleMode": "fit_outside",
    "itemHorizontalAlign": "left",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailHeight": 100,
    "borderRadius": 5,
    "left": "0%",
    "rollOverItemLabelFontWeight": "bold",
    "itemLabelFontColor": "#000000"
   }
  ],
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "height": "100%",
  "shadow": false,
  "width": "88.68%",
  "gap": 10,
  "overflow": "scroll",
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_BC1D2EA2_A575_1009_41C8_AB1AAD0C4E7D",
  "paddingTop": 0,
  "minWidth": 1,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "right": "0%"
 },
 {
  "verticalAlign": "middle",
  "maxHeight": 1095,
  "paddingRight": 0,
  "width": "10.139%",
  "minHeight": 1,
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "url": "skin/Image_879CCA8E_A5B5_F019_41E1_FB5D851B6376.png",
  "borderSize": 0,
  "horizontalAlign": "center",
  "height": "19.631%",
  "scaleMode": "fit_inside",
  "shadow": false,
  "top": "0%",
  "paddingBottom": 0,
  "id": "Image_879CCA8E_A5B5_F019_41E1_FB5D851B6376",
  "maxWidth": 1095,
  "paddingTop": 0,
  "borderRadius": 0,
  "minWidth": 1,
  "left": "0%",
  "class": "Image"
 },
 {
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "borderSize": 0,
  "minHeight": 0,
  "backgroundOpacity": 0.55,
  "paddingLeft": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "paddingTop": 0,
  "minWidth": 0,
  "backgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "class": "UIComponent",
  "right": 0
 },
 {
  "paddingRight": 0,
  "backgroundColor": [],
  "borderSize": 0,
  "minHeight": 0,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "paddingTop": 0,
  "minWidth": 0,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "class": "ZoomImage",
  "right": 0
 },
 {
  "verticalAlign": "middle",
  "paddingRight": 5,
  "iconHeight": 20,
  "shadowSpread": 1,
  "fontSize": 12,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "textDecoration": "none",
  "iconColor": "#000000",
  "minHeight": 0,
  "backgroundOpacity": 0.3,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "shadowBlurRadius": 6,
  "iconLineWidth": 5,
  "fontFamily": "Arial",
  "borderSize": 0,
  "horizontalAlign": "center",
  "paddingLeft": 5,
  "fontColor": "#FFFFFF",
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "shadow": false,
  "pressedIconColor": "#888888",
  "fontWeight": "normal",
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "borderColor": "#000000",
  "paddingBottom": 5,
  "layout": "horizontal",
  "id": "closeButtonPopupPanorama",
  "gap": 5,
  "paddingTop": 5,
  "minWidth": 0,
  "shadowColor": "#000000",
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "label": "",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "class": "CloseButton",
  "right": 10
 }
], 
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 1,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "width": "100%",
 "gap": 10,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "paddingTop": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "borderRadius": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_B975E0A1_A903_704A_41C6_0778F3912D30], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_B3EE312E_A4B7_1016_41D4_9027704BC893_playlist,this.ThumbnailList_B3F0E5C3_A555_100F_41D9_1083054FD45B_playlist,this.ThumbnailList_B2C2F1B1_A555_300A_41B8_A0CEB54E1721_playlist,this.ThumbnailList_BC0BB534_A57D_100A_41E0_0DCB004BADBE_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); }
 }
})