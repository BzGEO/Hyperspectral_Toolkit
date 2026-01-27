/* DATA VISUALIZATION: DISPLAY PACE OCI MONTHLY SURFACE REFLECTANCE DATA FOR MESOAMERICA
source: Emil Cherrington, Ph.D. (University of Alabama in Huntsville / NASA SERVIR); emil.cherrington@uah.edu
Last updated: 18.06.2025 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-85.925, 13.99, 7);
Map.setOptions('SATELLITE');

Map.addLayer(c.pace_oci_mt_mes_202403, b.viz3_, "PACE OCI SR - March 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202404, b.viz3_, "PACE OCI SR - April 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202405, b.viz3_, "PACE OCI SR - May 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202406, b.viz3_, "PACE OCI SR - June 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202407, b.viz3_, "PACE OCI SR - July 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202408, b.viz3_, "PACE OCI SR - Aug. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202409, b.viz3_, "PACE OCI SR - Sept. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202410, b.viz3_, "PACE OCI SR - Oct. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202411, b.viz3_, "PACE OCI SR - Nov. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202412, b.viz3_, "PACE OCI SR - Dec. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202501, b.viz3_, "PACE OCI SR - Jan. 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202502, b.viz3_, "PACE OCI SR - Feb. 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202503, b.viz3_, "PACE OCI SR - March 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202504, b.viz3_, "PACE OCI SR - April 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202505, b.viz3_, "PACE OCI SR - May 2025*", 1);

Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////