"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Search, User, X, Menu, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { getAllProducts } from "@/api/productApi";

export function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);
    const pathname = usePathname();
    const { items, openCart } = useCartStore();
    const [mounted, setMounted] = useState(false);
    const [apiProducts, setApiProducts] = useState<any[]>([]);
    const [user, setUser] = useState<any>(null);

    // Calculate total items in cart
    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        setMounted(true);

        // Check if user is logged in
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user from localStorage", e);
            }
        }

        const fetchProducts = async () => {
            try {
                const res = await getAllProducts();
                if (res && res.data) {
                    setApiProducts(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch products for search", error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = apiProducts
        .filter(p => p.title?.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(product => {
            let imgUrl = product.thumbnail;
            if (!imgUrl && product.images) {
                if (Array.isArray(product.images) && product.images.length > 0) {
                    imgUrl = product.images[0];
                } else if (typeof product.images === 'string') {
                    try {
                        const parsed = JSON.parse(product.images);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            imgUrl = parsed[0];
                        }
                    } catch (e) {
                        // fallback
                    }
                }
            }
            if (imgUrl && !imgUrl.startsWith('http')) {
                imgUrl = `https://codegrid-api.vercel.app${imgUrl.startsWith('/') ? '' : '/'}${imgUrl}`;
            }
            return {
                id: product.id,
                title: product.title,
                image: imgUrl || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop"
            };
        });

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            // Focus the input when modal opens
            setTimeout(() => searchInputRef.current?.focus(), 100);
        } else {
            // Clear query when closed
            setSearchQuery("");
        }
    }, [isSearchOpen]);

    return (
        <div className="w-full flex flex-col font-sans sticky top-0 z-50">
            {/* Top Bar */}
            <div className="w-full bg-black text-white text-[13px] font-medium tracking-wide flex justify-between items-center px-4 py-3 sm:px-8">
                <div className="text-white text-[12px] sm:text-[13px] truncate max-w-[60%]">
                    Welcome to CodeGrid Platform.
                </div>
                <div className="flex items-center space-x-3 sm:space-x-6 text-gray-300">
                    <Link href="/main/ordertraking" className="text-[11px] sm:text-[13px] hover:text-white transition-colors hidden sm:block uppercase tracking-wider font-semibold">
                        Track Order
                    </Link>
                    <Link href="/main/custom-order" className="text-[11px] sm:text-[13px] hover:text-white transition-colors hidden sm:block uppercase tracking-wider font-semibold">
                        Custom/Bulk
                    </Link>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="w-full bg-white border-b-[1px] border-gray-200 flex items-center justify-between px-4 sm:px-8 py-4 relative">
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logocodegrid.png"
                            alt="CodeGrid Logo"
                            width={65}
                            height={90}
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                    <Link
                        href="/main/big-sale"
                        className={`text-base uppercase tracking-wider transition-colors ${pathname === '/main/big-sale'
                            ? 'text-black font-bold'
                            : 'text-gray-600 hover:text-black font-semibold'
                            }`}
                    >
                        Big Sale
                    </Link>

                    <Link href="/main/budget-pick" className={`text-base uppercase tracking-wider transition-colors ${pathname === '/main/budget-pick'
                        ? 'text-black font-bold'
                        : 'text-gray-600 hover:text-black font-semibold'
                        }`}>
                        Budget Pick
                    </Link>

                    <Link href="/main/shop" className={`text-base uppercase tracking-wider transition-colors ${pathname === '/main/shop'
                        ? 'text-black font-bold'
                        : 'text-gray-600 hover:text-black font-semibold'
                        }`}>
                        Collections
                    </Link>

                    <Link href="/main/blogs" className={`text-base uppercase tracking-wider transition-colors ${pathname === '/main/blogs'
                        ? 'text-black font-bold'
                        : 'text-gray-600 hover:text-black font-semibold'
                        }`}>
                        Blogs
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-1 sm:space-x-3">
                    <Link href={user ? "/main/dashboard" : "/main/login"} className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-colors hidden sm:block">
                        <User className="w-6 h-6" />
                    </Link>
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-colors"
                    >
                        <Search className="w-6 h-6" />
                    </button>
                    <button
                        onClick={openCart}
                        className="p-2 relative text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-colors"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        {mounted && cartCount > 0 && (
                            <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-colors lg:hidden"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* --- SEARCH MODAL (Collapses from Top) --- */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsSearchOpen(false)}
            >
                {/* Search Panel */}
                <div
                    className={`absolute top-0 left-0 w-full bg-white border-b-[1px] border-gray-200 shadow-sm transition-transform duration-500 ease-out transform ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">

                        {/* Search Input Area */}
                        <div className="flex items-center gap-4 border-[1px] border-gray-300 rounded-lg p-2 bg-white focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all mb-4">
                            <Search className="w-5 h-5 text-gray-400 ml-2" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search for products, categories..."
                                className="flex-1 bg-transparent text-lg sm:text-xl font-medium text-black focus:outline-none placeholder-gray-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="text-gray-400 hover:text-black hover:bg-gray-100 p-1.5 rounded-md transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Search Results Area */}
                        <div className="mt-8 max-h-[60vh] overflow-y-auto hide-scrollbar">
                            {!searchQuery ? (
                                <div className="flex justify-center py-10 text-gray-400 text-sm font-medium">
                                    Start typing to see results...
                                </div>
                            ) : filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                    {filteredProducts.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={`/main/product/${product.id}`}
                                            onClick={() => setIsSearchOpen(false)}
                                            className="group flex flex-col p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="relative aspect-square mb-3 overflow-hidden rounded-lg border-[1px] border-gray-100">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors line-clamp-2 leading-tight">
                                                {product.title}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center py-10 text-red-500 text-sm font-medium">
                                    No products found for "{searchQuery}"
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU (Side Drawer) --- */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <div
                    className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-xl transition-transform duration-500 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-6 border-b-[1px] border-gray-100 bg-white">
                            <span className="font-semibold text-lg text-black tracking-wide">Menu</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-500 hover:text-black hover:bg-gray-100 p-2 rounded-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex flex-col p-6 space-y-1 overflow-y-auto hide-scrollbar bg-white">
                            <Link href="/main/big-sale" onClick={() => setIsMobileMenuOpen(false)} className={`text-base py-3 transition-colors ${pathname === '/main/big-sale' ? 'text-black font-semibold' : 'text-gray-600 font-medium hover:text-black'}`}>Big Sale</Link>
                            <Link href="/main/budget-pick" onClick={() => setIsMobileMenuOpen(false)} className={`text-base py-3 transition-colors ${pathname === '/main/budget-pick' ? 'text-black font-semibold' : 'text-gray-600 font-medium hover:text-black'}`}>Budget Pick</Link>
                            <Link href="/main/shop" onClick={() => setIsMobileMenuOpen(false)} className={`text-base py-3 transition-colors ${pathname === '/main/shop' ? 'text-black font-semibold' : 'text-gray-600 font-medium hover:text-black'}`}>Collections</Link>
                            <Link href="/main/blogs" onClick={() => setIsMobileMenuOpen(false)} className={`text-base py-3 transition-colors ${pathname === '/main/blogs' ? 'text-black font-semibold' : 'text-gray-600 font-medium hover:text-black'}`}>Blogs</Link>

                            <div className="pt-6 mt-4 border-t-[1px] border-gray-100 flex flex-col space-y-1">
                                <Link href="/main/ordertraking" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm py-2 transition-colors ${pathname === '/main/ordertraking' ? 'text-black font-semibold' : 'text-gray-500 font-medium hover:text-black'}`}>Track Order</Link>
                                <Link href="/main/custom-order" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm py-2 transition-colors ${pathname === '/main/custom-order' ? 'text-black font-semibold' : 'text-gray-500 font-medium hover:text-black'}`}>Custom/Bulk Order</Link>
                            </div>

                            <div className="pt-6 mt-4 border-t-[1px] border-gray-100">
                                <Link href={user ? "/main/dashboard" : "/main/login"} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center gap-3 py-2">
                                    <User className="w-5 h-5" /> {user ? "Dashboard" : "Account / Login"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
