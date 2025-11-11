/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi_ = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-88.65042631906944, 35.10527154875113],
          [-88.65042631906944, 30.086884562287267],
          [-84.72281401438194, 30.086884562287267],
          [-84.72281401438194, 35.10527154875113]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Last updated: 03.10.2025

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/gena/packages:animation');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var t = 'system:time_start'; 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var roi = ee.FeatureCollection('FAO/GAUL_SIMPLIFIED_500m/2015/level1').filter(ee.Filter.eq('ADM1_NAME', 'Alabama'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var dates = ee.List.sequence(0, 15, 1).map(function(offset) {return ee.Date('2024-03-01').advance(offset, 'month')});

var dates = ["2024-03-31","2024-04-30","2024-05-31","2024-06-30",
            "2024-07-31","2024-08-31","2024-09-30","2024-10-31",
            "2024-11-30","2024-12-31","2025-01-31","2025-02-28",
            "2025-03-31","2025-04-30","2025-05-31","2025-06-30",
            "2025-07-31","2025-08-31"];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pace_rrs = a.pace_oci_mt_conus_02km.select(b.bands_oci_orig,b.bands_oci_mod)
                                    .select(['ρ1618', 'ρ0835', 'ρ0662'])
                                    .map(function(img){return img.clip(roi)
                                    //.visualize({min:[-58,-57,-38],max:[53,89,149],bands:['ρ0652','ρ0555','ρ0475']})
                                    //.visualize({"bands":['ρ0652', 'ρ0555', 'ρ0475'],"min":-103,"max":109})
                                    .visualize({"bands":['ρ1618', 'ρ0835', 'ρ0662'],"min":0.0155,"max":0.4320})
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-86.788, 32.939, 8);

/*
Map.addLayer(loc1_box1km, {color: "maroon"}, "Battleship Park", 1);
Map.addLayer(loc2_box1km, {color: "blue"}, "Middle Bay Lighthouse", 1);
Map.addLayer(loc3_box1km, {color: "aqua"}, "Bon Secour", 1);
Map.addLayer(loc4_box1km, {color: "red"}, "Cedar Point", 1);
*/

c.animate(images, {label: 'label', timeStep: 800, opacity: 1});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////