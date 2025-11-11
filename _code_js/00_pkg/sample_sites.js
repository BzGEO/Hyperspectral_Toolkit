/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sample site locations for use with hyperspectral data
// Questions? Contact Emil A. Cherrington, Ph.D. (eac0021@uah.edu)
// This supports the following GEE code repository: https://bit.ly/gee_repo_pace_oci.
// Last updated: 10.08.2025

// var x = require('users/bzgeo/hyperspectral_toolkit:00_pkg/sample_sites.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions for creating hollow polygons
var ln1 = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:1})};
var ln2 = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:2})};

exports.ln1 = ln1;
exports.ln2 = ln2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MONITORING SITES IN MESOAMERICA - TO BE UPDATED AS NECESSARY | original site coordinates w/ basic vegetation descriptions

var mes_pt0 = ee.Geometry.Point([-88.2313, 18.0629]); // Ag - Neulands pastures
var mes_pt1 = ee.Geometry.Point([-88.6872, 16.8886]); // Forest - Eastern Chiquibul
var mes_pt2 = ee.Geometry.Point([-88.9426, 16.9767]); // Forest + grassland - MPR
var mes_pt3 = ee.Geometry.Point([-88.4807, 16.6036]); // Savanna - Southern Coastal Plain
var mes_pt4 = ee.Geometry.Point([-88.6954, 17.8494]); // Ag - OW sugarcane
var mes_pt5 = ee.Geometry.Point([-90.1473, 16.1457]); // Ag - GT oil palm
var mes_pt6 = ee.Geometry.Point([-91.4796, 14.1029]); // Ag - GT sugarcane
var mes_pt7 = ee.Geometry.Point([-89.813, 16.9776]); // Water - Lake Peten Itza
var mes_pt8 = ee.Geometry.Point([-88.1813, 17.2225]); // Water - coast SE of BZ City
var mes_pt9 = ee.Geometry.Point([-89.4035, 17.6403]); // Forested wetland - NE Peten, Guatemala

exports.mes_pt00 = mes_pt0;
exports.mes_pt01 = mes_pt1;
exports.mes_pt02 = mes_pt2;
exports.mes_pt03 = mes_pt3;
exports.mes_pt04 = mes_pt4;
exports.mes_pt05 = mes_pt5;
exports.mes_pt06 = mes_pt6;
exports.mes_pt07 = mes_pt7;
exports.mes_pt08 = mes_pt8;
exports.mes_pt09 = mes_pt9;

// Feature collection combining the first eight sites listed above, with sites in Belize and Guatemala (note: the Neulands site is not included)
var mes_pts1 = ee.FeatureCollection([
  ee.Feature(mes_pt1, {label: 'For_BL', class: 1}),ee.Feature(mes_pt2, {label: 'For_NL_mosaic', class: 2}),
  ee.Feature(mes_pt3, {label: 'Savanna', class: 3}),ee.Feature(mes_pt4, {label: 'Ag_sugarcane_BZ', class: 4}),
  ee.Feature(mes_pt5, {label: 'Ag_oil_palm', class: 5}),ee.Feature(mes_pt6, {label: 'Ag_sugarcane_GT', class: 6}),
  ee.Feature(mes_pt7, {label: 'Water_inland', class: 7}),ee.Feature(mes_pt8, {label: 'Water_coast', class: 8})]);

exports.mes_pts1 = mes_pts1;

// Combination of forest and oil palm data for comparative purposes
var mes_pts2 = ee.FeatureCollection([
  ee.Feature(mes_pt1, {label: 'For_BL', class: 1}), ee.Feature(mes_pt5, {label: 'Ag_oil_palm', class: 2})]);

exports.mes_pts2 = mes_pts2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SERIES COLORS FOR GRAPHING PURPOSES - THESE GO WITH THE SAMPLE SITES LISTED ABOVE

