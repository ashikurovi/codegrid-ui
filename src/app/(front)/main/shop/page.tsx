"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { getAllProducts } from "@/api/productApi";
import { getAllCategories } from "@/api/categoryApi";

export default function ShopPage() {
  const { items, addToCart, updateQuantity, removeFromCart, openCart } = useCartStore();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [prodRes, catRes] = await Promise.all([
          getAllProducts(),
          getAllCategories()
        ]);

        if (prodRes.data) {
          setProducts(prodRes.data);
        }

        if (catRes.data) {
          setCategories(catRes.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = (product.title || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.categoryId === parseInt(selectedCategory) || product.category?.id === parseInt(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Main Container */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Huge Shop Title */}
        <div className="w-full py-6 md:py-10 mb-8 border-b-[1px] border-black">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center text-black uppercase tracking-tight">Shop</h1>
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
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
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === null}
                      onChange={() => setSelectedCategory(null)}
                      className="w-4 h-4 text-black focus:ring-black border-[1px] border-black rounded-none checked:bg-black"
                    />
                    <span className="text-sm font-medium uppercase transition-colors text-black">
                      All Products
                    </span>
                  </div>
                  <span className="text-xs px-2 py-0.5 border-[1px] border-black font-medium bg-white text-black">
                    {products.length}
                  </span>
                </label>

                {categories.map((cat: any) => {
                  const count = products.filter(p => p.categoryId === cat.id || p.category?.id === cat.id).length;
                  return (
                    <label
                      key={cat.id}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="category"
                          value={cat.id.toString()}
                          checked={selectedCategory === cat.id.toString()}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-black focus:ring-black border-[1px] border-black rounded-none checked:bg-black"
                        />
                        <span className="text-sm font-medium uppercase transition-colors text-black">
                          {cat.name}
                        </span>
                      </div>
                      <span className="text-xs px-2 py-0.5 border-[1px] border-black font-medium bg-white text-black">
                        {count}
                      </span>
                    </label>
                  );
                })}
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
                <span className="text-black font-bold">Shop</span>
              </div>

              <button className="text-xs font-medium uppercase tracking-widest flex items-center gap-2 text-black bg-white border-[1px] border-black px-4 py-2 hover:bg-gray-50 transition-all">
                SORT BY POPULARITY <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="text-center py-10 font-medium uppercase">Loading products...</div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-10 font-medium uppercase">No products found.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
                {filteredProducts.map((product) => {
                  let imgUrl = product.thumbnail;
                  if (!imgUrl && product.images) {
                    if (Array.isArray(product.images) && product.images.length > 0) {
                      imgUrl = product.images[0];
                    } else if (typeof product.images === 'string') {
                      try {
                        const parsed = JSON.parse(product.images);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                          imgUrl = parsed[0];
                        }
                      } catch (e) {
                        // fallback
                      }
                    }
                  }

                  if (imgUrl && !imgUrl.startsWith('http')) {
                    imgUrl = `https://codegrid-api.vercel.app${imgUrl.startsWith('/') ? '' : '/'}${imgUrl}`;
                  }

                  return (
                    <div key={product.id} className="group block relative bg-transparent transition-transform hover:-translate-y-1 flex flex-col h-full">
                      <Link href={`/main/product/${product.id}`} className="flex flex-col flex-1 pb-0">
                        {/* Square Image */}
                        <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4 rounded-none">
                          {imgUrl ? (
                            <img
                              src={imgUrl}
                              alt={product.title || "Product image"}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-90"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center font-medium text-gray-400">NO IMAGE</div>
                          )}
                        </div>

                        {/* Title */}
                        <div className="flex flex-col flex-1 px-1">
                          <h3 className="text-sm font-medium text-black mb-2 line-clamp-2">
                            {product.title}
                          </h3>

                          {/* Tags / Badges */}
                          <div className="flex flex-wrap gap-2 mb-2 min-h-[24px]">
                            {product.stock > 0 ? (
                              <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-none uppercase">
                                In Stock
                              </span>
                            ) : (
                              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-none uppercase">
                                Out of Stock
                              </span>
                            )}
                          </div>

                          {/* Price */}
                          <div className="flex items-center space-x-2 mt-auto mb-2">
                            {Number(product.originalPrice) > Number(product.currentPrice) && (
                              <span className="text-gray-400 line-through text-xs sm:text-sm font-medium">
                                ৳{product.originalPrice}
                              </span>
                            )}
                            <span className="text-black font-semibold text-sm sm:text-base">
                              ৳{product.currentPrice || product.originalPrice}
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
                                  disabled={cartItem.quantity >= product.stock}
                                >
                                  <Plus className="w-4 h-4" strokeWidth={2} />
                                </button>
                              </div>
                            );
                          }

                          return (
                            <button
                              className="w-full bg-black text-white text-center text-xs sm:text-sm font-medium py-2.5 uppercase tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={product.stock <= 0}
                              onClick={(e) => {
                                e.preventDefault();
                                if (product.stock <= 0) return;
                                addToCart({
                                  id: product.id,
                                  title: product.title,
                                  price: Number(product.currentPrice) || Number(product.originalPrice) || 0,
                                  image: imgUrl || "",
                                  quantity: 1,
                                });
                                openCart();
                              }}
                            >
                              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
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
