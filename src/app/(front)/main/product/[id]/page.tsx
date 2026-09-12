"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, ShieldCheck, RefreshCw, Lock } from "lucide-react";

const product = {
  id: "motorsport-porsche",
  title: "Motorsport Racing T-Shirt: Porsche",
  originalPrice: 750,
  currentPrice: 690,
  variantLabel: "Half/Drop Available",
  description: "A motorsport-inspired T-shirt featuring bold racing graphics and sponsor-style details. Made for those who carry the racing spirit beyond the track.",
  features: [
    "Premium and Exclusive design & print",
    "Limited edition",
    "Free Physical discount card",
    "Good packaging",
    "and many more",
  ],
  images: [
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  types: ["DROP SHOULDER", "HALF SLEEVE"],
};

const relatedProducts = [
  { id: 1, title: "Drop Shoulder T-Shirt (Restart Limited)", price: 560, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=150&auto=format&fit=crop" },
  { id: 2, title: "Solid Drop Shoulder T-Shirt (Maroon)", price: 590, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=150&auto=format&fit=crop" },
  { id: 3, title: "Solid Drop Shoulder T-Shirt (Black)", price: 590, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=150&auto=format&fit=crop" },
];

export default function ProductDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedType, setSelectedType] = useState("DROP SHOULDER");
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  const router = useRouter();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-gray-900">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Images & Tabs */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* Image Gallery */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 order-2 sm:order-1 overflow-x-auto sm:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 border-[3px] transition-all ${
                    activeImage === idx ? "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1" : "border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] bg-white order-1 sm:order-2 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Image src={product.images[activeImage]} alt={product.title} fill className="object-cover" priority />
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6">
            <div className="flex flex-wrap gap-3 border-b-[3px] border-black pb-4">
              {["DESCRIPTION", "ADDITIONAL INFORMATION", "REVIEWS"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs sm:text-sm font-black tracking-wide uppercase transition-all border-[3px] border-black ${
                    activeTab === tab ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1" : "bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-6 text-sm text-black font-medium leading-relaxed space-y-4">
              {activeTab === "DESCRIPTION" && (
                <>
                  <p>
                    Bring the energy of motorsport into your everyday style with the Motorsport Racing T-Shirt. 
                    Featuring bold racing-inspired graphics, detailed sleeve elements, and a clean premium look, 
                    this tee is designed to stand out without trying too hard.
                  </p>
                  <p>
                    Its versatile streetwear aesthetic makes it easy to pair with jeans, cargos, or relaxed-fit pants
                    —whether you're heading out with friends, going for a casual drive, or simply adding a racing edge
                    to your everyday outfit.
                  </p>
                  <div>
                    <strong className="text-black block mb-2 mt-4">Key Features</strong>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Motorsport-inspired graphic design</li>
                      <li>Front, back & sleeve detailing</li>
                      <li>Comfortable everyday fit</li>
                      <li>Soft and breathable fabric feel</li>
                      <li>Premium print finish</li>
                      <li>Easy to style with casual & streetwear outfits</li>
                      <li>Designed for racing and automotive enthusiasts</li>
                    </ul>
                  </div>
                </>
              )}
              {activeTab !== "DESCRIPTION" && (
                <p className="italic text-gray-400">Content for {activeTab.toLowerCase()} goes here.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-xs text-black font-black uppercase tracking-widest mb-6 space-x-2 border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white w-max">
            <Link href="/" className="hover:text-[#3b82f6] transition-colors">HOME</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="#" className="hover:text-[#3b82f6] transition-colors">SIGNATURE SERIES</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#3b82f6] truncate max-w-[150px] sm:max-w-none">{product.title}</span>
          </nav>

          {/* Variant Label */}
          <div className="mb-4">
            <span className="bg-white border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[10px] sm:text-xs font-black px-3 py-1.5 uppercase tracking-widest">
              {product.variantLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight uppercase tracking-tight text-black">{product.title}</h1>

          {/* Price */}
          <div className="flex items-center space-x-4 mb-8 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 w-max">
            <span className="text-black line-through text-lg font-bold">৳{product.originalPrice}</span>
            <span className="text-[#3b82f6] font-black text-3xl">৳{product.currentPrice}</span>
          </div>

          {/* Short Description */}
          <p className="text-sm font-bold text-black mb-4 border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">{product.description}</p>
          <ul className="list-square pl-6 text-sm font-bold text-black mb-6 space-y-2">
            {product.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>

          <button className="text-[#3b82f6] bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase px-3 py-1.5 mb-8 self-start hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            Size Chart
          </button>

          {/* Size Selector */}
          <div className="mb-6">
            <span className="block text-sm font-black text-black mb-3 uppercase tracking-widest">Size</span>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center text-sm font-black border-[3px] transition-all uppercase ${
                    selectedSize === size
                      ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1"
                      : "bg-white text-black border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Type Selector */}
          <div className="mb-10">
            <span className="block text-sm font-black text-black mb-3 uppercase tracking-widest">Type</span>
            <div className="flex flex-wrap gap-4">
              {product.types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 text-sm font-black uppercase border-[3px] transition-all ${
                    selectedType === type
                      ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1"
                      : "bg-white text-black border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-10">
            <button className="w-full bg-[#3b82f6] text-white font-black uppercase tracking-widest py-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              ADD TO CART
            </button>
            <button 
              onClick={() => router.push("/main/checkout")}
              className="w-full bg-black text-white font-black uppercase tracking-widest py-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              BUY NOW
            </button>
          </div>

          {/* Shipping & Trust Info */}
          <div className="space-y-3 text-sm text-black mb-8 font-black border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5">
            <p className="flex items-center gap-3"><span className="w-3 h-3 border-2 border-black bg-green-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" /> Nationwide Delivery via Pathao Courier</p>
            <p className="flex items-center gap-3"><span className="w-3 h-3 border-2 border-black bg-green-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" /> Fast and Reliable Delivery</p>
            <p className="flex items-center gap-3"><span className="w-3 h-3 border-2 border-black bg-green-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" /> Trusted by 100,000+ Customers</p>
          </div>

          {/* Value Props Box */}
          <div className="grid grid-cols-3 border-[3px] border-black divide-x-[3px] divide-black mb-10 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col items-center justify-center p-4 text-center gap-2 text-black hover:bg-gray-100 transition-colors">
              <ShieldCheck className="w-6 h-6" />
              <div className="text-[10px] font-black uppercase">AAZ Guarantee<br/><span className="font-bold text-gray-600">Quality Trust</span></div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center gap-2 text-black hover:bg-gray-100 transition-colors">
              <RefreshCw className="w-6 h-6" />
              <div className="text-[10px] font-black uppercase">Easy Exchange<br/><span className="font-bold text-gray-600">Free Returns</span></div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center gap-2 text-black hover:bg-gray-100 transition-colors">
              <Lock className="w-6 h-6" />
              <div className="text-[10px] font-black uppercase">Secure Pay<br/><span className="font-bold text-gray-600">Trusted E-Com</span></div>
            </div>
          </div>

          {/* Most Wanted Section */}
          <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-6 mb-10">
            <h3 className="text-sm font-black uppercase tracking-widest mb-5 border-b-[3px] border-black pb-3 text-black">
              Most Wanted in this category
            </h3>
            <div className="flex flex-col gap-4">
              {relatedProducts.map((rp) => (
                <div key={rp.id} className="group flex items-center justify-between bg-white p-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-14 border-[3px] border-black overflow-hidden bg-white">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-black text-black uppercase truncate max-w-[140px] sm:max-w-[200px] group-hover:text-[#3b82f6] transition-colors">
                        {rp.title}
                      </span>
                      <span className="text-xs font-bold text-black mt-1">৳{rp.price}</span>
                    </div>
                  </div>
                  <button className="bg-[#3b82f6] text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black px-4 py-2 uppercase transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    VIEW
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Offers & More */}
          <div className="mt-2">
            <h3 className="text-sm font-black uppercase tracking-widest mb-5 border-b-[3px] border-black pb-3 flex items-center gap-2 text-black">
              <span className="text-[#3b82f6] text-xl leading-none">★</span> Offers & More
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform">
                <span className="font-black text-black uppercase">Buy 2 and Save 100TK</span>
                <span className="bg-[#3b82f6] text-white border-2 border-black px-3 py-1 font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px] tracking-widest">SAVING</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform">
                <span className="font-black text-black uppercase">Buy 3 and Save 300TK</span>
                <span className="bg-[#3b82f6] text-white border-2 border-black px-3 py-1 font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px] tracking-widest">SAVING</span>
              </div>
            </div>
            <p className="text-[11px] font-bold text-gray-500 mt-4 text-center uppercase tracking-wide">
              (Items added to cart must exactly equal the conditions of offer / target tk.)
            </p>
            <button className="w-full mt-6 bg-[#3b82f6] text-white font-black uppercase py-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm tracking-widest hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              SEE CUSTOMER REVIEW PHOTOS
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
