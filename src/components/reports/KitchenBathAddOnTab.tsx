
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface AddOnItem {
  id: string;
  label: string;
  unit: 'EA' | 'LF' | 'SF';
}

interface AddOnCategory {
  title: string;
  items: AddOnItem[];
}

const KitchenBathAddOnTab = () => {
  // Initialize selections state
  const [selections, setSelections] = useState<{[key: string]: {checked: boolean, notes: string}}>({});
  const [activeTab, setActiveTab] = useState('bathroom');
  
  // Define categories for each area
  const bathroomCategories: AddOnCategory[] = [
    {
      title: "Bathroom Fixtures",
      items: [
        { id: "sinkSingleOrDouble", label: "Sink - Single or Double", unit: "EA" },
        { id: "sinkFaucet", label: "Sink Faucet", unit: "EA" },
        { id: "sinkStrainerAndDrain", label: "Sink Strainer & Drain", unit: "EA" },
        { id: "tubAndShowerFaucet", label: "Tub & Shower Faucet", unit: "EA" },
        { id: "towelBar", label: "Towel Bar", unit: "EA" },
        { id: "toiletPaperHolder", label: "Toilet Paper Holder", unit: "EA" },
        { id: "robeHook", label: "Robe Hook", unit: "EA" },
        { id: "medicineCabinet", label: "Medicine Cabinet", unit: "EA" },
        { id: "mirror", label: "Mirror", unit: "SF" },
        { id: "toiletSeat", label: "Toilet Seat", unit: "EA" },
        { id: "vanityBathroom", label: "Vanity", unit: "LF" },
        { id: "pedestalSink", label: "Pedestal Sink", unit: "EA" },
        { id: "tileBaseBathroom", label: "Tile Base", unit: "LF" },
        { id: "bullnoseBathroom", label: "Bullnose", unit: "LF" },
        { id: "soapDish", label: "Soap Dish", unit: "EA" },
        { id: "tubShowerSurround", label: "Tub/Shower Surround", unit: "EA" },
        { id: "tubOrShower", label: "Tub or Shower", unit: "EA" },
      ]
    },
    {
      title: "Bathroom Electrical",
      items: [
        { id: "bathroomVentilationFan", label: "Bathroom Ventilation Fan", unit: "EA" },
        { id: "lightBarOfLights", label: "Light Bar (# of Lights)", unit: "EA" },
        { id: "gfiInterrupterBathroom", label: "GFI Interrupter", unit: "EA" },
      ]
    },
    {
      title: "Bathroom Cabinetry",
      items: [
        { id: "vanityBathroomCabinetry", label: "Vanity", unit: "LF" },
        { id: "vanityTopMaterial", label: "Vanity Top (Material)", unit: "LF" },
        { id: "toekickLaminatedBathroom", label: "Toe Kick Laminated", unit: "LF" },
      ]
    }
  ];

  const kitchenCategories: AddOnCategory[] = [
    {
      title: "Kitchen Fixtures",
      items: [
        { id: "sinkSingleOrDoubleKitchen", label: "Sink - Single or Double", unit: "EA" },
        { id: "sinkFaucetKitchen", label: "Sink Faucet", unit: "EA" },
        { id: "sinkStrainerAndDrainKitchen", label: "Sink Strainer & Drain", unit: "EA" },
        { id: "tileBaseKitchen", label: "Tile Base", unit: "LF" },
        { id: "bullnoseKitchen", label: "Bullnose", unit: "LF" },
      ]
    },
    {
      title: "Appliances",
      items: [
        { id: "garbageDisposer", label: "Garbage Disposer", unit: "EA" },
        { id: "dishwasher", label: "Dishwasher", unit: "EA" },
        { id: "refrigerator", label: "Refrigerator", unit: "EA" },
        { id: "range", label: "Range", unit: "EA" },
        { id: "cooktop", label: "Cooktop", unit: "EA" },
        { id: "rangeHood", label: "Range Hood", unit: "EA" },
        { id: "waterFiltrationSystem", label: "Water Filtration System", unit: "EA" },
      ]
    },
    {
      title: "Kitchen Electrical",
      items: [
        { id: "gfiInterrupterKitchen", label: "GFI Interrupter", unit: "EA" },
      ]
    },
    {
      title: "Kitchen Cabinetry",
      items: [
        { id: "baseCabinets", label: "Base Cabinets", unit: "LF" },
        { id: "upperCabinets", label: "Upper Cabinets", unit: "LF" },
        { id: "fullHeightCabinets", label: "Full Height Cabinets", unit: "LF" },
        { id: "cabinetValance", label: "Cabinet Valance", unit: "LF" },
        { id: "cabinetKnobOrPull", label: "Cabinet Knob or Pull", unit: "EA" },
        { id: "graniteOrMarbleCountertop", label: "Granite or Marble Countertop", unit: "SF" },
        { id: "laminateCountertop", label: "Laminate Countertop", unit: "LF" },
        { id: "postFormedLaminate", label: "Post Formed Laminate", unit: "LF" },
        { id: "culturedSimulatedMarble", label: "Cultured/Simulated Marble", unit: "SF" },
        { id: "solidSurface", label: "Solid Surface", unit: "SF" },
        { id: "underMountSinkCutout", label: "Under-mount Sink Cutout", unit: "EA" },
        { id: "countertopEdgeTreatment", label: "Countertop Edge Treatment", unit: "LF" },
        { id: "flatLaidBacksplash", label: "Flat Laid Backsplash 4″/6″", unit: "LF" },
        { id: "plasticLaminateBacksplash", label: "Plastic Laminate Backsplash", unit: "LF" },
        { id: "solidSurfaceBacksplash", label: "Solid Surface Backsplash", unit: "LF" },
        { id: "toeKickPrefinished", label: "Toe Kick Prefinished", unit: "LF" },
      ]
    }
  ];

  const laundryCategories: AddOnCategory[] = [
    {
      title: "Laundry Room",
      items: [
        { id: "washer", label: "Washer", unit: "EA" },
        { id: "dryer", label: "Dryer", unit: "EA" },
        { id: "gfiInterrupterLaundry", label: "GFI Interrupter", unit: "EA" },
        { id: "clothesDryerVentCover", label: "Clothes Dryer Vent Cover", unit: "EA" },
      ]
    },
    {
      title: "General Electrical",
      items: [
        { id: "breakerPanel", label: "Breaker Panel", unit: "EA" },
      ]
    }
  ];

  // Handle checkbox changes
  const handleItemSelect = (id: string, checked: boolean) => {
    setSelections(prev => ({
      ...prev,
      [id]: { 
        ...prev[id],
        checked 
      }
    }));
  };

  // Handle notes changes
  const handleNotesChange = (id: string, notes: string) => {
    setSelections(prev => ({
      ...prev,
      [id]: { 
        ...prev[id],
        notes 
      }
    }));
  };

  const renderCategoryItems = (category: AddOnCategory) => (
    <div key={category.title} className="space-y-3 mb-6">
      <h3 className="font-semibold text-lg">{category.title}</h3>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 p-2 border rounded-md">
            <Checkbox
              id={item.id}
              checked={selections[item.id]?.checked || false}
              onCheckedChange={(checked) => 
                handleItemSelect(item.id, checked === true)
              }
            />
            <div className="flex-1 grid grid-cols-4 gap-2 items-center">
              <label
                htmlFor={item.id}
                className="col-span-2 text-sm font-medium leading-none cursor-pointer"
              >
                {item.label}
              </label>
              <div className="text-xs border px-2 py-1 rounded bg-gray-50 text-center">
                {item.unit}
              </div>
              <Input 
                className="h-8 text-sm"
                placeholder="Notes"
                value={selections[item.id]?.notes || ''}
                onChange={(e) => handleNotesChange(item.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Kitchen, Bathroom & Laundry Add-On</CardTitle>
          <CardDescription>
            This Add-On Sheet Should Accompany The Interior Repair Worksheet
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              <TabsTrigger value="laundry">Laundry</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bathroom" className="space-y-4 mt-4">
              {bathroomCategories.map(renderCategoryItems)}
            </TabsContent>
            
            <TabsContent value="kitchen" className="space-y-4 mt-4">
              {kitchenCategories.map(renderCategoryItems)}
            </TabsContent>
            
            <TabsContent value="laundry" className="space-y-4 mt-4">
              {laundryCategories.map(renderCategoryItems)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default KitchenBathAddOnTab;
