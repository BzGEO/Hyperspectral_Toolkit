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
        [[[-88.2005042280936, 30.778800586845374],
          [-88.2005042280936, 30.346597059028426],
          [-87.80018989703892, 30.346597059028426],
          [-87.80018989703892, 30.778800586845374]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise: Generate simple User Interface (UI) to display imagery
// Example study area: Mobile Bay, Alabama, USA

// based on code from Sulong Zhou and Noel Gorelick | modified by Kel Markert, formerly SERVIR SCO / UAH | last modified by Emil Cherrington
// Last modified: 25 Sept. 2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Specify geographic domain for windows
var pt = ee.Geometry.Point([-88.0378, 30.5091]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Definition of time variable
var t = 'system:time_start';

// Mosaic function - from I. Callejas (2021)
function mosaicDates(images) {
  var reducer = ee.Reducer.mean();
  images = images.map(function(i) {
  
  return i.reproject({crs: ee.Projection('EPSG:4326').atScale(300)}).set({date:i.date().format('YYYY-MM-dd')})}); //set date for all images
        
  var time = 'date'; // make list of distinct dates to use in join
  var distinct = images.distinct([time]); // define filter to match images w/ same dates
  var filter = ee.Filter.equals({leftField: time, rightField: time}); // preserve all matches generated from join
  var join = ee.Join.saveAll('matches'); // apply join, creates collection w/ a 'matches' property
  var results = join.apply(distinct, images, filter); // need band names variable to rename bands b/c creating new collection removes names
        
  var bandNames = ee.Image(images.first()).bandNames(); 
  results = results.map(function(i) { // create new image collection for each group of matches
  var mosaic = ee.ImageCollection.fromImages(i.get('matches')).sort('system:index').reduce(reducer).rename(bandNames); // sort, reduce collection to single image, rename bands
  
  return mosaic.copyProperties(i).set(time, i.get(time)) // produces a single image from each group of matches with date reassigned
            .set(t, ee.Date(i.get(time)).millis())});
  return ee.ImageCollection(results)} // create a new image collection from all the new daily mosaics

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var hls = ee.ImageCollection("NASA/HLS/HLSS30/v002")
              .select(['B2','B3','B4','B8','B11','B12'],['B1','B2','B3','B4','B5','B7'])
              .merge(ee.ImageCollection("NASA/HLS/HLSL30/v002")
              .select(['B2','B3','B4','B5','B6','B7'],['B1','B2','B3','B4','B5','B7']))
              .filterBounds(roi)
              .map(function(img){return img.multiply(10000).toInt16().clip(roi)
              //.reproject({crs: ee.Projection('EPSG:4326').atScale(300)})
              .set(t,img.get(t))});

hls = mosaicDates(hls.filterDate("2025-01-01","2025-12-31"));

var collection = hls.filterBounds(roi)
                    .sort(t, false)
                    .map(function(img){var dateStr = ee.Date(img.get(t));
                    return img.set('date',dateStr)});

print(collection);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display each image in the collection
var imgLayer = null;
var aoiLayer = null;
var imgDates = ee.List(collection.aggregate_array('date'));
var imgIds = ee.List(collection.aggregate_array('system:index'));

imgIds.evaluate(function(ids) {
  var size = ids.length;
  var showTitle = ui.Label("", {fontWeight: 'bold', color: 'blue'});
  var curIndex = 0;

/////////////////////////////////////////  

// Define buttons
  var previous = ui.Button("Earlier", function() {
    curIndex += 1;
    if (curIndex >= size) {curIndex = 0;}
    showTitle.setValue(imgDates.get(curIndex).getInfo());
    showSelectRawImage(ids[curIndex]);});
  var next = ui.Button("Later", function() {
    curIndex -= 1;
    if (curIndex < 0) {curIndex = total - 1;}
    showTitle.setValue(imgDates.get(curIndex).getInfo());
    showSelectRawImage(ids[curIndex]);});
  var buttonPanel = new ui.Panel(
    [next, previous],
    ui.Panel.Layout.Flow('horizontal'));

/////////////////////////////////////////
  
  showTitle.setValue(imgDates.get(curIndex).getInfo());
  showSelectRawImage(ids[curIndex]);

var insert_logo = ui.Thumbnail({image:ee.Image("users/servirbz/compil_imagery/_logos/logo_uah_blk"),
params:{bands:['b1','b2','b3'],min:0,max:255},style:{width:'223px',height:'100px'}});

/////////////////////////////////////////
  
  var main = ui.Panel({
    widgets: [
      ui.Label('HLS Explorer: Mobile Bay, AL', {fontWeight: 'bold', fontSize: '18px', color: 'mediumblue'}), // UI title
      ui.Label("date / time of image shown: ", {fontWeight: 'bold'}),
      showTitle, buttonPanel, insert_logo, ui.Label('credit: contains modified European Space Agency / Copernicus Sentinel data', {fontSize: '14px'})],
      style: {width: '250px', padding: '8px'}});
  ui.root.insert(0, main);});

/////////////////////////////////////////

function showSelectRawImage(key) {
  if (imgLayer !== null) {
    Map.remove(imgLayer);
    //Map.remove(aoiLayer);
  }
  var image = ee.Image(collection.filter(ee.Filter.eq("system:index", key)).first());
  imgLayer = Map.addLayer(image, {bands: ['B3', 'B1', 'B1'], min: 0, max: 2000},key);
  //aoiLayer = Map.addLayer(roi2_, {palette: "blue"},'Lake Atitlan');
}

////////////////////////////////////////////////////////////////////////////////////////////////

Map.setOptions('TERRAIN');
Map.centerObject(pt,10);

//////////////////////////////////////////// END ///////////////////////////////////////////////