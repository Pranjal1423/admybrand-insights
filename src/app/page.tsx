import Link from 'next/link';
import { BarChart3, Users, DollarSign, TrendingUp, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            ADmyBRAND Insights
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-Powered Analytics Dashboard for Digital Marketing Agencies
          </p>
          
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105">
              View Dashboard →
            </button>
          </Link>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Revenue Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
              <div className="p-2 rounded-lg bg-green-100">
                <DollarSign className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">$45,231.89</div>
            <p className="text-xs text-gray-500 flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +20.1% from last month
            </p>
          </div>

          {/* Users Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
              <div className="p-2 rounded-lg bg-blue-100">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600">12,543</div>
            <p className="text-xs text-gray-500 flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-blue-500" />
              +15.3% from last month
            </p>
          </div>

          {/* Conversions Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Conversions</h3>
              <div className="p-2 rounded-lg bg-purple-100">
                <Target className="h-4 w-4 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-purple-600">1,847</div>
            <p className="text-xs text-gray-500 flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-purple-500" />
              +8.7% from last month
            </p>
          </div>

          {/* Conversion Rate Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Conversion Rate</h3>
              <div className="p-2 rounded-lg bg-orange-100">
                <BarChart3 className="h-4 w-4 text-orange-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-orange-600">14.7%</div>
            <p className="text-xs text-gray-500 flex items-center mt-2">
              <TrendingUp className="h-3 w-3 mr-1 text-orange-500" />
              +3.2% from last month
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Powerful Analytics Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Interactive Charts</h3>
              <p className="text-gray-600">
                Beautiful, responsive charts with real-time updates and smooth animations
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-time Insights</h3>
              <p className="text-gray-600">
                Live data monitoring with instant updates and intelligent alerts
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI-Powered</h3>
              <p className="text-gray-600">
                Smart recommendations and predictive analytics powered by AI
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Built with Modern Technology</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border">Next.js 14</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border">TypeScript</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border">shadcn/ui</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Phase 1 Complete - Dashboard Coming Soon!
          </div>
        </div>
      </div>
    </div>
  )
}