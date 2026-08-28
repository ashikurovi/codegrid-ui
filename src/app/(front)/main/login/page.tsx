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
        window.location.href = "/dotadmin";
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
    <div className="min-h-screen bg-white font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LOGIN SECTION */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">Login</h1>
          <div className="border border-gray-200 p-8 sm:p-10 rounded-none bg-white">
            <form onSubmit={handleLogin} className="space-y-6">
              {loginError && <p className="text-red-500 text-sm font-bold">{loginError}</p>}
              
              {/* Username / Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                  USERNAME OR EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
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
                    type={showLoginPassword ? "text" : "password"} 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full border border-gray-300 py-3 px-4 pr-12 focus:outline-none focus:border-gray-900 rounded-none text-sm"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
                  >
                    {showLoginPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm uppercase tracking-widest py-4 transition-colors rounded-none mt-4"
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>

        {/* REGISTER SECTION */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">Register</h1>
          <div className="border border-gray-200 p-8 sm:p-10 rounded-none bg-white h-full">
            <form onSubmit={handleRegister} className="space-y-6">
              {registerError && <p className="text-red-500 text-sm font-bold">{registerError}</p>}
              {registerSuccess && <p className="text-green-600 text-sm font-bold">{registerSuccess}</p>}
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="w-full border border-gray-300 py-3 px-4 focus:outline-none focus:border-gray-900 rounded-none text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
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
                    type={showRegisterPassword ? "text" : "password"} 
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="w-full border border-gray-300 py-3 px-4 pr-12 focus:outline-none focus:border-gray-900 rounded-none text-sm"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
                  >
                    {showRegisterPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

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
