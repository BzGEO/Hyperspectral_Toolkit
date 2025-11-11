/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// PACE OCI hyperspectral data viewer
// Credits: Most of this code is borrowed, with permission, from Dr. Samapriya Roy's TANAGER Hyperspectral Data Viewer (see: https://sat-io.earthengine.app/view/tanager).
// Code updated by Emil Cherrington, Ph.D. (eac0021@uah.edu)
// Last updated: 25.07.2025
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');
var c = require('users/bzgeo/examples:_ancillary/mes');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pace_oci_mt_global = b.pace_oci_mt_global.map(function(img){return img.select(a.bands_oci_orig,a.bands_oci_mod)});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Code below is from Dr. Samapriya Roy from his TANAGER Hyperspectral Data Viewer (https://sat-io.earthengine.app/view/tanager)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Global variables for point tracking
var clickedPoints = [];
var spectralColors = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'orange', 'purple', 'black'];
var pointCounter = 0;

// Load PACE OCI collection
var pace_collection = pace_oci_mt_global;
//print('PACE OCI collection size:', pace_collection.size());


// Get collection info for dropdown
var imageList = pace_collection.aggregate_array('system:index').getInfo();
var dateList = pace_collection.aggregate_array('system:time_start').map(function(timestamp) {return ee.Date(timestamp).format('YYYY-MM-dd')}).getInfo();

// Create a styled title panel
var titlePanel = ui.Panel({
    widgets: [
        ui.Label({value: "Hyperspectral Data Explorer: PACE OCI", style: {fontSize: '20px', fontWeight: 'bold', color: 'chocolate', margin: '8px 0px'}}),
        ui.Label("Viewer based on Dr. Sam Roy's TANAGER Viewer", {stretch:'horizontal',textAlign:'center',fontSize: '12px', fontStyle: 'italic', color: 'lightskyblue'},
["https://sat-io.earthengine.app/view/tanager"])],
    style: {position: 'top-left', padding: '12px', backgroundColor: 'white', border: '2px solid #000000'}});

// Create control panel
var controlPanel = ui.Panel({widgets: [ui.Label({value: 'PACE OCI image selection', style: {fontSize: '14px', fontWeight: 'bold', color: '#000000'}})],
    style: {position: 'top-right', padding: '10px', backgroundColor: '#FFFFFF', border: '1px solid #000000',  width: '350px'}});

// Create spectral analysis panel
var spectralPanel = ui.Panel({widgets: [
        ui.Label({value: 'Spectral Signatures (multiple locations)', style: {fontSize: '14px', fontWeight: 'bold', color: 'red'}}),
        ui.Label({value: 'Click on the map to extract spectral signatures', style: {fontSize: '11px', color: 'blue', fontStyle: 'italic'}}),
        ui.Label({value: 'Default color order: red, green, blue, yellow, magenta, cyan, orange, purple, black', style: {fontSize: '9px', color: 'grey', fontStyle: 'italic'}}),
        ],
    style: {padding: '10px',  backgroundColor: '#FFFFFF', border: '1px solid #000000',  maxHeight: '700px', width: '450px'}});

// Create a separate chart container
var chartContainer = ui.Panel({widgets: [], style: {padding: '5px', margin: '5px 0px'}});

// Points info container
var pointsInfoContainer = ui.Panel({widgets: [], style: {padding: '5px', margin: '5px 0px'}});

// Clear all button
var clearAllButton = ui.Button({label: 'Clear all locations', style: {margin: '5px 0px'}});

// Export button
var exportButton = ui.Button({label: 'Export spectra with XY coordinates', style: {margin: '5px 0px'}});

// Download URL display panel
var downloadPanel = ui.Panel({widgets: [],  style: {padding: '5px', margin: '5px 0px', backgroundColor: '#FFFFFF', border: '1px solid #0066CC'}});

// Create export panel for bottom-right
var exportPanel = ui.Panel({
    widgets: [ui.Label({value: 'Export Data', style: {fontSize: '14px', fontWeight: 'bold', color: '#000000', margin: '0px 0px 8px 0px'}}), exportButton, downloadPanel],
    style: {position: 'bottom-right', padding: '10px', backgroundColor: '#FFFFFF',  border: '1px solid #000000', maxWidth: '280px'}});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to filter spectral bands
