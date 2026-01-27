//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY PACE OCI RRS DATA: EAST AFRICA
// last updated: 19.11.2025

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/sample_sites.js');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rrs = a.pace_oci_rrs_mt_africa_east.select(b.bands_oci_rrs_orig,b.bands_oci_rrs_mod);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var img_00 = ee.Image(rrs.toList(rrs.size()).get(0));
var img_01 = ee.Image(rrs.toList(rrs.size()).get(1));
var img_02 = ee.Image(rrs.toList(rrs.size()).get(2));
var img_03 = ee.Image(rrs.toList(rrs.size()).get(3));
var img_04 = ee.Image(rrs.toList(rrs.size()).get(4));
var img_05 = ee.Image(rrs.toList(rrs.size()).get(5));
var img_06 = ee.Image(rrs.toList(rrs.size()).get(6));
var img_07 = ee.Image(rrs.toList(rrs.size()).get(7));
var img_08 = ee.Image(rrs.toList(rrs.size()).get(8));
var img_09 = ee.Image(rrs.toList(rrs.size()).get(9));
var img_10 = ee.Image(rrs.toList(rrs.size()).get(10));
var img_11 = ee.Image(rrs.toList(rrs.size()).get(11));
var img_12 = ee.Image(rrs.toList(rrs.size()).get(12));
var img_13 = ee.Image(rrs.toList(rrs.size()).get(13));
var img_14 = ee.Image(rrs.toList(rrs.size()).get(14));
var img_15 = ee.Image(rrs.toList(rrs.size()).get(15));
var img_16 = ee.Image(rrs.toList(rrs.size()).get(16));
var img_17 = ee.Image(rrs.toList(rrs.size()).get(17));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var viz0 = {"bands":['ρ0652', 'ρ0555', 'ρ0475'],"min":-103.16,"max":109.441}; // palette 1
var viz = {min: [-58, -57, -38], max: [53, 89, 149], bands: ['ρ0652', 'ρ0555', 'ρ0475']}; // palette 2

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(32.918, -0.964, 8);
Map.centerObject(c.roi_afr_east, 6);

Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(0)), viz, "PACE OCI - RRS (2024-03)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(1)), viz, "PACE OCI - RRS (2024-04)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(2)), viz, "PACE OCI - RRS (2024-05)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(3)), viz, "PACE OCI - RRS (2024-06)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(4)), viz, "PACE OCI - RRS (2024-07)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(5)), viz, "PACE OCI - RRS (2024-08)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(6)), viz, "PACE OCI - RRS (2024-09)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(7)), viz, "PACE OCI - RRS (2024-10)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(8)), viz, "PACE OCI - RRS (2024-11)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(9)), viz, "PACE OCI - RRS (2024-12)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(10)), viz, "PACE OCI - RRS (2025-01)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(11)), viz, "PACE OCI - RRS (2025-02)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(12)), viz, "PACE OCI - RRS (2025-03)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(13)), viz, "PACE OCI - RRS (2025-04)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(14)), viz, "PACE OCI - RRS (2025-05)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(15)), viz, "PACE OCI - RRS (2025-06)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(16)), viz, "PACE OCI - RRS (2025-07)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(17)), viz, "PACE OCI - RRS (2025-08)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(17)), viz, "PACE OCI - RRS (2025-08)", 0);
Map.addLayer(ee.Image(rrs.toList(rrs.size()).get(18)), viz, "PACE OCI - RRS (2025-09)", 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////