'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import {
  BarChart3,
  TrendingUp,
  Target,
  FileText,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Icon mapping
const iconMap = {
  BarChart3,
  TrendingUp,
  Target,
  FileText,
  Settings,
};

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleMobile}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 z-40 h-full bg-white/80 backdrop-blur-lg border-r border-gray-200/50 transition-all duration-300 ease-in-out',
          'dark:bg-gray-900/80 dark:border-gray-800/50',
          {
            'w-64': !isCollapsed,
            'w-16': isCollapsed,
            'translate-x-0': isMobileOpen,
            '-translate-x-full md:translate-x-0': !isMobileOpen,
          },
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className={cn('flex items-center space-x-3', { 'justify-center': isCollapsed })}>
            <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  ADmyBRAND
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Insights</p>
              </div>
            )}
          </div>

          {/* Collapse Button - Desktop Only */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCollapsed}
            className="hidden md:flex h-8 w-8"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  'hover:bg-gray-100 dark:hover:bg-gray-800',
                  {
                    'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700':
                      isActive,
                    'text-gray-700 dark:text-gray-300': !isActive,
                    'justify-center': isCollapsed,
                  }
                )}
              >
                <Icon className={cn('h-5 w-5 flex-shrink-0')} />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200/50 dark:border-gray-800/50">
          <div
            className={cn(
              'flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50',
              { 'justify-center': isCollapsed }
            )}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-sm font-medium">
              U
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  User Name
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  user@company.com
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}