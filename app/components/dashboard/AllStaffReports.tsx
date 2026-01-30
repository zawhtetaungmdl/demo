'use client';

import React from 'react';
import { ChevronRight, FileText, Calendar, User, ArrowLeft, MoreHorizontal, CheckCircle2 } from 'lucide-react';

interface AllStaffReportsProps {
    onBack?: () => void;
}

export default function AllStaffReports({ onBack }: AllStaffReportsProps) {
    const reports = [
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
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h2 className="text-xl font-black text-slate-900">Historical Staff Reports</h2>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">Detailed archive of all maintenance activities and reports</p>
                </div>

                {onBack && (
                    <button
                        onClick={onBack}
                        className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm active:scale-95"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Overview</span>
                    </button>
                )}
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-6 py-5 text-[11px] font-black text-slate-500 uppercase tracking-widest">Report Reference</th>
                                <th className="px-6 py-5 text-[11px] font-black text-slate-500 uppercase tracking-widest">Activity Date</th>
                                <th className="px-6 py-5 text-[11px] font-black text-slate-500 uppercase tracking-widest">Assigned Staff</th>
                                <th className="px-6 py-5 text-[11px] font-black text-slate-500 uppercase tracking-widest">Tasks / Issues</th>
                                <th className="px-6 py-5 text-[11px] font-black text-slate-500 uppercase tracking-widest">Final Status</th>
                                <th className="px-6 py-5 text-[11px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                                                <FileText className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-black text-slate-900">{report.id}</span>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Maintenance</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center text-slate-600 text-sm font-semibold">
                                            <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                                            {report.date}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-600 border border-slate-200 uppercase">
                                                {report.staff.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="text-sm font-bold text-slate-700">{report.staff}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-wrap gap-1.5">
                                            {report.issues.map((issue, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-slate-100/80 text-slate-500 text-[10px] font-black rounded-lg border border-slate-200 uppercase tracking-tight">
                                                    {issue}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-xl border border-emerald-100 uppercase tracking-widest">
                                            <CheckCircle2 className="w-3 h-3 mr-1.5" />
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
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
