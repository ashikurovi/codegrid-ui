"use client";

import { BarChart3, TrendingUp, Users, ShoppingBag, ArrowUpRight, ArrowDownRight, PackageOpen, Shirt, Coffee, Briefcase } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
          <p className="text-gray-500 mt-1">Detailed breakdown of your store's performance.</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
          <button className="bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
            Export Report
          </button>
        </div>
      </div>
      
      {/* Top Stats Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Gross Revenue</h3>
            <BarChart3 className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">৳ 1,245,231</div>
          <p className="text-xs text-green-600 flex items-center font-medium">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            +15.3% from last period
          </p>
        </div>
        
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Total Orders</h3>
            <ShoppingBag className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">3,450</div>
          <p className="text-xs text-green-600 flex items-center font-medium">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            +8.2% from last period
          </p>
        </div>
        
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Conversion Rate</h3>
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">3.24%</div>
          <p className="text-xs text-red-500 flex items-center font-medium">
            <ArrowDownRight className="w-3 h-3 mr-1" />
            -0.4% from last period
          </p>
        </div>
        
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">New Customers</h3>
            <Users className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">892</div>
          <p className="text-xs text-green-600 flex items-center font-medium">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            +12.5% from last period
          </p>
        </div>
      </div>
      
      {/* Charts & Breakdown Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Main Chart */}
        <div className="border bg-white p-6 shadow-sm col-span-4 dark:bg-gray-950 dark:border-gray-800">
          <h3 className="text-lg font-bold tracking-tight mb-6">Revenue Over Time</h3>
          
          <div className="h-[300px] flex items-end gap-2 px-2 mt-4">
            {/* CSS-based mock Bar Chart */}
            {[45, 60, 30, 80, 55, 90, 70, 100, 65, 85, 40, 75].map((val, idx) => (
              <div key={idx} className="relative flex-1 group h-full flex items-end justify-center">
                <div 
                  className="w-full bg-blue-100 hover:bg-blue-600 dark:bg-blue-900/40 dark:hover:bg-blue-600 transition-colors rounded-t-sm"
                  style={{ height: `${val}%` }}
                ></div>
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">
                  ৳ {(val * 1234).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500 font-medium px-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
        
        {/* Category Breakdown */}
        <div className="border bg-white p-6 shadow-sm col-span-3 dark:bg-gray-950 dark:border-gray-800 flex flex-col">
          <h3 className="text-lg font-bold tracking-tight mb-2">Sales by Category</h3>
          <p className="text-sm text-gray-500 mb-8 dark:text-gray-400">Custom orders are driving 45% of total revenue this month.</p>
          
          <div className="space-y-6 flex-1 justify-center flex flex-col">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <Shirt className="w-4 h-4 text-blue-500" /> Custom Apparel
                </div>
                <span className="font-bold">45%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                <div className="h-full bg-blue-500 w-[45%] rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <Briefcase className="w-4 h-4 text-indigo-500" /> Corporate Packages
                </div>
                <span className="font-bold">30%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                <div className="h-full bg-indigo-500 w-[30%] rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <Coffee className="w-4 h-4 text-emerald-500" /> Mugs & Bottles
                </div>
                <span className="font-bold">15%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                <div className="h-full bg-emerald-500 w-[15%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <PackageOpen className="w-4 h-4 text-gray-500" /> Standard Retail
                </div>
                <span className="font-bold">10%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                <div className="h-full bg-gray-400 w-[10%] rounded-full"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}
