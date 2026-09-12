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
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Render Blog Details */}
        {selectedBlog ? (
          <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
              onClick={() => setSelectedBlogId(null)}
              className="group flex items-center w-max bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-black uppercase tracking-widest px-5 py-3 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all mb-10"
            >
              <ArrowLeft className="w-5 h-5 mr-3 font-black" />
              Back to Blogs
            </button>

            <div className="relative w-full aspect-video bg-white mb-12 rounded-none overflow-hidden">
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-4 text-xs font-black text-black uppercase tracking-widest mb-8">
                <span className="flex items-center gap-2 bg-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Calendar className="w-4 h-4" /> {selectedBlog.date}
                </span>
                <span className="flex items-center gap-2 bg-[#3b82f6] text-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <User className="w-4 h-4" /> {selectedBlog.author}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black mb-10 leading-tight uppercase tracking-tighter bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {selectedBlog.title}
              </h1>

              <div className="bg-white border-[4px] border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="prose prose-lg max-w-none text-black font-bold space-y-6 text-base sm:text-lg leading-loose">
                  {selectedBlog.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 flex-wrap bg-white border-[4px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Tag className="w-6 h-6 text-black" />
                <span className="font-black uppercase tracking-widest mr-2">Tags:</span>
                {selectedBlog.tags.map((tag, idx) => (
                  <span key={idx} className="bg-black text-white border-2 border-black text-xs font-black uppercase tracking-widest px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ) : (
          /* Render Blog List Grid */
          <div className="animate-in fade-in duration-500">
            <div className="text-center mb-16 flex flex-col items-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tight mb-6 bg-white border-[4px] border-black inline-block px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                CodeGrid <span className="text-[#3b82f6]">Journal</span>
              </h1>
              <p className="text-black font-bold text-base sm:text-lg max-w-2xl mx-auto bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Dive into the world of modern streetwear, minimalism, and the culture that drives our design philosophy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {blogPosts.map((blog) => (
                <div
                  key={blog.id}
                  className="group flex flex-col cursor-pointer bg-white border-[4px] border-black p-4 sm:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                  onClick={() => setSelectedBlogId(blog.id)}
                >
                  <div className="relative w-full aspect-[4/3] bg-white mb-6 overflow-hidden rounded-none">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2">
                      {blog.tags[0]}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-black text-black uppercase tracking-widest mb-4">
                    <span className="bg-[#3b82f6] text-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{blog.date}</span>
                    <span className="bg-white text-black border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{blog.author}</span>
                  </div>

                  <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-4 group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-black font-bold text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-block bg-black text-white font-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest px-5 py-3 group-hover:bg-[#3b82f6] group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
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
