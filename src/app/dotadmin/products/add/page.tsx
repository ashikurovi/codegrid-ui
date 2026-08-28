"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { RichTextEditor } from "@/components/ui/rich-text-editor";

export default function AddProductPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/products" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Form Area */}
        <div className="flex-1 w-full border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <form className="flex flex-col gap-8">
            
            {/* General Information */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold border-b pb-2 dark:border-gray-800">General Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Product Name (Title)</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="e.g. Motorsport Racing T-Shirt: Porsche" 
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="variantLabel" className="text-sm font-medium">Variant Label (Badge)</label>
                  <input 
                    type="text" 
                    id="variantLabel" 
                    placeholder="e.g. Half/Drop Available" 
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Full Description</label>
                <RichTextEditor 
                  value=""
                  onChange={() => {}} 
                  placeholder="Write a detailed product description here..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="features" className="text-sm font-medium">Key Features (One per line)</label>
                <textarea 
                  id="features" 
                  rows={4}
                  placeholder="Premium and Exclusive design & print&#10;Limited edition&#10;Free Physical discount card" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none rounded-sm" 
                />
              </div>
            </div>

            {/* Pricing & Inventory */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold border-b pb-2 dark:border-gray-800">Pricing & Inventory</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="originalPrice" className="text-sm font-medium text-gray-500">Original Price (৳)</label>
                  <input 
                    type="number" 
                    id="originalPrice" 
                    placeholder="750" 
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="currentPrice" className="text-sm font-medium text-blue-600 dark:text-blue-400">Current Selling Price (৳)</label>
                  <input 
                    type="number" 
                    id="currentPrice" 
                    placeholder="690" 
                    className="w-full border border-blue-300 bg-blue-50 p-2 text-sm font-bold focus:outline-none focus:ring-1 focus:ring-blue-400 dark:bg-blue-900/20 dark:border-blue-800 rounded-sm" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="stock" className="text-sm font-medium">Stock Quantity</label>
                  <input 
                    type="number" 
                    id="stock" 
                    placeholder="100" 
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold border-b pb-2 dark:border-gray-800">Available Variants</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium">Available Sizes</label>
                  <div className="flex flex-wrap gap-4">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <label key={size} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded" />
                        <span className="text-sm">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium">Available Types</label>
                  <div className="flex flex-wrap gap-4">
                    {['DROP SHOULDER', 'HALF SLEEVE', 'FULL SLEEVE'].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <button 
                type="button"
                onClick={() => router.push("/dotadmin/products")}
                className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 rounded-sm"
              >
                Publish Product
              </button>
              <button 
                type="button"
                onClick={() => router.push("/dotadmin/products")}
                className="border border-gray-300 bg-white px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-colors dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Form Area (Images & Categories) */}
        <div className="w-full lg:w-[350px] flex flex-col gap-6">
          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 dark:border-gray-800">Organization</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-sm"
                >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <select 
                  id="category" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-sm"
                >
                  <option value="">Select a category</option>
                  <option value="Signature Series">Signature Series</option>
                  <option value="Solid Tees">Solid Tees</option>
                  <option value="Winter Collection">Winter Collection</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 dark:border-gray-800">Product Images</h3>
            <div className="flex flex-col gap-4">
              <div className="border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer rounded-sm text-center">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Upload Main Image</p>
                <p className="text-xs text-gray-500 mt-1">4:5 ratio recommended</p>
              </div>

              <div className="border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer rounded-sm text-center">
                <Upload className="w-5 h-5 text-gray-400 mb-2" />
                <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Add Gallery Images</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
