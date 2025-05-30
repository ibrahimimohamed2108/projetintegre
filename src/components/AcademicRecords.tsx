
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, Award, TrendingUp } from 'lucide-react';

export const AcademicRecords = () => {
  const courses = [
    {
      id: 'MATH301',
      name: 'Mathématiques Appliquées',
      instructor: 'Dr. Hassan Alami',
      credits: 6,
      semester: 'Automne 2024',
      enrolled: 87,
      status: 'En cours'
    },
    {
      id: 'INFO201',
      name: 'Programmation Orientée Objet',
      instructor: 'Prof. Aicha Benali',
      credits: 4,
      semester: 'Automne 2024',
      enrolled: 92,
      status: 'En cours'
    },
    {
      id: 'PHYS101',
      name: 'Physique Générale',
      instructor: 'Dr. Mohamed Tazi',
      credits: 5,
      semester: 'Printemps 2024',
      enrolled: 78,
      status: 'Terminé'
    }
  ];

  const grades = [
    {
      studentId: 'EMI001',
      studentName: 'Ahmed Benali',
      course: 'MATH301',
      midterm: 15.5,
      final: 17.0,
      overall: 16.25,
      grade: 'A'
    },
    {
      studentId: 'EMI002',
      studentName: 'Fatima Zahra El Amrani',
      course: 'INFO201',
      midterm: 14.0,
      final: 16.5,
      overall: 15.25,
      grade: 'B+'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dossiers Académiques</h1>
          <p className="text-gray-600">Gestion des cours, notes et évaluations</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Nouveau Semestre
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <BookOpen className="w-4 h-4 mr-2" />
            Nouveau Cours
          </Button>
        </div>
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="courses">Cours</TabsTrigger>
          <TabsTrigger value="grades">Notes</TabsTrigger>
          <TabsTrigger value="schedules">Emplois du Temps</TabsTrigger>
          <TabsTrigger value="statistics">Statistiques</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <p className="text-sm text-gray-600">{course.id}</p>
                    </div>
                    <Badge 
                      variant={course.status === 'En cours' ? 'default' : 'secondary'}
                      className={course.status === 'En cours' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                    >
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Enseignant:</span>
                      <span className="text-sm font-medium">{course.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Crédits:</span>
                      <span className="text-sm font-medium">{course.credits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Semestre:</span>
                      <span className="text-sm font-medium">{course.semester}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Inscrits:</span>
                      <span className="text-sm font-medium">{course.enrolled} étudiants</span>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        Voir Détails
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Modifier
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="grades" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Saisie et Consultation des Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Étudiant</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Cours</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Contrôle Continu</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Examen Final</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Note Globale</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Mention</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map((grade, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{grade.studentName}</p>
                            <p className="text-sm text-gray-600">{grade.studentId}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium text-blue-600">{grade.course}</td>
                        <td className="py-3 px-4">{grade.midterm}/20</td>
                        <td className="py-3 px-4">{grade.final}/20</td>
                        <td className="py-3 px-4 font-medium">{grade.overall}/20</td>
                        <td className="py-3 px-4">
                          <Badge 
                            variant="default"
                            className={`${
                              grade.grade === 'A' ? 'bg-green-100 text-green-800' :
                              grade.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {grade.grade}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">
                            Modifier
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Emplois du Temps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Gestion des Emplois du Temps</h3>
                <p className="text-gray-600 mb-4">Planifiez et organisez les emplois du temps des cours</p>
                <Button>Créer un Emploi du Temps</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statistics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Moyenne Générale</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">15.8/20</p>
                  </div>
                  <div className="bg-green-500 p-3 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Taux de Réussite</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">87%</p>
                  </div>
                  <div className="bg-blue-500 p-3 rounded-full">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
