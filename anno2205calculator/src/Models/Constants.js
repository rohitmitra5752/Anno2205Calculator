const Environments = {
    Temperate: 'Temperate',
    Arctic: 'Arctic',
    Lunar: 'Lunar',
    Tundra: 'Tundra',
};

const PopulationClasses = {
    Workers: 'Workers',
    Operators: 'Operators',
    Executives: 'Executives',
    Investors: 'Investors',
    Synthetics: 'Synthetics',
    Protectors: 'Protectors',
    Scientists: 'Scientists',
    Miners: 'Miners',
    Officiers: 'Officiers',
    Ecologists: 'Ecologists',
    FieldResearchers: 'FieldResearchers',
};

const PopulationClassesByEnvironment = {
    [Environments.Temperate]: [
        PopulationClasses.Workers,
        PopulationClasses.Operators,
        PopulationClasses.Executives,
        PopulationClasses.Investors,
        PopulationClasses.Synthetics,
    ],
    [Environments.Arctic]: [
        PopulationClasses.Protectors,
        PopulationClasses.Scientists,
    ],
    [Environments.Lunar]: [
        PopulationClasses.Miners,
        PopulationClasses.Officiers,
    ],
    [Environments.Tundra]: [
        PopulationClasses.Ecologists,
        PopulationClasses.FieldResearchers,
    ],
};

const Needs = {
    Food: 'Food',
    Drink: 'Drink',
    Lifestyle: 'Lifestyle',
    Property: 'Property',
    Oxygen: 'Oxygen',
    HealthCare: 'HealthCare',
};

const Resources = {
    Biopolymers: 'Biopolymers',
    ConstructOBots: 'ConstructOBots',
    SuperAlloys: 'SuperAlloys',
    MetalFoam: 'MetalFoam',
    TitaniumPlating: 'TitaniumPlating',
    OrganicFood: 'OrganicFood',
    LuxuryFood: 'LuxuryFood',
    Water: 'Water',
    VitaDrinks: 'VitaDrinks',
    Rejuvenators: 'Rejuvenators',
    IntelliWear: 'IntelliWear',
    Androids: 'Androids',
    Algae: 'Algae',
    NanoCeramics: 'NanoCeramics',
    Wine: 'Wine',
    SoyBeans: 'SoyBeans',
    Diamonds: 'Diamonds',
    FlaxFibers: 'FlaxFibers',
    Silicon: 'Silicon',
    Fruit: 'Fruit',
    Cobalt: 'Cobalt',
    Bioresin: 'Bioresin',
    Microchips: 'Microchips',
    SynthCells: 'SynthCells',
    Beef: 'Beef',
    SynapticCircuits: 'SynapticCircuits',
    MultispecPrisms: 'MultispecPrisms',
    CannedFood: 'CannedFood',
    Stimulants: 'Stimulants',
    QuantumComputers: 'QuantumComputers',
    NeruoImplants: 'NeruoImplants',
    Replicators: 'Replicators',
    Molybdenum: 'Molybdenum',
    Aluminium: 'Aluminium',
    DeepWaterCorals: 'DeepWaterCorals',
    Fish: 'Fish',
    MethaneIce: 'MethaneIce',
    QubitProcessors: 'QubitProcessors',
    SuperCoolants: 'SuperCoolants',
    LunarLunch: 'LunarLunch',
    Bioenhancers: 'Bioenhancers',
    AntiGravCompensators: 'AntiGravCompensators',
    MoonIce: 'MoonIce',
    Titanium: 'Titanium',
    Helium3: 'Helium3',
    RareEarthElements: 'RareEarthElements',
    MoonCrops: 'MoonCrops',
    Deuterium: 'Deuterium',
    Oxygen: 'Oxygen',
    FusionCells: 'FusionCells',
    Graphene: 'Graphene',
    Iridium: 'Iridium',
    Magnetite: 'Magnetite',
    Petrochemicals: 'Petrochemicals',
};

