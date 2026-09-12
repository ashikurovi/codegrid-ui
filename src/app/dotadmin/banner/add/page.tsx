"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

export default function AddBannerPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/banner" className="text-black hover:text-[#3b82f6] flex items-center justify-center p-2 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 rounded-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-tight text-black">Add New Banner</h1>
      </div>

      <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none max-w-4xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Banner Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-black uppercase text-black">Main Title</label>
                <input 
                  type="text" 
                  id="title" 
                  placeholder="e.g. Winter Collection" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subtitle" className="text-sm font-black uppercase text-black">Subtitle</label>
                <input 
                  type="text" 
                  id="subtitle" 
                  placeholder="e.g. STAY WARM" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tag" className="text-sm font-black uppercase text-black">Tag (Optional)</label>
                <input 
                  type="text" 
                  id="tag" 
                  placeholder="e.g. NEW or #DEARAAZ" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="link" className="text-sm font-black uppercase text-black">Destination Link</label>
                <input 
                  type="text" 
                  id="link" 
                  placeholder="e.g. /shop or https://..." 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-black uppercase text-black">Status</label>
                <select 
                  id="status" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-xl font-black uppercase mb-2 text-black border-b-4 border-black w-max pb-1">Banner Image</h3>
            <p className="text-sm text-gray-500 mb-2">Recommended resolution: 1920x1080 (or roughly 16:9 aspect ratio).</p>
            <div className="border-[3px] border-dashed border-black rounded-none p-10 flex flex-col items-center justify-center bg-white hover:bg-gray-100 transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 text-black">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Click to upload banner image</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, WebP up to 5MB</p>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/banner")}
              className="bg-[#3b82f6] text-white px-8 py-3 text-sm font-black uppercase border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none disabled:opacity-50"
            >
              Save Banner
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/banner")}
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
