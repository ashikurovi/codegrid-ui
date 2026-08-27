"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function SubCategoryDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const subCategoryId = params.id;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/subcategory" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Sub-Category Details: SUBCAT-{subCategoryId}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6">Edit Sub-Category Information</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Sub-Category Name</label>
              <input 
                type="text" 
                id="name" 
                defaultValue="Smartphones" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="parent" className="text-sm font-medium">Parent Category</label>
              <select 
                id="parent" 
                defaultValue="Electronics"
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
              >
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home & Garden">Home & Garden</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <textarea 
                id="description" 
                rows={3}
                defaultValue="Mobile phones" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-medium">Status</label>
              <select 
                id="status" 
                defaultValue="Active"
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                type="button"
                onClick={() => router.push("/dotadmin/subcategory")}
                className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Related Products</h2>
          <div className="flex flex-col gap-4">
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">iPhone 14 Pro</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Stock: 45 | Price: $999</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Samsung Galaxy S23</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Stock: 28 | Price: $899</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Google Pixel 7</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Stock: 15 | Price: $599</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
