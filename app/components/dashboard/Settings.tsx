'use client';

import React, { useState } from 'react';
import { Settings as SettingsIcon, Save, Moon, Globe, Clock } from 'lucide-react';

export default function Settings() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Settings</h1>
                <p className="text-zinc-500 mt-2">Manage your application preferences</p>
            </div>

            {/* Settings Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                {/* Header for content */}
                <div className="border-b border-zinc-200 bg-zinc-50 p-4">
                    <div className="flex items-center space-x-2 text-blue-600">
                        <SettingsIcon className="w-5 h-5" />
                        <span className="font-semibold">Preferences</span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                    <div className="space-y-8 animate-fade-in">
                        <div>
                            <h2 className="text-xl font-bold text-zinc-900 mb-6">Application Preferences</h2>

                            {/* Dark Mode */}
                            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200 mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <Moon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-zinc-900">Dark Mode</h3>
                                        <p className="text-sm text-zinc-500">Use dark theme across the app</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className={`relative w-14 h-7 rounded-full transition-colors ${darkMode ? 'bg-blue-500' : 'bg-zinc-300'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${darkMode ? 'translate-x-7' : 'translate-x-0.5'
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Language */}
                            <div className="mb-6">
                                <label className="flex items-center space-x-2 text-sm font-semibold text-zinc-700 mb-3">
                                    <Globe className="w-4 h-4" />
                                    <span>Language</span>
                                </label>
                                <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                                    <option>English (US)</option>
                                    <option>Myanmar (Burmese)</option>
                                    <option>Thai</option>
                                    <option>Chinese (Simplified)</option>
                                </select>
                            </div>

                            {/* Timezone */}
                            <div className="mb-6">
                                <label className="flex items-center space-x-2 text-sm font-semibold text-zinc-700 mb-3">
                                    <Clock className="w-4 h-4" />
                                    <span>Timezone</span>
                                </label>
                                <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                                    <option>Asia/Yangon (GMT+6:30)</option>
                                    <option>Asia/Bangkok (GMT+7:00)</option>
                                    <option>Asia/Singapore (GMT+8:00)</option>
                                    <option>UTC (GMT+0:00)</option>
                                </select>
                            </div>

                            {/* Date Format */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-zinc-700 mb-3">Date Format</label>
                                <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                                    <option>MM/DD/YYYY</option>
                                    <option>DD/MM/YYYY</option>
                                    <option>YYYY-MM-DD</option>
                                </select>
                            </div>

                            {/* Currency */}
                            <div>
                                <label className="block text-sm font-semibold text-zinc-700 mb-3">Currency</label>
                                <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                                    <option>Baht (฿)</option>
                                    <option>US Dollar ($)</option>
                                    <option>Kyat (K)</option>
                                    <option>Euro (€)</option>
                                </select>
                            </div>

                            <div className="flex justify-end mt-8">
                                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2">
                                    <Save className="w-4 h-4" />
                                    <span>Save Preferences</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
