/* DATA VISUALIZATION: DISPLAY PACE OCI MONTHLY SURFACE REFLECTANCE DATA FOR THE CONTINTENTAL USA
source: Emil Cherrington, Ph.D. (University of Alabama in Huntsville / NASA EarthRISE); emil.cherrington@uah.edu
Last updated: 03.10.2025 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-97.09, 39.11, 5);
Map.setOptions('HYBRID');

Map.addLayer(c.pace_oci_mt_conus_02km_202403, b.viz3_, "PACE OCI SR (2km) - March 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202404, b.viz3_, "PACE OCI SR (2km) - April 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202405, b.viz3_, "PACE OCI SR (2km) - May 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202406, b.viz3_, "PACE OCI SR (2km) - June 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202407, b.viz3_, "PACE OCI SR (2km) - July 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202408, b.viz3_, "PACE OCI SR (2km) - Aug. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202409, b.viz3_, "PACE OCI SR (2km) - Sept. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202410, b.viz3_, "PACE OCI SR (2km) - Oct. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202411, b.viz3_, "PACE OCI SR (2km) - Nov. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202412, b.viz3_, "PACE OCI SR (2km) - Dec. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202501, b.viz3_, "PACE OCI SR (2km) - Jan. 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202502, b.viz3_, "PACE OCI SR (2km) - Feb. 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202503, b.viz3_, "PACE OCI SR (2km) - March 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202504, b.viz3_, "PACE OCI SR (2km) - April 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202505, b.viz3_, "PACE OCI SR (2km) - May 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202506, b.viz3_, "PACE OCI SR (2km) - June 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202507, b.viz3_, "PACE OCI SR (2km) - July 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_02km_202508, b.viz3_, "PACE OCI SR (2km) - Aug. 2025", 1);

Map.addLayer(c.nalc_2020, c.viz_nalc, "NA LC (2020)", 0);
Map.addLayer(c.nalc_2020_ag, c.viz_nalc_ag, "NA LC - Ag (2020)", 0);
Map.addLayer(c.us_cdl_2024, {}, "US CDL (2024)", 0);
Map.addLayer(c.mcd64a1_202403_202503, c.viz_mcd64a1, "MODIS burn scars (2024-03 - 2025-03)", 0);

Map.addLayer(a.bnds_admin_l1_ln.clip(a.aoi_us_box), {palette: "azure"}, "Admin boundaries, level 1", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////