// Last updated: 15.10.2025

var huc = ee.FeatureCollection('USGS/WBD/2017/HUC08').filter(ee.Filter.eq("huc8","18020116"));

print("Area in sq. km:");
print(ee.Number(ee.FeatureCollection(huc).geometry().area().divide(1000000)));

Map.centerObject(huc, 10);
Map.addLayer(huc, {color: 'red'}, "Clear Lake", 1);