import { useRef, useState } from 'react';
import '../css/App.css';
import { PopulationClass, PopulationClasses } from '../../Models/PopulationClasses';
import { ResourceStrings } from '../../Models/Localization';
import { Region, RegionByResident } from '../../Models/Regions';
import { DemandCalculator, DemandInput, DemandOutput } from '../../Controllers/DemandCalculator';
import { ResidentCount, ResidentialComplexCount, Residents } from '../../Models/Resident';
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
    console.log(demandOutput);
    setDemandOutput(demandOutput);
  }

  return (
    <div className="main-app">
      <h1>ANNO 2205 Population Calculator</h1>
      <div className="input-section">
        <div className="inputs">
          {
            PopulationClasses.map((populationClass) => {
              let residenceInput = (
                <div key={populationClass.toString()}>
                  <span>{ResourceStrings.PopulationClass[populationClass]} : </span>
                  <input title={"Enter number of " + ResourceStrings.PopulationClass[populationClass] + " residences"} placeholder="" type="number" id={"buildingFor" + populationClass} name={"buildingFor" + populationClass} ref={element => buildingInputs.current?.set(populationClass, element)} />
                </div>
              );
              let complexInput = null;
              if (RegionByResident[populationClass] === Region.Temperate && populationClass !== PopulationClass.Synthetics) {
                complexInput = (
                  <div key={populationClass.toString() + "_complex"}>
                    <span>Residential Complex for {ResourceStrings.PopulationClass[populationClass]}</span>
                    <input title={"Enter number of " + ResourceStrings.PopulationClass[populationClass] + " residential complexes"} placeholder="" type="number" id={"buildingComplexFor" + populationClass} name={"buildingComplexFor" + populationClass} ref={element => residentialComplexInputs.current?.set(populationClass, element)} />
                  </div>
                );
              }
              return [residenceInput, complexInput];
            })
          }
        </div>
        <button className="input-button" type="button" onClick={() => { btnCalcDemand() }}>Calculate</button>
      </div>
      <div className="output-section">
        {
          demandOutput !== null &&
          <div>
            {
              [...demandOutput.buildingList.values()].map((building) => {
                return <BuildingModule key={"outputBuilding" + building.building} buildingChain={building}></BuildingModule>
              })
            }
          </div>
        }
      </div>
    </div>
  );
}

export default App;
