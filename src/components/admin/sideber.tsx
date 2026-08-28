"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard, Users, Tags, CornerDownRight, Bookmark,
    ShoppingCart, Warehouse, ClipboardList, Wrench, AlertCircle,
    BarChart, SettingsIcon, ImageIcon, PenTool, MessageSquareHeart, Calculator, Box, Zap, PiggyBank, Ruler, Shirt, LogOut
} from "lucide-react";
import { logoutUser } from "../../api/authApi";

const navGroups = [
  {
    title: "Overview",
    links: [
      { name: "Dashboard", href: "/dotadmin", icon: LayoutDashboard },
      { name: "Analytics", href: "/dotadmin/analytics", icon: BarChart },
    ]
  },
  {
    title: "Catalog",
    links: [
      { name: "Products", href: "/dotadmin/products", icon: ShoppingCart },
      { name: "Custom Products", href: "/dotadmin/custom-products", icon: Box },
      { name: "Category", href: "/dotadmin/category", icon: Tags },
      { name: "Sub-Category", href: "/dotadmin/subcategory", icon: CornerDownRight },
      { name: "Brands", href: "/dotadmin/bands", icon: Bookmark },
      { name: "Sizes", href: "/dotadmin/sizes", icon: Ruler },
      { name: "Product Types", href: "/dotadmin/types", icon: Shirt },
      { name: "Flash Sale", href: "/dotadmin/big-sell", icon: Zap },
      { name: "Budget Pick", href: "/dotadmin/budget-pick", icon: PiggyBank },
    ]
  },
  {
    title: "Sales & Orders",
    links: [
      { name: "Orders", href: "/dotadmin/orders", icon: ClipboardList },
      { name: "Custom Orders", href: "/dotadmin/customorders", icon: Wrench },
      { name: "Incomplete Orders", href: "/dotadmin/incompeletorders", icon: AlertCircle },
    ]
  },
  {
    title: "Marketing & Content",
    links: [
      { name: "Banners", href: "/dotadmin/banner", icon: ImageIcon },
      { name: "Blogs", href: "/dotadmin/blogs", icon: PenTool },
      { name: "Customer Feedback", href: "/dotadmin/customer-feedback", icon: MessageSquareHeart },
    ]
  },
  {
    title: "System & Tools",
    links: [
      { name: "Inventory", href: "/dotadmin/inventory", icon: Warehouse },
      { name: "Calculator", href: "/dotadmin/calculation", icon: Calculator },
      { name: "Users", href: "/dotadmin/usermanagement", icon: Users },
      { name: "Settings", href: "/dotadmin/setting", icon: SettingsIcon },
    ]
  }
];

export default function Sideber() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        logoutUser();
        window.location.href = "/main/login";
    };

    return (
        <div className="hidden border-r bg-white lg:block dark:bg-[#0a0a0a] border-gray-200 dark:border-gray-800 w-[260px] flex-shrink-0">
            <div className="flex h-full max-h-screen flex-col">
                {/* Header */}
                <div className="flex h-[60px] items-center px-6">
                    <Link href="/dotadmin" className="flex items-center gap-2 font-black tracking-tighter">
                        <span className="text-2xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">CODEGRID</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 ml-1">ADMIN</span>
                    </Link>
                </div>
                
                {/* Scrollable Nav Area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 hide-scrollbar">
                    <div className="flex flex-col gap-6">
                        {navGroups.map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                                    {group.title}
                                </h4>
                                <nav className="grid gap-1">
                                    {group.links.map((link) => {
                                        const isActive = pathname === link.href || (link.href !== "/dotadmin" && pathname.startsWith(link.href));
                                        const Icon = link.icon;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                                    isActive
                                                        ? "bg-gray-100/80 text-gray-900 shadow-sm dark:bg-gray-800/80 dark:text-gray-50 dark:shadow-none"
                                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-gray-100"
                                                }`}
                                            >
                                                <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Footer User Area */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                                A
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Admin User</span>
                                <span className="text-xs text-gray-500">admin@codegrid.com</span>
                            </div>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors dark:hover:bg-red-900/20"
                            title="Logout"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
