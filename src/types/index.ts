// Core Analytics Types
export interface MetricCard {
  id: string;
  title: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
  format: 'currency' | 'number' | 'percentage';
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
  category?: string;
}

export interface TimeSeriesData {
  date: string;
  revenue: number;
  users: number;
  conversions: number;
  clicks: number;
}

export interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
  color: string;
}

export interface TableData {
  id: string;
  campaign: string;
  clicks: number;
  impressions: number;
  ctr: number;
  cost: number;
  conversions: number;
  revenue: number;
  status: 'active' | 'paused' | 'completed';
}

export interface DateRange {
  from: Date;
  to: Date;
}

export interface FilterOptions {
  dateRange: DateRange;
  source?: string;
  status?: 'active' | 'paused' | 'completed' | 'all';
  campaign?: string;
}

// Theme Types
export type Theme = 'light' | 'dark';

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  icon: string;
  children?: NavItem[];
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}