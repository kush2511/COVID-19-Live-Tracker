import React, { useState,useEffect } from 'react';
import './App.css';
import { Card, CardContent} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import {sortData,prettyPrintStat} from './util';
import LineGraph from './LineGraph';
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import 'leaflet/dist/leaflet.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796,});
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      "& > span": {
        marginRight: 5,
        fontSize: 15,
      },
    },
  });

  const classes = useStyles();

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
    })
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.country,
            flag: country.countryInfo.flag
          }
        ))

        countries.push({
          name: "Worldwide",
          value: "Worldwide",
          flag:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCpFQx975ic9d6LvKbcKy3aYcK1dq-qhbymA&usqp=CAU",
        });

        const sortedData = sortData(data);
        setTableData(sortedData);
        setMapCountries(data);
        setCountries(countries);
      })
    }
    getCountriesData();
  }, []);

  //console.log(country);

  const onCountryChange = async (e,country) => {
    if(country === null) return;
    const countryCode = country.value;
    //console.log(e.target.value);
    //console.log(countryCode);
    setCountry(countryCode);

    const url = countryCode === 'Worldwide' ? 'https://disease.sh/v3/covid-19/all' : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    //console.log(countryCode);

    await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setCountry(countryCode);
      //here data is json data
      setCountryInfo(data);
      //console.log(countryCode)
      if (countryCode !== "Worldwide") {
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(3);
      } else {
        setMapZoom(2);
      }
      //setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      //setMapCenter({lat: data.countryInfo.lat, lng: data.countryInfo.long})
      // setMapZoom(4);
    })
  }

  return (
    <div className="app">

      <div className="app__left">
        {/* Header */}
        <div className="app__header">
          {/* Title + select input dropdown field */}
          <img src="https://i.imgur.com/t23ZvUI.png" alt="covid-19"/>
          <Autocomplete
            id="country-select"
            className="app__dropdown"
            size = 'medium' 
            options={countries}
            classes={{
              option: classes.option,
            }}
            autoHighlight
            onChange={onCountryChange}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <React.Fragment>
                <span>
                  <img className="app__flag" src={option.flag} alt="flag"/>
                </span>
                <p className="app__flagName">{option.name}</p>
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: false, // disable autocomplete and autofill
                }}
              />
            )}
          />
        </div>

        <div className="app__stats">

          {/* InfoBoxes title="Cases" */}
          <InfoBox isActive
          active={casesType === 'cases'}
          onClick={(e) => setCasesType('cases')}
          title="Active" 
          className="app__active"
          cases={prettyPrintStat(countryInfo.todayCases)} 
          total={prettyPrintStat(countryInfo.cases)}/>
          
          {/* {console.log(countryInfo)} */}

          {/* InfoBoxes title="Recovered" */}
          <InfoBox active={casesType === 'recovered'}
          onClick={(e) => setCasesType('recovered')}
          title="Recovered" 
          className="app__recover" 
          cases={prettyPrintStat(countryInfo.todayRecovered)} 
          total={prettyPrintStat(countryInfo.recovered)}/>

          {/* InfoBoxes title="Deaths"*/}
          <InfoBox isDeath
          active={casesType === 'deaths'}
          onClick={(e) => setCasesType('deaths')}
          title="Deaths"
          className="app__death" 
          cases={prettyPrintStat(countryInfo.todayDeaths)} 
          total={prettyPrintStat(countryInfo.deaths)}/>
        </div>

        {/* Map */}
        <Map casesType={casesType}
        countries={mapCountries}
        center={mapCenter}
        zoom={mapZoom}
        />

      </div>

      <Card className="app__right">
        <CardContent>

          {/* Table */}
          <h3>Cases By Country</h3>
          {/* {console.log(tableData)}
          {console.log(country)} */}
          <Table countries={tableData}/>
          <h3 className="app__graphTitle">{countryInfo.country} Reported {casesType} Rate</h3>

        {/* Graph */}
        <LineGraph className="app__graph" casesType={casesType} country={country}/>
        {/* {console.log(countryInfo.country)}
        {console.log("Country", country)} */}
        {/*  casesType={casesType} */}

        </CardContent>

      </Card>

    </div>
  );
}

export default App;

//MenuItem, FormControl, Select,
// <FormControl className="app__dropdown">
//             <Select variant="outlined" value={country} onChange={onCountryChange}>
//               <MenuItem value="Worldwide">{<img className="app__flag" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCpFQx975ic9d6LvKbcKy3aYcK1dq-qhbymA&usqp=CAU"} alt="Loading"/>}<p className="app__flagName">Worldwide</p></MenuItem>
//               {
//                 countries.map(country => (
//                 <MenuItem value={country.value}>{<img className="app__flag" src={country.flag} alt="Loading"/>} <p className="app__flagName">{country.name}</p></MenuItem>
//                 //{<img className="app__flag" src={country.flag} alt="Loading"/>}{<img className="app__flag" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN-nNrffcq1rEtu3SdtyZQH4IWx9KQtcmQwg&usqp=CAU"} alt="Loading"/>}
//                 ))
//               }

//               {/* <MenuItem value="worldwide">Worldwide</MenuItem>
//               <MenuItem value="worldwide">Worldwide</MenuItem> */}
//             </Select>
//           </FormControl>