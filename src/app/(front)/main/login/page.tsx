"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LOGIN SECTION */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">Login</h1>
          <div className="border border-gray-200 p-8 sm:p-10 rounded-none bg-white">
            <form className="space-y-6">
              
              {/* Username / Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                  USERNAME OR EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 py-3 px-4 focus:outline-none focus:border-gray-900 rounded-none text-sm"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                  PASSWORD <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="w-full border border-gray-300 py-3 px-4 pr-12 focus:outline-none focus:border-gray-900 rounded-none text-sm"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Social Login (Google) */}
              <div className="pt-2">
                <p className="text-sm text-gray-600 mb-3">Login with:</p>
                <button 
                  type="button" 
                  className="border border-gray-300 p-2 hover:bg-gray-50 transition-colors rounded-none flex items-center justify-center"
                >
                  <Image 
                    src="https://www.svgrepo.com/show/475656/google-color.svg" 
                    alt="Google Login" 
                    width={24} 
                    height={24} 
                  />
                </button>
              </div>

              {/* Remember Me */}
              <div className="flex items-center pt-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent border-gray-300 focus:ring-[#0066FF] rounded-none cursor-pointer"
                />
                <label htmlFor="remember" className="ml-3 text-xs font-bold text-gray-700 uppercase tracking-widest cursor-pointer">
                  REMEMBER ME
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm uppercase tracking-widest py-4 transition-colors rounded-none mt-4"
              >
                LOG IN
              </button>

              {/* Lost Password */}
              <div className="pt-2">
                <Link href="#" className="bg-gradient-to-r from-[#00B4DB] to-[#0000FF] bg-clip-text text-transparent text-xs font-bold uppercase tracking-widest hover:underline">
                  LOST YOUR PASSWORD?
                </Link>
              </div>

            </form>
          </div>
        </div>

        {/* REGISTER SECTION */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">Register</h1>
          <div className="border border-gray-200 p-8 sm:p-10 rounded-none bg-white h-full">
            <form className="space-y-6">
              
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 py-3 px-4 focus:outline-none focus:border-gray-900 rounded-none text-sm"
                  required
                />
              </div>

              <p className="text-sm text-gray-600 leading-relaxed pt-2">
                A link to set a new password will be sent to your email address.
              </p>

              {/* Register Button */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm uppercase tracking-widest py-4 transition-colors rounded-none"
                >
                  REGISTER
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
