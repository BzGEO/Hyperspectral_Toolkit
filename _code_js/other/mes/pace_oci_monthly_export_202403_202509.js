
var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

var ln = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:2})};

var aoi = ee.Geometry.Rectangle(-77, 7, -93, 22); // Mesoamerica


var pace_oci_mt_mes_img = a.pace_oci_mt_mes_img;
print(pace_oci_mt_mes_img);


Map.centerObject(aoi);
Map.setOptions('SATELLITE');
Map.addLayer(ln(aoi), {palette: ['red']},'AOI_Mesoamerica', 1);


Export.image.toDrive({'image': pace_oci_mt_mes_img.toInt16(), 'region': aoi, 'scale': 2000,
        'description': 'export_drv_pace_oci_mes__202403_202509', 'folder': 'x_tmp_gee_outputs',
        'fileNamePrefix': 'mes_pace_oci_sr_202403_202509_gcs', 'crs': 'EPSG:4326', 'maxPixels': 1e13});

