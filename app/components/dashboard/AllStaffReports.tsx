'use client';

import React from 'react';
import { ChevronRight, FileText, Calendar, User } from 'lucide-react';

interface AllStaffReportsProps {
    onBack?: () => void;
}

export default function AllStaffReports({ onBack }: AllStaffReportsProps) {
    const reports = [
        {
            id: '#1024',
            date: 'Oct 26, 2025',
            staff: 'Jane Cooper',
            issues: ['Leaky faucet', 'Door lock'],
            status: 'Completed',
            description: 'Both issues were addressed. Replaced the washer in the faucet and tightened the screws on the door lock.'
        },
        {
            id: '#1023',
            date: 'Oct 25, 2025',
            staff: 'John Doe',
            issues: ['Broken light', 'AC Filter'],
            status: 'Completed',
            description: 'Replaced bulb and cleaned filters.'
        },
        {
            id: '#1022',
            date: 'Oct 24, 2025',
            staff: 'Robert Fox',
            issues: ['Wall crack', 'Paint chip'],
            status: 'Completed',
            description: 'Filled cracks and touched up paint.'
        },
        {
            id: '#1021',
            date: 'Oct 23, 2025',
            staff: 'Cody Fisher',
            issues: ['Drain blockage'],
            status: 'Completed',
            description: 'Unclogged kitchen drain.'
        },
        {
            id: '#1020',
            date: 'Oct 22, 2025',
            staff: 'Jane Cooper',
            issues: ['Window latch'],
            status: 'Completed',
            description: 'Replaced broken window latch.'
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
            {onBack && (
                <div className="flex justify-end">
                    <button
                        onClick={onBack}
                        className="px-4 py-2 bg-white border border-zinc-200 text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-50 transition-all shadow-sm active:scale-95"
                    >
                        Back to Overview
                    </button>
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 border-b border-zinc-100">
                                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Report ID</th>
                                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Submitted Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Staff Member</th>
                                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Maintenance Issues</th>
                                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-zinc-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                                <FileText className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="font-semibold text-zinc-900">{report.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-zinc-600 text-sm">
                                            <Calendar className="w-4 h-4 mr-2 opacity-40" />
                                            {report.date}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center text-zinc-600 text-sm">
                                            <User className="w-4 h-4 mr-2 opacity-40" />
                                            {report.staff}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {report.issues.map((issue, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-[10px] font-bold rounded-md">
                                                    {issue}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full">
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-white rounded-lg transition-all group-hover:shadow-sm border border-transparent hover:border-zinc-200">
                                            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
