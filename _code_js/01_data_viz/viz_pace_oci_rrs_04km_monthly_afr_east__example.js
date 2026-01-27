/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var img1 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_rrs/africa_04km/africa_east_pace_oci_rrs_202403_4km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var viz = {"opacity":0.75,"bands":["b1","b2","b3"],"min":-36828,"max":-27525};

Map.setCenter(33.972, -1.401, 7);
Map.addLayer(img1, viz, "PACE OCI - 2024-03", 1);