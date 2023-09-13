import { BuildingChain } from "../../Controllers/DemandCalculator";
import { ResourceStrings } from "../../Models/Localization";
import "../css/BuildingModule.css"

export interface BuildingModuleProps {
    buildingChain: BuildingChain;
}

export function BuildingModule({ buildingChain }: BuildingModuleProps): JSX.Element {
    return (
        <div className="building-module" key={"outputBuilding_container_" + buildingChain.building} >
            <div className="building-module-item" key={"outputBuilding_container_" + buildingChain.building + "_item"}>
                <div key={"outputBuilding_container_" + buildingChain.building + "_name"} className="building-module-name">{ResourceStrings.Buildings[buildingChain.building]}</div>
                <div key={"outputBuilding_container_" + buildingChain.building + "_count"} className="building-module-count">{buildingChain.count}</div>
            </div>
            <div className="building-module-child" key={"outputBuilding_container_" + buildingChain.building + "_children"}>
                {
                    [...buildingChain.buildingList.values()].map((building) => {
                        return <BuildingModule key={"outputBuilding" + building.building} buildingChain={building}></BuildingModule>
                    })
                }
            </div>
        </div>
    );
}