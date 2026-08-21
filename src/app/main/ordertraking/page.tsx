"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react"; // Using Play for the small triangle

export default function OrderTrackingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center gap-16">

                {/* Track Your Order Section */}
                <div className="w-full max-w-3xl bg-blue-50/50 rounded-none p-8 sm:p-12 shadow-sm border border-blue-100/50">
                    <div className="inline-block bg-[#0066FF]/10 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-none mb-6">
                        ORDER TRACKING
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        Track your order
                    </h1>
                    <p className="text-sm text-gray-600 mb-8">
                        Give your order ID and phone number to view your order details.
                    </p>

                    <form className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            {/* Order ID */}
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-gray-900 mb-2">
                                    Order ID
                                </label>
                                <input
                                    type="text"
                                    placeholder="Order ID without '#' or '#M'"
                                    className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-gray-900 mb-2">
                                    Phone number
                                </label>
                                <div className="flex">
                                    <div className="bg-[#0066FF]/10 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent font-bold text-sm px-4 py-3 rounded-none border border-r-0 border-blue-100/50 flex items-center justify-center">
                                        +88
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="01XXXXXXXXX"
                                        className="flex-1 w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Track Button */}
                        <button
                            type="button"
                            className="w-full bg-gradient-to-br from-[#00A8FF] to-[#0033FF] hover:from-[#0099EE] hover:to-[#0022DD] text-white font-bold py-4 rounded-none transition-all shadow-sm"
                        >
                            Track Order
                        </button>
                    </form>

                    {/* Accordion / Status Meaning */}
                    <div className="mt-6 bg-white rounded-none border border-gray-200 p-4 flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                        <Play className="w-3 h-3 text-gray-800" />
                        <span className="text-sm font-medium text-gray-800">Order status meaning</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-gray-300 rounded-none"></div>

                {/* Custom / Bulk Order Section */}
                <div className="w-full max-w-5xl bg-[#0A1128] rounded-none overflow-hidden flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="relative w-full md:w-5/12 aspect-square md:aspect-auto min-h-[300px]">
                        <Image
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
                            alt="Custom apparel"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
                        <div className="inline-block bg-gradient-to-br from-[#00A8FF] to-[#0033FF] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-none mb-4 self-start">
                            CUSTOM/BULK ORDER
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Create Your Own Way
                        </h2>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
                            Upload your design, add custom text, choose your preferred color, and create custom apparel made just for you or your team.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-4 text-xs font-medium text-white mb-8">
                            <span className="flex items-center gap-1.5">
                                <span className="text-[#00A8FF]">✓</span> Single Order
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-[#00A8FF]">✓</span> Bulk Order
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-[#00A8FF]">✓</span> Front & Back Print
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-[#00A8FF]">✓</span> Best Price
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-gradient-to-br from-[#00A8FF] to-[#0033FF] hover:from-[#0099EE] hover:to-[#0022DD] text-white text-xs font-bold px-6 py-3 rounded-none transition-all shadow-sm">
                                Customize Now
                            </button>
                            <button className="border border-gray-600 hover:border-white text-gray-300 hover:text-white text-xs font-bold px-6 py-3 rounded-none transition-colors">
                                Bulk Order
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
