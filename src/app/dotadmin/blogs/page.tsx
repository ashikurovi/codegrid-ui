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
import { Edit, Trash2, Plus } from "lucide-react";

export default function BlogManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const blogs = [
    {
      id: 1,
      title: "How to Style Drop Shoulder Tees for Winter",
      excerpt: "Discover the best ways to layer your favorite drop shoulder t-shirts to stay warm and stylish this winter season.",
      date: "Jan 15, 2026",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      status: "Published",
    },
    {
      id: 2,
      title: "The Rise of Streetwear in Bangladesh",
      excerpt: "Exploring how local brands are reshaping the fashion landscape and bringing global streetwear trends to the streets of Dhaka.",
      date: "Feb 02, 2026",
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
      status: "Published",
    },
    {
      id: 3,
      title: "Understanding Fabric: What Makes a Good T-Shirt?",
      excerpt: "From GSM to cotton blends, we break down everything you need to know to choose a t-shirt that lasts longer and feels better.",
      date: "Feb 18, 2026",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
      status: "Draft",
    },
  ];

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Published", value: "Published" },
    { label: "Draft", value: "Draft" },
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || blog.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [blogs, searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-gray-500 mt-1">Manage articles and content for the store's blog.</p>
        </div>
        <Link 
          href="/dotadmin/blogs/add"
          className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <Plus className="w-4 h-4" /> Add Blog
        </Link>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search by title or excerpt..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Image</TableHead>
                <TableHead>Title & Excerpt</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedBlogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No blogs found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedBlogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell>
                      <div className="w-20 h-14 relative overflow-hidden bg-gray-100 rounded-sm">
                        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                      </div>
                    </TableCell>
                    <TableCell className="max-w-md">
                      <div className="font-bold text-gray-900 dark:text-gray-100 truncate">{blog.title}</div>
                      <div className="text-sm text-gray-500 truncate">{blog.excerpt}</div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium ${blog.status === "Published" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"}`}>
                        {blog.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/blogs/${blog.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View/Edit"
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
