"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { getFlashSells } from "@/api/flashsellApi";
import { getAllCategories } from "@/api/categoryApi";



export default function BigSalePage() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { items, addToCart, updateQuantity, removeFromCart, openCart } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sales, catRes] = await Promise.all([
          getFlashSells(),
          getAllCategories()
        ]);

        // find active flash sale
        const activeSale = sales.find((s: any) => s.isActive) || sales[0];
        if (activeSale && activeSale.products) {
          setProducts(activeSale.products);
        } else {
          setProducts([]);
        }

        if (catRes && catRes.data) {
          setCategories(catRes.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getImgUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith('http')) return url;
    return `https://codegrid-api.vercel.app${url.startsWith('/') ? '' : '/'}${url}`;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Main Container */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Huge Title */}
        <div className="w-full py-6 md:py-10 mb-8 border-b-[1px] border-black">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center text-black uppercase tracking-tight">Flash Sale</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0 space-y-10">
            {/* Search Box */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-black mb-4">
                SEARCH IN OUR SHOP
              </h3>
              <div className="relative border-[1px] border-black bg-white">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent py-2.5 pl-4 pr-10 text-sm font-medium text-black focus:outline-none rounded-none placeholder-gray-500 uppercase"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-gray-500 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filter by Categories */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-black mb-4">
                FILTER BY CATEGORIES
              </h3>
              <div className="space-y-3">
                {categories.map((cat, idx) => (
                  <Link
                    key={cat.id || idx}
                    href={`/main/shop?category=${cat.id}`}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-[1px] border-black rounded-none group-hover:bg-gray-200 transition-colors" />
                      <span className="text-sm font-medium uppercase transition-colors group-hover:text-gray-600 text-black">
                        {cat.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="flex-1">
            {/* Top Bar: Breadcrumb & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="text-xs text-black uppercase tracking-widest font-medium border-[1px] border-black px-3 py-1.5 bg-white">
                <Link href="/" className="hover:text-gray-500 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="hover:text-gray-500 transition-colors cursor-pointer">Budget Shopping</span>
                <span className="mx-2">/</span>
                <span className="text-black font-bold">Flash Sale</span>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="text-xs font-medium uppercase tracking-widest flex items-center gap-2 text-black bg-white border-[1px] border-black px-4 py-2 hover:bg-gray-50 transition-all"
                >
                  SORT BY POPULARITY <ChevronDown className="w-4 h-4" />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white border-[1px] border-black z-10 flex flex-col">
                    <button className="px-4 py-3 text-sm text-white bg-black border-b-[1px] border-black text-left font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors">Sort by popularity</button>
                    <button className="px-4 py-3 text-sm text-black hover:bg-gray-100 border-b-[1px] border-black text-left font-medium uppercase transition-colors">Sort by average rating</button>
                    <button className="px-4 py-3 text-sm text-black hover:bg-gray-100 border-b-[1px] border-black text-left font-medium uppercase transition-colors">Sort by latest</button>
                    <button className="px-4 py-3 text-sm text-black hover:bg-gray-100 border-b-[1px] border-black text-left font-medium uppercase transition-colors">Sort by price: low to high</button>
                    <button className="px-4 py-3 text-sm text-black hover:bg-gray-100 text-left font-medium uppercase transition-colors">Sort by price: high to low</button>
                  </div>
                )}
              </div>
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <span className="text-xl font-medium uppercase tracking-widest">Loading...</span>
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center border-[1px] border-gray-300 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-black mb-4">No Big Sale Right Now</h2>
                <p className="text-base font-medium text-gray-500">Please check back later for awesome deals!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
                {products
                  .filter((product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((product) => {
                    const primaryImg = product.thumbnail ? getImgUrl(product.thumbnail) : "https://via.placeholder.com/600";

                    return (
                      <div key={product.id} className="group block relative bg-transparent transition-transform hover:-translate-y-1 flex flex-col h-full">
                        <Link href={`/main/product/${product.id}`} className="flex flex-col flex-1 pb-0">
                          {/* Square Image */}
                          <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4 rounded-none ">
                            <img
                              src={primaryImg}
                              alt={product.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-90"
                            />
                            {/* FLASH SALE Badge Overlay */}
                            <div className="absolute left-0 bottom-4 bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">
                              FLASH SALE
                            </div>
                          </div>

                          {/* Title */}
                          <div className="flex flex-col flex-1 px-1">
                            <h3 className="text-sm font-medium text-black mb-2 line-clamp-2">
                              {product.title}
                            </h3>

                            {/* Price */}
                            <div className="flex items-center space-x-2 mt-auto mb-2">
                              <span className="text-gray-400 line-through text-xs sm:text-sm font-medium">
                                ৳{product.originalPrice || 0}
                              </span>
                              <span className="text-black font-semibold text-sm sm:text-base">
                                ৳{product.currentPrice || 0}
                              </span>
                            </div>
                          </div>
                        </Link>
                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2 mt-auto px-1">
                          {(() => {
                            const cartItem = items.find((i) => i.id === product.id);
                            if (cartItem) {
                              return (
                                <div className="flex items-center justify-between border-[1px] border-black bg-white w-full">
                                  <button
                                    className="px-4 py-2 font-medium text-lg hover:bg-gray-100 border-r-[1px] border-black transition-colors"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (cartItem.quantity === 1) {
                                        removeFromCart(cartItem.id);
                                      } else {
                                        updateQuantity(cartItem.id, cartItem.quantity - 1);
                                      }
                                    }}
                                  >
                                    <Minus className="w-4 h-4" strokeWidth={2} />
                                  </button>
                                  <span className="font-medium text-base px-2">
                                    {cartItem.quantity}
                                  </span>
                                  <button
                                    className="px-4 py-2 font-medium text-lg hover:bg-gray-100 border-l-[1px] border-black transition-colors"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      updateQuantity(cartItem.id, cartItem.quantity + 1);
                                    }}
                                  >
                                    <Plus className="w-4 h-4" strokeWidth={2} />
                                  </button>
                                </div>
                              );
                            }

                            return (
                              <button
                                className="w-full bg-black text-white text-center text-xs sm:text-sm font-medium py-2.5 uppercase tracking-wide hover:bg-gray-800 transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  addToCart({
                                    id: product.id,
                                    title: product.title,
                                    price: product.currentPrice || product.originalPrice || 0,
                                    image: primaryImg,
                                    quantity: 1,
                                  });
                                  openCart();
                                }}
                              >
                                Add to Cart
                              </button>
                            );
                          })()}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
