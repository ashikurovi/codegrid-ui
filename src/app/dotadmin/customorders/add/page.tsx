"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddCustomOrderPage() {
  const router = useRouter();
  const [category, setCategory] = useState("Apparel");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/customorders" className="text-black hover:text-[#3b82f6] flex items-center justify-center p-2 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 rounded-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-tight text-black">Add Custom Order</h1>
      </div>

      <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 max-w-3xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-xl font-black uppercase mb-2 text-black border-b-4 border-black w-max pb-1">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="customerName" className="text-sm font-black uppercase text-black">Name / Company Name</label>
                <input 
                  type="text" 
                  id="customerName" 
                  placeholder="e.g. John Doe / Tech Innovators" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="customerPhone" className="text-sm font-black uppercase text-black">Phone Number</label>
                <input 
                  type="text" 
                  id="customerPhone" 
                  placeholder="+880 1..." 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="customerEmail" className="text-sm font-black uppercase text-black">Email Address (Optional)</label>
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
            <h3 className="text-xl font-black uppercase mb-2 text-black border-b-4 border-black w-max pb-1">Request Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-black uppercase text-black">Category</label>
                <select 
                  id="category" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase"
                >
                  <option value="Apparel">T-Shirts & Apparel</option>
                  <option value="Bottles">Mugs & Bottles</option>
                  <option value="Corporate">Corporate Packages</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="item" className="text-sm font-black uppercase text-black">Specific Item / Package</label>
                <select 
                  id="item" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase"
                >
                  {category === "Apparel" && (
                    <>
                      <option value="Classic T-Shirt">Classic T-Shirt</option>
                      <option value="Premium Polo">Premium Polo</option>
                      <option value="Winter Hoodie">Winter Hoodie</option>
                    </>
                  )}
                  {category === "Bottles" && (
                    <>
                      <option value="Ceramic Mug">Ceramic Mug</option>
                      <option value="Steel Water Bottle">Steel Water Bottle</option>
                      <option value="Insulated Flask">Insulated Flask</option>
                    </>
                  )}
                  {category === "Corporate" && (
                    <>
                      <option value="Basic Kit">Basic Kit</option>
                      <option value="Premium Kit">Premium Kit</option>
                      <option value="Executive Kit">Executive Kit</option>
                    </>
                  )}
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="quantity" className="text-sm font-black uppercase text-black">Quantity</label>
                <input 
                  type="number" 
                  id="quantity" 
                  defaultValue={10}
                  min={1}
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="details" className="text-sm font-black uppercase text-black">Additional Details & Instructions</label>
              <textarea 
                id="details" 
                rows={4}
                placeholder="Details about colors, sizes, logo placement..." 
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
                <option value="New Request">New Request</option>
                <option value="Quoted">Quoted</option>
                <option value="In Production">In Production</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-black uppercase text-black">Quoted Total Price (৳)</label>
              <input 
                type="number" 
                id="price" 
                placeholder="Optional" 
                className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
              />
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/customorders")}
              className="bg-[#3b82f6] text-white px-8 py-3 text-sm font-black uppercase border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none disabled:opacity-50"
            >
              Save Custom Order
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/customorders")}
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