// Colors for the 8 sites
var mes_series1 = {
            0: {color: "green"}, // Chiquibul
            1: {color: "limegreen"}, // MPR
            2: {color: "magenta"}, // Southern Coastal Plain
            3: {color: "yellow"}, // OW sugarcane
            4: {color: "orange"}, // Guatemala oil palm
            5: {color: "khaki"}, // Guatemala sugarcane
            6: {color: "lightskyblue"}, // Peten Itza
            7: {color: "navy"}}; // Sea near Belize City

exports.mes_series1 = mes_series1;

// Colors for forest vs. oil palm
var mes_series2 = {
            0: {color: "green"}, // Chiquibul
            1: {color: "orange"}}; // Guatemala oil palm

exports.mes_series2 = mes_series2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MONITORING SITES IN BELIZE | original site coordinates w/ basic vegetation descriptions

var bz_pt01 = ee.Geometry.Point([-88.20090, 17.49920]); // Urban - BZ City (Amandala compound)
var bz_pt02 = ee.Geometry.Point([-88.06910, 17.49400]); // Forest, mangrove (dense)- Drowned Cayes (1)
var bz_pt03 = ee.Geometry.Point([-88.06567, 17.49016]); // Forest, mangrove (dense) - Drowned Cayes (2)
var bz_pt04 = ee.Geometry.Point([-88.07884, 17.49937]); // Forest, mangrove (less dense) - Drowned Cayes (3)
var bz_pt05 = ee.Geometry.Point([-88.06583, 17.38242]); // Forest, mangrove (dense) - Water Caye
var bz_pt06 = ee.Geometry.Point([-88.2166, 17.4893]);   // Forest, mangrove (dense, undisturbed) - BZ Port Authority
var bz_pt07 = ee.Geometry.Point([-88.5951, 17.4011]);   // Forest, broadleaf - BZ central, east of Santander property
var bz_pt08 = ee.Geometry.Point([-88.9301, 16.9904]);   // Forest / pine savanna mosaic - Mountain Pine Ridge Forest Reserve

exports.bz_pt01 = bz_pt01;
exports.bz_pt02 = bz_pt02;
exports.bz_pt03 = bz_pt03;
exports.bz_pt04 = bz_pt04;
exports.bz_pt05 = bz_pt05;
exports.bz_pt06 = bz_pt06;
exports.bz_pt07 = bz_pt07;
exports.bz_pt08 = bz_pt08;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MONITORING SITES IN ALABAMA, USA | original site coordinates w/ basic vegetation descriptions

var us_al_hsv_pt01 = ee.Geometry.Point([-86.72415, 34.67289]); // Urban trees, Edgewater neighborhood (Huntsville / Madison)
var us_al_hsv_pt02 = ee.Geometry.Point([-86.71316, 34.68263]); // Evergreen trees, east of Edgewater
var us_al_hsv_pt03 = ee.Geometry.Point([-86.52672, 34.69142]); // Monte Sano
var us_al_hsv_pt04 = ee.Geometry.Point([-86.8314, 34.6585]); // Fallow field in Greenbrier
var us_al_hsv_pt05 = ee.Geometry.Point([-86.6827, 34.70405]); // Interstate 565
var us_al_hsv_pt06 = ee.Geometry.Point([-86.70727, 34.63027]); // Marsh
var us_al_hsv_pt07 = ee.Geometry.Point([-86.70761, 34.58873]); // TN River
var us_al_hsv_pt08 = ee.Geometry.Point([-86.84455, 34.68069]); // Factory building in Greenbrier

exports.us_al_hsv_pt01 = us_al_hsv_pt01;
exports.us_al_hsv_pt02 = us_al_hsv_pt02;
exports.us_al_hsv_pt03 = us_al_hsv_pt03;
exports.us_al_hsv_pt04 = us_al_hsv_pt04;
exports.us_al_hsv_pt05 = us_al_hsv_pt05;
exports.us_al_hsv_pt06 = us_al_hsv_pt06;
exports.us_al_hsv_pt07 = us_al_hsv_pt07;
exports.us_al_hsv_pt08 = us_al_hsv_pt08;