function getSpectralBands(image) {
    var allBands = image.bandNames();
    var spectralBands = allBands.filter(ee.Filter.stringStartsWith('item', 'ρ'));
    return image.select(spectralBands)}

// Function to export spectral data
function exportSpectralData() {
    if (clickedPoints.length === 0) {
        downloadPanel.clear();
        downloadPanel.add(ui.Label({value: 'No points to export. Please add some locations first.', style: {fontSize: '11px', color: '#FF0000', fontWeight: 'bold'}}));
        return}
    
    var currentImage = spectralPanel.currentSpectralImage;
    if (!currentImage) {
        downloadPanel.clear();
        downloadPanel.add(ui.Label({value: 'No image selected for export.', style: {fontSize: '11px', color: '#FF0000', fontWeight: 'bold'}}));
        return}
    
    downloadPanel.clear();
    downloadPanel.add(ui.Label({value: 'ρreparing export for ' + clickedPoints.length + ' points...', style: {fontSize: '11px', color: '#0066CC', fontWeight: 'bold'}}));
    
    // Create feature collection from points with metadata
    var pointsFC = ee.FeatureCollection(clickedPoints.map(function(pointData, index) {
        return ee.Feature(pointData.geometry, {point_id: 'ρoint_' + (index + 1), longitude: pointData.coords.lon, latitude: pointData.coords.lat, color: pointData.color})}));
    
    // Sample the image at all points (always use original spectral bands only)
    var sampledData = currentImage.sampleRegions({collection: pointsFC, scale: 10000, geometries: true});
    
    // Generate download URL and display it
    var downloadUrl = sampledData.getDownloadURL({format: 'CSV', filename: 'pace_oci_spectral_signature_' + Date.now()});
    
    // Clear the loading message and show download link
    downloadPanel.clear();
    downloadPanel.add(ui.Label({value: '✓ Export ready! Click the link below to download the CSV:', style: {fontSize: '11px', color: '#008000', fontWeight: 'bold', margin: '0px 0px 5px 0px'}}));
    var downloadLink = ui.Label({value: 'Download CSV of spectral signatures', targetUrl: downloadUrl, style: {fontSize: '12px', color: '#0066CC', textDecoration: 'underline', fontWeight: 'bold'}});
    downloadPanel.add(downloadLink);
    downloadPanel.add(ui.Label({value: 'Contains: Point IDs, coordinates, and OCI bands 1-122', style: {fontSize: '10px', color: '#666666', margin: '5px 0px 0px 0px'}}))}

// Export button event handler
exportButton.onClick(exportSpectralData);

// Function to calculate min/max for visualization
function calculateMinMax(image, geometry) {
    var stats = image.select(['ρ1618', 'ρ0835', 'ρ0662']).reduceRegion({reducer: ee.Reducer.minMax(), geometry: geometry, scale: 10000, maxPixels: 1e9});
    return stats}

// Function to update map with selected image and current mask settings
function updateMapWithImage(imageId) {
    // Clear existing layers
    Map.layers().reset();
    
    // Get the selected image
    var selectedImage = pace_collection.filterMetadata('system:index', 'equals', imageId).first();
    var imageGeometry = selectedImage.geometry();
    var displayImage = selectedImage;
    
    // Get spectral bands - this is what we'll use for spectral analysis
    var spectralImage = getSpectralBands(selectedImage);
    
    // Calculate min/max for visualization using the original image
    var visStats = calculateMinMax(selectedImage, imageGeometry);
    
    visStats.evaluate(function(result) {
        var visParams = {bands: ['ρ1618', 'ρ0835', 'ρ0662'], min: [-730, -834, -684], max:[4050, 5376, 2140]};
        
        // Create layer name with mask info
        var layerName = 'PACE OCI mosaic';
        
        Map.addLayer(displayImage, visParams, layerName, true); // Add the hyperspectral layer
        Map.addLayer(c.bnds_intl_ln1,{palette: "white"},"Int'l boundaries (white)", 1);
        Map.addLayer(c.bnds_admin_l1_ln1_us, {palette: "silver"},"State boundaries - USA (silver)", 1)
        Map.setCenter(-86.061, 14.018, 5); // Center map over Central America
        
        // Store current images for spectral analysis (always use original spectral bands only)
        spectralPanel.currentSpectralImage = spectralImage;
        spectralPanel.currentImageGeometry = imageGeometry;
        spectralPanel.selectedImageId = imageId;
        
    })}

