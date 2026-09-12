"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
    {
        id: 1,
        title: "YOUR DESIGN HERE",
        subtitle: "CUSTOMIZED YOUR T-SHIRT",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "#DEARAAZ",
    },
    {
        id: 2,
        title: "Casual in Confidence",
        subtitle: "ORDER HERE",
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "",
    },
    {
        id: 3,
        title: "Deshi Collection",
        subtitle: "for Deshi People",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "",
    },
    {
        id: 4,
        title: "Winter Collection",
        subtitle: "STAY WARM",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "NEW",
    },
    {
        id: 5,
        title: "Summer Vibes",
        subtitle: "COOL STUFF",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
        link: "#",
        tag: "HOT",
    },
];

export function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // We show 1 slide on mobile, 2 on tablet, 3 on desktop
    // For simplicity in this logic, we'll shift by 1 item at a time.
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000); // Auto slide every 3 seconds
            return () => clearInterval(interval);
        }
    }, [isHovered, nextSlide]);

    return (
        <div
            className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slider Container */}
            <div className="relative w-full">
                <div
                    className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
                    style={{
                        // Adjust the transform based on how many items we want to show.
                        // Using percentages is tricky with gaps, so we use calc.
                        // Mobile: 100%, Tablet: 50%, Desktop: 33.333% (approx)
                        transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1}rem))`,
                    }}
                >
                    {banners.map((banner) => (
                        <div
                            key={banner.id}
                            className="relative flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] h-[500px] sm:h-[600px] lg:h-[550px] rounded-none overflow-hidden group border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <Image
                                src={banner.image}
                                alt={banner.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                                {banner.tag && (
                                    <span className="bg-[#3b82f6] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 py-1 w-max text-xs font-black tracking-widest mb-4 uppercase">
                                        {banner.tag}
                                    </span>
                                )}
                                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                                    {banner.title}
                                </h2>
                                <Link
                                    href={banner.link}
                                    className="inline-flex items-center justify-center bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none hover:bg-[#3b82f6] hover:text-white px-6 py-3 w-max text-xs sm:text-sm font-black tracking-wide uppercase transition-all"
                                >
                                    {banner.subtitle}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white transition-all z-10 hidden sm:flex active:translate-y-1 active:translate-x-1 active:shadow-none"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white transition-all z-10 hidden sm:flex active:translate-y-1 active:translate-x-1 active:shadow-none"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center space-x-2 mt-6">
                {banners.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-none transition-all duration-300 ${currentIndex === idx
                            ? "bg-[#0A1128] w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
