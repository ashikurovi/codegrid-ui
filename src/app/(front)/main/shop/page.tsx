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

const shopProducts = [
  {
    id: 1,
    title: "Drop Shoulder T-Shirt (Ragnar Lothbrok)",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    price: 560,
    originalPrice: 590,
    tags: [
      { text: "Most Wanted", color: "bg-red-500" },
      { text: "Half/Drop Available", color: "bg-black" },
    ],
    rating: 5,
  },
  {
    id: 2,
    title: "Solid Drop Shoulder T-Shirt (Maroon)",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
    price: 360,
    originalPrice: 390,
    tags: [
      { text: "Most Wanted", color: "bg-red-500" },
      { text: "Half/Drop Available", color: "bg-black" },
    ],
    rating: 5,
  },
  {
    id: 3,
    title: "Solid Drop Shoulder T-Shirt (Black)",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    price: 360,
    originalPrice: 390,
    tags: [
      { text: "Most Wanted", color: "bg-red-500" },
      { text: "Half/Drop Available", color: "bg-black" },
    ],
    rating: 5,
  },
  {
    id: 4,
    title: "Solid Drop Shoulder T-Shirt (Olive Green)",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    price: 360,
    originalPrice: 390,
    tags: [
      { text: "Most Wanted", color: "bg-red-500" },
      { text: "Half/Drop Available", color: "bg-black" },
    ],
    rating: 5,
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Main Container */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Huge Shop Title */}
        <div className="w-full py-6 md:py-10 mb-8 border-b-[4px] border-black">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-center text-black uppercase tracking-tight">Shop</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0 space-y-10">
            {/* Search Box */}
            <div>
              <h3 className="text-base font-black uppercase tracking-widest text-black mb-4">
                SEARCH IN OUR SHOP
              </h3>
              <div className="relative border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent py-2.5 pl-4 pr-10 text-sm font-bold text-black focus:outline-none rounded-none placeholder-gray-500 uppercase"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-[#3b82f6] transition-colors">
                  <Search className="w-5 h-5 font-black" />
                </button>
              </div>
            </div>

            {/* Filter by Categories */}
            <div>
              <h3 className="text-base font-black uppercase tracking-widest text-black mb-4">
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
                        className="w-5 h-5 text-[#3b82f6] focus:ring-0 border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] checked:bg-[#3b82f6]"
                      />
                      <span className="text-sm font-bold text-black group-hover:text-[#3b82f6] uppercase transition-colors">
                        {cat.name}
                      </span>
                    </div>
                    <span className="text-xs px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black bg-white text-black">
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
              <div className="text-xs text-black uppercase tracking-widest font-black border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white">
                <Link href="/" className="hover:text-[#3b82f6] transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-[#3b82f6]">Shop</span>
              </div>

              <button className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-black bg-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                SORT BY POPULARITY <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
              {shopProducts.map((product) => (
                <div key={product.id} className="group block relative border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform bg-white flex flex-col h-full">
                  <Link href={`/main/product/motorsport-porsche`} className="flex flex-col flex-1 p-3 pb-0">
                    {/* Square Image */}
                    <div className="relative aspect-square bg-white overflow-hidden mb-4 rounded-none">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm text-black font-black uppercase mb-2 group-hover:text-[#3b82f6] transition-colors line-clamp-2 min-h-[40px]">
                      {product.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`${tag.color.includes('bg-red-500') ? 'bg-red-500 text-white' : tag.color.includes('bg-black') ? 'bg-black text-white' : tag.color} border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black px-2 py-1 rounded-none uppercase`}
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex text-black text-sm mb-2 gap-1 border-2 border-black w-max px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {[...Array(product.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between border-t-[3px] border-black pt-3 mt-auto mb-3">
                      <span className="text-black line-through text-sm font-bold">
                        ৳{product.originalPrice}
                      </span>
                      <span className="text-[#3b82f6] font-black text-lg">
                        ৳{product.price}
                      </span>
                    </div>
                  </Link>
                  {/* Action Buttons */}
                  <div className="flex gap-2 p-3 pt-0 mt-auto">
                    <Link href={`/main/product/motorsport-porsche`} className="flex-1 bg-white text-black text-center text-xs sm:text-sm font-black border-2 border-black py-2 uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                      Details
                    </Link>
                    <button className="flex-1 bg-[#3b82f6] text-white text-center text-xs sm:text-sm font-black border-2 border-black py-2 uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" onClick={(e) => { e.preventDefault(); console.log("Added to cart"); }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
