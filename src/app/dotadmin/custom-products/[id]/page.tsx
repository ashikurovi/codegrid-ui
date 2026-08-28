"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Upload } from "lucide-react";
import Image from "next/image";

export default function EditCustomProductPage() {
  const params = useParams();
  const productId = params.id;
  const router = useRouter();
  
  // Mocking the selected product based on ID for visual representation
  const isCorporate = productId === "6" || productId === "7";
  const [category, setCategory] = useState(isCorporate ? "Corporate" : "Apparel");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dotadmin/custom-products" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Edit Custom Product</h1>
        </div>
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
                  defaultValue={isCorporate ? "Executive Kit" : "Classic T-Shirt"}
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
                  defaultValue={isCorporate ? "৳ 6,000 / kit" : "৳ 350 / pc"}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
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
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <textarea 
                id="description" 
                rows={3}
                defaultValue={isCorporate ? "The ultimate VIP experience. Premium luxury items designed for executives and top-tier clients." : "A comfortable, durable classic t-shirt perfect for your branding needs."}
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Product Image</h3>
            <div className="flex gap-6 items-start">
              <div className="w-32 h-32 relative border rounded bg-gray-100 overflow-hidden">
                <Image 
                  src={isCorporate ? "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop" : "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop"} 
                  alt="Product Image" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="flex-1 border-2 border-dashed border-gray-300 rounded-md p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                <Upload className="w-6 h-6 text-gray-400 mb-2" />
                <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Upload new image</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, WebP up to 2MB</p>
              </div>
            </div>
          </div>

          {category === "Corporate" && (
            <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-2">Package Items</h3>
              <p className="text-sm text-gray-500 mb-2">List the items included in this corporate package.</p>
              
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input type="text" defaultValue="Premium Jacket" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                  <input type="text" defaultValue="https://unsplash.com/photo-1" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 text-gray-500" />
                </div>
                <div className="flex gap-2">
                  <input type="text" defaultValue="Insulated Flask" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                  <input type="text" defaultValue="https://unsplash.com/photo-2" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 text-gray-500" />
                </div>
                <div className="flex gap-2">
                  <input type="text" defaultValue="Leather Diary" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                  <input type="text" defaultValue="https://unsplash.com/photo-3" className="flex-1 border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 text-gray-500" />
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
              Update Product
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
