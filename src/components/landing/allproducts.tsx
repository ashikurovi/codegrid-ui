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
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-wide uppercase mb-8">
          STEAL YOUR VIBE
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm sm:text-base font-black transition-all active:translate-y-1 active:translate-x-1 active:shadow-none uppercase rounded-none border-2 border-black ${activeCategory === category
                  ? "bg-[#3b82f6] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
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
          <div key={product.id} className="group block bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
            <Link href={`/main/product/motorsport-porsche`} className="flex flex-col flex-1">
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-none border-b-[3px] border-black">
                {/* Primary Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover Image */}
                <Image
                  src={product.hoverImage}
                  alt={`${product.title} Alternate`}
                  fill
                  className="absolute inset-0 object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Variant Label as Badge */}
                <div className="absolute top-3 left-3 bg-[#3b82f6] text-white text-[10px] sm:text-xs font-black px-2 py-1 uppercase border-2 border-black">
                  {product.variantLabel}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col items-start text-left p-4 sm:p-5 flex-1">
                <h3 className="text-sm sm:text-base font-black text-black mb-2 line-clamp-2">
                  {product.title}
                </h3>

                {product.selectSizeText ? (
                  <div className="text-black text-xs sm:text-sm font-black uppercase tracking-wide mt-auto">
                    {product.selectSizeText}
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 mt-auto mb-2">
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-xs sm:text-sm font-bold">
                        ৳{product.originalPrice}
                      </span>
                    )}
                    <span className="text-black font-black text-base sm:text-lg">
                      ৳{product.currentPrice}
                    </span>
                  </div>
                )}
              </div>
            </Link>
            {/* Action Buttons */}
            <div className="flex gap-2 p-4 pt-0 mt-auto">
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

      {/* See More Button */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/main/shop"
          className="inline-block border-[3px] border-black bg-[#3b82f6] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none px-12 py-4 rounded-none text-sm sm:text-base font-black uppercase tracking-widest transition-all"
        >
          SEE MORE
        </Link>
      </div>
    </section>
  );
}
