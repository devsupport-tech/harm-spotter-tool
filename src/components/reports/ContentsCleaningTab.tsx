
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

// Define types of items in each category
interface CleaningItem {
  id: string;
  label: string;
  unit: 'EA' | 'LF' | 'SF' | 'HR' | 'MO' | 'DA';
}

interface CleaningCategory {
  title: string;
  items: CleaningItem[];
}

const ContentsCleaningTab = () => {
  // Initialize selections state
  const [selections, setSelections] = useState<{[key: string]: {checked: boolean, notes: string}}>({});
  
  // Define cleaning categories
  const cleaningCategories: CleaningCategory[] = [
    {
      title: "Cabinetry",
      items: [
        { id: "cabinetContentsKitchen", label: "Cabinet Contents Kitchen", unit: "LF" },
        { id: "vanityContents", label: "Vanity Contents", unit: "LF" },
      ]
    },
    {
      title: "Doors & Windows",
      items: [
        { id: "cleanWindowBlindSF", label: "Clean Window Blind - SF", unit: "SF" },
        { id: "cleanDraperyHardware", label: "Clean Drapery Hardware", unit: "EA" },
        { id: "cleanCurtainsDryCleanS", label: "Clean Curtains Dry Clean (S)", unit: "EA" },
        { id: "cleanCurtainsDryCleanM", label: "Clean Curtains Dry Clean (M)", unit: "EA" },
        { id: "cleanCurtainsDryCleanL", label: "Clean Curtains Dry Clean (L)", unit: "EA" },
        { id: "cleanCurtainsDryCleanXL", label: "Clean Curtains Dry Clean (XL)", unit: "EA" },
        { id: "cleanWindowBlindRollUp", label: "Clean Window Blind - Roll Up", unit: "EA" },
      ]
    },
    {
      title: "Shelving & Closets",
      items: [
        { id: "closetContentsOFClothing", label: "Closet Contents OF Clothing", unit: "LF" },
        { id: "cleanContentsOFBooking", label: "Clean Contents OF Booking", unit: "LF" },
      ]
    },
    {
      title: "Electronics",
      items: [
        { id: "cleanSmallAppliances", label: "Clean Small Appliances", unit: "EA" },
        { id: "cleanComputer", label: "Clean Computer", unit: "EA" },
        { id: "cleanComputerPrinter", label: "Clean Computer Printer", unit: "EA" },
        { id: "cleanStereoAmpRec", label: "Clean Stereo - Amp/Rec", unit: "EA" },
        { id: "cleanStereoSpeakers", label: "Clean Stereo Speakers", unit: "EA" },
        { id: "cleanTelevisionExterior", label: "Clean Television - Exterior", unit: "EA" },
        { id: "cleanTelevisionLarge", label: "Clean Television - Large", unit: "EA" },
        { id: "cleanToaster", label: "Clean Toaster", unit: "EA" },
        { id: "cleanCoffeeMaker", label: "Clean Coffee Maker", unit: "EA" },
        { id: "cleanGuitar", label: "Clean Guitar", unit: "EA" },
      ]
    },
    {
      title: "Hard Furniture",
      items: [
        { id: "cleanChair", label: "Clean Chair", unit: "EA" },
        { id: "cleanDiningChair", label: "Clean Dining Chair", unit: "EA" },
        { id: "cleanDesk", label: "Clean Desk", unit: "EA" },
        { id: "cleanBedFrame", label: "Clean Bed Frame", unit: "EA" },
        { id: "cleanFootboardTwin", label: "Clean Footboard (Twin)", unit: "EA" },
        { id: "cleanFootboardDouble", label: "Clean Footboard (Double)", unit: "EA" },
        { id: "cleanFootboardQueen", label: "Clean Footboard (Queen)", unit: "EA" },
        { id: "cleanHeadboardTwin", label: "Clean Headboard (Twin)", unit: "EA" },
        { id: "cleanHeadboardDouble", label: "Clean Headboard (Double)", unit: "EA" },
        { id: "cleanHeadboardQueen", label: "Clean Headboard (Queen)", unit: "EA" },
        { id: "cleanHeadboardKing", label: "Clean Headboard (King)", unit: "EA" },
      ]
    },
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
          <CardTitle>Contents Cleaning</CardTitle>
          <CardDescription>
            Inventory items that require cleaning due to damage.
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

export default ContentsCleaningTab;
