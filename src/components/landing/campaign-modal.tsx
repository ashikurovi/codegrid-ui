"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { getAllCampaignNotices } from '@/api/campaignApi';

export function CampaignModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [campaign, setCampaign] = useState<any>(null);

  const getImgUrl = (url: string) => {
    if (!url) return "";
    return url;
  };

  useEffect(() => {
    // Only fetch if we haven't shown it yet this session
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('hasShownCampaignModal')) {
        window.dispatchEvent(new CustomEvent("landing-data-ready", { detail: "campaign" }));
        return;
      }
    }

    getAllCampaignNotices()
      .then(res => {
        if (res.data && res.data.length > 0) {
          // Find the first active campaign
          const activeCampaign = res.data.find((c: any) => c.isActive);
          if (activeCampaign) {
            setCampaign(activeCampaign);

            // Mark as shown for the session
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('hasShownCampaignModal', 'true');
            }

            // Show the modal 1.5 seconds after landing
            const timer = setTimeout(() => {
              setIsRendered(true);
              setTimeout(() => setIsVisible(true), 50); // slight delay for CSS transition
            }, 1500);
            return () => clearTimeout(timer);
          }
        }
      })
      .catch(console.error)
      .finally(() => window.dispatchEvent(new CustomEvent("landing-data-ready", { detail: "campaign" })));
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsRendered(false), 300); // Wait for transition to finish
  };

  if (!isRendered || !campaign) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`relative bg-white w-full max-w-lg shadow-2xl rounded-none transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-20 bg-white text-gray-900 hover:text-red-500 transition-colors p-2 shadow-sm rounded-none border border-transparent hover:border-red-500"
        >
          <X className="w-5 h-5" />
        </button>

        <Link href={campaign.link || "/main/shop"} onClick={handleClose} className="block group">
          <div className="relative w-full aspect-[4/5] sm:aspect-square bg-gray-100 overflow-hidden rounded-none border-4 border-transparent group-hover:border-[#0066FF] transition-all duration-300">
            {campaign.image ? (
              <img
                src={getImgUrl(campaign.image)}
                alt={campaign.campaignName || "Campaign"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="font-black text-gray-400 text-xl uppercase">No Image</span>
              </div>
            )}

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 flex flex-col justify-end items-center p-8 text-center">

              {campaign.date && (
                <div className="bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-4 shadow-sm">
                  {campaign.date}
                </div>
              )}

              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-2">
                {campaign.campaignName}
              </h2>

              <p className="text-gray-200 text-sm sm:text-base mb-8 max-w-xs leading-relaxed">
                {campaign.offerText}
              </p>

              <div className="bg-[#0066FF] text-white font-bold py-4 px-10 uppercase tracking-widest text-sm rounded-none group-hover:bg-white group-hover:bg-gradient-to-r group-hover:from-[#00B4DB] group-hover:to-[#0000FF] group-hover:bg-clip-text group-hover:text-transparent transition-colors shadow-lg border border-transparent group-hover:border-[#0066FF]">
                Shop The Sale
              </div>

            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
