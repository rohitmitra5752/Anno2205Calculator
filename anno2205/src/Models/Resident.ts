import { PopulationClass } from "./PopulationClasses";
import { ResourceDemand, ResourceNames, Resources } from "./Resource";

export class Resident {
    residentType: PopulationClass;
    demands: ResourceDemand[];
    constructor(residentType: PopulationClass, demands: ResourceDemand[]) {
        this.residentType = residentType;
        this.demands = demands;
    }
}

export const ResidentCount = {
    [PopulationClass.Workers]: 5,
    [PopulationClass.Operators]: 25,
    [PopulationClass.Executives]: 125,
    [PopulationClass.Investors]: 625,
    [PopulationClass.Synthetics]: 5,
    [PopulationClass.Protectors]: 10,
    [PopulationClass.Scientists]: 50,
    [PopulationClass.Miners]: 10,
    [PopulationClass.Officers]: 50,
    [PopulationClass.Ecologists]: 10,
    [PopulationClass.FieldResearchers]: 50,
}

export const ResidentialComplexCount = {
    [PopulationClass.Workers]: 20,
    [PopulationClass.Operators]: 100,
    [PopulationClass.Executives]: 500,
    [PopulationClass.Investors]: 2500,
    [PopulationClass.Synthetics]: 0,
    [PopulationClass.Protectors]: 0,
    [PopulationClass.Scientists]: 0,
    [PopulationClass.Miners]: 0,
    [PopulationClass.Officers]: 0,
    [PopulationClass.Ecologists]: 0,
    [PopulationClass.FieldResearchers]: 0,
}

