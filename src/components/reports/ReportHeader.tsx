
import React from 'react';

const ReportHeader: React.FC = () => {
  return (
    <header className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Damage Report</h1>
      <p className="text-gray-600">
        Complete the form below to document and submit property damage.
      </p>
    </header>
  );
};

export default ReportHeader;
