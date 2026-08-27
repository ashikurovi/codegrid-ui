"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function UserDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Link href="/dotadmin/usermanagement" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center justify-center p-2 border bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">User Details: USR-{userId}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6">Edit User Information</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input 
                type="text" 
                id="name" 
                defaultValue="Alice Johnson" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input 
                type="email" 
                id="email" 
                defaultValue="alice@example.com" 
                className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-medium">Role</label>
                <select 
                  id="role" 
                  defaultValue="Admin"
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select 
                  id="status" 
                  defaultValue="Active"
                  className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                type="button"
                onClick={() => router.push("/dotadmin/usermanagement")}
                className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <div className="flex flex-col gap-4">
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Logged in</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Oct 24, 2023 - 10:30 AM</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Created a new category</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Oct 23, 2023 - 2:15 PM</p>
            </div>
            <div className="border-b pb-4 dark:border-gray-800">
              <p className="text-sm font-medium">Updated settings</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Oct 21, 2023 - 9:45 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
