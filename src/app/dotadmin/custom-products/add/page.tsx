"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function AddCustomProductPage() {
  const router = useRouter();
  const [category, setCategory] = useState("Apparel");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/custom-products" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add Custom Product</h1>
      </div>

      <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 max-w-4xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Basic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="productName" className="text-sm font-medium">Product Name</label>
                <input 
                  type="text" 
                  id="productName" 
                  placeholder="e.g. Classic T-Shirt" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <select 
                  id="category" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Apparel">Apparel</option>
                  <option value="Bottles">Bottles</option>
                  <option value="Corporate">Corporate Packages</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="text-sm font-medium">Base Price & Unit</label>
                <input 
                  type="text" 
                  id="price" 
                  placeholder="e.g. ৳ 350 / pc" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <textarea 
                id="description" 
                rows={3}
                placeholder="Product description or package details..." 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Product Image</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-10 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Click to upload image</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, WebP up to 2MB</p>
            </div>
          </div>

          {category === "Corporate" && (
            <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-2">Package Items</h3>
              <p className="text-sm text-gray-500 mb-2">List the items included in this corporate package.</p>
              
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input type="text" placeholder="Item Name (e.g. Premium Polo)" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                  <input type="text" placeholder="Image URL (optional)" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Item Name (e.g. Metal Water Bottle)" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                  <input type="text" placeholder="Image URL (optional)" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                </div>
                <button type="button" className="text-sm font-medium text-blue-600 self-start mt-2 hover:underline">
                  + Add another item
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/custom-products")}
              className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Save Product
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/custom-products")}
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
