
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Tabs } from '@/components/ui/tabs';
import { ReportType } from '@/components/ReportTypeSelector';
import { useReportState } from '@/hooks/useReportState';

// Import refactored components
import ReportHeader from '@/components/reports/ReportHeader';
import ClientInfoSection, { formSchema, FormData } from '@/components/reports/ClientInfoSection';
import ReportTypeSelector from '@/components/ReportTypeSelector';
import ReportTabContent from '@/components/reports/ReportTabContent';
import PhotoDocumentationSection from '@/components/reports/PhotoDocumentationSection';
import ReportActionButtons from '@/components/reports/ReportActionButtons';

const ReportsPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTabValue = queryParams.get('type') as ReportType || 'exterior';
  
  const {
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
  } = useReportState(initialTabValue);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      claimNumber: "",
      deductible: "",
      dateOfLoss: "",
      notes: "",
    },
  });

  useEffect(() => {
    navigate(`/reports?type=${activeTab}`, { replace: true });
  }, [activeTab, navigate]);

  const onSubmit = (data: FormData) => {
    const reportData = getFormattedReportData(data);
    console.log('Report data:', reportData);
    
    toast({
      title: "Report submitted successfully",
      description: "Your damage report has been saved.",
    });
  };

  const generateReport = () => {
    toast({
      title: "Generating PDF...",
      description: "Your damage report PDF is being prepared for download.",
    });
    
    setTimeout(() => {
      toast({
        title: "Report Ready",
        description: "Your PDF report has been generated successfully.",
      });
    }, 1500);
  };

  const handleTabChange = (value: ReportType) => {
    setActiveTab(value);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 fade-in">
      <ReportHeader />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <ClientInfoSection form={form} />

          <div className="slide-in delay-200">
            <ReportTypeSelector 
              activeTab={activeTab} 
              onChange={handleTabChange} 
            />
          </div>
          
          <Tabs value={activeTab} className="slide-in delay-200">
            <ReportTabContent 
              activeTab={activeTab}
              roofSelections={roofSelections}
              slopeSelections={slopeSelections}
              elevationSelections={elevationSelections}
              additionalExteriorSelections={additionalExteriorSelections}
              interiorSelections={interiorSelections}
              handleRoofOptionChange={handleRoofOptionChange}
              handleSlopeOptionChange={handleSlopeOptionChange}
              handleElevationOptionChange={handleElevationOptionChange}
              handleAdditionalExteriorChange={handleAdditionalExteriorChange}
              handleInteriorChange={handleInteriorChange}
            />
          </Tabs>

          <PhotoDocumentationSection />

          <ReportActionButtons onGenerateReport={generateReport} />
        </form>
      </Form>
    </div>
  );
};

export default ReportsPage;
