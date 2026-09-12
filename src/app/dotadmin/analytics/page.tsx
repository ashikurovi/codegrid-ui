"use client";

import { BarChart3, TrendingUp, Users, ShoppingBag, ArrowUpRight, ArrowDownRight, PackageOpen, Shirt, Coffee, Briefcase } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-black">Analytics Overview</h1>
          <p className="text-black font-bold uppercase mt-1">Detailed breakdown of your store's performance.</p>
        </div>
        <div className="flex items-center gap-4">
          <select className="border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
          <button className="bg-[#3b82f6] text-white px-6 py-2 text-sm font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none">
            Export Report
          </button>
        </div>
      </div>
      
      {/* Top Stats Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
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
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
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
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
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
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
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
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none col-span-4 flex flex-col">
          <h3 className="text-lg font-black uppercase tracking-tight mb-6">Revenue Over Time</h3>
          
          <div className="h-[300px] flex items-end gap-2 px-2 mt-4">
            {/* CSS-based mock Bar Chart */}
            {[45, 60, 30, 80, 55, 90, 70, 100, 65, 85, 40, 75].map((val, idx) => (
              <div key={idx} className="relative flex-1 group h-full flex items-end justify-center">
                <div 
                  className="w-full bg-[#3b82f6] border-[2px] border-black hover:bg-blue-600 transition-colors rounded-none"
                  style={{ height: `${val}%` }}
                ></div>
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-black text-white text-xs font-bold py-1 px-2 border-2 border-black rounded-none whitespace-nowrap transition-opacity">
                  ৳ {(val * 1234).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-black font-bold px-2 uppercase">
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
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none col-span-3 flex flex-col">
          <h3 className="text-lg font-black uppercase tracking-tight mb-2">Sales by Category</h3>
          <p className="text-sm font-bold text-black uppercase mb-8">Custom orders are driving 45% of total revenue this month.</p>
          
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
