"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBrandById, updateBrand } from "@/api/brandApi";

export default function BandDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const brandId = params.id as string;

  const [brand, setBrand] = useState<{name: string, description: string, image: File | null, existingPicture: string}>({
    name: "",
    description: "",
    image: null,
    existingPicture: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchBrandDetails();
  }, [brandId]);

  const fetchBrandDetails = async () => {
    try {
      setIsLoading(true);
      const res = await getBrandById(brandId);
      
      if (res) {
        const brandData = res.data || res;
        setBrand({
          name: brandData.name || "",
          description: brandData.description || "",
          image: null,
          existingPicture: brandData.picture || ""
        });
      }
    } catch (error) {
      console.error("Failed to fetch brand details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append('name', brand.name);
      formData.append('description', brand.description);
      if (brand.image) {
        formData.append('picture', brand.image);
      }

      await updateBrand(brandId, formData);
      router.push("/dotadmin/bands");
    } catch (error) {
      console.error("Failed to update brand:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading brand details...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/bands" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Brand Details: BRND-{brandId}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6">Edit Brand Information</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Brand Name</label>
              <input 
                type="text" 
                id="name" 
                value={brand.name}
                onChange={(e) => setBrand({...brand, name: e.target.value})}
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <textarea 
                id="description" 
                rows={3}
                value={brand.description}
                onChange={(e) => setBrand({...brand, description: e.target.value})}
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="image" className="text-sm font-medium">Brand Logo / Image</label>
              {brand.existingPicture && !brand.image && (
                <div className="mb-2">
                  <img src={`http://localhost:8000${brand.existingPicture}`} alt="Current brand picture" className="w-20 h-20 object-cover border rounded" />
                </div>
              )}
              <input 
                type="file" 
                id="image" 
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setBrand({ ...brand, image: file });
                }}
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                type="button"
                onClick={handleUpdate}
                disabled={isSaving || !brand.name}
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
