'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockMetrics } from '@/data/mockData';
import {
  DollarSign,
  Users,
  Target,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Activity,
} from 'lucide-react';

// Icon mapping for metrics
const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
};

export default function DashboardPage() {
  const formatValue = (value: number, format: string) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value);
      case 'percentage':
        return `${value}%`;
      default:
        return new Intl.NumberFormat('en-US').format(value);
    }
  };

  return (
    <DashboardLayout 
      title="Overview" 
      subtitle="Welcome back! Here's what's happening with your campaigns."
    >
      <div className="space-y-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMetrics.map((metric) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            const isPositive = metric.changeType === 'increase';

            return (
              <Card 
                key={metric.id} 
                className="relative overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {metric.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${
                    metric.id === '1' ? 'bg-green-100 dark:bg-green-900/20' :
                    metric.id === '2' ? 'bg-blue-100 dark:bg-blue-900/20' :
                    metric.id === '3' ? 'bg-purple-100 dark:bg-purple-900/20' :
                    'bg-orange-100 dark:bg-orange-900/20'
                  }`}>
                    <Icon className={`h-4 w-4 ${
                      metric.id === '1' ? 'text-green-600 dark:text-green-400' :
                      metric.id === '2' ? 'text-blue-600 dark:text-blue-400' :
                      metric.id === '3' ? 'text-purple-600 dark:text-purple-400' :
                      'text-orange-600 dark:text-orange-400'
                    }`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold mb-2 ${
                    metric.id === '1' ? 'text-green-600 dark:text-green-400' :
                    metric.id === '2' ? 'text-blue-600 dark:text-blue-400' :
                    metric.id === '3' ? 'text-purple-600 dark:text-purple-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`}>
                    {formatValue(metric.value, metric.format)}
                  </div>
                  <div className="flex items-center text-sm">
                    {isPositive ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={isPositive ? 'text-green-600' : 'text-red-600'}>
                      {Math.abs(metric.change)}%
                    </span>
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart Placeholder */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-indigo-600" />
                Revenue Trends
              </CardTitle>
              <CardDescription>
                Monthly revenue performance over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Interactive chart coming in Phase 3
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources Placeholder */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-purple-600" />
                Traffic Sources
              </CardTitle>
              <CardDescription>
                Breakdown of traffic by source
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Interactive chart coming in Phase 3
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-600" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest updates and campaign changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  action: 'Campaign "Summer Sale" was activated',
                  time: '2 minutes ago',
                  type: 'success',
                },
                {
                  id: 2,
                  action: 'New user registration milestone reached',
                  time: '1 hour ago',
                  type: 'info',
                },
                {
                  id: 3,
                  action: 'Campaign "Black Friday" budget updated',
                  time: '3 hours ago',
                  type: 'warning',
                },
                {
                  id: 4,
                  action: 'Monthly report generated successfully',
                  time: '1 day ago',
                  type: 'success',
                },
              ].map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                  <Badge variant={
                    activity.type === 'success' ? 'default' :
                    activity.type === 'warning' ? 'secondary' :
                    'outline'
                  }>
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}