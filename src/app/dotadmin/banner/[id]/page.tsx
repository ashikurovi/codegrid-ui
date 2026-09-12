"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import Image from "next/image";

export default function EditBannerPage() {
  const params = useParams();
  const bannerId = params.id;
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/banner" className="text-black hover:text-[#3b82f6] flex items-center justify-center p-2 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 rounded-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-tight text-black">Edit Banner {bannerId}</h1>
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
                  defaultValue="Casual in Confidence"
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subtitle" className="text-sm font-black uppercase text-black">Subtitle</label>
                <input 
                  type="text" 
                  id="subtitle" 
                  defaultValue="ORDER HERE"
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tag" className="text-sm font-black uppercase text-black">Tag (Optional)</label>
                <input 
                  type="text" 
                  id="tag" 
                  defaultValue=""
                  placeholder="e.g. NEW or #DEARAAZ" 
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="link" className="text-sm font-black uppercase text-black">Destination Link</label>
                <input 
                  type="text" 
                  id="link" 
                  defaultValue="#"
                  className="w-full border-[3px] border-black p-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-0 rounded-none bg-white text-black uppercase" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-black uppercase text-black">Status</label>
                <select 
                  id="status" 
                  defaultValue="Active"
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
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-1/2 aspect-[16/9] relative border rounded bg-gray-100 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop" 
                  alt="Banner preview" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="flex-1 w-full border-2 border-dashed border-gray-300 rounded-md p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer h-full min-h-[150px]">
                <Upload className="w-6 h-6 text-gray-400 mb-2" />
                <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Upload new image</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, WebP up to 5MB</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/banner")}
              className="bg-[#3b82f6] text-white px-8 py-3 text-sm font-black uppercase border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none disabled:opacity-50"
            >
              Update Banner
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
