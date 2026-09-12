"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Upload, Shirt, Package, Coffee, CheckCircle2, ArrowLeft } from "lucide-react";

const apparelOptions = [
  { id: "a1", name: "Classic T-Shirt", price: "৳ 350 / pc", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop" },
  { id: "a2", name: "Premium Polo", price: "৳ 550 / pc", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=400&auto=format&fit=crop" },
  { id: "a3", name: "Winter Hoodie", price: "৳ 850 / pc", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop" },
];

const bottleOptions = [
  { id: "b1", name: "Ceramic Mug", price: "৳ 250 / pc", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop" },
  { id: "b2", name: "Steel Water Bottle", price: "৳ 450 / pc", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400&auto=format&fit=crop" },
  { id: "b3", name: "Insulated Flask", price: "৳ 750 / pc", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop" },
];

const corporatePackages = [
  {
    id: "basic",
    name: "Basic Kit",
    price: "৳ 1,500 / kit",
    description: "A perfect starter kit for new employees or event giveaways. Includes everyday essentials branded with your logo.",
    items: [
      { name: "Custom T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop" },
      { name: "Custom Mug", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop" },
      { name: "Branded Pen", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=400&auto=format&fit=crop" }
    ],
    color: "bg-gray-100",
    textColor: "text-gray-900"
  },
  {
    id: "premium",
    name: "Premium Kit",
    price: "৳ 3,500 / kit",
    description: "Elevate your corporate gifting with high-quality, durable items that leave a lasting impression.",
    items: [
      { name: "Premium Polo", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=400&auto=format&fit=crop" },
      { name: "Metal Water Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400&auto=format&fit=crop" },
      { name: "Notebook", image: "https://images.unsplash.com/photo-1531346878377-a541e4ab0d36?q=80&w=400&auto=format&fit=crop" },
      { name: "Metal Pen", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=400&auto=format&fit=crop" }
    ],
    color: "bg-[#0A1128]",
    textColor: "text-white"
  },
  {
    id: "executive",
    name: "Executive Kit",
    price: "৳ 6,000 / kit",
    description: "The ultimate VIP experience. Premium luxury items designed for executives and top-tier clients.",
    items: [
      { name: "Premium Jacket", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop" },
      { name: "Insulated Flask", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400&auto=format&fit=crop" },
      { name: "Leather Diary", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop" },
      { name: "Premium Pen & Badge", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=400&auto=format&fit=crop" }
    ],
    color: "bg-gradient-to-br from-[#00A8FF] to-[#0033FF]",
    textColor: "text-white"
  },
];

export default function CustomOrderPage() {
  const [selectedCategory, setSelectedCategory] = useState("apparel");
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedBaseItem, setSelectedBaseItem] = useState<{id: string, name: string, price: string, image: string} | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedPackageId(null);
    setSelectedBaseItem(null);
  };

  const selectedPackage = corporatePackages.find(p => p.id === selectedPackageId);

  const getDetailsText = () => {
    if (selectedPackage) {
      return `I am interested in ordering the ${selectedPackage.name}.`;
    }
    if (selectedBaseItem) {
      return `I want to customize the ${selectedBaseItem.name} (${selectedBaseItem.price}).`;
    }
    return "";
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 uppercase tracking-tighter bg-white border-[4px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block w-max">
            Custom & Bulk Orders
          </h1>
          <p className="text-black font-bold max-w-2xl mx-auto bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Design your own custom t-shirts, bottles, and corporate gifts. Perfect for events, teams, and corporate branding. Upload your own design or choose from our templates.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center flex-wrap gap-6 mb-16">
          <button
            onClick={() => handleCategoryChange("apparel")}
            className={`flex items-center gap-3 px-8 py-4 font-black uppercase tracking-widest border-[3px] border-black transition-all ${
              selectedCategory === "apparel"
                ? "bg-[#3b82f6] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1"
                : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white"
            }`}
          >
            <Shirt className="w-6 h-6" /> T-Shirts & Apparel
          </button>
          <button
            onClick={() => handleCategoryChange("bottles")}
            className={`flex items-center gap-3 px-8 py-4 font-black uppercase tracking-widest border-[3px] border-black transition-all ${
              selectedCategory === "bottles"
                ? "bg-[#3b82f6] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1"
                : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white"
            }`}
          >
            <Coffee className="w-6 h-6" /> Mugs & Bottles
          </button>
          <button
            onClick={() => handleCategoryChange("corporate")}
            className={`flex items-center gap-3 px-8 py-4 font-black uppercase tracking-widest border-[3px] border-black transition-all ${
              selectedCategory === "corporate"
                ? "bg-[#3b82f6] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1"
                : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white"
            }`}
          >
            <Package className="w-6 h-6" /> Corporate Packages
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Product / Package Customization */}
          <div className="flex-1 space-y-12">
            
            {/* Conditional Content based on Category */}
            {selectedCategory !== "corporate" && (
              <div className="bg-white p-8 sm:p-12 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in duration-500">
                <h3 className="text-2xl font-black text-black uppercase tracking-widest mb-8 border-b-[3px] border-black pb-4 inline-block">1. Choose Your Item</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                  {(selectedCategory === "apparel" ? apparelOptions : bottleOptions).map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => setSelectedBaseItem(item)}
                      className={`border-[3px] border-black cursor-pointer transition-all overflow-hidden group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                        selectedBaseItem?.id === item.id 
                          ? "bg-black text-white" 
                          : "bg-white text-black"
                      }`}
                    >
                      <div className="aspect-square bg-gray-100 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className={`p-4 text-center transition-colors`}>
                        <div className="text-sm font-black uppercase tracking-widest mb-1">{item.name}</div>
                        <div className={`text-sm font-black ${selectedBaseItem?.id === item.id ? "text-white" : "text-[#3b82f6]"}`}>{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-black text-black uppercase tracking-widest mb-6 border-b-[3px] border-black pb-4 inline-block">2. Upload Your Design</h3>
                <div className="border-[3px] border-black p-12 flex flex-col items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white transition-all cursor-pointer group">
                  <div className="w-16 h-16 border-[3px] border-black bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Upload className="w-8 h-8 text-black" />
                  </div>
                  <p className="font-black uppercase tracking-widest text-lg mb-2 group-hover:text-white">Click to upload your logo</p>
                  <p className="text-sm font-bold group-hover:text-white">Supports PNG, SVG, JPG (Max 5MB)</p>
                </div>
              </div>
            )}

            {selectedCategory === "corporate" && !selectedPackageId && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter bg-white border-[4px] border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-max max-w-full">Select a Corporate Package</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {corporatePackages.map((pkg) => (
                    <div key={pkg.id} className={`bg-white text-black p-8 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                      <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 border-b-[3px] border-black pb-4">{pkg.name}</h4>
                      <div className="text-xl font-black text-[#3b82f6] mb-8">{pkg.price}</div>
                      <ul className="space-y-4 mb-10 flex-1">
                        {pkg.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-black uppercase tracking-widest">
                            <CheckCircle2 className="w-5 h-5 text-black" /> {item.name}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className="w-full bg-black text-white font-black text-sm uppercase tracking-widest py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "corporate" && selectedPackage && (
              <div className="bg-white p-8 sm:p-12 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-right-8 duration-500">
                <button 
                  onClick={() => setSelectedPackageId(null)}
                  className="group flex items-center w-max bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-black uppercase tracking-widest px-5 py-3 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all mb-10"
                >
                  <ArrowLeft className="w-5 h-5 mr-3 font-black" />
                  Back to Packages
                </button>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6 border-[4px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">{selectedPackage.name}</h3>
                    <p className="text-black font-bold mt-2 max-w-lg">{selectedPackage.description}</p>
                  </div>
                  <div className="text-right sm:text-left bg-black text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="block text-xs font-black uppercase tracking-widest mb-1">Package Price</span>
                    <span className="text-3xl font-black">{selectedPackage.price}</span>
                  </div>
                </div>

                <div className="w-full h-[4px] bg-black mb-10"></div>

                <h4 className="font-black text-black mb-6 uppercase tracking-widest text-lg inline-block border-b-[3px] border-black pb-2">Package Contents:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {selectedPackage.items.map((item, idx) => (
                    <div key={idx} className="group border-[3px] border-black overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <p className="text-xs font-black uppercase tracking-widest text-black">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#3b82f6] p-8 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 text-white">
                  <div>
                    <h5 className="font-black text-2xl uppercase tracking-tighter mb-2">Ready to order this package?</h5>
                    <p className="text-sm font-bold">Provide your branding details below and fill out the request form on the right.</p>
                  </div>
                  <div className="w-16 h-16 bg-white border-[3px] border-black text-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Package className="w-8 h-8" />
                  </div>
                </div>

                <h4 className="font-black text-black mb-6 uppercase tracking-widest text-lg inline-block border-b-[3px] border-black pb-2">Design & Branding Details:</h4>
                <div className="space-y-8 bg-white p-8 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div>
                    <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">Upload Brand Logo or Assets</label>
                    <div className="border-[3px] border-black p-10 flex flex-col items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white transition-all cursor-pointer group">
                      <div className="w-16 h-16 border-[3px] border-black bg-white text-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Upload className="w-8 h-8" />
                      </div>
                      <p className="font-black uppercase tracking-widest text-lg mb-2 group-hover:text-white">Click to upload files</p>
                      <p className="text-sm font-bold group-hover:text-white">Supports PNG, SVG, AI (Max 10MB)</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">Brand Overview & Customization Instructions</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500" 
                      placeholder="e.g. We want the logo printed on the chest of the polo, and laser engraved on the bottle. Brand colors are Navy and Gold..."
                    ></textarea>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Order Request Form */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 sm:p-10 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-24">
              <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-4">Request a Quote</h3>
              <p className="text-sm font-bold text-black mb-8 border-b-[3px] border-black pb-4">Fill out the details below and our team will get back to you with pricing.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">Name / Company Name</label>
                  <input type="text" className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500" placeholder="Enter your name or company" />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">Phone</label>
                    <input type="text" className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500" placeholder="+880..." />
                  </div>
                  <div className="w-full sm:w-1/3">
                    <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">Quantity</label>
                    <input type="number" className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500" placeholder="Min. 10" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">Additional Details</label>
                  <textarea 
                    key={getDetailsText()}
                    rows={4} 
                    className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500" 
                    placeholder="Tell us about colors, sizes, or special requirements..."
                    defaultValue={getDetailsText()}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full bg-[#3b82f6] text-white font-black text-lg uppercase tracking-widest py-5 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
