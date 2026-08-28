"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddEditTypePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/types" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add / Edit Type</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Form Area */}
        <div className="flex-1 w-full border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <form className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold border-b pb-2 dark:border-gray-800">Type Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Type Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="e.g. Drop Shoulder" 
                    className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 rounded-sm" 
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <button 
                type="button"
                onClick={() => router.push("/dotadmin/types")}
                className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 rounded-sm"
              >
                Save Type
              </button>
              <button 
                type="button"
                onClick={() => router.push("/dotadmin/types")}
                className="border border-gray-300 bg-white px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-colors dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Form Area */}
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
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
