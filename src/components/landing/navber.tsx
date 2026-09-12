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
            <div className="w-full bg-[#3b82f6] text-white text-[13px] font-black tracking-wide flex justify-between items-center px-4 py-2 sm:px-8 border-b-[3px] border-black">
                <div className="text-white font-black transition-colors text-[11px] sm:text-[13px] md:text-[15px] truncate max-w-[60%]">
                    Welcome to CodeGrid Platform.
                </div>
                <div className="flex items-center space-x-3 sm:space-x-6 text-white">
                    <Link href="/main/ordertraking" className="text-white text-[10px] sm:text-[13px] font-black hover:underline transition-all hidden sm:block">
                        TRACK ORDER
                    </Link>
                    <Link href="/main/custom-order" className="text-white text-[10px] sm:text-[13px] font-black hover:underline transition-all hidden sm:block">
                        CUSTOM/BULK
                    </Link>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="w-full bg-white border-b-[3px] border-black flex items-center justify-between px-4 sm:px-8 py-4 relative">
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
                        className={`font-black text-sm tracking-wide uppercase hover:bg-[#3b82f6] hover:text-white px-2 py-1 transition-colors border-2 ${
                            pathname === '/main/big-sale' 
                            ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' 
                            : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                    >
                        Big Sale
                    </Link>

                    <Link href="/main/budget-pick" className={`font-black text-sm tracking-wide uppercase hover:bg-[#3b82f6] hover:text-white px-2 py-1 transition-colors border-2 ${
                        pathname === '/main/budget-pick' 
                        ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' 
                        : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }`}>
                        Budget Pick
                    </Link>

                    <Link href="/main/shop" className={`font-black text-sm tracking-wide uppercase hover:bg-[#3b82f6] hover:text-white px-2 py-1 transition-colors border-2 ${
                        pathname === '/main/shop' 
                        ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' 
                        : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }`}>
                        Collections
                    </Link>

                    <Link href="/main/blogs" className={`font-black text-sm tracking-wide uppercase hover:bg-[#3b82f6] hover:text-white px-2 py-1 transition-colors border-2 ${
                        pathname === '/main/blogs' 
                        ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' 
                        : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }`}>
                        Blogs
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Link href="/main/login" className="p-2 text-black border-2 border-transparent hover:border-black hover:bg-[#3b82f6] hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all rounded-none hidden sm:block">
                        <User className="w-5 h-5" />
                    </Link>
                    <button 
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 text-black border-2 border-transparent hover:border-black hover:bg-[#3b82f6] hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all rounded-none"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-black border-2 border-transparent hover:border-black hover:bg-[#3b82f6] hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all rounded-none lg:hidden"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* --- SEARCH MODAL (Collapses from Top) --- */}
            <div 
                className={`fixed inset-0 bg-black/80 z-[100] transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsSearchOpen(false)}
            >
                {/* Search Panel */}
                <div 
                    className={`absolute top-0 left-0 w-full bg-white border-b-[4px] border-black shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-500 ease-out transform ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
                        
                        {/* Search Input Area */}
                        <div className="flex items-center gap-4 border-[3px] border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 bg-white">
                            <Search className="w-6 h-6 text-black ml-2" />
                            <input 
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search for products, categories..."
                                className="flex-1 bg-transparent text-xl sm:text-2xl font-black text-black focus:outline-none placeholder-gray-400 uppercase"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button 
                                onClick={() => setIsSearchOpen(false)}
                                className="text-black hover:text-white hover:bg-red-500 border-2 border-transparent hover:border-black p-1 rounded-none transition-colors"
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
                                            className="group flex flex-col border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform p-2"
                                        >
                                            <div className="relative aspect-square mb-3 overflow-hidden rounded-none border-[2px] border-black">
                                                <Image 
                                                    src={product.image}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 50vw, 20vw"
                                                />
                                            </div>
                                            <h4 className="text-xs font-black text-black uppercase group-hover:text-[#3b82f6] transition-colors line-clamp-2 leading-tight">
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
                className={`fixed inset-0 bg-black/80 z-[110] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <div 
                    className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white border-l-[4px] border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] transition-transform duration-500 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-6 border-b-[3px] border-black bg-[#3b82f6]">
                            <span className="font-black text-xl text-white tracking-widest uppercase">Menu</span>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white hover:text-black hover:bg-white border-2 border-transparent hover:border-black p-1 transition-colors rounded-none"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col p-6 space-y-4 overflow-y-auto hide-scrollbar bg-white">
                            <Link href="/main/big-sale" onClick={() => setIsMobileMenuOpen(false)} className={`font-black text-lg uppercase tracking-widest border-2 p-2 transition-all ${pathname === '/main/big-sale' ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>Big Sale</Link>
                            <Link href="/main/budget-pick" onClick={() => setIsMobileMenuOpen(false)} className={`font-black text-lg uppercase tracking-widest border-2 p-2 transition-all ${pathname === '/main/budget-pick' ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>Budget Pick</Link>
                            <Link href="/main/shop" onClick={() => setIsMobileMenuOpen(false)} className={`font-black text-lg uppercase tracking-widest border-2 p-2 transition-all ${pathname === '/main/shop' ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>Collections</Link>
                            <Link href="/main/blogs" onClick={() => setIsMobileMenuOpen(false)} className={`font-black text-lg uppercase tracking-widest border-2 p-2 transition-all ${pathname === '/main/blogs' ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>Blogs</Link>
                            
                            <div className="pt-6 border-t-[3px] border-black flex flex-col space-y-4">
                                <Link href="/main/ordertraking" onClick={() => setIsMobileMenuOpen(false)} className={`font-black text-sm uppercase tracking-widest border-2 p-2 transition-all ${pathname === '/main/ordertraking' ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>Track Order</Link>
                                <Link href="/main/custom-order" onClick={() => setIsMobileMenuOpen(false)} className={`font-black text-sm uppercase tracking-widest border-2 p-2 transition-all ${pathname === '/main/custom-order' ? 'border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#3b82f6] text-white' : 'border-transparent text-black hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>Custom/Bulk Order</Link>
                            </div>

                            <div className="pt-6 border-t-[3px] border-black">
                                <Link href="/main/login" onClick={() => setIsMobileMenuOpen(false)} className="font-black text-sm uppercase tracking-widest border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2 transition-all text-black flex items-center gap-3">
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
