/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loads reference PACE OCI data (surface reflectance data, land vegetation indices)
// Questions? Contact Emil A. Cherrington, Ph.D. (eac0021@uah.edu)
// This is a part of the following GEE code repository: https://bit.ly/gee_repo_hyperspectral.
// Last updated: 10.11.2025

// var x = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js'); // Load various relevant functions

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var t = 'system:time_start'; // simplifies time variable for functions below

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SURFACE REFLECTANCE DATA

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: CONTINENTAL USA (CONUS) | SPATIAL RES: 1.2 KM | TEMPORAL RES: DAILY

var pace_oci_conus_west_20240622 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_01km/conus_west_pace_oci_sr_v3_20240622");
var pace_oci_conus_west_20240711 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_01km/conus_west_pace_oci_sr_v3_20240711");
var pace_oci_conus_west_20240828 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_01km/conus_west_pace_oci_sr_v3_20240828");
var pace_oci_conus_west_20250523 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_01km/conus_west_pace_oci_sr_v3_20250523");

exports.pace_oci_conus_west_20240622 = pace_oci_conus_west_20240622;
exports.pace_oci_conus_west_20240711 = pace_oci_conus_west_20240711;
exports.pace_oci_conus_west_20240828 = pace_oci_conus_west_20240828;
exports.pace_oci_conus_west_20250523 = pace_oci_conus_west_20250523;

/*
var pace_oci_1d_conus_west = ee.ImageCollection.fromImages([pace_oci_conus_west_20240622,pace_oci_conus_west_20240711,
                                                    pace_oci_conus_west_20240828, pace_oci_conus_west_20250523])
                                                    .map(function(img){return img.updateMask(img.gte(0)).set(t,img.get(t))});
*/

var pace_oci_1d_conus_west = ee.ImageCollection.fromImages([pace_oci_conus_west_20240622,pace_oci_conus_west_20250523])
                                                    .map(function(img){return img.updateMask(img.gte(0)).set(t,img.get(t))});

exports.pace_oci_1d_conus_west = pace_oci_1d_conus_west;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: CONTINENTAL USA (CONUS) | SPATIAL RES: 2 KM  | TEMPORAL RES: MONTHLY

var pace_oci_mt_conus_02km_202403 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202403_02km").set(t,ee.Date.fromYMD(2024,3,31).millis()),
    pace_oci_mt_conus_02km_202404 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202404_02km").set(t,ee.Date.fromYMD(2024,4,30).millis()),
    pace_oci_mt_conus_02km_202405 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202405_02km").set(t,ee.Date.fromYMD(2024,5,31).millis()),
    pace_oci_mt_conus_02km_202406 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202406_02km").set(t,ee.Date.fromYMD(2024,6,30).millis()),
    pace_oci_mt_conus_02km_202407 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202407_02km").set(t,ee.Date.fromYMD(2024,7,31).millis()),
    pace_oci_mt_conus_02km_202408 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202408_02km").set(t,ee.Date.fromYMD(2024,8,31).millis()),
    pace_oci_mt_conus_02km_202409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202409_02km").set(t,ee.Date.fromYMD(2024,9,30).millis()),
    pace_oci_mt_conus_02km_202410 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202410_02km").set(t,ee.Date.fromYMD(2024,10,31).millis()),
    pace_oci_mt_conus_02km_202411 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202411_02km").set(t,ee.Date.fromYMD(2024,11,30).millis()),
    pace_oci_mt_conus_02km_202412 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202412_02km").set(t,ee.Date.fromYMD(2024,12,31).millis()),
    pace_oci_mt_conus_02km_202501 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202501_02km").set(t,ee.Date.fromYMD(2025,1,31).millis()),
    pace_oci_mt_conus_02km_202502 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202502_02km").set(t,ee.Date.fromYMD(2025,2,28).millis()),
    pace_oci_mt_conus_02km_202503 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202503_02km").set(t,ee.Date.fromYMD(2025,3,31).millis()),
    pace_oci_mt_conus_02km_202504 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202504_02km").set(t,ee.Date.fromYMD(2025,4,30).millis()),
    pace_oci_mt_conus_02km_202505 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202505_02km").set(t,ee.Date.fromYMD(2025,5,31).millis()),
    pace_oci_mt_conus_02km_202506 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202506_02km").set(t,ee.Date.fromYMD(2025,6,30).millis()),
    pace_oci_mt_conus_02km_202507 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202507_02km").set(t,ee.Date.fromYMD(2025,7,31).millis()),
    pace_oci_mt_conus_02km_202508 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202508_02km").set(t,ee.Date.fromYMD(2025,8,31).millis()),
    pace_oci_mt_conus_02km_202509 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202509_02km").set(t,ee.Date.fromYMD(2025,9,30).millis());


exports.pace_oci_mt_conus_02km_202403 = pace_oci_mt_conus_02km_202403;
exports.pace_oci_mt_conus_02km_202404 = pace_oci_mt_conus_02km_202404;
exports.pace_oci_mt_conus_02km_202405 = pace_oci_mt_conus_02km_202405;
exports.pace_oci_mt_conus_02km_202406 = pace_oci_mt_conus_02km_202406;
exports.pace_oci_mt_conus_02km_202407 = pace_oci_mt_conus_02km_202407;
exports.pace_oci_mt_conus_02km_202408 = pace_oci_mt_conus_02km_202408;
exports.pace_oci_mt_conus_02km_202409 = pace_oci_mt_conus_02km_202409;
exports.pace_oci_mt_conus_02km_202410 = pace_oci_mt_conus_02km_202410;
exports.pace_oci_mt_conus_02km_202411 = pace_oci_mt_conus_02km_202411;
exports.pace_oci_mt_conus_02km_202412 = pace_oci_mt_conus_02km_202412;

exports.pace_oci_mt_conus_02km_202501 = pace_oci_mt_conus_02km_202501;
exports.pace_oci_mt_conus_02km_202502 = pace_oci_mt_conus_02km_202502;
exports.pace_oci_mt_conus_02km_202503 = pace_oci_mt_conus_02km_202503;
exports.pace_oci_mt_conus_02km_202504 = pace_oci_mt_conus_02km_202504;
exports.pace_oci_mt_conus_02km_202505 = pace_oci_mt_conus_02km_202505;
exports.pace_oci_mt_conus_02km_202506 = pace_oci_mt_conus_02km_202506;
exports.pace_oci_mt_conus_02km_202507 = pace_oci_mt_conus_02km_202507;
exports.pace_oci_mt_conus_02km_202508 = pace_oci_mt_conus_02km_202508;
exports.pace_oci_mt_conus_02km_202509 = pace_oci_mt_conus_02km_202509;

//

var pace_oci_mt_conus_02km = ee.ImageCollection.fromImages([pace_oci_mt_conus_02km_202403,pace_oci_mt_conus_02km_202404,pace_oci_mt_conus_02km_202405,pace_oci_mt_conus_02km_202406,pace_oci_mt_conus_02km_202407,
                                                    pace_oci_mt_conus_02km_202408,pace_oci_mt_conus_02km_202409,pace_oci_mt_conus_02km_202410,pace_oci_mt_conus_02km_202411,pace_oci_mt_conus_02km_202412,
                                                    pace_oci_mt_conus_02km_202501,pace_oci_mt_conus_02km_202502,pace_oci_mt_conus_02km_202503,pace_oci_mt_conus_02km_202504,pace_oci_mt_conus_02km_202505,
                                                    pace_oci_mt_conus_02km_202506,pace_oci_mt_conus_02km_202507,pace_oci_mt_conus_02km_202508,pace_oci_mt_conus_02km_202509])
                                                    .map(function(img){return img.updateMask(img.gte(0)).set(t,img.get(t))});

exports.pace_oci_mt_conus_02km = pace_oci_mt_conus_02km;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: CONTINENTAL USA (CONUS) | SPATIAL RES: 4 KM  | TEMPORAL RES: MONTHLY

var pace_oci_mt_conus_202403 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202403_4km").set(t,ee.Date.fromYMD(2024,3,31).millis()),
    pace_oci_mt_conus_202404 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202404_4km").set(t,ee.Date.fromYMD(2024,4,30).millis()),
    pace_oci_mt_conus_202405 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202405_4km").set(t,ee.Date.fromYMD(2024,5,31).millis()),
    pace_oci_mt_conus_202406 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202406_4km").set(t,ee.Date.fromYMD(2024,6,30).millis()),
    pace_oci_mt_conus_202407 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202407_4km").set(t,ee.Date.fromYMD(2024,7,31).millis()),
    pace_oci_mt_conus_202408 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202408_4km").set(t,ee.Date.fromYMD(2024,8,31).millis()),
    pace_oci_mt_conus_202409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202409_4km").set(t,ee.Date.fromYMD(2024,9,30).millis()),
    pace_oci_mt_conus_202410 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202410_4km").set(t,ee.Date.fromYMD(2024,10,31).millis()),
    pace_oci_mt_conus_202411 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202411_4km").set(t,ee.Date.fromYMD(2024,11,30).millis()),
    pace_oci_mt_conus_202412 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202412_4km").set(t,ee.Date.fromYMD(2024,12,31).millis()),
    pace_oci_mt_conus_202501 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202501_4km").set(t,ee.Date.fromYMD(2025,1,31).millis()),
    pace_oci_mt_conus_202502 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202502_4km").set(t,ee.Date.fromYMD(2025,2,28).millis()),
    pace_oci_mt_conus_202503 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202503_4km").set(t,ee.Date.fromYMD(2025,3,31).millis()),
    pace_oci_mt_conus_202504 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202504_4km").set(t,ee.Date.fromYMD(2025,4,30).millis()),
    pace_oci_mt_conus_202505 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_04km/conus_pace_oci_sr_202505x_4km").set(t,ee.Date.fromYMD(2025,5,31).millis());

exports.pace_oci_mt_conus_202403 = pace_oci_mt_conus_202403;
exports.pace_oci_mt_conus_202404 = pace_oci_mt_conus_202404;
exports.pace_oci_mt_conus_202405 = pace_oci_mt_conus_202405;
exports.pace_oci_mt_conus_202406 = pace_oci_mt_conus_202406;
exports.pace_oci_mt_conus_202407 = pace_oci_mt_conus_202407;
exports.pace_oci_mt_conus_202408 = pace_oci_mt_conus_202408;
exports.pace_oci_mt_conus_202409 = pace_oci_mt_conus_202409;
exports.pace_oci_mt_conus_202410 = pace_oci_mt_conus_202410;
exports.pace_oci_mt_conus_202411 = pace_oci_mt_conus_202411;
exports.pace_oci_mt_conus_202412 = pace_oci_mt_conus_202412;

exports.pace_oci_mt_conus_202501 = pace_oci_mt_conus_202501;
exports.pace_oci_mt_conus_202502 = pace_oci_mt_conus_202502;
exports.pace_oci_mt_conus_202503 = pace_oci_mt_conus_202503;
exports.pace_oci_mt_conus_202504 = pace_oci_mt_conus_202504;
exports.pace_oci_mt_conus_202505 = pace_oci_mt_conus_202505;

//

var pace_oci_mt_conus = ee.ImageCollection.fromImages([pace_oci_mt_conus_202403,pace_oci_mt_conus_202404,pace_oci_mt_conus_202405,pace_oci_mt_conus_202406,pace_oci_mt_conus_202407,
                                                    pace_oci_mt_conus_202408,pace_oci_mt_conus_202409,pace_oci_mt_conus_202410,pace_oci_mt_conus_202411,pace_oci_mt_conus_202412,
                                                    pace_oci_mt_conus_202501,pace_oci_mt_conus_202502,pace_oci_mt_conus_202503,pace_oci_mt_conus_202504,pace_oci_mt_conus_202505])
                                                    .map(function(img){return img.updateMask(img.gte(0)).set(t,img.get(t))});
exports.pace_oci_mt_conus = pace_oci_mt_conus;
exports.pace_oci_sr_mt_conus = pace_oci_mt_conus;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: MESOAMERICA | SPATIAL RES: 1 KM | TEMPORAL RES: DAILY

var pace_oci_mes_20240309 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20240309_1km"),
    pace_oci_mes_20240409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20240409_1km"),
    pace_oci_mes_20241119 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20241119_1km"),
    pace_oci_mes_20250315 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20250315_1km"),
    pace_oci_mes_20250316 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20250316_1km");

exports.pace_oci_mes_20240309 = pace_oci_mes_20240309;
exports.pace_oci_mes_20240409 = pace_oci_mes_20240409;
exports.pace_oci_mes_20241119 = pace_oci_mes_20241119;
exports.pace_oci_mes_20250315 = pace_oci_mes_20250315;
exports.pace_oci_mes_20250316 = pace_oci_mes_20250316;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: MESOAMERICA | SPATIAL RES: 2 KM | TEMPORAL RES: MONTHLY

var pace_oci_mes_202403_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202403_02km");
var pace_oci_mes_202404_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202404_02km");
var pace_oci_mes_202405_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202405_02km");
var pace_oci_mes_202406_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202406_02km");
var pace_oci_mes_202407_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202407_02km");
var pace_oci_mes_202408_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202408_02km");
var pace_oci_mes_202409_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202409_02km");
var pace_oci_mes_202410_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202410_02km");
var pace_oci_mes_202411_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202411_02km");
var pace_oci_mes_202412_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202412_02km");

