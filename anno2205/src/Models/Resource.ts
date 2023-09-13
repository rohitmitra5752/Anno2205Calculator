import { Buildings } from "./Buildings";

export enum ResourceNames {
    Biopolymers,
    ConstructOBots,
    SuperAlloys,
    MetalFoam,
    TitaniumPlating,
    OrganicFood,
    LuxuryFood,
    Water,
    VitaDrinks,
    Rejuvenators,
    IntelliWear,
    Androids,
    CannedFood,
    Stimulants,
    QuantumComputers,
    NeruoImplants,
    Replicators,
    LunarLunch,
    Bioenhancers,
    AntiGravCompensators,
    Algae,
    NanoCeramics,
    Wine,
    SoyBeans,
    Diamonds,
    FlaxFibers,
    Silicon,
    Fruit,
    Cobalt,
    Bioresin,
    Molybdenum,
    Aluminium,
    DeepWaterCorals,
    Fish,
    MethaneIce,
    MoonIce,
    Titanium,
    Helium3,
    RareEarthElements,
    MoonCrops,
    Microchips,
    SynthCells,
    Beef,
    SynapticCircuits,
    MultispecPrisms,
    QubitProcessors,
    SuperCoolants,
    Deuterium,
    Oxygen,
    FusionCells,
    Graphene,
    Iridium,
    Magnetite,
    Petrochemicals,
    SmartDrones,
    AllWeatherParkas,
    Medibots,
}

export class ResourceDemand {
    resource: Resource;
    consumptionRate: number;
    constructor(resource: Resource, consumptionRate: number) {
        this.resource = resource;
        this.consumptionRate = consumptionRate;
    }

    calculateRequiredCount(requirementCount: number): number {
        return (this.consumptionRate / this.resource.productionRate) * requirementCount;
    }


}

export class Resource {
    name: ResourceNames;
    building: Buildings;
    productionRate: number;
    requirements: ResourceDemand[];
    constructor(name: ResourceNames, building: Buildings, productionRate: number) {
        this.name = name;
        this.building = building;
        this.productionRate = productionRate;
        this.requirements = [];
    }

    addRequirement(resource: Resource, consumptionRate: number): void {
        this.requirements.push(new ResourceDemand(resource, consumptionRate));
    }
}

