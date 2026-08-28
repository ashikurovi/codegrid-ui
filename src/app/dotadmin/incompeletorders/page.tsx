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
import { Eye, Mail, MessageCircle, ArrowRightLeft } from "lucide-react";

export default function IncompleteOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const incompleteOrders = [
    { id: 3001, customer: "Fahim Rahman", phone: "+8801711000000", email: "fahim@example.com", item: "Winter Hoodie", cartValue: "৳ 850", date: "2023-10-29 14:30", status: "Abandoned", step: "Checkout" },
    { id: 3002, customer: "Nusrat Jahan", phone: "+8801811000000", email: "nusrat@example.com", item: "Premium Polo x 2", cartValue: "৳ 1100", date: "2023-10-29 11:15", status: "Contacted", step: "Shipping Info" },
    { id: 3003, customer: "Tanvir Ahmed", phone: "+8801911000000", email: "tanvir@test.com", item: "Ceramic Mug", cartValue: "৳ 250", date: "2023-10-28 18:45", status: "Abandoned", step: "Cart" },
    { id: 3004, customer: "Sadia Islam", phone: "+8801611000000", email: "sadia@test.com", item: "Basic Corporate Kit", cartValue: "৳ 1500", date: "2023-10-28 10:20", status: "Recovered", step: "Payment" },
    { id: 3005, customer: "Rakib Hasan", phone: "+8801511000000", email: "rakib@example.com", item: "Steel Water Bottle", cartValue: "৳ 450", date: "2023-10-27 09:10", status: "Abandoned", step: "Checkout" },
  ];

  const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Abandoned", value: "Abandoned" },
    { label: "Contacted", value: "Contacted" },
    { label: "Recovered", value: "Recovered" },
  ];

  // Filter and Search logic
  const filteredOrders = useMemo(() => {
    return incompleteOrders.filter((order) => {
      const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            order.phone.includes(searchQuery) ||
                            order.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [incompleteOrders, searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Abandoned": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "Contacted": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Recovered": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Incomplete Orders</h1>
          <p className="text-gray-500 mt-1">Manage abandoned carts and follow up with customers</p>
        </div>
      </div>

      <div>
        <TableControls 
          searchQuery={searchQuery}
          setSearchQuery={(val) => { setSearchQuery(val); setCurrentPage(1); }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => { setStatusFilter(val); setCurrentPage(1); }}
          statusOptions={statusOptions}
          searchPlaceholder="Search by name, phone or email..."
        />
        <div className="border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Details</TableHead>
                <TableHead>Cart / Items</TableHead>
                <TableHead>Left At</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No incomplete orders found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="font-medium">{order.customer}</div>
                      <div className="text-xs text-gray-500 flex flex-col gap-1 mt-1">
                        <span>{order.phone}</span>
                        <span>{order.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>{order.item}</div>
                      <div className="font-medium text-sm mt-1">{order.cartValue}</div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">
                        {order.step}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600 dark:text-gray-400">{order.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs font-medium rounded-sm ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-3">
                        {/* WhatsApp Action */}
                        <a 
                          href={`https://wa.me/${order.phone.replace(/[^0-9]/g, '')}?text=Hi ${order.customer}, we noticed you left some items in your cart...`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 hover:text-green-700 transition-colors"
                          title="Message on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        
                        {/* Email Action */}
                        <a 
                          href={`mailto:${order.email}?subject=Your items are waiting!&body=Hi ${order.customer},`}
                          className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 hover:text-blue-700 transition-colors"
                          title="Send Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>

                        <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-1"></div>

                        {/* Convert Action */}
                        <button 
                          type="button"
                          className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-900 text-white text-xs font-medium rounded hover:bg-gray-800 transition-colors"
                          title="Convert to Order"
                        >
                          <ArrowRightLeft className="w-3.5 h-3.5" />
                          Convert
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
