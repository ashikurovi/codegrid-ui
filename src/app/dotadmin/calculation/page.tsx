"use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, Percent, Plus, X, Trash2 } from "lucide-react";

export default function CalculationPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Premium Drop Shoulder Tee", quantity: 100, buyingPrice: 350, designCost: 150, additionalCost: 50, sellingPrice: 850 },
    { id: 2, name: "Winter Hoodie", quantity: 50, buyingPrice: 600, designCost: 100, additionalCost: 80, sellingPrice: 1500 },
    { id: 3, name: "Custom Corporate Mug", quantity: 500, buyingPrice: 120, designCost: 50, additionalCost: 30, sellingPrice: 350 },
    { id: 4, name: "Basic Polo Shirt", quantity: 200, buyingPrice: 280, designCost: 80, additionalCost: 40, sellingPrice: 600 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newItem, setNewItem] = useState({
    name: "", quantity: 1, buyingPrice: 0, designCost: 0, additionalCost: 0, sellingPrice: 0
  });

  const handleUpdate = (id: number, field: string, value: number) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: Number(value) } : p));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name) return;
    setProducts([...products, { ...newItem, id: Date.now() }]);
    setNewItem({ name: "", quantity: 1, buyingPrice: 0, designCost: 0, additionalCost: 0, sellingPrice: 0 });
    setIsModalOpen(false); // Close modal after adding
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Calculations
  const calcData = useMemo(() => {
    let totalExpectedProfit = 0;
    let totalCostValue = 0;
    let totalRevenueValue = 0;

    const rows = products.map(p => {
      const qty = p.quantity || 1;
      const unitCost = (p.buyingPrice || 0) + (p.designCost || 0) + (p.additionalCost || 0);
      const unitProfit = (p.sellingPrice || 0) - unitCost;
      
      const rowTotalCost = unitCost * qty;
      const rowTotalRevenue = (p.sellingPrice || 0) * qty;
      const rowTotalProfit = unitProfit * qty;
      const margin = p.sellingPrice > 0 ? ((unitProfit / p.sellingPrice) * 100).toFixed(2) : "0.00";
      
      totalExpectedProfit += rowTotalProfit;
      totalCostValue += rowTotalCost;
      totalRevenueValue += rowTotalRevenue;

      return { ...p, unitCost, rowTotalCost, rowTotalRevenue, rowTotalProfit, margin };
    });

    const avgMargin = totalRevenueValue > 0 ? ((totalExpectedProfit / totalRevenueValue) * 100).toFixed(2) : "0.00";

    return { rows, totalExpectedProfit, totalCostValue, totalRevenueValue, avgMargin };
  }, [products]);

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profit & Cost Calculator</h1>
          <p className="text-gray-500 mt-1">Calculate volume based costs, expenses, and expected total profits.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {/* Top Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Total Capital Required</h3>
            <DollarSign className="h-4 w-4" />
          </div>
          <div className="text-2xl font-bold">৳ {calcData.totalCostValue.toLocaleString()}</div>
        </div>
        
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Total Expected Revenue</h3>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-blue-600">৳ {calcData.totalRevenueValue.toLocaleString()}</div>
        </div>

        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Total Expected Profit</h3>
            <Calculator className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-green-600">৳ {calcData.totalExpectedProfit.toLocaleString()}</div>
        </div>

        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <h3 className="text-sm font-medium tracking-tight">Avg. Profit Margin</h3>
            <Percent className="h-4 w-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-purple-600">{calcData.avgMargin}%</div>
        </div>
      </div>

      {/* Main Calculator Table */}
      <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 overflow-x-auto w-full">
        <table className="w-full text-sm text-left">
          <thead className="bg-black text-white font-medium border-b border-gray-900 dark:border-gray-800 uppercase text-[10px] tracking-wider">
            <tr>
              <th className="px-4 py-4 min-w-[200px]">Product Name</th>
              <th className="px-3 py-3 w-[80px]">Qty</th>
              <th className="px-3 py-3 w-[100px]">Buy/Unit(৳)</th>
              <th className="px-3 py-3 w-[100px]">Design(৳)</th>
              <th className="px-3 py-3 w-[100px]">Extra(৳)</th>
              <th className="px-4 py-4 w-[110px]">Unit Cost(৳)</th>
              <th className="px-4 py-4 w-[120px] text-red-500">Total Capital(৳)</th>
              <th className="px-3 py-3 w-[110px]">Sell/Unit(৳)</th>
              <th className="px-4 py-4 w-[120px] text-blue-500">Total Sell(৳)</th>
              <th className="px-4 py-4 w-[120px]">Total Profit(৳)</th>
              <th className="px-4 py-4 w-[80px]">Margin</th>
              <th className="px-3 py-3 w-[50px]"></th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-800">
            {calcData.rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <td className="px-4 py-4 font-medium">{row.name}</td>
                <td className="px-3 py-2">
                  <input 
                    type="number" 
                    value={row.quantity || ""} 
                    onChange={(e) => handleUpdate(row.id, 'quantity', Number(e.target.value))}
                    className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none p-1.5 bg-blue-50 dark:bg-blue-900/20 dark:border-gray-700 font-bold text-blue-700 dark:text-blue-400 text-sm" 
                  />
                </td>
                <td className="px-3 py-2">
                  <input 
                    type="number" 
                    value={row.buyingPrice || ""} 
                    onChange={(e) => handleUpdate(row.id, 'buyingPrice', Number(e.target.value))}
                    className="w-full border-b border-gray-300 focus:border-gray-900 focus:outline-none p-1.5 bg-transparent dark:border-gray-700 dark:focus:border-gray-100 text-sm" 
                  />
                </td>
                <td className="px-3 py-2">
                  <input 
                    type="number" 
                    value={row.designCost || ""} 
                    onChange={(e) => handleUpdate(row.id, 'designCost', Number(e.target.value))}
                    className="w-full border-b border-gray-300 focus:border-gray-900 focus:outline-none p-1.5 bg-transparent dark:border-gray-700 dark:focus:border-gray-100 text-sm" 
                  />
                </td>
                <td className="px-3 py-2">
                  <input 
                    type="number" 
                    value={row.additionalCost || ""} 
                    onChange={(e) => handleUpdate(row.id, 'additionalCost', Number(e.target.value))}
                    className="w-full border-b border-gray-300 focus:border-gray-900 focus:outline-none p-1.5 bg-transparent dark:border-gray-700 dark:focus:border-gray-100 text-sm" 
                  />
                </td>
                <td className="px-4 py-4 font-bold bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">
                  {row.unitCost.toLocaleString()}
                </td>
                <td className="px-4 py-4 font-bold bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400">
                  {row.rowTotalCost.toLocaleString()}
                </td>
                <td className="px-3 py-2">
                  <input 
                    type="number" 
                    value={row.sellingPrice || ""} 
                    onChange={(e) => handleUpdate(row.id, 'sellingPrice', Number(e.target.value))}
                    className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none p-1.5 bg-transparent dark:border-gray-700 font-bold text-gray-900 dark:text-gray-100 text-sm" 
                  />
                </td>
                <td className="px-4 py-4 font-bold bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400">
                  {row.rowTotalRevenue.toLocaleString()}
                </td>
                <td className="px-4 py-4 font-bold bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400">
                  {row.rowTotalProfit.toLocaleString()}
                </td>
                <td className="px-4 py-4 font-bold bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400">
                  {row.margin}%
                </td>
                <td className="px-3 py-3 text-center">
                  <button onClick={() => removeProduct(row.id)} className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {calcData.rows.length === 0 && (
              <tr>
                <td colSpan={12} className="px-4 py-8 text-center text-gray-500">
                  No products added. Add a product to start calculating.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md dark:bg-gray-950 dark:border dark:border-gray-800">
            <div className="flex items-center justify-between border-b p-4 dark:border-gray-800">
              <h3 className="text-lg font-semibold">Add Product to Calculate</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleAdd} className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-500">Product Name</label>
                <input 
                  type="text" required
                  value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  placeholder="e.g. Summer T-Shirt"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-blue-600 dark:text-blue-400">Total Quantity</label>
                  <input 
                    type="number" required min={1}
                    value={newItem.quantity || ""} onChange={(e) => setNewItem({...newItem, quantity: Number(e.target.value)})}
                    className="w-full border border-blue-300 bg-blue-50 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 dark:bg-blue-900/20 dark:border-blue-700 rounded-sm font-bold text-blue-700 dark:text-blue-300" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">Buy / Production (৳)</label>
                  <input 
                    type="number" required min={0}
                    value={newItem.buyingPrice || ""} onChange={(e) => setNewItem({...newItem, buyingPrice: Number(e.target.value)})}
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">Design Cost (৳)</label>
                  <input 
                    type="number" required min={0}
                    value={newItem.designCost || ""} onChange={(e) => setNewItem({...newItem, designCost: Number(e.target.value)})}
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">Extra Costs (৳)</label>
                  <input 
                    type="number" required min={0}
                    value={newItem.additionalCost || ""} onChange={(e) => setNewItem({...newItem, additionalCost: Number(e.target.value)})}
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5 border-t pt-4 mt-2 dark:border-gray-800">
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300">Target Selling Price / Unit (৳)</label>
                <input 
                  type="number" required min={0}
                  value={newItem.sellingPrice || ""} onChange={(e) => setNewItem({...newItem, sellingPrice: Number(e.target.value)})}
                  className="w-full border border-gray-400 p-2.5 text-sm font-bold focus:outline-none focus:ring-1 focus:ring-gray-600 dark:bg-gray-900 dark:border-gray-600 rounded-sm" 
                />
              </div>
              
              <div className="flex justify-end gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-sm hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 rounded-sm transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
