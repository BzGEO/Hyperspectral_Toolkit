
var roi = ee.Geometry.Point([-88.012211, 30.682697]);

var t = 'system:time_start';

var hls = ee.ImageCollection("NASA/HLS/HLSL30/v002")
              .select(['B2','B3','B4','B5','B6','B7'],['B1','B2','B3','B4','B5','B7'])
              .merge(ee.ImageCollection("NASA/HLS/HLSS30/v002")
              .select(['B2','B3','B4','B8','B11','B12'],['B1','B2','B3','B4','B5','B7']))
              .filterBounds(roi)
              .map(function(img){return img.multiply(10000).toInt16().set(t, img.get(t))});

var hls_2025 = hls.filterDate("2025-01-01","2025-08-22");

print(hls_2025);