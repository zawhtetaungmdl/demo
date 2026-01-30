'use client';

import React, { useState } from 'react';
import { Search, Plus, X, AlertCircle, Clock, CheckCircle, Wrench, Zap, Shield, Wind, Settings2, Upload } from 'lucide-react';

type ModalType = 'new-request' | 'update-status' | null;
type RequestStatus = 'New' | 'In Progress' | 'Resolved';
type RequestPriority = 'High' | 'Medium' | 'Low';
type RequestCategory = 'Plumbing' | 'Electrical' | 'General' | 'HVAC' | 'Security';

interface ServiceRequest {
    id: string;
    unit: string;
    resident: string;
    category: RequestCategory;
    priority: RequestPriority;
    status: RequestStatus;
    description: string;
    dateSubmitted: string;
    assignedTo?: string;
}

export default function ServiceRequests() {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);
    const [statusFilter, setStatusFilter] = useState<string>('All Status');
    const [categoryFilter, setCategoryFilter] = useState<string>('All Categories');
    const [uploadedImage, setUploadedImage] = useState<File | null>(null);

    // Sample service requests data
    const [requests] = useState<ServiceRequest[]>([
        { id: 'SR-001', unit: '101', resident: 'John Doe', category: 'Plumbing', priority: 'High', status: 'New', description: 'Leaky faucet in kitchen sink causing water damage', dateSubmitted: 'Jan 20, 2026' },
        { id: 'SR-002', unit: '205', resident: 'Sarah Smith', category: 'Electrical', priority: 'Medium', status: 'In Progress', description: 'Light flickering in master bedroom', dateSubmitted: 'Jan 19, 2026', assignedTo: 'Mike Tech' },
        { id: 'SR-003', unit: '304', resident: 'Mike Johnson', category: 'HVAC', priority: 'High', status: 'In Progress', description: 'AC not cooling properly, temperature issues', dateSubmitted: 'Jan 18, 2026', assignedTo: 'David HVAC' },
        { id: 'SR-004', unit: '102', resident: 'Emily Davis', category: 'General', priority: 'Low', status: 'Resolved', description: 'Request for additional parking space', dateSubmitted: 'Jan 15, 2026' },
        { id: 'SR-005', unit: '401', resident: 'Robert Wilson', category: 'Security', priority: 'High', status: 'New', description: 'Door lock malfunction, security concern', dateSubmitted: 'Jan 21, 2026' },
        { id: 'SR-006', unit: '203', resident: 'Lisa Brown', category: 'Plumbing', priority: 'Medium', status: 'Resolved', description: 'Clogged bathroom drain', dateSubmitted: 'Jan 14, 2026' },
    ]);

    const getStatusColor = (status: RequestStatus) => {
        switch (status) {
            case 'New': return 'bg-blue-100 text-blue-700';
            case 'In Progress': return 'bg-orange-100 text-orange-700';
            case 'Resolved': return 'bg-green-100 text-green-700';
            default: return 'bg-zinc-100 text-zinc-700';
        }
    };

    const getStatusIcon = (status: RequestStatus) => {
        switch (status) {
            case 'New': return <AlertCircle className="w-3 h-3" />;
            case 'In Progress': return <Clock className="w-3 h-3" />;
            case 'Resolved': return <CheckCircle className="w-3 h-3" />;
            default: return null;
        }
    };

    const getPriorityColor = (priority: RequestPriority) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-700';
            case 'Medium': return 'bg-yellow-100 text-yellow-700';
            case 'Low': return 'bg-zinc-100 text-zinc-600';
            default: return 'bg-zinc-100 text-zinc-700';
        }
    };

    const getCategoryIcon = (category: RequestCategory) => {
        switch (category) {
            case 'Plumbing': return <Wrench className="w-4 h-4" />;
            case 'Electrical': return <Zap className="w-4 h-4" />;
            case 'HVAC': return <Wind className="w-4 h-4" />;
            case 'Security': return <Shield className="w-4 h-4" />;
            case 'General': return <Settings2 className="w-4 h-4" />;
            default: return <Settings2 className="w-4 h-4" />;
        }
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedRequest(null);
        setUploadedImage(null);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedImage(file);
        }
    };

    // Filter requests
    const filteredRequests = requests.filter(req => {
        const statusMatch = statusFilter === 'All Status' || req.status === statusFilter;
        const categoryMatch = categoryFilter === 'All Categories' || req.category === categoryFilter;
        return statusMatch && categoryMatch;
    });

    // Stats
    const newCount = requests.filter(r => r.status === 'New').length;
    const inProgressCount = requests.filter(r => r.status === 'In Progress').length;
    const resolvedCount = requests.filter(r => r.status === 'Resolved').length;

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Service Requests</h1>
                    <p className="text-zinc-500 mt-2">Manage maintenance and service requests</p>
                </div>
                <button
                    onClick={() => setActiveModal('new-request')}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                    <Plus className="w-4 h-4" />
                    <span>New Request</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-500">New Requests</p>
                            <p className="text-2xl font-bold text-zinc-900">{newCount}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-500">In Progress</p>
                            <p className="text-2xl font-bold text-zinc-900">{inProgressCount}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-500">Resolved</p>
                            <p className="text-2xl font-bold text-zinc-900">{resolvedCount}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                {/* Search and Filters */}
                <div className="p-4 border-b border-zinc-200 bg-zinc-50">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search by unit or resident..."
                                className="w-full pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>All Status</option>
                            <option>New</option>
                            <option>In Progress</option>
                            <option>Resolved</option>
                        </select>
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>All Categories</option>
                            <option>Plumbing</option>
                            <option>Electrical</option>
                            <option>HVAC</option>
                            <option>Security</option>
                            <option>General</option>
                        </select>
                    </div>
                </div>

                {/* Requests Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-zinc-50">
                            <tr className="border-b border-zinc-200">
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">ID</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Unit</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Resident</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Category</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Priority</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Date</th>
                                <th className="text-center py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Status</th>
                                <th className="text-center py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {filteredRequests.map((request) => (
                                <tr key={request.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="py-3 px-4">
                                        <span className="text-sm font-semibold text-blue-600">{request.id}</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                                            {request.unit}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <p className="text-sm font-medium text-zinc-900">{request.resident}</p>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-zinc-500">{getCategoryIcon(request.category)}</span>
                                            <span className="text-sm text-zinc-600">{request.category}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                                            {request.priority}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="text-sm text-zinc-600">{request.dateSubmitted}</span>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}>
                                            {getStatusIcon(request.status)}
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => {
                                                    setSelectedRequest(request);
                                                    setActiveModal('update-status');
                                                }}
                                                className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-md text-xs font-semibold hover:bg-zinc-200 transition-colors"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* New Request Modal */}
            {activeModal === 'new-request' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
                        <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-zinc-900">New Service Request</h3>
                            <button onClick={closeModal} className="text-zinc-400 hover:text-zinc-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Unit</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., 101"
                                        className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Resident Name</label>
                                    <input
                                        type="text"
                                        placeholder="Resident name"
                                        className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Category</label>
                                    <select className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Plumbing</option>
                                        <option>Electrical</option>
                                        <option>HVAC</option>
                                        <option>Security</option>
                                        <option>General</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Priority</label>
                                    <select className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Description</label>
                                <textarea
                                    rows={3}
                                    placeholder="Describe the issue..."
                                    className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Issue Image (Optional)</label>
                                <div className="border-2 border-dashed border-zinc-200 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer bg-zinc-50 relative">
                                    <input
                                        type="file"
                                        id="issue-image"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <label htmlFor="issue-image" className="cursor-pointer block">
                                        <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                                        <p className="text-zinc-600 text-sm font-medium">Upload issue image</p>
                                        <p className="text-xs text-zinc-400 mt-1">PNG, JPG up to 5MB</p>
                                        {uploadedImage && (
                                            <div className="mt-2 p-2 bg-blue-50 rounded-md border border-blue-100">
                                                <p className="text-xs text-blue-600 font-medium truncate">{uploadedImage.name}</p>
                                            </div>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Status Modal */}
            {activeModal === 'update-status' && selectedRequest && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in">
                        <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-zinc-900">Update Request Status</h3>
                            <button onClick={closeModal} className="text-zinc-400 hover:text-zinc-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-4">
                            <div className="bg-zinc-50 rounded-lg p-3">
                                <p className="text-xs text-zinc-500 mb-1">Request ID</p>
                                <p className="text-sm font-semibold text-zinc-900">{selectedRequest.id}</p>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">New Status</label>
                                <select
                                    defaultValue={selectedRequest.status}
                                    className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>New</option>
                                    <option>In Progress</option>
                                    <option>Resolved</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Assign To (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="Technician name"
                                    defaultValue={selectedRequest.assignedTo || ''}
                                    className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Notes</label>
                                <textarea
                                    rows={2}
                                    placeholder="Add notes..."
                                    className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Update Status
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
