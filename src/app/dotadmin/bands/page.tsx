"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import { TableControls } from "@/components/admin/table-controls";
import { TablePagination } from "@/components/admin/table-pagination";
import { Eye, Edit, Trash2 } from "lucide-react";
import { getAllBrands, createBrand, deleteBrand } from "@/api/brandApi";

export default function BrandsManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [brands, setBrands] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [newBrand, setNewBrand] = useState<{ name: string; description: string; image: File | null }>({ name: "", description: "", image: null });

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      setIsLoading(true);
      const response = await getAllBrands();
      
      if (response && Array.isArray(response.data)) {
        setBrands(response.data);
      } else if (Array.isArray(response)) {
        setBrands(response);
      } else {
        setBrands([]);
      }
    } catch (error) {
      console.error("Failed to fetch brands:", error);
      setBrands([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateBrand = async () => {
    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append('name', newBrand.name);
      formData.append('description', newBrand.description);
      if (newBrand.image) {
        formData.append('picture', newBrand.image);
      }

      await createBrand(formData);
      setIsModalOpen(false);
      setNewBrand({ name: "", description: "", image: null });
      fetchBrands();
    } catch (error) {
      console.error("Failed to create brand:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteBrand = async (id: number | string) => {
    if (confirm("Are you sure you want to delete this brand?")) {
      try {
        await deleteBrand(id);
        fetchBrands();
      } catch (error) {
        console.error("Failed to delete brand:", error);
      }
    }
  };

  // Filter and Search logic
  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (brand.description || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [brands, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  const paginatedBrands = filteredBrands.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Brands Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add New Brand
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg border bg-white p-6 shadow-lg dark:bg-gray-950 dark:border-gray-800 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="text-xl font-semibold mb-6">Add New Brand</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Brand Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={newBrand.name}
                  onChange={(e) => setNewBrand({...newBrand, name: e.target.value})}
                  placeholder="e.g. Apple" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <textarea 
                  id="description" 
                  rows={3}
                  value={newBrand.description}
                  onChange={(e) => setNewBrand({...newBrand, description: e.target.value})}
                  placeholder="Brand description..." 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-sm font-medium">Brand Logo / Image</label>
                <input 
                  type="file" 
                  id="image" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setNewBrand({ ...newBrand, image: file });
                  }}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="border border-gray-300 bg-white px-6 py-2 text-sm font-medium hover:bg-gray-50 transition-colors dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  onClick={handleCreateBrand}
                  disabled={isSaving || !newBrand.name}
                  className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSaving ? "Saving..." : "Save Brand"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter="All"
          setStatusFilter={() => {}}
          statusOptions={[{label: "All Status", value: "All"}]}
          searchPlaceholder="Search brands..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SL</TableHead>
                <TableHead>Brand Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                    Loading brands...
                  </TableCell>
                </TableRow>
              ) : paginatedBrands.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                    No brands found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedBrands.map((brand, index) => (
                  <TableRow key={brand.id}>
                    <TableCell className="font-medium">{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {brand.picture && (
                          <img src={`http://localhost:8000${brand.picture}`} alt={brand.name} className="w-8 h-8 rounded object-cover border" />
                        )}
                        {brand.name}
                      </div>
                    </TableCell>
                    <TableCell>{brand.description}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/bands/${brand.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={`/dotadmin/bands/${brand.id}`}
                          className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button 
                          type="button"
                          onClick={() => handleDeleteBrand(brand.id)}
                          className="p-1 text-gray-500 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
