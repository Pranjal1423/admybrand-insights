'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      name: 'Monthly Performance Report',
      description: 'Comprehensive overview of all campaigns for January 2024',
      type: 'Monthly',
      status: 'ready',
      createdAt: '2024-01-30',
      size: '2.4 MB',
    },
    {
      id: 2,
      name: 'Q4 2023 Analytics Summary',
      description: 'Quarterly analysis of performance metrics and ROI',
      type: 'Quarterly',
      status: 'ready',
      createdAt: '2024-01-05',
      size: '5.1 MB',
    },
    {
      id: 3,
      name: 'Campaign Effectiveness Report',
      description: 'Detailed analysis of top-performing campaigns',
      type: 'Custom',
      status: 'processing',
      createdAt: '2024-01-28',
      size: 'Processing...',
    },
    {
      id: 4,
      name: 'Weekly Traffic Analysis',
      description: 'Website traffic and conversion analysis for this week',
      type: 'Weekly',
      status: 'ready',
      createdAt: '2024-01-29',
      size: '1.8 MB',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Monthly':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Quarterly':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Weekly':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'Custom':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <DashboardLayout 
      title="Reports" 
      subtitle="Generate and download comprehensive analytics reports."
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Available Reports
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {reports.filter(r => r.status === 'ready').length} reports ready for download
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
                      <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {report.name}
                        </h3>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Badge variant="outline" className={getTypeColor(report.type)}>
                          {report.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {report.description}
                      </p>
                      <div className="flex items-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
                        <span>Created: {report.createdAt}</span>
                        <span>Size: {report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {report.status === 'ready' && (
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Templates */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-indigo-600" />
              Report Templates
            </CardTitle>
            <CardDescription>
              Quick access to commonly used report formats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Performance Summary', description: 'Overall campaign performance' },
                { name: 'ROI Analysis', description: 'Return on investment metrics' },
                { name: 'Traffic Report', description: 'Website traffic analytics' },
                { name: 'Conversion Funnel', description: 'User journey analysis' },
              ].map((template, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {template.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {template.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}