// Function to refresh map when mask settings change
function refreshMapWithMasks() {
    if (spectralPanel.selectedImageId) {
        updateMapWithImage(spectralPanel.selectedImageId);
        // Also update with current band selection if user has changed bands
        updateVisualizationWithSelectedBands()}}

// Create image dropdown
var imageSelect = ui.Select({
    items: imageList.map(function(id, index) {
        //return {label: dateList[index] + ' - ' + id, value: id}}),
        return {label: dateList[index], value: id}}),
    placeholder: 'Select an image...',
    onChange: function(selectedId) {
        updateMapWithImage(selectedId);
        // Clear existing points when changing images
        clearAllPoints()},
    style: {margin: '5px 0px', width: '280px'}});

imageSelect.setValue(imageList[12]);

// Helper function to pad numbers with leading zeros
function padNumber(num, length) {
    var str = String(num);
    while (str.length < length) {str = '0' + str}
    return str}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create band options for dropdowns (bands 1-122)
var bandOptions = [];
var bandOptions = a.bands_oci_mod;

// RGB Band selectors
var redBandSelect = ui.Select({items: bandOptions, value: 'ρ1618', placeholder: 'Select Red band...', style: {margin: '2px 0px', width: '80px'}});
var greenBandSelect = ui.Select({items: bandOptions, value: 'ρ0835', placeholder: 'Select Green band...', style: {margin: '2px 0px', width: '80px'}});
var blueBandSelect = ui.Select({items: bandOptions, value: 'ρ0662', placeholder: 'Select Blue band...', style: {margin: '2px 0px', width: '80px'}});

// Update visualization button
var updateVisButton = ui.Button({label: 'Update visualization', style: {margin: '10px 0px 5px 0px', color: 'gray'}});

// Function to calculate min/max for selected bands
function calculateMinMaxForBands(image, bands, geometry) {
    var stats = image.select(bands).reduceRegion({reducer: ee.Reducer.minMax(), geometry: geometry, scale: 10000, maxPixels: 1e9});
    return stats}

