"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navber from "@/components/admin/navber";
import Sideber from "@/components/admin/sideber";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login page if no token is found
      router.push("/main/login"); 
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Prevent rendering the dashboard until authentication is verified
  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-100/40 dark:bg-gray-800/40">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-gray-100/40 dark:bg-gray-800/40">
      <Sideber />
      <div className="flex flex-col w-full overflow-hidden">
        <Navber />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
