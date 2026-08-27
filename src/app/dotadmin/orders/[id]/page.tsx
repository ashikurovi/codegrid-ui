"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dotadmin/orders" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Order Details: ORD-{orderId}</h1>
        </div>
        <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 px-3 py-1 text-sm font-medium border border-indigo-200 dark:border-indigo-800/50">
          Shipped
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Order Info and Items */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 border-b pb-4 dark:border-gray-800">Order Items</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center py-2">
                <div className="flex flex-col">
                  <span className="font-medium">iPhone 14 Pro</span>
                  <span className="text-sm text-gray-500">SKU-IP14P</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">1 x $999.00</span>
                  <p className="font-medium">$999.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-t dark:border-gray-800">
                <div className="flex flex-col">
                  <span className="font-medium">AirPods Pro</span>
                  <span className="text-sm text-gray-500">SKU-APP2</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">1 x $249.00</span>
                  <p className="font-medium">$249.00</p>
                </div>
              </div>
              
              <div className="border-t mt-4 pt-4 dark:border-gray-800">
                <div className="flex justify-between text-sm py-1">
                  <span className="text-gray-500">Subtotal</span>
                  <span>$1248.00</span>
                </div>
                <div className="flex justify-between text-sm py-1">
                  <span className="text-gray-500">Shipping</span>
                  <span>$12.00</span>
                </div>
                <div className="flex justify-between text-sm py-1">
                  <span className="text-gray-500">Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold py-3 mt-2 border-t dark:border-gray-800">
                  <span>Total</span>
                  <span>$1260.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-4">
            <h2 className="text-xl font-semibold border-b pb-4 dark:border-gray-800">Update Status</h2>
            <div className="flex items-center gap-4">
              <select 
                id="status" 
                defaultValue="Shipped"
                className="w-full max-w-xs border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <button 
                type="button"
                className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Update
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Customer Info */}
        <div className="flex flex-col gap-8">
          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
            <h2 className="text-xl font-semibold border-b pb-4 dark:border-gray-800">Customer Details</h2>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Name</span>
              <p className="font-medium">Alice Johnson</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Email</span>
              <p className="font-medium text-blue-600 hover:underline cursor-pointer">alice@example.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Phone</span>
              <p className="font-medium">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
            <h2 className="text-xl font-semibold border-b pb-4 dark:border-gray-800">Shipping Address</h2>
            <p className="text-sm leading-relaxed">
              Alice Johnson<br/>
              123 Maple Street<br/>
              Apt 4B<br/>
              New York, NY 10001<br/>
              United States
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
