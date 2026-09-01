# Planet Tanager Open Data Competition
## Case Study: Bay of Corozal, Belize

*Last updated: 31st August 2026*

## About
Per the guidelines of the Tanager Open Data Competition, the following constitutes a 'lightning' case study focused on the Corozal Bay of northern Belize.

## Objectives
The objectives of this research were as follows:
* compare data from Tanager-1 data from other sources
* evaluate the quality of Tanager-1 data

## Methods
* Planet Tanager-1 data over Belize's Corozal Bay were acquired in HDF5 format from the [Tanager Open Spatio-Temporal Asset Catalog (STAC)](https://www.planet.com/data/stac/browser/tanager-core-imagery/catalog.json).
* That data were acquired on 24 August 2025.
* The specific data can be found [here](https://www.planet.com/data/stac/browser/tanager-core-imagery/coastal-water-bodies/20250824_171857_84_4001/20250824_171857_84_4001.json).
* Due to processing challenges encountered with the orthorectified surface reflectance product (**ortho_sr_hdf5**), the basic surface reflectance product (**basic_sr_hdf5**) was selected, and processed using SNAP version 13.
* The instructions for processing the data using SNAP were also saved as a [tutorial](https://github.com/BzGEO/Hyperspectral_Toolkit/blob/main/planet_tanager/planet_tanager__geotif_generation_2026-05-01.pdf) and shared with the broader community via the [Planet Community forum](https://community.planet.com/groups/tanager-open-data-competition-105).
* For comparison with the Tanager-1 data, other image datasets acquired on the same date were also explored.
* Ultimately, that search resulted in the discovery that NASA's EMIT instrument had also imaged the same area on the same date, as had Landsat-8 OLI, and PACE OCI. (The PACE OCI data were acquired in the afternoon, whereas the Tanager-1, EMIT, and Landsat-8 OLI data were all acquired in the morning.)
* For comparison with EMIT's 60m spatial resolution, the Tanager-1 imagery were also resampled from ~32m resolution to 60m resolution.
* For ease of comparison with the other data, which were either already available in the Google Earth Engine (GEE) cloud computing platform (e.g., EMIT, Landsat-8) or uploaded to it (PACE OCI), the Tanager-1 data were uploaded to GEE.
* For the purpose of illustrating the spectral characteristics of Tanager-1, a limited number of land cover samples were extracted from the imagery, namely: broadleaf forest, mangrove forest, cropland, urban areas, and open water.
* Spectral signatures were then extracted from the four satellites.

## Results

* **Figure 1** illustrates the comparison of the Tanager-1 and EMIT images, in false color. While both instruments acquired imagery of the Bay of Corozal in the morning, the timings did differ, as illustrated by the cloud patterns. Given that the Tanager-1 data were resampled to match the 60m resolution of the EMIT imagery, at the scale shown, differences are not easily seen, and a similar stretching and false color color combination was applied to both images. In the false color shown, vegetated areas are shown in green, non-vegetated areas are shown in shades of pink, water is shown in dark blue to purple, and clouds are white.

<img width="2868" height="1456" alt="image" src="https://github.com/user-attachments/assets/92215029-50ac-4006-ae72-d35a1daba873" />

**Figure 1.** Comparison of false color composites from EMIT and Planet Tanager, both acquired on 24 Aug. 2025 (*generated using script 1*)

* In contrast to **Figure 1**, the spectral differences between Tanager-1 and EMIT are readily apparent in a comparison of **Figures 2-3**. **Figure 4** (derived from PACE OCI) and **Figure 5** (derived from Landsat-8 OLI) illustrate additional contrasts. For instance, the detail from Tanager-1's 426 spectral bands provides greater detail than that of EMIT's 285 spectral bands. Additionally, while PACE OCI is hyperspectral in the visible to near-infrared part of the electromagnetic spectrum, the lack of many shortwave infrared bands is visible in **Figure 4**, when compared with the patterns visible in **Figures 2-3**. That said, the spectral signatures extracted from PACE OCI appear much more detailed than the ones extracted from Landsat-8 OLI that are shown in **Figure 5**.

<img width="2658" height="1102" alt="image" src="https://github.com/user-attachments/assets/8b5d7b40-a9e3-4e7f-9de8-d4bf899788f4" />

**Figure 2.** Spectral signatures derived from Planet Tanager imagery (*generated using script 2*)

<img width="2658" height="1110" alt="image" src="https://github.com/user-attachments/assets/f136f829-2dd2-4e48-8d73-3dc9892ccdb8" />

**Figure 3.** Spectral signatures derived from EMIT imagery (*generated using script 2*)

<img width="2670" height="1122" alt="image" src="https://github.com/user-attachments/assets/77d6b182-ea1d-487e-9827-0b5e10e214f7" />

**Figure 4.** Spectral signatures derived from PACE OCI imagery (*generated using script 2*)

<img width="2658" height="1110" alt="image" src="https://github.com/user-attachments/assets/12df9a7b-6e7a-4d5f-b381-5ec6db505fcf" />

**Figure 5.** Spectral signatures derived from Landsat-8 OLI imagery (*generated using script 2*)

## Discussion
* Comparison of **Figures 2-3** highlights notable distinctions in spectral response patterns between Tanager-1 and EMIT.
* In the visible wavelengths, the open water posssesses around 11% reflectance in Tanager-1, but only around 3.5% reflectance in EMIT.
* One therefore wonders if the differences in reflectance may be due to angular differences or to the atmospheric corrections that have been applied. The latter is something that could be explored via other case studies, for future research.
* That said, differences notwithstanding, the overall patterns from EMIT and Tanager-1 are similar, likely meaning that the data should be interoperable.
* It should also be noted that the presence of much higher cloud cover in the PACE OCI imagery (afternoon data acquisition) may have impacted some of the spectral signatures shown in **Figure 4**, which has the spectral signatures of the broadleaf forest seeming much closer to that of open water.
* Additional evaluation would be warranted, particularly using spectrally invariant sites / features.

## Conclusions
* This case study has demonstrated how Tanager-1 data over coastal Belize compares with images acquired on the same day by fellow hyperspectral instruments EMIT and OCI.
* Despite the differences in spatial resolution - addresses via spatial resampling - and spectral resolution, given that the overall spectral responses from EMIT and Tanager-1 are similar, this would seem to point to the potential interoperability between the sensors, although additional research is warranted.

## Scientific code
* Source **Google Earth Engine** repo: https://bit.ly/gee_repo_hyperspectral
  * [Script](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A03_spectral_signatures%2Fexample_bz_czl_matchup_00.js) for visualizing and comparing Planet Tanager and EMIT imagery of the Corozal Bay, Belize
  * [Script](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A03_spectral_signatures%2Fexample_bz_czl_matchup_01.js) for visualizing and comparing spectral signatures from Planet Tanager, EMIT, PACE OCI, Landsat-8 OLI
  * [Script](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_planet_tanager.js) for loading Planet Tanager band wavelengths

## Acknowledgements
This work builds off of the [Hyperspectral Toolkit](https://github.com/BzGEO/Hyperspectral_Toolkit/). This work was initially led by researchers from the [Lab for Applied Science](https://www.uah.edu/essc/laboratory-for-applied-science) of the [Earth System Science Center](https://www.uah.edu/essc) of the [University of Alabama in Huntsville](https://www.uah.edu/) and has been supported by the EarthRISE Project Office at [NASA](https://www.nasa.gov)'s [Marshall Space Flight Center](https://www.nasa.gov/marshall/). The initial work was being done in the context of an [Early Adopters project](https://pace.oceansciences.org/people_ea.htm?id=127) for PACE. Kudos are due to Dr. Morgaine McKibben (NASA / SSAI), Skye Caplan (NASA / SSAI), and Dr. K. Fred Huemmrich (NASA / UMBC) of the collective PACE team. [Planet Labs PBC](www.planet.com) is acknowledged for the Tanager open data that have been provided. Google's [Earth Engine](https://earthengine.google.com/) team are acknowledged for the support provided in terms of compute and storage.
