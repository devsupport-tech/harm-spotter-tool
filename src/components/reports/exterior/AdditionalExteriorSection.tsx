
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { additionalExteriorOptions } from './damageOptions';

interface AdditionalExteriorSectionProps {
  additionalExteriorSelections: {[key: string]: boolean};
  handleAdditionalExteriorChange: (id: string, checked: boolean) => void;
}

const AdditionalExteriorSection: React.FC<AdditionalExteriorSectionProps> = ({
  additionalExteriorSelections,
  handleAdditionalExteriorChange
}) => {
  return (
    <Card className="shadow-sm form-section-transition">
      <CardHeader>
        <CardTitle>Additional Exterior Features</CardTitle>
        <CardDescription>Select all damaged exterior features.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {additionalExteriorOptions.map((option) => (
            <div
              key={option.id}
              className={`flex items-center space-x-2 border rounded-md p-3 transition-colors ${
                additionalExteriorSelections[option.id] ? 'checked-item' : 'hover:bg-gray-50'
              }`}
            >
              <Checkbox
                id={`exterior-${option.id}`}
                checked={additionalExteriorSelections[option.id] || false}
                onCheckedChange={(checked) => 
                  handleAdditionalExteriorChange(option.id, checked === true)
                }
              />
              <label
                htmlFor={`exterior-${option.id}`}
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

export default AdditionalExteriorSection;
