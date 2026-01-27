
var roi = ee.Geometry.Rectangle(-88.22, 30.19, -87.67, 30.80);
Map.centerObject(roi, 10);
Map.addLayer(roi, {color: "red"}, "", 1);