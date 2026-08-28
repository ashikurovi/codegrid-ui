"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddCustomOrderPage() {
  const router = useRouter();
  const [category, setCategory] = useState("Apparel");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/customorders" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add Custom Order</h1>
      </div>

      <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 max-w-3xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="customerName" className="text-sm font-medium">Name / Company Name</label>
                <input 
                  type="text" 
                  id="customerName" 
                  placeholder="e.g. John Doe / Tech Innovators" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="customerPhone" className="text-sm font-medium">Phone Number</label>
                <input 
                  type="text" 
                  id="customerPhone" 
                  placeholder="+880 1..." 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="customerEmail" className="text-sm font-medium">Email Address (Optional)</label>
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
            <h3 className="text-lg font-semibold mb-2">Request Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <select 
                  id="category" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Apparel">T-Shirts & Apparel</option>
                  <option value="Bottles">Mugs & Bottles</option>
                  <option value="Corporate">Corporate Packages</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="item" className="text-sm font-medium">Specific Item / Package</label>
                <select 
                  id="item" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  {category === "Apparel" && (
                    <>
                      <option value="Classic T-Shirt">Classic T-Shirt</option>
                      <option value="Premium Polo">Premium Polo</option>
                      <option value="Winter Hoodie">Winter Hoodie</option>
                    </>
                  )}
                  {category === "Bottles" && (
                    <>
                      <option value="Ceramic Mug">Ceramic Mug</option>
                      <option value="Steel Water Bottle">Steel Water Bottle</option>
                      <option value="Insulated Flask">Insulated Flask</option>
                    </>
                  )}
                  {category === "Corporate" && (
                    <>
                      <option value="Basic Kit">Basic Kit</option>
                      <option value="Premium Kit">Premium Kit</option>
                      <option value="Executive Kit">Executive Kit</option>
                    </>
                  )}
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="quantity" className="text-sm font-medium">Quantity</label>
                <input 
                  type="number" 
                  id="quantity" 
                  defaultValue={10}
                  min={1}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="details" className="text-sm font-medium">Additional Details & Instructions</label>
              <textarea 
                id="details" 
                rows={4}
                placeholder="Details about colors, sizes, logo placement..." 
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
                <option value="New Request">New Request</option>
                <option value="Quoted">Quoted</option>
                <option value="In Production">In Production</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-medium">Quoted Total Price (৳)</label>
              <input 
                type="number" 
                id="price" 
                placeholder="Optional" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/customorders")}
              className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Save Custom Order
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/customorders")}
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
