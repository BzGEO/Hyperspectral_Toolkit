/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Define combined Landsat and Sentinel-2 HLS collection
// Last updated: 12.12.2025

// var x = require('users/bzgeo/hyperspectral_toolkit:00_pkg/hls.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var t = 'system:time_start'; // define time variable

// Function: Cloud masking of HLS data
function cloudMask(img) {
  var cirrus = 1 << 0;
  var cloud = 1 << 1;
  var cloudadj = 1 << 2;
  var cloudshd = 1 << 3;
  var qa = img.select('Fmask');
  var mask = qa.bitwiseAnd(cirrus).eq(0)
  .and(qa.bitwiseAnd(cloud).eq(0))
  .and(qa.bitwiseAnd(cloudadj).eq(0))
  .and(qa.bitwiseAnd(cloudshd).eq(0));
  return(img.updateMask(mask)).set(t, img.get(t))}

// Combine Landsat and Sentinel-2 components of HLS

var hls = ee.ImageCollection("NASA/HLS/HLSL30/v002")         // HLS: Landsat component
               .select(['B2','B3','B4','B5','B6','B7','Fmask'],['B1','B2','B3','B4','B5','B7','Fmask'])
               .merge(ee.ImageCollection("NASA/HLS/HLSS30/v002")   // HLS: Sentinel-2 component
               .select(['B2','B3','B4','B8','B11','B12','Fmask'],['B1','B2','B3','B4','B5','B7','Fmask'])); 

hls = hls.map(cloudMask);

exports.hls = hls;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////