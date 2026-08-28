"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "@/api/categoryApi";
import { BASE_URL } from "@/api/baseApi";

export default function CategoryDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [category, setCategory] = useState<{ name: string; description: string; status: string; image: File | null; picture?: string }>({ 
    name: "", description: "", status: "Active", image: null 
  });

  useEffect(() => {
    if (categoryId) {
      fetchCategoryDetails();
    }
  }, [categoryId]);

  const fetchCategoryDetails = async () => {
    try {
      setIsLoading(true);
      const res = await getCategoryById(categoryId);
      if (res && res.data) {
        setCategory({
          name: res.data.name || "",
          description: res.data.description || "",
          status: res.data.status || "Active",
          picture: res.data.picture,
          image: null
        });
      }
    } catch (error) {
      console.error("Failed to fetch category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCategory = async () => {
    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append('name', category.name);
      formData.append('description', category.description);
      formData.append('status', category.status);
      if (category.image) {
        formData.append('picture', category.image);
      }

      await updateCategory(categoryId, formData);
      router.push("/dotadmin/category");
    } catch (error) {
      console.error("Failed to update category:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/category" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Category Details: CAT-{categoryId}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6">Edit Category Information</h2>
          {isLoading ? (
             <div className="flex justify-center py-10">
               <svg className="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
             </div>
          ) : (
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Category Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={category.name}
                  onChange={(e) => setCategory({ ...category, name: e.target.value })}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <textarea 
                  id="description" 
                  rows={3}
                  value={category.description}
                  onChange={(e) => setCategory({ ...category, description: e.target.value })}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status" 
                  value={category.status}
                  onChange={(e) => setCategory({ ...category, status: e.target.value })}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-sm font-medium">Category Image</label>
                {category.picture && (
                  <div className="mb-2">
                    <img src={`${BASE_URL}${category.picture}`} alt={category.name} className="h-20 w-20 object-cover border" />
                  </div>
                )}
                <input 
                  type="file" 
                  id="image" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setCategory({ ...category, image: file });
                  }}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>

              <div className="mt-4 flex gap-2">
                <button 
                  type="button"
                  onClick={handleUpdateCategory}
                  disabled={isSaving}
                  className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Related Sub-Categories</h2>
          <div className="flex flex-col gap-4">
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Mobile Phones</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">32 Products active</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Laptops</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">18 Products active</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Smart Watches</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">12 Products active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
