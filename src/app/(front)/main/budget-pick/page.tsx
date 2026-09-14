"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { getAllBudgetPicks } from "@/api/buget-pickApi";
import { getAllCategories } from "@/api/categoryApi";



export default function BudgetPickPage() {
  const { items, addToCart, updateQuantity, removeFromCart, openCart } = useCartStore();
  const [budgetProducts, setBudgetProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const getImgUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith('http')) return url;
    return `https://codegrid-api.vercel.app${url.startsWith('/') ? '' : '/'}${url}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [budgetRes, catRes] = await Promise.all([
          getAllBudgetPicks(),
          getAllCategories()
        ]);

        if (budgetRes) {
          const activePicks = budgetRes.filter((p: any) => p.isActive);
          setBudgetProducts(activePicks);
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

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Main Container */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Huge Title */}
        <div className="w-full py-6 md:py-10 mb-8 border-b-[1px] border-black">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold text-center text-black uppercase tracking-tight">Budget Pick</h1>
          <p className="text-center text-gray-600 font-medium text-sm sm:text-base mt-4 max-w-2xl mx-auto py-2">
            Get more for less. Explore our best-selling bundles, 2-piece, and 3-piece packages at discounted prices.
          </p>
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
                  placeholder="Search packages..."
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
                <span className="text-black font-bold">Budget Pick</span>
              </div>

              <button className="text-xs font-medium uppercase tracking-widest flex items-center gap-2 text-black bg-white border-[1px] border-black px-4 py-2 hover:bg-gray-50 transition-all">
                SORT BY POPULARITY <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
              </div>
            ) : budgetProducts.length === 0 ? (
              <div className="text-center py-20 border-[1px] border-black bg-white">
                <h3 className="text-2xl font-bold uppercase mb-2">No Budget Picks Found</h3>
                <p className="text-gray-500 font-medium">Currently, there are no active budget pick packages available.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
                {budgetProducts
                  .filter((product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((product) => (
                    <div key={product.id} className="group block relative bg-transparent transition-transform hover:-translate-y-1 flex flex-col h-full">
                      <Link href={`/main/budget-pick/${product.id}`} className="flex flex-col flex-1 pb-0">
                        {/* Square Image */}
                        <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4 rounded-none ">
                          <img
                            src={getImgUrl(product.image)}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-90"
                          />
                        </div>

                        {/* Title */}
                        <div className="flex flex-col flex-1 px-1">
                          <h3 className="text-sm font-medium text-black mb-2 line-clamp-2">
                            {product.title}
                          </h3>

                          {/* Price */}
                          <div className="flex items-center space-x-2 mt-auto mb-2">
                            <span className="text-black font-semibold text-sm sm:text-base">
                              ৳{product.packagePrice}
                            </span>
                          </div>
                        </div>
                      </Link>
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2 mt-auto px-1">
                        {(() => {
                          const cartItem = items.find((i) => i.id === `bp_${product.id}`);
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
                                  id: `bp_${product.id}`,
                                  title: product.title,
                                  price: product.packagePrice,
                                  image: product.image,
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
                  ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
