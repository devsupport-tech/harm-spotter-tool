
import { useState } from 'react';
import { ReportType } from '@/components/ReportTypeSelector';
import { DamageSelections } from '@/components/reports/exterior/damageOptions';
import { FormData } from '@/components/reports/ClientInfoSection';

export const useReportState = (initialTabValue: ReportType) => {
  const [activeTab, setActiveTab] = useState<ReportType>(initialTabValue);
  
  const [roofSelections, setRoofSelections] = useState<{[key: string]: boolean}>({});
  const [slopeSelections, setSlopeSelections] = useState<DamageSelections>({
    frontSlope: {},
    rightSlope: {},
    backSlope: {},
    leftSlope: {},
  });
  const [elevationSelections, setElevationSelections] = useState<DamageSelections>({
    frontElevation: {},
    rightElevation: {},
    backElevation: {},
    leftElevation: {},
  });
  const [additionalExteriorSelections, setAdditionalExteriorSelections] = useState<{[key: string]: boolean}>({});
  const [interiorSelections, setInteriorSelections] = useState<{[key: string]: boolean}>({});
  
  const handleRoofOptionChange = (id: string, checked: boolean) => {
    setRoofSelections(prev => ({
      ...prev,
      [id]: checked
    }));
  };

  const handleSlopeOptionChange = (slope: string, option: string, checked: boolean) => {
    setSlopeSelections(prev => ({
      ...prev,
      [slope]: {
        ...prev[slope],
        [option]: checked
      }
    }));
  };

  const handleElevationOptionChange = (elevation: string, option: string, checked: boolean) => {
    setElevationSelections(prev => ({
      ...prev,
      [elevation]: {
        ...prev[elevation],
        [option]: checked
      }
    }));
  };

  const handleAdditionalExteriorChange = (id: string, checked: boolean) => {
    setAdditionalExteriorSelections(prev => ({
      ...prev,
      [id]: checked
    }));
  };

  const handleInteriorChange = (id: string, checked: boolean) => {
    setInteriorSelections(prev => ({
      ...prev,
      [id]: checked
    }));
  };
  
  const getFormattedReportData = (formData: FormData) => {
    return {
      ...formData,
      roofSelections,
      slopeSelections,
      elevationSelections,
      additionalExteriorSelections,
      interiorSelections,
      reportType: activeTab
    };
  };

  return {
    activeTab,
    setActiveTab,
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
    getFormattedReportData
  };
};