var us_al_hsv_pts = ee.FeatureCollection([
  ee.Feature(us_al_hsv_pt01, {label: 'For_Edgewater', class: 1}),
  ee.Feature(us_al_hsv_pt02, {label: 'For_near_Edgewater', class: 2}),
  ee.Feature(us_al_hsv_pt03, {label: 'For_Monte_Sano', class: 3}),
  ee.Feature(us_al_hsv_pt04, {label: 'Field', class: 4}),
  ee.Feature(us_al_hsv_pt05, {label: 'Pavement_565', class: 5}),
  ee.Feature(us_al_hsv_pt06, {label: 'Marsh', class: 6}),
  ee.Feature(us_al_hsv_pt07, {label: 'River_TN', class: 7}),
  ee.Feature(us_al_hsv_pt08, {label: 'Building', class: 8}),
  ]);

exports.us_al_hsv_pts = us_al_hsv_pts;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// California Park Fire sites (the fire occurred in late July / early August 2024)

var pt_for =    ee.Geometry.Point([-121.66626, 40.06356]); // eastern vegetated side
var pt_mt =     ee.Geometry.Point([-121.81767, 40.06343]); // western scrubby side

var ca_lc = ee.FeatureCollection([ee.Feature(pt_for, {label: 'Vegetated', class: 1}), ee.Feature(pt_mt, {label: 'Non-vegetated', class: 2})]);

var ca_for = ee.Geometry.Polygon(
        [[[-121.67132698364257, 40.068681530028066],[-121.67132698364257, 40.05771142879132],
          [-121.66068397827148, 40.05771142879132],[-121.66068397827148, 40.068681530028066]]], null, false);
var ca_mt = ee.Geometry.Polygon(
        [[[-121.82238899536132, 40.06815605647857],[-121.82238899536132, 40.05764573424222],
          [-121.81123100585937, 40.05764573424222],[-121.81123100585937, 40.06815605647857]]], null, false);

var ca_sites = ee.FeatureCollection([
  ee.Feature(ca_for, {label: 'Vegetated_site', class: 1}),
  ee.Feature(ca_mt, {label: 'Non-vegetated_site', class: 2}),
  ]);

var ca_for_ln2 = ln2(ca_for);
var ca_mt_ln2 = ln2(ca_mt);

exports.pt_for = pt_for;
exports.pt_mt = pt_mt;

exports.ca_for = ca_for;
exports.ca_mt = ca_mt;

exports.ca_lc = ca_lc;
exports.ca_sites = ca_sites;

exports.ca_for_ln2 = ca_for_ln2;
exports.ca_mt_ln2 = ca_mt_ln2;

var roi_ca_snp = ee.Geometry.Polygon(
        [[[-118.9543678424124, 36.695221212153854],  [-118.9543678424124, 35.657671454644564],
          [-118.47920915100615, 35.657671454644564], [-118.47920915100615, 36.695221212153854]]], null, false);

exports.roi_ca_snp = roi_ca_snp;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OTHER SITES

// FOREST GEO SITE: PAINT ROCK, AL
var aoi_al_paint_rock = ee.FeatureCollection("users/servirbz/aoi/other/al_paint_rock_forest_plot");
exports.aoi_al_paint_rock = aoi_al_paint_rock;

// US NEON SITE: UNIVERSITY OF NOTRE DAME ENVIRONMENTAL RESEARCH CENTER (UNDERC)
var us_underc = ee.FeatureCollection("users/servirbz/aoi/us/us_neon_site_underc_gcs");
exports.us_underc = us_underc;

var us_underc_ln1 = ln1(us_underc);
exports.us_underc_ln1 = us_underc_ln1;

var us_underc_ln2 = ln2(us_underc);
exports.underc_ln2 = us_underc_ln2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////