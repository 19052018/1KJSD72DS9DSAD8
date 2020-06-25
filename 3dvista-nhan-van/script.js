(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "mobileMipmappingEnabled": false,
 "children": [
  "this.MainViewer",
  "this.Container_4ED17986_6EF5_55E3_41D0_66E91F7CD54D",
  "this.IconButton_4E3FBB92_6EFF_55FF_41D4_2DC60BEA09E5",
  "this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "buttonToggleMute": [
  "this.IconButton_4ED15986_6EF5_55E6_41C9_9A2BFEB7397A",
  "this.IconButton_4E3FBB92_6EFF_55FF_41D4_2DC60BEA09E5"
 ],
 "definitions": [{
 "label": "Nga tu chinh",
 "id": "panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A",
   "yaw": 164.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -68.9
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0"
  },
  {
   "panorama": "this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8",
   "yaw": 172.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.94
  },
  {
   "panorama": "this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428",
   "yaw": 85.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.23
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E"
  },
  {
   "panorama": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38",
   "yaw": -5.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 168.83
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_71D290E0_6EDF_535A_41D6_AFE8426BF9D9",
  "this.overlay_7060DBE9_6EDF_552A_41CF_4E6CEDA07FDF",
  "this.overlay_73B51F40_6EDD_4D5A_419B_9F465BEBA5CA",
  "this.overlay_73EF2668_6EDA_BF2A_41DA_491D4E519390",
  "this.overlay_73C33812_6ED5_52FE_41AC_FB512B7C1E85",
  "this.overlay_730F6173_6ED7_553D_41CB_39673742DBFA"
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_t.jpg"
},
{
 "id": "camera_5D895CE0_6E7A_B35A_41B5_843363250391",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "vfov": 180,
 "label": "17 Nha thi dau 2",
 "id": "panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827",
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360
},
{
 "id": "camera_45F551B4_6E7A_D53A_417A_D1AC0A19CDC4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 157.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "5 Phong tu hoc",
 "id": "panorama_63C45335_6940_2C37_4128_ED5526ADCCFC",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8",
   "yaw": -174.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -80.01
  },
  {
   "panorama": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
   "yaw": 0.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.27
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7C74A732_6DDD_7D3E_41D2_9312843AD6CB",
  "this.overlay_7F9CB979_6DDB_D52A_41D8_153FBFE5FA50",
  "this.overlay_7CF26094_6DD7_B3FB_41C4_0100F62E1344"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_t.jpg"
},
{
 "id": "camera_447D60D3_6E7A_D37E_41D5_74BC7BBB6D2D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "2-tiep-cong-sau",
 "id": "panorama_63317D24_6940_55D5_41B7_96602315E3E0",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA",
   "yaw": 56.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 14.07
  },
  {
   "panorama": "this.panorama_632FC730_6940_55CD_4192_F95E71879870",
   "yaw": -158,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.48
  },
  {
   "panorama": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
   "yaw": -26.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 79.82
  },
  {
   "panorama": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
   "yaw": -26.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 79.82
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_67D53406_6940_6BD5_41C6_7136554EDA4F",
  "this.overlay_7BE37D3E_6940_7435_41AD_E30D503F4422",
  "this.overlay_66671D07_6940_D5D3_41D3_F3567608BF6B",
  "this.overlay_7B990C53_6940_5473_41D4_2B0800A4C79A"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_t.jpg"
},
{
 "id": "panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_446000F5_6E7A_D33A_41D5_A91E125D1472",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4410F005_6E7A_D2DA_41C0_08C391D1FF2F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -103.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "21 Day nha CLC 2",
 "id": "panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454",
   "yaw": 37.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -51.51
  },
  {
   "panorama": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E",
   "yaw": -101.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.45
  },
  {
   "panorama": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6",
   "yaw": 76.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -100.5
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7EE72983_6940_7CD3_41D8_2ECCDD417822",
  "this.overlay_71EC6328_6940_2DDC_41D1_E1C96624CA0F",
  "this.overlay_733CA70F_6940_35D4_419F_F1B542854402"
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_t.jpg"
},
{
 "id": "camera_5A93BE37_6E7A_CF26_41C5_E814D2A49EA6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 126.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "11 Day nha gi do",
 "id": "panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7",
   "yaw": -159.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 117.6
  },
  {
   "panorama": "this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3",
   "yaw": -1.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 115.59
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7AF4BB23_6DD5_56DE_41D5_77B0022065C5",
  "this.overlay_7B96C5D7_6DD5_5D65_41D4_5621859DE1C9"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_t.jpg"
},
{
 "label": "18 Duong di 1",
 "id": "panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94",
   "yaw": -74.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.58
  },
  {
   "panorama": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
   "yaw": 54.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -82.88
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7B1F1A9A_6940_5CFD_419E_EBBDC69515C0",
  "this.overlay_7BEC0FDE_6943_D475_41DA_0EC56852013E"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_t.jpg"
},
{
 "id": "panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5DBC1D03_6E7A_B2DE_41CE_075F8618549B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45961117_6E7A_D2E6_41D6_2E01BE1C2C88",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4550D250_6E7A_D77A_41D3_29158700C89F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D08CDA9_6E7A_CD2A_41B4_B5F38AFECD50",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4533021C_6E7A_D6EA_41D5_3975BD61C5C5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -64.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_452C022D_6E7A_D72A_41D8_623C086900D9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "16 Truoc thu vien",
 "id": "panorama_632FC730_6940_55CD_4192_F95E71879870",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7"
  },
  {
   "panorama": "this.panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E",
   "yaw": -84.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.49
  },
  {
   "panorama": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0",
   "yaw": -2.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -158
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_4A2D2CA2_6ECA_B3DE_41D3_08497473AAB8",
  "this.overlay_4AACF5A3_6ECB_5DDE_41D8_7FB99D0DF14E",
  "this.overlay_4A97288D_6EB5_D3EA_41CB_138D65DE9325"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_t.jpg"
},
{
 "label": "12 Day nha gi do phan 2",
 "id": "panorama_632E43BB_6940_2C33_41BF_6822A0599FC3",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5",
   "yaw": 134.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -102.81
  },
  {
   "panorama": "this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C",
   "yaw": 115.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.86
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7B5121EF_6DDD_5525_41AF_8EA4E46C744D",
  "this.overlay_76C33940_6DDE_B55A_41D4_C296B875CBF4"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_t.jpg"
},
{
 "id": "camera_5A834E4A_6E7A_CF6E_41D6_EC9358CB1B2F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -162.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45A1015F_6E7A_D566_41C4_10545418B606",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4512C1E8_6E7A_D52A_41CD_CC04EBB0CAFE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5ADF4E7E_6E7A_CF26_41A6_82BD102DF30B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4519E1D7_6E7A_D566_41AD_190D07E32B92",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_456A5296_6E7A_D7E6_41BC_45B3C4BE56D4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 79.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45D58181_6E7A_D5DA_41DA_61B5BF6703BF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 78.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63CAC346_6943_EC54_41CB_42817D364063_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45CE8191_6E7A_D5FA_41D9_195D29C2453D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -43.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "23 Duong di CLC",
 "id": "panorama_632E8061_6940_2C4C_41C6_4C01D1C97454",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63CDBF66_6940_7455_41D7_808DACABAF3F"
  },
  {
   "panorama": "this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29",
   "yaw": -51.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 37.67
  },
  {
   "panorama": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6",
   "yaw": -132.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -22.29
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_72F09ACE_69C0_5C55_41CB_ADD5B95D2F4C",
  "this.overlay_700987CF_69C7_D453_41C8_EA9A44D77BB1",
  "this.overlay_731BF865_69C0_7C57_41D0_6FDBA3967BCF"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_t.jpg"
},
{
 "label": "7-cho-lay-nuoc",
 "id": "panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8",
   "yaw": -79.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.15
  },
  {
   "panorama": "this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428",
   "yaw": -32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.57
  },
  {
   "panorama": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7",
   "yaw": -68.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 164.81
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7E473129_6DF6_D52A_4196_7954D0682A7D",
  "this.overlay_7F66A7E8_6DF5_BD2A_41D7_B160D2A147BA",
  "this.overlay_7835940C_6DFB_72EB_41C6_B8C747C7DB03"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_t.jpg"
},
{
 "id": "camera_5D387DBA_6E7A_CD2E_41D1_0F20654DA204",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5DD17D39_6E7A_CD2A_4192_73EF37358F8C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_44E36FD2_6E7A_CD7E_41D0_C83E8A843408",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_44E7DFE3_6E7A_CD5E_41DA_7BB9D3CFB551",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 47.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_440F8027_6E7A_D326_41C0_744D5253C829",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_444910B0_6E7A_D33A_41B7_1703CA83D6A3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 90,
  "yaw": -165.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_429102B8_6E7A_D72A_41CF_B0475CD080C6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "10 Cuoi duong nha mau trang",
 "id": "panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A",
   "yaw": -3.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -90.24
  },
  {
   "panorama": "this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C",
   "yaw": 117.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -159.16
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E"
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7BC74308_6DCD_56EB_41D5_CA5F1979F6C2",
  "this.overlay_7BA306C9_6DD5_BF6D_41C5_E273101228A2",
  "this.overlay_4B091D4C_6EBB_4D6A_41D4_121C5F497C3B"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_t.jpg"
},
{
 "id": "camera_447690E4_6E7A_D35A_41D4_C63A42465AA6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45BA613C_6E7A_D52A_41C2_C3E5DE2CECBD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D9C4CCF_6E7A_B366_41C1_140786ACA1C9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "20 Duong di 3",
 "id": "panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94",
   "yaw": 89.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.36
  },
  {
   "panorama": "this.panorama_63CAC346_6943_EC54_41CB_42817D364063",
   "yaw": 123.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 79.08
  },
  {
   "panorama": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6",
   "yaw": -6.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 162.27
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7A02BAB8_6940_5C3D_41C3_A594789FEC50",
  "this.overlay_7D9BCD82_6940_74CD_41C6_4E838E7CD435",
  "this.overlay_7CD8ECBB_6940_3433_41D2_92B0FB937F1A"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_t.jpg"
},
{
 "id": "camera_442A207C_6E7A_D32A_41D6_D5BDBC529167",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4527D23F_6E7A_D726_41A1_2D3640BAE2B2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5C7F4C8C_6E7A_B3EA_41B0_18B5AC00F36F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 169.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D75FE11_6E7A_CEFA_41C5_0BFD45A7D54E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -125.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_456772A7_6E7A_D726_41D1_C9E1C4E7E445",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 34.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5DA27D27_6E7A_CD26_419C_003F924F240A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5DED0D87_6E7A_CDE6_41BE_C240B4FD6E27",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "21 Day nha CLC",
 "id": "panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63CDBF66_6940_7455_41D7_808DACABAF3F",
   "yaw": -10.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -96.71
  },
  {
   "panorama": "this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454",
   "yaw": -22.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -132.26
  },
  {
   "panorama": "this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD",
   "yaw": 162.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.44
  },
  {
   "panorama": "this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29",
   "yaw": -100.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 76.56
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7C55C3FD_6940_2C37_41D8_BC893D54CE8A",
  "this.overlay_7CCE67D1_6941_D44F_41C6_DC6B2CB8DF9B",
  "this.overlay_7172F97C_6940_DC35_41D6_EE1E75C44DCA",
  "this.overlay_73E9C116_69C0_6DF5_4193_5DE5851A1A36"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_t.jpg"
},
{
 "label": "27 hoi truong",
 "id": "panorama_63D3C1CC_6940_2C55_4182_95F889CD362C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38",
   "yaw": -50.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 6.73
  },
  {
   "panorama": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38",
   "yaw": -62.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 6.73
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_4F006418_6EDB_D2EB_4191_CCD58F3D3B7A",
  "this.overlay_45DCCAC6_6E57_B767_41C9_2C15E09816B9"
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_t.jpg"
},
{
 "label": "9 Cai nha mau trang",
 "id": "panorama_63D9EC36_6940_5435_41C3_C57AAC06094A",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428",
   "yaw": 90.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.02
  },
  {
   "panorama": "this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7",
   "yaw": -90.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.02
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_79104FC4_6DCB_4D5B_41C5_91F0F1C3AEED",
  "this.overlay_7905D373_6DCB_553E_41DA_4E4555783053"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_t.jpg"
},
{
 "label": "26 Truoc nha dieu hanh",
 "id": "panorama_63CAC346_6943_EC54_41CB_42817D364063",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63CA9135_6940_2C37_41C7_6475EB153877",
   "yaw": -53.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -166.3
  },
  {
   "panorama": "this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD",
   "yaw": 79.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 123.48
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E"
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7DB1ECF2_6DCB_733F_41D5_2EC068931018",
  "this.overlay_6229C41F_6DCE_D2E6_41C4_5051839D5184",
  "this.overlay_79B309DC_6DCF_556A_41D5_B3E0C2C07145"
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_t.jpg"
},
{
 "id": "panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45DA016F_6E7A_D526_41D0_94B05CA26F99",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -56.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "1-cong-truoc",
 "id": "panorama_632F5619_694F_D7FF_418D_73FD857AA06A",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63CA9135_6940_2C37_41C7_6475EB153877",
   "yaw": 17.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 6.83
  },
  {
   "panorama": "this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA",
   "yaw": -142.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 142.66
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_6310FC79_6DBA_B32D_41A7_283C3A594E6B",
  "this.overlay_7D681834_6DBA_B33A_41CE_AE61765D312E"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_t.jpg"
},
{
 "partial": false,
 "vfov": 180,
 "label": "4-Ke-ben-nha-thi-dau",
 "id": "panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1",
 "hfovMin": "120%",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360
},
{
 "id": "panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "buttonZoomIn": "this.IconButton_4ED14986_6EF5_55E6_41C5_ABF49BF0E172",
 "buttonZoomOut": "this.IconButton_4ED20986_6EF5_55E6_41C5_3F572B7786C0",
 "buttonRestart": "this.IconButton_4ED23986_6EF5_55E6_41BC_2C6CE5F4DA24",
 "buttonMoveLeft": "this.IconButton_4ED2D986_6EF5_55E6_41D8_8FAAFC95DBEA",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPause": "this.IconButton_4ED2E986_6EF5_55E6_41CD_B474921C6605",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveRight": "this.IconButton_4ED28986_6EF5_55E6_41BB_2CEB82642490",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration",
 "buttonPlayLeft": "this.IconButton_4ED22986_6EF5_55E6_41AC_83475277A052",
 "class": "PanoramaPlayer",
 "buttonPlayRight": "this.IconButton_4ED2A986_6EF5_55E6_41CF_76B165E16D65",
 "touchControlMode": "drag_rotation",
 "buttonMoveUp": "this.IconButton_4ED2F986_6EF5_55E6_41B0_D3413F11C07C",
 "viewerArea": "this.MainViewer",
 "buttonMoveDown": "this.IconButton_4ED29986_6EF5_55E6_41DB_46E044D78000"
},
{
 "id": "camera_5DFCFD75_6E7A_CD3A_41AA_DE6A525F669B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63311780_6940_34CD_41BC_74F1065452D5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632F5619_694F_D7FF_418D_73FD857AA06A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "27 Nha gi do 1",
 "id": "panorama_63321EA1_6940_34CF_41B3_FBF388F01F38",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5",
   "yaw": 94.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -145.64
  },
  {
   "panorama": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7",
   "yaw": 168.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.96
  },
  {
   "panorama": "this.panorama_63D3C1CC_6940_2C55_4182_95F889CD362C",
   "yaw": 6.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -50.47
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_736645DB_6ED5_BD6E_41CE_8F4951A120CD",
  "this.overlay_73300607_6ED5_7EE5_41B1_F49659301CA4",
  "this.overlay_72AD38BB_6ED7_532E_41D4_C03FF7AF99FD"
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_t.jpg"
},
{
 "partial": false,
 "vfov": 180,
 "label": "29 Khu tu hoc",
 "id": "panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185",
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360
},
{
 "id": "panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5C69BCAD_6E7A_B32A_41D3_AF32D9B846C2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "22 Phong hoc CLC",
 "id": "panorama_63CDBF66_6940_7455_41D7_808DACABAF3F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E"
  },
  {
   "panorama": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6",
   "yaw": -96.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -10.76
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7F12F8FA_6940_3C3D_41BA_8BDFB7F9552E",
  "this.overlay_463E16F6_6E55_DF27_41D1_51E7AA934B22"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_t.jpg"
},
{
 "id": "camera_4434106A_6E7A_D32E_41B9_51A65BD424A2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632FC730_6940_55CD_4192_F95E71879870_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "21 Day nha CLC 3",
 "id": "panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29",
   "yaw": -169.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -101.77
  },
  {
   "panorama": "this.panorama_63CA9135_6940_2C37_41C7_6475EB153877",
   "yaw": 9.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 136.36
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_73E69A3E_69C3_DC34_41B9_61578537B2EE",
  "this.overlay_756A9621_69C7_D7CF_41CC_7AA6327DDD15"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_t.jpg"
},
{
 "id": "panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "19 Duong di 2",
 "id": "panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD",
   "yaw": 161.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.02
  },
  {
   "panorama": "this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C",
   "yaw": 61.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -74.46
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7BD9B79B_6940_D4F3_41C4_660216FB5281",
  "this.overlay_7D436778_6940_743C_41B7_299C12CC1423"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_t.jpg"
},
{
 "label": "3-nga-tu-phong-the-thao",
 "id": "panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC",
   "yaw": -168.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.53
  },
  {
   "panorama": "this.panorama_6334771F_6940_55F3_418F_150F3C52AE0F",
   "yaw": -30.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.08
  },
  {
   "panorama": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0",
   "yaw": 79.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -26.82
  },
  {
   "panorama": "this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C",
   "yaw": -82.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 54.11
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_780824C6_6940_7455_41D5_EA65C45BD467",
  "this.overlay_79CF3B70_6941_DC4D_41C2_70884297E63B",
  "this.overlay_7AC490EE_6940_2C54_41D3_131BAB831FDB",
  "this.overlay_7BED00AF_6941_ECD3_41D4_4361FF949E8F"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_t.jpg"
},
{
 "id": "camera_428A12C9_6E7A_D76A_41C5_77479F51E912",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 129.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA",
   "camera": "this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A",
   "camera": "this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E",
   "camera": "this.panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0",
   "camera": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
   "camera": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1",
   "camera": "this.panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC",
   "camera": "this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8",
   "camera": "this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A",
   "camera": "this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428",
   "camera": "this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A",
   "camera": "this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7",
   "camera": "this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C",
   "camera": "this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3",
   "camera": "this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5",
   "camera": "this.panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9",
   "camera": "this.panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5",
   "camera": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632FC730_6940_55CD_4192_F95E71879870",
   "camera": "this.panorama_632FC730_6940_55CD_4192_F95E71879870_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827",
   "camera": "this.panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6334771F_6940_55F3_418F_150F3C52AE0F",
   "camera": "this.panorama_6334771F_6940_55F3_418F_150F3C52AE0F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C",
   "camera": "this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94",
   "camera": "this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD",
   "camera": "this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29",
   "camera": "this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E",
   "camera": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6",
   "camera": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63CDBF66_6940_7455_41D7_808DACABAF3F",
   "camera": "this.panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454",
   "camera": "this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63CA9135_6940_2C37_41C7_6475EB153877",
   "camera": "this.panorama_63CA9135_6940_2C37_41C7_6475EB153877_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632EB3B4_6943_EC35_418A_FF08BAC32509",
   "camera": "this.panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63CAC346_6943_EC54_41CB_42817D364063",
   "camera": "this.panorama_63CAC346_6943_EC54_41CB_42817D364063_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63D3C1CC_6940_2C55_4182_95F889CD362C",
   "camera": "this.panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38",
   "camera": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E",
   "camera": "this.panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185",
   "camera": "this.panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "id": "camera_44EDFFC1_6E7A_CD5A_41CE_7B9D7010DAAD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -123.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_44095016_6E7A_D2E6_41BF_667BE84C03A6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 99.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "14 Tren lau day nha gi do",
 "id": "panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5",
   "yaw": 158.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.62
  },
  {
   "panorama": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5",
   "yaw": -159.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.62
  },
  {
   "panorama": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5",
   "yaw": 159.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.62
  },
  {
   "panorama": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5",
   "yaw": -159.55,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.62
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7763B53C_6DB6_DD2A_41D6_DC24410EFE4D",
  "this.overlay_77302D94_6DB7_4DFA_41B7_F3A7729425C4",
  "this.overlay_49F04036_6E4A_F326_41BD_6E7B268BE4CE",
  "this.overlay_44A9D3CE_6E4B_7567_4199_EF585655E5EA"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_t.jpg"
},
{
 "id": "camera_459AF106_6E7A_D2E6_41B1_8B9B63EDAD40",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D656E23_6E7A_CEDE_41C1_5107A8562275",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4539A20B_6E7A_D6EE_4195_4BA7E3EA348E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -62.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "1-cong-sau",
 "id": "panorama_622F1BAB_694F_DCD3_41D3_430D033784EA",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A",
   "yaw": 142.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -142.99
  },
  {
   "panorama": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0",
   "yaw": 14.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 56.41
  }
 ],
 "hfovMax": 148,
 "overlays": [
  "this.overlay_64A8421A_6940_2FFD_41D4_92A6EB47BBD9",
  "this.overlay_7D237402_6DBF_52DE_41D4_A8DB265CF5DD"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_t.jpg"
},
{
 "items": [
  {
   "media": "this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA",
   "camera": "this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A",
   "camera": "this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E",
   "camera": "this.panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0",
   "camera": "this.panorama_63317D24_6940_55D5_41B7_96602315E3E0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
   "camera": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1",
   "camera": "this.panorama_63DB3E17_6940_57F3_41D4_6AD419E714E1_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC",
   "camera": "this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8",
   "camera": "this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A",
   "camera": "this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428",
   "camera": "this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A",
   "camera": "this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7",
   "camera": "this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C",
   "camera": "this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3",
   "camera": "this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5",
   "camera": "this.panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9",
   "camera": "this.panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5",
   "camera": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632FC730_6940_55CD_4192_F95E71879870",
   "camera": "this.panorama_632FC730_6940_55CD_4192_F95E71879870_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827",
   "camera": "this.panorama_63DF09B6_6940_7C35_4195_3FFE5A50D827_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6334771F_6940_55F3_418F_150F3C52AE0F",
   "camera": "this.panorama_6334771F_6940_55F3_418F_150F3C52AE0F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C",
   "camera": "this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94",
   "camera": "this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD",
   "camera": "this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29",
   "camera": "this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E",
   "camera": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6",
   "camera": "this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63CDBF66_6940_7455_41D7_808DACABAF3F",
   "camera": "this.panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454",
   "camera": "this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63CA9135_6940_2C37_41C7_6475EB153877",
   "camera": "this.panorama_63CA9135_6940_2C37_41C7_6475EB153877_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_632EB3B4_6943_EC35_418A_FF08BAC32509",
   "camera": "this.panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63CAC346_6943_EC54_41CB_42817D364063",
   "camera": "this.panorama_63CAC346_6943_EC54_41CB_42817D364063_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63D3C1CC_6940_2C55_4182_95F889CD362C",
   "camera": "this.panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38",
   "camera": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E",
   "camera": "this.panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185",
   "camera": "this.panorama_63C0BA8E_6940_7CD4_41D4_E8A63110D185_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7",
   "camera": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist, 35, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist",
 "class": "PlayList"
},
{
 "id": "panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45B4114E_6E7A_D566_41D6_EFDF7B939664",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D441E00_6E7A_CEDA_41D2_FDAF74ABDB2D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 153.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "13 Phong hoc nha gi do",
 "id": "panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63311780_6940_34CD_41BC_74F1065452D5"
  },
  {
   "panorama": "this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3",
   "yaw": -102.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 134.45
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7A3A73E2_6DDA_B55F_41C5_689B246F133F",
  "this.overlay_751A4F9C_6DD6_CDEA_41BA_8EEC8CC41C98"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_t.jpg"
},
{
 "id": "camera_45ECC1C6_6E7A_D566_41C4_B4247B0CCF54",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_443FC059_6E7A_D36A_41D5_5FDAB796EA1A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_6334771F_6940_55F3_418F_150F3C52AE0F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "8 Nga tu cm gi do phan 2",
 "id": "panorama_632EF8B8_6940_3C3D_41C8_85EA56385428",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A",
   "yaw": -165.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -32
  },
  {
   "panorama": "this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A",
   "yaw": 95.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 90.47
  },
  {
   "panorama": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7",
   "yaw": -87.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.65
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7E5184D0_6DFB_537A_4170_0EA311182386",
  "this.overlay_7B6205DD_6DFB_5D6A_41C6_3F736F77F5B8",
  "this.overlay_7932033C_6DF5_D52B_41B5_6870ACCE1EFE",
  "this.overlay_790CAA5D_6DF5_5765_41A6_3EFFB87DE41E"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_t.jpg"
},
{
 "label": "15 Duoi lau day nha gi do",
 "id": "panorama_63311780_6940_34CD_41BC_74F1065452D5",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9",
   "yaw": -176.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 158.81
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63D3C1CC_6940_2C55_4182_95F889CD362C"
  },
  {
   "panorama": "this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38",
   "yaw": -145.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.8
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3"
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_749F5560_6DCF_FD5B_41D8_9EB1DEEAE310",
  "this.overlay_7528BD13_6DCA_D2FE_41D8_1A40AC0D750A",
  "this.overlay_7637AD4B_6DB6_CD6E_41D1_AF45771C013C",
  "this.overlay_74D21F47_6E4F_CD65_41D9_06C99BEF3585"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_t.jpg"
},
{
 "label": "24 Trong cong truoc",
 "id": "panorama_63CA9135_6940_2C37_41C7_6475EB153877",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63CAC346_6943_EC54_41CB_42817D364063",
   "yaw": -166.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.4
  },
  {
   "panorama": "this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A",
   "yaw": 6.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 17.36
  },
  {
   "panorama": "this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E",
   "yaw": 136.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 9.54
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7374B304_69C3_EDD5_41B9_4DB433868B0C",
  "this.overlay_4901B0CF_69C0_2C53_41CC_14DBF4BAF432",
  "this.overlay_779FCEF6_69C0_3434_41B5_E020292AEA45"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_t.jpg"
},
{
 "id": "camera_5DB67D15_6E7A_B2FA_41D7_2F9F12D1B3B4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D29FDCB_6E7A_CD6E_4196_C2CAF54E4C14",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "28 Nha gi do 2",
 "id": "panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C"
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_485CD00D_6EB5_52EA_41C3_CD30A69E2CB8",
  "this.overlay_498B0D71_6EB7_4D3A_41AF_FC0AE4378FC4"
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_t.jpg"
},
{
 "label": "6 Nga tu cm gi do",
 "id": "panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC",
   "yaw": -80.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.37
  },
  {
   "panorama": "this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A",
   "yaw": 85.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -79.45
  },
  {
   "panorama": "this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7",
   "yaw": 2.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": 172.44
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_7F596D11_6DCB_F2FA_41B6_ED836078B346",
  "this.overlay_7F1C6632_6DCD_FF3E_41D9_F07A3381BA10",
  "this.overlay_7C19D38B_6DCE_D5ED_41BF_878FFEE3A899"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_t.jpg"
},
{
 "id": "camera_5AA11E6C_6E7A_CF2A_41CF_C8A8063D3444",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_454C1261_6E7A_D75A_41A5_E4C757C6C1B1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45F831A3_6E7A_D5DE_41D4_D64B0B88BCB7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -142.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5DCF5D58_6E7A_CD6A_41A1_66AEB4BF26A0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_44E88FB0_6E7A_CD3A_41D9_282E34895A8F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D1ACD98_6E7A_CDEA_41B7_A11C8648A3A1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5ACF0E8F_6E7A_CFE6_41D9_9FD225071153",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4547B273_6E7A_D73E_41D4_CC813EF3BEB7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 128.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_444230C1_6E7A_D35D_4171_484E40CCB7DF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "2-thu-vien",
 "id": "panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632FC730_6940_55CD_4192_F95E71879870",
   "yaw": -6.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.23
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_4D0DFBF9_6ED6_B52D_41D5_3AEEDA390336"
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_t.jpg"
},
{
 "id": "panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 90,
  "yaw": 10.95,
  "class": "PanoramaCameraPosition",
  "pitch": 3.07
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_445F809F_6E7A_D3E6_418B_323E29C2D439",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_45816129_6E7A_D52A_41D4_537C49FF734C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D264DDD_6E7A_CD6A_41CC_13DC91ECC8C4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4438F048_6E7A_D36A_41CA_F0F5800B4B6B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D80BCF2_6E7A_B33E_4198_C6AE7911A60C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_44026038_6E7A_D32A_41C8_A4F4A20D257C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 111.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "label": "17 Nha thi dau",
 "id": "panorama_6334771F_6940_55F3_418F_150F3C52AE0F",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89",
   "yaw": -170.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "backwardYaw": -30.85
  }
 ],
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_6427ED53_6996_8F46_41BC_43C9204FB561"
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_t.jpg"
},
{
 "id": "camera_450C71FA_6E7A_D52E_41B9_FAFDC6FA0D43",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5AB16E5B_6E7A_CF6E_41C8_254D65CF7D22",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -170.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5C62DCBE_6E7A_B326_419A_45350C3BCF2C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 90,
  "yaw": -37.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4570B284_6E7A_D7DA_41CF_6742FB60F3C6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63317D24_6940_55D5_41B7_96602315E3E0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_5D562DEE_6E7A_CD26_41DA_DE0E75A7B611",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63CA9135_6940_2C37_41C7_6475EB153877_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "vfov": 180,
 "label": "25 Truoc cong",
 "id": "panorama_632EB3B4_6943_EC35_418A_FF08BAC32509",
 "hfovMin": "120%",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_632EB3B4_6943_EC35_418A_FF08BAC32509_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360
},
{
 "id": "camera_441C1FF4_6E7A_CD3A_41B1_E42BADB8E833",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "id": "camera_4422908E_6E7A_D3E6_41DA_45B3268F3E83",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10
},
{
 "toolTipFontStyle": "normal",
 "propagateClick": false,
 "left": 0,
 "id": "MainViewer",
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressBorderColor": "#000000",
 "width": "100%",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarBackgroundOpacity": 1,
 "paddingRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "minWidth": 100,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerSelectionTime": 2000,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "height": "100%",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "vrPointerColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderSize": 0,
 "paddingLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingBottom": 4,
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "toolTipTextShadowBlurRadius": 3,
 "top": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarHeight": 10,
 "paddingBottom": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_4ED20986_6EF5_55E6_41C5_3F572B7786C0",
  "this.IconButton_4ED23986_6EF5_55E6_41BC_2C6CE5F4DA24",
  "this.IconButton_4ED22986_6EF5_55E6_41AC_83475277A052",
  "this.IconButton_4ED2D986_6EF5_55E6_41D8_8FAAFC95DBEA",
  "this.Container_4ED2C986_6EF5_55E6_41C6_E9820EC48F06",
  "this.IconButton_4ED28986_6EF5_55E6_41BB_2CEB82642490",
  "this.IconButton_4ED2A986_6EF5_55E6_41CF_76B165E16D65",
  "this.IconButton_4ED15986_6EF5_55E6_41C9_9A2BFEB7397A",
  "this.IconButton_4ED14986_6EF5_55E6_41C5_ABF49BF0E172"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "left": 374,
 "right": "33.51%",
 "scrollBarMargin": 2,
 "id": "Container_4ED17986_6EF5_55E3_41D0_66E91F7CD54D",
 "overflow": "hidden",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": 139,
 "minWidth": 20,
 "minHeight": 20,
 "borderSize": 0,
 "bottom": "0.17%",
 "gap": 4,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Container46340"
 },
 "borderRadius": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_4E3FBB92_6EFF_55FF_41D4_2DC60BEA09E5_pressed.png",
 "paddingLeft": 0,
 "width": 40,
 "rollOverIconURL": "skin/IconButton_4E3FBB92_6EFF_55FF_41D4_2DC60BEA09E5_rollover.png",
 "propagateClick": false,
 "right": "3.8%",
 "id": "IconButton_4E3FBB92_6EFF_55FF_41D4_2DC60BEA09E5",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4E3FBB92_6EFF_55FF_41D4_2DC60BEA09E5.png",
 "mode": "toggle",
 "bottom": "8.29%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46351"
 },
 "borderRadius": 0,
 "class": "IconButton"
},
{
 "propagateClick": false,
 "width": 121,
 "id": "ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0",
 "itemThumbnailBorderRadius": 100,
 "right": "0%",
 "scrollBarMargin": 2,
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "itemThumbnailShadowSpread": 1,
 "scrollBarWidth": 10,
 "itemVerticalAlign": "middle",
 "itemThumbnailShadow": true,
 "paddingRight": 20,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 20,
 "height": "79.27%",
 "borderSize": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "shadow": false,
 "itemThumbnailHeight": 83,
 "class": "ThumbnailList",
 "itemBackgroundOpacity": 0,
 "borderRadius": 5,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "layout": "vertical",
 "scrollBarColor": "#FFFFFF",
 "scrollBarOpacity": 0.5,
 "itemThumbnailOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 20,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailShadowBlurRadius": 8,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "itemPaddingRight": 3,
 "top": "0%",
 "gap": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemPaddingBottom": 3,
 "itemOpacity": 1,
 "itemThumbnailShadowColor": "#000000",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelGap": 0,
 "paddingTop": 10,
 "itemLabelFontStyle": "normal",
 "itemThumbnailShadowHorizontalLength": 3,
 "backgroundOpacity": 0.24,
 "paddingBottom": 10,
 "verticalAlign": "top",
 "itemMode": "normal",
 "itemLabelHorizontalAlign": "center",
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowOpacity": 0.54,
 "playList": "this.ThumbnailList_4E97DAB7_6EFD_7725_4122_6B3BB8FC4CE0_playlist",
 "data": {
  "name": "ThumbnailList35762"
 },
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Arial"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED15986_6EF5_55E6_41C9_9A2BFEB7397A_pressed.png",
 "paddingLeft": 0,
 "width": 40,
 "rollOverIconURL": "skin/IconButton_4ED15986_6EF5_55E6_41C9_9A2BFEB7397A_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED15986_6EF5_55E6_41C9_9A2BFEB7397A",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED15986_6EF5_55E6_41C9_9A2BFEB7397A.png",
 "mode": "toggle",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46351"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_0_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.48,
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CC59E2_6EDD_755E_41D9_5B6DF321C23C",
   "pitch": 0.81,
   "yaw": -97.48,
   "hfov": 11.29,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_71D290E0_6EDF_535A_41D6_AFE8426BF9D9",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "L\u1ed1i v\u00e0o th\u01b0 vi\u1ec7n"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -89.47,
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C3C9E3_6EDD_755E_41A3_C1DE8FDCE6AB",
   "pitch": -7.41,
   "yaw": -89.47,
   "hfov": 11.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7060DBE9_6EDF_552A_41CF_4E6CEDA07FDF",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "L\u1ed1i ra c\u1ed5ng sau"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.96,
   "hfov": 12.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C389E4_6EDD_755A_41D6_E3F8D5AEC5C8",
   "pitch": -8.57,
   "yaw": -5.96,
   "hfov": 12.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73B51F40_6EDD_4D5A_419B_9F465BEBA5CA",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38, this.camera_4434106A_6E7A_D32E_41B9_51A65BD424A2); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "L\u1ed1i v\u00e0o s\u00e2n h\u1ed9i tr\u01b0\u1eddng nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_3_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 85.65,
   "hfov": 13.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C339E5_6EDD_755A_41D8_06E52CE45111",
   "pitch": -7.41,
   "yaw": 85.65,
   "hfov": 13.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73EF2668_6EDA_BF2A_41DA_491D4E519390",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428, this.camera_443FC059_6E7A_D36A_41D5_5FDAB796EA1A); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_4_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 164.81,
   "hfov": 16.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C2F9E6_6EDD_7526_418A_3AA294F592D6",
   "pitch": -2.05,
   "yaw": 164.81,
   "hfov": 16.4,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73C33812_6ED5_52FE_41AC_FB512B7C1E85",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A, this.camera_44026038_6E7A_D32A_41C8_A4F4A20D257C); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "L\u1ed1i v\u00e0o ch\u1ed7 l\u1ea5y n\u01b0\u1edbc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 172.44,
   "hfov": 15.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C269E7_6EDD_7526_41D5_4AC85FD5CAC4",
   "pitch": -9.32,
   "yaw": 172.44,
   "hfov": 15.5,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_730F6173_6ED7_553D_41CB_39673742DBFA",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8, this.camera_4438F048_6E7A_D36A_41CA_F0F5800B4B6B); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.53,
   "hfov": 13.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FE99AF_6EDD_7526_41D7_C939445B4031",
   "pitch": -8.35,
   "yaw": 0.53,
   "hfov": 13.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7C74A732_6DDD_7D3E_41D2_9312843AD6CB",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89, this.camera_440F8027_6E7A_D326_41C0_744D5253C829); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 ng\u00e3 t\u01b0 nh\u00e0 th\u1ec3 thao"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 41
     }
    ]
   },
   "yaw": -94.03,
   "hfov": 101.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -94.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_1_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 429
     }
    ]
   },
   "pitch": 3.51,
   "roll": 0,
   "hfov": 101.23
  }
 ],
 "id": "overlay_7F9CB979_6DDB_D52A_41D8_153FBFE5FA50",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ph\u00f2ng t\u1ef1 h\u1ecdc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -174.37,
   "hfov": 14.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FDE9B0_6EDD_753A_41C4_A9E8FBBFCB37",
   "pitch": -12.08,
   "yaw": -174.37,
   "hfov": 14.05,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7CF26094_6DD7_B3FB_41C4_0100F62E1344",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8, this.camera_44095016_6E7A_D2E6_41BF_667BE84C03A6); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 56.41,
   "hfov": 8.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F909AB_6EDD_752E_41C7_55664A32567F",
   "pitch": -9.07,
   "yaw": 56.41,
   "hfov": 8.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67D53406_6940_6BD5_41C6_7136554EDA4F",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA, this.camera_444910B0_6E7A_D33A_41B7_1703CA83D6A3); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ra c\u1ed5ng"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -26.82,
   "hfov": 9.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F8A9AC_6EDD_752A_41DA_CF253E72FC4F",
   "pitch": -8.68,
   "yaw": -26.82,
   "hfov": 9.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7BE37D3E_6940_7435_41AD_E30D503F4422",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89, this.camera_447690E4_6E7A_D35A_41D4_C63A42465AA6); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ng\u00e3 t\u01b0 nh\u00e0 th\u1ec3 thao"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -158,
   "hfov": 11.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F869AC_6EDD_752A_41B5_C085236E6501",
   "pitch": -2.83,
   "yaw": -158,
   "hfov": 11.26,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66671D07_6940_D5D3_41D3_F3567608BF6B",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632FC730_6940_55CD_4192_F95E71879870, this.camera_444230C1_6E7A_D35D_4171_484E40CCB7DF); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng v\u1ec1 thu vi\u1ec7n"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_3_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 116.15,
   "hfov": 27.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_3_0.png",
      "width": 696,
      "class": "ImageResourceLevel",
      "height": 247
     }
    ]
   },
   "pitch": 20.19,
   "yaw": 116.15,
   "hfov": 27.89,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7B990C53_6940_5473_41D4_2B0800A4C79A",
 "data": {
  "label": "Nh\u00e0 xe"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 37.67,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F409CB_6EDD_756E_41CD_41073F57712B",
   "pitch": -5.67,
   "yaw": 37.67,
   "hfov": 10.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7EE72983_6940_7CD3_41D8_2ECCDD417822",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454, this.camera_4547B273_6E7A_D73E_41D4_CC813EF3BEB7); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u01a1ng \u0111i h\u00e0nh lang nh\u00e0 B1"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 76.56,
   "hfov": 10.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CBA9CB_6EDD_756E_41C7_BA4422385BB1",
   "pitch": -5.18,
   "yaw": 76.56,
   "hfov": 10.9,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_71EC6328_6940_2DDC_41D1_E1C96624CA0F",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6, this.camera_456A5296_6E7A_D7E6_41BC_45B3C4BE56D4); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng v\u1ebf s\u00e2n nh\u00e0 B3"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -101.77,
   "hfov": 13.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CB49CB_6EDD_756E_41CC_A3376A364F3B",
   "pitch": -3.8,
   "yaw": -101.77,
   "hfov": 13.11,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_733CA70F_6940_35D4_419F_F1B542854402",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E, this.camera_4570B284_6E7A_D7DA_41CF_6742FB60F3C6); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n nh\u00e0 B1"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.16,
   "hfov": 23.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D87ADE_6E4B_B766_41D9_F24A48EF11F9",
   "pitch": -17.85,
   "yaw": -159.16,
   "hfov": 23.13,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7AF4BB23_6DD5_56DE_41D5_77B0022065C5",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7, this.camera_4539A20B_6E7A_D6EE_4195_4BA7E3EA348E); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.86,
   "hfov": 21.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D9EADF_6E4B_B766_41A5_44048E22AF7F",
   "pitch": -17.87,
   "yaw": -1.86,
   "hfov": 21.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7B96C5D7_6DD5_5D65_41D4_5621859DE1C9",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3, this.camera_4533021C_6E7A_D6EA_41D5_3975BD61C5C5); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i s\u00e2n 2 nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 54.11,
   "hfov": 20.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F579C7_6EDD_7566_41A7_855087CAD04B",
   "pitch": -18.31,
   "yaw": 54.11,
   "hfov": 20.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7B1F1A9A_6940_5CFD_419E_EBBDC69515C0",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89, this.camera_450C71FA_6E7A_D52E_41B9_FAFDC6FA0D43); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 ng\u00e3 t\u01b0 nh\u00e0 th\u1ec3 thao."
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -74.46,
   "hfov": 19.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F509C8_6EDD_756A_41D2_9CD6B1A1CD0C",
   "pitch": -33.81,
   "yaw": -74.46,
   "hfov": 19.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7BEC0FDE_6943_D475_41DA_0EC56852013E",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94, this.camera_4512C1E8_6E7A_D52A_41CD_CC04EBB0CAFE); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ti\u1ebfp t\u1ee5c \u0111i v\u1ec1 nh\u00e0 \u0111i\u1ec1u h\u00e0nh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -84.23,
   "hfov": 17.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DC4AEA_6E4B_B72E_41CF_98EBEC3BD343",
   "pitch": -16.17,
   "yaw": -84.23,
   "hfov": 17.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4A2D2CA2_6ECA_B3DE_41D3_08497473AAB8",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E, this.camera_45ECC1C6_6E7A_D566_41C4_B4247B0CCF54); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "V\u00e0o th\u01b0 vi\u1ec7n"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.48,
   "hfov": 16.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DC1AEA_6E4B_B72E_41D4_B816EC98FB45",
   "pitch": -13,
   "yaw": -2.48,
   "hfov": 16.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4AACF5A3_6ECB_5DDE_41D8_7FB99D0DF14E",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63317D24_6940_55D5_41B7_96602315E3E0, this.camera_4519E1D7_6E7A_D566_41AD_190D07E32B92); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra c\u1ed5ng sau"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -151.86,
   "hfov": 17.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DDEAEB_6E4B_B72E_41CA_18BE0B23EACE",
   "pitch": -17.91,
   "yaw": -151.86,
   "hfov": 17.12,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4A97288D_6EB5_D3EA_41CB_138D65DE9325",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i ng\u00e3 t\u01b0 ch\u00ednh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 115.59,
   "hfov": 13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F179BC_6EDD_752A_41C5_683EED76A96A",
   "pitch": -9.5,
   "yaw": 115.59,
   "hfov": 13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7B5121EF_6DDD_5525_41AF_8EA4E46C744D",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C, this.camera_5DCF5D58_6E7A_CD6A_41A1_66AEB4BF26A0); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 s\u00e2n 1 nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 134.45,
   "hfov": 16.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F0E9BD_6EDD_752A_41D1_32D733692B8B",
   "pitch": -8.06,
   "yaw": 134.45,
   "hfov": 16.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76C33940_6DDE_B55A_41D4_C296B875CBF4",
 "data": {
  "label": "Arrow 09b Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5, this.camera_5DD17D39_6E7A_CD2A_4192_73EF37358F8C); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng v\u00e0o ph\u00f2ng h\u1ecdc nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -132.26,
   "hfov": 11.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C819D4_6EDD_757A_41C7_13BD932301F2",
   "pitch": -6.96,
   "yaw": -132.26,
   "hfov": 11.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_72F09ACE_69C0_5C55_41CB_ADD5B95D2F4C",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6, this.camera_45F551B4_6E7A_D53A_417A_D1AC0A19CDC4); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n nh\u00e0 B3"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -51.51,
   "hfov": 11.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CFA9D4_6EDD_757A_41A4_EBF5F9F6B5B5",
   "pitch": -8.21,
   "yaw": -51.51,
   "hfov": 11.18,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_700987CF_69C7_D453_41C8_EA9A44D77BB1",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29, this.camera_45F831A3_6E7A_D5DE_41D4_D64B0B88BCB7); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra nh\u00e0 B2"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -174.71,
   "hfov": 8.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CF49D5_6EDD_757A_41CA_17434B4AF7E3",
   "pitch": -3.38,
   "yaw": -174.71,
   "hfov": 8.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_731BF865_69C0_7C57_41D0_6FDBA3967BCF",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng l\u00ean ph\u00f2ng h\u1ecdc CL"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_1_HS_0_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -79.45,
   "hfov": 12.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FE19B2_6EDD_753E_41C8_5BCEF5E62774",
   "pitch": -0.99,
   "yaw": -79.45,
   "hfov": 12.24,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7E473129_6DF6_D52A_4196_7954D0682A7D",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8, this.camera_4527D23F_6E7A_D726_41A1_2D3640BAE2B2); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -68.9,
   "hfov": 11.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FDB9B7_6EDD_7526_41C4_F17CBA3DB3DB",
   "pitch": -0.7,
   "yaw": -68.9,
   "hfov": 11.89,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7F66A7E8_6DF5_BD2A_41D7_B160D2A147BA",
 "data": {
  "label": "Arrow 09b Right"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7, this.camera_454C1261_6E7A_D75A_41A5_E4C757C6C1B1); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ng\u00e3 t\u01b0 ch\u00ednh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -32,
   "hfov": 15.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FD29B8_6EDD_752A_41D9_349C0947958A",
   "pitch": -12.36,
   "yaw": -32,
   "hfov": 15.37,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7835940C_6DFB_72EB_41C6_B8C747C7DB03",
 "data": {
  "label": "Arrow 09b Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428, this.camera_4550D250_6E7A_D77A_41D3_29158700C89F); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.02,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F2D9BB_6EDD_752E_41B0_BB3FCC74E200",
   "pitch": -9.33,
   "yaw": -3.02,
   "hfov": 11.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7BC74308_6DCD_56EB_41D5_CA5F1979F6C2",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A, this.camera_5DB67D15_6E7A_B2FA_41D7_2F9F12D1B3B4); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 117.6,
   "hfov": 12.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F279BC_6EDD_752A_41D5_A700143A4E6D",
   "pitch": -7.02,
   "yaw": 117.6,
   "hfov": 12.75,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7BA306C9_6DD5_BF6D_41C5_E273101228A2",
 "data": {
  "label": "Arrow 09b Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C, this.camera_5DA27D27_6E7A_CD26_419C_003F924F240A); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n 1 nh\u00e0 C "
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -160.1,
   "hfov": 18.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D88ADD_6E4B_B76A_4193_1C8D6C6AAE0D",
   "pitch": -13.24,
   "yaw": -160.1,
   "hfov": 18.87,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B091D4C_6EBB_4D6A_41D4_121C5F497C3B",
 "data": {
  "label": "Arrow 09a Right"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_1_HS_0_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 123.48,
   "hfov": 10.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F579C9_6EDD_756A_41B9_6F402F8E2F34",
   "pitch": -5.8,
   "yaw": 123.48,
   "hfov": 10.72,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7A02BAB8_6940_5C3D_41C3_A594789FEC50",
 "data": {
  "label": "Arrow 09b Right"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63CAC346_6943_EC54_41CB_42817D364063, this.camera_5ADF4E7E_6E7A_CF26_41A6_82BD102DF30B); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n nh\u00e0 \u0111i\u1ec1u h\u00e0nh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.02,
   "hfov": 10.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F4F9CA_6EDD_756E_41CA_4A3AA47C4855",
   "pitch": -4.78,
   "yaw": 89.02,
   "hfov": 10.47,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D9BCD82_6940_74CD_41C6_4E838E7CD435",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94, this.camera_5AA11E6C_6E7A_CF2A_41CF_C8A8063D3444); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 nh\u00e0 th\u1ec3 thao."
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.44,
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F489CA_6EDD_756E_419F_8891D74BC067",
   "pitch": -8.97,
   "yaw": -6.44,
   "hfov": 11.03,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7CD8ECBB_6940_3433_41D2_92B0FB937F1A",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6, this.camera_5ACF0E8F_6E7A_CFE6_41D9_9FD225071153); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n d\u00e3y nh\u00e0 CL"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10.76,
   "hfov": 11.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CA19CD_6EDD_756A_41CA_0544EB6D940F",
   "pitch": -4.79,
   "yaw": -10.76,
   "hfov": 11.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7C55C3FD_6940_2C37_41D8_BC893D54CE8A",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63CDBF66_6940_7455_41D7_808DACABAF3F, this.camera_44E36FD2_6E7A_CD7E_41D0_C83E8A843408); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "L\u00ean ph\u00f2ng h\u1ecdc CLC"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 162.27,
   "hfov": 13.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C9A9D2_6EDD_757E_41D6_6D6458EA216F",
   "pitch": -2.36,
   "yaw": 162.27,
   "hfov": 13.49,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7CCE67D1_6941_D44F_41C6_DC6B2CB8DF9B",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD, this.camera_441C1FF4_6E7A_CD3A_41B1_E42BADB8E833); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng v\u1ec1 nh\u00e0 th\u1ec3 thao"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -100.5,
   "hfov": 11.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C929D3_6EDD_757E_41C6_146E3D63584F",
   "pitch": -3.73,
   "yaw": -100.5,
   "hfov": 11.91,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7172F97C_6940_DC35_41D6_EE1E75C44DCA",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29, this.camera_4410F005_6E7A_D2DA_41C0_08C391D1FF2F); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n nh\u00e0 B2"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_3_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -22.29,
   "hfov": 10.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C8F9D3_6EDD_757E_41DA_9441D6C4E40C",
   "pitch": -5.97,
   "yaw": -22.29,
   "hfov": 10.34,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73E9C116_69C0_6DF5_4193_5DE5851A1A36",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E8061_6940_2C4C_41C6_4C01D1C97454, this.camera_44E7DFE3_6E7A_CD5E_41DA_7BB9D3CFB551); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i h\u00e0nh lang nh\u00e0 B1"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -50.47,
   "hfov": 14.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CC69D7_6EDD_7566_41DB_94AB995194DB",
   "pitch": -10.99,
   "yaw": -50.47,
   "hfov": 14.62,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4F006418_6EDB_D2EB_4191_CCD58F3D3B7A",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38, this.camera_5D387DBA_6E7A_CD2E_41D1_0F20654DA204); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ra s\u00e2n tr\u01b0\u1edbc h\u1ed9i tr\u01b0\u1eddng"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0_HS_1_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "yaw": -62.1,
   "hfov": 9.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -62.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_0_HS_1_0.png",
      "width": 176,
      "class": "ImageResourceLevel",
      "height": 220
     }
    ]
   },
   "pitch": -4.32,
   "roll": 0,
   "hfov": 9.97
  }
 ],
 "id": "overlay_45DCCAC6_6E57_B767_41C9_2C15E09816B9",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38, this.camera_5D29FDCB_6E7A_CD6E_4196_C2CAF54E4C14); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ra s\u00e2n tr\u01b0\u1edbc h\u1ed9i tr\u01b0\u1eddng"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.47,
   "hfov": 14.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F379BA_6EDD_752E_41CD_FDE3DE131106",
   "pitch": -12.21,
   "yaw": 90.47,
   "hfov": 14.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79104FC4_6DCB_4D5B_41C5_91F0F1C3AEED",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632EF8B8_6940_3C3D_41C8_85EA56385428, this.camera_5D1ACD98_6E7A_CDEA_41B7_A11C8648A3A1); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.24,
   "hfov": 14.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F309BB_6EDD_752E_41D7_6C55CF2D5896",
   "pitch": -12.21,
   "yaw": -90.24,
   "hfov": 14.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7905D373_6DCB_553E_41DA_4E4555783053",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7, this.camera_5D08CDA9_6E7A_CD2A_41B4_B5F38AFECD50); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -53.4,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CDA9D6_6EDD_7566_41DB_1B546CADEBA5",
   "pitch": -0.94,
   "yaw": -53.4,
   "hfov": 8.23,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7DB1ECF2_6DCB_733F_41D5_2EC068931018",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63CA9135_6940_2C37_41C7_6475EB153877, this.camera_45A1015F_6E7A_D566_41C4_10545418B606); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i ra c\u1ed5ng tr\u01b0\u1edbc."
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -21.79,
   "hfov": 10.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CD29D6_6EDD_7566_41C6_01977391FC87",
   "pitch": 1.04,
   "yaw": -21.79,
   "hfov": 10.86,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6229C41F_6DCE_D2E6_41C4_5051839D5184",
 "data": {
  "label": "Arrow 09b Right"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n nh\u00e0 B3"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 79.08,
   "hfov": 9.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CCF9D7_6EDD_7566_41A8_91988AE5FF19",
   "pitch": -1.59,
   "yaw": 79.08,
   "hfov": 9.33,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79B309DC_6DCF_556A_41D5_B3E0C2C07145",
 "data": {
  "label": "Arrow 09b Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD, this.camera_45DA016F_6E7A_D526_41D0_94B05CA26F99); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng tr\u1edf l\u1ea1i nh\u00e0 th\u1ec3 thao."
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 17.36,
   "hfov": 15.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F9C9A9_6EDD_752A_41CF_F399F3AD9D79",
   "pitch": -13.37,
   "yaw": 17.36,
   "hfov": 15.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6310FC79_6DBA_B32D_41A7_283C3A594E6B",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63CA9135_6940_2C37_41C7_6475EB153877, this.camera_5C69BCAD_6E7A_B32A_41D3_AF32D9B846C2); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -142.99,
   "hfov": 19.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F949AA_6EDD_752E_41DB_97C8445B7C85",
   "pitch": -9.26,
   "yaw": -142.99,
   "hfov": 19.08,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D681834_6DBA_B33A_41CE_AE61765D312E",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_622F1BAB_694F_DCD3_41D3_430D033784EA, this.camera_5C62DCBE_6E7A_B326_419A_45350C3BCF2C); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i c\u1ed5ng sau"
  }
 ]
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED14986_6EF5_55E6_41C5_ABF49BF0E172_pressed.png",
 "paddingLeft": 0,
 "width": 32,
 "rollOverIconURL": "skin/IconButton_4ED14986_6EF5_55E6_41C5_ABF49BF0E172_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED14986_6EF5_55E6_41C5_ABF49BF0E172",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED14986_6EF5_55E6_41C5_ABF49BF0E172.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46352"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED20986_6EF5_55E6_41C5_3F572B7786C0_pressed.png",
 "paddingLeft": 0,
 "width": 32,
 "rollOverIconURL": "skin/IconButton_4ED20986_6EF5_55E6_41C5_3F572B7786C0_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED20986_6EF5_55E6_41C5_3F572B7786C0",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED20986_6EF5_55E6_41C5_3F572B7786C0.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46341"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED23986_6EF5_55E6_41BC_2C6CE5F4DA24_pressed.png",
 "paddingLeft": 0,
 "width": 40,
 "rollOverIconURL": "skin/IconButton_4ED23986_6EF5_55E6_41BC_2C6CE5F4DA24_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED23986_6EF5_55E6_41BC_2C6CE5F4DA24",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED23986_6EF5_55E6_41BC_2C6CE5F4DA24.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46342"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED2D986_6EF5_55E6_41D8_8FAAFC95DBEA_pressed.png",
 "paddingLeft": 0,
 "width": 32,
 "rollOverIconURL": "skin/IconButton_4ED2D986_6EF5_55E6_41D8_8FAAFC95DBEA_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED2D986_6EF5_55E6_41D8_8FAAFC95DBEA",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED2D986_6EF5_55E6_41D8_8FAAFC95DBEA.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46344"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED2E986_6EF5_55E6_41CD_B474921C6605_pressed.png",
 "paddingLeft": 0,
 "width": 40,
 "rollOverIconURL": "skin/IconButton_4ED2E986_6EF5_55E6_41CD_B474921C6605_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED2E986_6EF5_55E6_41CD_B474921C6605",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED2E986_6EF5_55E6_41CD_B474921C6605.png",
 "mode": "toggle",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46347"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED28986_6EF5_55E6_41BB_2CEB82642490_pressed.png",
 "paddingLeft": 0,
 "width": 32,
 "rollOverIconURL": "skin/IconButton_4ED28986_6EF5_55E6_41BB_2CEB82642490_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED28986_6EF5_55E6_41BB_2CEB82642490",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED28986_6EF5_55E6_41BB_2CEB82642490.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46349"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED22986_6EF5_55E6_41AC_83475277A052_pressed.png",
 "paddingLeft": 0,
 "width": 40,
 "rollOverIconURL": "skin/IconButton_4ED22986_6EF5_55E6_41AC_83475277A052_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED22986_6EF5_55E6_41AC_83475277A052",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED22986_6EF5_55E6_41AC_83475277A052.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46343"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED2A986_6EF5_55E6_41CF_76B165E16D65_pressed.png",
 "paddingLeft": 0,
 "width": 40,
 "rollOverIconURL": "skin/IconButton_4ED2A986_6EF5_55E6_41CF_76B165E16D65_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED2A986_6EF5_55E6_41CF_76B165E16D65",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED2A986_6EF5_55E6_41CF_76B165E16D65.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46350"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED2F986_6EF5_55E6_41B0_D3413F11C07C_pressed.png",
 "paddingLeft": 0,
 "width": 32,
 "rollOverIconURL": "skin/IconButton_4ED2F986_6EF5_55E6_41B0_D3413F11C07C_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED2F986_6EF5_55E6_41B0_D3413F11C07C",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED2F986_6EF5_55E6_41B0_D3413F11C07C.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46346"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_4ED29986_6EF5_55E6_41DB_46E044D78000_pressed.png",
 "paddingLeft": 0,
 "width": 32,
 "rollOverIconURL": "skin/IconButton_4ED29986_6EF5_55E6_41DB_46E044D78000_rollover.png",
 "propagateClick": false,
 "id": "IconButton_4ED29986_6EF5_55E6_41DB_46E044D78000",
 "minHeight": 0,
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_4ED29986_6EF5_55E6_41DB_46E044D78000.png",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "data": {
  "name": "Button46348"
 },
 "cursor": "hand",
 "class": "IconButton"
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.73,
   "hfov": 15.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C3E9D8_6EDD_756A_41A4_AECA57055BEC",
   "pitch": -11.17,
   "yaw": 6.73,
   "hfov": 15.35,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_736645DB_6ED5_BD6E_41CE_8F4951A120CD",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63D3C1CC_6940_2C55_4182_95F889CD362C, this.camera_428A12C9_6E7A_D76A_41C5_77479F51E912); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "V\u00e0o h\u1ed9i tr\u01b0\u1eddng"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 94.8,
   "hfov": 15.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C379D9_6EDD_756A_41C0_68EB8C75C66B",
   "pitch": -13.71,
   "yaw": 94.8,
   "hfov": 15.82,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73300607_6ED5_7EE5_41B1_F49659301CA4",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63311780_6940_34CD_41BC_74F1065452D5, this.camera_456772A7_6E7A_D726_41D1_C9E1C4E7E445); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng v\u00e0o s\u1ea3nh nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 168.83,
   "hfov": 17.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48C339DF_6EDD_7566_41D0_BC686E9E6340",
   "pitch": -5.63,
   "yaw": 168.83,
   "hfov": 17.29,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_72AD38BB_6ED7_532E_41D4_C03FF7AF99FD",
 "data": {
  "label": "Arrow 09b Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7, this.camera_429102B8_6E7A_D72A_41CF_B0475CD080C6); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra ng\u00e3 t\u01b0 ch\u00ednh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -96.71,
   "hfov": 9.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -96.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0_HS_0_0.png",
      "width": 250,
      "class": "ImageResourceLevel",
      "height": 193
     }
    ]
   },
   "pitch": -30.96,
   "hfov": 9.33
  }
 ],
 "id": "overlay_7F12F8FA_6940_3C3D_41BA_8BDFB7F9552E",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6, this.camera_5C7F4C8C_6E7A_B3EA_41B0_18B5AC00F36F); this.mainPlayList.set('selectedIndex', 25); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 d\u00e3y nh\u00e0 CL"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0_HS_1_1_0_map.gif",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -87.23,
   "hfov": 29.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -87.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CDBF66_6940_7455_41D7_808DACABAF3F_0_HS_1_0.png",
      "width": 687,
      "class": "ImageResourceLevel",
      "height": 885
     }
    ]
   },
   "pitch": -7.79,
   "roll": 0,
   "hfov": 29.17
  }
 ],
 "id": "overlay_463E16F6_6E55_DF27_41D1_51E7AA934B22",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 d\u00e3y nh\u00e0 CL"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -169.45,
   "hfov": 18.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CAD9CC_6EDD_756A_41C6_10FBFFD52E10",
   "pitch": -15.84,
   "yaw": -169.45,
   "hfov": 18.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_73E69A3E_69C3_DC34_41B9_61578537B2EE",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29, this.camera_45D58181_6E7A_D5DA_41DA_61B5BF6703BF); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf l\u1ea1i s\u00e2n nh\u00e0 B2"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 9.54,
   "hfov": 13.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CA69CC_6EDD_756A_41B4_43E494854C22",
   "pitch": -8.08,
   "yaw": 9.54,
   "hfov": 13.26,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_756A9621_69C7_D7CF_41CC_7AA6327DDD15",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63CA9135_6940_2C37_41C7_6475EB153877, this.camera_45CE8191_6E7A_D5FA_41D9_195D29C2453D); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra ph\u00eda tr\u01b0\u1edbc nh\u00e0 \u0111i\u1ec1u h\u00e0nh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 161.36,
   "hfov": 24.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F4A9C8_6EDD_756A_41D8_54660062A48F",
   "pitch": -41.06,
   "yaw": 161.36,
   "hfov": 24.95,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7BD9B79B_6940_D4F3_41C4_660216FB5281",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD, this.camera_446000F5_6E7A_D33A_41D5_A91E125D1472); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng v\u1ec1 nh\u00e0 \u0111i\u1ec1u h\u00e0nh."
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 61.58,
   "hfov": 28.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F459C9_6EDD_756A_41D0_503DCFAAC63D",
   "pitch": -25.09,
   "yaw": 61.58,
   "hfov": 28.83,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D436778_6940_743C_41B7_299C12CC1423",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C, this.camera_459AF106_6E7A_D2E6_41B1_8B9B63EDAD40); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 nh\u00e0 th\u1ec3 thao."
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -30.85,
   "hfov": 9.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FFC9AD_6EDD_752A_41C5_D3008692F05E",
   "pitch": -2.19,
   "yaw": -30.85,
   "hfov": 9.83,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_780824C6_6940_7455_41D5_EA65C45BD467",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6334771F_6940_55F3_418F_150F3C52AE0F, this.camera_5D562DEE_6E7A_CD26_41DA_DE0E75A7B611); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "V\u00e0o nh\u00e0 thi \u0111\u1ea5u"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 79.82,
   "hfov": 13.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FF79AE_6EDD_7526_41C9_A94CBB723593",
   "pitch": -13.54,
   "yaw": 79.82,
   "hfov": 13.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_79CF3B70_6941_DC4D_41C2_70884297E63B",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63317D24_6940_55D5_41B7_96602315E3E0, this.camera_5D441E00_6E7A_CEDA_41D2_FDAF74ABDB2D); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tr\u1edf v\u1ec1 b\u00ean trong c\u1ed5ng"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -168.27,
   "hfov": 10.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FF29AF_6EDD_7526_41D4_E321B52C2E00",
   "pitch": -3.82,
   "yaw": -168.27,
   "hfov": 10.98,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7AC490EE_6940_2C54_41D3_131BAB831FDB",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC, this.camera_5D264DDD_6E7A_CD6A_41CC_13DC91ECC8C4); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng t\u1edbi ph\u00f2ng t\u1ef1 h\u1ecdc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -82.88,
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FED9AF_6EDD_7526_419B_722D509339E9",
   "pitch": -2.86,
   "yaw": -82.88,
   "hfov": 9.64,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7BED00AF_6941_ECD3_41D4_4361FF949E8F",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C, this.camera_5D75FE11_6E7A_CEFA_41C5_0BFD45A7D54E); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "L\u1ed1i \u0111i ra nh\u00e0 \u0111i\u1ec1u h\u00e0nh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "yaw": 158.81,
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 158.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_1_HS_0_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 421
     }
    ]
   },
   "pitch": -29.51,
   "hfov": 11.62
  }
 ],
 "id": "overlay_7763B53C_6DB6_DD2A_41D6_DC24410EFE4D",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63311780_6940_34CD_41BC_74F1065452D5, this.camera_45961117_6E7A_D2E6_41D6_2E01BE1C2C88); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0110i xu\u1ed1ng s\u1ea3nh nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "yaw": -159.52,
   "hfov": 11.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -159.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_1_HS_1_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 421
     }
    ]
   },
   "pitch": -30.85,
   "hfov": 11.47
  }
 ],
 "id": "overlay_77302D94_6DB7_4DFA_41B7_F3A7729425C4",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63311780_6940_34CD_41BC_74F1065452D5, this.camera_45816129_6E7A_D52A_41D4_537C49FF734C); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng xu\u1ed1ng s\u1ea3nh nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0_HS_2_1_0_map.gif",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 159.75,
   "hfov": 22.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": 159.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0_HS_2_0.png",
      "width": 520,
      "class": "ImageResourceLevel",
      "height": 937
     }
    ]
   },
   "pitch": -7.36,
   "roll": 0,
   "hfov": 22.14
  }
 ],
 "id": "overlay_49F04036_6E4A_F326_41BD_6E7B268BE4CE",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63311780_6940_34CD_41BC_74F1065452D5, this.camera_45BA613C_6E7A_D52A_41C2_C3E5DE2CECBD); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0110i xu\u1ed1ng s\u1ea3nh nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0_HS_3_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -159.55,
   "hfov": 20.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": true,
 "items": [
  {
   "yaw": -159.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9_0_HS_3_0.png",
      "width": 470,
      "class": "ImageResourceLevel",
      "height": 970
     }
    ]
   },
   "pitch": -9.2,
   "roll": 0,
   "hfov": 20.06
  }
 ],
 "id": "overlay_44A9D3CE_6E4B_7567_4199_EF585655E5EA",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63311780_6940_34CD_41BC_74F1065452D5, this.camera_45B4114E_6E7A_D566_41D6_EFDF7B939664); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0110i xu\u1ed1ng s\u1ea3nh nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 14.07,
   "hfov": 14.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FA99A4_6EDD_75DA_41D6_C1C7C8305D27",
   "pitch": -17.59,
   "yaw": 14.07,
   "hfov": 14.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_64A8421A_6940_2FFD_41D4_92A6EB47BBD9",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63317D24_6940_55D5_41B7_96602315E3E0, this.camera_44EDFFC1_6E7A_CD5A_41CE_7B9D7010DAAD); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "V\u00e0o c\u1ed5ng"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 142.66,
   "hfov": 14.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FA19A8_6EDD_752A_41C7_DBDA412B26ED",
   "pitch": -7.22,
   "yaw": 142.66,
   "hfov": 14.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7D237402_6DBF_52DE_41D4_A8DB265CF5DD",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A, this.camera_44E88FB0_6E7A_CD3A_41D9_282E34895A8F); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra c\u1ed5ng tr\u01b0\u1edbc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_1_HS_0_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -102.81,
   "hfov": 17.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F0B9BD_6EDD_752A_41C2_88FE99DA4AB5",
   "pitch": -15.92,
   "yaw": -102.81,
   "hfov": 17.31,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7A3A73E2_6DDA_B55F_41C5_689B246F133F",
 "data": {
  "label": "Arrow 09b Right"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E43BB_6940_2C33_41BF_6822A0599FC3, this.camera_452C022D_6E7A_D72A_41D8_623C086900D9); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n 2 nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -91.99,
   "hfov": 17.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F049BD_6EDD_7525_41CD_86966EBA4D9F",
   "pitch": -6.66,
   "yaw": -91.99,
   "hfov": 17.36,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_751A4F9C_6DD6_CDEA_41BA_8EEC8CC41C98",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u1ea3nh nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -165.57,
   "hfov": 16.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FCC9B9_6EDD_752A_41A8_29564D6B8713",
   "pitch": -10.97,
   "yaw": -165.57,
   "hfov": 16.35,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7E5184D0_6DFB_537A_4170_0EA311182386",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A, this.camera_442A207C_6E7A_D32A_41D6_D5BDBC529167); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng tr\u1edf v\u1ec1 ch\u1ed5 l\u1ea5y n\u01b0\u1edbc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -87.23,
   "hfov": 14.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FC69B9_6EDD_752A_41C2_5E42452130BB",
   "pitch": -10.64,
   "yaw": -87.23,
   "hfov": 14.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7B6205DD_6DFB_5D6A_41C6_3F736F77F5B8",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7, this.camera_445F809F_6E7A_D3E6_418B_323E29C2D439); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i ng\u00e3 t\u01b0 ch\u00ednh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10.41,
   "hfov": 18.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FC19BA_6EDD_752E_41C8_667A5F4A5612",
   "pitch": -13.24,
   "yaw": -10.41,
   "hfov": 18.15,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7932033C_6DF5_D52B_41B5_6870ACCE1EFE",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i s\u00e2n nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 95.02,
   "hfov": 16.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F3D9BA_6EDD_752E_41A8_C6946972A630",
   "pitch": -13.5,
   "yaw": 95.02,
   "hfov": 16.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_790CAA5D_6DF5_5765_41A6_3EFFB87DE41E",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63D9EC36_6940_5435_41C3_C57AAC06094A, this.camera_4422908E_6E7A_D3E6_41DA_45B3268F3E83); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 122.89,
   "hfov": 14.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F779BE_6EDD_7526_41B0_172DD08CEDCD",
   "pitch": -6.53,
   "yaw": 122.89,
   "hfov": 14.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_749F5560_6DCF_FD5B_41D8_9EB1DEEAE310",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n 2 nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -176.62,
   "hfov": 16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F6E9C4_6EDD_755A_41CB_C4E444C553C6",
   "pitch": -6.14,
   "yaw": -176.62,
   "hfov": 16,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7528BD13_6DCA_D2FE_41D8_1A40AC0D750A",
 "data": {
  "label": "Arrow 09b Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E4624_6941_D7D5_41D8_A78547B8DBC9, this.camera_5DFCFD75_6E7A_CD3A_41AA_DE6A525F669B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng l\u00ean l\u1ea7u tr\u00ean"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 15.55,
   "hfov": 17.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F689C5_6EDD_755A_41BA_8C1D4CCCEB62",
   "pitch": -29.16,
   "yaw": 15.55,
   "hfov": 17.49,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7637AD4B_6DB6_CD6E_41D1_AF45771C013C",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng v\u00e0o h\u1ed9i tr\u01b0\u1eddng nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_3_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -145.64,
   "hfov": 18.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F629C6_6EDD_7566_41C0_44E6CCDBF549",
   "pitch": -9.61,
   "yaw": -145.64,
   "hfov": 18.26,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_74D21F47_6E4F_CD65_41D9_06C99BEF3585",
 "data": {
  "label": "Arrow 09b Right"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63321EA1_6940_34CF_41B3_FBF388F01F38, this.camera_5DED0D87_6E7A_CDE6_41BE_C240B4FD6E27); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra s\u00e2n tr\u01b0\u1edbc h\u1ed9i tr\u01b0\u1eddng nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.83,
   "hfov": 12.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CEF9D5_6EDD_757A_41C8_07B7BABEFA8B",
   "pitch": 0.62,
   "yaw": 6.83,
   "hfov": 12.77,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7374B304_69C3_EDD5_41B9_4DB433868B0C",
 "data": {
  "label": "Arrow 09a Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632F5619_694F_D7FF_418D_73FD857AA06A, this.camera_5A834E4A_6E7A_CF6E_41D6_EC9358CB1B2F); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra c\u1ed5ng tr\u01b0\u1edbc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 136.36,
   "hfov": 14.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CE99D5_6EDD_757A_41A6_EFFF07EDDD1A",
   "pitch": -1.65,
   "yaw": 136.36,
   "hfov": 14.23,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4901B0CF_69C0_2C53_41CC_14DBF4BAF432",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E, this.camera_5AB16E5B_6E7A_CF6E_41C8_254D65CF7D22); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i s\u00e2n nh\u00e0 B1"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -166.3,
   "hfov": 13.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48CE29D6_6EDD_7566_41D1_4CB63892EA6F",
   "pitch": -9.58,
   "yaw": -166.3,
   "hfov": 13.34,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_779FCEF6_69C0_3434_41B5_E020292AEA45",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63CAC346_6943_EC54_41CB_42817D364063, this.camera_5A93BE37_6E7A_CF26_41C5_E814D2A49EA6); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i s\u00e2n nh\u00e0 \u0111i\u1ec1u h\u00e0nh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.69,
   "hfov": 10.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E73B08_6E4B_B6EA_41C2_89FB7E3417A9",
   "pitch": -6.27,
   "yaw": -6.69,
   "hfov": 10.91,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_485CD00D_6EB5_52EA_41C3_CD30A69E2CB8",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng \u0111i s\u00e2n 1 nh\u00e0 C"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -71.46,
   "hfov": 15.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E89B09_6E4B_B6EA_41D8_D99416B7B697",
   "pitch": -6.78,
   "yaw": -71.46,
   "hfov": 15.53,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_498B0D71_6EB7_4D3A_41AF_FC0AE4378FC4",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -80.01,
   "hfov": 14.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FD89B0_6EDD_753A_4198_8176690C8DD3",
   "pitch": -7.8,
   "yaw": -80.01,
   "hfov": 14.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7F596D11_6DCB_F2FA_41B6_ED836078B346",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C45335_6940_2C37_4128_ED5526ADCCFC, this.camera_5D9C4CCF_6E7A_B366_41C1_140786ACA1C9); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng tr\u1edf v\u00e8 ph\u00f2ng t\u1ef1 h\u1ecdc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_1_HS_1_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 85.15,
   "hfov": 17.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FD49B0_6EDD_753A_41C8_89652A42A4D5",
   "pitch": -2.42,
   "yaw": 85.15,
   "hfov": 17.98,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7F1C6632_6DCD_FF3E_41D9_F07A3381BA10",
 "data": {
  "label": "Arrow 09b Left"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A, this.camera_5D895CE0_6E7A_B35A_41B5_843363250391); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra ch\u1ed7 l\u1ea5y n\u01b0\u1edbc"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.94,
   "hfov": 15.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48FE69B1_6EDD_753A_4180_4EF42D2634A5",
   "pitch": -7.88,
   "yaw": 2.94,
   "hfov": 15.43,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7C19D38B_6DCE_D5ED_41BF_878FFEE3A899",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7, this.camera_5D80BCF2_6E7A_B33E_4198_C6AE7911A60C); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra ng\u00e3 t\u01b0 ch\u00ednh"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.49,
   "hfov": 17.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D19ACE_6E4B_B766_41D6_1F86005FB02D",
   "pitch": -16.87,
   "yaw": -6.49,
   "hfov": 17.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4D0DFBF9_6ED6_B52D_41D5_3AEEDA390336",
 "data": {
  "label": "Arrow 08a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632FC730_6940_55CD_4192_F95E71879870, this.camera_5D656E23_6E7A_CEDE_41C1_5107A8562275); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ra tr\u01b0\u1edbc th\u01b0 vi\u1ec7n"
  }
 ]
},
{
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -170.08,
   "hfov": 23.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_48F5A9C7_6EDD_7566_41D3_D643E85DFF16",
   "pitch": -21.55,
   "yaw": -170.08,
   "hfov": 23.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6427ED53_6996_8F46_41BC_43C9204FB561",
 "data": {
  "label": "Arrow 09a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89, this.camera_5DBC1D03_6E7A_B2DE_41CE_075F8618549B); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "H\u01b0\u1edbng ra ng\u00e3 t\u01b0 nh\u00e0 th\u1ec3 thao"
  }
 ]
},
{
 "borderRadius": 0,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "children": [
  "this.IconButton_4ED2F986_6EF5_55E6_41B0_D3413F11C07C",
  "this.IconButton_4ED2E986_6EF5_55E6_41CD_B474921C6605",
  "this.IconButton_4ED29986_6EF5_55E6_41DB_46E044D78000"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": 40,
 "propagateClick": false,
 "overflow": "hidden",
 "scrollBarMargin": 2,
 "id": "Container_4ED2C986_6EF5_55E6_41C6_E9820EC48F06",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 20,
 "borderSize": 0,
 "gap": 4,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Container46345"
 },
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CC59E2_6EDD_755E_41D9_5B6DF321C23C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48C3C9E3_6EDD_755E_41A3_C1DE8FDCE6AB",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_1_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48C389E4_6EDD_755A_41D6_E3F8D5AEC5C8",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_2_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48C339E5_6EDD_755A_41D8_06E52CE45111",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_3_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C2F9E6_6EDD_7526_418A_3AA294F592D6",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_4_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C269E7_6EDD_7526_41D5_4AC85FD5CAC4",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C0787F_6940_5C33_41D3_48720FAC3DA7_1_HS_5_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FE99AF_6EDD_7526_41D7_C939445B4031",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FDE9B0_6EDD_753A_41C4_A9E8FBBFCB37",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C45335_6940_2C37_4128_ED5526ADCCFC_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48F909AB_6EDD_752E_41C7_55664A32567F",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_0_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F8A9AC_6EDD_752A_41DA_CF253E72FC4F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F869AC_6EDD_752A_41B5_C085236E6501",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63317D24_6940_55D5_41B7_96602315E3E0_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F409CB_6EDD_756E_41CD_41073F57712B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CBA9CB_6EDD_756E_41C7_BA4422385BB1",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CB49CB_6EDD_756E_41CC_A3376A364F3B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63DF1EEB_6940_D453_41D2_2EE7FAEF4C29_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_40D87ADE_6E4B_B766_41D9_F24A48EF11F9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_40D9EADF_6E4B_B766_41A5_44048E22AF7F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C4B0B0_6940_2CCC_41D5_F7BAE392E62C_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48F579C7_6EDD_7566_41A7_855087CAD04B",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_1_HS_0_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48F509C8_6EDD_756A_41D2_9CD6B1A1CD0C",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_632FB8BE_6940_3C35_41D1_2B4DEB4FD95C_1_HS_1_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_40DC4AEA_6E4B_B72E_41CF_98EBEC3BD343",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0_HS_0_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_40DC1AEA_6E4B_B72E_41D4_B816EC98FB45",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0_HS_1_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_40DDEAEB_6E4B_B72E_41CA_18BE0B23EACE",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632FC730_6940_55CD_4192_F95E71879870_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F179BC_6EDD_752A_41C5_683EED76A96A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F0E9BD_6EDD_752A_41D1_32D733692B8B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E43BB_6940_2C33_41BF_6822A0599FC3_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C819D4_6EDD_757A_41C7_13BD932301F2",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CFA9D4_6EDD_757A_41A4_EBF5F9F6B5B5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CF49D5_6EDD_757A_41CA_17434B4AF7E3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E8061_6940_2C4C_41C6_4C01D1C97454_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FE19B2_6EDD_753E_41C8_5BCEF5E62774",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FDB9B7_6EDD_7526_41C4_F17CBA3DB3DB",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FD29B8_6EDD_752A_41D9_349C0947958A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C3A885_6940_DCD6_41D2_66FDC5A6B73A_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F2D9BB_6EDD_752E_41B0_BB3FCC74E200",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F279BC_6EDD_752A_41D5_A700143A4E6D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_40D88ADD_6E4B_B76A_4193_1C8D6C6AAE0D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E2CFD_6940_7437_41CA_F88E815B2FE7_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F579C9_6EDD_756A_41B9_6F402F8E2F34",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F4F9CA_6EDD_756E_41CA_4A3AA47C4855",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F489CA_6EDD_756E_419F_8891D74BC067",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E6BFC_6940_FC35_41D4_DC867FC996CD_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48CA19CD_6EDD_756A_41CA_0544EB6D940F",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_0_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C9A9D2_6EDD_757E_41D6_6D6458EA216F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C929D3_6EDD_757E_41C6_146E3D63584F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C8F9D3_6EDD_757E_41DA_9441D6C4E40C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632EBFAE_6940_54D4_41C3_E9FBE5CA63F6_1_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CC69D7_6EDD_7566_41DB_94AB995194DB",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63D3C1CC_6940_2C55_4182_95F889CD362C_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F379BA_6EDD_752E_41CD_FDE3DE131106",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F309BB_6EDD_752E_41D7_6C55CF2D5896",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63D9EC36_6940_5435_41C3_C57AAC06094A_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CDA9D6_6EDD_7566_41DB_1B546CADEBA5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CD29D6_6EDD_7566_41C6_01977391FC87",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CCF9D7_6EDD_7566_41A8_91988AE5FF19",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63CAC346_6943_EC54_41CB_42817D364063_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F9C9A9_6EDD_752A_41CF_F399F3AD9D79",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F949AA_6EDD_752E_41DB_97C8445B7C85",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632F5619_694F_D7FF_418D_73FD857AA06A_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C3E9D8_6EDD_756A_41A4_AECA57055BEC",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C379D9_6EDD_756A_41C0_68EB8C75C66B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48C339DF_6EDD_7566_41D0_BC686E9E6340",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63321EA1_6940_34CF_41B3_FBF388F01F38_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CAD9CC_6EDD_756A_41C6_10FBFFD52E10",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CA69CC_6EDD_756A_41B4_43E494854C22",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C95D0F_6940_35D3_418C_E2C47D01F30E_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F4A9C8_6EDD_756A_41D8_54660062A48F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F459C9_6EDD_756A_41D0_503DCFAAC63D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63DB2B6F_6940_DC53_4168_CF83B741BD94_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FFC9AD_6EDD_752A_41C5_D3008692F05E",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48FF79AE_6EDD_7526_41C9_A94CBB723593",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_1_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FF29AF_6EDD_7526_41D4_E321B52C2E00",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FED9AF_6EDD_7526_419B_722D509339E9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E7E03_6940_77D3_41C2_FC30E08F0D89_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_48FA99A4_6EDD_75DA_41D6_C1C7C8305D27",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_1_HS_0_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FA19A8_6EDD_752A_41C7_DBDA412B26ED",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_622F1BAB_694F_DCD3_41D3_430D033784EA_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F0B9BD_6EDD_752A_41C2_88FE99DA4AB5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F049BD_6EDD_7525_41CD_86966EBA4D9F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63DB364C_6941_F455_41B8_F3FF7164BFA5_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FCC9B9_6EDD_752A_41A8_29564D6B8713",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FC69B9_6EDD_752A_41C2_5E42452130BB",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FC19BA_6EDD_752E_41C8_667A5F4A5612",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F3D9BA_6EDD_752E_41A8_C6946972A630",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632EF8B8_6940_3C3D_41C8_85EA56385428_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F779BE_6EDD_7526_41B0_172DD08CEDCD",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F6E9C4_6EDD_755A_41CB_C4E444C553C6",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F689C5_6EDD_755A_41BA_8C1D4CCCEB62",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F629C6_6EDD_7566_41C0_44E6CCDBF549",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63311780_6940_34CD_41BC_74F1065452D5_1_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CEF9D5_6EDD_757A_41C8_07B7BABEFA8B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CE99D5_6EDD_757A_41A6_EFFF07EDDD1A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48CE29D6_6EDD_7566_41D1_4CB63892EA6F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63CA9135_6940_2C37_41C7_6475EB153877_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_40E73B08_6E4B_B6EA_41C2_89FB7E3417A9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_40E89B09_6E4B_B6EA_41D8_D99416B7B697",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_63C0FCEC_6940_5454_41D9_3D5A8EA2BC5E_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FD89B0_6EDD_753A_4198_8176690C8DD3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FD49B0_6EDD_753A_41C8_89652A42A4D5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48FE69B1_6EDD_753A_4180_4EF42D2634A5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_632E359D_6940_F4F7_41B3_1A811FC1D4C8_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 5,
 "class": "AnimatedImageResource",
 "rowCount": 7,
 "id": "AnimatedImageResource_40D19ACE_6E4B_B766_41D6_1F86005FB02D",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_63C99A4D_6940_3C57_41CE_3B7C0579CE4E_0_HS_0_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 560
  }
 ]
},
{
 "frameDuration": 33,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_48F5A9C7_6EDD_7566_41D3_D643E85DFF16",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_6334771F_6940_55F3_418F_150F3C52AE0F_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
}],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 20,
 "vrPolyfillScale": 1,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "height": "100%",
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0,
 "contentOpaque": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "shadow": false,
 "verticalAlign": "top",
 "class": "Player",
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } }
 },
 "borderRadius": 0,
 "data": {
  "name": "Player565"
 },
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
