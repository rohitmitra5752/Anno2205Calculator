import { BuildingChain } from "../../Controllers/DemandCalculator";
import { ResourceStrings } from "../../Models/Localization";
import "../css/BuildingModule.css"

export interface BuildingModuleProps {
    buildingChain: BuildingChain;
}

export function BuildingModule({buildingChain}: BuildingModuleProps) : JSX.Element {
    return (
        <div className="building-module">
            <span>{ ResourceStrings.Buildings[buildingChain.building] }</span>
            <span>{ buildingChain.count }</span>
            <div className="building-module-child">
                {
                    [...buildingChain.buildingList.values()].map((building) => {
                        return <BuildingModule buildingChain={building}></BuildingModule>
                    })
                }
            </div>
        </div>
    );
}