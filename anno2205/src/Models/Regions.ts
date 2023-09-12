import { PopulationClass } from "./PopulationClasses";

export enum Region {
    Temperate,
    Arctic,
    Lunar,
    Tundra,
}

export const Regions = [
    Region.Temperate,
    Region.Arctic,
    Region.Lunar,
    Region.Tundra,
];

export const RegionByResident = {
    [PopulationClass.Workers]: Region.Temperate,
    [PopulationClass.Operators]: Region.Temperate,
    [PopulationClass.Executives]: Region.Temperate,
    [PopulationClass.Investors]: Region.Temperate,
    [PopulationClass.Synthetics]: Region.Temperate,
    [PopulationClass.Protectors]: Region.Arctic,
    [PopulationClass.Scientists]: Region.Arctic,
    [PopulationClass.Miners]: Region.Lunar,
    [PopulationClass.Officers]: Region.Lunar,
    [PopulationClass.Ecologists]: Region.Tundra,
    [PopulationClass.FieldResearchers]: Region.Tundra,
};