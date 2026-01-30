'use client';

import React from 'react';
import { MoreVertical, Wrench, Calendar, ChevronRight } from 'lucide-react';

interface DailyStaffReportProps {
    onShowAll?: () => void;
}

export default function DailyStaffReport({ onShowAll }: DailyStaffReportProps) {
    const reports = [
        {
            id: '#1024',
            date: 'Oct 26, 2025',
            issues: ['Leaky faucet', 'Main door lock'],
            description: 'Both issues were addressed. Replaced the washer in the faucet and tightened the screws on the door lock. Tested both and they are working correctly.',
            status: 'COMPLETED',
            image: '/images/faucet.png'
        },
        {
            id: '#1023',
            date: 'Oct 25, 2025',
            issues: ['Hallway Light flickering', 'HVAC Filter'],
            description: 'Replaced LED bulb in the North hallway. Checked HVAC filter on the 4th floor, unit is running efficiently after cleanup.',
            status: 'PENDING',
            image: '/images/light.png'
        },
        {
            id: '#1022',
            date: 'Oct 24, 2025',
            issues: ['Pool gate latch repair'],
            description: 'Secured the pool area gate latch which was not catching properly. Safety hazard resolved.',
            status: 'COMPLETED',
            image: '/images/gate.png'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header / Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-3">
                    <div className="relative">
                        <select className="pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none cursor-pointer hover:border-slate-300 transition-colors">
                            <option>Status: All</option>
                            <option>Completed</option>
                            <option>Pending</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="date"
                            className="pl-4 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer hover:border-slate-300 transition-colors"
                        />
                    </div>
                </div>

                {onShowAll && (
                    <button
                        onClick={onShowAll}
                        className="px-6 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-semibold hover:bg-emerald-600 transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2"
                    >
                        <span>Show all reports</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Report Cards */}
            <div className="grid grid-cols-1 gap-4">
                {reports.map((report, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Photo Container */}
                            <div className="relative flex-shrink-0">
                                <div className="w-full md:w-32 h-44 md:h-32 rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
                                    <img
                                        src={report.image}
                                        alt={report.issues[0]}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="absolute -top-2 -left-2 bg-white p-1.5 rounded-lg shadow-sm border border-slate-100">
                                    <Wrench className="w-4 h-4 text-blue-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                Report {report.id}
                                            </span>
                                            <div className="flex items-center text-slate-400 text-sm">
                                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                                <span>{report.date}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${report.status === 'COMPLETED'
                                                    ? 'bg-emerald-100 text-emerald-700'
                                                    : 'bg-orange-100 text-orange-700'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${report.status === 'COMPLETED' ? 'bg-emerald-500' : 'bg-orange-500'
                                                    }`} />
                                                {report.status}
                                            </span>
                                            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <MoreVertical className="w-4 h-4 text-slate-400" />
                                            </button>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {report.issues.join(' & ')}
                                    </h4>
                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 md:line-clamp-3">
                                        {report.description}
                                    </p>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2].map((_, i) => (
                                            <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                                {i === 0 ? 'JD' : 'SS'}
                                            </div>
                                        ))}
                                        <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                            +1
                                        </div>
                                    </div>
                                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group/btn">
                                        View Details
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
