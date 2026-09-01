# Planet Tanager data cheatsheet
*Last updated: 12.05.2026*

## Scenario
***You*** *are a GIS user or remote sensing specialist and would like to start working with Planet Tanager data, particularly data from the Tanager open data spatio-temporal asset catalog (STAC).* 🤔

## Description
"Tanager is Planet's fleet of powerful hyperspectral imaging satellites... Tanager-1 launched on August 16th, 2024 and was developed by Planet in collaboration with the Carbon Mapper Coalition. Tanager uses a state-of-the-art imaging spectrometer design developed at NASA's Jet Propulsion Laboratory (NASA JPL)... Tanager has the capabilities to aid in a variety of industries and study areas, including: methane detection and quantification, methane monitoring, biodiversity assessments, mineral mapping, water quality assessments, and much more." (*source: [Planet University](https://university.planet.com/introduction-to-tanager/2311691/scorm/9fb91odscxmb), 2025*)

> [!IMPORTANT]
> **WHERE** can I get Tanager data?

* See the Tanager open data STAC: https://www.planet.com/data/stac/browser/tanager-core-imagery/catalog.json
* See the Tanager sample data in GEE: https://gee-community-catalog.org/projects/tanager/

> [!IMPORTANT]
> **HOW** can I process Tanager data?

* You can use the free [ESA SNAP software](https://step.esa.int/main/download/snap-download/) to export Tanager data into GIS-ready formats (i.e., GeoTIFF) for use in ArcGIS or QGGIS. Here are [detailed instructions](https://github.com/BzGEO/Hyperspectral_Toolkit/blob/main/misc/planet_tanager__geotif_generation_2026-05-01.pdf).

> [!IMPORTANT]
> **WHAT** are in the data? **WHAT** are the bands?

* The Tanager data you will probably want to work with contain hyperspectral **surface reflectance estimates**.
* The Tanager surface reflectance data available through the open data STAC, for example, has a whopping **866 bands**. Of those, bands 1-12 contain different data masks, the next 426 bands (bands 13-438) contain the surface reflectances for wavelengths 376-2,499 nm, the next 426 bands (bands 439-864) contain uncertainties for the aforementioned surface reflectance bands, and the last two bands (865-466) contain geolocation fields for the latitude and longitude. You can find the full list of bands [here](https://bit.ly/tanager_bands).

> [!IMPORTANT]
> **WHO** produces / provides Tanager data?

* The Tanager constellation is managed by [Planet Labs PBC](https://www.planet.com).

> [!IMPORTANT]
> **WHY** should I be interested in Tanager data?

* Because the data are *hyperspectral* and contain much more information than the *multispectral* data you might already be used to! In theory, hyperspectral data can be used for better discriminating among land cover types than mere multispectral data.
* For instance, while both Tanager and Landsat-8 have a 30m spatial resolution, Tanager has [426 spectral bands](https://planet.widen.net/s/wq9dsgzvv6/planet-userdocumentation-tanager), compared to the [9 spectral bands](https://www.usgs.gov/faqs/what-are-band-designations-landsat-satellites) of the Operational Land Imager of Landsat-8 and Landsat-9.

> [!IMPORTANT]
> **WHERE** can I find more information on Tanager?

* See Planet's Tanager [webpage](https://www.planet.com/constellations/tanager/)
* See the [Tanager documentation](https://docs.planet.com/data/imagery/tanager/)
* See the [Tanager product specifications](https://planet.widen.net/s/wq9dsgzvv6/planet-userdocumentation-tanager)
* See the *Planet University* [**Introduction to Tanager**](https://university.planet.com/introduction-to-tanager/) course
* See the recent report on Tanager data quality: [Planet L1B Data Quality Q4 2025 Report: Status of Calibration and Data Quality for the Tanager Constellation](https://support.planet.com/hc/en-us/article_attachments/35922771135901)

> [!IMPORTANT]
> **WHERE** can I find more information on hyperspectral data in general?

* See NASA ARSET's course on [Hyperspectral Data for Land and Coastal Systems](https://www.earthdata.nasa.gov/learn/trainings/hyperspectral-data-land-coastal-systems) (2021)
* Also see NASA ARSET's [Introduction to Plankton, Aerosol, Cloud, Ocean Ecosystem (PACE) Hyperspectral Observations for Water Quality Monitoring](https://www.earthdata.nasa.gov/learn/trainings/introduction-plankton-aerosol-cloud-ocean-ecosystem-pace-hyperspectral-observations) (2024) course
