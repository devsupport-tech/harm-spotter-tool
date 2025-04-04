
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { ReportType } from '@/components/ReportTypeSelector';
import ExteriorDamageSection from '@/components/reports/ExteriorDamageSection';
import { DamageSelections } from '@/components/reports/exterior/damageOptions';
import InteriorDamageSection from '@/components/reports/InteriorDamageSection';
import ContentsCleaningTab from '@/components/reports/ContentsCleaningTab';
import KitchenBathAddOnTab from '@/components/reports/KitchenBathAddOnTab';
import PackoutWorksheetTab from '@/components/reports/PackoutWorksheetTab';
import StructuralCleaningTab from '@/components/reports/StructuralCleaningTab';
import WaterMitigationTab from '@/components/reports/WaterMitigationTab';

interface ReportTabContentProps {
  activeTab: ReportType;
  roofSelections: {[key: string]: boolean};
  slopeSelections: DamageSelections;
  elevationSelections: DamageSelections;
  additionalExteriorSelections: {[key: string]: boolean};
  interiorSelections: {[key: string]: boolean};
  handleRoofOptionChange: (id: string, checked: boolean) => void;
  handleSlopeOptionChange: (slope: string, option: string, checked: boolean) => void;
  handleElevationOptionChange: (elevation: string, option: string, checked: boolean) => void;
  handleAdditionalExteriorChange: (id: string, checked: boolean) => void;
  handleInteriorChange: (id: string, checked: boolean) => void;
}

const ReportTabContent: React.FC<ReportTabContentProps> = ({
  activeTab,
  roofSelections,
  slopeSelections,
  elevationSelections,
  additionalExteriorSelections,
  interiorSelections,
  handleRoofOptionChange,
  handleSlopeOptionChange,
  handleElevationOptionChange,
  handleAdditionalExteriorChange,
  handleInteriorChange,
}) => {
  return (
    <>
      <TabsContent value="exterior" className="space-y-6">
        <ExteriorDamageSection 
          roofSelections={roofSelections}
          slopeSelections={slopeSelections}
          elevationSelections={elevationSelections}
          additionalExteriorSelections={additionalExteriorSelections}
          handleRoofOptionChange={handleRoofOptionChange}
          handleSlopeOptionChange={handleSlopeOptionChange}
          handleElevationOptionChange={handleElevationOptionChange}
          handleAdditionalExteriorChange={handleAdditionalExteriorChange}
        />
      </TabsContent>
      
      <TabsContent value="interior" className="space-y-6">
        <InteriorDamageSection 
          interiorSelections={interiorSelections}
          handleInteriorChange={handleInteriorChange}
        />
      </TabsContent>
      
      <TabsContent value="contents">
        <ContentsCleaningTab />
      </TabsContent>
      
      <TabsContent value="add-on">
        <KitchenBathAddOnTab />
      </TabsContent>
      
      <TabsContent value="packout">
        <PackoutWorksheetTab />
      </TabsContent>
      
      <TabsContent value="structural">
        <StructuralCleaningTab />
      </TabsContent>
      
      <TabsContent value="water">
        <WaterMitigationTab />
      </TabsContent>
    </>
  );
};

export default ReportTabContent;
