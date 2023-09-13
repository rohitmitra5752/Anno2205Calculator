import { useRef, useState } from 'react';
import '../css/App.css';
import { PopulationClass, PopulationClasses } from '../../Models/PopulationClasses';
import { ResourceStrings } from '../../Models/Localization';
import { Region, RegionByResident } from '../../Models/Regions';
import { DemandCalculator, DemandInput, DemandOutput } from '../../Controllers/DemandCalculator';
import { PicByPopulationClass, ResidentCount, ResidentialComplexCount, Residents } from '../../Models/Resident';
import { BuildingModule } from './BuildingModule';

function App(): JSX.Element {
  const [demandOutput, setDemandOutput] = useState<DemandOutput | null>(null);
  const buildingInputs = useRef<Map<PopulationClass, HTMLInputElement | null>>(new Map());
  const residentialComplexInputs = useRef<Map<PopulationClass, HTMLInputElement | null>>(new Map());

  function btnCalcDemand() {
    const demandInput = new DemandInput();
    PopulationClasses.forEach((populationClass) => {
      const numberOfBuildings = parseInt(buildingInputs.current?.get(populationClass)?.value ?? "0");
      let demandCount = numberOfBuildings * ResidentCount[populationClass];
      if (RegionByResident[populationClass] === Region.Temperate && populationClass !== PopulationClass.Synthetics) {
        const numberOfComplexes = parseInt(residentialComplexInputs.current?.get(populationClass)?.value ?? "0");
        const demandCountFromComplexes = numberOfComplexes * ResidentialComplexCount[populationClass];
        if (!isNaN(demandCountFromComplexes) && demandCountFromComplexes > 0) {
          demandCount += demandCountFromComplexes;
        }
      }
      if (!isNaN(demandCount) && demandCount > 0) {
        demandInput.addDemand(Residents[populationClass], demandCount);
      }
    });
    const demandOutput = DemandCalculator.calculate(demandInput);
    setDemandOutput(demandOutput);
  }

  return (
    <div className="main-app" key="main-app">
      <h1 key="app-header">ANNO 2205 Population Calculator</h1>
      <div className="input-section" key="input-section">
        <div className="inputs" key="inputs">
          <div className="input-header" key="input-header">
            <div key="header_pic" className="input-header-item input-picture"></div>
            <div key="header_residence" className="input-header-item input-residence">Residence</div>
            <div key="header_complex" className="input-header-item input-complex">Residential Complex</div>
          </div>
          {
            PopulationClasses.map((populationClass) => {
              let residenceInput = (
                <div key={"input_" + populationClass.toString() + "_residence"} className="input-item">
                  <input min="0" className="input-box" title={"Enter number of " + ResourceStrings.PopulationClass[populationClass] + " residences"} placeholder="" type="number" id={"buildingFor" + populationClass} name={"buildingFor" + populationClass} ref={element => buildingInputs.current?.set(populationClass, element)} />
                </div>
              );
              let complexInput = null;
              if (RegionByResident[populationClass] === Region.Temperate && populationClass !== PopulationClass.Synthetics) {
                complexInput = (
                  <div key={"input_" + populationClass.toString() + "_complex"} className="input-item">
                    <input min="0" className="input-box" title={"Enter number of " + ResourceStrings.PopulationClass[populationClass] + " residential complexes"} placeholder="" type="number" id={"buildingComplexFor" + populationClass} name={"buildingComplexFor" + populationClass} ref={element => residentialComplexInputs.current?.set(populationClass, element)} />
                  </div>
                );
              }
              return (
                <div className="input-column" key={"input-column_" + populationClass.toString()}>
                  <div key={"input_pic_" + populationClass.toString()} className="input-item input-picture">
                    <img key={"pic_" + populationClass.toString()} src={PicByPopulationClass[populationClass]} alt={"Pic for " + ResourceStrings.PopulationClass[populationClass]} />
                    <span key={"pic_text_" + populationClass.toString()} className="input-picture-text">{ResourceStrings.PopulationClass[populationClass]}</span>
                  </div>
                  {residenceInput}
                  {complexInput}
                </div>
              );
            })
          }
        </div>
        <div key="buttonRow" className="button-row">
          <button key="calcBtn" className="input-button" type="button" onClick={() => { btnCalcDemand() }}>Calculate</button>
        </div>
      </div>
      {
        demandOutput !== null &&
        <div className="output-section" key="output-section">
          <hr />
          <div className="output-table" key="output-table">
            {
              [...demandOutput.buildingList.values()].map((building) => {
                return <BuildingModule key={"outputBuilding" + building.building} buildingChain={building}></BuildingModule>
              })
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