var pace_oci_mes_202501_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202501_02km");
var pace_oci_mes_202502_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202502_02km");
var pace_oci_mes_202503_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202503_02km");
var pace_oci_mes_202504_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202504_02km");
var pace_oci_mes_202505_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202505_02km");
var pace_oci_mes_202506_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202506_02km");
var pace_oci_mes_202507_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202507_02km");
var pace_oci_mes_202508_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202508_02km");
var pace_oci_mes_202509_02km = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202509_02km");

exports.pace_oci_mes_202403_02km = pace_oci_mes_202403_02km.updateMask(pace_oci_mes_202403_02km.gte(0)).toFloat();
exports.pace_oci_mes_202404_02km = pace_oci_mes_202404_02km.updateMask(pace_oci_mes_202404_02km.gte(0)).toFloat();
exports.pace_oci_mes_202405_02km = pace_oci_mes_202405_02km.updateMask(pace_oci_mes_202405_02km.gte(0)).toFloat();
exports.pace_oci_mes_202406_02km = pace_oci_mes_202406_02km.updateMask(pace_oci_mes_202406_02km.gte(0)).toFloat();
exports.pace_oci_mes_202407_02km = pace_oci_mes_202407_02km.updateMask(pace_oci_mes_202407_02km.gte(0)).toFloat();
exports.pace_oci_mes_202408_02km = pace_oci_mes_202408_02km.updateMask(pace_oci_mes_202408_02km.gte(0)).toFloat();
exports.pace_oci_mes_202409_02km = pace_oci_mes_202409_02km.updateMask(pace_oci_mes_202409_02km.gte(0)).toFloat();
exports.pace_oci_mes_202410_02km = pace_oci_mes_202410_02km.updateMask(pace_oci_mes_202410_02km.gte(0)).toFloat();
exports.pace_oci_mes_202411_02km = pace_oci_mes_202411_02km.updateMask(pace_oci_mes_202411_02km.gte(0)).toFloat();
exports.pace_oci_mes_202412_02km = pace_oci_mes_202412_02km.updateMask(pace_oci_mes_202412_02km.gte(0)).toFloat();

exports.pace_oci_mes_202501_02km = pace_oci_mes_202501_02km.updateMask(pace_oci_mes_202501_02km.gte(0)).toFloat();
exports.pace_oci_mes_202502_02km = pace_oci_mes_202502_02km.updateMask(pace_oci_mes_202502_02km.gte(0)).toFloat();
exports.pace_oci_mes_202503_02km = pace_oci_mes_202503_02km.updateMask(pace_oci_mes_202503_02km.gte(0)).toFloat();
exports.pace_oci_mes_202504_02km = pace_oci_mes_202504_02km.updateMask(pace_oci_mes_202504_02km.gte(0)).toFloat();
exports.pace_oci_mes_202505_02km = pace_oci_mes_202505_02km.updateMask(pace_oci_mes_202505_02km.gte(0)).toFloat();
exports.pace_oci_mes_202506_02km = pace_oci_mes_202506_02km.updateMask(pace_oci_mes_202506_02km.gte(0)).toFloat();
exports.pace_oci_mes_202507_02km = pace_oci_mes_202507_02km.updateMask(pace_oci_mes_202507_02km.gte(0)).toFloat();
exports.pace_oci_mes_202508_02km = pace_oci_mes_202508_02km.updateMask(pace_oci_mes_202508_02km.gte(0)).toFloat();
exports.pace_oci_mes_202509_02km = pace_oci_mes_202509_02km.updateMask(pace_oci_mes_202509_02km.gte(0)).toFloat();

//

var pace_oci_mt_mes = ee.ImageCollection.fromImages([
  pace_oci_mes_202403_02km,pace_oci_mes_202404_02km,pace_oci_mes_202405_02km,pace_oci_mes_202406_02km,pace_oci_mes_202407_02km,
  pace_oci_mes_202408_02km,pace_oci_mes_202409_02km,pace_oci_mes_202410_02km,pace_oci_mes_202411_02km,pace_oci_mes_202412_02km,
  pace_oci_mes_202501_02km,pace_oci_mes_202502_02km,pace_oci_mes_202503_02km,pace_oci_mes_202504_02km,pace_oci_mes_202505_02km,
  pace_oci_mes_202506_02km,pace_oci_mes_202507_02km,pace_oci_mes_202508_02km,pace_oci_mes_202509_02km
  ])
  .map(function(img){return img.updateMask(img.gte(0)).multiply(10000).toInt16().reproject('EPSG:4326', null, 2000).set(t,img.get(t))});
exports.pace_oci_mt_mes = pace_oci_mt_mes;

//

var pace_oci_mt_mes_img = ee.Image.cat([
  pace_oci_mes_202403_02km,pace_oci_mes_202404_02km,pace_oci_mes_202405_02km,pace_oci_mes_202406_02km,pace_oci_mes_202407_02km,
  pace_oci_mes_202408_02km,pace_oci_mes_202409_02km,pace_oci_mes_202410_02km,pace_oci_mes_202411_02km,pace_oci_mes_202412_02km,
  pace_oci_mes_202501_02km,pace_oci_mes_202502_02km,pace_oci_mes_202503_02km,pace_oci_mes_202504_02km,pace_oci_mes_202505_02km,
  pace_oci_mes_202506_02km,pace_oci_mes_202507_02km,pace_oci_mes_202508_02km,pace_oci_mes_202509_02km
  ])
  .multiply(10000).toInt16().reproject('EPSG:4326', null, 2000);
exports.pace_oci_mt_mes_img = pace_oci_mt_mes_img;

//

function pace_mes(no){
var imageList = pace_oci_mt_mes.toList(pace_oci_mt_mes.size());
return ee.Image(imageList.get(no))}

exports.pace_mes = pace_mes;

//

function conv_modis(img){

return img.select(['b27','b43','b60','b110','b120','b121']).set(t,img.get(t));
}

exports.conv_modis = conv_modis;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: MESOAMERICA | SPATIAL RES: 4.638 KM  | TEMPORAL RES: MONTHLY

var pace_oci_mt_mes_202403 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202403_4km").set(t,ee.Date.fromYMD(2024,3,31).millis()),
    pace_oci_mt_mes_202404 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202404_4km").set(t,ee.Date.fromYMD(2024,4,30).millis()),
    pace_oci_mt_mes_202405 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202405_4km").set(t,ee.Date.fromYMD(2024,5,31).millis()),
    pace_oci_mt_mes_202406 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202406_4km").set(t,ee.Date.fromYMD(2024,6,30).millis()),
    pace_oci_mt_mes_202407 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202407_4km").set(t,ee.Date.fromYMD(2024,7,31).millis()),
    pace_oci_mt_mes_202408 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202408_4km").set(t,ee.Date.fromYMD(2024,8,31).millis()),
    pace_oci_mt_mes_202409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202409_4km").set(t,ee.Date.fromYMD(2024,9,30).millis()),
    pace_oci_mt_mes_202410 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202410_4km").set(t,ee.Date.fromYMD(2024,10,31).millis()),
    pace_oci_mt_mes_202411 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202411_4km").set(t,ee.Date.fromYMD(2024,11,30).millis()),
    pace_oci_mt_mes_202412 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202412_4km").set(t,ee.Date.fromYMD(2024,12,31).millis()),
    pace_oci_mt_mes_202501 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202501_4km").set(t,ee.Date.fromYMD(2025,1,31).millis()),
    pace_oci_mt_mes_202502 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202502_4km").set(t,ee.Date.fromYMD(2025,2,28).millis()),
    pace_oci_mt_mes_202503 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202503_4km").set(t,ee.Date.fromYMD(2025,3,31).millis()),
    pace_oci_mt_mes_202504 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202504_4km").set(t,ee.Date.fromYMD(2025,4,30).millis()),
    pace_oci_mt_mes_202505 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202505x_4km").set(t,ee.Date.fromYMD(2025,5,31).millis());

exports.pace_oci_mt_mes_202403 = pace_oci_mt_mes_202403.updateMask(pace_oci_mt_mes_202403.gte(0)).toFloat();
exports.pace_oci_mt_mes_202404 = pace_oci_mt_mes_202404.updateMask(pace_oci_mt_mes_202404.gte(0)).toFloat();
exports.pace_oci_mt_mes_202405 = pace_oci_mt_mes_202405.updateMask(pace_oci_mt_mes_202405.gte(0)).toFloat();
exports.pace_oci_mt_mes_202406 = pace_oci_mt_mes_202406.updateMask(pace_oci_mt_mes_202406.gte(0)).toFloat();
exports.pace_oci_mt_mes_202407 = pace_oci_mt_mes_202407.updateMask(pace_oci_mt_mes_202407.gte(0)).toFloat();
exports.pace_oci_mt_mes_202408 = pace_oci_mt_mes_202408.updateMask(pace_oci_mt_mes_202408.gte(0)).toFloat();
exports.pace_oci_mt_mes_202409 = pace_oci_mt_mes_202409.updateMask(pace_oci_mt_mes_202409.gte(0)).toFloat();
exports.pace_oci_mt_mes_202410 = pace_oci_mt_mes_202410.updateMask(pace_oci_mt_mes_202410.gte(0)).toFloat();
exports.pace_oci_mt_mes_202411 = pace_oci_mt_mes_202411.updateMask(pace_oci_mt_mes_202411.gte(0)).toFloat();
exports.pace_oci_mt_mes_202412 = pace_oci_mt_mes_202412.updateMask(pace_oci_mt_mes_202412.gte(0)).toFloat();

exports.pace_oci_mt_mes_202501 = pace_oci_mt_mes_202501.updateMask(pace_oci_mt_mes_202501.gte(0)).toFloat();
exports.pace_oci_mt_mes_202502 = pace_oci_mt_mes_202502.updateMask(pace_oci_mt_mes_202502.gte(0)).toFloat();
exports.pace_oci_mt_mes_202503 = pace_oci_mt_mes_202503.updateMask(pace_oci_mt_mes_202503.gte(0)).toFloat();
exports.pace_oci_mt_mes_202504 = pace_oci_mt_mes_202504.updateMask(pace_oci_mt_mes_202504.gte(0)).toFloat();
exports.pace_oci_mt_mes_202505 = pace_oci_mt_mes_202505.updateMask(pace_oci_mt_mes_202505.gte(0)).toFloat();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: WORLD | SPATIAL RES: 10 KM | TEMPORAL RES: MONTHLY

var pace_oci_mt_global_202403 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202403").set(t,ee.Date.fromYMD(2024,3,31).millis()),
    pace_oci_mt_global_202404 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202404").set(t,ee.Date.fromYMD(2024,4,30).millis()),
    pace_oci_mt_global_202405 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202405").set(t,ee.Date.fromYMD(2024,5,31).millis()),
    pace_oci_mt_global_202406 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202406").set(t,ee.Date.fromYMD(2024,6,30).millis()),
    pace_oci_mt_global_202407 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202407").set(t,ee.Date.fromYMD(2024,7,31).millis()),
    pace_oci_mt_global_202408 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202408").set(t,ee.Date.fromYMD(2024,8,31).millis()),
    pace_oci_mt_global_202409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202409").set(t,ee.Date.fromYMD(2024,9,30).millis()),
    pace_oci_mt_global_202410 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202410").set(t,ee.Date.fromYMD(2024,10,31).millis()),
    pace_oci_mt_global_202411 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202411").set(t,ee.Date.fromYMD(2024,11,30).millis()),
    pace_oci_mt_global_202412 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202412").set(t,ee.Date.fromYMD(2024,12,31).millis()),
    pace_oci_mt_global_202501 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202501").set(t,ee.Date.fromYMD(2025,1,31).millis()),
    pace_oci_mt_global_202502 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202502").set(t,ee.Date.fromYMD(2025,2,28).millis()),
    pace_oci_mt_global_202503 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202503").set(t,ee.Date.fromYMD(2025,3,31).millis()),
    pace_oci_mt_global_202504 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v3_202504").set(t,ee.Date.fromYMD(2025,4,30).millis()),
    pace_oci_mt_global_202505 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v31_202505").set(t,ee.Date.fromYMD(2025,5,31).millis()),
    pace_oci_mt_global_202506 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v31_202506").set(t,ee.Date.fromYMD(2025,6,30).millis()),
    pace_oci_mt_global_202507 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v31_202507").set(t,ee.Date.fromYMD(2025,7,31).millis()),
    pace_oci_mt_global_202508 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v31_202508").set(t,ee.Date.fromYMD(2025,8,31).millis()),
    pace_oci_mt_global_202509 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/global_10km/globe_pace_oci_sr_v31_202509").set(t,ee.Date.fromYMD(2025,9,30).millis());

exports.pace_oci_mt_global_202403 = pace_oci_mt_global_202403;
exports.pace_oci_mt_global_202404 = pace_oci_mt_global_202404;
exports.pace_oci_mt_global_202405 = pace_oci_mt_global_202405;
exports.pace_oci_mt_global_202406 = pace_oci_mt_global_202406;
exports.pace_oci_mt_global_202407 = pace_oci_mt_global_202407;
exports.pace_oci_mt_global_202408 = pace_oci_mt_global_202408;
exports.pace_oci_mt_global_202409 = pace_oci_mt_global_202409;
exports.pace_oci_mt_global_202410 = pace_oci_mt_global_202410;
exports.pace_oci_mt_global_202411 = pace_oci_mt_global_202411;
exports.pace_oci_mt_global_202412 = pace_oci_mt_global_202412;

