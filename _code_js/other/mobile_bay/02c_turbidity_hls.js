/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi0 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-88.18507231347657, 30.696230194434843],
          [-88.18507231347657, 30.289157023273415],
          [-87.79643095605469, 30.289157023273415],
          [-87.79643095605469, 30.696230194434843]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY LOCATIONS OF SITES FOR ANALYSIS WITHIN THE MOBILE BAY, ALABAMA
// orig. location script from C. Deval: https://code.earthengine.google.com/3a687c686f2ba86f328e016443c2eb48
// site map from Dauphin Island Sea Lab: https://www.disl.edu/who-we-are/jlehrter/biogeo.png

// HLS (Landsat): https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSL30_v002#bands
// HLS (Sentinel-2): https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSS30_v002#bands

// NDTI formula from Lacaux et al. (2007), also: https://docs.digitalearthafrica.org/en/latest/sandbox/notebooks/Real_world_examples/Wetland_turbidity.html

// Last updated: 21.09.2025 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Definition of time variable
var t = 'system:time_start';

// Water mask - from Hansen et al.
var msk = ee.Image('UMD/hansen/global_forest_change_2022_v1_10').select('datamask').eq(2);

// Function for buffering location coordinates
function buff1km(feat) {return feat.buffer(500, 1).bounds(1)}

// Generate NDTI -> Red = B3, Green = B2 -> based on Landsat-5, Landsat-7 band names
function ndti(img) {return img.normalizedDifference(['B3','B2']).rename('NDTI').updateMask(msk).set(t,img.get(t))}

// Mosaic function - from I. Callejas (2021)
function mosaicDates(images) {
  var reducer = ee.Reducer.mean();
  images = images.map(function(i) {
  
  return i.reproject({crs: ee.Projection('EPSG:4326').atScale(300)})
          .toInt16()
          .set({date:i.date().format('YYYY-MM-dd')})}); //set date for all images
        
  var time = 'date'; // make list of distinct dates to use in join
  var distinct = images.distinct([time]); // define filter to match images w/ same dates
  var filter = ee.Filter.equals({leftField: time, rightField: time}); // preserve all matches generated from join
  var join = ee.Join.saveAll('matches'); //apply join, creates collection w/ a 'matches' property
  var results = join.apply(distinct, images, filter); //need band names variable to rename bands b/c creating new collection removes names
        
  var bandNames = ee.Image(images.first()).bandNames(); 
  results = results.map(function(i) { //create new image collection for each group of matches
  var mosaic = ee.ImageCollection.fromImages(i.get('matches')).sort('system:index').reduce(reducer).rename(bandNames); //sort, reduce collection to single image, rename bands
  
  return mosaic.copyProperties(i).set(time, i.get(time)) //produces a single image from each group of matches with date reassigned
            .set(t, ee.Date(i.get(time)).millis())});
  return ee.ImageCollection(results).map(function(img){return img.toInt16().set(t, img.get(t))})} //create a new image collection from all the new daily mosaics

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Turbidity Algorithms; adapted from Kim, Avila, and Wang from UC Berkeley. Run on Landsat 8 imagery and Sentinel-2 imagery
// copied from I. Callejas' Mini ORCAA (https://code.earthengine.google.com/3ac8a5c96db32bdf64073eb8bf4fa92a)

