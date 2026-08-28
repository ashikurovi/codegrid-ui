"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { getAllCategories, createCategory, deleteCategory } from "@/api/categoryApi";
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

export default function CategoryManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [newCategory, setNewCategory] = useState<{ name: string; description: string; status: string; image: File | null }>({ name: "", description: "", status: "Active", image: null });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await getAllCategories();
      // Ensure data is an array before setting
      if (response && Array.isArray(response.data)) {
        setCategories(response.data);
      } else if (Array.isArray(response)) {
        setCategories(response);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCategory = async () => {
    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append('name', newCategory.name);
      formData.append('description', newCategory.description);
      formData.append('status', newCategory.status);
      if (newCategory.image) {
        formData.append('picture', newCategory.image);
      }

      await createCategory(formData);
      setIsModalOpen(false);
      setNewCategory({ name: "", description: "", status: "Active", image: null });
      fetchCategories();
    } catch (error) {
      console.error("Failed to create category:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteCategory = async (id: number | string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        await deleteCategory(id);
        fetchCategories();
      } catch (error) {
        console.error("Failed to delete category:", error);
      }
    }
  };

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  // Filter and Search logic
  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            category.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || (category.status || "Active") === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [categories, searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Category Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add New Category
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
            <h2 className="text-xl font-semibold mb-6">Add New Category</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Category Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  placeholder="e.g. Electronics" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <textarea 
                  id="description" 
                  rows={3}
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  placeholder="Category description..." 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status" 
                  value={newCategory.status}
                  onChange={(e) => setNewCategory({ ...newCategory, status: e.target.value })}
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-sm font-medium">Category Image</label>
                <input 
                  type="file" 
                  id="image" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setNewCategory({ ...newCategory, image: file });
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
                  onClick={handleCreateCategory}
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
                    "Save Category"
                  )}
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
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search categories..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SL</TableHead>
                <TableHead>Category Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    Loading categories...
                  </TableCell>
                </TableRow>
              ) : paginatedCategories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No categories found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedCategories.map((category, index) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium ${(category.status || "Active") === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {category.status || "Active"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/category/${category.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={`/dotadmin/category/${category.id}`}
                          className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button 
                          type="button"
                          onClick={() => handleDeleteCategory(category.id)}
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
