import { Circle, Popup } from 'react-leaflet';
import React from 'react';
import numeral from 'numeral';

const casesTypeColors = {
    cases: {
      hex: "#017CFF",
      multiplier: 800,
    },
    recovered: {
      hex: "green",
      multiplier: 800,
    },
    deaths: {
      hex: "red",
      multiplier: 2000,
    },
  };

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a,b) => {
        if(a.cases > b.cases){
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData
}

export const showDataOnMap = (data, casesType = 'cases') =>
    data.map((country) => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    ></div>
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                   
                        Total: <span className="info__active">{numeral(country.cases).format("0,0")}</span>
                    </div>
                    <div>
                        <span className="info__today">Today: </span><span className="info__active1">{numeral(country.todayCases).format("+0,0")}</span>
                    </div>

                    <div className="info-recovered">
                        Recover: <span className="info__recover">{numeral(country.recovered).format("0,0")}</span>
                    </div>
                    <div>
                    <span className="info__today">Today: </span><span className="info__recover1">{numeral(country.todayRecovered).format("+0,0")}</span>
                    </div>

                    <div className="info-deaths">
                        Death: <span className="info__death">{numeral(country.deaths).format("0,0")}</span>
                    </div>
                    <div>
                    <span className="info__today">Today: </span><span className="info__death1">{numeral(country.todayDeaths).format("+0,0")}</span>
                    </div>
                </div>
            </Popup>
        </Circle>
    ));

export const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0")}` : "+0";