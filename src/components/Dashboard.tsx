
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, UserCheck, TrendingUp, Calendar, BookOpen } from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    { title: 'Étudiants Actifs', value: '2,847', icon: Users, color: 'bg-blue-500' },
    { title: 'Cours Dispensés', value: '156', icon: BookOpen, color: 'bg-green-500' },
    { title: 'Personnel Enseignant', value: '142', icon: UserCheck, color: 'bg-purple-500' },
    { title: 'Taux de Réussite', value: '87%', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { action: 'Inscription nouveau étudiant', name: 'Ahmed Benali', time: 'Il y a 2 heures' },
    { action: 'Note publiée', name: 'Cours Mathématiques', time: 'Il y a 4 heures' },
    { action: 'Nouvel enseignant', name: 'Dr. Fatima Zahra', time: 'Il y a 1 jour' },
    { action: 'Paiement reçu', name: 'Frais de scolarité', time: 'Il y a 2 jours' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Tableau de Bord EMI</h1>
            <p className="text-blue-100 mt-2">Vue d'ensemble du système ERP</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100">Dernière mise à jour</p>
            <p className="text-xl font-semibold">{new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Activités Récentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.name}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Nouvel Étudiant</p>
              </button>
              <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
                <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Nouveau Cours</p>
              </button>
              <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
                <UserCheck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Nouvel Enseignant</p>
              </button>
              <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Rapport</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
