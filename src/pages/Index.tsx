
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { StudentManagement } from '@/components/StudentManagement';
import { AcademicRecords } from '@/components/AcademicRecords';
import { StaffManagement } from '@/components/StaffManagement';
import { FinancialManagement } from '@/components/FinancialManagement';
import { Reports } from '@/components/Reports';
import { Settings } from '@/components/Settings';

const Index = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <StudentManagement />;
      case 'academics':
        return <AcademicRecords />;
      case 'staff':
        return <StaffManagement />;
      case 'financial':
        return <FinancialManagement />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {renderActiveModule()}
        </div>
      </main>
    </div>
  );
};

export default Index;
