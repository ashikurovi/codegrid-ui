"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function InventoryDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const inventoryId = params.id;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/inventory" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Inventory Details: INV-{inventoryId}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6">Edit Inventory Record</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="text-sm font-medium">Product Name</label>
              <input 
                type="text" 
                id="product" 
                defaultValue="iPhone 14 Pro" 
                disabled
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="sku" className="text-sm font-medium">SKU</label>
              <input 
                type="text" 
                id="sku" 
                defaultValue="SKU-IP14P" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="stock" className="text-sm font-medium">Current Stock</label>
              <input 
                type="number" 
                id="stock" 
                defaultValue="45" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-medium">Status</label>
              <select 
                id="status" 
                defaultValue="In Stock"
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
              >
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                type="button"
                onClick={() => router.push("/dotadmin/inventory")}
                className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Stock History</h2>
          <div className="flex flex-col gap-4">
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium text-green-600 dark:text-green-400">+50 Units Restocked</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">October 12, 2023 by Admin</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">-5 Units Sold</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">October 10, 2023 via Website</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium text-green-600 dark:text-green-400">+100 Units Restocked</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">September 01, 2023 by Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
