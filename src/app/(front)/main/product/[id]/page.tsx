"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { ChevronRight, ShieldCheck, RefreshCw, Lock, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { getProductById, getAllProducts } from "@/api/productApi";
import { getAllBudgetPicks } from "@/api/buget-pickApi";

export default function ProductDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [budgetPicks, setBudgetPicks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const { items, addToCart, updateQuantity, removeFromCart, openCart } = useCartStore();

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductById(id);
        if (res.data) {
          setProduct(res.data);
          if (res.data.sizes && res.data.sizes.length > 0) {
            setSelectedSize(res.data.sizes[0].name);
          }
          if (res.data.types && res.data.types.length > 0) {
            setSelectedType(res.data.types[0].name);
          }

          // Fetch related products from the same category
          if (res.data.category?.id) {
            const allRes = await getAllProducts();
            if (allRes.data) {
              const filtered = allRes.data.filter(
                (p: any) => p.category?.id === res.data.category.id && String(p.id) !== String(res.data.id)
              ).slice(0, 4);
              setRelatedProducts(filtered);
            }
          }

          // Fetch budget picks
          try {
            const budgetRes = await getAllBudgetPicks();
            if (budgetRes.data) {
              setBudgetPicks(budgetRes.data);
            }
          } catch (e) {
            console.error("Failed to fetch budget picks:", e);
          }
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:w-20 sm:flex-col sm:gap-3 sm:overflow-visible">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-20 w-20 flex-shrink-0 animate-pulse rounded-sm bg-slate-200 sm:h-20 sm:w-full" />
                ))}
              </div>
              <div className="order-1 h-80 w-full animate-pulse rounded-md bg-slate-200 sm:h-[520px] sm:flex-1" />
            </div>
          </div>

          <div className="space-y-5 pt-1 sm:space-y-6 sm:pt-2">
            <div className="h-4 w-24 animate-pulse rounded bg-slate-200 sm:w-28" />
            <div className="h-9 w-3/4 animate-pulse rounded bg-slate-200 sm:h-12" />
            <div className="h-7 w-28 animate-pulse rounded bg-slate-200 sm:h-8 sm:w-32" />
            <div className="space-y-3">
              <div className="h-3 w-full animate-pulse rounded bg-slate-200 sm:h-4" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200 sm:h-4" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-slate-200 sm:h-4" />
            </div>
            <div className="grid grid-cols-4 gap-2 pt-2 sm:gap-3 sm:pt-3">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-10 animate-pulse rounded border border-slate-200 bg-slate-100 sm:h-12" />
              ))}
            </div>
            <div className="space-y-3 pt-3 sm:pt-4">
              <div className="h-3 w-20 animate-pulse rounded bg-slate-200 sm:h-4 sm:w-24" />
              <div className="h-11 w-full animate-pulse rounded bg-slate-200 sm:h-12" />
              <div className="h-11 w-full animate-pulse rounded bg-slate-200 sm:h-12" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-20 font-black uppercase text-xl text-red-500">Product not found!</div>;
  }

  // Parse images if needed
  let images = [];
  if (product.images) {
    if (Array.isArray(product.images)) {
      images = product.images;
    } else if (typeof product.images === 'string') {
      try {
        images = JSON.parse(product.images);
      } catch (e) {
        // fallback
      }
    }
  }

  if (images.length === 0 && product.thumbnail) {
    images = [product.thumbnail];
  }

  // Helper for image URLs
  const getImgUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith('http')) return url;
    return `https://codegrid-api.vercel.app${url.startsWith('/') ? '' : '/'}${url}`;
  };

  const productImages = images.map(getImgUrl);
  const mainImage = productImages.length > 0 ? productImages[activeImage] || productImages[0] : "";
  const features = product.features || [];
  const sizes = product.sizes || [];
  const types = product.types || [];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-black">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column: Images & Tabs */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* Image Gallery */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 order-2 sm:order-1 overflow-x-auto sm:overflow-visible">
              {productImages.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 border-[1px] transition-colors bg-gray-100 ${activeImage === idx ? "border-black" : "border-transparent hover:border-gray-300"
                    }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] bg-gray-100 order-1 sm:order-2">
              {mainImage ? (
                <img src={mainImage} alt={product.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-medium text-gray-400">No Image</div>
              )}
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-4">
            <div className="flex gap-6 border-b-[1px] border-gray-200 pb-3">
              {["DESCRIPTION", "ADDITIONAL INFORMATION", "REVIEWS"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors relative ${activeTab === tab ? "text-black" : "text-gray-400 hover:text-black"
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute -bottom-[13px] left-0 w-full h-[1px] bg-black"></span>
                  )}
                </button>
              ))}
            </div>
            <div className="py-6 text-sm text-gray-700 font-medium leading-relaxed space-y-4">
              {activeTab === "DESCRIPTION" && (
                <div dangerouslySetInnerHTML={{ __html: product.description || "No description available." }} />
              )}
              {activeTab === "ADDITIONAL INFORMATION" && (
                <div dangerouslySetInnerHTML={{ __html: product.additionalInfo || "No additional info available." }} />
              )}
              {activeTab === "REVIEWS" && (
                <p className="italic text-gray-400">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-widest mb-6 space-x-2">
            <Link href="/" className="hover:text-black transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/main/shop" className="hover:text-black transition-colors">SHOP</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-black truncate max-w-[150px] sm:max-w-none">{product.category?.name || "Product"}</span>
          </nav>

          {/* Variant Label */}
          {product.variantLabel && (
            <div className="mb-4">
              <span className="bg-gray-100 text-black text-[10px] sm:text-xs font-semibold px-3 py-1 uppercase tracking-widest">
                {product.variantLabel}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight uppercase tracking-tight text-black">{product.title}</h1>

          {/* Price */}
          <div className="flex items-end space-x-4 mb-8">
            <span className="text-black font-semibold text-3xl">৳{product.currentPrice || product.originalPrice}</span>
            {Number(product.originalPrice) > Number(product.currentPrice) && (
              <span className="text-gray-400 line-through text-lg font-medium mb-1">৳{product.originalPrice}</span>
            )}
          </div>

          {/* Short Description Features */}
          {features.length > 0 && (
            <ul className="list-disc pl-5 text-sm font-medium text-gray-700 mb-6 space-y-2">
              {features.map((feat: string, i: number) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          )}

          <button className="text-gray-500 hover:text-black underline text-xs font-semibold uppercase mb-8 self-start transition-colors">
            Size Chart
          </button>

          {/* Size Selector */}
          {sizes.length > 0 && (
            <div className="mb-6">
              <span className="block text-sm font-semibold text-black mb-3 uppercase tracking-widest">Size</span>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size: any) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.name)}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-semibold border-[1px] transition-colors uppercase ${selectedSize === size.name
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-gray-300 hover:border-black"
                      }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Type Selector */}
          {types.length > 0 && (
            <div className="mb-10">
              <span className="block text-sm font-semibold text-black mb-3 uppercase tracking-widest">Type</span>
              <div className="flex flex-wrap gap-3">
                {types.map((type: any) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.name)}
                    className={`px-6 py-3 text-sm font-semibold uppercase border-[1px] transition-colors ${selectedType === type.name
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-gray-300 hover:border-black"
                      }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-10">
            {(() => {
              const cartItem = items.find((i) => i.id === product.id);
              if (cartItem) {
                return (
                  <div className="flex items-center justify-between border-[1px] border-black bg-transparent w-full">
                    <button
                      className="px-6 py-4 font-medium text-xl hover:bg-gray-100 border-r-[1px] border-black transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        if (cartItem.quantity === 1) {
                          removeFromCart(cartItem.id);
                        } else {
                          updateQuantity(cartItem.id, cartItem.quantity - 1);
                        }
                      }}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="font-semibold text-lg px-4">
                      {cartItem.quantity}
                    </span>
                    <button
                      className="px-6 py-4 font-medium text-xl hover:bg-gray-100 border-l-[1px] border-black transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        updateQuantity(cartItem.id, cartItem.quantity + 1);
                      }}
                      disabled={cartItem.quantity >= product.stock}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                );
              }

              return (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (product.stock <= 0) return;
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.currentPrice || product.originalPrice,
                      image: mainImage,
                      quantity: 1,
                    });
                    openCart();
                  }}
                  disabled={product.stock <= 0}
                  className="w-full bg-transparent text-black font-semibold uppercase tracking-widest py-4 border-[1px] border-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              );
            })()}
            <button
              onClick={() => {
                if (product.stock <= 0) return;
                const cartItem = items.find((i) => i.id === product.id);
                if (!cartItem) {
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.currentPrice || product.originalPrice,
                    image: mainImage,
                    quantity: 1,
                  });
                }
                router.push("/main/checkout");
              }}
              disabled={product.stock <= 0}
              className="w-full bg-black text-white font-semibold uppercase tracking-widest py-4 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Buy Now
            </button>
          </div>

          {/* Shipping & Trust Info */}
          <div className="space-y-3 text-sm text-gray-700 mb-8 font-medium bg-gray-50 p-5 rounded-sm">
            <p className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-green-600" /> Nationwide Delivery via Pathao Courier
            </p>
            <p className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-green-600" /> Fast and Reliable Delivery
            </p>
            <p className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-green-600" /> Trusted by 100,000+ Customers
            </p>
          </div>

          {/* Value Props Box */}
          <div className="grid grid-cols-3 divide-x-[1px] divide-gray-200 mb-12 border-y-[1px] border-gray-200 py-4">
            <div className="flex flex-col items-center justify-center p-2 text-center gap-2 text-black">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              <div className="text-[10px] font-semibold uppercase">AAZ Guarantee<br /><span className="text-gray-500 font-medium">Quality Trust</span></div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center gap-2 text-black">
              <RefreshCw className="w-5 h-5 text-gray-400" />
              <div className="text-[10px] font-semibold uppercase">Easy Exchange<br /><span className="text-gray-500 font-medium">Free Returns</span></div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center gap-2 text-black">
              <Lock className="w-5 h-5 text-gray-400" />
              <div className="text-[10px] font-semibold uppercase">Secure Pay<br /><span className="text-gray-500 font-medium">Trusted E-Com</span></div>
            </div>
          </div>

          {/* Most Wanted Section */}
          {relatedProducts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b-[1px] border-gray-200 pb-3 text-black">
                Most Wanted in this category
              </h3>
              <div className="flex flex-col gap-4">
                {relatedProducts.map((rp) => {
                  let rpImgUrl = rp.thumbnail;
                  if (!rpImgUrl && rp.images) {
                    if (Array.isArray(rp.images) && rp.images.length > 0) {
                      rpImgUrl = rp.images[0];
                    } else if (typeof rp.images === 'string') {
                      try {
                        const parsed = JSON.parse(rp.images);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                          rpImgUrl = parsed[0];
                        }
                      } catch (e) { }
                    }
                  }
                  rpImgUrl = getImgUrl(rpImgUrl);

                  return (
                    <div key={rp.id} className="group flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-[1px] border-transparent hover:border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-14 overflow-hidden bg-gray-100">
                          {rpImgUrl ? (
                            <img src={rpImgUrl} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[8px] font-medium text-gray-400">NO IMG</div>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-semibold text-black uppercase truncate max-w-[140px] sm:max-w-[200px] group-hover:text-gray-600 transition-colors">
                            {rp.title}
                          </span>
                          <span className="text-xs font-medium text-gray-600 mt-1">৳{rp.currentPrice || rp.originalPrice}</span>
                        </div>
                      </div>
                      <Link href={`/main/product/${rp.id}`} className="text-xs font-semibold text-black uppercase tracking-widest hover:text-gray-500 transition-colors">
                        View
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Offers & More */}
          {budgetPicks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b-[1px] border-gray-200 pb-3 flex items-center gap-2 text-black">
                Offers & More
              </h3>
              <div className="space-y-3">
                {budgetPicks.map((bp) => (
                  <div key={bp.id} className="flex items-center justify-between text-xs sm:text-sm border-[1px] border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
                    <span className="font-medium text-black uppercase">{bp.title}</span>
                    <span className="bg-gray-100 text-black px-3 py-1 font-semibold text-[10px] tracking-widest uppercase">
                      ৳{bp.packagePrice}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-medium text-gray-400 mt-4 text-center uppercase tracking-wide">
                (Items added to cart must exactly equal the conditions of offer / target tk.)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