exports.pace_oci_mt_global_202501 = pace_oci_mt_global_202501;
exports.pace_oci_mt_global_202502 = pace_oci_mt_global_202502;
exports.pace_oci_mt_global_202503 = pace_oci_mt_global_202503;
exports.pace_oci_mt_global_202504 = pace_oci_mt_global_202504;
exports.pace_oci_mt_global_202505 = pace_oci_mt_global_202505;
exports.pace_oci_mt_global_202506 = pace_oci_mt_global_202506;
exports.pace_oci_mt_global_202507 = pace_oci_mt_global_202507;
exports.pace_oci_mt_global_202508 = pace_oci_mt_global_202508;
exports.pace_oci_mt_global_202509 = pace_oci_mt_global_202509;

//
var pace_oci_mt_global = ee.ImageCollection.fromImages([pace_oci_mt_global_202403,pace_oci_mt_global_202404,pace_oci_mt_global_202405,pace_oci_mt_global_202406,pace_oci_mt_global_202407,
                                                    pace_oci_mt_global_202408,pace_oci_mt_global_202409,pace_oci_mt_global_202410,pace_oci_mt_global_202411,pace_oci_mt_global_202412,
                                                    pace_oci_mt_global_202501,pace_oci_mt_global_202502,pace_oci_mt_global_202503,pace_oci_mt_global_202504,pace_oci_mt_global_202505,
                                                    pace_oci_mt_global_202506,pace_oci_mt_global_202507,pace_oci_mt_global_202508,pace_oci_mt_global_202509])
                                                    .map(function(img){return img.updateMask(img.gte(0)).reproject('EPSG:4326', null, 10000).set(t,img.get(t))});
exports.pace_oci_mt_global = pace_oci_mt_global;

//
var pace_oci_mt_global0 = pace_oci_mt_global.map(function(img){return img.select(a.bands_oci_orig,a.bands_oci_mod)});
exports.pace_oci_mt_global0 = pace_oci_mt_global0;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LAND VEGETATION INDICES

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS FUNCTION CREATES AN IMAGE COLLECTION FROM THE 8-DAY PACE LAND VI DATA. IT NEEDS TO BE CONSTANTLY UPDATED; last updated: 07.08.2025.

var coll_vi = function(img) {

var ndvi = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_01_ndvi_b70_4km"),
    evi = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_02_evi_b70_4km"),
    cci = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_05_cci_b70_4km"),
    pri = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_07_pri_b70_4km"),
    cire = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_08_cire_b70_4km"),
    car = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_09_car_b70_4km"),
    mari = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_10_mari_b70_4km");

ndvi = ndvi.updateMask(ndvi.gte(-10000));
evi = evi.updateMask(evi.gte(-10000));
cci = cci.updateMask(cci.gte(-10000));
cire = cire.updateMask(cire.gte(-10000));
car = car.updateMask(car.gte(-10000));
mari = mari.updateMask(mari.gte(-10000));
pri = pri.updateMask(pri.gte(-10000));

var vi01 = ee.Image.cat(ndvi.select([0]),evi.select([0]),cci.select([0]),cire.select([0]),car.select([0]),mari.select([0]),pri.select([0])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,3,12).millis());
var vi02 = ee.Image.cat(ndvi.select([1]),evi.select([1]),cci.select([1]),cire.select([1]),car.select([1]),mari.select([1]),pri.select([1])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,3,20).millis());
var vi03 = ee.Image.cat(ndvi.select([2]),evi.select([2]),cci.select([2]),cire.select([2]),car.select([2]),mari.select([2]),pri.select([2])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,3,28).millis());
var vi04 = ee.Image.cat(ndvi.select([3]),evi.select([3]),cci.select([3]),cire.select([3]),car.select([3]),mari.select([3]),pri.select([3])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,4,5).millis());
var vi05 = ee.Image.cat(ndvi.select([4]),evi.select([4]),cci.select([4]),cire.select([4]),car.select([4]),mari.select([4]),pri.select([4])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,4,13).millis());
var vi06 = ee.Image.cat(ndvi.select([5]),evi.select([5]),cci.select([5]),cire.select([5]),car.select([5]),mari.select([5]),pri.select([5])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,4,21).millis());
var vi07 = ee.Image.cat(ndvi.select([6]),evi.select([6]),cci.select([6]),cire.select([6]),car.select([6]),mari.select([6]),pri.select([6])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,4,29).millis());
var vi08 = ee.Image.cat(ndvi.select([7]),evi.select([7]),cci.select([7]),cire.select([7]),car.select([7]),mari.select([7]),pri.select([7])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,5,7).millis());
var vi09 = ee.Image.cat(ndvi.select([8]),evi.select([8]),cci.select([8]),cire.select([8]),car.select([8]),mari.select([8]),pri.select([8])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,5,15).millis());
var vi10 = ee.Image.cat(ndvi.select([9]),evi.select([9]),cci.select([9]),cire.select([9]),car.select([9]),mari.select([9]),pri.select([9])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,5,23).millis());
var vi11 = ee.Image.cat(ndvi.select([10]),evi.select([10]),cci.select([10]),cire.select([10]),car.select([10]),mari.select([10]),pri.select([10])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,5,31).millis());
var vi12 = ee.Image.cat(ndvi.select([11]),evi.select([11]),cci.select([11]),cire.select([11]),car.select([11]),mari.select([11]),pri.select([11])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,6,8).millis());
var vi13 = ee.Image.cat(ndvi.select([12]),evi.select([12]),cci.select([12]),cire.select([12]),car.select([12]),mari.select([12]),pri.select([12])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,6,16).millis());
var vi14 = ee.Image.cat(ndvi.select([13]),evi.select([13]),cci.select([13]),cire.select([13]),car.select([13]),mari.select([13]),pri.select([13])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,6,24).millis());
var vi15 = ee.Image.cat(ndvi.select([14]),evi.select([14]),cci.select([14]),cire.select([14]),car.select([14]),mari.select([14]),pri.select([14])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,7,2).millis());
var vi16 = ee.Image.cat(ndvi.select([15]),evi.select([15]),cci.select([15]),cire.select([15]),car.select([15]),mari.select([15]),pri.select([15])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,7,10).millis());
var vi17 = ee.Image.cat(ndvi.select([16]),evi.select([16]),cci.select([16]),cire.select([16]),car.select([16]),mari.select([16]),pri.select([16])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,7,18).millis());
var vi18 = ee.Image.cat(ndvi.select([17]),evi.select([17]),cci.select([17]),cire.select([17]),car.select([17]),mari.select([17]),pri.select([17])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,7,26).millis());
var vi19 = ee.Image.cat(ndvi.select([18]),evi.select([18]),cci.select([18]),cire.select([18]),car.select([18]),mari.select([18]),pri.select([18])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,8,3).millis());
var vi20 = ee.Image.cat(ndvi.select([19]),evi.select([19]),cci.select([19]),cire.select([19]),car.select([19]),mari.select([19]),pri.select([19])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,8,11).millis());
var vi21 = ee.Image.cat(ndvi.select([20]),evi.select([20]),cci.select([20]),cire.select([20]),car.select([20]),mari.select([20]),pri.select([20])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,8,19).millis());
var vi22 = ee.Image.cat(ndvi.select([21]),evi.select([21]),cci.select([21]),cire.select([21]),car.select([21]),mari.select([21]),pri.select([21])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,8,27).millis());
var vi23 = ee.Image.cat(ndvi.select([22]),evi.select([22]),cci.select([22]),cire.select([22]),car.select([22]),mari.select([22]),pri.select([22])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,9,4).millis());
var vi24 = ee.Image.cat(ndvi.select([23]),evi.select([23]),cci.select([23]),cire.select([23]),car.select([23]),mari.select([23]),pri.select([23])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,9,12).millis());
var vi25 = ee.Image.cat(ndvi.select([24]),evi.select([24]),cci.select([24]),cire.select([24]),car.select([24]),mari.select([24]),pri.select([24])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,9,20).millis());
var vi26 = ee.Image.cat(ndvi.select([25]),evi.select([25]),cci.select([25]),cire.select([25]),car.select([25]),mari.select([25]),pri.select([25])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,9,28).millis());
var vi27 = ee.Image.cat(ndvi.select([26]),evi.select([26]),cci.select([26]),cire.select([26]),car.select([26]),mari.select([26]),pri.select([26])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,10,6).millis());
var vi28 = ee.Image.cat(ndvi.select([27]),evi.select([27]),cci.select([27]),cire.select([27]),car.select([27]),mari.select([27]),pri.select([27])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,10,14).millis());
var vi29 = ee.Image.cat(ndvi.select([28]),evi.select([28]),cci.select([28]),cire.select([28]),car.select([28]),mari.select([28]),pri.select([28])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,10,22).millis());
var vi30 = ee.Image.cat(ndvi.select([29]),evi.select([29]),cci.select([29]),cire.select([29]),car.select([29]),mari.select([29]),pri.select([29])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,10,30).millis());
var vi31 = ee.Image.cat(ndvi.select([30]),evi.select([30]),cci.select([30]),cire.select([30]),car.select([30]),mari.select([30]),pri.select([30])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,11,7).millis());
var vi32 = ee.Image.cat(ndvi.select([31]),evi.select([31]),cci.select([31]),cire.select([31]),car.select([31]),mari.select([31]),pri.select([31])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,11,15).millis());
var vi33 = ee.Image.cat(ndvi.select([32]),evi.select([32]),cci.select([32]),cire.select([32]),car.select([32]),mari.select([32]),pri.select([32])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,11,23).millis());
var vi34 = ee.Image.cat(ndvi.select([33]),evi.select([33]),cci.select([33]),cire.select([33]),car.select([33]),mari.select([33]),pri.select([33])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,12,1).millis());
var vi35 = ee.Image.cat(ndvi.select([34]),evi.select([34]),cci.select([34]),cire.select([34]),car.select([34]),mari.select([34]),pri.select([34])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,12,9).millis());
var vi36 = ee.Image.cat(ndvi.select([35]),evi.select([35]),cci.select([35]),cire.select([35]),car.select([35]),mari.select([35]),pri.select([35])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,12,17).millis());
var vi37 = ee.Image.cat(ndvi.select([36]),evi.select([36]),cci.select([36]),cire.select([36]),car.select([36]),mari.select([36]),pri.select([36])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,12,25).millis());
var vi38 = ee.Image.cat(ndvi.select([37]),evi.select([37]),cci.select([37]),cire.select([37]),car.select([37]),mari.select([37]),pri.select([37])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2024,12,31).millis());
var vi39 = ee.Image.cat(ndvi.select([38]),evi.select([38]),cci.select([38]),cire.select([38]),car.select([38]),mari.select([38]),pri.select([38])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,1,8).millis());
var vi40 = ee.Image.cat(ndvi.select([39]),evi.select([39]),cci.select([39]),cire.select([39]),car.select([39]),mari.select([39]),pri.select([39])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,1,16).millis());
var vi41 = ee.Image.cat(ndvi.select([40]),evi.select([40]),cci.select([40]),cire.select([40]),car.select([40]),mari.select([40]),pri.select([40])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,1,24).millis());
var vi42 = ee.Image.cat(ndvi.select([41]),evi.select([41]),cci.select([41]),cire.select([41]),car.select([41]),mari.select([41]),pri.select([41])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,2,1).millis());
var vi43 = ee.Image.cat(ndvi.select([42]),evi.select([42]),cci.select([42]),cire.select([42]),car.select([42]),mari.select([42]),pri.select([42])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,2,9).millis());
var vi44 = ee.Image.cat(ndvi.select([43]),evi.select([43]),cci.select([43]),cire.select([43]),car.select([43]),mari.select([43]),pri.select([43])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,2,17).millis());
var vi45 = ee.Image.cat(ndvi.select([44]),evi.select([44]),cci.select([44]),cire.select([44]),car.select([44]),mari.select([44]),pri.select([44])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,2,25).millis());
var vi46 = ee.Image.cat(ndvi.select([45]),evi.select([45]),cci.select([45]),cire.select([45]),car.select([45]),mari.select([45]),pri.select([45])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,3,5).millis());
var vi47 = ee.Image.cat(ndvi.select([46]),evi.select([46]),cci.select([46]),cire.select([46]),car.select([46]),mari.select([46]),pri.select([46])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,3,13).millis());
var vi48 = ee.Image.cat(ndvi.select([47]),evi.select([47]),cci.select([47]),cire.select([47]),car.select([47]),mari.select([47]),pri.select([47])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,3,21).millis());
var vi49 = ee.Image.cat(ndvi.select([48]),evi.select([48]),cci.select([48]),cire.select([48]),car.select([48]),mari.select([48]),pri.select([48])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,3,29).millis());
var vi50 = ee.Image.cat(ndvi.select([49]),evi.select([49]),cci.select([49]),cire.select([49]),car.select([49]),mari.select([49]),pri.select([49])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,4,6).millis());
var vi51 = ee.Image.cat(ndvi.select([50]),evi.select([50]),cci.select([50]),cire.select([50]),car.select([50]),mari.select([50]),pri.select([50])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,4,14).millis());
var vi52 = ee.Image.cat(ndvi.select([51]),evi.select([51]),cci.select([51]),cire.select([51]),car.select([51]),mari.select([51]),pri.select([51])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,4,22).millis());
var vi53 = ee.Image.cat(ndvi.select([52]),evi.select([52]),cci.select([52]),cire.select([52]),car.select([52]),mari.select([52]),pri.select([52])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,4,30).millis());
var vi54 = ee.Image.cat(ndvi.select([53]),evi.select([53]),cci.select([53]),cire.select([53]),car.select([53]),mari.select([53]),pri.select([53])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,5,8).millis());
var vi55 = ee.Image.cat(ndvi.select([54]),evi.select([54]),cci.select([54]),cire.select([54]),car.select([54]),mari.select([54]),pri.select([54])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,5,16).millis());
var vi56 = ee.Image.cat(ndvi.select([55]),evi.select([55]),cci.select([55]),cire.select([55]),car.select([55]),mari.select([55]),pri.select([55])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,5,24).millis());
var vi57 = ee.Image.cat(ndvi.select([56]),evi.select([56]),cci.select([56]),cire.select([56]),car.select([56]),mari.select([56]),pri.select([56])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,6,1).millis());
var vi58 = ee.Image.cat(ndvi.select([57]),evi.select([57]),cci.select([57]),cire.select([57]),car.select([57]),mari.select([57]),pri.select([57])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,6,9).millis());
var vi59 = ee.Image.cat(ndvi.select([58]),evi.select([58]),cci.select([58]),cire.select([58]),car.select([58]),mari.select([58]),pri.select([58])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,6,17).millis());
var vi60 = ee.Image.cat(ndvi.select([59]),evi.select([59]),cci.select([59]),cire.select([59]),car.select([59]),mari.select([59]),pri.select([59])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,6,25).millis());
var vi61 = ee.Image.cat(ndvi.select([60]),evi.select([60]),cci.select([60]),cire.select([60]),car.select([60]),mari.select([60]),pri.select([60])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,7,3).millis());
var vi62 = ee.Image.cat(ndvi.select([61]),evi.select([61]),cci.select([61]),cire.select([61]),car.select([61]),mari.select([61]),pri.select([61])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,7,11).millis());
var vi63 = ee.Image.cat(ndvi.select([62]),evi.select([62]),cci.select([62]),cire.select([62]),car.select([62]),mari.select([62]),pri.select([62])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,7,19).millis());
var vi64 = ee.Image.cat(ndvi.select([63]),evi.select([63]),cci.select([63]),cire.select([63]),car.select([63]),mari.select([63]),pri.select([63])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,7,27).millis());
var vi65 = ee.Image.cat(ndvi.select([64]),evi.select([64]),cci.select([64]),cire.select([64]),car.select([64]),mari.select([64]),pri.select([64])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,8,4).millis());
var vi66 = ee.Image.cat(ndvi.select([65]),evi.select([65]),cci.select([65]),cire.select([65]),car.select([65]),mari.select([65]),pri.select([65])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,8,12).millis());
var vi67 = ee.Image.cat(ndvi.select([66]),evi.select([66]),cci.select([66]),cire.select([66]),car.select([66]),mari.select([66]),pri.select([66])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,8,20).millis());
var vi68 = ee.Image.cat(ndvi.select([67]),evi.select([67]),cci.select([67]),cire.select([67]),car.select([67]),mari.select([67]),pri.select([67])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,8,28).millis());
var vi69 = ee.Image.cat(ndvi.select([68]),evi.select([68]),cci.select([68]),cire.select([68]),car.select([68]),mari.select([68]),pri.select([68])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,9,5).millis());
var vi70 = ee.Image.cat(ndvi.select([69]),evi.select([69]),cci.select([69]),cire.select([69]),car.select([69]),mari.select([69]),pri.select([69])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,9,13).millis());

