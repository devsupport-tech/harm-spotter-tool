
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { slopeOptions } from './damageOptions';
import { Info } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SlopeSectionProps {
  title: string;
  slopeName: string;
  selections: {[key: string]: boolean};
  handleOptionChange: (slope: string, option: string, checked: boolean) => void;
}

const SlopeSection: React.FC<SlopeSectionProps> = ({
  title,
  slopeName,
  selections,
  handleOptionChange
}) => {
  const isMobile = useIsMobile();
  const hasSelections = Object.values(selections).some(value => value === true);
  
  return (
    <div className={`space-y-3 border rounded-md p-4 transition-all duration-300 ${hasSelections ? 'border-teal-300 bg-teal-50/50' : 'hover:border-teal-200'}`}>
      <h3 
        className="font-semibold text-center bg-teal-50 p-2 rounded-md flex items-center justify-center gap-2"
        id={`slope-section-${slopeName}`}
        aria-label={`${title} section`}
      >
        {title}
        {!hasSelections && (
          <span className="inline-flex items-center text-xs text-gray-500">
            <Info className="h-3 w-3 mr-1" />
            <span className="sr-only">Information: </span>
            No selections yet
          </span>
        )}
      </h3>
      
      <div className={`${isMobile ? 'space-y-3' : 'grid grid-cols-1 md:grid-cols-2 gap-2'}`} 
        role="group" 
        aria-labelledby={`slope-section-${slopeName}`}
      >
        {slopeOptions.map((option) => (
          <div 
            key={option.id} 
            className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
              selections[option.id] ? 'checked-item' : 'hover:bg-teal-50/50'
            }`}
          >
            <Checkbox
              id={`${slopeName}-${option.id}`}
              checked={selections[option.id] || false}
              onCheckedChange={(checked) => 
                handleOptionChange(slopeName, option.id, checked === true)
              }
              aria-describedby={`${slopeName}-${option.id}-label`}
              className="focus-ring"
            />
            <label
              id={`${slopeName}-${option.id}-label`}
              htmlFor={`${slopeName}-${option.id}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      
      {/* Validation feedback */}
      {hasSelections && (
        <div className="text-xs text-teal-600 pt-1 success-message" aria-live="polite">
          <span className="sr-only">Success:</span> {Object.values(selections).filter(v => v).length} items selected
        </div>
      )}
    </div>
  );
};

export default SlopeSection;
