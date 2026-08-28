"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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

export default function BigSellManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const bigSaleProducts = [
    {
      id: 1,
      title: "FIFA World Cup 2026 T-Shirt: Portugal",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      price: 249,
      originalPrice: 590,
      status: "Active",
    },
    {
      id: 2,
      title: "FIFA World Cup 2026 T-Shirt: Brazil",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
      price: 249,
      originalPrice: 590,
      status: "Active",
    },
    {
      id: 3,
      title: "Beige Half-Zip Raglan",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
      price: 249,
      originalPrice: 760,
      status: "Inactive",
    },
    {
      id: 4,
      title: "FIFA World Cup 2026 T-Shirt: Morocco",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
      price: 249,
      originalPrice: 590,
      status: "Active",
    },
  ];

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  // Filter and Search logic
  const filteredProducts = useMemo(() => {
    return bigSaleProducts.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || product.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Big Sell Management</h1>
        <Link 
          href="/dotadmin/big-sell/add"
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add Big Sell Product
        </Link>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search big sell products..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Original Price</TableHead>
                <TableHead>Sale Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                    No big sell products found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">BS-{product.id}</TableCell>
                    <TableCell>
                      <div className="relative w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell className="line-through text-gray-500">৳{product.originalPrice}</TableCell>
                    <TableCell className="font-bold text-blue-600">৳{product.price}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${product.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/big-sell/${product.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={`/dotadmin/big-sell/${product.id}/edit`}
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