/*
var vi71 = ee.Image.cat(ndvi.select([70]),evi.select([70]),cci.select([70]),cire.select([70]),car.select([70]),mari.select([70]),pri.select([70])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,9,21).millis());
var vi72 = ee.Image.cat(ndvi.select([71]),evi.select([71]),cci.select([71]),cire.select([71]),car.select([71]),mari.select([71]),pri.select([71])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,9,29).millis());
var vi73 = ee.Image.cat(ndvi.select([72]),evi.select([72]),cci.select([72]),cire.select([72]),car.select([72]),mari.select([72]),pri.select([72])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,10,7).millis());
var vi74 = ee.Image.cat(ndvi.select([73]),evi.select([73]),cci.select([73]),cire.select([73]),car.select([73]),mari.select([73]),pri.select([73])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,10,15).millis());
var vi75 = ee.Image.cat(ndvi.select([74]),evi.select([74]),cci.select([74]),cire.select([74]),car.select([74]),mari.select([74]),pri.select([74])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,10,23).millis());
var vi76 = ee.Image.cat(ndvi.select([75]),evi.select([75]),cci.select([75]),cire.select([75]),car.select([75]),mari.select([75]),pri.select([75])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,10,31).millis());
var vi77 = ee.Image.cat(ndvi.select([76]),evi.select([76]),cci.select([76]),cire.select([76]),car.select([76]),mari.select([76]),pri.select([76])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,11,8).millis());
var vi78 = ee.Image.cat(ndvi.select([77]),evi.select([77]),cci.select([77]),cire.select([77]),car.select([77]),mari.select([77]),pri.select([77])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,11,16).millis());
var vi79 = ee.Image.cat(ndvi.select([78]),evi.select([78]),cci.select([78]),cire.select([78]),car.select([78]),mari.select([78]),pri.select([78])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,11,24).millis());
var vi80 = ee.Image.cat(ndvi.select([79]),evi.select([79]),cci.select([79]),cire.select([79]),car.select([79]),mari.select([79]),pri.select([79])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,12,2).millis());
var vi81 = ee.Image.cat(ndvi.select([80]),evi.select([80]),cci.select([80]),cire.select([80]),car.select([80]),mari.select([80]),pri.select([80])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,12,10).millis());
var vi82 = ee.Image.cat(ndvi.select([81]),evi.select([81]),cci.select([81]),cire.select([81]),car.select([81]),mari.select([81]),pri.select([81])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,12,18).millis());
var vi83 = ee.Image.cat(ndvi.select([82]),evi.select([82]),cci.select([82]),cire.select([82]),car.select([82]),mari.select([82]),pri.select([82])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2025,12,26).millis());
var vi84 = ee.Image.cat(ndvi.select([83]),evi.select([83]),cci.select([83]),cire.select([83]),car.select([83]),mari.select([83]),pri.select([83])).rename('ndvi','evi','cci','cire','car','mari','pri').set(t,ee.Date.fromYMD(2026,1,3).millis());

*/

//

return ee.ImageCollection.fromImages(
[vi01,vi02,vi03,vi04,vi05,vi06,vi07,vi08,vi09,vi10,
vi11,vi12,vi13,vi14,vi15,vi16,vi17,vi18,vi19,vi20,
vi21,vi22,vi23,vi24,vi25,vi26,vi27,vi28,vi29,vi30,
vi31,vi32,vi33,vi34,vi35,vi36,vi37,vi38,vi39,vi40,
vi41,vi42,vi43,vi44,vi45,vi46,vi47,vi48,vi49,vi50,
vi51,vi52,vi53,vi54,vi55,vi56,vi57,vi58,vi59,vi60,
vi61,vi62,vi63,vi64,vi65,vi66,vi67,vi68,vi69,vi70

/*
,
vi71,vi72,vi73,vi74,vi75,vi76,vi77,vi78,vi79,vi80,
vi81,vi82,vi83,vi84
*/
])
//.map(function(img){return img.select(['b.*'],['vi'])})
.map(function(img){return img.updateMask(img.gte(-10000)).updateMask(img.lte(30000))})  };

//
var flt = function(img){return img.updateMask(img.gte(-10000)).updateMask(img.lte(10000))};
exports.flt = flt;

// Density function - Generates masks to show when pixels are missing data
function density(img){return img.select(0).gte(0)}
exports.density = density;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS FUNCTION CREATES AN IMAGE COLLECTION FROM THE 8-DAY PACE LAND VI DATA. IT NEEDS TO BE CONSTANTLY UPDATED; last updated: 30.06.2025.

