"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recentBlogs = [
  {
    id: 1,
    title: "How to Style Drop Shoulder Tees for Winter",
    excerpt: "Discover the best ways to layer your favorite drop shoulder t-shirts to stay warm and stylish this winter season.",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    link: "/main/blogs/1",
  },
  {
    id: 2,
    title: "The Rise of Streetwear in Bangladesh",
    excerpt: "Exploring how local brands are reshaping the fashion landscape and bringing global streetwear trends to the streets of Dhaka.",
    date: "Feb 02, 2026",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
    link: "/main/blogs/2",
  },
  {
    id: 3,
    title: "Understanding Fabric: What Makes a Good T-Shirt?",
    excerpt: "From GSM to cotton blends, we break down everything you need to know to choose a t-shirt that lasts longer and feels better.",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    link: "/main/blogs/3",
  },
];

export function RecentBlog() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-wide uppercase">
          LATEST FROM THE BLOG
        </h2>
        <Link 
          href="/main/blogs" 
          className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-[#00B4DB] transition-colors flex items-center gap-2"
        >
          VIEW ALL <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {recentBlogs.map((blog, index) => (
          <Link 
            key={blog.id} 
            href={blog.link} 
            className={`group flex flex-col block ${
              index === 0 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
            }`}
          >
            {/* Image Container */}
            <div 
              className={`relative bg-gray-100 overflow-hidden mb-5 rounded-none ${
                index === 0 ? "aspect-video md:aspect-[2/1] lg:aspect-[16/9]" : "aspect-video lg:aspect-[4/3]"
              }`}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">
                {blog.date}
              </span>
              <h3 
                className={`font-bold text-gray-900 mb-3 group-hover:text-[#00B4DB] transition-colors leading-tight ${
                  index === 0 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl line-clamp-2"
                }`}
              >
                {blog.title}
              </h3>
              <p 
                className={`text-gray-600 flex-1 mb-4 ${
                  index === 0 ? "text-base sm:text-lg line-clamp-3" : "text-sm line-clamp-2"
                }`}
              >
                {blog.excerpt}
              </p>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0066FF] flex items-center gap-1 group-hover:gap-2 transition-all">
                READ MORE <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
