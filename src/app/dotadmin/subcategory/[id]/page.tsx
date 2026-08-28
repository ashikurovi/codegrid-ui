"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSubCategoryById, updateSubCategory } from "@/api/sub-categoryApi";
import { getAllCategories } from "@/api/categoryApi";
import Select from "react-select";

export default function SubCategoryDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const subCategoryId = params.id as string;

  const [subCategory, setSubCategory] = useState<{name: string, description: string, parentCategoryId: string}>({
    name: "",
    description: "",
    parentCategoryId: ""
  });
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, [subCategoryId]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [subCatRes, catRes] = await Promise.all([
        getSubCategoryById(subCategoryId),
        getAllCategories()
      ]);
      
      if (subCatRes) {
        const subCatData = subCatRes.data || subCatRes;
        setSubCategory({
          name: subCatData.name || "",
          description: subCatData.description || "",
          parentCategoryId: subCatData.parentCategory?.id ? String(subCatData.parentCategory.id) : ""
        });
      }

      if (catRes && Array.isArray(catRes.data)) {
        setCategories(catRes.data);
      } else if (Array.isArray(catRes)) {
        setCategories(catRes);
      }
    } catch (error) {
      console.error("Failed to fetch subcategory details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setIsSaving(true);
      await updateSubCategory(subCategoryId, {
        name: subCategory.name,
        description: subCategory.description,
        parentCategoryId: Number(subCategory.parentCategoryId)
      });
      router.push("/dotadmin/subcategory");
    } catch (error) {
      console.error("Failed to update sub-category:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading subcategory details...</div>;
  }

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
                value={subCategory.name}
                onChange={(e) => setSubCategory({...subCategory, name: e.target.value})}
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="parent" className="text-sm font-medium">Parent Category</label>
              <Select 
                  id="parent" 
                  options={categories.map(cat => ({ value: String(cat.id), label: cat.name }))}
                  value={
                    subCategory.parentCategoryId 
                      ? { 
                          value: subCategory.parentCategoryId, 
                          label: categories.find(c => String(c.id) === subCategory.parentCategoryId)?.name || "" 
                        } 
                      : null
                  }
                  onChange={(selectedOption: any) => setSubCategory({...subCategory, parentCategoryId: selectedOption ? selectedOption.value : ""})}
                  placeholder="Select a parent category"
                  isClearable
                  className="text-sm text-gray-900"
                />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <textarea 
                id="description" 
                rows={3}
                value={subCategory.description}
                onChange={(e) => setSubCategory({...subCategory, description: e.target.value})}
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
              />
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                type="button"
                onClick={handleUpdate}
                disabled={isSaving || !subCategory.name || !subCategory.parentCategoryId}
                className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 disabled:opacity-70"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>

        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Related Products</h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-500">Products API not yet connected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
