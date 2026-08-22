"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Search, User, X, Menu } from "lucide-react";

// Mock products for the search feature
const mockProducts = [
  { id: 1, title: "Motorsport Porsche 911 T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop" },
  { id: 2, title: "Beige Half-Zip Raglan", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=400&auto=format&fit=crop" },
  { id: 3, title: "FIFA World Cup 2026 T-Shirt: Brazil", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=400&auto=format&fit=crop" },
  { id: 4, title: "Premium Hoodie Winter Edition", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop" },
  { id: 5, title: "Classic Solid Drop Shoulder T-Shirt", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop" },
];

export function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);
    const pathname = usePathname();

    const filteredProducts = mockProducts.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
            {/* Top Navy Bar */}
            <div className="w-full bg-gradient-to-r from-[#00A8FF] to-[#0033FF] text-white text-[13px] font-extrabold tracking-wide flex justify-between items-center px-4 py-2 sm:px-8 shadow-sm">
                <div className="text-white font-extrabold transition-colors text-[11px] sm:text-[13px] md:text-[15px] truncate max-w-[60%]">
                    Welcome to CodeGrid Platform.
                </div>
                <div className="flex items-center space-x-3 sm:space-x-6 text-white/90">
                    <Link href="/main/ordertraking" className="text-white text-[10px] sm:text-[13px] font-extrabold transition-colors hidden sm:block">
                        TRACK ORDER
                    </Link>
                    <Link href="/main/custom-order" className="text-white text-[10px] sm:text-[13px] font-extrabold transition-colors hidden sm:block">
                        CUSTOM/BULK
                    </Link>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="w-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/20 dark:border-white/10 flex items-center justify-between px-4 sm:px-8 py-4 shadow-sm relative">
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logocodegrid.png"
                            alt="CodeGrid Logo"
                            width={55}
                            height={100}
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                    <Link
                        href="/main/big-sale"
                        className={`font-bold text-sm tracking-wide uppercase hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent transition-colors ${
                            pathname === '/main/big-sale' 
                            ? 'border-b-2 border-[#00B4DB] pb-1 text-[#0A1128]' 
                            : 'text-[#0A1128]'
                        }`}
                    >
                        Big Sale
                    </Link>

                    <Link href="/main/budget-pick" className="group relative flex items-center cursor-pointer">
                        <span className={`font-bold text-sm tracking-wide uppercase group-hover:bg-gradient-to-r group-hover:from-[#00B4DB] group-hover:to-[#0000FF] group-hover:bg-clip-text group-hover:text-transparent transition-colors ${
                            pathname === '/main/budget-pick' 
                            ? 'border-b-2 border-[#00B4DB] pb-1 text-[#0A1128]' 
                            : 'text-[#0A1128]'
                        }`}>
                            Budget Pick
                        </span>
                    </Link>

                    <Link href="/main/shop">
                        <div className="group relative flex items-center cursor-pointer">
                            <span className={`font-bold text-sm tracking-wide uppercase group-hover:bg-gradient-to-r group-hover:from-[#00B4DB] group-hover:to-[#0000FF] group-hover:bg-clip-text group-hover:text-transparent transition-colors ${
                                pathname === '/main/shop' 
                                ? 'border-b-2 border-[#00B4DB] pb-1 text-[#0A1128]' 
                                : 'text-[#0A1128]'
                            }`}>
                                Collections
                            </span>
                        </div>
                    </Link>

                    <Link href="/main/blogs" className="group relative flex items-center cursor-pointer">
                        <span className={`font-bold text-sm tracking-wide uppercase group-hover:bg-gradient-to-r group-hover:from-[#00B4DB] group-hover:to-[#0000FF] group-hover:bg-clip-text group-hover:text-transparent transition-colors ${
                            pathname === '/main/blogs' 
                            ? 'border-b-2 border-[#00B4DB] pb-1 text-[#0A1128]' 
                            : 'text-[#0A1128]'
                        }`}>
                            Blogs
                        </span>
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Link href="/main/login" className="p-2 text-[#0A1128] hover:text-[#00B4DB] transition-colors rounded-none hover:bg-gray-50 hidden sm:block">
                        <User className="w-5 h-5" />
                    </Link>
                    <button 
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 text-[#0A1128] hover:text-[#00B4DB] transition-colors rounded-none hover:bg-gray-50"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-[#0A1128] hover:text-[#00B4DB] transition-colors rounded-none hover:bg-gray-50 lg:hidden"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* --- SEARCH MODAL (Collapses from Top) --- */}
            <div 
                className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsSearchOpen(false)}
            >
                {/* Search Panel */}
                <div 
                    className={`absolute top-0 left-0 w-full bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
                        
                        {/* Search Input Area */}
                        <div className="flex items-center gap-4 border-b-2 border-gray-900 pb-4">
                            <Search className="w-6 h-6 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent" />
                            <input 
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search for products, categories..."
                                className="flex-1 bg-transparent text-xl sm:text-2xl font-black text-gray-900 focus:outline-none placeholder-gray-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button 
                                onClick={() => setIsSearchOpen(false)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-none"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Search Results Area */}
                        <div className="mt-8 max-h-[60vh] overflow-y-auto hide-scrollbar">
                            {!searchQuery ? (
                                <div className="flex justify-center py-10 text-gray-400 text-sm font-bold uppercase tracking-widest">
                                    Start typing to see results...
                                </div>
                            ) : filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                    {filteredProducts.map((product) => (
                                        <Link 
                                            key={product.id} 
                                            href={`/main/product/${product.id}`}
                                            onClick={() => setIsSearchOpen(false)}
                                            className="group flex flex-col"
                                        >
                                            <div className="relative aspect-square bg-gray-100 mb-3 overflow-hidden rounded-none border border-gray-100">
                                                <Image 
                                                    src={product.image}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 50vw, 20vw"
                                                />
                                            </div>
                                            <h4 className="text-xs font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#00B4DB] group-hover:to-[#0000FF] group-hover:bg-clip-text group-hover:text-transparent transition-colors line-clamp-2 leading-tight">
                                                {product.title}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center py-10 text-red-500 text-sm font-bold uppercase tracking-widest">
                                    No products found for "{searchQuery}"
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU (Side Drawer) --- */}
            <div 
                className={`fixed inset-0 bg-black/60 z-[110] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <div 
                    className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <span className="font-black text-xl text-gray-900 tracking-tighter uppercase">Menu</span>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-none"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col p-6 space-y-6 overflow-y-auto hide-scrollbar">
                            <Link href="/main/big-sale" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-lg uppercase tracking-wide transition-colors ${pathname === '/main/big-sale' ? 'bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent' : 'text-gray-900 hover:text-[#00B4DB]'}`}>Big Sale</Link>
                            <Link href="/main/budget-pick" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-lg uppercase tracking-wide transition-colors ${pathname === '/main/budget-pick' ? 'bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent' : 'text-gray-900 hover:text-[#00B4DB]'}`}>Budget Pick</Link>
                            <Link href="/main/shop" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-lg uppercase tracking-wide transition-colors ${pathname === '/main/shop' ? 'bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent' : 'text-gray-900 hover:text-[#00B4DB]'}`}>Collections</Link>
                            <Link href="/main/blogs" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-lg uppercase tracking-wide transition-colors ${pathname === '/main/blogs' ? 'bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent' : 'text-gray-900 hover:text-[#00B4DB]'}`}>Blogs</Link>
                            
                            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-6">
                                <Link href="/main/ordertraking" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-sm uppercase tracking-wide transition-colors ${pathname === '/main/ordertraking' ? 'bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent' : 'text-gray-600 hover:text-[#00B4DB]'}`}>Track Order</Link>
                                <Link href="/main/custom-order" onClick={() => setIsMobileMenuOpen(false)} className={`font-bold text-sm uppercase tracking-wide transition-colors ${pathname === '/main/custom-order' ? 'bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent' : 'text-gray-600 hover:text-[#00B4DB]'}`}>Custom/Bulk Order</Link>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <Link href="/main/login" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-sm uppercase tracking-wide text-gray-600 hover:text-[#00B4DB] transition-colors flex items-center gap-3">
                                    <User className="w-5 h-5"/> Account / Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
