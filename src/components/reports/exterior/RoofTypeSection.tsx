
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { roofTypeOptions } from './damageOptions';

interface RoofTypeSectionProps {
  roofSelections: {[key: string]: boolean};
  handleRoofOptionChange: (id: string, checked: boolean) => void;
}

const RoofTypeSection: React.FC<RoofTypeSectionProps> = ({
  roofSelections,
  handleRoofOptionChange
}) => {
  return (
    <Card className="shadow-sm form-section-transition">
      <CardHeader>
        <CardTitle>Roof Type</CardTitle>
        <CardDescription>Select all applicable options.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {roofTypeOptions.map((option) => (
            <div
              key={option.id}
              className={`flex items-center space-x-2 border rounded-md p-3 transition-colors ${
                roofSelections[option.id] ? 'checked-item' : 'hover:bg-gray-50'
              }`}
            >
              <Checkbox
                id={`roof-${option.id}`}
                checked={roofSelections[option.id] || false}
                onCheckedChange={(checked) => 
                  handleRoofOptionChange(option.id, checked === true)
                }
              />
              <label
                htmlFor={`roof-${option.id}`}
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

export default RoofTypeSection;