var coll_vi_ = function(img) {

var vi01 = ee.Image.cat(img.select([0])).rename('vi').set(t,ee.Date.fromYMD(2024,3,12).millis());
var vi02 = ee.Image.cat(img.select([1])).rename('vi').set(t,ee.Date.fromYMD(2024,3,20).millis());
var vi03 = ee.Image.cat(img.select([2])).rename('vi').set(t,ee.Date.fromYMD(2024,3,28).millis());
var vi04 = ee.Image.cat(img.select([3])).rename('vi').set(t,ee.Date.fromYMD(2024,4,5).millis());
var vi05 = ee.Image.cat(img.select([4])).rename('vi').set(t,ee.Date.fromYMD(2024,4,13).millis());
var vi06 = ee.Image.cat(img.select([5])).rename('vi').set(t,ee.Date.fromYMD(2024,4,21).millis());
var vi07 = ee.Image.cat(img.select([6])).rename('vi').set(t,ee.Date.fromYMD(2024,4,29).millis());
var vi08 = ee.Image.cat(img.select([7])).rename('vi').set(t,ee.Date.fromYMD(2024,5,7).millis());
var vi09 = ee.Image.cat(img.select([8])).rename('vi').set(t,ee.Date.fromYMD(2024,5,15).millis());
var vi10 = ee.Image.cat(img.select([9])).rename('vi').set(t,ee.Date.fromYMD(2024,5,23).millis());
var vi11 = ee.Image.cat(img.select([10])).rename('vi').set(t,ee.Date.fromYMD(2024,5,31).millis());
var vi12 = ee.Image.cat(img.select([11])).rename('vi').set(t,ee.Date.fromYMD(2024,6,8).millis());
var vi13 = ee.Image.cat(img.select([12])).rename('vi').set(t,ee.Date.fromYMD(2024,6,16).millis());
var vi14 = ee.Image.cat(img.select([13])).rename('vi').set(t,ee.Date.fromYMD(2024,6,24).millis());
var vi15 = ee.Image.cat(img.select([14])).rename('vi').set(t,ee.Date.fromYMD(2024,7,2).millis());
var vi16 = ee.Image.cat(img.select([15])).rename('vi').set(t,ee.Date.fromYMD(2024,7,10).millis());
var vi17 = ee.Image.cat(img.select([16])).rename('vi').set(t,ee.Date.fromYMD(2024,7,18).millis());
var vi18 = ee.Image.cat(img.select([17])).rename('vi').set(t,ee.Date.fromYMD(2024,7,26).millis());
var vi19 = ee.Image.cat(img.select([18])).rename('vi').set(t,ee.Date.fromYMD(2024,8,3).millis());
var vi20 = ee.Image.cat(img.select([19])).rename('vi').set(t,ee.Date.fromYMD(2024,8,11).millis());
var vi21 = ee.Image.cat(img.select([20])).rename('vi').set(t,ee.Date.fromYMD(2024,8,19).millis());
var vi22 = ee.Image.cat(img.select([21])).rename('vi').set(t,ee.Date.fromYMD(2024,8,27).millis());
var vi23 = ee.Image.cat(img.select([22])).rename('vi').set(t,ee.Date.fromYMD(2024,9,4).millis());
var vi24 = ee.Image.cat(img.select([23])).rename('vi').set(t,ee.Date.fromYMD(2024,9,12).millis());
var vi25 = ee.Image.cat(img.select([24])).rename('vi').set(t,ee.Date.fromYMD(2024,9,20).millis());
var vi26 = ee.Image.cat(img.select([25])).rename('vi').set(t,ee.Date.fromYMD(2024,9,28).millis());
var vi27 = ee.Image.cat(img.select([26])).rename('vi').set(t,ee.Date.fromYMD(2024,10,6).millis());
var vi28 = ee.Image.cat(img.select([27])).rename('vi').set(t,ee.Date.fromYMD(2024,10,14).millis());
var vi29 = ee.Image.cat(img.select([28])).rename('vi').set(t,ee.Date.fromYMD(2024,10,22).millis());
var vi30 = ee.Image.cat(img.select([29])).rename('vi').set(t,ee.Date.fromYMD(2024,10,30).millis());
var vi31 = ee.Image.cat(img.select([30])).rename('vi').set(t,ee.Date.fromYMD(2024,11,7).millis());
var vi32 = ee.Image.cat(img.select([31])).rename('vi').set(t,ee.Date.fromYMD(2024,11,15).millis());
var vi33 = ee.Image.cat(img.select([32])).rename('vi').set(t,ee.Date.fromYMD(2024,11,23).millis());
var vi34 = ee.Image.cat(img.select([33])).rename('vi').set(t,ee.Date.fromYMD(2024,12,1).millis());
var vi35 = ee.Image.cat(img.select([34])).rename('vi').set(t,ee.Date.fromYMD(2024,12,9).millis());
var vi36 = ee.Image.cat(img.select([35])).rename('vi').set(t,ee.Date.fromYMD(2024,12,17).millis());
var vi37 = ee.Image.cat(img.select([36])).rename('vi').set(t,ee.Date.fromYMD(2024,12,25).millis());
var vi38 = ee.Image.cat(img.select([37])).rename('vi').set(t,ee.Date.fromYMD(2024,12,31).millis());
var vi39 = ee.Image.cat(img.select([38])).rename('vi').set(t,ee.Date.fromYMD(2025,1,8).millis());
var vi40 = ee.Image.cat(img.select([39])).rename('vi').set(t,ee.Date.fromYMD(2025,1,16).millis());
var vi41 = ee.Image.cat(img.select([40])).rename('vi').set(t,ee.Date.fromYMD(2025,1,24).millis());
var vi42 = ee.Image.cat(img.select([41])).rename('vi').set(t,ee.Date.fromYMD(2025,2,1).millis());
var vi43 = ee.Image.cat(img.select([42])).rename('vi').set(t,ee.Date.fromYMD(2025,2,9).millis());
var vi44 = ee.Image.cat(img.select([43])).rename('vi').set(t,ee.Date.fromYMD(2025,2,17).millis());
var vi45 = ee.Image.cat(img.select([44])).rename('vi').set(t,ee.Date.fromYMD(2025,2,25).millis());
var vi46 = ee.Image.cat(img.select([45])).rename('vi').set(t,ee.Date.fromYMD(2025,3,5).millis());
var vi47 = ee.Image.cat(img.select([46])).rename('vi').set(t,ee.Date.fromYMD(2025,3,13).millis());
var vi48 = ee.Image.cat(img.select([47])).rename('vi').set(t,ee.Date.fromYMD(2025,3,21).millis());
var vi49 = ee.Image.cat(img.select([48])).rename('vi').set(t,ee.Date.fromYMD(2025,3,29).millis());
var vi50 = ee.Image.cat(img.select([49])).rename('vi').set(t,ee.Date.fromYMD(2025,4,6).millis());
var vi51 = ee.Image.cat(img.select([50])).rename('vi').set(t,ee.Date.fromYMD(2025,4,14).millis());
var vi52 = ee.Image.cat(img.select([51])).rename('vi').set(t,ee.Date.fromYMD(2025,4,22).millis());
var vi53 = ee.Image.cat(img.select([52])).rename('vi').set(t,ee.Date.fromYMD(2025,4,30).millis());
var vi54 = ee.Image.cat(img.select([53])).rename('vi').set(t,ee.Date.fromYMD(2025,5,8).millis());
var vi55 = ee.Image.cat(img.select([54])).rename('vi').set(t,ee.Date.fromYMD(2025,5,16).millis());
var vi56 = ee.Image.cat(img.select([55])).rename('vi').set(t,ee.Date.fromYMD(2025,5,24).millis());
var vi57 = ee.Image.cat(img.select([56])).rename('vi').set(t,ee.Date.fromYMD(2025,6,1).millis());
var vi58 = ee.Image.cat(img.select([57])).rename('vi').set(t,ee.Date.fromYMD(2025,6,9).millis());
var vi59 = ee.Image.cat(img.select([58])).rename('vi').set(t,ee.Date.fromYMD(2025,6,17).millis());
var vi60 = ee.Image.cat(img.select([59])).rename('vi').set(t,ee.Date.fromYMD(2025,6,25).millis());
var vi61 = ee.Image.cat(img.select([60])).rename('vi').set(t,ee.Date.fromYMD(2025,7,3).millis());
var vi62 = ee.Image.cat(img.select([61])).rename('vi').set(t,ee.Date.fromYMD(2025,7,11).millis());
var vi63 = ee.Image.cat(img.select([62])).rename('vi').set(t,ee.Date.fromYMD(2025,7,19).millis());
var vi64 = ee.Image.cat(img.select([63])).rename('vi').set(t,ee.Date.fromYMD(2025,7,27).millis());
var vi65 = ee.Image.cat(img.select([64])).rename('vi').set(t,ee.Date.fromYMD(2025,8,4).millis());
var vi66 = ee.Image.cat(img.select([65])).rename('vi').set(t,ee.Date.fromYMD(2025,8,12).millis());
var vi67 = ee.Image.cat(img.select([66])).rename('vi').set(t,ee.Date.fromYMD(2025,8,20).millis());
var vi68 = ee.Image.cat(img.select([67])).rename('vi').set(t,ee.Date.fromYMD(2025,8,28).millis());
var vi69 = ee.Image.cat(img.select([68])).rename('vi').set(t,ee.Date.fromYMD(2025,9,5).millis());
var vi70 = ee.Image.cat(img.select([69])).rename('vi').set(t,ee.Date.fromYMD(2025,9,13).millis());

/*
var vi71 = ee.Image.cat(img.select([70])).rename('vi').set(t,ee.Date.fromYMD(2025,9,21).millis());
var vi72 = ee.Image.cat(img.select([71])).rename('vi').set(t,ee.Date.fromYMD(2025,9,29).millis());
var vi73 = ee.Image.cat(img.select([72])).rename('vi').set(t,ee.Date.fromYMD(2025,10,7).millis());
var vi74 = ee.Image.cat(img.select([73])).rename('vi').set(t,ee.Date.fromYMD(2025,10,15).millis());
var vi75 = ee.Image.cat(img.select([74])).rename('vi').set(t,ee.Date.fromYMD(2025,10,23).millis());
var vi76 = ee.Image.cat(img.select([75])).rename('vi').set(t,ee.Date.fromYMD(2025,10,31).millis());
var vi77 = ee.Image.cat(img.select([76])).rename('vi').set(t,ee.Date.fromYMD(2025,11,8).millis());
var vi78 = ee.Image.cat(img.select([77])).rename('vi').set(t,ee.Date.fromYMD(2025,11,16).millis());
var vi79 = ee.Image.cat(img.select([78])).rename('vi').set(t,ee.Date.fromYMD(2025,11,24).millis());
var vi80 = ee.Image.cat(img.select([79])).rename('vi').set(t,ee.Date.fromYMD(2025,12,2).millis());
var vi81 = ee.Image.cat(img.select([80])).rename('vi').set(t,ee.Date.fromYMD(2025,12,10).millis());
var vi82 = ee.Image.cat(img.select([81])).rename('vi').set(t,ee.Date.fromYMD(2025,12,18).millis());
var vi83 = ee.Image.cat(img.select([82])).rename('vi').set(t,ee.Date.fromYMD(2025,12,26).millis());
var vi84 = ee.Image.cat(img.select([83])).rename('vi').set(t,ee.Date.fromYMD(2026,1,3).millis());
*/

return ee.ImageCollection.fromImages(
[vi01,vi02,vi03,vi04,vi05,vi06,vi07,vi08,vi09,vi10,
vi11,vi12,vi13,vi14,vi15,vi16,vi17,vi18,vi19,vi20,
vi21,vi22,vi23,vi24,vi25,vi26,vi27,vi28,vi29,vi30,
vi31,vi32,vi33,vi34,vi35,vi36,vi37,vi38,vi39,vi40,
vi41,vi42,vi43,vi44,vi45,vi46,vi47,vi48,vi49,vi50,
vi51,vi52,vi53,vi54,vi55,vi56,vi57,vi58,vi59,vi60,
vi61,vi62,vi63,vi64,vi65,vi66,vi67,vi68,vi69,vi70

/*
,
vi71,vi72,vi73,vi74,vi75,vi76,vi77,vi78,vi79,vi80,
vi81,vi82,vi83,vi84
*/
])
//.map(function(img){return img.select(['b.*'],['vi'])})
.map(function(img){return img.updateMask(img.gte(-10000)).updateMask(img.lte(30000))})  };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: GLOBAL | SPATIAL RES: 4.638 KM | TEMPORAL RES: 8-DAY

// DATA AS SINGLE IMAGES

var pace_oci_global_ndvi = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_01_ndvi_b70_4km"),
    pace_oci_global_evi = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_02_evi_b70_4km"),
    pace_oci_global_cci = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_05_cci_b70_4km"),
    pace_oci_global_pri = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_07_pri_b70_4km"),
    pace_oci_global_cire = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_08_cire_b70_4km"),
    pace_oci_global_car = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_09_car_b70_4km"),
    pace_oci_global_mari = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km_/vi_10_mari_b70_4km");

pace_oci_global_ndvi = pace_oci_global_ndvi.updateMask(pace_oci_global_ndvi.gte(-10000));
pace_oci_global_evi = pace_oci_global_evi.updateMask(pace_oci_global_evi.gte(-10000));
pace_oci_global_cci = pace_oci_global_cci.updateMask(pace_oci_global_cci.gte(-10000));
pace_oci_global_cire = pace_oci_global_cire.updateMask(pace_oci_global_cire.gte(-10000));
pace_oci_global_car = pace_oci_global_car.updateMask(pace_oci_global_car.gte(-10000));
pace_oci_global_mari = pace_oci_global_mari.updateMask(pace_oci_global_mari.gte(-10000));
pace_oci_global_pri = pace_oci_global_pri.updateMask(pace_oci_global_pri.gte(-10000));

exports.pace_oci_global_ndvi    = pace_oci_global_ndvi;
exports.pace_oci_global_evi     = pace_oci_global_evi;
exports.pace_oci_global_cci     = pace_oci_global_cci;
exports.pace_oci_global_cire    = pace_oci_global_cire;
exports.pace_oci_global_car     = pace_oci_global_car;
exports.pace_oci_global_mari    = pace_oci_global_mari;
exports.pace_oci_global_pri     = pace_oci_global_pri;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DATA AS IMAGE COLLECTIONS

var pace_oci_8d_global_vi = coll_vi(ee.Image.cat([pace_oci_global_ndvi,pace_oci_global_evi,pace_oci_global_cci,pace_oci_global_cire,pace_oci_global_car,pace_oci_global_mari,pace_oci_global_pri]));
exports.pace_oci_8d_global_vi = pace_oci_8d_global_vi;


var pace_oci_8d_global_ndvi       = pace_oci_8d_global_vi.select(['ndvi']),
    pace_oci_8d_global_evi        = pace_oci_8d_global_vi.select(['evi']),
    pace_oci_8d_global_cci        = pace_oci_8d_global_vi.select(['cci']),
    pace_oci_8d_global_cire       = pace_oci_8d_global_vi.select(['cire']),
    pace_oci_8d_global_car        = pace_oci_8d_global_vi.select(['car']),
    pace_oci_8d_global_mari       = pace_oci_8d_global_vi.select(['mari']),
    pace_oci_8d_global_pri        = pace_oci_8d_global_vi.select(['pri']);

/*
var pace_oci_8d_global_ndvi       = coll_vi_(pace_oci_global_ndvi).map(function(img){return img.select(['vi']).rename('ndvi')}),
    pace_oci_8d_global_evi        = coll_vi_(pace_oci_global_evi).map(function(img){return img.select(['vi']).rename('evi')}),
    pace_oci_8d_global_cci        = coll_vi_(pace_oci_global_cci).map(function(img){return img.select(['vi']).rename('cci')}),
    pace_oci_8d_global_cire       = coll_vi_(pace_oci_global_cire).map(function(img){return img.select(['vi']).rename('cire')}),
    pace_oci_8d_global_car        = coll_vi_(pace_oci_global_car).map(function(img){return img.select(['vi']).rename('car')}),
    pace_oci_8d_global_mari       = coll_vi_(pace_oci_global_mari).map(function(img){return img.select(['vi']).rename('mari')}),
    pace_oci_8d_global_pri        = coll_vi_(pace_oci_global_pri).map(function(img){return img.select(['vi']).rename('pri')});
*/

exports.pace_oci_8d_global_ndvi   = pace_oci_8d_global_ndvi;
exports.pace_oci_8d_global_evi    = pace_oci_8d_global_evi;
exports.pace_oci_8d_global_cci    = pace_oci_8d_global_cci;
exports.pace_oci_8d_global_cire   = pace_oci_8d_global_cire;
exports.pace_oci_8d_global_car    = pace_oci_8d_global_car;
exports.pace_oci_8d_global_mari   = pace_oci_8d_global_mari;
exports.pace_oci_8d_global_pri    = pace_oci_8d_global_pri;

//

var a = require('users/servirbz/packages:bz/bz');

var pace_oci_8d_bz_vi = pace_oci_8d_global_vi.map(function(img){return img.clip(a.bz_poly).set(t,img.get(t))});
exports.pace_oci_8d_bz_vi = pace_oci_8d_bz_vi;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: GLOBAL | SPATIAL RES: 2 KM | TEMPORAL RES: MONTHLY

// DATA AS SINGLE IMAGES

var pace_oci_mt_vi_202403 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202403_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,3,31).millis());
var pace_oci_mt_vi_202404 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202404_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,4,30).millis());
var pace_oci_mt_vi_202405 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202405_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,5,31).millis());
var pace_oci_mt_vi_202406 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202406_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,6,30).millis());
var pace_oci_mt_vi_202407 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202407_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,7,31).millis());
var pace_oci_mt_vi_202408 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202408_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,8,31).millis());
var pace_oci_mt_vi_202409 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202409_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,9,30).millis());
var pace_oci_mt_vi_202410 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202410_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,10,31).millis());
var pace_oci_mt_vi_202411 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202411_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,11,30).millis());
var pace_oci_mt_vi_202412 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202412_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2024,12,31).millis());
var pace_oci_mt_vi_202501 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202501_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,1,31).millis());
var pace_oci_mt_vi_202502 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202502_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,2,28).millis());
var pace_oci_mt_vi_202503 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202503_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,3,31).millis());
var pace_oci_mt_vi_202504 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202504_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,4,30).millis());
var pace_oci_mt_vi_202505 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202505_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,5,31).millis());
var pace_oci_mt_vi_202506 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202506_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,6,30).millis());
var pace_oci_mt_vi_202507 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202507_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,7,31).millis());
var pace_oci_mt_vi_202508 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202508_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,8,31).millis());
var pace_oci_mt_vi_202509 = ee.Image('projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/monthly/PACE_OCI_202509_L3m_MO_LANDVI_V3_1').set(t,ee.Date.fromYMD(2025,9,30).millis());

