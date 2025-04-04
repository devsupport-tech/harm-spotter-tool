
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const PhotoDocumentationSection: React.FC = () => {
  return (
    <Card className="shadow-sm slide-in delay-300">
      <CardHeader>
        <CardTitle>Photo Documentation</CardTitle>
        <CardDescription>
          Upload photos to document the damage (Note: This is a placeholder - actual file upload implementation would go here)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          <Camera className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm font-medium text-gray-600">
            Drag and drop photos here, or click to select files
          </p>
          <p className="mt-1 text-xs text-gray-500">
            PNG, JPG, HEIC up to 10MB each
          </p>
          <Button variant="outline" className="mt-4">
            Add Photos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoDocumentationSection;
