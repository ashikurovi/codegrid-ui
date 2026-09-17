"use client";

import React, { useEffect, useRef, useState } from "react";
import { Baby, Code, Coffee, Brain, Ghost } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Birth",
    description: "console.log('Hello, World!');\n// Born into the world",
    icon: Baby,
  },
  {
    id: 2,
    title: "Discovery",
    description: "while (alive) {\n  learn(code);\n  socialLife = null;\n}",
    icon: Code,
  },
  {
    id: 3,
    title: "The Grind",
    description: "function daily() {\n  eat(); sleep(); debug();\n}",
    icon: Coffee,
  },
  {
    id: 4,
    title: "Evolution",
    description: "import { code } from 'StackOverflow';\nmasteryLevel++;",
    icon: Brain,
  },
  {
    id: 5,
    title: "404 Not Found",
    description: "throw new Error('End of execution');\n// Server shut down",
    icon: Ghost,
  },
];

export function DeveloperLifecycle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress from 0 to 1
      const maxScroll = height - windowHeight;
      let progress = -top / maxScroll;
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      const stepIndex = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1
      );
      
      setActiveIndex(stepIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ActiveIcon = steps[activeIndex].icon;

  return (
    <section ref={containerRef} className="relative bg-[#f8fafc] w-full mt-32" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-between pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
        
        {/* Background gradient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#2563eb]/5 via-purple-500/5 to-[#ef476f]/5 rounded-full blur-3xl -z-10" />

        {/* Header - Now in normal document flow to prevent overlapping */}
        <div className="text-center w-full px-4 flex-shrink-0 z-10 mb-2 md:mb-6 mt-4 md:mt-0">
          <h2 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-[#2563eb] uppercase mb-1 md:mb-2">True Story</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight">
            The Life of a Developer
          </h3>
        </div>

        {/* Dynamic Center Emoji/Icon with smooth transitions */}
        <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 md:gap-6 px-6 z-10">
          <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center rounded-2xl md:rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-100/50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(37,99,235,0.15)]">
            <ActiveIcon 
              key={activeIndex + "icon"} 
              className="w-12 h-12 md:w-16 md:h-16 text-[#172033] animate-[fade-in-up_0.5s_ease-out_forwards]" 
            />
            {/* Ping effect when it changes */}
            <div key={activeIndex + "ping"} className="absolute inset-0 rounded-2xl md:rounded-[2rem] border-2 border-[#2563eb] animate-[ping_1.5s_ease-out_forwards] opacity-20" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#2563eb] to-[#ef476f] rounded-lg md:rounded-xl shadow-xl flex items-center justify-center text-white font-black text-sm md:text-lg border-2 md:border-4 border-[#f8fafc]">
              {steps[activeIndex].id}
            </div>
          </div>

          {/* Changing Text as Code Snippet */}
          <div key={activeIndex + "text"} className="text-center min-h-[8rem] md:min-h-[9rem] flex flex-col justify-center animate-[fade-in-up_0.5s_ease-out_forwards] w-full max-w-sm md:max-w-md">
            <h4 className="text-xl md:text-2xl font-extrabold text-[#172033] mb-2 md:mb-3">
              {steps[activeIndex].title}
            </h4>
            <div className="bg-[#0f172a] rounded-xl p-3 md:p-4 shadow-inner border border-slate-700/50 text-left w-full mx-auto overflow-hidden">
              <pre className="text-xs md:text-sm text-[#4ade80] font-mono leading-relaxed whitespace-pre-wrap">
                {steps[activeIndex].description}
              </pre>
            </div>
          </div>
        </div>

        {/* Timeline Dots Indicator */}
        <div className="flex items-center justify-center gap-2 md:gap-6 flex-shrink-0 z-10 w-full px-4 mt-4 md:mt-8">
          {steps.map((_, i) => (
            <div key={i} className="flex items-center">
              <div 
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 ease-out ${
                  i === activeIndex 
                    ? 'bg-gradient-to-r from-[#2563eb] to-[#ef476f] scale-[1.7] shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : i < activeIndex 
                      ? 'bg-[#172033]' 
                      : 'bg-slate-200'
                }`}
              />
              {i !== steps.length - 1 && (
                <div 
                  className={`w-6 md:w-16 h-1 ml-3 md:ml-6 transition-all duration-500 rounded-full ${
                    i < activeIndex ? 'bg-[#172033]' : 'bg-slate-200'
                  }`} 
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Global styles for custom animation used in this component */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}
