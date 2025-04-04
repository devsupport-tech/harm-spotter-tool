
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface CleaningItem {
  id: string;
  label: string;
  unit: 'EA' | 'LF' | 'SF';
}

interface CleaningCategory {
  title: string;
  items: CleaningItem[];
}

const StructuralCleaningTab = () => {
  // Initialize selections state
  const [selections, setSelections] = useState<{[key: string]: {checked: boolean, notes: string}}>({});
  
  // Define structural cleaning categories
  const cleaningCategories: CleaningCategory[] = [
    {
      title: "Stairs",
      items: [
        { id: "stairTreadPerSide", label: "Stair Tread - Per Side", unit: "LF" },
        { id: "stairRiserPerSide", label: "Stair Riser - Per Side", unit: "LF" },
        { id: "stairStringerPerSideLeft", label: "Stair Stringer - Per Side LF", unit: "LF" },
        { id: "newellPost", label: "Newells", unit: "LF" },
        { id: "handrailWallMounted", label: "Handrail - Wall Mounted", unit: "LF" },
      ]
    },
    {
      title: "Cabinetry",
      items: [
        { id: "cabinetryUpperExterior", label: "Cabinetry Upper Exterior", unit: "LF" },
        { id: "cabinetryUpperInterior", label: "Cabinetry Upper Interior", unit: "LF" },
        { id: "cabinetryBaseExterior", label: "Cabinetry Base Exterior", unit: "LF" },
        { id: "cabinetryBaseInterior", label: "Cabinetry Base Interior", unit: "LF" },
        { id: "cabinetryTallExterior", label: "Cabinetry Tall Exterior", unit: "LF" },
        { id: "cabinetryTallInterior", label: "Cabinetry Tall Interior", unit: "LF" },
        { id: "vanityFacesOnly", label: "Vanity - Faces Only", unit: "LF" },
        { id: "vanityInsideAndOut", label: "Vanity - Inside And Out", unit: "LF" },
        { id: "countertops", label: "Countertops", unit: "SF" },
      ]
    },
    {
      title: "Doors & Windows",
      items: [
        { id: "cleanDoorOrWindow", label: "Clean Door Or Window", unit: "EA" },
        { id: "cleanStormDoorPerSide", label: "Clean Storm Door (Per Side)", unit: "EA" },
        { id: "cleanFrenchDoorPerSide", label: "Clean French Door (Per Side)", unit: "EA" },
        { id: "cleanDoorHardware", label: "Clean Door Hardware", unit: "EA" },
        { id: "cleanWindowBlindsRollUp", label: "Clean Window Blinds - Roll Up", unit: "EA" },
        { id: "cleanDraperyHardware", label: "Clean Drapery Hardware", unit: "EA" },
        { id: "cleanWindowGlassPerSide", label: "Clean Window Glass/Per Side", unit: "EA" },
        { id: "cleanWindowGlass0to20", label: "Clean Window Glass (0-20)", unit: "EA" },
        { id: "cleanWindowGlass21to40", label: "Clean Window Glass (21-40)", unit: "EA" },
        { id: "cleanWindowGlass41toUp", label: "Clean Window Glass (41-Up)", unit: "EA" },
      ]
    },
    {
      title: "Ceiling & Walls",
      items: [
        { id: "cleanTexturedCeiling", label: "Clean Textured Ceiling", unit: "SF" },
        { id: "cleanSmoothCeiling", label: "Clean Smooth Ceiling", unit: "SF" },
        { id: "cleanPanelTexturedCeiling", label: "Clean Panel Textured Ceiling", unit: "SF" },
        { id: "cleanWalls", label: "Clean Walls", unit: "SF" },
        { id: "cleanWallpaper", label: "Clean Wallpaper", unit: "SF" },
      ]
    },
    {
      title: "Floors",
      items: [
        { id: "cleanHardFloor", label: "Clean Hard Floor", unit: "SF" },
        { id: "cleanAndDeodorizeCarpet", label: "Clean & Deodorize Carpet", unit: "SF" },
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

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Structural Cleaning</CardTitle>
          <CardDescription>
            Assessment of structural elements requiring cleaning.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {cleaningCategories.map((category) => (
            <div key={category.title} className="space-y-3">
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
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StructuralCleaningTab;
