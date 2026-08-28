"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function CustomOrderDetailsPage() {
  const params = useParams();
  const orderId = params.id;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dotadmin/customorders" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Custom Request: CUST-{orderId}</h1>
        </div>
        <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 text-sm font-medium border border-blue-200 dark:border-blue-800/50">
          New Request
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Request Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 border-b pb-4 dark:border-gray-800">Request Details</h2>
            <div className="flex flex-col gap-6">
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Category</span>
                  <p className="font-medium">Corporate</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Item/Package</span>
                  <p className="font-medium">Executive Kit</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Quantity</span>
                  <p className="font-medium text-blue-600">20 Units</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Instructions & Customization Info</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-white border dark:bg-gray-950 dark:border-gray-800 p-4 rounded-md">
                  I am interested in ordering the Executive Kit. Please include our company logo on the jacket chest and engrave it on the flask. Brand colors are Navy and Gold. Attached are our logo files in SVG. Need delivery by 15th of next month.
                </p>
              </div>

              <div className="border-t pt-6 mt-2 dark:border-gray-800">
                <h4 className="text-sm font-semibold mb-4">Pricing Quote</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Base Price (Executive Kit)</span>
                    <span>৳ 6,000 / kit</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Customization & Setup Fee</span>
                    <span>৳ 2,500</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t pt-3 mt-1 dark:border-gray-800">
                    <span className="font-medium">Calculated Subtotal</span>
                    <span>৳ 122,500</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-dashed dark:border-gray-800">
                    <label htmlFor="quotedTotal" className="text-xs font-bold block mb-1">Final Quoted Total to Customer (৳)</label>
                    <div className="flex gap-2 items-center">
                      <input 
                        type="number"
                        id="quotedTotal"
                        defaultValue={120000}
                        className="border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700 flex-1 max-w-[200px]"
                      />
                      <button className="bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                        Save Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-4">
            <h2 className="text-xl font-semibold border-b pb-4 dark:border-gray-800">Update Status</h2>
            <div className="flex items-center gap-4">
              <select 
                id="status" 
                defaultValue="New Request"
                className="w-full max-w-xs border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
              >
                <option value="New Request">New Request</option>
                <option value="Quoted">Quoted</option>
                <option value="In Production">In Production</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <button 
                type="button"
                className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Customer & File Info */}
        <div className="flex flex-col gap-8">
          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
            <h2 className="text-xl font-semibold border-b pb-4 dark:border-gray-800">Customer Details</h2>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Name / Company</span>
              <p className="font-medium">Global Logistics</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Phone Number</span>
              <p className="font-medium">+880 1611-000004</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Email</span>
              <p className="font-medium text-blue-600 hover:underline cursor-pointer">procurement@globallogistics.com</p>
            </div>
            <button className="border border-gray-300 bg-white px-4 py-2 mt-2 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Call Customer
            </button>
          </div>

          <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
            <h2 className="text-xl font-semibold border-b pb-4 dark:border-gray-800">Uploaded Assets</h2>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <div className="bg-blue-100 text-blue-600 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium truncate">brand_logo_gold.svg</p>
                  <p className="text-xs text-gray-500">145 KB</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <div className="bg-green-100 text-green-600 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium truncate">branding_guidelines.pdf</p>
                  <p className="text-xs text-gray-500">1.2 MB</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
