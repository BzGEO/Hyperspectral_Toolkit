/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var img = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_02km/mes_pace_oci_sr_202504_02km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 30.09.2025

img = img.updateMask(img.gte(0)).multiply(10000).toInt16();

Map.setCenter(-86.993, 16.856, 7);
Map.addLayer(img, {"bands":["b120","b110","b60"],"min":155,"max":4320}, "PACE_OCI_SR_2025-04", 1);
Map.addLayer(img, {"bands":["b120","b110","b60"],"min":[-872,-1332,-107],"max":[3061,4610,1173]}, "PACE_OCI_SR_2025-04", 0);