// Function to update visualization with selected bands
function updateVisualizationWithSelectedBands() {
    if (!spectralPanel.selectedImageId) {print('ρlease select an image first');
        return}
    
    var selectedImage = pace_collection.filterMetadata('system:index', 'equals', spectralPanel.selectedImageId).first();
    var displayImage = selectedImage;
    var imageGeometry = spectralPanel.currentImageGeometry;
    
    var redBand = redBandSelect.getValue();
    var greenBand = greenBandSelect.getValue();
    var blueBand = blueBandSelect.getValue();
    
    if (!redBand || !greenBand || !blueBand) {
        print('ρlease select all RGB bands');
        return}
    
    var selectedBands = [redBand, greenBand, blueBand];
    
    // Calculate min/max for the selected bands
    var visStats = calculateMinMaxForBands(selectedImage, selectedBands, imageGeometry);
    
    visStats.evaluate(function(result) {
        var visParams = {
            bands: selectedBands,
            min: [result[redBand + '_min'], result[greenBand + '_min'], result[blueBand + '_min']],
            max: [result[redBand + '_max'], result[greenBand + '_max'], result[blueBand + '_max']],
            gamma: 1.2};
        
        var layerName = 'PACE RGB (' + redBand + ',' + greenBand + ',' + blueBand + ')';
        
        // Remove existing image layer and add updated one
        var layers = Map.layers();
        for (var i = layers.length() - 1; i >= 0; i--) {
            var layer = layers.get(i);
            if (layer.getName().indexOf('PACE RGB') === 0) {layers.remove(layer)}}
        
        Map.addLayer(displayImage, visParams, layerName, true)});
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Add event listener to update button
updateVisButton.onClick(updateVisualizationWithSelectedBands);

// Add widgets to control panel
controlPanel.add(imageSelect);

controlPanel.add(ui.Label({value: 'RGB band selection', style: {fontSize: '13px', fontWeight: 'bold', color: '#000000', margin: '15px 0px 5px 0px'}}));

// Create RGB selector panel with horizontal layout
var rgbPanel = ui.Panel({
    widgets: [ui.Label('R:', {fontSize: '11px', margin: '2px 5px 2px 0px', color: 'red', fontWeight: 'bold'}), redBandSelect,
              ui.Label('G:', {fontSize: '11px', margin: '2px 5px 2px 15px', color: 'limegreen', fontWeight: 'bold'}), greenBandSelect,
              ui.Label('B:', {fontSize: '11px', margin: '2px 5px 2px 15px', color: 'blue', fontWeight: 'bold'}), blueBandSelect],
    layout: ui.Panel.Layout.flow('horizontal'), style: {margin: '5px 0px'}});

controlPanel.add(rgbPanel);
controlPanel.add(updateVisButton);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to clear all points
function clearAllPoints() {
    clickedPoints = [];
    pointCounter = 0;
    chartContainer.clear();
    pointsInfoContainer.clear();
    downloadPanel.clear();
    
    // Remove point markers from map
    var layers = Map.layers();
    for (var i = layers.length() - 1; i >= 0; i--) {
        var layer = layers.get(i);
        if (layer.getName().indexOf('ρoint') === 0) {
            layers.remove(layer);
    }}}

// Clear button event handler
clearAllButton.onClick(clearAllPoints);

// Function to update spectral chart with all points (always uses original spectral bands)
function updateSpectralChart() {
    if (clickedPoints.length === 0) {chartContainer.clear();
        return}
    
    var currentSpectralImage = spectralPanel.currentSpectralImage;
    if (!currentSpectralImage) return;
    
    // Create chart with multiple series
    var pointsCollection = ee.FeatureCollection(clickedPoints.map(function(pointData, index) {
        return ee.Feature(pointData.geometry, {pointId: index})}));
    
    var chartTitle = 'Surface reflectance (PACE OCI bands 1-122)';
    
    var chart = ui.Chart.image.regions({
        image: currentSpectralImage,  // Always uses original spectral bands only
        regions: pointsCollection, reducer: ee.Reducer.mean(), scale: 10000, seriesProperty: 'ρointId', xLabels: a.wl_pace})
    .setOptions({title: chartTitle, titleTextStyle: {fontSize: 14, bold: true},
        hAxis: {title: 'Wavelength (nm)', titleTextStyle: {fontSize: 11}}, vAxis: {title: 'Surface reflectance x 10,000', titleTextStyle: {fontSize: 11}},
        series: (function() {
            var series = {};
            for (var i = 0; i < clickedPoints.length; i++) {
                series[i] = {color: spectralColors[i % spectralColors.length],  lineWidth: 1, pointSize: 0}}
            return series})(),
        legend: {position: 'none'}, chartArea: {width: '90%', height: '70%'}, backgroundColor: '#FFFFFF', width: 480, height: 220});
    
    chartContainer.clear();
    chartContainer.add(chart);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Add click handler for spectral analysis
Map.onClick(function(coords) {
    if (!spectralPanel.currentSpectralImage) {
        print('ρlease select an image first');
        return}
    
    var point = ee.Geometry.Point([coords.lon, coords.lat]);
    var pointColor = spectralColors[pointCounter % spectralColors.length];
    
    // Add point to tracking array
    clickedPoints.push({geometry: point, coords: coords, color: pointColor, id: pointCounter});
    
    // Add point marker to map
    var pointFeature = ee.Feature(point);
    Map.addLayer(pointFeature, {color: pointColor}, 'ρoint ' + (pointCounter + 1), true);
    
    pointCounter++;
    
    // Update spectral chart (always uses original spectral bands)
    updateSpectralChart();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Add containers to spectral panel
spectralPanel.add(pointsInfoContainer);
spectralPanel.add(clearAllButton);
spectralPanel.add(chartContainer);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a combined left panel
var leftPanel = ui.Panel({widgets: [spectralPanel], layout: ui.Panel.Layout.flow('vertical'), style: {position: 'bottom-left'}});

// Set initial map settings
Map.setOptions('SATELLITE'); // Satellite background
Map.style().set('cursor', 'crosshair');

// Add panels to the map
Map.add(titlePanel);
Map.add(controlPanel);
Map.add(leftPanel);
Map.add(exportPanel);

/*
// Initialize with random image
if (imageList.length > 0) {
    var randomIndex = Math.floor(Math.random() * imageList.length); // Pick a random image on app start/refresh
    imageSelect.setValue(imageList[randomIndex])} // Just set the value - this will automatically trigger onChange and call updateMapWithImage
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////