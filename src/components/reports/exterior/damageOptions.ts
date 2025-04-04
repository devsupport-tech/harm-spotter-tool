
// Define roof options
export const roofTypeOptions = [
  { id: "valleyMetals", label: "Valley Metals" },
  { id: "otherMetals", label: "Other Metals" },
  { id: "iceWaterShield", label: "Ice/Water Shield" },
  { id: "felt", label: "Felt" },
  { id: "decking", label: "Decking" },
  { id: "paintedVents", label: "Painted Vents" },
];

// Define damage options for each slope
export const slopeOptions = [
  { id: "confirmedHits", label: "Confirmed Hits" },
  { id: "windDamage", label: "Wind Damage" },
  { id: "chimneyDamage", label: "Chimney Cap" },
  { id: "turbineVents", label: "Turbine Vents" },
  { id: "exhaustVents", label: "Exhaust Vents" },
  { id: "poweredVents", label: "Powered Vents" },
  { id: "otherVents", label: "Other Vents" },
  { id: "pipeJacks", label: "Pipe Jacks" },
  { id: "capCollar", label: "Cap/Collar" },
  { id: "satDish", label: "Sat Dish" },
  { id: "splitBoot", label: "Split Boot" },
  { id: "flashing", label: "Flashing" },
  { id: "skylight", label: "Skylight" },
  { id: "addLabor", label: "Add Labor" },
];

// Define elevation options
export const elevationOptions = [
  { id: "gutter", label: "Gutter" },
  { id: "downSpout", label: "Down Spout" },
  { id: "screens", label: "Screens" },
  { id: "windowHead", label: "Window Head" },
  { id: "windowWrap", label: "Window Wrap" },
  { id: "windowBead", label: "Window Bead" },
  { id: "windowGlaze", label: "Window Glaze" },
  { id: "garageDoorRepair", label: "Garage Door Repair" },
  { id: "garageDoorReplace", label: "Garage Door Replace" },
  { id: "garageWrap", label: "Garage Wrap" },
  { id: "doorReplace", label: "Door Replace" },
  { id: "combFins", label: "Comb Fins" },
  { id: "siding", label: "Siding" },
  { id: "extLight", label: "Ext Light" },
];

// Define additional exterior options
export const additionalExteriorOptions = [
  { id: "fence", label: "Fence" },
  { id: "shed", label: "Shed" },
  { id: "detachedGarage", label: "Detached Garage" },
];

export type DamageSelections = {
  [key: string]: {
    [key: string]: boolean;
  };
};
