'use client';

import React, { useState } from 'react';
import { User, Shield, Camera, Save, Key, Mail, Phone, ChevronRight } from 'lucide-react';

type ProfileTab = 'profile' | 'security';

export default function Profile() {
    const [activeTab, setActiveTab] = useState<ProfileTab>('profile');

    const tabs = [
        { id: 'profile' as ProfileTab, name: 'Profile Account', icon: User },
        { id: 'security' as ProfileTab, name: 'Security & Access', icon: Shield },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900">Settings</h1>
                <p className="text-slate-500 mt-1 text-sm font-medium">Manage your personal presence and security preferences</p>
            </div>

            {/* Profile Container */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                {/* Modern Tabs */}
                <div className="border-b border-slate-100 bg-slate-50/50 px-6">
                    <div className="flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative py-5 text-sm font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === tab.id
                                        ? 'text-blue-600'
                                        : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.name}</span>
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <div className="max-w-4xl animate-fade-in">
                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Left Side: Photo */}
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="relative group">
                                        <div className="w-32 h-32 rounded-3xl bg-blue-600 p-1 overflow-hidden shadow-xl shadow-blue-100 transition-transform group-hover:scale-105 duration-300">
                                            <div className="w-full h-full rounded-[20px] overflow-hidden bg-white">
                                                <img
                                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zoey&backgroundColor=3b82f6"
                                                    alt="Profile"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-110 active:scale-95 group/btn">
                                            <Camera className="w-4 h-4 text-slate-600 group-hover/btn:text-blue-600" />
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-black text-slate-900">Sarah Wilson</h3>
                                        <p className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mt-2">Administrator</p>
                                    </div>
                                </div>

                                {/* Right Side: Forms */}
                                <div className="flex-1 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                                            <input
                                                type="text"
                                                defaultValue="Sarah"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                                            <input
                                                type="text"
                                                defaultValue="Wilson"
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                                <input
                                                    type="email"
                                                    defaultValue="sarahwilson@geospace.com"
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                                <input
                                                    type="tel"
                                                    defaultValue="+95 9 123 456 789"
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95 flex items-center gap-2">
                                            <Save className="w-4 h-4" />
                                            <span>Update Profile</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                        <div className="max-w-2xl animate-fade-in">
                            <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 border-l-4 border-l-amber-400">
                                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                                    <Key className="w-4 h-4 text-amber-500" />
                                    Password Security
                                </h3>
                                <p className="text-xs text-slate-500 mt-2 font-medium">Ensure your account is protected with a strong, unique password. Use at least 12 characters including symbols and numbers.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest">Current Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest">New Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest">Confirm New Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-emerald-400" />
                                        <span>Change Password</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
