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
                  className={`relative w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 border-2 transition-colors ${
                    activeImage === idx ? "border-black" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] bg-gray-100 order-1 sm:order-2">
              <Image src={product.images[activeImage]} alt={product.title} fill className="object-cover" priority />
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8">
            <div className="flex border-b border-gray-200">
              {["DESCRIPTION", "ADDITIONAL INFORMATION", "REVIEWS"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors ${
                    activeTab === tab ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-6 text-sm text-gray-600 leading-relaxed space-y-4">
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
          <nav className="flex items-center text-xs text-gray-500 mb-6 space-x-2">
            <Link href="/" className="hover:text-black">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="#" className="hover:text-black">SIGNATURE SERIES</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 truncate">{product.title}</span>
          </nav>

          {/* Variant Label */}
          <div className="mb-3">
            <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide">
              {product.variantLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">{product.title}</h1>

          {/* Price */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-gray-400 line-through text-lg">৳{product.originalPrice}</span>
            <span className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent font-bold text-2xl">৳{product.currentPrice}</span>
          </div>

          {/* Short Description */}
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 mb-6 space-y-1">
            {product.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>

          <button className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent text-sm font-bold uppercase underline mb-6 self-start hover:text-blue-800">
            Size Chart
          </button>

          {/* Size Selector */}
          <div className="mb-6">
            <span className="block text-xs font-bold text-gray-900 mb-2 uppercase">Size</span>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-semibold border transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Type Selector */}
          <div className="mb-8">
            <span className="block text-xs font-bold text-gray-900 mb-2 uppercase">Type</span>
            <div className="flex gap-3">
              {product.types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 text-xs font-bold uppercase border transition-colors ${
                    selectedType === type
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="w-full bg-gradient-to-br from-[#00A8FF] to-[#0033FF] hover:from-[#0099EE] hover:to-[#0022DD] text-white font-black uppercase tracking-wider py-4 rounded-none transition-all shadow-sm border border-transparent">
              ADD TO CART
            </button>
            <button 
              onClick={() => router.push("/main/checkout")}
              className="w-full bg-black hover:bg-gray-900 text-white font-black uppercase tracking-wider py-4 rounded-none transition-colors shadow-sm border border-black"
            >
              BUY NOW
            </button>
          </div>

          {/* Shipping & Trust Info */}
          <div className="space-y-2 text-xs text-gray-600 mb-6 font-medium">
            <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-none" /> Nationwide Delivery via Pathao Courier</p>
            <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-none" /> Fast and Reliable Delivery</p>
            <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-none" /> Trusted by 100,000+ Customers</p>
          </div>

          {/* Value Props Box */}
          <div className="grid grid-cols-3 border border-gray-200 rounded-none divide-x divide-gray-200 mb-8 bg-gray-50/50">
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 text-center gap-2 text-gray-700">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-[9px] sm:text-[10px] font-bold uppercase">AAZ Guarantee<br/><span className="font-normal text-gray-500">Quality You Can Trust</span></div>
            </div>
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 text-center gap-2 text-gray-700">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-[9px] sm:text-[10px] font-bold uppercase">Easy Exchange<br/><span className="font-normal text-gray-500">Hassle-Free Returns</span></div>
            </div>
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 text-center gap-2 text-gray-700">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-[9px] sm:text-[10px] font-bold uppercase">Secure Pay<br/><span className="font-normal text-gray-500">Trusted E-Commerce</span></div>
            </div>
          </div>

          {/* Most Wanted Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-none">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
              Most Wanted in this category
            </h3>
            <div className="flex flex-col gap-3">
              {relatedProducts.map((rp) => (
                <div key={rp.id} className="flex items-center justify-between bg-white p-2 rounded-none shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-12 bg-gray-100 rounded-none overflow-hidden">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs font-bold text-gray-900 truncate max-w-[150px] sm:max-w-[200px]">
                        {rp.title}
                      </span>
                      <span className="text-[10px] text-gray-500">৳{rp.price}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-br from-[#00A8FF] to-[#0033FF] hover:from-[#0099EE] hover:to-[#0022DD] text-white text-[10px] font-bold px-3 py-1.5 uppercase transition-all rounded-none shadow-sm">
                    VIEW
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Offers & More */}
          <div className="mt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
              <span className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent">★</span> Offers & More
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm border border-dashed border-gray-300 p-3 rounded-none">
                <span className="font-semibold text-gray-700">Buy 2 and Save 100TK</span>
                <span className="bg-gradient-to-br from-[#00A8FF] to-[#0033FF] text-white px-2 py-0.5 font-bold rounded-none text-[10px]">SAVING</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm border border-dashed border-gray-300 p-3 rounded-none">
                <span className="font-semibold text-gray-700">Buy 3 and Save 300TK</span>
                <span className="bg-gradient-to-br from-[#00A8FF] to-[#0033FF] text-white px-2 py-0.5 font-bold rounded-none text-[10px]">SAVING</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 mt-3 text-center">
              (Items added to cart must exactly equal the conditions of offer / target tk.)
            </p>
            <button className="w-full mt-4 bg-gradient-to-br from-[#00A8FF] to-[#0033FF] hover:from-[#0099EE] hover:to-[#0022DD] text-white font-bold uppercase py-3 text-xs tracking-wider rounded-none transition-all shadow-sm">
              SEE CUSTOMER REVIEW PHOTOS
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
