//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creating Multi-Temporal Composites
// last updated: 29.10.2025

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Load required packages
var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set ROI
var roi = ee.FeatureCollection('USGS/WBD/2017/HUC08').filter(ee.Filter.eq("huc8","18020116"));

// Filter the Dynamic World NRT collection for the year 2024 over the selected AOI
var startDate = '2024-01-01T00:01';
var endDate = '2024-12-31T23:59';

// Extract DW data using filters defined previously
var dw = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1').filter(ee.Filter.date(startDate, endDate)).filter(ee.Filter.bounds(roi));

// Create a Mode Composite
var dwComposite = dw.select(['label']).reduce(ee.Reducer.mode()).select(['label_mode'],['LC']);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a Top-1 Probability Hillshade Visualization
var probabilityBands = ['water', 'trees', 'grass', 'flooded_vegetation', 'crops', 'shrub_and_scrub', 'built', 'bare', 'snow_and_ice'];

// Select probability bands 
var probabilityCol = dw.select(probabilityBands);

// Create a multi-band image with the average pixel-wise probability for each band across the time-period
var meanProbability = probabilityCol.reduce(ee.Reducer.mean());

// Composites have a default projection that is not suitable for hillshade computation. Set a EPSG:3857 projection with 10m scale.
var projection = ee.Projection('EPSG:32610').atScale(100);
var meanProbability = meanProbability.setDefaultProjection(projection);

// Create the Top1 Probability Hillshade
var top1Probability = meanProbability.reduce(ee.Reducer.max());
var top1Confidence = top1Probability.multiply(100).int();
var hillshade = ee.Terrain.hillshade(top1Confidence).divide(255);
var rgbImage = dwComposite.visualize(dwVisParams).divide(255);
var probabilityHillshade = rgbImage.multiply(hillshade);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Extract EMIT data for single date
var img1 = a.emit_sr2(roi,"2025-06-15T00:00","2025-06-15T23:59");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sampling the ESA 10m Worldcover data
var points = dwComposite.stratifiedSample({'region': roi,'scale': 100,'numPoints': 100,'seed': 0,'geometries': true, 'classBand': 'LC'});
//print(points.first()); // Prints the details of the first sample point

// Training the classifier | use these bands for prediction
var bands = img1.bandNames();
//print(bands);


// Overlay the points on the imagery to get training
//var training = image.select(bands).sampleRegions({'collection': points, 'properties': [label],'scale': 5});

var training = img1.sampleRegions({'collection': points, 'properties': ['LC'],'scale': 100});
//print(training);

var trained = ee.Classifier.smileCart().train(training, 'LC', bands);
var result = img1.classify(trained);
print(result);


var class_rf100 = img1.classify(ee.Classifier.smileRandomForest(100)
                      .train({features:img1.sampleRegions({collection:points,properties:['LC'],scale:100}),classProperty:'LC',}))
                      //.focal_mode(2)
                      .clip(roi);
print(class_rf100);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set visualization parameters
var dwVisParams = {min:0,  max:8,  palette: ['#419BDF', '#397D49', '#88B053', '#7A87C6', '#E49635', '#DFC35A', '#C4281B', '#A59B8F', '#B39FE1']};

//
Map.centerObject(roi, 10);
Map.addLayer(dwComposite.clip(roi), dwVisParams, 'Classified Composite', 1);
Map.addLayer(probabilityHillshade.clip(roi), {min:0, max:0.8}, 'Probability Hillshade', 0);
Map.addLayer(result, dwVisParams, 'LC (CART)', 0);
Map.addLayer(class_rf100, dwVisParams, 'LC (RF, 100)', 0);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////