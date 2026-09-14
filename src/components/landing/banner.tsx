"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllBanners } from "@/api/bannerApi";

export function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [banners, setBanners] = useState<any[]>([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const res = await getAllBanners();
                if (res.data) {
                    const activeBanners = res.data.filter((b: any) => b.status === "Active" || !b.status);
                    activeBanners.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
                    setBanners(activeBanners);
                }
            } catch (e) {
                console.error("Failed to fetch banners", e);
            }
        };
        fetchBanners();
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            banners.length === 0 ? 0 : prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
    }, [banners.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            banners.length === 0 ? 0 : prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (!isHovered && banners.length > 0) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000); // Auto slide every 3 seconds
            return () => clearInterval(interval);
        }
    }, [isHovered, nextSlide, banners.length]);

    const getImgUrl = (url: string) => {
        if (!url) return "";
        if (url.startsWith('http')) return url;
        return `https://codegrid-api.vercel.app${url.startsWith('/') ? '' : '/'}${url}`;
    };

    if (banners.length === 0) {
        return null; // Or a loading skeleton
    }

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
                            className="relative flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] h-[500px] sm:h-[600px] lg:h-[550px] rounded-none overflow-hidden group bg-white transition-transform"
                        >
                            <img
                                src={getImgUrl(banner.image)}
                                alt={banner.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-end justify-center pb-12 sm:pb-16 lg:pb-20">
                                <Link
                                    href={banner.link}
                                    className="inline-flex items-center justify-center px-8 py-4 w-48 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full"
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center text-black border-[1px] border-black hover:bg-black hover:text-white transition-colors z-10 hidden sm:flex"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center text-black border-[1px] border-black hover:bg-black hover:text-white transition-colors z-10 hidden sm:flex"
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
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                            ? "bg-black w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
