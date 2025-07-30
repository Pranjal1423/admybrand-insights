'use client';

import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, Activity } from 'lucide-react';

interface PerformanceData {
  name: string;
  value: number;
  color: string;
  target: number;
}

interface PerformanceChartProps {
  className?: string;
}

export function PerformanceChart({ className }: PerformanceChartProps) {
  const [data, setData] = useState<PerformanceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Generate performance data
    const performanceData: PerformanceData[] = [
      {
        name: 'Click Rate',
        value: 3.2,
        color: '#6366f1',
        target: 3.5,
      },
      {
        name: 'Conversion',
        value: 2.8,
        color: '#8b5cf6',
        target: 3.0,
      },
      {
        name: 'Engagement',
        value: 4.1,
        color: '#06b6d4',
        target: 4.0,
      },
      {
        name: 'Retention',
        value: 1.9,
        color: '#10b981',
        target: 2.5,
      },
      {
        name: 'Satisfaction',
        value: 4.5,
        color: '#f59e0b',
        target: 4.2,
      },
    ];

    setTimeout(() => {
      setData(performanceData);
      setIsLoading(false);
    }, 800);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(prevData =>
        prevData.map(item => ({
          ...item,
          value: Math.max(0, item.value + (Math.random() - 0.5) * 0.5),
        }))
      );
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Current: {data.value.toFixed(1)}%
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Target: {data.target.toFixed(1)}%
          </p>
          <div className={`text-xs mt-1 ${
            data.value >= data.target ? 'text-green-600' : 'text-red-600'
          }`}>
            {data.value >= data.target ? '✓ Target Met' : '⚠ Below Target'}
          </div>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <Card className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
            Performance Metrics
          </CardTitle>
          <CardDescription>Loading chart data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={className}
    >
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-green-600" />
                Performance Metrics
              </CardTitle>
              <CardDescription>
                Key performance indicators vs targets
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  className="text-xs text-gray-500"
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  className="text-xs text-gray-500"
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="value"
                  radius={[4, 4, 0, 0]}
                  onMouseEnter={(_, index) => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{
                        filter: hoveredIndex === index ? 'brightness(1.1)' : 'none',
                        transform: hoveredIndex === index ? 'scaleY(1.05)' : 'scaleY(1)',
                        transformOrigin: 'bottom',
                        transition: 'all 0.2s ease-in-out',
                      }}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Summary */}
          <div className="mt-4 grid grid-cols-5 gap-2">
            {data.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-1"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-xs font-medium text-gray-900 dark:text-white">
                  {item.value.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}