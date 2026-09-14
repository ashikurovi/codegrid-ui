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
import { getAllCustomOrders, deleteCustomOrder } from "@/api/customOrderApi";

export default function CustomOrdersManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    getAllCustomOrders()
      .then((res) => {
        if (res.data) setOrders(res.data);
      })
      .catch(console.error);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this custom order?")) {
      try {
        await deleteCustomOrder(id);
        loadOrders();
      } catch (err) {
        console.error("Failed to delete order", err);
      }
    }
  };

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "New Request", value: "New Request" },
    { label: "Quoted", value: "Quoted" },
    { label: "In Production", value: "In Production" },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "Cancelled" },
  ];

  // Filter and Search logic
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const customerName = order.customerName || (order.user?.name) || "Unknown Customer";
      const customerPhone = order.customerPhone || (order.user?.phone) || "";
      const matchesSearch = customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            order.id.toString().includes(searchQuery) ||
                            customerPhone.includes(searchQuery);
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
      case "New Request": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Quoted": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "In Production": return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "Delivered": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Cancelled": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black uppercase tracking-tight text-black">Custom Orders</h1>
        <Link 
          href="/dotadmin/customorders/add"
          className="bg-[#3b82f6] text-white px-6 py-2 text-sm font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none"
        >
          Add Custom Order
        </Link>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search by customer, phone or ID..."
        />
        <div className="border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Request ID</TableHead>
                <TableHead>Customer / Phone</TableHead>
                <TableHead>Category / Item</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                    No custom orders found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">CUST-{order.id}</TableCell>
                    <TableCell>
                      <div>{order.customerName || order.user?.name || "Unknown Customer"}</div>
                      <div className="text-xs text-gray-500">{order.customerPhone || order.user?.phone || "-"}</div>
                    </TableCell>
                    <TableCell>
                      <div>{order.category}</div>
                      <div className="text-xs text-gray-500">{order.item}</div>
                    </TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/dotadmin/customorders/${order.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={`/dotadmin/customorders/${order.id}`}
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
