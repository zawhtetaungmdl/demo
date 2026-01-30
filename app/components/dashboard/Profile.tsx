'use client';

import React, { useState } from 'react';
import { User, Shield, Camera, Save } from 'lucide-react';

type ProfileTab = 'profile' | 'security';

export default function Profile() {
    const [activeTab, setActiveTab] = useState<ProfileTab>('profile');

    const tabs = [
        { id: 'profile' as ProfileTab, name: 'Profile', icon: User },
        { id: 'security' as ProfileTab, name: 'Security', icon: Shield },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Account Profile</h1>
                <p className="text-zinc-500 mt-2">Manage your personal information and security</p>
            </div>

            {/* Profile Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                {/* Tabs */}
                <div className="border-b border-zinc-200 bg-zinc-50">
                    <div className="flex space-x-1 p-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${activeTab === tab.id
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <div className="space-y-8 animate-fade-in">
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900 mb-6">Profile Information</h2>

                                {/* Profile Picture */}
                                <div className="flex items-center space-x-6 mb-8">
                                    <div className="relative">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                                            SW
                                        </div>
                                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-white flex items-center justify-center hover:bg-zinc-50 transition-colors">
                                            <Camera className="w-4 h-4 text-zinc-600" />
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-900">Sarah Wilson</h3>
                                        <p className="text-sm text-zinc-500">Administrator</p>
                                        <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                                            Change Photo
                                        </button>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Sarah"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Wilson"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            defaultValue="sarahwilson@geospace.com"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            defaultValue="+95 9 123 456 789"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-8">
                                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2">
                                        <Save className="w-4 h-4" />
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                        <div className="space-y-8 animate-fade-in">
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900 mb-6">Security Settings</h2>

                                <div className="mb-8">
                                    <h3 className="font-semibold text-zinc-900 mb-4">Change Password</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-700 mb-2">Current Password</label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-700 mb-2">New Password</label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-700 mb-2">Confirm New Password</label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                            />
                                        </div>
                                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                                            Update Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
