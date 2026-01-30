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

const RevenueChart = ({ data }: { data: any[] }) => (
    <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col">
        <div className="flex justify-between items-start mb-8">
            <div>
                <p className="text-zinc-400 font-semibold text-xs uppercase tracking-wider mb-1">Total Performance</p>
                <div className="flex items-center space-x-3">
                    <h3 className="text-4xl font-bold text-zinc-900 tracking-tight">$85,230</h3>
                    <div className="flex items-center space-x-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold ring-1 ring-emerald-100">
                        <TrendingUp className="w-3 h-3" />
                        <span>+1.8%</span>
                    </div>
                </div>
            </div>
            <div className="flex bg-zinc-50 p-1 rounded-xl ring-1 ring-zinc-200/50">
                <button className="px-4 py-1.5 text-xs font-bold text-zinc-900 bg-white rounded-lg shadow-sm ring-1 ring-zinc-200">Monthly</button>
            </div>
        </div>

        <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f4f4f5" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#a1a1aa', fontSize: 12, fontWeight: 500 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#a1a1aa', fontSize: 12, fontWeight: 500 }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            border: '1px solid #e4e4e7',
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                            padding: '12px'
                        }}
                        itemStyle={{ color: '#18181b', fontWeight: 600, fontSize: '14px' }}
                        labelStyle={{ color: '#71717a', fontSize: '12px', marginBottom: '4px' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#revenueGradient)"
                        animationDuration={1500}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);

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
                    <h3 className="text-zinc-500 font-medium text-sm mb-2">Total Residents</h3>
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
                <RevenueChart data={data} />

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

                    {/* Short Staff List */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-zinc-700 font-semibold">Short staff list</h3>
                            <button className="text-blue-500 text-xs font-semibold hover:underline">View all</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'John Doe', role: 'Security', status: 'On Duty', color: 'bg-green-500' },
                                { name: 'Sarah Smith', role: 'Maintenance', status: 'Break', color: 'bg-yellow-500' },
                                { name: 'Mike Johnson', role: 'Cleaning', status: 'Off Duty', color: 'bg-zinc-300' }
                            ].map((staff, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-zinc-50 p-2 -mx-2 rounded-xl transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 font-bold text-xs border border-zinc-200 group-hover:bg-white transition-colors">
                                            {staff.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-zinc-900">{staff.name}</p>
                                            <p className="text-xs text-zinc-500">{staff.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className={`w-2 h-2 rounded-full ${staff.color}`}></div>
                                        <span className="text-xs font-medium text-zinc-500">{staff.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
