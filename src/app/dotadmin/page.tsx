"use client";

import { useEffect, useState } from "react";
import { getDashboardData } from "@/api/dashboardApi";

type DashboardData = {
  totalRevenue: { value: string; percentageChange: string };
  subscriptions: { value: string; percentageChange: string };
  sales: { value: string; percentageChange: string };
  activeNow: { value: string; percentageChange: string };
  chartData: { name: string; total: number }[];
  recentSales: { id: number; name: string; email: string; amount: string }[];
};

const emptyDashboard: DashboardData = {
  totalRevenue: { value: "-", percentageChange: "" },
  subscriptions: { value: "-", percentageChange: "" },
  sales: { value: "-", percentageChange: "" },
  activeNow: { value: "-", percentageChange: "" },
  chartData: [],
  recentSales: [],
};

export default function AdminPage() {
  const [dashboard, setDashboard] = useState<DashboardData>(emptyDashboard);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getDashboardData()
      .then(setDashboard)
      .catch(() => setError("Unable to load dashboard data."))
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { label: "Total Revenue", data: dashboard.totalRevenue, icon: "$" },
    { label: "Subscriptions", data: dashboard.subscriptions, icon: "U" },
    { label: "Sales", data: dashboard.sales, icon: "C" },
    { label: "Active Now", data: dashboard.activeNow, icon: "~" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-black">Dashboard</h1>
      </div>

      {error && <div className="border-[3px] border-red-600 bg-red-50 p-4 font-bold text-red-700">{error}</div>}
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => <div key={card.label} className="border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-black uppercase tracking-tight text-black">{card.label}</h3>
            <span className="text-lg font-black text-black">{card.icon}</span>
          </div>
          <div className="text-3xl font-black text-[#3b82f6] mt-2">{loading ? "..." : card.data.value}</div>
          <p className="text-xs font-bold text-gray-600 uppercase mt-1">{card.data.percentageChange || "No change data"}</p>
        </div>)}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] col-span-4 rounded-none">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-black border-b-4 border-black w-max pb-2">Overview</h3>
          <div className="h-[300px] flex items-end gap-2 border-b-4 border-l-4 border-black px-2 pb-0 pt-8">
            {dashboard.chartData.map((point) => {
              const maxTotal = Math.max(...dashboard.chartData.map((item) => item.total), 1);
              return <div key={point.name} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="w-full bg-[#3b82f6]" style={{ height: `${Math.max((point.total / maxTotal) * 100, 4)}%` }} title={`${point.name}: ${point.total}`} />
                <span className="text-[10px] font-bold text-gray-600">{point.name}</span>
              </div>;
            })}
            {!loading && dashboard.chartData.length === 0 && <span className="m-auto text-sm font-bold text-gray-500">No chart data available</span>}
          </div>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] col-span-3 rounded-none">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-black">Recent Sales</h3>
          <p className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest border-b-4 border-black pb-4">Latest dashboard activity</p>
          
          <div className="space-y-6">
            {dashboard.recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center">
                <div className="w-10 h-10 border-[3px] border-black bg-[#3b82f6] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white">
                  <span className="text-sm font-black">{sale.name.slice(0, 2).toUpperCase()}</span>
                </div>
                <div className="ml-4 space-y-0.5">
                  <p className="text-sm font-black uppercase text-black leading-none">{sale.name}</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{sale.email}</p>
                </div>
                <div className="ml-auto font-black text-[#3b82f6]">{sale.amount}</div>
              </div>
            ))}
            {!loading && dashboard.recentSales.length === 0 && <p className="text-sm font-bold text-gray-500">No recent sales available.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
