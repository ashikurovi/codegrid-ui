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
import Image from "next/image";

export default function CustomProductsManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const customProducts = [
    { id: 1, name: "Classic T-Shirt", category: "Apparel", price: "৳ 350 / pc", status: "Active", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop" },
    { id: 2, name: "Premium Polo", category: "Apparel", price: "৳ 550 / pc", status: "Active", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=400&auto=format&fit=crop" },
    { id: 3, name: "Winter Hoodie", category: "Apparel", price: "৳ 850 / pc", status: "Active", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop" },
    { id: 4, name: "Ceramic Mug", category: "Bottles", price: "৳ 250 / pc", status: "Active", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop" },
    { id: 5, name: "Steel Water Bottle", category: "Bottles", price: "৳ 450 / pc", status: "Inactive", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400&auto=format&fit=crop" },
    { id: 6, name: "Basic Kit", category: "Corporate", price: "৳ 1,500 / kit", status: "Active", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=400&auto=format&fit=crop" },
    { id: 7, name: "Executive Kit", category: "Corporate", price: "৳ 6,000 / kit", status: "Active", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop" },
  ];

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  // Filter and Search logic
  const filteredProducts = useMemo(() => {
    return customProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || product.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [customProducts, searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Custom Products</h1>
        <Link 
          href="/dotadmin/custom-products/add"
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add Custom Product
        </Link>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search custom products..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Image</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Base Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No custom products found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="w-12 h-12 relative rounded overflow-hidden bg-gray-100">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium ${product.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/custom-products/${product.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View/Edit Details"
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
