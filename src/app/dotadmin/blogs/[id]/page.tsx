"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import Image from "next/image";
import { RichTextEditor } from "@/components/ui/rich-text-editor";

export default function EditBlogPage() {
  const params = useParams();
  const blogId = params.id;
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/blogs" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Edit Blog {blogId}</h1>
      </div>

      <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 max-w-4xl">
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-4 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Blog Content</h3>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-medium">Article Title</label>
              <input 
                type="text" 
                id="title" 
                defaultValue="How to Style Drop Shoulder Tees for Winter"
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="excerpt" className="text-sm font-medium">Short Excerpt</label>
              <textarea 
                id="excerpt" 
                rows={2}
                defaultValue="Discover the best ways to layer your favorite drop shoulder t-shirts to stay warm and stylish this winter season."
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none" 
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="content" className="text-sm font-medium">Full Content</label>
              <RichTextEditor 
                value="Winter is here, and it's time to talk about layering. Drop shoulder tees are an incredible base layer..."
                onChange={(val) => console.log(val)} 
                placeholder="Write your article here..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm font-medium">Publish Date</label>
                <input 
                  type="date" 
                  id="date" 
                  defaultValue="2026-01-15"
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status" 
                  defaultValue="Published"
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b pb-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">Cover Image</h3>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-1/2 aspect-video relative border rounded bg-gray-100 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" 
                  alt="Blog preview" 
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
              onClick={() => router.push("/dotadmin/blogs")}
              className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Update Blog
            </button>
            <button 
              type="button"
              onClick={() => router.push("/dotadmin/blogs")}
              className="border border-gray-300 bg-white px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-colors dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
