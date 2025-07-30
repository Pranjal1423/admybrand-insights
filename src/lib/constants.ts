import { NavItem } from '@/types';

// App Configuration
export const APP_CONFIG = {
  name: 'ADmyBRAND Insights',
  description: 'Advanced Analytics Dashboard for Digital Marketing Agencies',
  version: '1.0.0',
  author: 'Your Name',
};

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: 'BarChart3',
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: 'TrendingUp',
  },
  {
    title: 'Campaigns',
    href: '/campaigns',
    icon: 'Target',
  },
  {
    title: 'Reports',
    href: '/reports',
    icon: 'FileText',
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: 'Settings',
  },
];

// Color Palette
export const COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#06b6d4',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  chart: [
    '#6366f1',
    '#8b5cf6',
    '#06b6d4',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#ec4899',
    '#14b8a6',
  ],
};

// Chart Configuration
export const CHART_CONFIG = {
  height: 300,
  margin: { top: 5, right: 30, left: 20, bottom: 5 },
  animationDuration: 300,
};

// Table Configuration
export const TABLE_CONFIG = {
  defaultPageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
};

// Date Formats
export const DATE_FORMATS = {
  display: 'MMM dd, yyyy',
  api: 'yyyy-MM-dd',
  full: 'EEEE, MMMM do, yyyy',
};