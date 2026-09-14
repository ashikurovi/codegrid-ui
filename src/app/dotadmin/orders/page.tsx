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
import { getAllOrders, deleteOrder } from "@/api/orderApi";

export default function OrdersManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    getAllOrders()
      .then((res) => {
        if (res.data) setOrders(res.data);
      })
      .catch(console.error);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this order?")) {
      try {
        await deleteOrder(id);
        loadOrders();
      } catch (err) {
        console.error("Failed to delete order", err);
      }
    }
  };

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Pending", value: "Pending" },
    { label: "Processing", value: "Processing" },
    { label: "Shipped", value: "Shipped" },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "Cancelled" },
  ];

  // Filter and Search logic
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const customerName = order.user?.fullName || order.orderNotes || "Guest";
      const matchesSearch = customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            order.id.toString().includes(searchQuery);
      const matchesStatus = statusFilter === "All" || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Processing": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Shipped": return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "Pending": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Cancelled": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black uppercase tracking-tight text-black">Orders Management</h1>
        <Link 
          href="/dotadmin/orders/add"
          className="bg-[#3b82f6] text-white px-6 py-2 text-sm font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none"
        >
          Create New Order
        </Link>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search by customer or order ID..."
        />
        <div className="border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No orders found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedOrders.map((order) => {
                  const customerName = order.user?.fullName || order.orderNotes || "Guest";
                  const orderDate = new Date(order.createdAt || Date.now()).toLocaleDateString();
                  
                  return (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <span>CG-{String(order.id).padStart(4, '0')}</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(`CG-${String(order.id).padStart(4, '0')}`);
                          }}
                          className="text-gray-400 hover:text-black"
                          title="Copy Order ID"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>{customerName}</TableCell>
                    <TableCell>{orderDate}</TableCell>
                    <TableCell>৳{order.totalAmount}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/orders/${order.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={`/dotadmin/orders/${order.id}`}
                          className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button 
                          type="button"
                          onClick={() => handleDelete(order.id)}
                          className="p-1 text-gray-500 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                  );
                })
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
