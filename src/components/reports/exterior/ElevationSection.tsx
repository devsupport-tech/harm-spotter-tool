
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { elevationOptions } from './damageOptions';

interface ElevationSectionProps {
  title: string;
  elevationName: string;
  selections: {[key: string]: boolean};
  handleOptionChange: (elevation: string, option: string, checked: boolean) => void;
}

const ElevationSection: React.FC<ElevationSectionProps> = ({
  title,
  elevationName,
  selections,
  handleOptionChange
}) => {
  return (
    <div className="space-y-3 border rounded-md p-4">
      <h3 className="font-semibold text-center bg-blue-50 p-2 rounded-md">{title}</h3>
      <div className="space-y-2">
        {elevationOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={`${elevationName}-${option.id}`}
              checked={selections[option.id] || false}
              onCheckedChange={(checked) => 
                handleOptionChange(elevationName, option.id, checked === true)
              }
            />
            <label
              htmlFor={`${elevationName}-${option.id}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElevationSection;
