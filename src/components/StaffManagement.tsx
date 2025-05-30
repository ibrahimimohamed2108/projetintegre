
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Edit, Eye, Mail, Phone } from 'lucide-react';

export const StaffManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const staff = [
    {
      id: 'PROF001',
      name: 'Dr. Hassan Alami',
      email: 'hassan.alami@emi.ac.ma',
      phone: '+212 5 37 68 71 48',
      department: 'Mathématiques',
      position: 'Professeur',
      specialization: 'Analyse Numérique',
      status: 'Actif',
      joiningDate: '2015-09-01'
    },
    {
      id: 'PROF002',
      name: 'Prof. Aicha Benali',
      email: 'aicha.benali@emi.ac.ma',
      phone: '+212 5 37 68 71 49',
      department: 'Informatique',
      position: 'Professeur Associé',
      specialization: 'Génie Logiciel',
      status: 'Actif',
      joiningDate: '2018-02-15'
    },
    {
      id: 'PROF003',
      name: 'Dr. Mohamed Tazi',
      email: 'mohamed.tazi@emi.ac.ma',
      phone: '+212 5 37 68 71 50',
      department: 'Physique',
      position: 'Maître de Conférences',
      specialization: 'Physique Quantique',
      status: 'En congé',
      joiningDate: '2020-01-10'
    }
  ];

  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion du Personnel</h1>
          <p className="text-gray-600">Gérer les informations du corps enseignant et administratif</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nouveau Personnel
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher par nom ou ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tous les départements</option>
              <option value="Mathématiques">Mathématiques</option>
              <option value="Informatique">Informatique</option>
              <option value="Physique">Physique</option>
              <option value="Génie Civil">Génie Civil</option>
              <option value="Génie Électrique">Génie Électrique</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-gray-600">{member.id}</p>
                </div>
                <Badge 
                  variant={member.status === 'Actif' ? 'default' : 'secondary'}
                  className={member.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                >
                  {member.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Poste</p>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Département</p>
                  <p className="text-sm text-gray-600">{member.department}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Spécialisation</p>
                  <p className="text-sm text-gray-600">{member.specialization}</p>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{member.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{member.phone}</span>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Voir
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Modifier
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
