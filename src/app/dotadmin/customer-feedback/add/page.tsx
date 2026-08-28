"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

export default function AddCustomerFeedbackPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/customer-feedback" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add Customer to Showcase</h1>
      </div>

      <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 max-w-2xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-4 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Customer Details</h3>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name and Title</label>
              <input 
                type="text" 
                id="name" 
                placeholder="e.g. Tanmoy Cartoons, Artist" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
              <p className="text-xs text-gray-500">This will appear directly below their photo.</p>
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

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Portrait Image</h3>
            <p className="text-sm text-gray-500 mb-2">Recommended resolution: 600x750 (4:5 aspect ratio).</p>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-10 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Click to upload photo</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, WebP up to 3MB</p>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/customer-feedback")}
              className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Save Customer
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/customer-feedback")}
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
