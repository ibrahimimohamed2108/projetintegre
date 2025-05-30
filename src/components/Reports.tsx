
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, BarChart3, Users, TrendingUp } from 'lucide-react';

export const Reports = () => {
  const reportTypes = [
    {
      title: 'Rapport Académique',
      description: 'Notes, présences et performances des étudiants',
      icon: FileText,
      color: 'bg-blue-500',
      lastGenerated: '2024-01-15'
    },
    {
      title: 'Rapport Financier',
      description: 'Revenus, dépenses et bilans financiers',
      icon: BarChart3,
      color: 'bg-green-500',
      lastGenerated: '2024-01-10'
    },
    {
      title: 'Rapport de Présence',
      description: 'Statistiques de présence par cours et étudiant',
      icon: Users,
      color: 'bg-purple-500',
      lastGenerated: '2024-01-12'
    },
    {
      title: 'Rapport de Performance',
      description: 'Analyses des tendances et KPIs',
      icon: TrendingUp,
      color: 'bg-orange-500',
      lastGenerated: '2024-01-08'
    }
  ];

  const quickReports = [
    'Liste des étudiants par année',
    'Relevé de notes par semestre',
    'État des paiements en cours',
    'Planning des examens',
    'Statistiques d\'admission'
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rapports et Analyses</h1>
          <p className="text-gray-600">Générer et consulter les rapports institutionnels</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="w-4 h-4 mr-2" />
          Nouveau Rapport
        </Button>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportTypes.map((report, index) => {
          const Icon = report.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className={`${report.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{report.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                  <p className="text-xs text-gray-500 mb-4">
                    Dernier: {new Date(report.lastGenerated).toLocaleDateString('fr-FR')}
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Générer
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Rapports Rapides</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickReports.map((report, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium">{report}</span>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rapports Programmés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Rapport Mensuel Académique</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Actif</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Généré automatiquement le 1er de chaque mois</p>
                <p className="text-xs text-gray-500">Prochaine génération: 01/02/2024</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Bilan Financier Trimestriel</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Programmé</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Généré tous les 3 mois</p>
                <p className="text-xs text-gray-500">Prochaine génération: 01/04/2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Rapports Récents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Nom du Rapport</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Date de Génération</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Taille</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Rapport_Academique_Janvier_2024.pdf</td>
                  <td className="py-3 px-4">Académique</td>
                  <td className="py-3 px-4">15/01/2024 14:30</td>
                  <td className="py-3 px-4">2.3 MB</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Partager
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Bilan_Financier_Q4_2023.xlsx</td>
                  <td className="py-3 px-4">Financier</td>
                  <td className="py-3 px-4">10/01/2024 09:15</td>
                  <td className="py-3 px-4">1.8 MB</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Partager
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
