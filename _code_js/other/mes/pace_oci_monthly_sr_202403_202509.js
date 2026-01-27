// Last updated: 11.11.2025

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ln = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:2})};
var roi = ee.Geometry.Rectangle(-77, 7, -93, 22); // Mesoamerica

var img = a.pace_oci_mt_mes_img2;
//var img = a.pace_oci_mes_202403_02km.multiply(10000).toInt16().reproject('EPSG:4326', null, 2000);

img = img.updateMask(img.gte(0));
print(img);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function norm(image){
  var bandNames = image.bandNames();
  // Compute min and max of the image
  var minDict = image.reduceRegion({reducer: ee.Reducer.min(), geometry: roi,
    scale: image.projection().nominalScale(), maxPixels: 1e9, bestEffort: true, tileScale: 16});
  var maxDict = image.reduceRegion({reducer: ee.Reducer.max(), geometry: roi,
    scale: image.projection().nominalScale(), maxPixels: 1e9, bestEffort: true, tileScale: 16});
  var mins = ee.Image.constant(minDict.values(bandNames));
  var maxs = ee.Image.constant(maxDict.values(bandNames));

  return image.subtract(mins).divide(maxs.subtract(mins))}

////

var img_norm = norm(img.reproject('EPSG:4326', null, 25000)).multiply(10000).toInt16().clip(roi);
//var img_norm = norm(img).multiply(10000).toInt16().clip(roi);
print(img_norm);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PCA, from: https://code.earthengine.google.com/30c0e509da3a644fc4fea031b7649f87

var image = img_norm;
var scale = 10000;
//var scale = ee.Number(2000);

var bandNames = image.bandNames();

// Mean center the data to enable a faster covariance reducer and an SD stretch of the PCs.
var meanDict = image.reduceRegion({reducer: ee.Reducer.mean(), geometry: roi, scale: scale, maxPixels: 1e13});
var means = meanDict.toImage(bandNames);
var centered = image.subtract(means);

// This helper function returns a list of new band names.
var getNewBandNames = function(prefix) {
  var seq = ee.List.sequence(1, bandNames.length());
  return seq.map(function(b) {return ee.String(prefix).cat(ee.Number(b).int())})};

// This function accepts mean centered imagery, a scale and a region in which to perform the analysis.  It returns the PC in the region as a new image.
var getPrincipalComponents = function(centered, scale, roi) {
  
  var arrays = centered.toArray(); // Collapse the bands of the image into a 1D array per pixel.
  var covar = arrays.reduceRegion({reducer: ee.Reducer.centeredCovariance(), geometry: roi, scale: scale, maxPixels: 1e13}); // Compute the covariance of the bands within the region.
  var covarArray = ee.Array(covar.get('array')); // Get the 'array' covariance result and cast to an array. This represents the band-to-band covariance within the region.
  var eigens = covarArray.eigen(); // Perform an eigen analysis and slice apart the values and vectors.
  var eigenValues = eigens.slice(1, 0, 1); // This is a P-length vector of Eigenvalues.
  var eigenVectors = eigens.slice(1, 1); // This is a PxP matrix with eigenvectors in rows.
  var arrayImage = arrays.toArray(1); // Convert the array image to 2D arrays for matrix computations.
  var principalComponents = ee.Image(eigenVectors).matrixMultiply(arrayImage); // Left multiply the image array by the matrix of eigenvectors.
  var sdImage = ee.Image(eigenValues.sqrt()).arrayProject([0]).arrayFlatten([getNewBandNames('sd')]); // Turn the square roots of the Eigenvalues into a P-band image.

  // Turn the PCs into a P-band image, normalized by SD.
  return principalComponents
      .arrayProject([0]) // Throw out an an unneeded dimension, [[]] -> [].
      .arrayFlatten([getNewBandNames('pc')]) // Make the one band array image a multi-band image, [] -> image.
      .divide(sdImage)}; // Normalize the PCs by their SDs.

var pcImage = getPrincipalComponents(centered, scale, roi); // Get the PCs at the specified scale and in the specified region

/*
// Plot each PC as a new layer
pcImage.bandNames().evaluate(function(bandNames) {
  for (var i = 0; i < bandNames.length; i++) {Map.addLayer(pcImage.select(i), {min: -2, max: 2}, bandNames[i])}});
*/

////
print(pcImage);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pca_norm = norm(pcImage).multiply(10000).toInt16();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Map.centerObject(roi);
Map.setOptions('SATELLITE');
Map.addLayer(ln(roi), {palette: ['red']},'roi_Mesoamerica', 1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Export.image.toDrive({'image': img.toInt16(), 'region': roi, 'scale': 2000,
        'description': 'export_drv_pace_oci_mes__202403_202509', 'folder': 'x_tmp_gee_outputs',
        'fileNamePrefix': 'mes_pace_oci_sr__202403_202509_gcs2', 'crs': 'EPSG:4326', 'maxPixels': 1e13});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////