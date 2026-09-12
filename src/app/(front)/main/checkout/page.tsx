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
    <div className="min-h-screen text-black py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 uppercase border-b-[4px] border-black pb-4 inline-block bg-white px-6 md:px-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Checkout</h1>
          <div className="flex items-center justify-center text-sm">
            <span className="text-black flex items-center gap-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-5 py-3 font-bold uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Have a coupon? 
              <button className="text-[#3b82f6] hover:text-blue-800 font-black underline uppercase tracking-wide transition-colors">
                Click here to enter your code
              </button>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-2 text-black bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-max px-4 py-2">
                Billing <span className="text-[#3b82f6]">&</span> Shipping
              </h2>
              
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-black uppercase tracking-widest text-black">Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Your full name" 
                    className="w-full border-[3px] border-black bg-white p-3.5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500 rounded-none"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="text-sm font-black uppercase tracking-widest text-black">Full Address *</label>
                  <input 
                    type="text" 
                    id="address" 
                    placeholder="Your full address with thana and district name" 
                    className="w-full border-[3px] border-black bg-white p-3.5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500 rounded-none"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="district" className="text-sm font-black uppercase tracking-widest text-black">District(জেলা) *</label>
                  <input 
                    type="text" 
                    id="district" 
                    placeholder="District name (for Dhaka, area; ex. Banani)" 
                    className="w-full border-[3px] border-black bg-white p-3.5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500 rounded-none"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-black uppercase tracking-widest text-black">Phone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+88" 
                    defaultValue="+880"
                    className="w-full border-[3px] border-black bg-white p-3.5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500 rounded-none"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-black">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com" 
                    className="w-full border-[3px] border-black bg-white p-3.5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500 rounded-none"
                  />
                </div>
              </form>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-black uppercase tracking-widest mb-6 text-black bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-max px-4 py-2">
                Additional Information
              </h2>
              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className="text-sm font-black uppercase tracking-widest text-black">Order Notes (Optional)</label>
                <textarea 
                  id="notes" 
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery." 
                  className="w-full border-[3px] border-black bg-white p-3.5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500 rounded-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Receipt / Order Summary */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rounded-none relative">
              
              <div className="mb-6 border-b-[3px] border-black pb-4">
                <div className="flex justify-between text-sm font-black uppercase tracking-widest text-black mb-4">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-1">
                    <span className="font-black text-sm uppercase tracking-wide">{product.name}</span>
                    <span className="text-xs font-bold text-gray-600 bg-gray-100 border-2 border-black px-2 py-0.5 w-max shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">QTY: {product.quantity}</span>
                    <span className="text-xs font-bold text-black border-l-[3px] border-black pl-2 mt-2">Size: {product.size}</span>
                    <span className="text-xs font-bold text-black border-l-[3px] border-black pl-2">Type: {product.type}</span>
                  </div>
                  <span className="font-black text-lg">৳{product.price}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 text-sm">
                <span className="font-black uppercase tracking-widest text-sm">Subtotal</span>
                <span className="font-black text-lg">৳{product.price}</span>
              </div>

              <div className="mb-6 border-b-[3px] border-black pb-6">
                <div className="flex flex-col gap-4 text-sm">
                  <span className="font-black uppercase tracking-widest text-sm mb-2 bg-[#3b82f6] text-white border-2 border-black w-max px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Shipment</span>
                  
                  {shippingOptions.map((option) => (
                    <label key={option.id} className="flex items-center gap-3 cursor-pointer group p-2 border-[3px] border-transparent hover:border-black transition-colors bg-white">
                      <div className={`w-6 h-6 rounded-none border-[3px] border-black flex items-center justify-center bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                        {shippingMethod === option.id && <div className="w-3 h-3 bg-[#3b82f6]" />}
                      </div>
                      <input 
                        type="radio" 
                        name="shipping" 
                        value={option.id}
                        className="hidden"
                        checked={shippingMethod === option.id}
                        onChange={() => setShippingMethod(option.id)}
                      />
                      <span className="text-sm font-black uppercase tracking-widest text-black">
                        {option.label}: <span className="font-black text-[#3b82f6]">৳{option.cost}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-10 bg-black text-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -ml-2 -mr-2 sm:-ml-4 sm:-mr-4">
                <span className="font-black uppercase tracking-widest text-lg">Total</span>
                <span className="text-4xl font-black">৳{total}</span>
              </div>

              {/* Payment Methods */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 cursor-pointer p-3 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform">
                    <div className={`w-6 h-6 rounded-none border-[3px] border-black flex items-center justify-center bg-white`}>
                      {paymentMethod === 'cod' && <div className="w-3 h-3 bg-black" />}
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod"
                      className="hidden"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <span className="font-black text-sm uppercase tracking-widest">Cash On Delivery</span>
                  </label>
                  {paymentMethod === 'cod' && (
                    <div className="mt-2 bg-yellow-300 border-[3px] border-black p-3 text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      Pay with cash upon delivery. For any further needs, we'll contact you.
                    </div>
                  )}
                </div>

                <label className="flex items-center justify-between cursor-pointer p-3 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-none border-[3px] border-black flex items-center justify-center bg-white`}>
                      {paymentMethod === 'bkash' && <div className="w-3 h-3 bg-black" />}
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="bkash"
                      className="hidden"
                      checked={paymentMethod === 'bkash'}
                      onChange={() => setPaymentMethod('bkash')}
                    />
                    <span className="font-black text-sm uppercase tracking-widest">Bkash</span>
                  </div>
                  <div className="font-black text-pink-600 italic text-xl tracking-tighter">bKash</div>
                </label>

                <label className="flex items-center justify-between cursor-pointer p-3 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-none border-[3px] border-black flex items-center justify-center bg-white`}>
                      {paymentMethod === 'card' && <div className="w-3 h-3 bg-black" />}
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="card"
                      className="hidden"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <span className="font-black text-sm uppercase tracking-widest">Card / NetBanking</span>
                  </div>
                  <div className="text-[10px] font-black text-white bg-blue-800 border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] leading-tight text-center">
                    SSL<br/>COMMERZ
                  </div>
                </label>
              </div>

              {/* Terms and conditions */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-6 h-6 mt-0.5 border-[3px] border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" required />
                    <Check className="w-4 h-4 text-white peer-checked:text-white peer-checked:bg-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-black opacity-0 peer-checked:opacity-100 -z-10 rounded-none"></div>
                  </div>
                  <span className="text-sm font-bold text-black mt-1">
                    I agree to the website's <a href="#" className="text-[#3b82f6] underline hover:no-underline font-black uppercase tracking-wider">terms and conditions</a> *
                  </span>
                </label>
              </div>

              {/* Place Order Button */}
              <button 
                type="submit"
                className="w-full bg-[#3b82f6] text-white font-black uppercase tracking-widest text-lg py-5 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                Place Order
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
