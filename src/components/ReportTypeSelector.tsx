
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home,
  Construction,
  Droplets,
  Package,
  Bath,
  Sofa,
  Warehouse,
  Hammer,
} from 'lucide-react';

export type ReportType = 
  | 'exterior' 
  | 'interior' 
  | 'contents' 
  | 'add-on' 
  | 'packout' 
  | 'structural' 
  | 'water';

interface ReportTypeSelectorProps {
  activeTab: ReportType;
  onChange: (value: ReportType) => void;
}

const ReportTypeSelector: React.FC<ReportTypeSelectorProps> = ({ 
  activeTab, 
  onChange 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (value: string) => {
    const reportType = value as ReportType;
    onChange(reportType);
    
    // Update URL when tab changes
    navigate(`/reports?type=${reportType}`, { replace: true });
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid grid-cols-3 md:grid-cols-7 h-auto p-1">
        <TabsTrigger 
          value="exterior"
          className="flex flex-col items-center py-2 px-3 gap-1"
        >
          <Construction className="h-4 w-4" />
          <span className="text-xs">Exterior</span>
        </TabsTrigger>
        <TabsTrigger 
          value="interior"
          className="flex flex-col items-center py-2 px-3 gap-1"
        >
          <Sofa className="h-4 w-4" />
          <span className="text-xs">Interior</span>
        </TabsTrigger>
        <TabsTrigger 
          value="contents"
          className="flex flex-col items-center py-2 px-3 gap-1"
        >
          <Home className="h-4 w-4" />
          <span className="text-xs">Contents</span>
        </TabsTrigger>
        <TabsTrigger 
          value="add-on"
          className="flex flex-col items-center py-2 px-3 gap-1"
        >
          <Bath className="h-4 w-4" />
          <span className="text-xs">Add-On</span>
        </TabsTrigger>
        <TabsTrigger 
          value="packout"
          className="flex flex-col items-center py-2 px-3 gap-1"
        >
          <Package className="h-4 w-4" />
          <span className="text-xs">Packout</span>
        </TabsTrigger>
        <TabsTrigger 
          value="structural"
          className="flex flex-col items-center py-2 px-3 gap-1"
        >
          <Hammer className="h-4 w-4" />
          <span className="text-xs">Structural</span>
        </TabsTrigger>
        <TabsTrigger 
          value="water"
          className="flex flex-col items-center py-2 px-3 gap-1"
        >
          <Droplets className="h-4 w-4" />
          <span className="text-xs">Water</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ReportTypeSelector;
