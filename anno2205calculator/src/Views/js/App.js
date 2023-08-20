import logo from '../logo.svg';
import '../css/App.css';
import { BuildingsByResource } from '../../Models/Constants';
import { useState, useRef } from 'react';

function App() {
  const [building, setBuilding] = useState('Enter a resource to get the building that produces it.');
  const resourceInput = useRef();
  
  function GetBuildingByResource() {
    let resource = resourceInput.current?.value;
    let building = '';
    if (resource) {
      building = BuildingsByResource[resource];
      if (!building) {
        building = '';
      }
    }
    setBuilding(building);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{building}</p>
        <input type="text" id="resource" name="resource" ref={resourceInput} />
        <button onClick={() => {GetBuildingByResource()}}>Get Building</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
