/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-92.82523100656944, 31.07525001562568],
          [-92.82523100656944, 27.136110308143515],
          [-81.71256010813194, 27.136110308143515],
          [-81.71256010813194, 31.07525001562568]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Last updated: 25.09.2025

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/gena/packages:animation');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var t = 'system:time_start'; 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var dates = ee.List.sequence(0, 15, 1).map(function(offset) {return ee.Date('2024-03-01').advance(offset, 'month')});

var dates = ["2024-03-31","2024-04-30","2024-05-31","2024-06-30",
            "2024-07-31","2024-08-31","2024-09-30","2024-10-31",
            "2024-11-30","2024-12-31","2025-01-31","2025-02-28",
            "2025-03-31","2025-04-30","2025-05-31","2025-06-30"];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pace_rrs = a.pace_oci_rrs_mt_conus.select(b.bands_oci_rrs_orig,b.bands_oci_rrs_mod)
                                    .select(['ρ0652', 'ρ0555', 'ρ0475'])
                                    .map(function(img){return img.clip(roi)
                                    //.visualize({min:[-58,-57,-38],max:[53,89,149],bands:['ρ0652','ρ0555','ρ0475']})
                                    //.visualize({"bands":['ρ0652', 'ρ0555', 'ρ0475'],"min":-103,"max":109})
                                    .visualize({"bands":['ρ0652', 'ρ0555', 'ρ0475'],"min":29.2,"max":135})
                                    .set(t,img.get(t))});

var images = dates.map(function(t) {
  t = ee.Date(t);
  var i = pace_rrs.filterDate(t, t.advance(1, 'month')).median();
  return i.set({label: t.format() }).clip(roi);
});

// print(images);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function for buffering location coordinates
function buff1km(feat) {return feat.buffer(500, 1).bounds(1)}

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-88.008, 30.2996, 7);

/*
Map.addLayer(loc1_box1km, {color: "maroon"}, "Battleship Park", 1);
Map.addLayer(loc2_box1km, {color: "blue"}, "Middle Bay Lighthouse", 1);
Map.addLayer(loc3_box1km, {color: "aqua"}, "Bon Secour", 1);
Map.addLayer(loc4_box1km, {color: "red"}, "Cedar Point", 1);
*/

c.animate(images, {label: 'label', timeStep: 800, opacity: 0.8});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////