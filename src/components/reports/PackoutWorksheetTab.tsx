
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface PackoutItem {
  id: string;
  label: string;
  unit: 'EA' | 'LF' | 'SF' | 'HR' | 'DAY' | 'CF';
}

interface PackoutCategory {
  title: string;
  items: PackoutItem[];
}

const PackoutWorksheetTab = () => {
  // Initialize selections state
  const [selections, setSelections] = useState<{[key: string]: {checked: boolean, notes: string}}>({});
  
  // Define packout categories
  const packoutCategories: PackoutCategory[] = [
    {
      title: "General",
      items: [
        { id: "contentManipulation", label: "Content Manipulation", unit: "HR" },
        { id: "cargoVanAndEquipment", label: "Cargo Van & Equipment", unit: "DAY" },
      ]
    },
    {
      title: "Labor",
      items: [
        { id: "inventory", label: "Inventory", unit: "HR" },
        { id: "inventoryPackingMovingCharge", label: "Inventory, Packing, and Moving Charge (HR)", unit: "HR" },
        { id: "cleaningTechnicianWetCleaningAgent", label: "Cleaning Technician (wet cleaning agent)", unit: "HR" },
        { id: "cleanTechnicianHR", label: "Clean Technician (HR)", unit: "HR" },
        { id: "evaluatePackAndInventoryBoxDecorac5Box", label: "Evaluate Pack & Inventory (Box-Decorac, per 5 box", unit: "EA" },
        { id: "evaluatePackAndInventoryBoxDecorac10Box", label: "Evaluate Pack & Inventory (Box-Decorac, per 10 box", unit: "EA" },
        { id: "evaluatePackAndInventoryBoxDecorac15Box", label: "Evaluate Pack & Inventory (Box-Decorac, per 15 box", unit: "EA" },
        { id: "evaluatePackAndInventoryMiscItems5Box", label: "Evaluate Pack & Inventory (Misc. Items, per 5 box", unit: "EA" },
        { id: "evaluatePackAndInventoryMiscItems10Box", label: "Evaluate Pack & Inventory (Misc. Items, per 10 box", unit: "EA" },
        { id: "evaluatePackAndInventoryMiscItems15Box", label: "Evaluate Pack & Inventory (Misc. Items, per 15 box", unit: "EA" },
      ]
    },
    {
      title: "Supplies",
      items: [
        { id: "boxPackingPaperAndTapeS", label: "Box, packing paper & tape - S", unit: "EA" },
        { id: "boxPackingPaperAndTapeM", label: "Box, packing paper & tape - M", unit: "EA" },
        { id: "boxPackingPaperAndTapeL", label: "Box, packing paper & tape - L", unit: "EA" },
        { id: "boxPackingPaperAndTapeXL", label: "Box, packing paper & tape - XL", unit: "EA" },
        { id: "boxDishpackPackingPaperAndTape", label: "Box (Dishpack), packing paper & tape", unit: "EA" },
        { id: "bubbleWrap3f", label: "Bubble Wrap (3')", unit: "LF" },
        { id: "furnitureLightweightBlanketPad", label: "Furniture (Lightweight) Blanket/Pad (EA)", unit: "EA" },
        { id: "furnitureHeavyweightBlanketPad", label: "Furniture (Heavyweight) Blanket/Pad (EA)", unit: "EA" },
        { id: "newsprint80Roll", label: "Newsprint (80# Roll)", unit: "EA" },
        { id: "looseFillPeanutsCF", label: "Loose Fill Peanuts (CF)", unit: "CF" },
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
          <CardTitle>Packout Worksheet</CardTitle>
          <CardDescription>
            Document items that need to be packed and moved during restoration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {packoutCategories.map((category) => (
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

export default PackoutWorksheetTab;
