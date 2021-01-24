import React, {useState, useEffect} from 'react';
import {MenuItem, FormControl, Select, Card, CardContent} from '@material-ui/core'; 
import './App.css';
import InfoCard from './InfoCard';
import Map from "./Map";

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountryData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2
        }));
        setCountries(countries);
      });
    };
    getCountryData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

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
          <InfoCard title="Coronavirus Cases" cases={123} total={2000}/>
          <InfoCard title="Recovered" />
          <InfoCard title="Deaths" />
        </div>      
        <Map />
      </div>
      <Card className="app-right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
