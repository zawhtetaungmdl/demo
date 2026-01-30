'use client';

import React, { useState } from 'react';
import { Settings as SettingsIcon, Save, Moon, Globe, Clock, Layout, Coins, BellRing, Monitor, Fingerprint } from 'lucide-react';

export default function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900">System Preferences</h1>
                <p className="text-slate-500 mt-1 text-sm font-medium">Configure global application behavior and display settings</p>
            </div>

            {/* Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: General Settings */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Monitor className="w-4 h-4 text-blue-600" />
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Interface & Localization</h3>
                            </div>
                        </div>

                        <div className="p-6 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                        <Globe className="w-3.5 h-3.5" />
                                        Primary Language
                                    </label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                        <option>English (United States)</option>
                                        <option>Myanmar (Burmese)</option>
                                        <option>Thai (Thailand)</option>
                                        <option>Chinese (Simplified)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                        <Clock className="w-3.5 h-3.5" />
                                        Regional Timezone
                                    </label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                        <option>Asia/Yangon (GMT+6:30)</option>
                                        <option>Asia/Bangkok (GMT+7:00)</option>
                                        <option>Asia/Singapore (GMT+8:00)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                        <Layout className="w-3.5 h-3.5" />
                                        Date Display Format
                                    </label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                        <option>DD / MM / YYYY</option>
                                        <option>MM / DD / YYYY</option>
                                        <option>YYYY - MM - DD</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                        <Coins className="w-3.5 h-3.5" />
                                        Standard Currency
                                    </label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                        <option>US Dollar ($)</option>
                                        <option>Myanmar Kyat (MMK)</option>
                                        <option>Thai Baht (฿)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95 flex items-center gap-2">
                            <Save className="w-4 h-4" />
                            <span>Save Configuration</span>
                        </button>
                    </div>
                </div>

                {/* Right: Quick Toggles */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-[11px] font-black border-b border-slate-100 pb-4 mb-6 uppercase tracking-widest text-slate-900">Appearance Mode</h3>
                        <div className="flex items-center justify-between group cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${darkMode ? 'bg-slate-900 text-amber-400' : 'bg-blue-50 text-blue-600'}`}>
                                    <Moon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900">Dark Interface</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Reduce eye strain</p>
                                </div>
                            </div>
                            <div className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-600' : 'bg-slate-200'}`}>
                                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-[11px] font-black border-b border-slate-100 pb-4 mb-6 uppercase tracking-widest text-slate-900">Notifications</h3>
                        <div className="flex items-center justify-between group cursor-pointer" onClick={() => setNotifications(!notifications)}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${notifications ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                    <BellRing className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900">Status Alerts</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Real-time updates</p>
                                </div>
                            </div>
                            <div className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${notifications ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${notifications ? 'translate-x-5' : 'translate-x-0'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm bg-gradient-to-br from-white to-blue-50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                <Fingerprint className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900">Security Check</p>
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">System Shield Active</p>
                            </div>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Your application settings are protected by end-to-end encryption and biometric-aware sessions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
