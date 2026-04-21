# Planet Tanager data cheatsheet
*Last updated: 21.04.2026*

**Scenario:** *You are a GIS user or remote sensing specialist and would like to start working with Planet Tanager data, particularly data from the Tanager open data spatio-temporal asset catalog (STAC).* 🤔

> [!IMPORTANT]
> **WHERE** can I get Tanager data?

* See the Tanager open data STAC: https://www.planet.com/data/stac/browser/tanager-core-imagery/catalog.json
* See the Tanager sample data in GEE: https://gee-community-catalog.org/projects/tanager/

> [!IMPORTANT]
> **HOW** can I process Tanager data?

* You can use the free [ESA SNAP software](https://step.esa.int/main/download/snap-download/) to export Tanager data into GIS-ready formats for use in ArcGIS or QGGIS.

> [!IMPORTANT]
> **WHAT** are in the data? **WHAT** are the bands?

* The Tanager data you will probably want to work with contain hyperspectral surface reflectance estimates.
* The Tanager surface reflectance data available through the open data STAC, for example, has 466 bands. Of those, bands 1-12 contain different data masks, the next 426 bands (bands 13-438) contain the surface reflectances for wavelengths 376-2,499 nm, the next 426 bands (bands 439-464) contain uncertainties for the surface reflectance bands, and the last two bands (465-466) contain geolocation fields for the latitude and longitude. You can find the full list of bands [here](https://bit.ly/tanager_bands).

> [!IMPORTANT]
> **WHO** produces / provides Tanager data?

* The Tanager constellation is managed by [Planet Labs PBC](https://www.planet.com).

> [!IMPORTANT]
> **WHY** should I be interested in Tanager data?

* Because the data are *hyperspectral* and contain much more information than the *multispectral* data you might already be used to! In theory, hyperspectral data can be used for better discriminating among land cover types than mere multispectral data.

> [!IMPORTANT]
> **WHERE** can I find more information on Tanager?

* See Planet's Tanager [webpage](https://www.planet.com/constellations/tanager/)
* See the *Planet University* [**Introduction to Tanager** course](https://university.planet.com/introduction-to-tanager/)
