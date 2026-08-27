"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard, Users, Tags, CornerDownRight, Bookmark,
    ShoppingCart, Warehouse, ClipboardList, Wrench, AlertCircle,
    Package, BarChart, SettingsIcon
} from "lucide-react";

const navLinks = [
    { name: "Dashboard", href: "/dotadmin", icon: LayoutDashboard },
    { name: "Users", href: "/dotadmin/usermanagement", icon: Users },
    { name: "Category", href: "/dotadmin/category", icon: Tags },
    { name: "Sub-Category", href: "/dotadmin/subcategory", icon: CornerDownRight },
    { name: "Bands", href: "/dotadmin/bands", icon: Bookmark },
    { name: "Products", href: "/dotadmin/products", icon: ShoppingCart },
    { name: "Inventory", href: "/dotadmin/inventory", icon: Warehouse },
    { name: "Orders", href: "/dotadmin/orders", icon: ClipboardList },
    { name: "Custom Orders", href: "/dotadmin/customorders", icon: Wrench },
    { name: "Incompelet Orders", href: "/dotadmin/compeletorders", icon: AlertCircle },
    { name: "Package", href: "/dotadmin/package", icon: Package },
    { name: "Analytics", href: "#", icon: BarChart },
    { name: "Settings", href: "#", icon: SettingsIcon },
];

export default function Sideber() {
    const pathname = usePathname();

    return (
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 w-[250px] flex-shrink-0">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-6">
                    <Link href="/dotadmin" className="flex items-center gap-2 font-semibold">
                        <span className="text-xl">Admin Panel</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-3 px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50 ${isActive
                                        ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50"
                                        : "text-gray-500 dark:text-gray-400"
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}
