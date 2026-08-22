"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["ALL", "BEST SELLING", "NEW", "SOLID", "EKDOM DESHI", "KIDS"];

const products = [
  {
    id: 1,
    title: "Drop Shoulder T-Shirt (Restart)",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: 590,
    currentPrice: 560,
    selectSizeText: "",
  },
  {
    id: 2,
    title: "Drop Shoulder T-Shirt (Modarest)",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: 590,
    currentPrice: 560,
    selectSizeText: "",
  },
  {
    id: 3,
    title: "Motorsport Racing T-Shirt: Porsche",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: null,
    currentPrice: null,
    selectSizeText: "SELECT SIZE",
  },
  {
    id: 4,
    title: "Motorsport Racing T-Shirt: Redbull",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: 750,
    currentPrice: 690,
    selectSizeText: "",
  },
  {
    id: 5,
    title: "Premium Essential Tee: Black",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: 450,
    currentPrice: 390,
    selectSizeText: "",
  },
  {
    id: 6,
    title: "Motorsport Racing T-Shirt: Ferrari",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: 750,
    currentPrice: 690,
    selectSizeText: "",
  },
  {
    id: 7,
    title: "Motorsport Racing T-Shirt: Mercedes",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: null,
    currentPrice: null,
    selectSizeText: "SELECT SIZE",
  },
  {
    id: 8,
    title: "If You Know You Know Tee",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
    variantLabel: "Half/Drop Available",
    originalPrice: 500,
    currentPrice: 450,
    selectSizeText: "",
  },
];

export function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-wide uppercase mb-6">
          STEAL YOUR VIBE
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold border transition-colors uppercase backdrop-blur-md rounded-none shadow-sm ${
                activeCategory === category
                  ? "bg-white/40 dark:bg-black/50 text-gray-900 dark:text-white border-white/50"
                  : "bg-white/10 dark:bg-black/10 text-gray-600 dark:text-gray-300 border-white/20 hover:border-white/40 hover:bg-white/20 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
        {products.map((product) => (
          <Link key={product.id} href={`/main/product/motorsport-porsche`} className="group block">
            {/* Image Container */}
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden mb-4 rounded-none">
              {/* Primary Image */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover Image */}
              <Image
                src={product.hoverImage}
                alt={`${product.title} Alternate`}
                fill
                className="absolute inset-0 object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1.5 line-clamp-2">
                {product.title}
              </h3>
              
              <div className="bg-black text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-none mb-2">
                {product.variantLabel}
              </div>

              {product.selectSizeText ? (
                <div className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent text-xs sm:text-sm font-bold uppercase tracking-wide mt-1">
                  {product.selectSizeText}
                </div>
              ) : (
                <div className="flex items-center space-x-2 mt-1">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-xs sm:text-sm">
                      ৳{product.originalPrice}
                    </span>
                  )}
                  <span className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent font-bold text-sm sm:text-base">
                    ৳{product.currentPrice}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/main/shop"
          className="inline-block border border-[#0066FF] bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent hover:bg-[#0066FF] hover:text-white px-10 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all"
        >
          SEE MORE
        </Link>
      </div>
    </section>
  );
}
