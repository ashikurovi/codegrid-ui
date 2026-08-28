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
import { getAllSubCategories, createSubCategory, deleteSubCategory } from "@/api/sub-categoryApi";
import { getAllCategories } from "@/api/categoryApi";
import Select from "react-select";

export default function SubCategoryManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [subCategories, setSubCategories] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [newSubCategory, setNewSubCategory] = useState({ name: "", description: "", parentCategoryId: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [subCatRes, catRes] = await Promise.all([
        getAllSubCategories(),
        getAllCategories()
      ]);
      
      if (subCatRes && Array.isArray(subCatRes.data)) {
        setSubCategories(subCatRes.data);
      } else if (Array.isArray(subCatRes)) {
        setSubCategories(subCatRes);
      } else {
        setSubCategories([]);
      }

      if (catRes && Array.isArray(catRes.data)) {
        setCategories(catRes.data);
      } else if (Array.isArray(catRes)) {
        setCategories(catRes);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setSubCategories([]);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateSubCategory = async () => {
    try {
      setIsSaving(true);
      await createSubCategory({
        name: newSubCategory.name,
        description: newSubCategory.description,
        parentCategoryId: Number(newSubCategory.parentCategoryId)
      });
      setIsModalOpen(false);
      setNewSubCategory({ name: "", description: "", parentCategoryId: "" });
      fetchData();
    } catch (error) {
      console.error("Failed to create sub-category:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteSubCategory = async (id: number | string) => {
    if (confirm("Are you sure you want to delete this sub-category?")) {
      try {
        await deleteSubCategory(id);
        fetchData();
      } catch (error) {
        console.error("Failed to delete sub-category:", error);
      }
    }
  };

  // Filter and Search logic
  const filteredSubCategories = useMemo(() => {
    return subCategories.filter((sub) => {
      const parentName = sub.parentCategory?.name || "";
      const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (sub.description || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [subCategories, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredSubCategories.length / itemsPerPage);
  const paginatedSubCategories = filteredSubCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Sub-Category Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add New Sub-Category
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
            <h2 className="text-xl font-semibold mb-6">Add New Sub-Category</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Sub-Category Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={newSubCategory.name}
                  onChange={(e) => setNewSubCategory({...newSubCategory, name: e.target.value})}
                  placeholder="e.g. Smartphones" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="parent" className="text-sm font-medium">Parent Category</label>
                <Select 
                  id="parent" 
                  options={categories.map(cat => ({ value: String(cat.id), label: cat.name }))}
                  value={
                    newSubCategory.parentCategoryId 
                      ? { 
                          value: newSubCategory.parentCategoryId, 
                          label: categories.find(c => String(c.id) === newSubCategory.parentCategoryId)?.name || "" 
                        } 
                      : null
                  }
                  onChange={(selectedOption: any) => setNewSubCategory({...newSubCategory, parentCategoryId: selectedOption ? selectedOption.value : ""})}
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
                  value={newSubCategory.description}
                  onChange={(e) => setNewSubCategory({...newSubCategory, description: e.target.value})}
                  placeholder="Sub-Category description..." 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
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
                  onClick={handleCreateSubCategory}
                  disabled={isSaving || !newSubCategory.name || !newSubCategory.parentCategoryId}
                  className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSaving ? "Saving..." : "Save Sub-Category"}
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
          searchPlaceholder="Search sub-categories..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SL</TableHead>
                <TableHead>Sub-Category Name</TableHead>
                <TableHead>Parent Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    Loading sub-categories...
                  </TableCell>
                </TableRow>
              ) : paginatedSubCategories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No sub-categories found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedSubCategories.map((sub, index) => (
                  <TableRow key={sub.id}>
                    <TableCell className="font-medium">{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                    <TableCell>{sub.name}</TableCell>
                    <TableCell>{sub.parentCategory?.name || "-"}</TableCell>
                    <TableCell>{sub.description}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/subcategory/${sub.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={`/dotadmin/subcategory/${sub.id}`}
                          className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button 
                          type="button"
                          onClick={() => handleDeleteSubCategory(sub.id)}
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
