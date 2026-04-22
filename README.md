# the Hyperspectral Data Toolkit

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18382541.svg)](https://zenodo.org/records/18382541)
[![Update](https://img.shields.io/github/last-commit/bzgeo/hyperspectral_toolkit?label=repo%20last%20updated&style=flat-square)](https://github.com/BzGEO/hyperspectral_toolkit/tree/main)
![Visitor badge](https://visitor-badge.laobi.icu/badge?page_id=bzgeo.hyperspectral_toolkit)

[![GEE badge](https://img.shields.io/badge/Google%20Earth%20Engine-4285F4.svg?style=for-the-badge&logo=Google-Earth-Engine&logoColor=white)](https://bit.ly/gee_repo_hyperspectral)

## Summary
This is a repository of [Google Earth Engine 🌎 (GEE)](https://code.earthengine.google.com) JavaScript code for tools for working with various hyperspectral *open* datasets from NASA (e.g., AVIRIS, EMIT, Hyperion, PACE OCI). One of the dependency packages included in this toolkit provides data on the hyperspectral wavelengths for NASA various spaceborne 🛰️ hyperspectral imagers, namely [EO-1 Hyperion](https://developers.google.com/earth-engine/datasets/catalog/EO1_HYPERION), the ISS [EMIT](https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2A_RFL), and [PACE OCI](https://pace.oceansciences.org/oci.htm) [whose products are *open data*]. Another dependency provides access specifically to PACE OCI land data (since the Hyperion and EMIT data are already available via the [GEE public data catalog](https://developers.google.com/earth-engine/datasets)). Aside from the dependencies, example scripts are provided to allow users to interact with the data, and the geographic and temporal scopes of those examples can be modified to meet users' needs. *Please note* that this repository is a successor, as well as an add-on to the **PACE OCI hyperspectral toolkit** available at https://github.com/BzGEO/PACE_OCI_Toolkit.

## Functions
The scripts are divided into the following main functions: *(i) data discovery, (ii) data visualization, (iii) spectral signature visualization, (iv) data gap filling, (v) time series analysis, and (vi) image classification.*

![](https://github.com/BzGEO/hyperspectral_toolkit/blob/main/_graphics/hyperspectral_gee_toolkit_structure_2025-07-13.PNG)

## 📢 Add this repo to Google Earth Engine 📢
To add the code repository 💾 directly to your GEE account, use the following *bit.ly* 🔗: https://bit.ly/gee_repo_hyperspectral.

## Additional information
1. More info: **PACE OCI** hyperspectral 🛰️ data (**1.2km**): https://pace.oceansciences.org/data_table.htm
2. More info: **ISS EMIT** hyperspectral 🛰️ data available in GEE (**60m**): https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2A_RFL
3. More info: **EO-1 Hyperion** hyperspectral 🛰️ data available in GEE (**30m**): https://developers.google.com/earth-engine/datasets/catalog/EO1_HYPERION
4. More info: **Planet Tanager** hyperspectral 🛰️ data available in GEE (**30m**) via the *Community Data Catalog*: https://gee-community-catalog.org/projects/tanager/
5. More info: **AVIRIS-NG** *airborne* 🛩️ hyperspectral data available in GEE (**1m**): https://developers.google.com/earth-engine/datasets/catalog/projects_neon-prod-earthengine_assets_HSI_REFL_002

**Table 1.** Comparison of select hyperspectral datasets available in GEE.

| Satellite / sensor | Source | Spatial res. (m) | Spectral range | No. spectral bands | Date range |
| --- | --- | --- | --- | --- | --- |
| PACE OCI | NASA | 1,200 | 346-2,258 nm | 122* | March 2024-present |
| EMIT | NASA | 60 | 381-2,493 nm | 285 | Aug. 2022 - present |
| Tanager | Planet | 30 | 376-2,499 nm | 426 | Sept. 2024 - present |
| EO-1 Hyperion | NASA | 30 | 427-2,396 nm | 224 | May 2001 - March 2017 |
| AVIRIS-NG | NASA | 1 | 382-2,511 nm | 426 | May 2014-present |

## Acknowledgements
This work builds off of the [PACE OCI hyperspectral toolkit](https://github.com/bzgeo/pace_oci_toolkit), which was [soft-launched](https://bit.ly/sbg_tim_2025_pace_tk) at the virtual [Technical Interchange Meeting](https://sbg.jpl.nasa.gov/news-events/sbg-sa-tim-2025) of NASA's proposed [Surface Biology and Geology (SBG)](https://sbg.jpl.nasa.gov/) mission. This work is being led by researchers from the [Lab for Applied Science](https://www.uah.edu/essc/laboratory-for-applied-science) of the [Earth System Science Center](https://www.uah.edu/essc) of the [University of Alabama in Huntsville](https://www.uah.edu/) and has been supported by [NASA](https://www.nasa.gov) Earth Action / NASA [Marshall Space Flight Center](https://www.nasa.gov/marshall/). The initial work was being done in the context of an [Early Adopters project](https://pace.oceansciences.org/people_ea.htm?id=127) for PACE. Kudos are due to Dr. Morgaine McKibben (NASA / SSAI), Skye Caplan (NASA / SSAI), and Dr. K. Fred Huemmrich (NASA / UMBC) of the collective PACE team, [Dr. Africa-Flores-Anderson](https://github.com/africaf) (NASA) of the former SBG team, and to [Kelsey Herndon](https://github.com/herndk1), [Eric Anderson](https://github.com/andersoner), Dr. Kevin Horn, Dr. Ashutosh Limaye, and Dan Irwin of NASA MSFC.

<img width="188" height="222" alt="image" src="https://github.com/user-attachments/assets/3499ff24-b54c-4863-97a2-a6b59bc86da6" />

***Disclaimer:*** **NASA provides data or research used in this Toolkit but does not endorse any product or service.**

## Citation

If this toolkit is used in publications, presentations, or other venues, please cite 📝 the following:

Cherrington, E. (2025). Hyperspectral Data Toolkit (Version 1.0.0.1) [Computer software]. https://doi.org/10.5281/zenodo.15873992

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15873992.svg)](https://doi.org/10.5281/zenodo.15873992)

## Contact information

If you have any questions, feel free to contact Emil Cherrington by :envelope_with_arrow: email: **emil.cherrington [at] uah.edu**.
