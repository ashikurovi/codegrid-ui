"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { loginUser } from "../../../../api/authApi";
import { createUser } from "../../../../api/userApi";

export default function LoginPage() {
  const router = useRouter();
  
  // Login State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Register State
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await loginUser({ email: loginEmail, password: loginPassword });
      if (res.statusCode === 200 || res.statusCode === 201) {
        if (res.data?.user?.role === 'admin') {
          window.location.href = "/dotadmin";
        } else {
          window.location.href = "/main/dashboard";
        }
      } else {
        setLoginError(res.message || "Login failed");
      }
    } catch (err) {
      setLoginError("An error occurred during login.");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    try {
      const res = await createUser({ name: registerName, email: registerEmail, password: registerPassword });
      if (res.statusCode === 201) {
        setRegisterSuccess("Registration successful! You can now log in.");
        setRegisterName("");
        setRegisterEmail("");
        setRegisterPassword("");
      } else {
        setRegisterError(res.message || "Registration failed");
      }
    } catch (err) {
      setRegisterError("An error occurred during registration.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        
        {/* LOGIN SECTION */}
        <div>
          <div className="bg-white border-[1px] border-gray-200 rounded-xl p-8 sm:p-10 shadow-sm h-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight">Log In</h1>
            <form onSubmit={handleLogin} className="space-y-5">
              {loginError && <p className="text-red-500 text-sm font-medium">{loginError}</p>}
              
              {/* Username / Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full border-[1px] border-gray-300 rounded-md py-3 px-4 text-sm font-medium text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type={showLoginPassword ? "text" : "password"} 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full border-[1px] border-gray-300 rounded-md py-3 px-4 pr-12 text-sm font-medium text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black focus:outline-none"
                  >
                    {showLoginPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold text-sm py-4 rounded-md transition-colors"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* REGISTER SECTION */}
        <div>
          <div className="bg-white border-[1px] border-gray-200 rounded-xl p-8 sm:p-10 shadow-sm h-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight">Register</h1>
            <form onSubmit={handleRegister} className="space-y-5">
              {registerError && <p className="text-red-500 text-sm font-medium">{registerError}</p>}
              {registerSuccess && <p className="text-green-600 text-sm font-medium">{registerSuccess}</p>}
              
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="w-full border-[1px] border-gray-300 rounded-md py-3 px-4 text-sm font-medium text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full border-[1px] border-gray-300 rounded-md py-3 px-4 text-sm font-medium text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder-gray-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type={showRegisterPassword ? "text" : "password"} 
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="w-full border-[1px] border-gray-300 rounded-md py-3 px-4 pr-12 text-sm font-medium text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder-gray-400"
                    placeholder="Create a password"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black focus:outline-none"
                  >
                    {showRegisterPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold text-sm py-4 rounded-md transition-colors"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
