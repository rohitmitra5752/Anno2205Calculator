import { Buildings } from "../Models/Buildings";
import { Resident } from "../Models/Resident";
import { ResourceDemand } from "../Models/Resource";

export class DemandInput {
    residentList: Map<Resident, number>;
    constructor() {
        this.residentList = new Map<Resident, number>();
    }

    addDemand(resident: Resident, count: number): void {
        this.residentList.set(resident, count);
    }
}

export class BuildingChain {
    building: Buildings;
    count: number;
    buildingList: Map<Buildings, BuildingChain>;

    constructor(building: Buildings, count: number) {
        this.building = building;
        this.count = count;
        this.buildingList = new Map<Buildings, BuildingChain>();
    }

    addBuildingChain(buildingChain: BuildingChain): void {
        this.buildingList.set(buildingChain.building, buildingChain);
    }

    mergeBuildingChain(buildingChain: BuildingChain): void {
        if (!buildingChain) {
            return;
        }
        if (this.building === buildingChain.building) {
            this.count += buildingChain.count;
            this.buildingList.forEach((value, key) => {
                value.mergeBuildingChain(buildingChain.buildingList.get(key)!);
            });
        }
    }
}

export class DemandOutput {
    buildingList: Map<Buildings, BuildingChain>;
    constructor() {
        this.buildingList = new Map<Buildings, BuildingChain>();
    }

    addOutput(buildingChain: BuildingChain): void {
        if (this.buildingList.has(buildingChain.building)) {
            this.buildingList.get(buildingChain.building)!.mergeBuildingChain(buildingChain);
        } else {
            this.buildingList.set(buildingChain.building, buildingChain);
        }
    }
}

export abstract class DemandCalculator {

    static calculate(demandInput: DemandInput): DemandOutput {
        let demandOutput = new DemandOutput();
        demandInput.residentList.forEach((count, resident) => {
            resident.demands.forEach((demand) => {
                demandOutput.addOutput(DemandCalculator.getBuildingForDemand(demand, count));
            });
        });
        return demandOutput;
    }

    private static getBuildingForDemand(demand: ResourceDemand, demandCount: number): BuildingChain {
        let calculatedCount = demand.calculateRequiredCount(demandCount);
        let buildingChain = new BuildingChain(demand.resource.building, calculatedCount);
        for (const requirements of demand.resource.requirements) {
            buildingChain.addBuildingChain(DemandCalculator.getBuildingForDemand(requirements, calculatedCount));
        }
        return buildingChain;
    }
}