
import React from 'react';
import RoofTypeSection from './exterior/RoofTypeSection';
import SlopeDamageSection from './exterior/SlopeDamageSection';
import ElevationDamageSection from './exterior/ElevationDamageSection';
import AdditionalExteriorSection from './exterior/AdditionalExteriorSection';
import { DamageSelections } from './exterior/damageOptions';

interface ExteriorDamageSectionProps {
  roofSelections: {[key: string]: boolean};
  slopeSelections: DamageSelections;
  elevationSelections: DamageSelections;
  additionalExteriorSelections: {[key: string]: boolean};
  handleRoofOptionChange: (id: string, checked: boolean) => void;
  handleSlopeOptionChange: (slope: string, option: string, checked: boolean) => void;
  handleElevationOptionChange: (elevation: string, option: string, checked: boolean) => void;
  handleAdditionalExteriorChange: (id: string, checked: boolean) => void;
}

const ExteriorDamageSection: React.FC<ExteriorDamageSectionProps> = ({
  roofSelections,
  slopeSelections,
  elevationSelections,
  additionalExteriorSelections,
  handleRoofOptionChange,
  handleSlopeOptionChange,
  handleElevationOptionChange,
  handleAdditionalExteriorChange
}) => {
  return (
    <>
      <RoofTypeSection 
        roofSelections={roofSelections}
        handleRoofOptionChange={handleRoofOptionChange}
      />
      
      <SlopeDamageSection 
        slopeSelections={slopeSelections}
        handleSlopeOptionChange={handleSlopeOptionChange}
      />
      
      <ElevationDamageSection 
        elevationSelections={elevationSelections}
        handleElevationOptionChange={handleElevationOptionChange}
      />
      
      <AdditionalExteriorSection 
        additionalExteriorSelections={additionalExteriorSelections}
        handleAdditionalExteriorChange={handleAdditionalExteriorChange}
      />
    </>
  );
};

export default ExteriorDamageSection;
export type { DamageSelections };
