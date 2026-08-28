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
import { Eye, Edit, Trash2, Plus } from "lucide-react";

export default function BannerManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const banners = [
    {
        id: 1,
        title: "YOUR DESIGN HERE",
        subtitle: "CUSTOMIZED YOUR T-SHIRT",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "#DEARAAZ",
        status: "Active"
    },
    {
        id: 2,
        title: "Casual in Confidence",
        subtitle: "ORDER HERE",
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "",
        status: "Active"
    },
    {
        id: 3,
        title: "Deshi Collection",
        subtitle: "for Deshi People",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "",
        status: "Active"
    },
    {
        id: 4,
        title: "Winter Collection",
        subtitle: "STAY WARM",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "NEW",
        status: "Inactive"
    },
    {
        id: 5,
        title: "Summer Vibes",
        subtitle: "COOL STUFF",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "HOT",
        status: "Active"
    },
  ];

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  // Filter and Search logic
  const filteredBanners = useMemo(() => {
    return banners.filter((banner) => {
      const matchesSearch = banner.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            banner.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            banner.tag.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || banner.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [banners, searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBanners.length / itemsPerPage);
  const paginatedBanners = filteredBanners.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Banner Management</h1>
          <p className="text-gray-500 mt-1">Manage the slides showing on the homepage banner.</p>
        </div>
        <Link 
          href="/dotadmin/banner/add"
          className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <Plus className="w-4 h-4" /> Add Banner
        </Link>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search by title, subtitle, or tag..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Image</TableHead>
                <TableHead>Title & Subtitle</TableHead>
                <TableHead>Tag</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedBanners.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No banners found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedBanners.map((banner) => (
                  <TableRow key={banner.id}>
                    <TableCell>
                      <div className="w-20 h-12 relative overflow-hidden bg-gray-100 rounded-sm">
                        <Image src={banner.image} alt={banner.title} fill className="object-cover" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-bold text-gray-900 dark:text-gray-100">{banner.title}</div>
                      <div className="text-xs text-gray-500 uppercase">{banner.subtitle}</div>
                    </TableCell>
                    <TableCell>
                      {banner.tag ? (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-600 rounded-sm dark:bg-gray-800 dark:text-gray-300">
                          {banner.tag}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-blue-600 hover:underline">
                      <a href={banner.link} target="_blank" rel="noreferrer">{banner.link}</a>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium ${banner.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {banner.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/banner/${banner.id}`}
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
