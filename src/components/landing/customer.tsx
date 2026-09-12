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
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-wide uppercase mb-4">
          SEEN WEARING CODEGRID
        </h2>
        <p className="text-base sm:text-lg text-black font-bold max-w-3xl mx-auto px-4">
          They trusted <span className="font-black text-white bg-[#3b82f6] border-2 border-black px-1.5 py-0.5 mx-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">CodeGrid</span> because they believe in what&apos;s{" "}
          <span className="font-black text-white bg-black border-2 border-black px-1.5 py-0.5 mx-1 uppercase">real, bold, and built with pride</span>. Now it&apos;s your turn to wear yours.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center rounded-none"
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
              className="min-w-[280px] sm:min-w-[300px] flex-shrink-0 snap-start flex flex-col items-center bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform mb-2"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden border-b-[3px] border-black rounded-none">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 300px"
                />
              </div>
              {/* Name */}
              <div className="w-full p-4 bg-white text-center">
                <p className="text-sm sm:text-base font-black text-black uppercase">
                  {customer.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center rounded-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {customers.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-none border-[1px] border-black ${idx === 0 ? "bg-[#3b82f6] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] scale-110" : "bg-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"}`}
          />
        ))}
      </div>
    </section>
  );
}
