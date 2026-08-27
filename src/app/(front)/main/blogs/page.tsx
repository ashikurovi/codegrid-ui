"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

// Dummy Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Streetwear in Modern Fashion",
    excerpt: "How underground skate and surf cultures gave rise to a multi-billion dollar global fashion movement that redefined luxury.",
    content: `
      Streetwear was born from the surf and skate cultures of the West Coast and the hip-hop scene in New York. What started as DIY t-shirts and small local brands has now infiltrated high fashion houses around the globe.
      
      The core of streetwear has always been authenticity and community. It's about limited drops, exclusivity, and a strong sense of belonging to a subculture. Today, we see luxury brands collaborating with streetwear pioneers, blurring the lines between high fashion and everyday wear.
      
      At CodeGrid, we embrace this evolution by focusing on raw, bold aesthetics while maintaining the comfort and durability that streetwear demands. The square shapes, sharp edges, and striking blue accents reflect the modern, structured life we lead in the city.
    `,
    image: "https://images.unsplash.com/photo-1523398002811-999aa8fa5848?q=80&w=1000&auto=format&fit=crop",
    author: "Alex Morgan",
    date: "October 12, 2026",
    tags: ["Streetwear", "Fashion History", "Style"],
  },
  {
    id: 2,
    title: "Why Minimalism Will Never Go Out of Style",
    excerpt: "Exploring the power of simplicity in design, and why clean lines and sharp edges communicate confidence better than clutter.",
    content: `
      Minimalism is more than a design trend; it is a philosophy. By stripping away the unnecessary, we allow the essential to shine. In fashion, minimalism translates to clean silhouettes, monochromatic palettes, and a focus on high-quality materials.
      
      There is an inherent confidence in wearing something simple. It doesn't scream for attention, yet it commands it. A well-fitted, plain drop-shoulder t-shirt with sharp, unrounded edges can make a stronger statement than a garment covered in loud graphics.
      
      CodeGrid's design language heavily leans into this minimalist approach. Our strict adherence to the 'rounded-none' aesthetic—where everything from buttons to image borders is a perfect square—is our commitment to structural purity.
    `,
    image: "https://images.unsplash.com/photo-1489987707023-afc82164ef6f?q=80&w=1000&auto=format&fit=crop",
    author: "Jordan Lee",
    date: "September 28, 2026",
    tags: ["Minimalism", "Design", "Aesthetics"],
  },
  {
    id: 3,
    title: "Styling the Perfect Drop Shoulder T-Shirt",
    excerpt: "A comprehensive guide on how to style the oversized, relaxed fit of a drop shoulder tee for various occasions.",
    content: `
      The drop shoulder t-shirt has become a staple in modern wardrobes. Its relaxed, oversized fit provides both unparalleled comfort and a distinctive silhouette that works on almost any body type.
      
      **Casual Day Out:** Pair a solid CodeGrid drop shoulder tee with baggy cargo pants or relaxed-fit jeans. Keep the footwear chunky—think classic skate shoes or modern platform sneakers.
      
      **Layering:** The drop shoulder tee is an excellent layering piece. Throw a structured, boxy jacket over it. The contrast between the relaxed shoulders of the tee and the sharp lines of the jacket creates a highly dynamic look.
      
      **Smart Casual:** Tuck the tee into tailored, wide-leg trousers. Add a minimalist belt and some sleek leather boots. It elevates the casual nature of the t-shirt into something ready for an evening out.
    `,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop",
    author: "Sam Taylor",
    date: "September 15, 2026",
    tags: ["Styling Tips", "Apparel", "Guide"],
  },
  {
    id: 4,
    title: "The Psychology of Color in Apparel",
    excerpt: "How the colors you choose to wear influence your mood and how others perceive you, featuring our signature CodeGrid Blue.",
    content: `
      Color is a powerful communication tool. It can influence mood, convey emotions, and even trigger physiological reactions. In fashion, the colors you choose to wear speak volumes before you even say a word.
      
      **Black and White:** The ultimate contrast. Black conveys power, sophistication, and mystery, while white represents purity, simplicity, and a blank slate. Together, they form the foundation of any modern wardrobe.
      
      **The Power of Blue:** Our signature CodeGrid Blue (#0066FF) is electric, vibrant, and energetic. Unlike deeper navy blues that represent tradition, this bright, almost neon blue represents the future, technology, and unbridled creativity.
      
      Wearing bright accents can instantly elevate your energy levels and draw the eye, making it the perfect highlight color against a monochrome base.
    `,
    image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=1000&auto=format&fit=crop",
    author: "Elena Rossi",
    date: "August 30, 2026",
    tags: ["Color Theory", "Psychology", "Brand"],
  }
];

export default function BlogsPage() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const selectedBlog = blogPosts.find(b => b.id === selectedBlogId);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Render Blog Details */}
        {selectedBlog ? (
          <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => setSelectedBlogId(null)}
              className="group flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blogs
            </button>
            
            <div className="relative w-full aspect-video bg-gray-100 mb-10 rounded-none border border-gray-100 overflow-hidden">
              <Image 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
                <span className="flex items-center gap-1.5 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent">
                  <Calendar className="w-3.5 h-3.5" /> {selectedBlog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {selectedBlog.author}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
                {selectedBlog.title}
              </h1>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed">
                {selectedBlog.content.split('\n').map((paragraph, index) => (
                  paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-3 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                {selectedBlog.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ) : (
          /* Render Blog List Grid */
          <div className="animate-in fade-in duration-500">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 uppercase tracking-tight mb-4">
                CodeGrid <span className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent">Journal</span>
              </h1>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
                Dive into the world of modern streetwear, minimalism, and the culture that drives our design philosophy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {blogPosts.map((blog) => (
                <div 
                  key={blog.id} 
                  className="group flex flex-col cursor-pointer"
                  onClick={() => setSelectedBlogId(blog.id)}
                >
                  <div className="relative w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden rounded-none border border-gray-100">
                    <Image 
                      src={blog.image} 
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-white bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-sm rounded-none">
                      {blog.tags[0]}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    <span className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent">{blog.date}</span>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </div>

                  <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00B4DB] group-hover:to-[#0000FF] group-hover:bg-clip-text group-hover:text-transparent transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-block border-b-2 border-transparent group-hover:border-[#0066FF] text-xs font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#00B4DB] group-hover:to-[#0000FF] group-hover:bg-clip-text group-hover:text-transparent uppercase tracking-widest transition-all pb-1">
                      Read Article
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
