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
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Custom & Bulk Orders
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Design your own custom t-shirts, bottles, and corporate gifts. Perfect for events, teams, and corporate branding. Upload your own design or choose from our templates.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          <button
            onClick={() => handleCategoryChange("apparel")}
            className={`flex items-center gap-2 px-8 py-4 rounded-none font-bold transition-all ${
              selectedCategory === "apparel"
                ? "bg-gradient-to-br from-[#00A8FF] to-[#0033FF] text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#0066FF] hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent"
            }`}
          >
            <Shirt className="w-5 h-5" /> T-Shirts & Apparel
          </button>
          <button
            onClick={() => handleCategoryChange("bottles")}
            className={`flex items-center gap-2 px-8 py-4 rounded-none font-bold transition-all ${
              selectedCategory === "bottles"
                ? "bg-gradient-to-br from-[#00A8FF] to-[#0033FF] text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#0066FF] hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent"
            }`}
          >
            <Coffee className="w-5 h-5" /> Mugs & Bottles
          </button>
          <button
            onClick={() => handleCategoryChange("corporate")}
            className={`flex items-center gap-2 px-8 py-4 rounded-none font-bold transition-all ${
              selectedCategory === "corporate"
                ? "bg-gradient-to-br from-[#00A8FF] to-[#0033FF] text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#0066FF] hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent"
            }`}
          >
            <Package className="w-5 h-5" /> Corporate Packages
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Product / Package Customization */}
          <div className="flex-1 space-y-12">
            
            {/* Conditional Content based on Category */}
            {selectedCategory !== "corporate" && (
              <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 animate-in fade-in duration-500">
                <h3 className="text-xl font-bold mb-6">1. Choose Your Item</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {(selectedCategory === "apparel" ? apparelOptions : bottleOptions).map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => setSelectedBaseItem(item)}
                      className={`border-2 rounded-none cursor-pointer transition-all overflow-hidden group ${
                        selectedBaseItem?.id === item.id 
                          ? "border-[#0066FF] ring-2 ring-[#0066FF]/20 shadow-md" 
                          : "border-gray-100 hover:border-[#0066FF]"
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
                      <div className={`p-3 text-center transition-colors ${
                        selectedBaseItem?.id === item.id ? "bg-blue-50" : "bg-gray-50"
                      }`}>
                        <div className="text-sm font-bold text-gray-900">{item.name}</div>
                        <div className="text-sm font-bold bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent mt-1">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4">2. Upload Your Design</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-none p-12 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 hover:border-[#0066FF] transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-white rounded-none shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent" />
                  </div>
                  <p className="font-bold text-gray-800 mb-1">Click to upload your logo or design</p>
                  <p className="text-sm text-gray-500">Supports PNG, SVG, JPG (Max 5MB)</p>
                </div>
              </div>
            )}

            {selectedCategory === "corporate" && !selectedPackageId && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-gray-900">Select a Corporate Package</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {corporatePackages.map((pkg) => (
                    <div key={pkg.id} className={`${pkg.color} ${pkg.textColor} p-8 rounded-none shadow-sm border border-gray-200 flex flex-col`}>
                      <h4 className="text-xl font-black mb-2">{pkg.name}</h4>
                      <div className="text-lg font-bold opacity-80 mb-6">{pkg.price}</div>
                      <ul className="space-y-3 mb-8 flex-1">
                        {pkg.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" /> {item.name}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`w-full font-bold py-3 rounded-none transition-colors ${
                          pkg.id === "basic" ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"
                        }`}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "corporate" && selectedPackage && (
              <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 animate-in fade-in slide-in-from-right-8 duration-500">
                <button 
                  onClick={() => setSelectedPackageId(null)}
                  className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent hover:text-[#0033FF] transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Packages
                </button>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">{selectedPackage.name}</h3>
                    <p className="text-gray-500 mt-2 max-w-lg">{selectedPackage.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm text-gray-500 font-bold uppercase tracking-wider">Package Price</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent">{selectedPackage.price}</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-100 mb-8"></div>

                <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Package Contents:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {selectedPackage.items.map((item, idx) => (
                    <div key={idx} className="group border border-gray-100 rounded-none overflow-hidden bg-gray-50 hover:border-[#0066FF] transition-colors">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <p className="text-sm font-bold text-gray-800">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-none border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Ready to order this package?</h5>
                    <p className="text-sm text-gray-600">Provide your branding details below and fill out the request form on the right.</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center shadow-sm">
                    <Package className="w-6 h-6 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent" />
                  </div>
                </div>

                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Design & Branding Details:</h4>
                <div className="space-y-6 bg-gray-50 p-6 rounded-none border border-gray-100">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Upload Brand Logo or Assets</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-none p-8 flex flex-col items-center justify-center bg-white hover:bg-blue-50 hover:border-[#0066FF] transition-colors cursor-pointer group">
                      <div className="w-12 h-12 bg-gray-50 rounded-none shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Upload className="w-5 h-5 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent" />
                      </div>
                      <p className="font-bold text-gray-800 text-sm mb-1">Click to upload files</p>
                      <p className="text-xs text-gray-500">Supports PNG, SVG, AI (Max 10MB)</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Brand Overview & Customization Instructions</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF] bg-white" 
                      placeholder="e.g. We want the logo printed on the chest of the polo, and laser engraved on the bottle. Brand colors are Navy and Gold..."
                    ></textarea>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Order Request Form */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-none shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
              <p className="text-sm text-gray-500 mb-6">Fill out the details below and our team will get back to you with pricing.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Name / Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF]" placeholder="Enter your name or company" />
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-900 mb-1">Phone</label>
                    <input type="text" className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF]" placeholder="+880..." />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-xs font-bold text-gray-900 mb-1">Quantity</label>
                    <input type="number" className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF]" placeholder="Min. 10" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Additional Details</label>
                  <textarea 
                    key={getDetailsText()}
                    rows={4} 
                    className="w-full px-4 py-3 rounded-none border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF]" 
                    placeholder="Tell us about colors, sizes, or special requirements..."
                    defaultValue={getDetailsText()}
                  ></textarea>
                </div>

                <button type="button" className="w-full bg-gradient-to-br from-[#00A8FF] to-[#0033FF] hover:from-[#0099EE] hover:to-[#0022DD] text-white font-bold py-4 rounded-none transition-all shadow-sm mt-4">
                  Submit Request
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
