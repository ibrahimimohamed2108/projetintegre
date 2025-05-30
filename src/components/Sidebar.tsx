
import React from 'react';
import { 
  Home, 
  Users, 
  GraduationCap, 
  UserCheck, 
  DollarSign, 
  FileText, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Tableau de Bord', icon: Home },
  { id: 'students', label: 'Gestion Étudiants', icon: Users },
  { id: 'academics', label: 'Dossiers Académiques', icon: GraduationCap },
  { id: 'staff', label: 'Gestion Personnel', icon: UserCheck },
  { id: 'financial', label: 'Gestion Financière', icon: DollarSign },
  { id: 'reports', label: 'Rapports', icon: FileText },
  { id: 'settings', label: 'Paramètres', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className={`bg-blue-900 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="p-4 border-b border-blue-800">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/fr/0/05/EMI.PNG" 
                alt="EMI Logo" 
                className="w-10 h-10 rounded"
              />
              <div>
                <h1 className="font-bold text-lg">EMI ERP</h1>
                <p className="text-xs text-blue-300">École Mohammadia d'Ingénieurs</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white hover:bg-blue-800"
          >
            {isCollapsed ? <Menu size={16} /> : <X size={16} />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                activeModule === item.id
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-blue-800 p-3 rounded-lg">
            <p className="text-xs text-blue-200">Version 1.0</p>
            <p className="text-xs text-blue-300">© 2024 EMI</p>
          </div>
        </div>
      )}
    </div>
  );
};
