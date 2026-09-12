"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddOrderPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/orders" className="text-black hover:text-[#3b82f6] flex items-center justify-center p-2 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 rounded-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-tight text-black">Create New Order</h1>
      </div>

      <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 max-w-3xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-xl font-black uppercase mb-2 text-black border-b-4 border-black w-max pb-1">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="customerName" className="text-sm font-black uppercase text-black">Customer Name</label>
                <input 
                  type="text" 
                  id="customerName" 
                  placeholder="e.g. John Doe" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="customerEmail" className="text-sm font-black uppercase text-black">Customer Email</label>
                <input 
                  type="email" 
                  id="customerEmail" 
                  placeholder="john@example.com" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-xl font-black uppercase mb-2 text-black border-b-4 border-black w-max pb-1">Order Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="product" className="text-sm font-black uppercase text-black">Product</label>
                <select 
                  id="product" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase"
                >
                  <option value="">Select a product...</option>
                  <option value="iphone14">iPhone 14 Pro - $999.00</option>
                  <option value="macbook">MacBook Pro 16" - $2499.00</option>
                  <option value="airpods">AirPods Pro - $249.00</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quantity" className="text-sm font-black uppercase text-black">Quantity</label>
                <input 
                  type="number" 
                  id="quantity" 
                  defaultValue={1}
                  min={1}
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
            </div>
            <button type="button" className="text-sm font-medium text-blue-600 self-start mt-2 hover:underline">
              + Add another product
            </button>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-xl font-black uppercase mb-2 text-black border-b-4 border-black w-max pb-1">Shipping Details</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-black uppercase text-black">Shipping Address</label>
              <textarea 
                id="address" 
                rows={3}
                placeholder="Full address..." 
                className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase resize-none" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-black uppercase text-black">Order Status</label>
              <select 
                id="status" 
                className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="total" className="text-sm font-black uppercase text-black">Total Amount ($)</label>
              <input 
                type="number" 
                id="total" 
                placeholder="0.00" 
                readOnly
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none bg-gray-50 text-gray-500 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/orders")}
              className="bg-[#3b82f6] text-white px-8 py-3 text-sm font-black uppercase border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none disabled:opacity-50"
            >
              Create Order
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/orders")}
              className="border-[3px] border-black bg-white px-8 py-3 text-sm font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none text-black"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
