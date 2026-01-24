'use client';

import React, { useState } from 'react';
import { Search, Calendar, ChevronDown, X, Upload, Plus } from 'lucide-react';

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
        { resident: 'Robert Fox', room: 'A-101', tracking: '1ZALAZA123456789', received: '2026-1-20', status: 'Received' },
        { resident: 'Robert Fox', room: 'A-101', tracking: '1ZALAZA123456789', received: '2026-1-20', status: 'Received' },
        { resident: 'Robert Fox', room: 'A-101', tracking: '1ZALAZA123456789', received: '2026-1-20', status: 'Received' },
        { resident: 'Robert Fox', room: 'A-101', tracking: '1ZALAZA123456789', received: '2026-1-20', status: 'Pick up' },
        { resident: 'Robert Fox', room: 'A-101', tracking: '1ZALAZA123456789', received: '2026-1-20', status: 'Received' },
    ];

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setParcelForm({ ...parcelForm, image: file });
        }
    };

    const handleSave = () => {
        // Handle save logic here
        console.log('Saving parcel:', parcelForm);
        setShowModal(false);
        // Reset form
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

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="w-full bg-zinc-200/50 pl-10 pr-4 py-3 rounded-lg outline-none text-zinc-800 placeholder-zinc-500"
                        />
                    </div>

                    {/* Add Parcel Button - Replaces Filter */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                    >
                        <Plus className="w-5 h-5" />
                        <span className="font-medium">Add Parcel</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-600">Date Range</label>
                        <div className="relative">
                            <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-zinc-200/50 px-4 py-2.5 rounded-lg outline-none text-zinc-800" />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-600">Parcel status</label>
                        <div className="relative">
                            <select className="w-full bg-zinc-200/50 px-4 py-2.5 rounded-lg outline-none text-zinc-800 appearance-none cursor-pointer">
                                <option>All Statuses</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-600">Building Number</label>
                        <div className="relative">
                            <select className="w-full bg-zinc-200/50 px-4 py-2.5 rounded-lg outline-none text-zinc-800 appearance-none cursor-pointer">
                                <option>All Buildings</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-zinc-100/80 border-b border-zinc-200">
                            <th className="text-left py-4 px-6 text-xs font-bold text-zinc-900 uppercase tracking-wider">Resident</th>
                            <th className="text-left py-4 px-6 text-xs font-bold text-zinc-900 uppercase tracking-wider">Room</th>
                            <th className="text-left py-4 px-6 text-xs font-bold text-zinc-900 uppercase tracking-wider">Tracking</th>
                            <th className="text-left py-4 px-6 text-xs font-bold text-zinc-900 uppercase tracking-wider">Received</th>
                            <th className="text-right py-4 px-6 text-xs font-bold text-zinc-900 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                        {parcels.map((parcel, idx) => (
                            <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                                <td className="py-4 px-6 text-sm text-zinc-900 font-medium">{parcel.resident}</td>
                                <td className="py-4 px-6 text-sm text-zinc-600">{parcel.room}</td>
                                <td className="py-4 px-6 text-sm text-zinc-600 font-mono">{parcel.tracking}</td>
                                <td className="py-4 px-6 text-sm text-zinc-600">{parcel.received}</td>
                                <td className="py-4 px-6 text-right">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium text-white ${parcel.status === 'Received' ? 'bg-green-500' : 'bg-orange-500'
                                        }`}>
                                        {parcel.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Log New Parcel Modal - Compact Design */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in">
                        {/* Modal Header - Compact */}
                        <div className="p-4 border-b border-zinc-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-zinc-900">Log New Parcel</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-zinc-500" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Compact */}
                        <div className="p-4 space-y-4">
                            {/* Name Field */}
                            <div>
                                <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Name</label>
                                <input
                                    type="text"
                                    value={parcelForm.name}
                                    onChange={(e) => setParcelForm({ ...parcelForm, name: e.target.value })}
                                    placeholder="Enter resident's name"
                                    className="w-full px-3 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Date and Room Number */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Date</label>
                                    <input
                                        type="date"
                                        value={parcelForm.date}
                                        onChange={(e) => setParcelForm({ ...parcelForm, date: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Room Number</label>
                                    <input
                                        type="text"
                                        value={parcelForm.roomNumber}
                                        onChange={(e) => setParcelForm({ ...parcelForm, roomNumber: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Parcel Number and Status */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Parcel Number</label>
                                    <input
                                        type="text"
                                        value={parcelForm.parcelNumber}
                                        onChange={(e) => setParcelForm({ ...parcelForm, parcelNumber: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Status</label>
                                    <div className="relative">
                                        <select
                                            value={parcelForm.status}
                                            onChange={(e) => setParcelForm({ ...parcelForm, status: e.target.value })}
                                            className="w-full px-3 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="">Select status</option>
                                            <option value="Received">Received</option>
                                            <option value="Pick up">Pick up</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Image Upload - Compact */}
                            <div>
                                <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Image Of Parcel</label>
                                <div className="border-2 border-dashed border-zinc-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer bg-zinc-50">
                                    <input
                                        type="file"
                                        id="parcel-image"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <label htmlFor="parcel-image" className="cursor-pointer">
                                        <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                                        <p className="text-zinc-600 text-sm font-medium">Upload a file image</p>
                                        {parcelForm.image && (
                                            <p className="text-xs text-blue-600 mt-1.5">{parcelForm.image.name}</p>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer - Compact */}
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 px-4 py-2.5 bg-zinc-200 text-zinc-700 rounded-lg text-sm font-semibold hover:bg-zinc-300 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
