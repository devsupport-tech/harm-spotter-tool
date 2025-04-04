
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface MitigationItem {
  id: string;
  label: string;
  unit: 'EA' | 'LF' | 'SF' | 'DA' | 'HR';
}

interface MitigationCategory {
  title: string;
  items: MitigationItem[];
}

const WaterMitigationTab = () => {
  // Initialize selections state
  const [selections, setSelections] = useState<{[key: string]: {checked: boolean, notes: string}}>({});
  const [moistureReadings, setMoistureReadings] = useState([
    { id: 1, date: '', location: '', materialType: '', reading: '' }
  ]);
  
  // Define water mitigation categories
  const mitigationCategories: MitigationCategory[] = [
    {
      title: "Equipment",
      items: [
        { id: "dehumidifierDA", label: "Dehumidifier", unit: "DA" },
        { id: "axialFan", label: "Axial Fan", unit: "DA" },
        { id: "dehumidifierMedium", label: "Dehumidifier (M)", unit: "DA" },
        { id: "dehumidifierLarge", label: "Dehumidifier (L)", unit: "DA" },
        { id: "airScrubberMedium", label: "Air Scrubber (M)", unit: "DA" },
        { id: "airScrubberLarge", label: "Air Scrubber (L)", unit: "DA" },
        { id: "airScrubberXLarge", label: "Air Scrubber (XL)", unit: "DA" },
      ]
    },
    {
      title: "Walls & Trim",
      items: [
        { id: "tearWetDrywall0To2", label: "Tear Wet Drywall (0-2')", unit: "LF" },
        { id: "tearWetDrywall0To4", label: "Tear Wet Drywall (0-4')", unit: "LF" },
        { id: "tearWetDrywall0To8", label: "Tear Wet Drywall (0-8')", unit: "SF" },
        { id: "tearOutWoodLath", label: "Tear Out Wood Lath", unit: "SF" },
        { id: "tearOutMetalLath", label: "Tear Out Metal Lath", unit: "SF" },
        { id: "detachAndReposition", label: "Detach and Reposition", unit: "LF" },
        { id: "detachInteriorDoor", label: "Detach Interior Door", unit: "EA" },
        { id: "detachExteriorDoor", label: "Detach Exterior Door", unit: "EA" },
        { id: "detachBaseboards", label: "Detach Baseboards", unit: "LF" },
        { id: "tearOutTrim", label: "Tear Out Trim", unit: "LF" },
        { id: "tearOutCasing", label: "Tear Out Casing", unit: "LF" },
        { id: "tearOutCrownBase", label: "Tear Out Crown Base", unit: "LF" },
      ]
    },
    {
      title: "Floors",
      items: [
        { id: "extractWaterHeavy", label: "Extract Water Heavy", unit: "SF" },
        { id: "tearOutCarpet", label: "Tear Out Carpet", unit: "SF" },
        { id: "tearOutCarpetPad", label: "Tear Out Carpet Pad", unit: "SF" },
        { id: "removeTackStrip", label: "Remove Tack Strip", unit: "LF" },
        { id: "tearOutVinylFloor", label: "Tear Out Vinyl Floor", unit: "SF" },
        { id: "tearOutLaminateWoodFloor", label: "Tear Out Laminate Wood Floor", unit: "SF" },
        { id: "tearOutHardwoodFloor", label: "Tear Out Hardwood Floor", unit: "SF" },
        { id: "tearOutCeramicTile", label: "Tear Out Ceramic Tile", unit: "SF" },
        { id: "tearOutQuarryStone", label: "Tear Out Quarry/Stone", unit: "SF" },
        { id: "tearOutSubflooring", label: "Tear Out Subflooring", unit: "SF" },
      ]
    },
    {
      title: "Other & Cleaning",
      items: [
        { id: "contentManipulationWater", label: "Content Manipulation", unit: "HR" },
        { id: "hepAVacuum", label: "HEPA Vacuum", unit: "SF" },
        { id: "cleanWalls", label: "Clean Walls", unit: "SF" },
        { id: "cleanCeiling", label: "Clean Ceiling", unit: "SF" },
        { id: "cleanFloorHeavy", label: "Clean Floor Heavy", unit: "SF" },
        { id: "cleanWallStuds", label: "Clean Wall Studs", unit: "SF" },
        { id: "cleanJoists", label: "Clean Joists", unit: "SF" },
        { id: "deoderizeCarpert", label: "Deoderize Carpert", unit: "SF" },
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

  // Handle moisture reading updates
  const handleMoistureReadingChange = (id: number, field: string, value: string) => {
    setMoistureReadings(prev => 
      prev.map(reading => 
        reading.id === id ? { ...reading, [field]: value } : reading
      )
    );
  };

  // Add new moisture reading row
  const addMoistureReading = () => {
    setMoistureReadings(prev => [
      ...prev, 
      { 
        id: prev.length + 1, 
        date: '', 
        location: '', 
        materialType: '', 
        reading: '' 
      }
    ]);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Water Mitigation Worksheet</CardTitle>
          <CardDescription>
            Document water damage and required mitigation steps.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {mitigationCategories.map((category) => (
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

          <div className="space-y-3 mt-8">
            <h3 className="font-semibold text-lg">Moisture Readings</h3>
            <Separator />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Material Type</TableHead>
                  <TableHead>Reading (%)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {moistureReadings.map((reading) => (
                  <TableRow key={`moisture-${reading.id}`}>
                    <TableCell>
                      <Input 
                        type="date"
                        className="h-8 text-sm"
                        value={reading.date}
                        onChange={(e) => handleMoistureReadingChange(reading.id, 'date', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        className="h-8 text-sm"
                        placeholder="Location"
                        value={reading.location}
                        onChange={(e) => handleMoistureReadingChange(reading.id, 'location', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        className="h-8 text-sm"
                        placeholder="Material"
                        value={reading.materialType}
                        onChange={(e) => handleMoistureReadingChange(reading.id, 'materialType', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        className="h-8 text-sm"
                        placeholder="%"
                        value={reading.reading}
                        onChange={(e) => handleMoistureReadingChange(reading.id, 'reading', e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-end">
              <Button onClick={addMoistureReading} variant="outline" size="sm">
                Add Reading
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Missing Button component, let's import it
import { Button } from '@/components/ui/button';

export default WaterMitigationTab;
