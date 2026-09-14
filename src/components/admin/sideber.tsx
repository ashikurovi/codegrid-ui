"use client";

import { useState, useEffect } from "react";
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
      { name: "Campaigns", href: "/dotadmin/campaign", icon: ImageIcon },
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
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
    }, []);

    const handleLogout = () => {
        logoutUser();
        window.location.href = "/main/login";
    };

    return (
        <div className="hidden bg-white lg:block border-r-[3px] border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] w-[260px] flex-shrink-0 z-10 relative">
            <div className="flex h-full max-h-screen flex-col">
                {/* Header */}
                <div className="flex h-[60px] items-center px-6 border-b-[3px] border-black">
                    <Link href="/dotadmin" className="flex items-center gap-2 font-black tracking-tighter">
                        <span className="text-2xl text-black font-black uppercase">CODEGRID</span>
                        <span className="text-xs font-black px-2 py-0.5 bg-[#3b82f6] text-white border-2 border-black ml-1 uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">ADMIN</span>
                    </Link>
                </div>
                
                {/* Scrollable Nav Area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 hide-scrollbar">
                    <div className="flex flex-col gap-6">
                        {navGroups.map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <h4 className="px-3 text-xs font-black uppercase tracking-widest text-black mb-1 border-b-2 border-black w-max pb-1">
                                    {group.title}
                                </h4>
                                <nav className="grid gap-2">
                                    {group.links.map((link) => {
                                        const isActive = pathname === link.href || (link.href !== "/dotadmin" && pathname.startsWith(link.href));
                                        const Icon = link.icon;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className={`flex items-center gap-3 px-3 py-2 text-sm font-black uppercase border-2 transition-all duration-200 rounded-none ${
                                                    isActive
                                                        ? "bg-[#3b82f6] text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                                        : "text-black border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 bg-transparent"
                                                }`}
                                            >
                                                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-black'}`} />
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
                <div className="p-4 border-t-[3px] border-black bg-white">
                    <div className="flex items-center justify-between gap-3 px-3 py-2 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border-2 border-black bg-[#3b82f6] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white font-black text-xs rounded-none overflow-hidden relative">
                                {user?.picture ? (
                                    <img src={user.picture} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    user?.name ? user.name.charAt(0).toUpperCase() : 'A'
                                )}
                            </div>
                            <div className="flex flex-col truncate max-w-[120px]">
                                <span className="text-sm font-black text-black uppercase truncate">{user?.name || "Admin User"}</span>
                                <span className="text-[10px] font-bold text-gray-600 uppercase truncate">{user?.email || "admin@codegrid.com"}</span>
                            </div>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="p-2 text-black border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 hover:text-white transition-all rounded-none shrink-0"
                            title="Logout"
                        >
                            <LogOut className="w-4 h-4 font-black" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
