/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var underc = ee.FeatureCollection("users/servirbz/aoi/us/us_neon_site_underc_gcs");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 12.04.2025

var underc_ln = ee.Image().byte().paint({featureCollection:underc,width:2});

print("UNDERC");
print("Area in ha.:");
print(ee.Number(ee.FeatureCollection(underc).geometry().area().divide(100000)));
print("Area in km2:");
print(ee.Number(ee.FeatureCollection(underc).geometry().area().divide(1000000)));


Map.centerObject(underc, 12);
Map.setOptions('HYBRID');
Map.addLayer(underc_ln, {palette: ['red']}, "Boundary_UNDERC", 1);
