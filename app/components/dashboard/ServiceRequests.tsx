'use client';

import React, { useState } from 'react';
import { Plus, Search, Info, Clock, CheckCircle2, Wrench, Zap, Wind, Settings, Shield, X, Upload, ChevronDown } from 'lucide-react';

interface ServiceRequest {
    id: string;
    unit: string;
    resident: string;
    category: string;
    categoryIcon: React.ReactNode;
    priority: 'High' | 'Medium' | 'Low';
    date: string;
    status: 'New' | 'In Progress' | 'Resolved';
}

export default function ServiceRequests() {
    const [showNewRequestModal, setShowNewRequestModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);

    const requests: ServiceRequest[] = [
        { id: 'SR-001', unit: '101', resident: 'John Doe', category: 'Plumbing', categoryIcon: <Wrench className="w-4 h-4" />, priority: 'High', date: 'Jan 20, 2026', status: 'New' },
        { id: 'SR-002', unit: '205', resident: 'Sarah Smith', category: 'Electrical', categoryIcon: <Zap className="w-4 h-4" />, priority: 'Medium', date: 'Jan 19, 2026', status: 'In Progress' },
        { id: 'SR-003', unit: '304', resident: 'Mike Johnson', category: 'HVAC', categoryIcon: <Wind className="w-4 h-4" />, priority: 'High', date: 'Jan 18, 2026', status: 'In Progress' },
        { id: 'SR-004', unit: '102', resident: 'Emily Davis', category: 'General', categoryIcon: <Settings className="w-4 h-4" />, priority: 'Low', date: 'Jan 15, 2026', status: 'Resolved' },
        { id: 'SR-005', unit: '401', resident: 'Robert Wilson', category: 'Security', categoryIcon: <Shield className="w-4 h-4" />, priority: 'High', date: 'Jan 21, 2026', status: 'New' },
        { id: 'SR-006', unit: '203', resident: 'Lisa Brown', category: 'Plumbing', categoryIcon: <Wrench className="w-4 h-4" />, priority: 'Medium', date: 'Jan 14, 2026', status: 'Resolved' },
    ];

    const stats = {
        new: requests.filter(r => r.status === 'New').length,
        inProgress: requests.filter(r => r.status === 'In Progress').length,
        resolved: requests.filter(r => r.status === 'Resolved').length
    };

    const getPriorityStyle = (priority: string) => {
        switch (priority) {
            case 'High': return 'text-orange-500';
            case 'Medium': return 'text-yellow-500';
            case 'Low': return 'text-gray-400';
            default: return 'text-gray-400';
        }
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'New': return 'bg-blue-50 text-blue-600';
            case 'In Progress': return 'bg-orange-50 text-orange-600';
            case 'Resolved': return 'bg-emerald-50 text-emerald-600';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'New': return <Info className="w-3 h-3" />;
            case 'In Progress': return <Clock className="w-3 h-3" />;
            case 'Resolved': return <CheckCircle2 className="w-3 h-3" />;
            default: return null;
        }
    };

    const handleUpdate = (request: ServiceRequest) => {
        setSelectedRequest(request);
        setShowUpdateModal(true);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Service Requests</h1>
                    <p className="text-slate-500 text-sm mt-1">Manage maintenance and service requests</p>
                </div>
                <button
                    onClick={() => setShowNewRequestModal(true)}
                    className="px-5 py-2.5 bg-emerald-500 text-white rounded-lg font-medium text-sm hover:bg-emerald-600 transition-colors flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    <span>New Request</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Info className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">New Requests</p>
                        <p className="text-2xl font-bold text-slate-900">{stats.new}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">In Progress</p>
                        <p className="text-2xl font-bold text-slate-900">{stats.inProgress}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Resolved</p>
                        <p className="text-2xl font-bold text-slate-900">{stats.resolved}</p>
                    </div>
                </div>
            </div>

            {/* Main Card with Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {/* Filters */}
                <div className="p-5 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by unit or resident..."
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
                            Search
                        </button>
                        <div className="relative">
                            <select className="appearance-none px-4 py-2.5 pr-10 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                                <option>All Status</option>
                                <option>New</option>
                                <option>In Progress</option>
                                <option>Resolved</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="appearance-none px-4 py-2.5 pr-10 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                                <option>All Categories</option>
                                <option>Plumbing</option>
                                <option>Electrical</option>
                                <option>HVAC</option>
                                <option>General</option>
                                <option>Security</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">ID</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Unit</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Resident</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Category</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Priority</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Date</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Status</th>
                                <th className="text-right py-4 px-5 text-xs font-medium text-slate-400 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {requests.map((request) => (
                                <tr key={request.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="py-4 px-5 text-sm text-blue-600 font-medium">{request.id}</td>
                                    <td className="py-4 px-5">
                                        <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-medium rounded">{request.unit}</span>
                                    </td>
                                    <td className="py-4 px-5 text-sm text-slate-900">{request.resident}</td>
                                    <td className="py-4 px-5">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <span className="text-slate-400">{request.categoryIcon}</span>
                                            {request.category}
                                        </div>
                                    </td>
                                    <td className="py-4 px-5">
                                        <span className={`text-sm font-medium ${getPriorityStyle(request.priority)}`}>
                                            {request.priority}
                                        </span>
                                    </td>
                                    <td className="py-4 px-5 text-sm text-slate-600">{request.date}</td>
                                    <td className="py-4 px-5">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full ${getStatusStyle(request.status)}`}>
                                            {getStatusIcon(request.status)}
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-5 text-right">
                                        <button
                                            onClick={() => handleUpdate(request)}
                                            className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* New Request Modal */}
            {showNewRequestModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">New Service Request</h3>
                            <button onClick={() => setShowNewRequestModal(false)} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Unit</label>
                                    <input type="text" placeholder="e.g., 101" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Resident Name</label>
                                    <input type="text" placeholder="Enter name" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Select category</option>
                                        <option>Plumbing</option>
                                        <option>Electrical</option>
                                        <option>HVAC</option>
                                        <option>General</option>
                                        <option>Security</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Priority</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Select priority</option>
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
                                <textarea rows={3} placeholder="Describe the issue..." className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Image (Optional)</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer bg-slate-50">
                                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600">Upload an image</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={() => setShowNewRequestModal(false)} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={() => setShowNewRequestModal(false)} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                Create Request
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Status Modal */}
            {showUpdateModal && selectedRequest && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Update Status</h3>
                            <button onClick={() => setShowUpdateModal(false)} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="bg-slate-50 rounded-lg p-3">
                                <p className="text-sm text-slate-500">Request ID</p>
                                <p className="text-sm font-medium text-slate-900">{selectedRequest.id}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">New Status</label>
                                <select defaultValue={selectedRequest.status} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>New</option>
                                    <option>In Progress</option>
                                    <option>Resolved</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Notes (Optional)</label>
                                <textarea rows={3} placeholder="Add notes..." className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={() => setShowUpdateModal(false)} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={() => setShowUpdateModal(false)} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
