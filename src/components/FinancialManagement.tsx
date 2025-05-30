
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, CreditCard, TrendingUp, AlertCircle, Plus, Download } from 'lucide-react';

export const FinancialManagement = () => {
  const financialSummary = [
    { title: 'Revenus Totaux', value: '12,450,000 MAD', icon: DollarSign, color: 'bg-green-500', change: '+8.2%' },
    { title: 'Frais de Scolarité', value: '9,230,000 MAD', icon: CreditCard, color: 'bg-blue-500', change: '+5.1%' },
    { title: 'Dépenses', value: '8,670,000 MAD', icon: TrendingUp, color: 'bg-purple-500', change: '+3.8%' },
    { title: 'Solde', value: '3,780,000 MAD', icon: AlertCircle, color: 'bg-orange-500', change: '+12.4%' },
  ];

  const payments = [
    {
      id: 'PAY001',
      studentName: 'Ahmed Benali',
      studentId: 'EMI001',
      amount: 15000,
      type: 'Frais de Scolarité',
      status: 'Payé',
      date: '2024-01-15',
      method: 'Virement Bancaire'
    },
    {
      id: 'PAY002',
      studentName: 'Fatima Zahra El Amrani',
      studentId: 'EMI002',
      amount: 15000,
      type: 'Frais de Scolarité',
      status: 'En attente',
      date: '2024-01-10',
      method: 'Chèque'
    },
    {
      id: 'PAY003',
      studentName: 'Youssef Alaoui',
      studentId: 'EMI003',
      amount: 2500,
      type: 'Frais d\'inscription',
      status: 'Payé',
      date: '2024-01-12',
      method: 'Espèces'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion Financière</h1>
          <p className="text-gray-600">Suivi des revenus, dépenses et paiements</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nouveau Paiement
          </Button>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialSummary.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{item.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{item.value}</p>
                    <p className="text-sm text-green-600 mt-1">{item.change} ce mois</p>
                  </div>
                  <div className={`${item.color} p-3 rounded-full`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">ID Transaction</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Étudiant</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Montant</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Méthode</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Statut</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-blue-600">{payment.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{payment.studentName}</p>
                        <p className="text-sm text-gray-600">{payment.studentId}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">{payment.type}</td>
                    <td className="py-3 px-4 font-medium">{payment.amount.toLocaleString()} MAD</td>
                    <td className="py-3 px-4">{payment.method}</td>
                    <td className="py-3 px-4">{new Date(payment.date).toLocaleDateString('fr-FR')}</td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={payment.status === 'Payé' ? 'default' : 'secondary'}
                        className={payment.status === 'Payé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Détails
                        </Button>
                        {payment.status === 'En attente' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Confirmer
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Évolution des Revenus</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Graphique des revenus mensuels</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Répartition des Paiements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Frais de Scolarité</span>
                <span className="font-bold text-blue-600">74%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Frais d'Inscription</span>
                <span className="font-bold text-green-600">16%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Autres Frais</span>
                <span className="font-bold text-purple-600">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
