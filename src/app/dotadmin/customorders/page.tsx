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

export default function CustomOrdersManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const orders = [
    { id: 2001, customer: "Tech Innovators Inc.", phone: "+880 1711-000001", category: "Corporate", item: "Premium Kit", quantity: 50, date: "2023-10-25", status: "New Request" },
    { id: 2002, customer: "John Doe", phone: "+880 1811-000002", category: "Apparel", item: "Winter Hoodie", quantity: 15, date: "2023-10-26", status: "Quoted" },
    { id: 2003, customer: "Creative Studio", phone: "+880 1911-000003", category: "Bottles", item: "Ceramic Mug", quantity: 100, date: "2023-10-26", status: "In Production" },
    { id: 2004, customer: "Global Logistics", phone: "+880 1611-000004", category: "Corporate", item: "Executive Kit", quantity: 20, date: "2023-10-27", status: "Delivered" },
    { id: 2005, customer: "Sarah Williams", phone: "+880 1511-000005", category: "Apparel", item: "Classic T-Shirt", quantity: 200, date: "2023-10-28", status: "Cancelled" },
    { id: 2006, customer: "Event Planners Ltd", phone: "+880 1311-000006", category: "Bottles", item: "Steel Water Bottle", quantity: 75, date: "2023-10-28", status: "In Production" },
    { id: 2007, customer: "Startup XYZ", phone: "+880 1411-000007", category: "Corporate", item: "Basic Kit", quantity: 30, date: "2023-10-29", status: "New Request" },
  ];

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
      const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            order.id.toString().includes(searchQuery) ||
                            order.phone.includes(searchQuery);
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
        <h1 className="text-3xl font-bold tracking-tight">Custom Orders</h1>
        <Link 
          href="/dotadmin/customorders/add"
          className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
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
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
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
                      <div>{order.customer}</div>
                      <div className="text-xs text-gray-500">{order.phone}</div>
                    </TableCell>
                    <TableCell>
                      <div>{order.category}</div>
                      <div className="text-xs text-gray-500">{order.item}</div>
                    </TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.date}</TableCell>
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
