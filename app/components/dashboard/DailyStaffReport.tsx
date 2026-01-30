'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DailyStaffReportProps {
    onShowAll?: () => void;
}

export default function DailyStaffReport({ onShowAll }: DailyStaffReportProps) {
    const reports = [
        {
            id: '#1024',
            date: 'Oct 26,2025',
            issues: ['Leaky faucet in the kitchen sink.', 'Main door lock is loose.'],
            description: 'Both issues were addressed. Replaced the washer in the faucet and tightened the screws on the door lock. Tested both and they are working correctly.',
            hasImage: true
        }
    ];

    return (
        <div className="space-y-6">

            {/* Filters */}
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <div className="relative">
                        <select className="bg-zinc-200/50 hover:bg-zinc-200 px-4 py-2 rounded-lg text-sm font-semibold text-zinc-900 outline-none cursor-pointer transition-colors">
                            <option>Status</option>
                            <option>All</option>
                            <option>Resolved</option>
                            <option>Pending</option>
                        </select>
                    </div>
                    <div className="relative">
                        <input
                            type="date"
                            className="bg-zinc-200/50 hover:bg-zinc-200 px-4 py-2 rounded-lg text-sm font-semibold text-zinc-900 outline-none cursor-pointer transition-colors"
                        />
                    </div>
                </div>

                {onShowAll && (
                    <button
                        onClick={onShowAll}
                        className="btn-primary px-4 py-2 text-sm font-semibold rounded-xl"
                    >
                        Show all report
                    </button>
                )}
            </div>

            {/* Report Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report, idx) => (
                    <div key={idx} className={`bg-white p-6 rounded-2xl shadow-sm border ${idx === 1 ? 'border-2 border-purple-500' : 'border-zinc-100'}`}>
                        <h3 className="text-2xl font-bold text-zinc-900">Report {report.id}</h3>
                        <p className="text-zinc-400 text-sm mt-1 mb-6">Submitted on {report.date}</p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-zinc-900 text-sm mb-2">Maintenance Issues</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {report.issues.map((issue, i) => (
                                        <li key={i} className="text-sm text-zinc-700">{issue}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-zinc-900 text-sm mb-2">Description</h4>
                                <p className="text-sm text-zinc-700 leading-relaxed">
                                    {report.description}
                                </p>
                            </div>

                            {report.hasImage && (
                                <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-xl h-48 w-full flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200/50 rounded-full blur-2xl"></div>
                                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-200/50 rounded-full blur-2xl"></div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm font-semibold text-zinc-600 z-10">Maintenance Photo</span>
                                    <span className="text-xs text-zinc-400 mt-1">Click to view full image</span>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