export const Resources = {
    [ResourceNames.Biopolymers]: new Resource(ResourceNames.Biopolymers, Buildings.BiopolymerFactory, 1),
    [ResourceNames.ConstructOBots]: new Resource(ResourceNames.ConstructOBots, Buildings.RobotAssemblyHall, 1),
    [ResourceNames.SuperAlloys]: new Resource(ResourceNames.SuperAlloys, Buildings.PlasmaSmelter, 1),
    [ResourceNames.MetalFoam]: new Resource(ResourceNames.MetalFoam, Buildings.CompressionChamber, 1),
    [ResourceNames.TitaniumPlating]: new Resource(ResourceNames.TitaniumPlating, Buildings.IonWelder, 1),
    [ResourceNames.OrganicFood]: new Resource(ResourceNames.OrganicFood, Buildings.RiceFarm, 1),
    [ResourceNames.LuxuryFood]: new Resource(ResourceNames.LuxuryFood, Buildings.FoodDesignWorkshop, 1),
    [ResourceNames.Water]: new Resource(ResourceNames.Water, Buildings.DesalinizationPlant, 1),
    [ResourceNames.VitaDrinks]: new Resource(ResourceNames.VitaDrinks, Buildings.VitaminCondensor, 1),
    [ResourceNames.Rejuvenators]: new Resource(ResourceNames.Rejuvenators, Buildings.BiomedicalLaboratory, 1),
    [ResourceNames.IntelliWear]: new Resource(ResourceNames.IntelliWear, Buildings.NanoTextileMill, 1),
    [ResourceNames.Androids]: new Resource(ResourceNames.Androids, Buildings.AndroidFactory, 1),
    [ResourceNames.CannedFood]: new Resource(ResourceNames.CannedFood, Buildings.Cannery, 1),
    [ResourceNames.Stimulants]: new Resource(ResourceNames.Stimulants, Buildings.PharmaLab, 1),
    [ResourceNames.QuantumComputers]: new Resource(ResourceNames.QuantumComputers, Buildings.HardwareFabricationPlant, 1),
    [ResourceNames.NeruoImplants]: new Resource(ResourceNames.NeruoImplants, Buildings.NeuroModuleFactory, 1),
    [ResourceNames.Replicators]: new Resource(ResourceNames.Replicators, Buildings.ReplicatorFactory, 1),
    [ResourceNames.LunarLunch]: new Resource(ResourceNames.LunarLunch, Buildings.SpaceGalley, 1),
    [ResourceNames.Bioenhancers]: new Resource(ResourceNames.Bioenhancers, Buildings.CyberneticsFactory, 1),
    [ResourceNames.AntiGravCompensators]: new Resource(ResourceNames.AntiGravCompensators, Buildings.AntiGWorkshop, 1),
    [ResourceNames.Algae]: new Resource(ResourceNames.Algae, Buildings.AlgaeFarm, 1),
    [ResourceNames.NanoCeramics]: new Resource(ResourceNames.NanoCeramics, Buildings.FeldsparQuarry, 1),
    [ResourceNames.Wine]: new Resource(ResourceNames.Wine, Buildings.Vineyard, 1),
    [ResourceNames.SoyBeans]: new Resource(ResourceNames.SoyBeans, Buildings.SoyFarm, 1),
    [ResourceNames.Diamonds]: new Resource(ResourceNames.Diamonds, Buildings.DiamondMine, 1),
    [ResourceNames.FlaxFibers]: new Resource(ResourceNames.FlaxFibers, Buildings.FlaxPlantation, 1),
    [ResourceNames.Silicon]: new Resource(ResourceNames.Silicon, Buildings.SiliconMine, 1),
    [ResourceNames.Fruit]: new Resource(ResourceNames.Fruit, Buildings.FruitPlantation, 1),
    [ResourceNames.Cobalt]: new Resource(ResourceNames.Cobalt, Buildings.CobaltMine, 1),
    [ResourceNames.Bioresin]: new Resource(ResourceNames.Bioresin, Buildings.SunflowerFarm, 1),
    [ResourceNames.Molybdenum]: new Resource(ResourceNames.Molybdenum, Buildings.MolybdenumMine, 1),
    [ResourceNames.Aluminium]: new Resource(ResourceNames.Aluminium, Buildings.AluminiumMine, 1),
    [ResourceNames.DeepWaterCorals]: new Resource(ResourceNames.DeepWaterCorals, Buildings.DeepWaterCoralFarm, 1),
    [ResourceNames.Fish]: new Resource(ResourceNames.Fish, Buildings.FishingHarbor, 1),
    [ResourceNames.MethaneIce]: new Resource(ResourceNames.MethaneIce, Buildings.MethaneExtractor, 1),
    [ResourceNames.MoonIce]: new Resource(ResourceNames.MoonIce, Buildings.CoreIceDriller, 1),
    [ResourceNames.Titanium]: new Resource(ResourceNames.Titanium, Buildings.TitaniumMine, 1),
    [ResourceNames.Helium3]: new Resource(ResourceNames.Helium3, Buildings.Helium3Extractor, 1),
    [ResourceNames.RareEarthElements]: new Resource(ResourceNames.RareEarthElements, Buildings.KREEPGatherer, 1),
    [ResourceNames.MoonCrops]: new Resource(ResourceNames.MoonCrops, Buildings.AeroponicFarm, 1),
    [ResourceNames.Microchips]: new Resource(ResourceNames.Microchips, Buildings.MicrofabricationHall, 1),
    [ResourceNames.SynthCells]: new Resource(ResourceNames.SynthCells, Buildings.SynthcellIncubator, 1),
    [ResourceNames.Beef]: new Resource(ResourceNames.Beef, Buildings.CattleRanch, 1),
    [ResourceNames.SynapticCircuits]: new Resource(ResourceNames.SynapticCircuits, Buildings.SynapticCircuitPlant, 1),
    [ResourceNames.MultispecPrisms]: new Resource(ResourceNames.MultispecPrisms, Buildings.NanoCuttingUnit, 1),
    [ResourceNames.QubitProcessors]: new Resource(ResourceNames.QubitProcessors, Buildings.QubitFactory, 1),
    [ResourceNames.SuperCoolants]: new Resource(ResourceNames.SuperCoolants, Buildings.CryogenicsLab, 1),
    [ResourceNames.Deuterium]: new Resource(ResourceNames.Deuterium, Buildings.DeuteriumExtractor, 1),
    [ResourceNames.Oxygen]: new Resource(ResourceNames.Oxygen, Buildings.OxygenSeperator, 1),
    [ResourceNames.FusionCells]: new Resource(ResourceNames.FusionCells, Buildings.FusionCellPlant, 1),
    [ResourceNames.Graphene]: new Resource(ResourceNames.Graphene, Buildings.GrapheneFactory, 1),
    [ResourceNames.Iridium]: new Resource(ResourceNames.Iridium, Buildings.IridiumMine, 1),
    [ResourceNames.Magnetite]: new Resource(ResourceNames.Magnetite, Buildings.MagnetiteMine, 1),
    [ResourceNames.Petrochemicals]: new Resource(ResourceNames.Petrochemicals, Buildings.PetrochemicalRefinery, 1),
    [ResourceNames.SmartDrones]: new Resource(ResourceNames.SmartDrones, Buildings.SmartDroneFactory, 1),
    [ResourceNames.AllWeatherParkas]: new Resource(ResourceNames.AllWeatherParkas, Buildings.AllWeatherParkaStore, 1),
    [ResourceNames.Medibots]: new Resource(ResourceNames.Medibots, Buildings.MedibotFactory, 1),
};