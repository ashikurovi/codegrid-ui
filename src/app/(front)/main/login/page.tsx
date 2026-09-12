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
    <div className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LOGIN SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 uppercase tracking-tighter bg-white border-[4px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block w-max">Login</h1>
          <div className="bg-white border-[4px] border-black p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full">
            <form onSubmit={handleLogin} className="space-y-8">
              {loginError && <p className="text-red-500 text-sm font-bold">{loginError}</p>}
              
              {/* Username / Email */}
              <div>
                <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">
                  USERNAME OR EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">
                  PASSWORD <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type={showLoginPassword ? "text" : "password"} 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full bg-white border-[3px] border-black py-4 px-5 pr-14 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-[#3b82f6] bg-white border-2 border-transparent focus:outline-none"
                  >
                    {showLoginPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#3b82f6] text-white font-black text-lg uppercase tracking-widest py-5 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-6"
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>

        {/* REGISTER SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 uppercase tracking-tighter bg-white border-[4px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block w-max">Register</h1>
          <div className="bg-white border-[4px] border-black p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full">
            <form onSubmit={handleRegister} className="space-y-8">
              {registerError && <p className="text-red-500 text-sm font-bold">{registerError}</p>}
              {registerSuccess && <p className="text-green-600 text-sm font-bold">{registerSuccess}</p>}
              
              {/* Name */}
              <div>
                <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full bg-white border-[3px] border-black py-4 px-5 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500"
                  required
                />
              </div>
              
              {/* Password */}
              <div>
                <label className="block text-sm font-black text-black uppercase tracking-widest mb-3">
                  PASSWORD <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type={showRegisterPassword ? "text" : "password"} 
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="w-full bg-white border-[3px] border-black py-4 px-5 pr-14 text-sm font-bold text-black focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-500"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-[#3b82f6] bg-white border-2 border-transparent focus:outline-none"
                  >
                    {showRegisterPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-[#3b82f6] text-white font-black text-lg uppercase tracking-widest py-5 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
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