exports.pace_oci_mt_vi_202403 = pace_oci_mt_vi_202403;
exports.pace_oci_mt_vi_202404 = pace_oci_mt_vi_202404;
exports.pace_oci_mt_vi_202405 = pace_oci_mt_vi_202405;
exports.pace_oci_mt_vi_202406 = pace_oci_mt_vi_202406;
exports.pace_oci_mt_vi_202407 = pace_oci_mt_vi_202407;
exports.pace_oci_mt_vi_202408 = pace_oci_mt_vi_202408;
exports.pace_oci_mt_vi_202409 = pace_oci_mt_vi_202409;
exports.pace_oci_mt_vi_202410 = pace_oci_mt_vi_202410;
exports.pace_oci_mt_vi_202411 = pace_oci_mt_vi_202411;
exports.pace_oci_mt_vi_202412 = pace_oci_mt_vi_202412;
exports.pace_oci_mt_vi_202501 = pace_oci_mt_vi_202501;
exports.pace_oci_mt_vi_202502 = pace_oci_mt_vi_202502;
exports.pace_oci_mt_vi_202503 = pace_oci_mt_vi_202503;
exports.pace_oci_mt_vi_202504 = pace_oci_mt_vi_202504;
exports.pace_oci_mt_vi_202505 = pace_oci_mt_vi_202505;
exports.pace_oci_mt_vi_202506 = pace_oci_mt_vi_202506;
exports.pace_oci_mt_vi_202507 = pace_oci_mt_vi_202507;
exports.pace_oci_mt_vi_202508 = pace_oci_mt_vi_202508;
exports.pace_oci_mt_vi_202509 = pace_oci_mt_vi_202509;

//
var pace_oci_mt_global_vi = ee.ImageCollection.fromImages([
pace_oci_mt_vi_202403,pace_oci_mt_vi_202404,pace_oci_mt_vi_202405,pace_oci_mt_vi_202406,pace_oci_mt_vi_202407,
pace_oci_mt_vi_202408,pace_oci_mt_vi_202409,pace_oci_mt_vi_202410,pace_oci_mt_vi_202411,pace_oci_mt_vi_202412,
pace_oci_mt_vi_202501,pace_oci_mt_vi_202502,pace_oci_mt_vi_202503,pace_oci_mt_vi_202504,pace_oci_mt_vi_202505,
pace_oci_mt_vi_202506,pace_oci_mt_vi_202507,pace_oci_mt_vi_202508,pace_oci_mt_vi_202509])
.map(function(img){return img.updateMask(img.gte(-1)).multiply(10000).rename(["ndvi","evi","ndwi","ndii","cci","ndsi","pri","cire","car","mari"]).set(t,img.get(t));
});

exports.pace_oci_mt_global_vi = pace_oci_mt_global_vi;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CHLOROPHYLL A
// DOMAIN: GLOBAL | SPATIAL RES: 4 KM  | TEMPORAL RES: 8 DAY

var chl_a = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_chlor_a/8day_4km/pace_oci_20240305_20251023_l3m_8d_chlor_a_v3_x100");

/////
var coll_chl = function(img) {

var chl01 = ee.Image.cat(img.select([0])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,3,12).millis());
var chl02 = ee.Image.cat(img.select([1])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,3,20).millis());
var chl03 = ee.Image.cat(img.select([2])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,3,28).millis());
var chl04 = ee.Image.cat(img.select([3])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,4,5).millis());
var chl05 = ee.Image.cat(img.select([4])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,4,13).millis());
var chl06 = ee.Image.cat(img.select([5])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,4,21).millis());
var chl07 = ee.Image.cat(img.select([6])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,4,29).millis());
var chl08 = ee.Image.cat(img.select([7])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,5,7).millis());
var chl09 = ee.Image.cat(img.select([8])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,5,15).millis());
var chl10 = ee.Image.cat(img.select([9])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,5,23).millis());
var chl11 = ee.Image.cat(img.select([10])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,5,31).millis());
var chl12 = ee.Image.cat(img.select([11])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,6,8).millis());
var chl13 = ee.Image.cat(img.select([12])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,6,16).millis());
var chl14 = ee.Image.cat(img.select([13])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,6,24).millis());
var chl15 = ee.Image.cat(img.select([14])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,7,2).millis());
var chl16 = ee.Image.cat(img.select([15])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,7,10).millis());
var chl17 = ee.Image.cat(img.select([16])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,7,18).millis());
var chl18 = ee.Image.cat(img.select([17])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,7,26).millis());
var chl19 = ee.Image.cat(img.select([18])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,8,3).millis());
var chl20 = ee.Image.cat(img.select([19])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,8,11).millis());
var chl21 = ee.Image.cat(img.select([20])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,8,19).millis());
var chl22 = ee.Image.cat(img.select([21])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,8,27).millis());
var chl23 = ee.Image.cat(img.select([22])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,9,4).millis());
var chl24 = ee.Image.cat(img.select([23])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,9,12).millis());
var chl25 = ee.Image.cat(img.select([24])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,9,20).millis());
var chl26 = ee.Image.cat(img.select([25])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,9,28).millis());
var chl27 = ee.Image.cat(img.select([26])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,10,6).millis());
var chl28 = ee.Image.cat(img.select([27])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,10,14).millis());
var chl29 = ee.Image.cat(img.select([28])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,10,22).millis());
var chl30 = ee.Image.cat(img.select([29])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,10,30).millis());
var chl31 = ee.Image.cat(img.select([30])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,11,7).millis());
var chl32 = ee.Image.cat(img.select([31])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,11,15).millis());
var chl33 = ee.Image.cat(img.select([32])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,11,23).millis());
var chl34 = ee.Image.cat(img.select([33])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,12,1).millis());
var chl35 = ee.Image.cat(img.select([34])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,12,9).millis());
var chl36 = ee.Image.cat(img.select([35])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,12,17).millis());
var chl37 = ee.Image.cat(img.select([36])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,12,25).millis());
var chl38 = ee.Image.cat(img.select([37])).rename('chlor_a').set(t,ee.Date.fromYMD(2024,12,31).millis());
var chl39 = ee.Image.cat(img.select([38])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,1,8).millis());
var chl40 = ee.Image.cat(img.select([39])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,1,16).millis());
var chl41 = ee.Image.cat(img.select([40])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,1,24).millis());
var chl42 = ee.Image.cat(img.select([41])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,2,1).millis());
var chl43 = ee.Image.cat(img.select([42])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,2,9).millis());
var chl44 = ee.Image.cat(img.select([43])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,2,17).millis());
var chl45 = ee.Image.cat(img.select([44])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,2,25).millis());
var chl46 = ee.Image.cat(img.select([45])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,3,5).millis());
var chl47 = ee.Image.cat(img.select([46])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,3,13).millis());
var chl48 = ee.Image.cat(img.select([47])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,3,21).millis());
var chl49 = ee.Image.cat(img.select([48])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,3,29).millis());
var chl50 = ee.Image.cat(img.select([49])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,4,6).millis());
var chl51 = ee.Image.cat(img.select([50])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,4,14).millis());
var chl52 = ee.Image.cat(img.select([51])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,4,22).millis());
var chl53 = ee.Image.cat(img.select([52])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,4,30).millis());
var chl54 = ee.Image.cat(img.select([53])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,5,8).millis());
var chl55 = ee.Image.cat(img.select([54])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,5,16).millis());
var chl56 = ee.Image.cat(img.select([55])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,5,24).millis());
var chl57 = ee.Image.cat(img.select([56])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,6,1).millis());
var chl58 = ee.Image.cat(img.select([57])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,6,9).millis());
var chl59 = ee.Image.cat(img.select([58])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,6,17).millis());
var chl60 = ee.Image.cat(img.select([59])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,6,25).millis());
var chl61 = ee.Image.cat(img.select([60])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,7,3).millis());
var chl62 = ee.Image.cat(img.select([61])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,7,11).millis());
var chl63 = ee.Image.cat(img.select([62])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,7,19).millis());
var chl64 = ee.Image.cat(img.select([63])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,7,27).millis());
var chl65 = ee.Image.cat(img.select([64])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,8,4).millis());
var chl66 = ee.Image.cat(img.select([65])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,8,12).millis());
var chl67 = ee.Image.cat(img.select([66])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,8,20).millis());
var chl68 = ee.Image.cat(img.select([67])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,8,28).millis());
var chl69 = ee.Image.cat(img.select([68])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,9,5).millis());
var chl70 = ee.Image.cat(img.select([69])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,9,13).millis());
var chl71 = ee.Image.cat(img.select([70])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,9,21).millis());
var chl72 = ee.Image.cat(img.select([71])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,9,29).millis());
var chl73 = ee.Image.cat(img.select([72])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,10,7).millis());
var chl74 = ee.Image.cat(img.select([73])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,10,15).millis());
var chl75 = ee.Image.cat(img.select([74])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,10,23).millis());

/*
var chl76 = ee.Image.cat(img.select([75])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,10,31).millis());
var chl77 = ee.Image.cat(img.select([76])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,11,8).millis());
var chl78 = ee.Image.cat(img.select([77])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,11,16).millis());
var chl79 = ee.Image.cat(img.select([78])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,11,24).millis());
var chl80 = ee.Image.cat(img.select([79])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,12,2).millis());
var chl81 = ee.Image.cat(img.select([80])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,12,10).millis());
var chl82 = ee.Image.cat(img.select([81])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,12,18).millis());
var chl83 = ee.Image.cat(img.select([82])).rename('chlor_a').set(t,ee.Date.fromYMD(2025,12,26).millis());
var chl84 = ee.Image.cat(img.select([83])).rename('chlor_a').set(t,ee.Date.fromYMD(2026,1,3).millis());
*/

return ee.ImageCollection.fromImages(
[chl01,chl02,chl03,chl04,chl05,chl06,chl07,chl08,chl09,chl10,
chl11,chl12,chl13,chl14,chl15,chl16,chl17,chl18,chl19,chl20,
chl21,chl22,chl23,chl24,chl25,chl26,chl27,chl28,chl29,chl30,
chl31,chl32,chl33,chl34,chl35,chl36,chl37,chl38,chl39,chl40,
chl41,chl42,chl43,chl44,chl45,chl46,chl47,chl48,chl49,chl50,
chl51,chl52,chl53,chl54,chl55,chl56,chl57,chl58,chl59,chl60,
chl61,chl62,chl63,chl64,chl65,chl66,chl67,chl68,chl69,chl70,
chl71,chl72,chl73,chl74,chl75

/*
,chl76,chl77,chl78,chl79,chl80,
chl81,chl82,chl83,chl84
*/
])
//.map(function(img){return img.select(['b.*'],['chl'])})
.map(function(img){return img.divide(100).set(t,img.get(t))})  };

//
var pace_oci_8d_global_chlor_a = coll_chl(chl_a);
exports. pace_oci_8d_global_chlor_a =  pace_oci_8d_global_chlor_a;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REMOTE SENSING REFLECTANCE (RRS)

// DOMAIN: CONTINENTAL USA (CONUS) | SPATIAL RES: 4 KM  | TEMPORAL RES: MONTHLY | all from version 3.1 reprocessing

var pace_oci_rrs_mt_conus_202403 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202403_4km").set(t,ee.Date.fromYMD(2024,3,31).millis()), 
    pace_oci_rrs_mt_conus_202404 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202404_4km").set(t,ee.Date.fromYMD(2024,4,30).millis()),
    pace_oci_rrs_mt_conus_202405 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202405_4km").set(t,ee.Date.fromYMD(2024,5,31).millis()),
    pace_oci_rrs_mt_conus_202406 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202406_4km").set(t,ee.Date.fromYMD(2024,6,30).millis()),
    pace_oci_rrs_mt_conus_202407 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202407_4km").set(t,ee.Date.fromYMD(2024,7,31).millis()),
    pace_oci_rrs_mt_conus_202408 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202408_4km").set(t,ee.Date.fromYMD(2024,8,31).millis()),
    pace_oci_rrs_mt_conus_202409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202409_4km").set(t,ee.Date.fromYMD(2024,9,30).millis()),
    pace_oci_rrs_mt_conus_202410 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202410_4km").set(t,ee.Date.fromYMD(2024,10,31).millis()),
    pace_oci_rrs_mt_conus_202411 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202411_4km").set(t,ee.Date.fromYMD(2024,11,30).millis()),
    pace_oci_rrs_mt_conus_202412 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202412_4km").set(t,ee.Date.fromYMD(2024,12,31).millis()),
    pace_oci_rrs_mt_conus_202501 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202501_4km").set(t,ee.Date.fromYMD(2025,1,31).millis()),
    pace_oci_rrs_mt_conus_202502 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202502_4km").set(t,ee.Date.fromYMD(2025,2,28).millis()),
    pace_oci_rrs_mt_conus_202503 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202503_4km").set(t,ee.Date.fromYMD(2025,3,31).millis()),
    pace_oci_rrs_mt_conus_202504 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202504_4km").set(t,ee.Date.fromYMD(2025,4,30).millis()),
    pace_oci_rrs_mt_conus_202505 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202505_4km").set(t,ee.Date.fromYMD(2025,5,31).millis()),
    pace_oci_rrs_mt_conus_202506 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202506_4km").set(t,ee.Date.fromYMD(2025,6,30).millis()),
    pace_oci_rrs_mt_conus_202507 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202507_4km").set(t,ee.Date.fromYMD(2025,7,31).millis()),
    pace_oci_rrs_mt_conus_202508 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202508_4km").set(t,ee.Date.fromYMD(2025,8,31).millis()),
    pace_oci_rrs_mt_conus_202509 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/conus_04km/conus_pace_oci_rrs_202509_4km").set(t,ee.Date.fromYMD(2025,9,30).millis());