const Buildings = {
    BiopolymerFactory: 'BiopolymerFactory',
    RobotAssemblyHall: 'RobotAssemblyHall',
    SunflowerFarm: 'SunflowerFarm',
    RiceFarm: 'RiceFarm',
    DesalinizationPlant: 'DesalinizationPlant',
    Windpark: 'Windpark',
    TransportationCenter: 'TransportationCenter',
    Infodrome: 'Infodrome',
    FeldsparQuarry: 'FeldsparQuarry',
    CobaltMine: 'CobaltMine',
    FruitPlantation: 'FruitPlantation',
    VitaminCondensor: 'VitaminCondensor',
    AlgaeFarm: 'AlgaeFarm',
    SynthcellIncubator: 'SynthcellIncubator',
    BiomedicalLaboratory: 'BiomedicalLaboratory',
    TidalPowerStation: 'TidalPowerStation',
    SecurityDepartment: 'SecurityDepartment',
    SoyFarm: 'SoyFarm',
    CattleRanch: 'CattleRanch',
    Vineyard: 'Vineyard',
    FoodDesignWorkshop: 'FoodDesignWorkshop',
    FlaxPlantation: 'FlaxPlantation',
    SiliconMine: 'SiliconMine',
    MicrofabricationHall: 'MicrofabricationHall',
    NanoTextileMill: 'NanoTextileMill',
    DiamondMine: 'DiamondMine',
    NanoCuttingUnit: 'NanoCuttingUnit',
    NeutroniumLab: 'NeutroniumLab',
    AICompositionPlant: 'AICompositionPlant',
    AndroidFactory: 'AndroidFactory',
    ArcticTransportationCenter: 'ArcticTransportationCenter',
    FishingHarbor: 'FishingHarbor',
    Cannery: 'Cannery',
    AluminiumMine: 'AluminiumMine',
    CompressionChamber: 'CompressionChamber',
    MolybdenumMine: 'MolybdenumMine',
    NeuroModuleFactory: 'NeuroModuleFactory',
    CoreIceDriller: 'CoreIceDriller',
    OxygenSeperator: 'OxygenSeperator',
    IonWelder: 'IonWelder',
    AeroponicFarm: 'AeroponicFarm',
    SpaceGalley: 'SpaceGalley',
    KREEPGatherer: 'KREEPGatherer',
    CyberneticsFactory: 'CyberneticsFactory',
};

const BuildingsByResource = {
    [Resources.Biopolymers]: Buildings.BiopolymerFactory,
    [Resources.ConstructOBots]: Buildings.RobotAssemblyHall,
    [Resources.OrganicFood]: Buildings.RiceFarm,
    [Resources.Bioresin]: Buildings.SunflowerFarm,
    [Resources.Water]: Buildings.DesalinizationPlant,
    [Resources.NanoCeramics]: Buildings.FeldsparQuarry,
    [Resources.Cobalt]: Buildings.CobaltMine,
    [Resources.Fruit]: Buildings.FruitPlantation,
    [Resources.VitaDrinks]: Buildings.VitaminCondensor,
    [Resources.Algae]: Buildings.AlgaeFarm,
    [Resources.SynthCells]: Buildings.SynthcellIncubator,
    [Resources.Rejuvenators]: Buildings.BiomedicalLaboratory,
    [Resources.SoyBeans]: Buildings.SoyFarm,
    [Resources.Beef]: Buildings.CattleRanch,
    [Resources.Wine]: Buildings.Vineyard,
    [Resources.LuxuryFood]: Buildings.FoodDesignWorkshop,
    [Resources.FlaxFibers]: Buildings.FlaxPlantation,
    [Resources.Silicon]: Buildings.SiliconMine,
    [Resources.Microchips]: Buildings.MicrofabricationHall,
    [Resources.IntelliWear]: Buildings.NanoTextileMill,
    [Resources.Diamonds]: Buildings.DiamondMine,
    [Resources.MultispecPrisms]: Buildings.NanoCuttingUnit,
    [Resources.Replicators]: Buildings.NeutroniumLab,
    [Resources.SynapticCircuits]: Buildings.AICompositionPlant,
    [Resources.Androids]: Buildings.AndroidFactory,
    [Resources.Fish]: Buildings.FishingHarbor,
    [Resources.CannedFood]: Buildings.Cannery,
    [Resources.Aluminium]: Buildings.AluminiumMine,
    [Resources.MetalFoam]: Buildings.CompressionChamber,
    [Resources.Molybdenum]: Buildings.MolybdenumMine,
    [Resources.NeruoImplants]: Buildings.NeuroModuleFactory,
    [Resources.Titanium]: Buildings.TitaniumMine,
    [Resources.MoonIce]: Buildings.CoreIceDriller,
    [Resources.Oxygen]: Buildings.OxygenSeperator,
    [Resources.TitaniumPlating]: Buildings.IonWelder,
    [Resources.MoonCrops]: Buildings.AeroponicFarm,
    [Resources.LunarLunch]: Buildings.SpaceGalley,
    [Resources.RareEarthElements]: Buildings.KREEPGatherer,
    [Resources.Bioenhancers]: Buildings.CyberneticsFactory,
};

export {Environments, PopulationClasses, PopulationClassesByEnvironment, Needs, Resources, Buildings, BuildingsByResource}