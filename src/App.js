import React from 'react';
import {MenuItem, FormControl, Select, Card, CardContent} from '@material-ui/core'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="app-dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">WorldWide</MenuItem>
          <MenuItem value="worldwide">Option2</MenuItem>
          <MenuItem value="worldwide">Option3</MenuItem>
          <MenuItem value="worldwide">Option4</MenuItem>
        </Select>
        
      </FormControl>
    </div>
  );
}

export default App;
