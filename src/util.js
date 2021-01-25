import { Circle, Popup } from "react-leaflet";
import React from "react";

const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      multiplier: 2000,
    },
};

export const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.cases > b.cases) {
            return -1;
        }else{
            return 1;
        }
    });
    return sortedData;
};

export const showDataOnMap = (data, casesType="cases") => (
    data.map(country => (
        <Circle center={[data.countryInfo.lat, data.countryInfo.long]} fillOpacity={0.5} color={casesTypeColors[casesType].hex} fillColor={casesTypeColors[casesType].hex} 
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
        >

        </Circle>
    ))
)