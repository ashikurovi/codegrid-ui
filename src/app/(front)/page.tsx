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
        <div className="fixed inset-0 z-[80] flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f4f7fb_38%,_#eef3f8_100%)] px-4 py-10 backdrop-blur-[2px] transition-opacity duration-700 sm:px-6">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#dbeafe]/80 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#fce7f3]/80 blur-3xl" />

          <div className="relative w-full max-w-6xl animate-pulse">
            <div className="mb-6 flex items-center justify-between">
              <div className="h-5 w-28 rounded bg-slate-200" />
              <div className="h-5 w-24 rounded bg-slate-200" />
            </div>

            <div className="mb-8 h-72 w-full rounded-[28px] bg-slate-200" />

            <div className="mb-8 grid gap-4 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-28 rounded-[20px] bg-slate-200" />
              ))}
            </div>

            <div className="mb-6 flex items-center justify-between">
              <div className="h-8 w-36 rounded bg-slate-200" />
              <div className="h-8 w-24 rounded bg-slate-200" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-3">
                  <div className="h-56 rounded-[22px] bg-slate-200" />
                  <div className="h-4 w-3/4 rounded bg-slate-200" />
                  <div className="h-4 w-1/2 rounded bg-slate-200" />
                </div>
              ))}
            </div>

            <div className="mb-6 h-8 w-32 rounded bg-slate-200" />
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="space-y-3">
                  <div className="h-44 rounded-[22px] bg-slate-200" />
                  <div className="h-4 w-2/3 rounded bg-slate-200" />
                  <div className="h-4 w-1/3 rounded bg-slate-200" />
                </div>
              ))}
            </div>
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
