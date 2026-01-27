// Last updated: 19.11.2025

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ln = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:2})};
var roi = ee.Geometry.Rectangle(-77, 7, -93, 22); // Mesoamerica

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var img = a.pace_oci_mt_mes_img;
img = img.updateMask(img.gte(0));
print(img);

var coll = a.pace_oci_mt_mes;
print(coll);

var landvi = coll.map(b.car_cire_mari)
                 .map(function(img){return img.toUint16()
                 .updateMask(img.gt(0))
                 .set('system:time_start',img.get('system:time_start'))});
                 
print(landvi);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var img_00 = ee.Image(landvi.toList(landvi.size()).get(0));
var img_01 = ee.Image(landvi.toList(landvi.size()).get(1));
var img_02 = ee.Image(landvi.toList(landvi.size()).get(2));
var img_03 = ee.Image(landvi.toList(landvi.size()).get(3));
var img_04 = ee.Image(landvi.toList(landvi.size()).get(4));
var img_05 = ee.Image(landvi.toList(landvi.size()).get(5));
var img_06 = ee.Image(landvi.toList(landvi.size()).get(6));
var img_07 = ee.Image(landvi.toList(landvi.size()).get(7));
var img_08 = ee.Image(landvi.toList(landvi.size()).get(8));
var img_09 = ee.Image(landvi.toList(landvi.size()).get(9));
var img_10 = ee.Image(landvi.toList(landvi.size()).get(10));
var img_11 = ee.Image(landvi.toList(landvi.size()).get(11));
var img_12 = ee.Image(landvi.toList(landvi.size()).get(12));
var img_13 = ee.Image(landvi.toList(landvi.size()).get(13));
var img_14 = ee.Image(landvi.toList(landvi.size()).get(14));
var img_15 = ee.Image(landvi.toList(landvi.size()).get(15));
var img_16 = ee.Image(landvi.toList(landvi.size()).get(16));
var img_17 = ee.Image(landvi.toList(landvi.size()).get(17));
var img_18 = ee.Image(landvi.toList(landvi.size()).get(18));

////

var landvi_img = ee.Image.cat([
img_00,img_01,img_02,img_03,img_04,img_05,img_06,img_07,img_08,img_09,
img_10,img_11,img_12,img_13,img_14,img_15,img_16,img_17,img_18
]);
print(landvi_img);

//landvi_img = landvi_img.updateMask(landvi_img.gt(0));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.centerObject(roi, 6);
Map.setOptions('SATELLITE');
Map.addLayer(landvi_img,{min: 2800, max: 21000},'LandVI', 1);
Map.addLayer(ln(roi), {palette: ['red']},'ROI_Mesoamerica', 0);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Export.image.toDrive({'image': landvi_img.toUint16(), 'region': roi, 'scale': 2000,
        'description': 'export_drv_pace_oci_landvi_mes__202403_202509', 'folder': 'x_tmp_gee_outputs',
        'fileNamePrefix': 'mes_pace_oci_landvi__202403_202509_gcs2', 'crs': 'EPSG:4326', 'maxPixels': 1e13});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////