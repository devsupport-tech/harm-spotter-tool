
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import SlopeSection from './SlopeSection';
import { DamageSelections } from './damageOptions';

interface SlopeDamageSectionProps {
  slopeSelections: DamageSelections;
  handleSlopeOptionChange: (slope: string, option: string, checked: boolean) => void;
}

const SlopeDamageSection: React.FC<SlopeDamageSectionProps> = ({
  slopeSelections,
  handleSlopeOptionChange
}) => {
  return (
    <Card className="shadow-sm form-section-transition">
      <CardHeader>
        <CardTitle>Slope Damage</CardTitle>
        <CardDescription>Identify damage in each section of the roof.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SlopeSection 
            title="Front Slope"
            slopeName="frontSlope"
            selections={slopeSelections.frontSlope}
            handleOptionChange={handleSlopeOptionChange}
          />
          <SlopeSection 
            title="Right Slope"
            slopeName="rightSlope"
            selections={slopeSelections.rightSlope}
            handleOptionChange={handleSlopeOptionChange}
          />
          <SlopeSection 
            title="Back Slope"
            slopeName="backSlope"
            selections={slopeSelections.backSlope}
            handleOptionChange={handleSlopeOptionChange}
          />
          <SlopeSection 
            title="Left Slope"
            slopeName="leftSlope"
            selections={slopeSelections.leftSlope}
            handleOptionChange={handleSlopeOptionChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SlopeDamageSection;
