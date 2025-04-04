
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ElevationSection from './ElevationSection';
import { DamageSelections } from './damageOptions';

interface ElevationDamageSectionProps {
  elevationSelections: DamageSelections;
  handleElevationOptionChange: (elevation: string, option: string, checked: boolean) => void;
}

const ElevationDamageSection: React.FC<ElevationDamageSectionProps> = ({
  elevationSelections,
  handleElevationOptionChange
}) => {
  return (
    <Card className="shadow-sm form-section-transition">
      <CardHeader>
        <CardTitle>Elevation</CardTitle>
        <CardDescription>Identify damage to the exterior walls and features.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ElevationSection 
            title="Front Elevation"
            elevationName="frontElevation"
            selections={elevationSelections.frontElevation}
            handleOptionChange={handleElevationOptionChange}
          />
          <ElevationSection 
            title="Right Elevation"
            elevationName="rightElevation"
            selections={elevationSelections.rightElevation}
            handleOptionChange={handleElevationOptionChange}
          />
          <ElevationSection 
            title="Back Elevation"
            elevationName="backElevation"
            selections={elevationSelections.backElevation}
            handleOptionChange={handleElevationOptionChange}
          />
          <ElevationSection 
            title="Left Elevation"
            elevationName="leftElevation"
            selections={elevationSelections.leftElevation}
            handleOptionChange={handleElevationOptionChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ElevationDamageSection;
