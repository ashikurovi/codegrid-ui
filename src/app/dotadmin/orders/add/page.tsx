"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddOrderPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/orders" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Create New Order</h1>
      </div>

      <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 max-w-3xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="customerName" className="text-sm font-medium">Customer Name</label>
                <input 
                  type="text" 
                  id="customerName" 
                  placeholder="e.g. John Doe" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="customerEmail" className="text-sm font-medium">Customer Email</label>
                <input 
                  type="email" 
                  id="customerEmail" 
                  placeholder="john@example.com" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Order Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="product" className="text-sm font-medium">Product</label>
                <select 
                  id="product" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="">Select a product...</option>
                  <option value="iphone14">iPhone 14 Pro - $999.00</option>
                  <option value="macbook">MacBook Pro 16" - $2499.00</option>
                  <option value="airpods">AirPods Pro - $249.00</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quantity" className="text-sm font-medium">Quantity</label>
                <input 
                  type="number" 
                  id="quantity" 
                  defaultValue={1}
                  min={1}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
            </div>
            <button type="button" className="text-sm font-medium text-blue-600 self-start mt-2 hover:underline">
              + Add another product
            </button>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium">Shipping Address</label>
              <textarea 
                id="address" 
                rows={3}
                placeholder="Full address..." 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-medium">Order Status</label>
              <select 
                id="status" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="total" className="text-sm font-medium">Total Amount ($)</label>
              <input 
                type="number" 
                id="total" 
                placeholder="0.00" 
                readOnly
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none bg-gray-50 text-gray-500 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/orders")}
              className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Create Order
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/orders")}
              className="border border-gray-300 bg-white px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-colors dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
