import { MetricCard, TimeSeriesData, TrafficSource, TableData } from '@/types';
import { subDays, format } from 'date-fns';

// Generate Mock Metrics
export const mockMetrics: MetricCard[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: 45231.89,
    change: 12.5,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'text-green-600',
    format: 'currency',
  },
  {
    id: '2',
    title: 'Active Users',
    value: 12543,
    change: -2.3,
    changeType: 'decrease',
    icon: 'Users',
    color: 'text-blue-600',
    format: 'number',
  },
  {
    id: '3',
    title: 'Conversions',
    value: 1847,
    change: 8.7,
    changeType: 'increase',
    icon: 'Target',
    color: 'text-purple-600',
    format: 'number',
  },
  {
    id: '4',
    title: 'Conversion Rate',
    value: 14.7,
    change: 3.2,
    changeType: 'increase',
    icon: 'TrendingUp',
    color: 'text-orange-600',
    format: 'percentage',
  },
];

// Generate Time Series Data
export const generateTimeSeriesData = (days: number = 30): TimeSeriesData[] => {
  return Array.from({ length: days }, (_, i) => {
    const date = subDays(new Date(), days - i - 1);
    return {
      date: format(date, 'yyyy-MM-dd'),
      revenue: Math.floor(Math.random() * 5000) + 1000,
      users: Math.floor(Math.random() * 1000) + 200,
      conversions: Math.floor(Math.random() * 100) + 20,
      clicks: Math.floor(Math.random() * 2000) + 500,
    };
  });
};

// Traffic Sources Data
export const trafficSources: TrafficSource[] = [
  {
    source: 'Organic Search',
    visitors: 45231,
    percentage: 42.5,
    color: '#6366f1',
  },
  {
    source: 'Paid Search',
    visitors: 28459,
    percentage: 26.8,
    color: '#8b5cf6',
  },
  {
    source: 'Social Media',
    visitors: 18745,
    percentage: 17.6,
    color: '#06b6d4',
  },
  {
    source: 'Direct',
    visitors: 9834,
    percentage: 9.2,
    color: '#10b981',
  },
  {
    source: 'Email',
    visitors: 4127,
    percentage: 3.9,
    color: '#f59e0b',
  },
];

// Generate Campaign Table Data
export const generateTableData = (count: number = 50): TableData[] => {
  const campaigns = [
    'Summer Sale 2024',
    'Black Friday Deals',
    'New Product Launch',
    'Brand Awareness',
    'Retargeting Campaign',
    'Holiday Special',
    'Spring Collection',
    'Mobile App Install',
    'Lead Generation',
    'Customer Acquisition',
  ];

  const statuses: Array<'active' | 'paused' | 'completed'> = ['active', 'paused', 'completed'];

  return Array.from({ length: count }, (_, i) => {
    const clicks = Math.floor(Math.random() * 10000) + 100;
    const impressions = clicks * (Math.floor(Math.random() * 10) + 2);
    const conversions = Math.floor(clicks * (Math.random() * 0.1));
    const cost = Math.floor(Math.random() * 5000) + 100;

    return {
      id: `campaign-${i + 1}`,
      campaign: campaigns[Math.floor(Math.random() * campaigns.length)],
      clicks,
      impressions,
      ctr: Number(((clicks / impressions) * 100).toFixed(2)),
      cost,
      conversions,
      revenue: conversions * (Math.floor(Math.random() * 50) + 20),
      status: statuses[Math.floor(Math.random() * statuses.length)],
    };
  });
};

// Export default data
export const mockTimeSeriesData = generateTimeSeriesData(30);
export const mockTableData = generateTableData(50);