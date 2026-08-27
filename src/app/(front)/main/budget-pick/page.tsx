"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

const categories = [
  { name: "Accessories", count: 38 },
  { name: "Bag", count: 1, isSub: true },
  { name: "Bandana Scarf", count: 10, isSub: true },
  { name: "Cap", count: 3, isSub: true },
  { name: "Jewelry", count: 13, isSub: true },
  { name: "Socks", count: 11, isSub: true },
  { name: "Bottom Wears", count: 9 },
  { name: "SweatPant", count: 9, isSub: true },
  { name: "Black_SP", count: 8, isSub: true, isSubSub: true },
  { name: "Budget Shopping", count: 43 },
];

const budgetProducts = [
  {
    id: 1,
    title: "Best Deal: Solid Half Sleeve (3 Pieces)",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    price: 899,
    originalPrice: 1050,
    tags: [
      { text: "Best Deal", color: "bg-red-500" },
      { text: "Most Wanted", color: "bg-red-500" },
      { text: "Half Sleeve", color: "bg-yellow-400 text-black" },
    ],
    rating: 0,
  },
  {
    id: 2,
    title: "Best Deal: Solid Drop Shoulder (3 Pieces)",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    price: 999,
    originalPrice: 1170,
    tags: [
      { text: "Best Deal", color: "bg-red-500" },
      { text: "Most Wanted", color: "bg-red-500" },
    ],
    rating: 5,
  },
  {
    id: 3,
    title: "Best Deal: Solid Full Sleeve T-Shirt (2 Pieces)",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
    price: 749,
    originalPrice: 900,
    tags: [
      { text: "Best Deal", color: "bg-red-500" },
      { text: "Half Sleeve", color: "bg-yellow-400 text-black" },
    ],
    rating: 0,
  },
  {
    id: 4,
    title: "FIFA World Cup 2026 T-Shirt: Portugal (Combo)",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    price: 249,
    originalPrice: 590,
    tags: [
      { text: "Best Deal", color: "bg-red-500" },
      { text: "Half/Drop Available", color: "bg-black" },
    ],
    rating: 0,
  },
];

export default function BudgetPickPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Main Container */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Huge Title */}
        <div className="w-full py-10 mb-8 border-b border-gray-100">
          <h1 className="text-6xl sm:text-7xl font-black text-center text-black">Budget Pick</h1>
          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Get more for less. Explore our best-selling bundles, 2-piece, and 3-piece packages at discounted prices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0 space-y-10">
            {/* Search Box */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-4">
                SEARCH IN OUR SHOP
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search packages..."
                  className="w-full border border-gray-200 py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-gray-400 rounded-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter by Categories */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-4">
                FILTER BY CATEGORIES
              </h3>
              <div className="space-y-3">
                {categories.map((cat, idx) => (
                  <label
                    key={idx}
                    className={`flex items-center justify-between cursor-pointer group ${cat.isSubSub ? "ml-12" : cat.isSub ? "ml-6" : ""
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="category"
                        defaultChecked={cat.name === "Budget Shopping"}
                        className="w-4 h-4 text-gray-900 focus:ring-0 border-gray-300 rounded-none"
                      />
                      <span className={`text-sm group-hover:text-black ${cat.name === "Budget Shopping" ? "font-bold text-black" : "text-gray-700"}`}>
                        {cat.name}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-none ${cat.name === "Budget Shopping" ? "bg-[#0066FF] text-white" : "bg-gray-100 text-gray-500"}`}>
                      {cat.count}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="flex-1">
            {/* Top Bar: Breadcrumb & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800">Budget Pick</span>
              </div>

              <button className="text-xs font-bold uppercase tracking-wide flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                SORT BY POPULARITY <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
              {budgetProducts.map((product) => (
                <Link key={product.id} href={`/main/product/${product.id}`} className="group block">
                  {/* Square Image */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4 rounded-none border border-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm text-gray-800 font-medium mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${tag.color} ${tag.color.includes('text-black') ? '' : 'text-white'} text-[10px] font-bold px-1.5 py-0.5 rounded-none`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* Rating (only show if rating > 0) */}
                  {product.rating > 0 && (
                    <div className="flex text-yellow-400 text-[10px] mb-1 gap-0.5">
                      {[...Array(product.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-xs sm:text-sm">
                      ৳{product.originalPrice}
                    </span>
                    <span className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent font-bold text-sm sm:text-base">
                      ৳{product.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
