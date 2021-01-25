import React, {useState, useEffect} from 'react';
import {MenuItem, FormControl, Select, Card, CardContent} from '@material-ui/core'; 
import './App.css';
import InfoCard from './InfoCard';
import Map from "./Map";
import Table from "./Table";
import {sortData} from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  useState({lat:34.80746, lng: -40.4796});
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    const getCountryData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2
        }));
        let sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      });
    };
    getCountryData();
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    });
  };

  return (
    <div className="app">
      <div className="app-left">
        <div className="app-header">
          <h1>COVID 19 TRACKER</h1>
          <FormControl className="app-dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country} >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
            
          </FormControl>
        </div>
        <div className="app-cards">
          <InfoCard title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoCard title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoCard title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>      
        <Map center={mapCenter} zoom={mapZoom}/>
      </div>
      <Card className="app-right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
