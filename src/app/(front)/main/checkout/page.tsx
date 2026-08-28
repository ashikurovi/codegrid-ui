"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("inside_dhaka");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Mock product data for the checkout
  const product = {
    name: "Drop Shoulder T-Shirt (Raimons)",
    size: "L",
    type: "Drop Shoulder",
    quantity: 1,
    price: 560,
  };

  const shippingOptions = [
    { id: "inside_dhaka", label: "INSIDE DHAKA", cost: 65 },
    { id: "outside_dhaka", label: "OUTSIDE DHAKA", cost: 115 },
    { id: "dhaka_suburbs", label: "DHAKA SUBURBS", cost: 85 },
  ];

  const selectedShippingCost = shippingOptions.find(opt => opt.id === shippingMethod)?.cost || 0;
  const total = product.price + selectedShippingCost;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Checkout</h1>
          <div className="flex items-center justify-center text-sm">
            <span className="text-gray-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Have a coupon? 
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium underline uppercase tracking-wide">
                Click here to enter your code
              </button>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                Billing <span className="text-gray-400">&</span> Shipping
              </h2>
              
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Your full name" 
                    className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:focus:ring-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">Full Address *</label>
                  <input 
                    type="text" 
                    id="address" 
                    placeholder="Your full address with thana and district name" 
                    className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:focus:ring-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="district" className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">District(জেলা) *</label>
                  <input 
                    type="text" 
                    id="district" 
                    placeholder="District name (for Dhaka, area; ex. Banani)" 
                    className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:focus:ring-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">Phone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+88" 
                    defaultValue="+880"
                    className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:focus:ring-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com" 
                    className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:focus:ring-gray-400"
                  />
                </div>
              </form>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-6">
                Additional Information
              </h2>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">Order Notes (Optional)</label>
                <textarea 
                  id="notes" 
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery." 
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:focus:ring-gray-400 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Receipt / Order Summary */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-sm relative overflow-hidden border border-gray-100 dark:border-gray-800" style={{ backgroundImage: 'radial-gradient(circle at top, transparent 10px, #f9fafb 11px), radial-gradient(circle at bottom, transparent 10px, #f9fafb 11px)', backgroundSize: '100% 20px', backgroundPosition: 'left top, left bottom', backgroundRepeat: 'repeat-x' }}>
              
              {/* Receipt zigzag effect approximation via CSS (top and bottom) */}
              <div className="absolute top-0 left-0 w-full h-3 flex gap-[2px] overflow-hidden opacity-20">
                 {Array.from({length: 40}).map((_, i) => (
                   <div key={`top-${i}`} className="w-3 h-3 bg-white dark:bg-gray-950 transform rotate-45 -translate-y-2"></div>
                 ))}
              </div>
              
              <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{product.name}</span>
                    <span className="text-xs text-gray-500">× {product.quantity}</span>
                    <span className="text-xs text-gray-500 mt-1">Size: {product.size}</span>
                    <span className="text-xs text-gray-500">Type: {product.type}</span>
                  </div>
                  <span className="font-medium text-sm">৳{product.price}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 text-sm">
                <span className="font-bold uppercase tracking-wider text-xs">Subtotal</span>
                <span className="font-medium">৳{product.price}</span>
              </div>

              <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
                <div className="flex flex-col gap-3 text-sm">
                  <span className="font-bold uppercase tracking-wider text-xs mb-1">Shipment</span>
                  
                  {shippingOptions.map((option) => (
                    <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${shippingMethod === option.id ? 'border-gray-900 dark:border-white' : 'border-gray-300 dark:border-gray-600'}`}>
                        {shippingMethod === option.id && <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />}
                      </div>
                      <input 
                        type="radio" 
                        name="shipping" 
                        value={option.id}
                        className="hidden"
                        checked={shippingMethod === option.id}
                        onChange={() => setShippingMethod(option.id)}
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        {option.label}: <span className="font-medium">৳{option.cost}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold uppercase tracking-wider text-sm">Total</span>
                <span className="text-3xl font-bold">৳{total}</span>
              </div>

              {/* Payment Methods */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'cod' ? 'border-gray-900 dark:border-white' : 'border-gray-300 dark:border-gray-600'}`}>
                      {paymentMethod === 'cod' && <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />}
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod"
                      className="hidden"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <span className="font-bold text-sm">Cash On Delivery</span>
                  </label>
                  {paymentMethod === 'cod' && (
                    <div className="ml-7 bg-gray-200/50 dark:bg-gray-800 p-3 text-xs text-gray-600 dark:text-gray-300 rounded-sm">
                      Pay with cash upon delivery. For any further needs, we'll contact you.
                    </div>
                  )}
                </div>

                <label className="flex items-center justify-between cursor-pointer border-t border-gray-200 dark:border-gray-800 pt-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'bkash' ? 'border-gray-900 dark:border-white' : 'border-gray-300 dark:border-gray-600'}`}>
                      {paymentMethod === 'bkash' && <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />}
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="bkash"
                      className="hidden"
                      checked={paymentMethod === 'bkash'}
                      onChange={() => setPaymentMethod('bkash')}
                    />
                    <span className="font-bold text-sm">Bkash</span>
                  </div>
                  <div className="font-bold text-pink-600 italic">bKash</div>
                </label>

                <label className="flex items-center justify-between cursor-pointer border-t border-gray-200 dark:border-gray-800 pt-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'card' ? 'border-gray-900 dark:border-white' : 'border-gray-300 dark:border-gray-600'}`}>
                      {paymentMethod === 'card' && <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />}
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="card"
                      className="hidden"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <span className="font-bold text-sm">Card/NetBanking/Rocket</span>
                  </div>
                  <div className="text-[10px] font-bold text-blue-800 leading-tight text-right">
                    Verified by<br/>SSLCOMMERZ
                  </div>
                </label>
              </div>

              {/* Terms and conditions */}
              <div className="mb-6">
                <label className="flex items-start gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border border-gray-300 dark:border-gray-600 rounded-sm group-hover:border-gray-400">
                    <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" required />
                    <Check className="w-3 h-3 text-white peer-checked:text-white peer-checked:bg-gray-900 dark:peer-checked:bg-white dark:peer-checked:text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gray-900 dark:bg-white opacity-0 peer-checked:opacity-100 -z-10 rounded-sm"></div>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    I agree to the website's <a href="#" className="text-gray-900 dark:text-white underline hover:no-underline font-medium">terms and conditions</a> *
                  </span>
                </label>
              </div>

              {/* Place Order Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-br from-[#00A8FF] to-[#0033FF] hover:from-[#0099EE] hover:to-[#0022DD] text-white font-black uppercase tracking-widest text-sm py-4 rounded-none transition-all shadow-sm border border-transparent active:scale-[0.98]"
              >
                Place Order
              </button>
              
              {/* Receipt zigzag effect approximation via CSS (bottom) */}
              <div className="absolute bottom-0 left-0 w-full h-3 flex gap-[2px] overflow-hidden opacity-20">
                 {Array.from({length: 40}).map((_, i) => (
                   <div key={`bottom-${i}`} className="w-3 h-3 bg-white dark:bg-gray-950 transform rotate-45 translate-y-2"></div>
                 ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
