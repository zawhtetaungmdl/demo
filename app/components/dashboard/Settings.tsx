'use client';

import React, { useState } from 'react';
import { User, Bell, Shield, Settings as SettingsIcon, Camera, Save, Moon, Globe, Clock } from 'lucide-react';

type SettingsTab = 'profile' | 'notifications' | 'security' | 'preferences';

export default function Settings() {
    const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const tabs = [
        { id: 'profile' as SettingsTab, name: 'Profile', icon: User },
        { id: 'notifications' as SettingsTab, name: 'Notifications', icon: Bell },
        { id: 'security' as SettingsTab, name: 'Security', icon: Shield },
        { id: 'preferences' as SettingsTab, name: 'Preferences', icon: SettingsIcon },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Settings</h1>
                <p className="text-zinc-500 mt-2">Manage your account settings and preferences</p>
            </div>

            {/* Settings Container */}
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
                                            ZW
                                        </div>
                                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-white flex items-center justify-center hover:bg-zinc-50 transition-colors">
                                            <Camera className="w-4 h-4 text-zinc-600" />
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-zinc-900">Zaw Htet Aung</h3>
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
                                            defaultValue="Zaw Htet"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Aung"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            defaultValue="zawhtetaung@geospace.com"
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
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Bio</label>
                                        <textarea
                                            rows={4}
                                            defaultValue="Property management administrator at GEO SPACE"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
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

                    {/* Notifications Tab */}
                    {activeTab === 'notifications' && (
                        <div className="space-y-8 animate-fade-in">
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900 mb-2">Notification Preferences</h2>
                                <p className="text-sm text-zinc-500 mb-6">Choose how you want to be notified</p>

                                <div className="space-y-6">
                                    {/* Email Notifications */}
                                    <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                                        <div>
                                            <h3 className="font-semibold text-zinc-900">Email Notifications</h3>
                                            <p className="text-sm text-zinc-500 mt-1">Receive notifications via email</p>
                                        </div>
                                        <button
                                            onClick={() => setEmailNotifications(!emailNotifications)}
                                            className={`relative w-14 h-7 rounded-full transition-colors ${emailNotifications ? 'bg-blue-500' : 'bg-zinc-300'
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${emailNotifications ? 'translate-x-7' : 'translate-x-0.5'
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Push Notifications */}
                                    <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                                        <div>
                                            <h3 className="font-semibold text-zinc-900">Push Notifications</h3>
                                            <p className="text-sm text-zinc-500 mt-1">Receive push notifications on your device</p>
                                        </div>
                                        <button
                                            onClick={() => setPushNotifications(!pushNotifications)}
                                            className={`relative w-14 h-7 rounded-full transition-colors ${pushNotifications ? 'bg-blue-500' : 'bg-zinc-300'
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${pushNotifications ? 'translate-x-7' : 'translate-x-0.5'
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* SMS Notifications */}
                                    <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                                        <div>
                                            <h3 className="font-semibold text-zinc-900">SMS Notifications</h3>
                                            <p className="text-sm text-zinc-500 mt-1">Receive notifications via SMS</p>
                                        </div>
                                        <button
                                            onClick={() => setSmsNotifications(!smsNotifications)}
                                            className={`relative w-14 h-7 rounded-full transition-colors ${smsNotifications ? 'bg-blue-500' : 'bg-zinc-300'
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${smsNotifications ? 'translate-x-7' : 'translate-x-0.5'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <h3 className="font-semibold text-blue-900 mb-2">Notification Types</h3>
                                    <div className="space-y-2 text-sm text-blue-700">
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" defaultChecked className="rounded" />
                                            <span>New parcel arrivals</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" defaultChecked className="rounded" />
                                            <span>Payment confirmations</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" defaultChecked className="rounded" />
                                            <span>Service request updates</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <span>Staff availability changes</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                        <div className="space-y-8 animate-fade-in">
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900 mb-6">Security Settings</h2>

                                {/* Change Password */}
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

                                {/* Two-Factor Authentication */}
                                <div className="p-6 bg-zinc-50 rounded-lg border border-zinc-200">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-semibold text-zinc-900">Two-Factor Authentication</h3>
                                            <p className="text-sm text-zinc-500 mt-1">Add an extra layer of security to your account</p>
                                            <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                                Enabled
                                            </span>
                                        </div>
                                        <button className="px-4 py-2 bg-white border border-zinc-300 text-zinc-700 rounded-lg text-sm font-semibold hover:bg-zinc-50 transition-colors">
                                            Configure
                                        </button>
                                    </div>
                                </div>

                                {/* Active Sessions */}
                                <div className="mt-8">
                                    <h3 className="font-semibold text-zinc-900 mb-4">Active Sessions</h3>
                                    <div className="space-y-3">
                                        <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-zinc-900">MacBook Pro - Chrome</p>
                                                <p className="text-sm text-zinc-500">Last active: Just now</p>
                                            </div>
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                                Current
                                            </span>
                                        </div>
                                        <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-zinc-900">iPhone 14 - Safari</p>
                                                <p className="text-sm text-zinc-500">Last active: 2 hours ago</p>
                                            </div>
                                            <button className="text-sm text-red-600 hover:text-red-700 font-semibold">
                                                Revoke
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Preferences Tab */}
                    {activeTab === 'preferences' && (
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
                    )}
                </div>
            </div>
        </div>
    );
}
