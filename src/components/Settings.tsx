
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Settings as SettingsIcon, Shield, Bell, Database, Users, Globe } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Paramètres Système</h1>
          <p className="text-gray-600">Configuration et administration du système ERP</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <SettingsIcon className="w-4 h-4 mr-2" />
          Sauvegarder
        </Button>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Paramètres Généraux</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Nom de l'Institution</label>
              <Input defaultValue="École Mohammadia d'Ingénieurs" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Adresse</label>
              <Input defaultValue="Avenue Ibn Sina, B.P. 765, Agdal-Rabat" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Téléphone</label>
              <Input defaultValue="+212 5 37 68 71 46" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email Officiel</label>
              <Input defaultValue="contact@emi.ac.ma" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Site Web</label>
              <Input defaultValue="https://www.emi.ac.ma" className="mt-1" />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Sécurité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Authentification à deux facteurs</p>
                <p className="text-sm text-gray-600">Sécurité renforcée pour les comptes</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Expiration des sessions</p>
                <p className="text-sm text-gray-600">Déconnexion automatique après inactivité</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Durée d'expiration (minutes)</label>
              <Input type="number" defaultValue="30" className="mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Journal d'activité</p>
                <p className="text-sm text-gray-600">Enregistrer toutes les actions utilisateurs</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications par email</p>
                <p className="text-sm text-gray-600">Recevoir les alertes importantes</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications de paiement</p>
                <p className="text-sm text-gray-600">Alertes pour les paiements en retard</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications académiques</p>
                <p className="text-sm text-gray-600">Alertes pour les notes et présences</p>
              </div>
              <Switch />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email administrateur</label>
              <Input defaultValue="admin@emi.ac.ma" className="mt-1" />
            </div>
          </CardContent>
        </Card>

        {/* Database Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="w-5 h-5" />
              <span>Base de Données</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sauvegarde automatique</p>
                <p className="text-sm text-gray-600">Sauvegarde quotidienne des données</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Heure de sauvegarde</label>
              <Input type="time" defaultValue="02:00" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Rétention (jours)</label>
              <Input type="number" defaultValue="30" className="mt-1" />
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Créer une sauvegarde maintenant
              </Button>
              <Button variant="outline" className="w-full">
                Restaurer depuis une sauvegarde
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Gestion des Utilisateurs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-lg text-blue-900">Administrateurs</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Gérer
                </Button>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-lg text-green-900">Enseignants</h3>
                <p className="text-3xl font-bold text-green-600 mt-2">142</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Gérer
                </Button>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg text-purple-900">Personnel</h3>
                <p className="text-3xl font-bold text-purple-600 mt-2">68</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Gérer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
