"use client";

import { useEffect, useState } from "react";
import { Banner } from "@/components/landing/banner";
import { Category } from "@/components/landing/category";

import { AllProducts } from "@/components/landing/allproducts";
import { Customer } from "@/components/landing/customer";
import { CampaignModal } from "@/components/landing/campaign-modal";
import { RecentBlog } from "@/components/landing/recentblog";

import { DeveloperLifecycle } from "@/components/landing/DeveloperLifecycle";

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const loadingMessages = [
    "Curating your next favorite look...",
    "Preparing a fresh drop for your vibe...",
    "A little more styling magic...",
    "Almost ready for your CodeGrid moment...",
  ];

  useEffect(() => {
    const completedSections = new Set<string>();
    const handleSectionReady = (event: Event) => {
      const section = (event as CustomEvent<string>).detail;
      if (!section) return;
      completedSections.add(section);
      if (completedSections.size >= 4) setIsReady(true);
    };

    window.addEventListener("landing-data-ready", handleSectionReady);
    const fallbackTimer = window.setTimeout(() => setIsReady(true), 2400);

    return () => {
      window.removeEventListener("landing-data-ready", handleSectionReady);
      window.clearTimeout(fallbackTimer);
    };
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
        <div className="fixed inset-0 z-[80] flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f4f7fb_38%,_#eef3f8_100%)] px-6 text-center backdrop-blur-[2px] transition-opacity duration-700">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#dbeafe]/80 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#fce7f3]/80 blur-3xl" />
          <div className="relative flex w-full max-w-md flex-col items-center">
            <div className="relative mb-9 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="absolute inset-2 animate-[spin_2.7s_linear_infinite] rounded-full border-[1.5px] border-transparent border-t-slate-700 border-r-[#2563eb]" />
              <div className="absolute inset-4 rounded-full border border-slate-100" />
              <span className="relative text-lg font-black tracking-[-0.08em] text-[#172033]">CG</span>
            </div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">CodeGrid</p>
            <h1 className="min-h-14 max-w-sm text-xl font-medium tracking-[-0.04em] text-[#172033] transition-all duration-500 sm:text-2xl">{loadingMessages[messageIndex]}</h1>
            <div className="mt-7 h-1.5 w-56 overflow-hidden rounded-full bg-slate-200/80">
              <div className="h-full w-1/2 animate-[loading_2.4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-slate-800 via-[#2563eb] to-[#ef476f] opacity-90" />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-slate-400">Loading the Story</p>
          </div>
        </div>
      )}
      <CampaignModal />
      <Banner />
      <Category />
      <AllProducts />
      <DeveloperLifecycle />
      <RecentBlog />
      <Customer />
    </main>
  );
}
