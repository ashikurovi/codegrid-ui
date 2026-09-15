"use client";

import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, Users, ShoppingBag, ArrowUpRight, ArrowDownRight, PackageOpen, Shirt, Coffee, Briefcase } from "lucide-react";
import { getAnalyticsData } from "@/api/analyticsApi";

type AnalyticsData = {
  topStats: Record<string, { value: string; trend: string; isPositive: boolean }>;
  revenueOverTime: number[];
  salesByCategory: { subtitle: string; categories: { name: string; percentage: number }[] };
};

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getAnalyticsData()
      .then(setAnalytics)
      .catch(() => setError("Unable to load analytics data."));
  }, []);

  const topStats = analytics?.topStats;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-black">Analytics Overview</h1>
          <p className="text-black font-bold uppercase mt-1">Detailed breakdown of your store&apos;s performance.</p>
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
      {error && <div className="border-[3px] border-red-600 bg-red-50 p-4 font-bold text-red-700">{error}</div>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Gross Revenue</h3>
            <BarChart3 className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">{topStats?.grossRevenue.value ?? "..."}</div>
          <p className={`text-xs flex items-center font-medium ${topStats?.grossRevenue.isPositive === false ? "text-red-500" : "text-green-600"}`}>
            {topStats?.grossRevenue.isPositive === false ? <ArrowDownRight className="w-3 h-3 mr-1" /> : <ArrowUpRight className="w-3 h-3 mr-1" />}
            {topStats?.grossRevenue.trend ?? "Loading..."}
          </p>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Total Orders</h3>
            <ShoppingBag className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">{topStats?.totalOrders.value ?? "..."}</div>
          <p className={`text-xs flex items-center font-medium ${topStats?.totalOrders.isPositive === false ? "text-red-500" : "text-green-600"}`}>
            {topStats?.totalOrders.isPositive === false ? <ArrowDownRight className="w-3 h-3 mr-1" /> : <ArrowUpRight className="w-3 h-3 mr-1" />}
            {topStats?.totalOrders.trend ?? "Loading..."}
          </p>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Conversion Rate</h3>
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">{topStats?.conversionRate.value ?? "..."}</div>
          <p className={`text-xs flex items-center font-medium ${topStats?.conversionRate.isPositive === false ? "text-red-500" : "text-green-600"}`}>
            {topStats?.conversionRate.isPositive === false ? <ArrowDownRight className="w-3 h-3 mr-1" /> : <ArrowUpRight className="w-3 h-3 mr-1" />}
            {topStats?.conversionRate.trend ?? "Loading..."}
          </p>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">New Customers</h3>
            <Users className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">{topStats?.newCustomers.value ?? "..."}</div>
          <p className={`text-xs flex items-center font-medium ${topStats?.newCustomers.isPositive === false ? "text-red-500" : "text-green-600"}`}>
            {topStats?.newCustomers.isPositive === false ? <ArrowDownRight className="w-3 h-3 mr-1" /> : <ArrowUpRight className="w-3 h-3 mr-1" />}
            {topStats?.newCustomers.trend ?? "Loading..."}
          </p>
        </div>
      </div>
      
      {/* Charts & Breakdown Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Main Chart */}
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none col-span-4 flex flex-col">
          <h3 className="text-lg font-black uppercase tracking-tight mb-6">Revenue Over Time</h3>
          
          <div className="h-[300px] flex items-end gap-2 px-2 mt-4">
            {(analytics?.revenueOverTime ?? []).map((val, idx) => (
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
            {!analytics && <div className="m-auto text-sm font-bold text-gray-500">Loading analytics...</div>}
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
          <p className="text-sm font-bold text-black uppercase mb-8">{analytics?.salesByCategory.subtitle ?? "Loading category data..."}</p>
          
          <div className="space-y-6 flex-1 justify-center flex flex-col">
            {(analytics?.salesByCategory.categories ?? []).map((category, index) => {
              const icons = [Shirt, Briefcase, Coffee, PackageOpen];
              const colors = ["text-blue-500", "text-indigo-500", "text-emerald-500", "text-gray-500"];
              const Icon = icons[index % icons.length];
              return <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 font-medium">
                    <Icon className={`w-4 h-4 ${colors[index % colors.length]}`} /> {category.name}
                  </div>
                  <span className="font-bold">{category.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${category.percentage}%` }}></div>
                </div>
              </div>;
            })}
            {!analytics && <p className="text-sm font-bold text-gray-500">Loading category data...</p>}
          </div>
        </div>
      </div>

    </div>
  );
}
