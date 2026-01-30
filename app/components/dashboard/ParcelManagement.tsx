'use client';

import React, { useState } from 'react';
import { Search, X, Upload, Plus, Pencil, Trash2, Filter, Package, ChevronRight, Calendar, User, Building } from 'lucide-react';

export default function ParcelManagement() {
    const [showModal, setShowModal] = useState(false);
    const [parcelForm, setParcelForm] = useState({
        name: '',
        date: '',
        roomNumber: '',
        parcelNumber: '',
        status: '',
        image: null as File | null
    });

    const parcels = [
        { resident: 'Robert Fox', room: '101', tracking: '1ZALAZA123456789', received: '2026-01-20', status: 'Received', building: 'Building A' },
        { resident: 'Sarah Wilson', room: '205', tracking: '2XBLBXB987654321', received: '2026-01-22', status: 'Received', building: 'Building B' },
        { resident: 'John Doe', room: '310', tracking: '3CCMCXC456123789', received: '2026-01-23', status: 'PICKUP', building: 'Building C' },
        { resident: 'Emily Davis', room: '402', tracking: '4DDMDXD321654987', received: '2026-01-25', status: 'Received', building: 'Building D' },
        { resident: 'Michael Brown', room: '105', tracking: '5EEME XE789456123', received: '2026-01-26', status: 'Received', building: 'Building A' },
    ];

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setParcelForm({ ...parcelForm, image: file });
        }
    };

    const handleSave = () => {
        console.log('Saving parcel:', parcelForm);
        setShowModal(false);
        setParcelForm({
            name: '',
            date: '',
            roomNumber: '',
            parcelNumber: '',
            status: '',
            image: null
        });
    };

    return (
        <div className="space-y-6">
            {/* Header / Stats Overlay */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Parcel Tracking</h2>
                    <p className="text-sm text-slate-500">Monitor and manage all incoming resident deliveries</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95"
                >
                    <Plus className="w-4 h-4" />
                    <span>Log New Parcel</span>
                </button>
            </div>

            {/* Filters Section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Search */}
                    <div className="flex-1">
                        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Search Resident</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Start typing resident name..."
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                />
                            </div>
                            <button className="px-5 py-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm active:scale-95">
                                <Search className="w-4 h-4" />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>

                    {/* Filter Group */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:w-3/5">
                        <div>
                            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Arrival Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Building</label>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <select className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer">
                                    <option>All Buildings</option>
                                    <option>Building A</option>
                                    <option>Building B</option>
                                    <option>Building C</option>
                                </select>
                                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Status</label>
                            <div className="relative">
                                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <select className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer">
                                    <option>All Status</option>
                                    <option>Received</option>
                                    <option>PICKUP</option>
                                </select>
                                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Resident Details</th>
                                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
                                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tracking Number</th>
                                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Arrival Info</th>
                                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {parcels.map((parcel, idx) => (
                                <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                                {parcel.resident.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{parcel.resident}</div>
                                                <div className="text-xs text-slate-500">Regular Resident</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-slate-700">{parcel.building}</span>
                                            <span className="text-xs text-slate-500">Unit: {parcel.room}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <Package className="w-4 h-4 text-slate-400" />
                                            <span className="text-sm font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded uppercase">{parcel.tracking}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-slate-600 font-medium">
                                        {new Date(parcel.received).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${parcel.status === 'Received'
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : 'bg-orange-100 text-orange-700'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${parcel.status === 'Received' ? 'bg-emerald-500' : 'bg-orange-500'
                                                }`} />
                                            {parcel.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex justify-end gap-1">
                                            <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Log New Parcel Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col animate-scale-in border border-slate-200">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Log New Parcel</h2>
                                <p className="text-xs text-slate-500 mt-0.5">Enter details of the received package</p>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 hover:bg-slate-200 rounded-lg transition-colors bg-slate-100"
                            >
                                <X className="w-5 h-5 text-slate-500" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-5 overflow-y-auto">
                            {/* Resident Selection */}
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Resident Search</label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        value={parcelForm.name}
                                        onChange={(e) => setParcelForm({ ...parcelForm, name: e.target.value })}
                                        placeholder="Type resident name..."
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Arrival Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="date"
                                            value={parcelForm.date}
                                            onChange={(e) => setParcelForm({ ...parcelForm, date: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Room / Unit</label>
                                    <input
                                        type="text"
                                        value={parcelForm.roomNumber}
                                        onChange={(e) => setParcelForm({ ...parcelForm, roomNumber: e.target.value })}
                                        placeholder="e.g. 402"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tracking ID</label>
                                    <input
                                        type="text"
                                        value={parcelForm.parcelNumber}
                                        onChange={(e) => setParcelForm({ ...parcelForm, parcelNumber: e.target.value })}
                                        placeholder="1Z XXXXX..."
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-mono"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Initial Status</label>
                                    <select
                                        value={parcelForm.status}
                                        onChange={(e) => setParcelForm({ ...parcelForm, status: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Received">Received</option>
                                        <option value="PICKUP">Pick up</option>
                                    </select>
                                </div>
                            </div>

                            {/* Image Upload Area */}
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Package Proof (Optional)</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer text-center group">
                                    <input
                                        type="file"
                                        id="parcel-image-upload"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <label htmlFor="parcel-image-upload" className="cursor-pointer">
                                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform bg-white border border-slate-200 shadow-sm">
                                            <Upload className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <p className="text-sm font-bold text-slate-700">Drop package photo here</p>
                                        <p className="text-xs text-slate-400 mt-1">or click to browse from device</p>
                                        {parcelForm.image && (
                                            <div className="mt-4 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full inline-flex items-center gap-2">
                                                <Package className="w-3.5 h-3.5" />
                                                {parcelForm.image.name}
                                            </div>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-slate-100 flex gap-3 bg-slate-50/50">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all active:scale-[0.98]"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
                            >
                                Confirm Log
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
