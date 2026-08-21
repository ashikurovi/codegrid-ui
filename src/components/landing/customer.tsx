"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const customers = [
  { id: 1, name: "Tanmoy Cartoons, Artist", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Arfan Mredha Shiblu, Bachelor Point", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Hasin Aryan, Firoze Jong(Music Band)", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Mahim Azad Prem, Content Creator", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Ayman Sadiq, Educator", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Tawhid Afridi, Vlogger", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" },
];

export function Customer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-wide uppercase mb-3">
          SEEN WEARING CODEGRID
        </h2>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
          They trusted <span className="font-bold bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent">CodeGrid</span>; because they believe in what&apos;s{" "}
          <span className="font-bold">real, bold, and built with pride</span>. Now it&apos;s your turn to wear yours.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent rounded-none shadow-md transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="min-w-[280px] sm:min-w-[300px] flex-shrink-0 snap-start flex flex-col items-center"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 shadow-sm bg-gray-100">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 300px"
                />
              </div>
              {/* Name */}
              <p className="text-sm font-medium text-gray-800 text-center px-2">
                {customer.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent rounded-none shadow-md transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-2">
        {customers.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-none ${idx === 0 ? "bg-[#0066FF]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
