import React from "react";
import Style from "./mapStyling";
import Tooltip from "./tooltips";
import Popup from "./popups";

function Data() {
  return {
    explorer: {
      // <---START HERE!!--->
      config: {
        showInfoButton: true, // show more information for all data sections
        showDownloadButton: true, // show download button if there is a link to the dataset
        chartIsLinkedTo: null, // the datasetID the chart should be linked to, if no linking write chartIsLinkedTo: null
        showLandingPage: false, // toggle landing page
      },

      // ADD YOUR BASEMAP HERE
      baseMap: {
        src:
          "https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png",
        attribution:
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>",
        center: [46.5, 6.6],
        zoom: 13,
        labelsSrc:
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
      },
      /*Example of satelite basemap
      src:
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution:
          "attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'",
      */




      /* <--- IN THIS ARRAY ALL DATASECTIONS ARE INCLUDED --->
      Each datasection include:
      id -- order in array 
      title -- title of section
      
      infotext -- text that will be diplayed in the secondary panel if showInfoButton: true
      img -- image for secondary panel (optional) should be saved in static/images/

      expanded -- if the secion is expanded or collapsed by default (true or false)
       */
      dataSections: [
        {
          id: 0,
          title: "Heat Mitigation",
          infotext: [
            {
              subtitle: "Description",
              text: (
                <div>
                  These maps show the urban heat island temperature reduction that would be obtained by planting trees.{" "}
                  <a
                    href="https://github.com/martibosch/lausanne-greening-scenarios"
                    target="_blank"
                    rel="noopener noreferrer">
                    Read more
                  </a>
                </div>
              ),
            },
            
          ],
          /*img: "natcap.png",*/
          expanded: false,
        },
        {
          id: 1,
          title: "Carbon storage",
          infotext: [
            {
              subtitle: "Description",
              text: (
                <div>
                  Carbon storage in Vaud, for the years 85, 97, 09 and 18.
                
                 <a
                    href="https://github.com/martibosch/carbon-sequestration-vaud"
                    target="_blank"
                    rel="noopener noreferrer">
                    Read more
                  </a>
                </div>
              ),
            },
            {
              subtitle: "Method",
              text: (
                <div>
                  (Should link to InvEST?)
                </div>
              ),
            },
          ],
          expanded: true,
        },
      ],






      /* <--- IN THIS ARRAY ALL DATASETS ARE INCLUDED --->
      Each dataset include:
      id -- order in array 
      sectionID -- which section the dataset belongs to
      title -- title of dataset
      type -- what type of source (choose between shapefile, tiles (webhosted) or rasters (tif - must be projected with EPSG:4326)  )
      src -- file name (place the files in the corresponding folders for shapefile .. )
      legendSrc -- filename of the lagend (place it in the legend folder)
      selected -- If the dataset should be selected by default
      link -- link for data download (optional)
      style -- custom styles for shapefiles and rasters (create them in mapstyling.js and add them here)

      ONLY FOR SHAPEFILES 
      styleProperty -- the property you want to use for styling the map (if conditional styling based on properties in the shapefile)
      tooltip -- created in tooltips.js
      popup -- created in popups.js
      
      If map layer is linked to chart:
      chartProperties -- which properties from the shapefile to be used 
      namesOfProperties -- Names of the properties (use the same names in the chart for the colors)
       */
      datasets: [
        {
          id: 0,
          sectionID: 0,
          title: "Temperature reduction with 25% tree cover",
          type: "raster",
          src: "heat-mitigation-0.25-4326.tif", // must be projected with EPSG:4326
          style: Style().redsColor,
          selected: false,
        },
        {
          id: 1,
          sectionID: 0,
          title: "Temperature reduction with 50% tree cover",
          type: "raster",
          src: "heat-mitigation-0.5-4326.tif", // must be projected with EPSG:4326
          style: Style().redsColor,
          selected: false,
        },
        {
          id: 2,
          sectionID: 0,
          title: "Temperature reduction with 75% tree cover",
          type: "raster",
          src: "heat-mitigation-0.75-4326.tif", // must be projected with EPSG:4326
          style: Style().redsColor,
          selected: false,
        },
        {
          id: 3,
          sectionID: 0,
          title: "Temperature reduction with 100% tree cover",
          type: "raster",
          src: "heat-mitigation-1.0-4326.tif", // must be projected with EPSG:4326
          style: Style().redsColor,
          selected: false,
        },
        {
          id: 4,
          sectionID: 0,
          title: "Tree Canopy",
          type: "raster",
          src: "tree-canopy-4326.tif", // must be projected with EPSG:4326
          style: Style().greensColor,
          selected: false,
        },
        {
          id: 5,
          sectionID: 1,
          title: "Carbon stored (1985)",
          type: "raster",
          src: "tot_c_cur_LULC85_18-4326.tif", // must be projected with EPSG:4326
          style: Style().purplesColor,
          selected: true,
        },
        {
          id: 6,
          sectionID: 1,
          title: "Carbon stored (1997)",
          type: "raster",
          src: "tot_c_cur_LULC97_18-4326.tif", // must be projected with EPSG:4326
          style: Style().purplesColor,
          selected: true,
        },
        {
          id: 7,
          sectionID: 1,
          title: "Carbon stored (2009)",
          type: "raster",
          src: "tot_c_cur_LULC09_18-4326.tif", // must be projected with EPSG:4326
          style: Style().purplesColor,
          selected: true,
        },
        {
          id: 8,
          sectionID: 1,
          title: "Carbon stored (2018)",
          type: "raster",
          src: "tot_c_cur_LULC18_18-4326.tif", // must be projected with EPSG:4326
          style: Style().purplesColor,
          selected: true,
        },
      ],





      /* HERE YOU INCLUDE THE CHART --remove if you don't want a chart
      A chart include:
      title -- chart title
      yLabel -- label of y axis
      columns -- data for the chart - the first row includes the x-labels
      colors -- colors for the data 
      type -- line or bar
      yMax,yMin -- optional max and min values for the y-axis
      chart: {
        title: "Chart linked to map",
        yLabel: "Example y Label",
        columns: [], // empty if linked chart
        colors: {
          // same name as stated in the namesOfProperties
          Property1: "#66383D",
          Property2: "#EAC7CB",
          Property3: "E67F8B",
        },
        type: "bar",
        yMax: 2500, // optional max value on axis
      },*/




      /* Example of a non linked chart
          title: "Example Line chart",
          yLabel: "Example y Label",
          columns: [
            ["x-label", "Label-1", "Label-2", "Label-3"],

            ["Data-1", 30, 10, 25],
            ["Data-2", 11, 13, 5],
            ["Data-3", 10, 15, 20],
          ],
          colors: {
            "Data-1": "#a6a6a6",
            "Data-2": "#ffd633",
            "Data-3": "#009933",
          },
          type: "line",
        }, */
    },
  };
}

export default Data;
