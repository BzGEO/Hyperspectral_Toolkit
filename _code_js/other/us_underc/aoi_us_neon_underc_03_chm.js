// Read in the NEON AOP CHM Image Collection
var chm = ee.ImageCollection('projects/neon-prod-earthengine/assets/CHM/001');
var dem = ee.ImageCollection('projects/neon-prod-earthengine/assets/DEM/001');

var underc = ee.FeatureCollection("users/servirbz/aoi/us/us_neon_site_underc_gcs");

// Display available images in the image collections
print('NEON CHM Images', chm.aggregate_array('system:index'));
print('NEON DEM Images', dem.aggregate_array('system:index'));

// Specify the start and end dates and filter by dates
var chm2024 = chm.filterDate("2024-01-01", "2024-12-31");
var dem2024 = dem.filterDate("2024-01-01", "2024-12-31");

// Filter by NEON site name (see https://www.neonscience.org/field-sites/explore-field-sites)
var demSOAP_2024 = dem2024.filter('NEON_SITE == "UNDE"');
var soapCHM = chm2024.filter('NEON_SITE == "UNDE"');
soapCHM = soapCHM.median().updateMask(soapCHM.median().gt(0)).clip(underc);

// Select the DTM and DSM bands in order to display each layer
var soapDTM = dem2024.median().select('DTM').clip(underc);
var soapDSM = dem2024.median().select('DSM').clip(underc);

// Define the color palette and visualization parameters
var palettes = require('users/gena/packages:palettes');
var dem_palette = palettes.colorbrewer.BrBG[9].reverse();
var demVis = {min: 496, max: 537, palette: dem_palette};
var chmVis = {min: 0, max: 35, palette: ["lightsalmon","yellow","lime","green"]};

// Add the data to the viewer below
Map.addLayer(soapDTM, demVis, 'SOAP 2024 Digital Terrain Model (m)', 0);
Map.addLayer(soapDSM, demVis, 'SOAP 2024 Digital Surface Model (m)', 0);
Map.addLayer(soapCHM, chmVis, 'UNDERC 2024 Canopy Height Model (m)', 1);
Map.setCenter(-89.5133, 46.2023, 12);


var height_avg = ee.Number(soapCHM.clip(underc).select('CHM').reduceRegion({
  geometry: underc.geometry(), reducer: ee.Reducer.mean(), scale: 1, maxPixels: 1e18}).get('CHM'));

var height_max = ee.Number(soapCHM.clip(underc).select('CHM').reduceRegion({
  geometry: underc.geometry(), reducer: ee.Reducer.max(), scale: 1, maxPixels: 1e18}).get('CHM'));

print('Mean veg. height: ', height_avg, 'meters');
print('Max. veg. height: ', height_max, 'meters');
