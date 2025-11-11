/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY LOCATIONS OF SITES FOR ANALYSIS WITHIN THE MOBILE BAY, ALABAMA
// orig. location script from C. Deval: https://code.earthengine.google.com/3a687c686f2ba86f328e016443c2eb48
// site map from Dauphin Island Sea Lab: https://www.disl.edu/who-we-are/jlehrter/biogeo.png
// Last updated: 21.09.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function buff1km(feat) {return feat.buffer(500, 1).bounds(1)} // Function for buffering location coordinates

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var loc1 = ee.Geometry.Point([-88.012211, 30.682697]); // Battleship Park
var loc2 = ee.Geometry.Point([-88.011351, 30.438457]); // Middle Bay Lighthouse
var loc3 = ee.Geometry.Point([-87.829267, 30.328767]); // Bon Secour
var loc4 = ee.Geometry.Point([-88.139533, 30.308450]); // Cedar Point

// Buffered 500m on each side -> 1km boxes
var loc1_box1km = buff1km(loc1);
var loc2_box1km = buff1km(loc2);
var loc3_box1km = buff1km(loc3);
var loc4_box1km = buff1km(loc4);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display data in map viewer below
Map.centerObject(loc2, 10);
Map.addLayer(loc1_box1km, {color: "maroon"}, "Battleship Park", 1);
Map.addLayer(loc2_box1km, {color: "blue"}, "Middle Bay Lighthouse", 1);
Map.addLayer(loc3_box1km, {color: "aqua"}, "Bon Secour", 1);
Map.addLayer(loc4_box1km, {color: "red"}, "Cedar Point", 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////