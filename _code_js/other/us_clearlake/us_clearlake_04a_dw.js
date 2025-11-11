// Creating Multi-Temporal Composites

// Extract the boundary for Dane County, Wisconsin
// from TIGER: US Countries 2018 dataset
//var counties = ee.FeatureCollection('TIGER/2016/Counties');
//var filtered = counties.filter(ee.Filter.eq('NAMELSAD', 'Dane County'));
//var geometry = filtered.geometry();
var geometry = ee.FeatureCollection('USGS/WBD/2017/HUC08').filter(ee.Filter.eq("huc8","18020116"));

Map.centerObject(geometry, 10);

// Filter the Dynamic World NRT collection
// for the year 2020 over the selected region.
var startDate = '2024-01-01T00:01';
var endDate = '2024-12-31T23:59';

var dw = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1')
  .filter(ee.Filter.date(startDate, endDate))
  .filter(ee.Filter.bounds(geometry))

// Create a Mode Composite
var classification = dw.select('label')
var dwComposite = classification.reduce(ee.Reducer.mode());

var dwVisParams = {
  min: 0,
  max: 8,
  palette: ['#419BDF', '#397D49', '#88B053', '#7A87C6',
    '#E49635', '#DFC35A', '#C4281B', '#A59B8F', '#B39FE1']
};

// Clip the composite and add it to the Map
Map.addLayer(dwComposite.clip(geometry), dwVisParams, 'Classified Composite') 

// Create a Top-1 Probability Hillshade Visualization
var probabilityBands = [
    'water', 'trees', 'grass', 'flooded_vegetation', 'crops',
    'shrub_and_scrub', 'built', 'bare', 'snow_and_ice'
    ];

// Select probability bands 
var probabilityCol = dw.select(probabilityBands)

// Create a multi-band image with the average pixel-wise probability 
// for each band across the time-period
var meanProbability = probabilityCol.reduce(ee.Reducer.mean())

// Composites have a default projection that is not suitable
// for hillshade computation.
// Set a EPSG:3857 projection with 10m scale
var projection = ee.Projection('EPSG:3857').atScale(100)
var meanProbability = meanProbability.setDefaultProjection(projection)

// Create the Top1 Probability Hillshade
var top1Probability = meanProbability.reduce(ee.Reducer.max())
var top1Confidence = top1Probability.multiply(100).int()
var hillshade = ee.Terrain.hillshade(top1Confidence).divide(255)
var rgbImage = dwComposite.visualize(dwVisParams).divide(255);
var probabilityHillshade = rgbImage.multiply(hillshade)

var hillshadeVisParams = {min:0, max:0.8}
Map.addLayer(probabilityHillshade.clip(geometry),
  hillshadeVisParams, 'Probability Hillshade')


// Export the Composite

// Raw Composite
Export.image.toDrive({
  image: dwComposite.clip(geometry),
  description: 'Raw_Composite_Export',
  fileNamePrefix: '2020_composite_raw',
  region: geometry,
  scale: 10,
  maxPixels: 1e10})

// Top1 Probability Hillshade Composite
var hillshadeComposite = probabilityHillshade.visualize(hillshadeVisParams)

Export.image.toDrive({
  image: hillshadeComposite.clip(geometry),
  description: 'Top1_Probability_Hillshade_Composite_Export',
  fileNamePrefix: '2020_composite_hillshade',
  region: geometry,
  scale: 10,
  maxPixels: 1e10})
  