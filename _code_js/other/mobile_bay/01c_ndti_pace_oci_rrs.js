//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Last updated: 23.09.2025
// https://code.earthengine.google.com/?scriptPath=users%2Fservirbz%2Fpace_oci%3A03_spectral_signatures%2Fspectral_sigs_pace_oci_us_ca_park_fire_04km.js

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var loc1 = ee.Geometry.Point([-88.012211, 30.682697]); // Battleship Park
var loc2 = ee.Geometry.Point([-88.011351, 30.438457]); // Middle Bay Lighthouse
var loc3 = ee.Geometry.Point([-87.829267, 30.328767]); // Bon Secour
var loc4 = ee.Geometry.Point([-88.139533, 30.308450]); // Cedar Point

var pt = loc1;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pace_04km_sr = c.pace_oci_sr_mt_conus.filterBounds(pt)
                                  .map(function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                                  .filter(ee.Filter.eq('any', 1)).getRegion(pt, 4000).slice(1)
                                  .map(function(l) {return ee.List(l).slice(4)});

print(ui.Chart.array.values(pace_04km_sr, 1, b.wl_pace_sr)
      .setOptions({title: 'PACE OCI SR (4km) - Mobile Bay (site 1)', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:345, max:720}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:1600}, title: 'Scaled surface reflectance'},
      }));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pace_04km_rrs = c.pace_oci_rrs_mt_conus.filterBounds(pt)
                                  .map(function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                                  .filter(ee.Filter.eq('any', 1)).getRegion(pt, 4000).slice(1)
                                  .map(function(l) {return ee.List(l).slice(4)});

print(ui.Chart.array.values(pace_04km_rrs, 1, b.wl_pace_rrs)
      .setOptions({title: 'PACE OCI RRS (4km) - Mobile Bay (site 1)', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:345, max:720}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:-50, max:200}, title: 'Scaled RS reflectance'},
      }));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.centerObject(pt, 10);
Map.addLayer(pt, {}, "Mobile Bay", 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////