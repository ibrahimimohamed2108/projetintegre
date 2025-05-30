
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Edit, Trash2, Eye, Filter } from 'lucide-react';

export const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const students = [
    {
      id: 'EMI001',
      name: 'Ahmed Benali',
      email: 'ahmed.benali@emi.ac.ma',
      year: '3ème année',
      specialization: 'Génie Informatique',
      status: 'Actif',
      phone: '+212 6 12 34 56 78'
    },
    {
      id: 'EMI002',
      name: 'Fatima Zahra El Amrani',
      email: 'fatima.elamrani@emi.ac.ma',
      year: '2ème année',
      specialization: 'Génie Civil',
      status: 'Actif',
      phone: '+212 6 23 45 67 89'
    },
    {
      id: 'EMI003',
      name: 'Youssef Alaoui',
      email: 'youssef.alaoui@emi.ac.ma',
      year: '1ère année',
      specialization: 'Génie Électrique',
      status: 'En congé',
      phone: '+212 6 34 56 78 90'
    },
    {
      id: 'EMI004',
      name: 'Salma Bennani',
      email: 'salma.bennani@emi.ac.ma',
      year: '3ème année',
      specialization: 'Génie Industriel',
      status: 'Actif',
      phone: '+212 6 45 67 89 01'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || student.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Étudiants</h1>
          <p className="text-gray-600">Gérer les informations des étudiants de l'EMI</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nouvel Étudiant
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
                  placeholder="Rechercher par nom ou ID étudiant..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Toutes les années</option>
                <option value="1ère année">1ère année</option>
                <option value="2ème année">2ème année</option>
                <option value="3ème année">3ème année</option>
              </select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtres
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Liste des Étudiants ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">ID Étudiant</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Nom Complet</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Année</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Spécialisation</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Statut</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-blue-600">{student.id}</td>
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4 text-gray-600">{student.email}</td>
                    <td className="py-3 px-4">{student.year}</td>
                    <td className="py-3 px-4">{student.specialization}</td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={student.status === 'Actif' ? 'default' : 'secondary'}
                        className={student.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {student.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
