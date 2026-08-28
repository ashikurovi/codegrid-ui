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

export default function SizesManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sizeData = [
    { id: 1, code: "S", name: "Small", status: "Active" },
    { id: 2, code: "M", name: "Medium", status: "Active" },
    { id: 3, code: "L", name: "Large", status: "Active" },
    { id: 4, code: "XL", name: "Extra Large", status: "Active" },
    { id: 5, code: "XXL", name: "Double Extra Large", status: "Active" },
  ];

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  // Filter and Search logic
  const filteredSizes = useMemo(() => {
    return sizeData.filter((size) => {
      const matchesSearch = size.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            size.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || size.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredSizes.length / itemsPerPage);
  const paginatedSizes = filteredSizes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Sizes Management</h1>
        <Link 
          href="/dotadmin/sizes/add"
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add New Size
        </Link>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search sizes..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Size Code</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSizes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No sizes found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedSizes.map((size) => (
                  <TableRow key={size.id}>
                    <TableCell className="font-medium">SZ-{size.id}</TableCell>
                    <TableCell className="font-bold">{size.code}</TableCell>
                    <TableCell>{size.name}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${size.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {size.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/sizes/edit/${size.id}`}
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
