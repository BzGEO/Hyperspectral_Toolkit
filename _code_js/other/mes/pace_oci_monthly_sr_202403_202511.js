/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var img01 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202403_02km"),
    img02 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202404_02km"),
    img03 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202405_02km"),
    img04 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202406_02km"),
    img05 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202407_02km"),
    img06 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202408_02km"),
    img07 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202409_02km"),
    img08 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202410_02km"),
    img09 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202411_02km"),
    img10 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202412_02km"),
    img11 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202501_02km"),
    img12 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202502_02km"),
    img13 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202503_02km"),
    img14 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202504_02km"),
    img15 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202505_02km"),
    img16 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202506_02km"),
    img17 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202507_02km"),
    img18 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202508_02km"),
    img19 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202509_02km"),
    img20 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202510_02km"),
    img21 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202511_02km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 20.01.2026

// var x = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');


var viz1_scaled = {bands: ["b120","b111","b60"], min: [2700,2500,450], max: [3800,3700,1250]};
var viz2_scaled = {bands: ["b120","b111","b60"], min: [-1100, -1350, -700], max:[3800, 5100, 2050]};
var viz3_scaled = {bands: ["b120","b111","b60"], min: [-730, -834, -684], max:[4050, 5376, 2140]};

var roi = ee.Geometry.Rectangle(-77, 7, -93, 22); // Mesoamerica

var img = ee.Image.cat([
  img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,      // March - Dec. 2024
  img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21 // Jan - Nov. 2025
  ]);

img = img.updateMask(img.gte(0));
img = img.multiply(10000).toInt16().reproject('EPSG:4326', null, 2000);

//print(img);

Map.centerObject(img, 6);
Map.addLayer(img, viz1_scaled, "Test_1", 0);
Map.addLayer(img, viz2_scaled, "Test_2", 0);
Map.addLayer(img, viz3_scaled, "Test_3", 1);

Export.image.toAsset({image:img,description:'export_ee_pace_oci_mes_202403_202511',
assetId:'users/servirbz/x_tmp/hyperspectral/mes_pace_oci_sr_202403_202511',scale:2000,
region: roi, crs: 'EPSG:4326'});

Export.image.toDrive({'image': img.toInt16(), 'region': roi, 'scale': 2000,
        'description': 'export_drv_pace_oci_mes_202403_202511', 'folder': 'x_tmp_gee_outputs',
        'fileNamePrefix': 'mes_pace_oci_sr_202403_202511_gcs', 'crs': 'EPSG:4326', 'maxPixels': 1e13});