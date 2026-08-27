import { ReactNode } from "react";
import Navber from "@/components/admin/navber";
import Sideber from "@/components/admin/sideber";

export default function AdminLayout({ children }: { children: ReactNode }) {
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
