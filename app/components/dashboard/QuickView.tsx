'use client';

import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { TrendingUp, Users, CheckCircle, AlertCircle, UserPlus, ChevronRight, MoreHorizontal, LayoutDashboard } from 'lucide-react';

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
    <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col shadow-sm">
        <div className="flex justify-between items-start mb-8">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                    <p className="text-slate-500 font-bold text-[11px] uppercase tracking-widest">Revenue Performance</p>
                </div>
                <div className="flex items-center space-x-3">
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">$85,230.00</h3>
                    <div className="flex items-center space-x-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-bold">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12.4%</span>
                    </div>
                </div>
            </div>
            <div className="flex bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/50">
                <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Monthly Basis</span>
            </div>
        </div>

        <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="#f1f5f9" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip
                        cursor={{ stroke: '#3B82F6', strokeWidth: 1 }}
                        contentStyle={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                            padding: '12px'
                        }}
                        itemStyle={{ color: '#1e293b', fontWeight: 700, fontSize: '14px' }}
                        labelStyle={{ color: '#64748b', fontSize: '11px', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#revenueGradient)"
                        animationDuration={2000}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);

interface QuickViewProps {
    onViewAllStaff?: () => void;
}

export default function QuickView({ onViewAllStaff }: QuickViewProps) {
    const stats = [
        { label: 'Total Residents', value: '850', trend: '+2% this month', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Occupancy Rate', value: '95%', trend: '+0.5% this month', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: 'Overdue Payment', value: '$12,450', trend: '-5 vs last month', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
        { label: 'New Tenants', value: '14', trend: '+3 since yesterday', icon: UserPlus, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                        <h3 className="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-1">{stat.label}</h3>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                        </div>
                        <p className={`text-[10px] font-bold mt-2 ${stat.trend.includes('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {stat.trend}
                        </p>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart */}
                <RevenueChart data={data} />

                {/* Side Panels */}
                <div className="space-y-6">
                    {/* Maintenance Service Requests */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-slate-900 font-black text-sm uppercase tracking-wider">Maintenance Service</h3>
                            <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { label: 'New Requests', count: 5, total: 42, color: 'bg-blue-500', pct: 15 },
                                { label: 'In Progress', count: 9, total: 42, color: 'bg-amber-500', pct: 35 },
                                { label: 'Resolved', count: 28, total: 42, color: 'bg-emerald-500', pct: 80 }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="font-bold text-slate-600">{item.label}</span>
                                        <span className="font-black text-slate-900">{item.count} <span className="text-slate-400 font-bold">/ {item.total}</span></span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                        <div
                                            className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: `${item.pct}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 border border-slate-100 hover:border-blue-100 rounded-xl transition-all">
                            Efficiency Report
                        </button>
                    </div>

                    {/* Short Staff List */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-slate-900 font-black text-sm uppercase tracking-wider">Active Staff</h3>
                            <button
                                onClick={onViewAllStaff}
                                className="text-blue-600 text-[11px] font-black uppercase tracking-widest hover:underline flex items-center gap-1 group"
                            >
                                View All
                                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'John Doe', role: 'Security', status: 'On Duty', color: 'bg-emerald-500', initial: 'JD' },
                                { name: 'Sarah Smith', role: 'Cleaning', status: 'Break', color: 'bg-amber-500', initial: 'SS' },
                                { name: 'Mike Ross', role: 'Maintenance', status: 'Off Duty', color: 'bg-slate-300', initial: 'MR' }
                            ].map((staff, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-black text-xs group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            {staff.initial}
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-slate-900">{staff.name}</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{staff.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-lg">
                                        <div className={`w-1.5 h-1.5 rounded-full ${staff.color}`}></div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{staff.status}</span>
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
