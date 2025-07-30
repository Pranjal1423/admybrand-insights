'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BarChart, PieChart, LineChart } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <DashboardLayout 
      title="Analytics" 
      subtitle="Deep dive into your marketing performance and insights."
    >
      <div className="space-y-8">
        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Performance Trends
              </CardTitle>
              <CardDescription>
                Track your KPIs over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Advanced analytics coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-green-600" />
                Channel Performance
              </CardTitle>
              <CardDescription>
                Compare different marketing channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg">
                <div className="text-center">
                  <BarChart className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Channel analysis coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-purple-600" />
                Audience Insights
              </CardTitle>
              <CardDescription>
                Understand your audience better
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Audience data coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
          <CardHeader>
            <CardTitle>Detailed Analytics Dashboard</CardTitle>
            <CardDescription>
              Comprehensive view of all your marketing metrics and performance indicators.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-900/20 rounded-lg">
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-4">
                  <LineChart className="h-16 w-16 text-blue-300" />
                  <BarChart className="h-16 w-16 text-green-300" />
                  <PieChart className="h-16 w-16 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Advanced Analytics Coming Soon
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    Interactive charts, real-time data visualization, and detailed performance 
                    metrics will be available in the next phase of development.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}