export const Residents = {
    [PopulationClass.Workers]: new Resident(PopulationClass.Workers, [
        new ResourceDemand(Resources[ResourceNames.OrganicFood], 1),
        new ResourceDemand(Resources[ResourceNames.Water], 1),
    ]),
    [PopulationClass.Operators]: new Resident(PopulationClass.Operators, [
        new ResourceDemand(Resources[ResourceNames.OrganicFood], 1),
        new ResourceDemand(Resources[ResourceNames.Water], 1),
        new ResourceDemand(Resources[ResourceNames.Rejuvenators], 1),
        new ResourceDemand(Resources[ResourceNames.NeruoImplants], 1),
    ]),
    [PopulationClass.Executives]: new Resident(PopulationClass.Executives, [
        new ResourceDemand(Resources[ResourceNames.OrganicFood], 1),
        new ResourceDemand(Resources[ResourceNames.LuxuryFood], 1),
        new ResourceDemand(Resources[ResourceNames.Water], 1),
        new ResourceDemand(Resources[ResourceNames.VitaDrinks], 1),
        new ResourceDemand(Resources[ResourceNames.Rejuvenators], 1),
        new ResourceDemand(Resources[ResourceNames.Bioenhancers], 1),
        new ResourceDemand(Resources[ResourceNames.NeruoImplants], 1),
        new ResourceDemand(Resources[ResourceNames.IntelliWear], 1),
    ]),
    [PopulationClass.Investors]: new Resident(PopulationClass.Investors, [
        new ResourceDemand(Resources[ResourceNames.OrganicFood], 1),
        new ResourceDemand(Resources[ResourceNames.LuxuryFood], 1),
        new ResourceDemand(Resources[ResourceNames.Water], 1),
        new ResourceDemand(Resources[ResourceNames.VitaDrinks], 1),
        new ResourceDemand(Resources[ResourceNames.Rejuvenators], 1),
        new ResourceDemand(Resources[ResourceNames.Bioenhancers], 1),
        new ResourceDemand(Resources[ResourceNames.AntiGravCompensators], 1),
        new ResourceDemand(Resources[ResourceNames.NeruoImplants], 1),
        new ResourceDemand(Resources[ResourceNames.IntelliWear], 1),
        new ResourceDemand(Resources[ResourceNames.Replicators], 1),
        new ResourceDemand(Resources[ResourceNames.QuantumComputers], 1),
        new ResourceDemand(Resources[ResourceNames.Androids], 1),
    ]),
    [PopulationClass.Synthetics]: new Resident(PopulationClass.Synthetics, [
        new ResourceDemand(Resources[ResourceNames.LuxuryFood], 1),
        new ResourceDemand(Resources[ResourceNames.VitaDrinks], 1),
        new ResourceDemand(Resources[ResourceNames.Bioenhancers], 1),
        new ResourceDemand(Resources[ResourceNames.AntiGravCompensators], 1),
        new ResourceDemand(Resources[ResourceNames.IntelliWear], 1),
        new ResourceDemand(Resources[ResourceNames.Replicators], 1),
        new ResourceDemand(Resources[ResourceNames.QuantumComputers], 1),
        new ResourceDemand(Resources[ResourceNames.Androids], 1),
    ]),
    [PopulationClass.Protectors]: new Resident(PopulationClass.Protectors, [
        new ResourceDemand(Resources[ResourceNames.CannedFood], 1),
        new ResourceDemand(Resources[ResourceNames.VitaDrinks], 1),
        new ResourceDemand(Resources[ResourceNames.NeruoImplants], 1),
    ]),
    [PopulationClass.Scientists]: new Resident(PopulationClass.Scientists, [
        new ResourceDemand(Resources[ResourceNames.CannedFood], 1),
        new ResourceDemand(Resources[ResourceNames.LuxuryFood], 1),
        new ResourceDemand(Resources[ResourceNames.VitaDrinks], 1),
        new ResourceDemand(Resources[ResourceNames.Stimulants], 1),
        new ResourceDemand(Resources[ResourceNames.NeruoImplants], 1),
        new ResourceDemand(Resources[ResourceNames.Replicators], 1),
        new ResourceDemand(Resources[ResourceNames.QuantumComputers], 1),
    ]),
    [PopulationClass.Miners]: new Resident(PopulationClass.Miners, [
        new ResourceDemand(Resources[ResourceNames.Bioenhancers], 1),
        new ResourceDemand(Resources[ResourceNames.Oxygen], 1),
        new ResourceDemand(Resources[ResourceNames.Rejuvenators], 1),
    ]),
    [PopulationClass.Officers]: new Resident(PopulationClass.Officers, [
        new ResourceDemand(Resources[ResourceNames.LunarLunch], 1),
        new ResourceDemand(Resources[ResourceNames.IntelliWear], 1),
        new ResourceDemand(Resources[ResourceNames.Bioenhancers], 1),
        new ResourceDemand(Resources[ResourceNames.AntiGravCompensators], 1),
        new ResourceDemand(Resources[ResourceNames.Androids], 1),
        new ResourceDemand(Resources[ResourceNames.Oxygen], 1),
        new ResourceDemand(Resources[ResourceNames.Rejuvenators], 1),
    ]),
    [PopulationClass.Ecologists]: new Resident(PopulationClass.Ecologists, [
        new ResourceDemand(Resources[ResourceNames.CannedFood], 1),
        new ResourceDemand(Resources[ResourceNames.VitaDrinks], 1),
        new ResourceDemand(Resources[ResourceNames.SmartDrones], 1),
    ]),
    [PopulationClass.FieldResearchers]: new Resident(PopulationClass.FieldResearchers, [
        new ResourceDemand(Resources[ResourceNames.CannedFood], 1),
        new ResourceDemand(Resources[ResourceNames.VitaDrinks], 1),
        new ResourceDemand(Resources[ResourceNames.Stimulants], 1),
        new ResourceDemand(Resources[ResourceNames.Medibots], 1),
        new ResourceDemand(Resources[ResourceNames.SmartDrones], 1),
        new ResourceDemand(Resources[ResourceNames.AllWeatherParkas], 1),
        new ResourceDemand(Resources[ResourceNames.QuantumComputers], 1),
    ]),
}