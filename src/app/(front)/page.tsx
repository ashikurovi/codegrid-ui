"use client";

import { useEffect, useState } from "react";
import { Banner } from "@/components/landing/banner";
import { Category } from "@/components/landing/category";

import { AllProducts } from "@/components/landing/allproducts";
import { Customer } from "@/components/landing/customer";
import { CampaignModal } from "@/components/landing/campaign-modal";
import { RecentBlog } from "@/components/landing/recentblog";

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const loadingMessages = [
    "Curating your next favorite piece...",
    "Bringing fresh energy to your wardrobe...",
    "Good things take a little style...",
    "Almost there. Your CodeGrid world is loading...",
  ];

  useEffect(() => {
    const completedSections = new Set<string>();
    const handleSectionReady = (event: Event) => {
      const section = (event as CustomEvent<string>).detail;
      completedSections.add(section);
      if (completedSections.size === 5) setIsReady(true);
    };

    window.addEventListener("landing-data-ready", handleSectionReady);
    return () => window.removeEventListener("landing-data-ready", handleSectionReady);
  }, []);

  useEffect(() => {
    if (isReady) return;
    const timer = window.setInterval(() => {
      setMessageIndex((index) => (index + 1) % loadingMessages.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [isReady, loadingMessages.length]);

  return (
    <main className="relative flex min-h-[70vh] flex-1 w-full flex-col items-center justify-start">
      {!isReady && (
        <div className="fixed inset-0 z-[80] flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f9fc] px-6 text-center">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#dbeafe] blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#fce7f3] blur-3xl" />
          <div className="relative flex w-full max-w-md flex-col items-center">
            <div className="relative mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_16px_40px_rgba(30,41,59,0.1)]">
              <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-[#2563eb] border-r-[#ef476f]" />
              <span className="text-xl font-black tracking-[-0.08em] text-[#172033]">CG</span>
            </div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#2563eb]">CodeGrid</p>
            <h1 className="min-h-16 text-2xl font-semibold tracking-tight text-[#172033] transition-opacity duration-500 sm:text-3xl">{loadingMessages[messageIndex]}</h1>
            <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-[#2563eb] to-[#ef476f]" />
            </div>
            <p className="mt-5 text-xs text-slate-400">Loading collections, products and stories</p>
          </div>
        </div>
      )}
      <CampaignModal />
      <Banner />
      <Category />
      <AllProducts />
      <RecentBlog />
      <Customer />
    </main>
  );
}
