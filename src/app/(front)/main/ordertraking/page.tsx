"use client";

import React, { useEffect, useState } from 'react';
import { trackOrder } from '@/api/orderApi';
import { Package, Search, Clock, CheckCircle2, Truck, Check } from 'lucide-react';
import Link from 'next/link';

export default function OrderTrackingPage() {
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const [orderData, setOrderData] = useState<any>(null);
    const [error, setError] = useState("");

    const trackOrderById = async (identifier: string) => {
        if (!identifier) return;

        setLoading(true);
        setError("");
        setOrderData(null);
        try {
            const res = await trackOrder(identifier);
            if (res && res.data) {
                setOrderData(res.data);
            } else if (res && res.id) {
                setOrderData(res);
            } else {
                setError("Order not found. Please check your Order ID.");
            }
        } catch (err) {
            console.error(err);
            setError("Unable to find an order with that ID.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const linkedOrderId = new URLSearchParams(window.location.search).get('order');
        if (linkedOrderId) {
            setOrderId(linkedOrderId);
            trackOrderById(linkedOrderId);
        }
    }, []);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        await trackOrderById(orderId.trim());
    };

    const getStatusMessage = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'pending': return "Your order has been received and is waiting to be processed.";
            case 'processing': return "Your order is currently being prepared and packed.";
            case 'shipped': return "Your order has been shipped and is on its way to you!";
            case 'delivered': return "Your order has been successfully delivered. Enjoy!";
            default: return "Your order is currently being updated.";
        }
    };

    const getStatusStep = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'pending': return 1;
            case 'processing': return 2;
            case 'shipped': return 3;
            case 'delivered': return 4;
            default: return 1;
        }
    };

    const currentStep = getStatusStep(orderData?.status);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-50 border-b-[1px] border-gray-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Track Order</h1>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto">Enter your Order ID below to see the current status of your shipment.</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Search Box */}
                <form onSubmit={handleTrack} className="mb-16">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder="Enter Order ID (e.g. CG-0022)"
                                className="w-full pl-12 pr-4 py-4 bg-white border-[1px] border-gray-300 text-black font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black rounded-md transition-all"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm rounded-md transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                        >
                            {loading ? 'Tracking...' : 'Track'}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-sm font-semibold mt-4 text-center">{error}</p>}
                </form>

                {/* Results */}
                {orderData && (
                    <div className="bg-white border-[1px] border-gray-200 rounded-xl overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-gray-50 p-6 border-b-[1px] border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Order #{`CG-${String(orderData.id).padStart(4, '0')}`}</p>
                                <p className="text-sm font-medium text-black">Placed on {new Date(orderData.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="text-right">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-black text-white">
                                    {orderData.status || 'Pending'}
                                </span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="p-8 border-b-[1px] border-gray-100">
                            <div className="relative">
                                <div className="absolute left-0 top-1/2 -mt-[1px] w-full h-[2px] bg-gray-200"></div>
                                <div className="absolute left-0 top-1/2 -mt-[1px] h-[2px] bg-black transition-all duration-500" style={{ width: `${((currentStep - 1) / 3) * 100}%` }}></div>

                                <div className="relative flex justify-between">
                                    {/* Step 1 */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <span className={`mt-3 text-xs font-bold uppercase tracking-widest ${currentStep >= 1 ? 'text-black' : 'text-gray-400'}`}>Pending</span>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>
                                            <Package className="w-5 h-5" />
                                        </div>
                                        <span className={`mt-3 text-xs font-bold uppercase tracking-widest ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>Processing</span>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${currentStep >= 3 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>
                                            <Truck className="w-5 h-5" />
                                        </div>
                                        <span className={`mt-3 text-xs font-bold uppercase tracking-widest ${currentStep >= 3 ? 'text-black' : 'text-gray-400'}`}>Shipped</span>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors duration-500 ${currentStep >= 4 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <span className={`mt-3 text-xs font-bold uppercase tracking-widest ${currentStep >= 4 ? 'text-black' : 'text-gray-400'}`}>Delivered</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 p-4 bg-gray-50 border-[1px] border-gray-200 rounded-md text-center">
                                <p className="text-sm font-semibold text-gray-700">{getStatusMessage(orderData.status)}</p>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="p-6 bg-gray-50">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Order Items</h4>
                            <div className="space-y-4">
                                {orderData.items && orderData.items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-md border-[1px] border-gray-200">
                                        <div className="flex items-center gap-4">
                                            {item.product?.thumbnail ? (
                                                <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                                    <img src={item.product.thumbnail.startsWith('http') ? item.product.thumbnail : `https://codegrid-api.vercel.app${item.product.thumbnail.startsWith('/') ? '' : '/'}${item.product.thumbnail}`} alt={item.product.title || 'Product'} className="w-full h-full object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>
                                            )}
                                            <div>
                                                <p className="text-sm font-bold text-black uppercase tracking-tighter">{item.product?.title || item.flashsell?.title || item.budgetPick?.title || `Product #${item.product?.id || item.productId || item.id}`}</p>
                                                <p className="text-xs font-medium text-gray-500">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-black">৳ {item.product?.currentPrice || item.flashsell?.currentPrice || item.budgetPick?.currentPrice || "-"}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t-[1px] border-gray-200 flex justify-between items-center">
                                <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">Total Amount</span>
                                <span className="text-2xl font-black text-black">৳ {orderData.totalAmount}</span>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
