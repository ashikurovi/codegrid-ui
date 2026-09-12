"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react"; // Using Play for the small triangle

export default function OrderTrackingPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center gap-16">

                {/* Track Your Order Section */}
                <div className="w-full max-w-3xl bg-white border-[4px] border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 border-[2px] border-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        ORDER TRACKING
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter">
                        Track your order
                    </h1>
                    <p className="text-sm font-bold text-black mb-8">
                        Give your order ID and phone number to view your order details.
                    </p>

                    <form className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-8">
                            {/* Order ID */}
                            <div className="flex-1">
                                <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">
                                    Order ID
                                </label>
                                <input
                                    type="text"
                                    placeholder="Order ID without '#' or '#M'"
                                    className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="flex-1">
                                <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">
                                    Phone number
                                </label>
                                <div className="flex">
                                    <div className="bg-white border-[3px] border-r-0 border-black px-5 flex items-center justify-center font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
                                        +88
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="01XXXXXXXXX"
                                        className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500 relative -ml-[3px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Track Button */}
                        <div className="pt-4">
                            <button
                                type="button"
                                className="w-full bg-[#3b82f6] text-white font-black text-lg uppercase tracking-widest py-5 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            >
                                Track Order
                            </button>
                        </div>
                    </form>

                    {/* Accordion / Status Meaning */}
                    <div className="mt-8 bg-white border-[3px] border-black p-5 flex items-center gap-3 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group">
                        <Play className="w-5 h-5 text-black group-hover:text-[#3b82f6] transition-colors" />
                        <span className="text-sm font-black uppercase tracking-widest text-black">Order status meaning</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-24 h-[4px] bg-black"></div>

                {/* Custom / Bulk Order Section */}
                <div className="w-full max-w-5xl bg-[#3b82f6] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="relative w-full md:w-5/12 aspect-square md:aspect-auto min-h-[300px] bg-white">
                        <Image
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
                            alt="Custom apparel"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
                        <div className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 border-[2px] border-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start">
                            CUSTOM/BULK ORDER
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter">
                            Create Your Own Way
                        </h2>
                        <p className="text-sm font-bold text-black mb-8 leading-relaxed max-w-md">
                            Upload your design, add custom text, choose your preferred color, and create custom apparel made just for you or your team.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-4 text-xs font-black text-black uppercase tracking-widest mb-10">
                            <span className="flex items-center gap-2 bg-white border-[2px] border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-[#3b82f6] text-lg">✓</span> Single Order
                            </span>
                            <span className="flex items-center gap-2 bg-white border-[2px] border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-[#3b82f6] text-lg">✓</span> Bulk Order
                            </span>
                            <span className="flex items-center gap-2 bg-white border-[2px] border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-[#3b82f6] text-lg">✓</span> Front & Back Print
                            </span>
                            <span className="flex items-center gap-2 bg-white border-[2px] border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-[#3b82f6] text-lg">✓</span> Best Price
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-6">
                            <button className="bg-white text-black font-black uppercase tracking-widest px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                                Customize Now
                            </button>
                            <button className="bg-black text-white font-black uppercase tracking-widest px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                                Bulk Order
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
