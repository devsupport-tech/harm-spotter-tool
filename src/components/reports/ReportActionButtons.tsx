
import React from 'react';
import { FileDown, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ReportActionButtonsProps {
  onGenerateReport: () => void;
}

const ReportActionButtons: React.FC<ReportActionButtonsProps> = ({ onGenerateReport }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-end slide-in delay-400">
      <Button 
        type="button" 
        variant="outline"
        onClick={onGenerateReport}
        className="flex items-center"
      >
        <FileDown className="mr-2 h-4 w-4" />
        Generate PDF
      </Button>
      <Button 
        type="submit" 
        className="flex items-center"
      >
        <Save className="mr-2 h-4 w-4" />
        Save Report
      </Button>
    </div>
  );
};

export default ReportActionButtons;
