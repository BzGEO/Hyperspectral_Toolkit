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
        [[[27.963582500000012, 9.016980410736391],
          [27.963582500000012, -16.128629822748533],
          [40.00459812500001, -16.128629822748533],
          [40.00459812500001, 9.016980410736391]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var ln = function(roi) {return ee.Image().byte().paint({featureCollection:roi,width:2})};

var roi = ee.Geometry.Rectangle(28, -16, 40, 9);
var roi = ee.Geometry.Polygon([[[28, 9],[28, -16],[40, -16],[40, 9]]], null, false);

var roiEastAfrica = ee.Geometry.Rectangle([33.96198,-4.37332,36.73081,-1.68324]);
Map.addLayer(roiEastAfrica, {}, 'Kenya and Tanzania');

var roiEastAfrica2 = ee.Geometry.Rectangle([37.09634, 5.56403, 39.55728, 8.59458]);
Map.addLayer(roiEastAfrica2, {}, 'Ethiopia');

Map.centerObject(roi, 5);
Map.addLayer(ln(roi), {palette: ['red']},'AOI_Alabama', 1);