var l8_turbidity_alg = function(img) {
  var turbidity = img.expression(
    '(A_t * (p_w * scale_factor) / (1 - ((p_w * scale_factor )/ C)))', {
      'p_w': img.select('B3'), //red band mid wv_len = 645.5nm
      'A_t': 378.46, //calib param (ACOLITE)
      'B_t': 0.33, //calib param (ACOLITE)
      'C': 0.19905, //calib param (ACOLITE)
      'pi': Math.PI,
      'scale_factor': 0.0001}).rename('turb');
  var swir = img.select('B5');
  
  return turbidity.updateMask(swir.lte(215)).updateMask(turbidity.gte(0)).set(t, img.get(t));
  //var turb_msk_flt = turb_msk.set('empty', turb_msk.lte(0)).set(t, img.get(t))
  // return image.addBands(turbidity.updateMask(swir.lte(215)).updateMask(turbidity.gte(0)))
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Study site locations
var loc1 = ee.Geometry.Point([-88.012211, 30.682697]); // Battleship Park
var loc2 = ee.Geometry.Point([-88.011351, 30.438457]); // Middle Bay Lighthouse
var loc3 = ee.Geometry.Point([-87.829267, 30.328767]); // Bon Secour
var loc4 = ee.Geometry.Point([-88.139533, 30.308450]); // Cedar Point

// Buffered 500m on each side -> 1km boxes
var loc1_box1km = buff1km(loc1);
var loc2_box1km = buff1km(loc2);
var loc3_box1km = buff1km(loc3);
var loc4_box1km = buff1km(loc4);

var roi = loc3_box1km;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HLS generation -> combination of Landsat, Sentinel-2 collections

var hls = ee.ImageCollection("NASA/HLS/HLSL30/v002")
              .select(['B2','B3','B4','B5','B6','B7'],['B1','B2','B3','B4','B5','B7'])
              .merge(ee.ImageCollection("NASA/HLS/HLSS30/v002")
              .select(['B2','B3','B4','B8','B11','B12'],['B1','B2','B3','B4','B5','B7']))
              .filterBounds(roi)
              .map(function(img){return img.multiply(10000).toInt16().set(t, img.get(t))});

hls = mosaicDates(hls);

var hls_2013_2025 = hls.filterDate("2013-01-01","2025-08-22");
var hls_2016_2025 = hls.filterDate("2016-01-01","2025-08-22");
var hls_2020_2025 = hls.filterDate("2020-01-01","2025-08-22");

var hls_2025 = hls.filterDate("2025-01-01","2025-08-22");

//

var hls_ndti = hls.map(ndti);
var hls_turb = hls.map(l8_turbidity_alg);

var hls_turb_2025 = hls_2025.map(l8_turbidity_alg) //.filterMetadata('empty', 'equals', 0);

/*
print(hls);
print(hls_ndti);
print(hls_turb);
print(hls_turb_2025);
*/ 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

print(ui.Chart.image.seriesByRegion({imageCollection: hls_ndti, regions: loc1_box1km, reducer: ee.Reducer.median(),
scale: 500, band: 'NDTI', xProperty: t}).setOptions({title: 'NDTI (median) - Bon Secour', lineWidth: 1}));


/*
print(ui.Chart.image.seriesByRegion({imageCollection: hls_2020_2025.map(ndti), regions: loc1_box1km, reducer: ee.Reducer.median(),
scale: 500, band: 'NDTI', xProperty: t}).setOptions({title: 'NDTI (median) - Battleship Park', lineWidth: 1}));

print(ui.Chart.image.seriesByRegion({imageCollection: hls_2020_2025.map(ndti), regions: loc2_box1km, reducer: ee.Reducer.median(),
scale: 500, band: 'NDTI', xProperty: t}).setOptions({title: 'NDTI (median) - Middle Bay Lighthouse', lineWidth: 1}));

print(ui.Chart.image.seriesByRegion({imageCollection: hls_2020_2025.map(ndti), regions: loc3_box1km, reducer: ee.Reducer.median(),
scale: 500, band: 'NDTI', xProperty: t}).setOptions({title: 'NDTI (median) - Bon Secour', lineWidth: 1}));

print(ui.Chart.image.seriesByRegion({imageCollection: hls_2020_2025.map(ndti), regions: loc4_box1km, reducer: ee.Reducer.median(),
scale: 500, band: 'NDTI', xProperty: t}).setOptions({title: 'NDTI (median) - Cedar Point', lineWidth: 1}));
*/

print(ui.Chart.image.seriesByRegion({
      imageCollection: hls_turb, regions: roi, reducer: ee.Reducer.mean(), scale: 500, band: 'turb', xProperty: t}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display data in map viewer below
Map.centerObject(loc2, 10);
Map.addLayer(loc1_box1km, {color: "maroon"}, "Battleship Park", 0);
Map.addLayer(loc2_box1km, {color: "blue"}, "Middle Bay Lighthouse", 0);
Map.addLayer(loc3_box1km, {color: "aqua"}, "Bon Secour", 0);
Map.addLayer(loc4_box1km, {color: "red"}, "Cedar Point", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////