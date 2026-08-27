"use client";

import { useState, useMemo } from "react";
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

export default function InventoryManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const inventoryItems = [
    { id: 1, product: "iPhone 14 Pro", sku: "SKU-IP14P", stock: 45, status: "In Stock" },
    { id: 2, product: "MacBook Pro 16\"", sku: "SKU-MBP16", stock: 12, status: "Low Stock" },
    { id: 3, product: "AirPods Pro", sku: "SKU-APP2", stock: 150, status: "In Stock" },
    { id: 4, product: "Nike Air Max", sku: "SKU-NAM12", stock: 0, status: "Out of Stock" },
    { id: 5, product: "Samsung Galaxy S23", sku: "SKU-SGS23", stock: 28, status: "In Stock" },
    { id: 6, product: "Levi's Denim Jacket", sku: "SKU-LDJ", stock: 5, status: "Low Stock" },
    { id: 7, product: "Yoga Mat", sku: "SKU-YM01", stock: 200, status: "In Stock" },
  ];

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "In Stock", value: "In Stock" },
    { label: "Low Stock", value: "Low Stock" },
    { label: "Out of Stock", value: "Out of Stock" },
  ];

  // Filter and Search logic
  const filteredInventory = useMemo(() => {
    return inventoryItems.filter((item) => {
      const matchesSearch = item.product.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [inventoryItems, searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
  const paginatedInventory = filteredInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add Inventory Record
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
            <h2 className="text-xl font-semibold mb-6">Update Inventory</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="product" className="text-sm font-medium">Product</label>
                <select 
                  id="product" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                  <option value="MacBook Pro 16">MacBook Pro 16"</option>
                  <option value="AirPods Pro">AirPods Pro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="sku" className="text-sm font-medium">SKU</label>
                <input 
                  type="text" 
                  id="sku" 
                  placeholder="e.g. SKU-1234" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="stock" className="text-sm font-medium">Add/Adjust Stock</label>
                <input 
                  type="number" 
                  id="stock" 
                  placeholder="e.g. 50" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status" 
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
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
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Save Record
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
          searchPlaceholder="Search inventory..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedInventory.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No inventory records found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedInventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">INV-{item.id}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>{item.stock}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium 
                        ${item.status === "In Stock" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : ""}
                        ${item.status === "Low Stock" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : ""}
                        ${item.status === "Out of Stock" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : ""}
                      `}>
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/inventory/${item.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={`/dotadmin/inventory/${item.id}`}
                          className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button 
                          type="button"
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
