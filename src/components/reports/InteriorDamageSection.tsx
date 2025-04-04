
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

// Define interior options
const interiorOptions = [
  { id: "livingRoom", label: "Living Room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "diningRoom", label: "Dining Room" },
  { id: "bedrooms", label: "Bedrooms" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "hallways", label: "Hallways" },
  { id: "ceiling", label: "Ceiling" },
  { id: "walls", label: "Walls" },
  { id: "flooring", label: "Flooring" },
  { id: "trim", label: "Trim" },
  { id: "cabinetry", label: "Cabinetry" },
  { id: "plumbing", label: "Plumbing" },
  { id: "electrical", label: "Electrical" },
  { id: "fixtures", label: "Fixtures" },
  { id: "appliances", label: "Appliances" },
];

interface InteriorDamageSectionProps {
  interiorSelections: {[key: string]: boolean};
  handleInteriorChange: (id: string, checked: boolean) => void;
}

const InteriorDamageSection: React.FC<InteriorDamageSectionProps> = ({
  interiorSelections,
  handleInteriorChange
}) => {
  return (
    <Card className="shadow-sm form-section-transition">
      <CardHeader>
        <CardTitle>Interior Damage</CardTitle>
        <CardDescription>Select all areas with interior damage.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interiorOptions.map((option) => (
            <div
              key={option.id}
              className={`flex items-center space-x-2 border rounded-md p-3 transition-colors ${
                interiorSelections[option.id] ? 'checked-item' : 'hover:bg-gray-50'
              }`}
            >
              <Checkbox
                id={`interior-${option.id}`}
                checked={interiorSelections[option.id] || false}
                onCheckedChange={(checked) => 
                  handleInteriorChange(option.id, checked === true)
                }
              />
              <label
                htmlFor={`interior-${option.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InteriorDamageSection;