exports.pace_oci_rrs_mt_conus_202403 = pace_oci_rrs_mt_conus_202403;
exports.pace_oci_rrs_mt_conus_202404 = pace_oci_rrs_mt_conus_202404;
exports.pace_oci_rrs_mt_conus_202405 = pace_oci_rrs_mt_conus_202405;
exports.pace_oci_rrs_mt_conus_202406 = pace_oci_rrs_mt_conus_202406;
exports.pace_oci_rrs_mt_conus_202407 = pace_oci_rrs_mt_conus_202407;
exports.pace_oci_rrs_mt_conus_202408 = pace_oci_rrs_mt_conus_202408;
exports.pace_oci_rrs_mt_conus_202409 = pace_oci_rrs_mt_conus_202409;
exports.pace_oci_rrs_mt_conus_202410 = pace_oci_rrs_mt_conus_202410;
exports.pace_oci_rrs_mt_conus_202411 = pace_oci_rrs_mt_conus_202411;
exports.pace_oci_rrs_mt_conus_202412 = pace_oci_rrs_mt_conus_202412;

exports.pace_oci_rrs_mt_conus_202501 = pace_oci_rrs_mt_conus_202501;
exports.pace_oci_rrs_mt_conus_202502 = pace_oci_rrs_mt_conus_202502;
exports.pace_oci_rrs_mt_conus_202503 = pace_oci_rrs_mt_conus_202503;
exports.pace_oci_rrs_mt_conus_202504 = pace_oci_rrs_mt_conus_202504;
exports.pace_oci_rrs_mt_conus_202505 = pace_oci_rrs_mt_conus_202505;
exports.pace_oci_rrs_mt_conus_202506 = pace_oci_rrs_mt_conus_202506;
exports.pace_oci_rrs_mt_conus_202507 = pace_oci_rrs_mt_conus_202507;
exports.pace_oci_rrs_mt_conus_202508 = pace_oci_rrs_mt_conus_202508;
exports.pace_oci_rrs_mt_conus_202509 = pace_oci_rrs_mt_conus_202509;

//

var pace_oci_rrs_mt_conus = ee.ImageCollection.fromImages([
                                                    pace_oci_rrs_mt_conus_202403, pace_oci_rrs_mt_conus_202404,pace_oci_rrs_mt_conus_202405,pace_oci_rrs_mt_conus_202406,pace_oci_rrs_mt_conus_202407,
                                                    pace_oci_rrs_mt_conus_202408, pace_oci_rrs_mt_conus_202409,pace_oci_rrs_mt_conus_202410,pace_oci_rrs_mt_conus_202411,pace_oci_rrs_mt_conus_202412,
                                                    pace_oci_rrs_mt_conus_202501,pace_oci_rrs_mt_conus_202502,pace_oci_rrs_mt_conus_202503,pace_oci_rrs_mt_conus_202504,pace_oci_rrs_mt_conus_202505,
                                                    pace_oci_rrs_mt_conus_202506,pace_oci_rrs_mt_conus_202507,pace_oci_rrs_mt_conus_202508,pace_oci_rrs_mt_conus_202509])
                                                    .map(function(img){return img.updateMask(img.gt(-32767))
                                                    .multiply(0.000002).add(0.05).multiply(10000).toInt16()
                                                    //.select(a.bands_oci_rrs_orig, a.bands_oci_rrs_mod)
                                                    .set(t,img.get(t))});

exports.pace_oci_rrs_mt_conus = pace_oci_rrs_mt_conus;

