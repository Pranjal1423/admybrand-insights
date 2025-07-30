'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Plus, Play, Pause, BarChart3 } from 'lucide-react';

export default function CampaignsPage() {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      status: 'active',
      budget: 5000,
      spent: 3420,
      impressions: 125000,
      clicks: 3400,
      conversions: 142,
    },
    {
      id: 2,
      name: 'Black Friday Deals',
      status: 'paused',
      budget: 8000,
      spent: 1200,
      impressions: 45000,
      clicks: 890,
      conversions: 23,
    },
    {
      id: 3,
      name: 'Brand Awareness Q1',
      status: 'active',
      budget: 3000,
      spent: 2850,
      impressions: 89000,
      clicks: 2100,
      conversions: 89,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <DashboardLayout 
      title="Campaigns" 
      subtitle="Manage and monitor your marketing campaigns."
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Active Campaigns
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {campaigns.filter(c => c.status === 'active').length} active campaigns
            </p>
          </div>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{campaign.name}</CardTitle>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </div>
                <CardDescription>
                  Campaign performance and metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Budget Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Budget Used</span>
                      <span className="font-medium">
                        ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {campaign.impressions.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Impressions</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">
                        {campaign.clicks.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Clicks</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {campaign.conversions}
                      </div>
                      <div className="text-xs text-gray-500">Conversions</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                        {((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%
                      </div>
                      <div className="text-xs text-gray-500">CTR</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      {campaign.status === 'active' ? (
                        <>
                          <Pause className="h-3 w-3 mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 mr-1" />
                          Resume
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campaign Performance Summary */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-indigo-600" />
              Campaign Performance Summary
            </CardTitle>
            <CardDescription>
              Overview of all campaign metrics and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg">
              <div className="text-center">
                <Target className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  Detailed campaign analytics coming in Phase 3
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}