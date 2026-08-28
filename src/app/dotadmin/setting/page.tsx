"use client";

import { useState } from "react";
import { Save, Building2, Mail, Lock, Bell, CreditCard, Globe } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your store preferences and configurations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 flex flex-col gap-1">
          <button 
            onClick={() => setActiveTab("general")}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === "general" ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/50 dark:hover:text-gray-50"}`}
          >
            <Building2 className="w-4 h-4" /> Store Details
          </button>
          <button 
            onClick={() => setActiveTab("notifications")}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === "notifications" ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/50 dark:hover:text-gray-50"}`}
          >
            <Bell className="w-4 h-4" /> Notifications
          </button>
          <button 
            onClick={() => setActiveTab("payment")}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === "payment" ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/50 dark:hover:text-gray-50"}`}
          >
            <CreditCard className="w-4 h-4" /> Payment Methods
          </button>
          <button 
            onClick={() => setActiveTab("security")}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === "security" ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/50 dark:hover:text-gray-50"}`}
          >
            <Lock className="w-4 h-4" /> Security
          </button>
          <button 
            onClick={() => setActiveTab("localization")}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === "localization" ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/50 dark:hover:text-gray-50"}`}
          >
            <Globe className="w-4 h-4" /> Localization
          </button>
          <button 
            onClick={() => setActiveTab("email")}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === "email" ? "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/50 dark:hover:text-gray-50"}`}
          >
            <Mail className="w-4 h-4" /> Email Templates
          </button>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white border shadow-sm p-6 dark:bg-gray-950 dark:border-gray-800">
          
          {activeTab === "general" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Store Details</h2>
                <p className="text-sm text-gray-500">Update your store's public information.</p>
              </div>
              <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Store Name</label>
                  <input type="text" defaultValue="CodeGrid Fashion" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Contact Email</label>
                  <input type="email" defaultValue="support@codegrid.com" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input type="text" defaultValue="+880 1711-000000" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Support WhatsApp</label>
                  <input type="text" defaultValue="+880 1811-000000" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium">Store Description / About</label>
                  <textarea rows={4} defaultValue="The premier destination for custom apparel, bottles, and corporate gifts in Bangladesh." className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 resize-none"></textarea>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t dark:border-gray-800">
                <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Notifications</h2>
                <p className="text-sm text-gray-500">Configure how you and your customers receive alerts.</p>
              </div>
              <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md dark:border-gray-800">
                  <div>
                    <p className="font-medium">Order Confirmations</p>
                    <p className="text-sm text-gray-500">Automatically send emails to customers when an order is placed.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md dark:border-gray-800">
                  <div>
                    <p className="font-medium">Admin Order Alerts</p>
                    <p className="text-sm text-gray-500">Receive an email when a new custom order request is submitted.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md dark:border-gray-800">
                  <div>
                    <p className="font-medium">Abandoned Cart Reminders</p>
                    <p className="text-sm text-gray-500">Automatically email customers who leave items in their cart.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t dark:border-gray-800">
                <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  <Save className="w-4 h-4" /> Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {(activeTab !== "general" && activeTab !== "notifications") && (
            <div className="space-y-6 flex flex-col items-center justify-center h-64 text-center">
              <div className="bg-gray-100 p-4 rounded-full dark:bg-gray-900 text-gray-400">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Section Under Development</h2>
                <p className="text-sm text-gray-500 max-w-sm mx-auto">This configuration panel is currently being built and will be available in a future update.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
