/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Last updated: 15.10.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var b = require('users/servirbz/packages:img_recent'); // imports the img_recent package

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var roi = ee.FeatureCollection('USGS/WBD/2017/HUC08').filter(ee.Filter.eq("huc8","18020116"));

print("Area in sq. km:");
print(ee.Number(ee.FeatureCollection(roi).geometry().area().divide(1000000)));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var emit = ee.ImageCollection('NASA/EMIT/L2A/RFL').select(ee.List.sequence(0, 284))
             .filterDate("2023-01-01", "2025-12-31").filterBounds(roi);
*/

//b.most_recent("ISS EMIT", b.emit, roi);

//var img1 = a.emit_sr2(roi,"2022-01-01T00:00","2025-12-31T23:59");
//var img1 = a.emit_sr2(roi,"2025-06-15T00:00","2025-06-15T23:59");

var img1 = ee.ImageCollection('projects/mldp-partners/assets/preview/efm_v2_preview')
.filterDate('2024-01-01T00:00', '2024-12-31T23:59').filterBounds(roi).mosaic().clip(roi).reproject('EPSG:4326', null, 100);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Unsupervised classification
function unsuper(img, no) {
return img.cluster(ee.Clusterer.wekaKMeans(no).train(img.sample({region:roi,scale:100,numPixels:300})));}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.centerObject(roi, 10);
Map.addLayer(img1, {}, 'EFM (2024)', 0);

Map.addLayer(unsuper(img1, 3).randomVisualizer(), {},'Unsupervised classif. (3)', 0);
Map.addLayer(unsuper(img1, 5).randomVisualizer(), {},'Unsupervised classif. (5)', 0);
Map.addLayer(unsuper(img1, 7).randomVisualizer(), {},'Unsupervised classif. (7)', 0);
Map.addLayer(unsuper(img1, 10).randomVisualizer(), {},'Unsupervised classif. (10)', 1);
Map.addLayer(unsuper(img1, 15).randomVisualizer(), {},'Unsupervised classif. (15)', 0);
Map.addLayer(unsuper(img1, 20).randomVisualizer(), {},'Unsupervised classif. (20)', 0);
Map.addLayer(unsuper(img1, 25).randomVisualizer(), {},'Unsupervised classif. (25)', 0);
Map.addLayer(unsuper(img1, 30).randomVisualizer(), {},'Unsupervised classif. (30)', 0);

Map.addLayer(roi, {color: 'red'}, "Clear Lake", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////