/*
var test = pace_oci_rrs_mt_conus.filterDate("2024-03-31T00:00","2024-03-31T23:59").select(a.bands_oci_rrs_mod)
print(a.wl_modis)
print(test)
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: EAST AFRICA | SPATIAL RES: 4 KM  | TEMPORAL RES: MONTHLY | all from version 3.1 reprocessing

var pace_oci_rrs_mt_africa_east_202403 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202403_4km").set(t,ee.Date.fromYMD(2024,3,31).millis()), 
    pace_oci_rrs_mt_africa_east_202404 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202404_4km").set(t,ee.Date.fromYMD(2024,4,30).millis()),
    pace_oci_rrs_mt_africa_east_202405 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202405_4km").set(t,ee.Date.fromYMD(2024,5,31).millis()),
    pace_oci_rrs_mt_africa_east_202406 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202406_4km").set(t,ee.Date.fromYMD(2024,6,30).millis()),
    pace_oci_rrs_mt_africa_east_202407 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202407_4km").set(t,ee.Date.fromYMD(2024,7,31).millis()),
    pace_oci_rrs_mt_africa_east_202408 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202408_4km").set(t,ee.Date.fromYMD(2024,8,31).millis()),
    pace_oci_rrs_mt_africa_east_202409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202409_4km").set(t,ee.Date.fromYMD(2024,9,30).millis()),
    pace_oci_rrs_mt_africa_east_202410 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202410_4km").set(t,ee.Date.fromYMD(2024,10,31).millis()),
    pace_oci_rrs_mt_africa_east_202411 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202411_4km").set(t,ee.Date.fromYMD(2024,11,30).millis()),
    pace_oci_rrs_mt_africa_east_202412 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202412_4km").set(t,ee.Date.fromYMD(2024,12,31).millis()),
    pace_oci_rrs_mt_africa_east_202501 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202501_4km").set(t,ee.Date.fromYMD(2025,1,31).millis()),
    pace_oci_rrs_mt_africa_east_202502 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202502_4km").set(t,ee.Date.fromYMD(2025,2,28).millis()),
    pace_oci_rrs_mt_africa_east_202503 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202503_4km").set(t,ee.Date.fromYMD(2025,3,31).millis()),
    pace_oci_rrs_mt_africa_east_202504 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202504_4km").set(t,ee.Date.fromYMD(2025,4,30).millis()),
    pace_oci_rrs_mt_africa_east_202505 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202505_4km").set(t,ee.Date.fromYMD(2025,5,31).millis()),
    pace_oci_rrs_mt_africa_east_202506 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202506_4km").set(t,ee.Date.fromYMD(2025,6,30).millis()),
    pace_oci_rrs_mt_africa_east_202507 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202507_4km").set(t,ee.Date.fromYMD(2025,7,31).millis()),
    pace_oci_rrs_mt_africa_east_202508 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202508_4km").set(t,ee.Date.fromYMD(2025,8,31).millis()),
    pace_oci_rrs_mt_africa_east_202509 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202509_4km").set(t,ee.Date.fromYMD(2025,9,30).millis());

exports.pace_oci_rrs_mt_africa_east_202403 = pace_oci_rrs_mt_africa_east_202403;
exports.pace_oci_rrs_mt_africa_east_202404 = pace_oci_rrs_mt_africa_east_202404;
exports.pace_oci_rrs_mt_africa_east_202405 = pace_oci_rrs_mt_africa_east_202405;
exports.pace_oci_rrs_mt_africa_east_202406 = pace_oci_rrs_mt_africa_east_202406;
exports.pace_oci_rrs_mt_africa_east_202407 = pace_oci_rrs_mt_africa_east_202407;
exports.pace_oci_rrs_mt_africa_east_202408 = pace_oci_rrs_mt_africa_east_202408;
exports.pace_oci_rrs_mt_africa_east_202409 = pace_oci_rrs_mt_africa_east_202409;
exports.pace_oci_rrs_mt_africa_east_202410 = pace_oci_rrs_mt_africa_east_202410;
exports.pace_oci_rrs_mt_africa_east_202411 = pace_oci_rrs_mt_africa_east_202411;
exports.pace_oci_rrs_mt_africa_east_202412 = pace_oci_rrs_mt_africa_east_202412;

exports.pace_oci_rrs_mt_africa_east_202501 = pace_oci_rrs_mt_africa_east_202501;
exports.pace_oci_rrs_mt_africa_east_202502 = pace_oci_rrs_mt_africa_east_202502;
exports.pace_oci_rrs_mt_africa_east_202503 = pace_oci_rrs_mt_africa_east_202503;
exports.pace_oci_rrs_mt_africa_east_202504 = pace_oci_rrs_mt_africa_east_202504;
exports.pace_oci_rrs_mt_africa_east_202505 = pace_oci_rrs_mt_africa_east_202505;
exports.pace_oci_rrs_mt_africa_east_202506 = pace_oci_rrs_mt_africa_east_202506;
exports.pace_oci_rrs_mt_africa_east_202507 = pace_oci_rrs_mt_africa_east_202507;
exports.pace_oci_rrs_mt_africa_east_202508 = pace_oci_rrs_mt_africa_east_202508;
exports.pace_oci_rrs_mt_africa_east_202509 = pace_oci_rrs_mt_africa_east_202509;

//

var pace_oci_rrs_mt_africa_east = ee.ImageCollection.fromImages([
                                                    pace_oci_rrs_mt_africa_east_202403, pace_oci_rrs_mt_africa_east_202404,pace_oci_rrs_mt_africa_east_202405,pace_oci_rrs_mt_africa_east_202406,pace_oci_rrs_mt_africa_east_202407,
                                                    pace_oci_rrs_mt_africa_east_202408, pace_oci_rrs_mt_africa_east_202409,pace_oci_rrs_mt_africa_east_202410,pace_oci_rrs_mt_africa_east_202411,pace_oci_rrs_mt_africa_east_202412,
                                                    pace_oci_rrs_mt_africa_east_202501,pace_oci_rrs_mt_africa_east_202502,pace_oci_rrs_mt_africa_east_202503,pace_oci_rrs_mt_africa_east_202504,pace_oci_rrs_mt_africa_east_202505,
                                                    pace_oci_rrs_mt_africa_east_202506,pace_oci_rrs_mt_africa_east_202507,pace_oci_rrs_mt_africa_east_202508,pace_oci_rrs_mt_africa_east_202509])
                                                    .map(function(img){return img.updateMask(img.gt(-32767))
                                                    .multiply(0.000002).add(0.05).multiply(10000).toInt16()
                                                    //.select(a.bands_oci_rrs_orig, a.bands_oci_rrs_mod)
                                                    .set(t,img.get(t))});

exports.pace_oci_rrs_mt_africa_east = pace_oci_rrs_mt_africa_east;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOMAIN: WORLD | SPATIAL RES: 10 KM  | TEMPORAL RES: MONTHLY | all from version 3.1 reprocessing

var pace_oci_rrs_mt_globe_202403 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202403").set(t,ee.Date.fromYMD(2024,3,31).millis()), 
    pace_oci_rrs_mt_globe_202404 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202404").set(t,ee.Date.fromYMD(2024,4,30).millis()),
    pace_oci_rrs_mt_globe_202405 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202405").set(t,ee.Date.fromYMD(2024,5,31).millis()),
    pace_oci_rrs_mt_globe_202406 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202406").set(t,ee.Date.fromYMD(2024,6,30).millis()),
    pace_oci_rrs_mt_globe_202407 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202407").set(t,ee.Date.fromYMD(2024,7,31).millis()),
    pace_oci_rrs_mt_globe_202408 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202408").set(t,ee.Date.fromYMD(2024,8,31).millis()),
    pace_oci_rrs_mt_globe_202409 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202409").set(t,ee.Date.fromYMD(2024,9,30).millis()),
    pace_oci_rrs_mt_globe_202410 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202410").set(t,ee.Date.fromYMD(2024,10,31).millis()),
    pace_oci_rrs_mt_globe_202411 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202411").set(t,ee.Date.fromYMD(2024,11,30).millis()),
    pace_oci_rrs_mt_globe_202412 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202412").set(t,ee.Date.fromYMD(2024,12,31).millis()),
    pace_oci_rrs_mt_globe_202501 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202501").set(t,ee.Date.fromYMD(2025,1,31).millis()),
    pace_oci_rrs_mt_globe_202502 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202502").set(t,ee.Date.fromYMD(2025,2,28).millis()),
    pace_oci_rrs_mt_globe_202503 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202503").set(t,ee.Date.fromYMD(2025,3,31).millis()),
    pace_oci_rrs_mt_globe_202504 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202504").set(t,ee.Date.fromYMD(2025,4,30).millis()),
    pace_oci_rrs_mt_globe_202505 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202505").set(t,ee.Date.fromYMD(2025,5,31).millis()),
    pace_oci_rrs_mt_globe_202506 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202506").set(t,ee.Date.fromYMD(2025,6,30).millis()),
    pace_oci_rrs_mt_globe_202507 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202507").set(t,ee.Date.fromYMD(2025,7,31).millis()),
    pace_oci_rrs_mt_globe_202508 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202508").set(t,ee.Date.fromYMD(2025,8,31).millis()),
    pace_oci_rrs_mt_globe_202509 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/global_10km/globe_pace_oci_rrs_v3_1_202509").set(t,ee.Date.fromYMD(2025,9,30).millis());

exports.pace_oci_rrs_mt_globe_202403 = pace_oci_rrs_mt_globe_202403;
exports.pace_oci_rrs_mt_globe_202404 = pace_oci_rrs_mt_globe_202404;
exports.pace_oci_rrs_mt_globe_202405 = pace_oci_rrs_mt_globe_202405;
exports.pace_oci_rrs_mt_globe_202406 = pace_oci_rrs_mt_globe_202406;
exports.pace_oci_rrs_mt_globe_202407 = pace_oci_rrs_mt_globe_202407;
exports.pace_oci_rrs_mt_globe_202408 = pace_oci_rrs_mt_globe_202408;
exports.pace_oci_rrs_mt_globe_202409 = pace_oci_rrs_mt_globe_202409;
exports.pace_oci_rrs_mt_globe_202410 = pace_oci_rrs_mt_globe_202410;
exports.pace_oci_rrs_mt_globe_202411 = pace_oci_rrs_mt_globe_202411;
exports.pace_oci_rrs_mt_globe_202412 = pace_oci_rrs_mt_globe_202412;

exports.pace_oci_rrs_mt_globe_202501 = pace_oci_rrs_mt_globe_202501;
exports.pace_oci_rrs_mt_globe_202502 = pace_oci_rrs_mt_globe_202502;
exports.pace_oci_rrs_mt_globe_202503 = pace_oci_rrs_mt_globe_202503;
exports.pace_oci_rrs_mt_globe_202504 = pace_oci_rrs_mt_globe_202504;
exports.pace_oci_rrs_mt_globe_202505 = pace_oci_rrs_mt_globe_202505;
exports.pace_oci_rrs_mt_globe_202506 = pace_oci_rrs_mt_globe_202506;
exports.pace_oci_rrs_mt_globe_202507 = pace_oci_rrs_mt_globe_202507;
exports.pace_oci_rrs_mt_globe_202508 = pace_oci_rrs_mt_globe_202508;
exports.pace_oci_rrs_mt_globe_202509 = pace_oci_rrs_mt_globe_202509;

//

var pace_oci_rrs_mt_globe = ee.ImageCollection.fromImages([
                              pace_oci_rrs_mt_globe_202403, pace_oci_rrs_mt_globe_202404,pace_oci_rrs_mt_globe_202405,pace_oci_rrs_mt_globe_202406,pace_oci_rrs_mt_globe_202407,
                              pace_oci_rrs_mt_globe_202408, pace_oci_rrs_mt_globe_202409,pace_oci_rrs_mt_globe_202410,pace_oci_rrs_mt_globe_202411,pace_oci_rrs_mt_globe_202412,
                              pace_oci_rrs_mt_globe_202501, pace_oci_rrs_mt_globe_202502,pace_oci_rrs_mt_globe_202503,pace_oci_rrs_mt_globe_202504,pace_oci_rrs_mt_globe_202505,
                              pace_oci_rrs_mt_globe_202506, pace_oci_rrs_mt_globe_202507,pace_oci_rrs_mt_globe_202508,pace_oci_rrs_mt_globe_202509])
                              .map(function(img){return img.updateMask(img.gt(-32767))
                              .multiply(0.000002).add(0.05).multiply(10000).toInt16()
                              .reproject('EPSG:4326', null, 10000)
                              //.select(a.bands_oci_rrs_v3_1_orig, a.bands_oci_rrs_v3_1_mod)
                              .set(t,img.get(t))});

exports.pace_oci_rrs_mt_globe = pace_oci_rrs_mt_globe;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MODIS BURN SCAR DATA | SPATIAL RES: 0.5 KM  | TEMPORAL RES: MONTHLY
// SRC: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD64A1

var mcd64a1 = ee.ImageCollection('MODIS/061/MCD64A1');
var mcd64a1_202403_202503 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2024-03-01', '2025-03-31'));
var mcd64a1_202403_202504 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2024-03-01', '2025-04-30'));
var mcd64a1_202403_202505 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2024-03-01', '2025-05-31'));

var mcd64a1_2021 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2021-01-01', '2021-12-31')).median();
var mcd64a1_2022 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2022-01-01', '2022-12-31')).median();
var mcd64a1_2023 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2023-01-01', '2023-12-31')).median();
var mcd64a1_2024 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2024-01-01', '2024-12-31')).median();
var mcd64a1_2025 = mcd64a1.select('BurnDate').filter(ee.Filter.date('2025-01-01', '2025-12-31')).median();

exports.mcd64a1_2021 = mcd64a1_2021;
exports.mcd64a1_2022 = mcd64a1_2022;
exports.mcd64a1_2023 = mcd64a1_2023;
exports.mcd64a1_2024 = mcd64a1_2024;
exports.mcd64a1_2025 = mcd64a1_2025;


exports.mcd64a1 = mcd64a1;
exports.mcd64a1_202403_202503 = mcd64a1_202403_202503;
exports.mcd64a1_202403_202504 = mcd64a1_202403_202504;
exports.mcd64a1_202403_202505 = mcd64a1_202403_202505;

var viz_mcd64a1 = {min:1, max: 365, palette: ['red']};
exports.viz_mcd64a1 = viz_mcd64a1;

var vnp64a1 = ee.ImageCollection('NOAA/VIIRS/001/VNP64A1');
var vnp64a1_2021 = vnp64a1.select('BurnDate').filter(ee.Filter.date('2021-01-01', '2021-12-31'));
var vnp64a1_2022 = vnp64a1.select('BurnDate').filter(ee.Filter.date('2022-01-01', '2022-12-31'));
var vnp64a1_2023 = vnp64a1.select('BurnDate').filter(ee.Filter.date('2023-01-01', '2023-12-31'));
var vnp64a1_2024 = vnp64a1.select('BurnDate').filter(ee.Filter.date('2024-01-01', '2024-12-31'));
var vnp64a1_2025 = vnp64a1.select('BurnDate').filter(ee.Filter.date('2025-01-01', '2025-12-31'));

exports.vnp64a1 = vnp64a1;
exports.vnp64a1_2021 = vnp64a1_2021;
exports.vnp64a1_2022 = vnp64a1_2022;
exports.vnp64a1_2023 = vnp64a1_2023;
exports.vnp64a1_2024 = vnp64a1_2024;
exports.vnp64a1_2025 = vnp64a1_2025;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fire(img, roi) {return img.toInt8().reduceToVectors({
geometry: roi, scale: 500, geometryType: 'polygon', eightConnected: false})}

exports.fire = fire;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NORTH AMERICA LAND COVER DATA FOR 2020 | SPATIAL RES: 30 M
// SRC: https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2020_REL_NALCMS

// ALL 19 LAND COVER CLASSES
var nalc_2020 = ee.Image('USGS/NLCD_RELEASES/2020_REL/NALCMS');
exports.nalc_2020 = nalc_2020;

// CROPLAND ONLY
var nalc_2020_ag = nalc_2020.updateMask(nalc_2020.eq(15));
exports.nalc_2020_ag = nalc_2020_ag;

var viz_nalc = {palette: [
      '033e00',  // 1  Temperate or sub-polar needleleaf forest
      '939b71',  // 2  Sub-polar taiga needleleaf forest
      '196d12',  // 3  Tropical or sub-tropical broadleaf evergreen forest
      '1fab01',  // 4  Tropical or sub-tropical broadleaf deciduous forest
      '5b725c',  // 5  Temperate or sub-polar broadleaf deciduous forest
      '6b7d2c',  // 6  Mixed forest
      'b29d29',  // 7  Tropical or sub-tropical shrubland
      'b48833',  // 8  Temperate or sub-polar shrubland
      'e9da5d',  // 9  Tropical or sub-tropical grassland
      'e0cd88',  // 10  Temperate or sub-polar grassland
      'a07451',  // 11  Sub-polar or polar shrubland-lichen-moss
      'bad292',  // 12  Sub-polar or polar grassland-lichen-moss
      '3f8970',  // 13  Sub-polar or polar barren-lichen-moss
      '6ca289',  // 14  Wetland
      'e6ad6a',  // 15  Cropland
      'a9abae',  // 16  Barren land
      'db2126',  // 17  Urban and built-up
      '4c73a1',  // 18  Water
      'fff7fe'],  // 19  Snow and ice
  min: 1, max: 19};

exports.viz_nalc = viz_nalc;

var viz_nalc_ag = {palette: 'e6ad6a'};
exports.viz_nalc_ag = viz_nalc_ag;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// US DEPT OF AGRICULTURE (USDA) / NATIONAL AGRICULTURE STATISTICS SERVICE (NASS) CROPLAND DATA LAYER (CDL)
// SRC: https://code.earthengine.google.com/?scriptPath=Examples%3ADatasets%2FUSDA%2FUSDA_NASS_CDL

var us_cdl_2024 = ee.ImageCollection('USDA/NASS/CDL').filter(ee.Filter.date('2024-01-01', '2024-12-31')).first().select('cropland');
exports.us_cdl_2024 = us_cdl_2024;

/* CDL values:

Value	Color	Description

0	#000000	Background
1	#ffd400	Corn
2	#ff2626	Cotton
3	#00a9e6	Rice
4	#ff9e0f	Sorghum
5	#267300	Soybeans
6	#ffff00	Sunflower
10	#70a800	Peanuts
11	#00af4d	Tobacco
12	#e0a60f	Sweet Corn
13	#e0a60f	Pop or Orn Corn
14	#80d4ff	Mint
21	#e2007f	Barley
22	#8a6453	Durum Wheat
23	#d9b56c	Spring Wheat
24	#a87000	Winter Wheat
25	#d69dbc	Other Small Grains
26	#737300	Dbl Crop WinWht/Soybeans
27	#ae017e	Rye
28	#a15889	Oats
29	#73004c	Millet
30	#d69dbc	Speltz
31	#d1ff00	Canola
32	#8099ff	Flaxseed
33	#d6d600	Safflower
34	#d1ff00	Rape Seed
35	#00af4d	Mustard
36	#ffa8e3	Alfalfa
37	#a5f58d	Other Hay/Non Alfalfa
38	#00af4d	Camelina
39	#d69dbc	Buckwheat
41	#a900e6	Sugarbeets
42	#a80000	Dry Beans
43	#732600	Potatoes
44	#00af4d	Other Crops
45	#b380ff	Sugarcane
46	#732600	Sweet Potatoes
47	#ff6666	Misc Vegs & Fruits
48	#ff6666	Watermelons
49	#ffcc66	Onions
50	#ff6666	Cucumbers
51	#00af4d	Chick Peas
52	#00deb0	Lentils
53	#55ff00	Peas
54	#f5a27a	Tomatoes
55	#ff6666	Caneberries
56	#00af4d	Hops
57	#80d4ff	Herbs
58	#e8beff	Clover/Wildflowers
59	#b2ffde	Sod/Grass Seed
60	#00af4d	Switchgrass
61	#bfbf7a	Fallow/Idle Cropland
63	#95ce93	Forest
64	#c7d79e	Shrubland
65	#ccbfa3	Barren
66	#ff00ff	Cherries
67	#ff91ab	Peaches
68	#b90050	Apples
69	#704489	Grapes
70	#007878	Christmas Trees
71	#b39c70	Other Tree Crops
72	#ffff80	Citrus
74	#b6705c	Pecans
75	#00a884	Almonds
76	#ebd6b0	Walnuts
77	#b39c70	Pears
81	#f7f7f7	Clouds/No Data
82	#9c9c9c	Developed
83	#4d70a3	Water
87	#80b3b3	Wetlands
88	#e9ffbe	Nonag/Undefined
92	#00ffff	Aquaculture
111	#4d70a3	Open Water
112	#d4e3fc	Perennial Ice/Snow
121	#9c9c9c	Developed/Open Space
122	#9c9c9c	Developed/Low Intensity
123	#9c9c9c	Developed/Med Intensity
124	#9c9c9c	Developed/High Intensity
131	#ccbfa3	Barren
141	#95ce93	Deciduous Forest
142	#95ce93	Evergreen Forest
143	#95ce93	Mixed Forest
152	#c7d79e	Shrubland
176	#e9ffbe	Grass/Pasture
190	#80b3b3	Woody Wetlands
195	#80b3b3	Herbaceous Wetlands
204	#00ff8c	Pistachios
205	#d69dbc	Triticale
206	#ff6666	Carrots
207	#ff6666	Asparagus
208	#ff6666	Garlic
209	#ff6666	Cantaloupes
210	#ff91ab	Prunes
211	#344a34	Olives
212	#e67525	Oranges
213	#ff6666	Honeydew Melons
214	#ff6666	Broccoli
215	#66994d	Avocados
216	#ff6666	Peppers
217	#b39c70	Pomegranates
218	#ff91ab	Nectarines
219	#ff6666	Greens
220	#ff91ab	Plums
221	#ff6666	Strawberries
222	#ff6666	Squash
223	#ff91ab	Apricots
224	#00af4d	Vetch
225	#ffd400	Dbl Crop WinWht/Corn
226	#ffd400	Dbl Crop Oats/Corn
227	#ff6666	Lettuce
228	#ffd400	Dbl Crop Triticale/Corn
229	#ff6666	Pumpkins
230	#8a6453	Dbl Crop Lettuce/Durum Wht
231	#ff6666	Dbl Crop Lettuce/Cantaloupe
232	#ff2626	Dbl Crop Lettuce/Cotton
233	#e2007f	Dbl Crop Lettuce/Barley
234	#ff9e0f	Dbl Crop Durum Wht/Sorghum
235	#ff9e0f	Dbl Crop Barley/Sorghum
236	#a87000	Dbl Crop WinWht/Sorghum
237	#ffd400	Dbl Crop Barley/Corn
238	#a87000	Dbl Crop WinWht/Cotton
239	#267300	Dbl Crop Soybeans/Cotton
240	#267300	Dbl Crop Soybeans/Oats
241	#ffd400	Dbl Crop Corn/Soybeans
242	#000099	Blueberries
243	#ff6666	Cabbage
244	#ff6666	Cauliflower
245	#ff6666	Celery
246	#ff6666	Radishes
247	#ff6666	Turnips
248	#ff6666	Eggplants
249	#ff6666	Gourds
250	#ff6666	Cranberries
254	#267300	Dbl Crop Barley/Soybeans

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////