'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area
} from 'recharts';
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';

const data = [
    { name: 'Jan', value: 30000 },
    { name: 'Feb', value: 45000 },
    { name: 'Mar', value: 35000 },
    { name: 'Apr', value: 50000 },
    { name: 'May', value: 48000 },
    { name: 'Jun', value: 60000 },
    { name: 'Jul', value: 55000 },
    { name: 'Aug', value: 75000 },
    { name: 'Sep', value: 65000 },
    { name: 'Oct', value: 85230 },
    { name: 'Nov', value: 70000 },
    { name: 'Dec', value: 90000 },
];

export default function QuickView() {
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                    <h3 className="text-zinc-500 font-medium text-sm mb-2">Total Residents</h3>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-zinc-900">850</span>
                    </div>
                    <p className="text-green-500 text-xs font-semibold mt-2">+2% this month</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                    <h3 className="text-zinc-500 font-medium text-sm mb-2">Total Residents</h3> {/* Checking if duplicate title intentional or typo in mockup, sticking to mockup */}
                    <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-zinc-900">95%</span>
                    </div>
                    <p className="text-green-500 text-xs font-semibold mt-2">+0.5% this month</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                    <h3 className="text-zinc-500 font-medium text-sm mb-2">Overdue payment</h3>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-zinc-900">$12450</span>
                    </div>
                    <p className="text-red-500 text-xs font-semibold mt-2">-5 vs last month</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                    <h3 className="text-zinc-500 font-medium text-sm mb-2">Tenant</h3>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-zinc-900">14</span>
                    </div>
                    <p className="text-green-500 text-xs font-semibold mt-2">+3 since yesterday</p>
                </div>
            </div>

            {/* Main Content Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-zinc-500 font-medium text-sm">Monthly Revenue</h3>
                            <div className="flex items-center space-x-3 mt-1">
                                <span className="text-3xl font-bold text-zinc-900">$ 85,230</span>
                                <span className="text-green-500 text-xs font-bold">+1.8%</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full" style={{ height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Side Panels */}
                <div className="space-y-6">
                    {/* Maintenance Service Requests */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                        <h3 className="text-zinc-700 font-semibold mb-6">Maintenance service request</h3>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-semibold text-zinc-700">New</span>
                                    <span className="font-semibold text-zinc-700">5</span>
                                </div>
                                <div className="w-full bg-zinc-100 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-semibold text-zinc-700">In Progress</span>
                                    <span className="font-semibold text-zinc-700">9</span>
                                </div>
                                <div className="w-full bg-zinc-100 rounded-full h-2">
                                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-semibold text-zinc-700">Resolved</span>
                                    <span className="font-semibold text-zinc-700">28</span>
                                </div>
                                <div className="w-full bg-zinc-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Announcement */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                        <h3 className="text-zinc-700 font-semibold mb-3">Recent Announcement</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    <span className="font-semibold text-zinc-900">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
