import { ResourceNames, Resources } from "../Models/Resource";

export abstract class BootTasks {
    public static SetUpProductionChain(): void {
        this.AddRequirement(ResourceNames.Biopolymers, ResourceNames.Bioresin, 1);

        this.AddRequirement(ResourceNames.ConstructOBots, ResourceNames.Cobalt, 1);
        this.AddRequirement(ResourceNames.ConstructOBots, ResourceNames.NanoCeramics, 1);

        // Super Alloys

        this.AddRequirement(ResourceNames.MetalFoam, ResourceNames.Aluminium, 0.5);

        this.AddRequirement(ResourceNames.TitaniumPlating, ResourceNames.Titanium, 1);

        // Organic Food

        this.AddRequirement(ResourceNames.LuxuryFood, ResourceNames.Beef, 2);
        this.AddRequirement(ResourceNames.LuxuryFood, ResourceNames.Wine, 2);

        // Water

        this.AddRequirement(ResourceNames.VitaDrinks, ResourceNames.Fruit, 2);

        this.AddRequirement(ResourceNames.Rejuvenators, ResourceNames.SynthCells, 2);

        this.AddRequirement(ResourceNames.IntelliWear, ResourceNames.Microchips, 0.4);
        this.AddRequirement(ResourceNames.IntelliWear, ResourceNames.FlaxFibers, 0.8);

        // Androids

        this.AddRequirement(ResourceNames.CannedFood, ResourceNames.Fish, 0.5);

        this.AddRequirement(ResourceNames.Stimulants, ResourceNames.DeepWaterCorals, 1);

        // Quantum Computers

        this.AddRequirement(ResourceNames.NeruoImplants, ResourceNames.Molybdenum, 0.4);

        // Replicators

        this.AddRequirement(ResourceNames.LunarLunch, ResourceNames.MoonCrops, 0.5);

        this.AddRequirement(ResourceNames.Bioenhancers, ResourceNames.RareEarthElements, 0.1);

        // Anti Grav Compensators

        // Algae

        // Nano Ceramics

        // Wine

        // Soy Beans

        // Diamonds

        // Flax Fibers

        // Silicon

        // Fruit

        // Cobalt

        // Bioresin

        // Molybdenum

        // Aluminium

        // Deep Water Corals

        // Fish

        // Methane Ice

        // Moon Ice

        // Titanium

        // Helium 3

        // Rare Earth Elements

        // Moon Crops

        this.AddRequirement(ResourceNames.Microchips, ResourceNames.Silicon, 1);

        this.AddRequirement(ResourceNames.SynthCells, ResourceNames.Algae, 0.5);

        this.AddRequirement(ResourceNames.Beef, ResourceNames.SoyBeans, 1);

        // Synaptic Circuits

        // Multispec Prisms

        // Qubit Processors

        // Super Coolants

        // Deuterium

        this.AddRequirement(ResourceNames.Oxygen, ResourceNames.MoonIce, 0.1);

        // Fusion Cells

        // Graphene

        // Iridium

        // Magnetite

        // Petrochemicals

        // Smart Drones

        // All Weather Parkas

        // Medibots
    }

    static AddRequirement(resource: ResourceNames, requirement: ResourceNames, consumptionRate: number): void {
        Resources[resource].addRequirement(Resources[requirement], consumptionRate);
    }
}