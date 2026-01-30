'use client';

import React, { useState } from 'react';
import { Search, Plus, Pencil, Trash2, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

type ViewType = 'condo' | 'rent';
type ModalType = 'add-unit' | 'edit-unit' | 'add-owner' | 'edit-owner' | null;

interface CondoUnit {
    no: number;
    ownerName: string;
    roomNo: string;
    unit: string;
    buildingNo: string;
    floorNo: string;
    price: string;
    phoneNo: string;
}

interface RentUnit {
    no: number;
    tenantName: string;
    roomNo: string;
    rentalType: string;
    rentalTerm: string;
    leaseExpiry: string;
    price: string;
    status: 'Rented' | 'Available' | 'Expiring Soon';
}

export default function Properties() {
    const [activeView, setActiveView] = useState<ViewType>('condo');
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const condoUnits: CondoUnit[] = [
        { no: 1, ownerName: 'Wade Warren', roomNo: '101', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '1st floor', price: 'B 8500', phoneNo: '0856565646' },
        { no: 2, ownerName: 'Esther Howard', roomNo: '102', unit: '2 bedroom', buildingNo: 'Building A', floorNo: '1st floor', price: 'B 12000', phoneNo: '0823456789' },
        { no: 3, ownerName: 'Cameron Williamson', roomNo: '103', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '1st floor', price: 'B 8500', phoneNo: '0891234567' },
        { no: 4, ownerName: 'Robert Fox', roomNo: '201', unit: '2 bedroom', buildingNo: 'Building A', floorNo: '2nd floor', price: 'B 13000', phoneNo: '0867891234' },
        { no: 5, ownerName: 'Marvin McKinney', roomNo: '202', unit: '3 bedroom', buildingNo: 'Building A', floorNo: '2nd floor', price: 'B 18000', phoneNo: '0845678912' },
        { no: 6, ownerName: 'Jerome Bell', roomNo: '203', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '2nd floor', price: 'B 9000', phoneNo: '0834567891' },
        { no: 7, ownerName: 'Kristin Watson', roomNo: '301', unit: '2 bedroom', buildingNo: 'Building A', floorNo: '3rd floor', price: 'B 14000', phoneNo: '0823456712' },
        { no: 8, ownerName: 'Darrell Steward', roomNo: '302', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '3rd floor', price: 'B 8800', phoneNo: '0812345678' },
    ];

    const rentUnits: RentUnit[] = [
        { no: 1, tenantName: 'Wade Warren', roomNo: '101', rentalType: '1 Bedroom', rentalTerm: '12 Months', leaseExpiry: 'Oct 12, 2024', price: '$850', status: 'Rented' },
        { no: 2, tenantName: 'Esther Howard', roomNo: '102', rentalType: '2 Bedroom', rentalTerm: '6 Months', leaseExpiry: 'Dec 05, 2024', price: '$1,200', status: 'Rented' },
        { no: 3, tenantName: '—', roomNo: '103', rentalType: 'Studio', rentalTerm: '—', leaseExpiry: '—', price: '$750', status: 'Available' },
        { no: 4, tenantName: 'Robert Fox', roomNo: '201', rentalType: '2 Bedroom', rentalTerm: '12 Months', leaseExpiry: 'Jan 20, 2025', price: '$1,300', status: 'Rented' },
        { no: 5, tenantName: 'Marvin McKinney', roomNo: '202', rentalType: '3 Bedroom', rentalTerm: '24 Months', leaseExpiry: 'Aug 15, 2025', price: '$1,800', status: 'Rented' },
        { no: 6, tenantName: '—', roomNo: '203', rentalType: '1 Bedroom', rentalTerm: '—', leaseExpiry: '—', price: '$900', status: 'Available' },
        { no: 7, tenantName: 'Kristin Watson', roomNo: '301', rentalType: '2 Bedroom', rentalTerm: '12 Months', leaseExpiry: 'Sep 30, 2024', price: '$1,400', status: 'Expiring Soon' },
        { no: 8, tenantName: 'Darrell Steward', roomNo: '302', rentalType: '1 Bedroom', rentalTerm: '6 Months', leaseExpiry: 'Nov 11, 2024', price: '$880', status: 'Rented' },
    ];

    const totalPages = 12;

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Rented': return 'bg-emerald-50 text-emerald-600';
            case 'Available': return 'bg-green-50 text-green-600';
            case 'Expiring Soon': return 'bg-orange-50 text-orange-600';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    const closeModal = () => setActiveModal(null);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Properties</h1>
                <p className="text-slate-500 text-sm mt-1">Manage condo units and rental properties</p>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {/* Tabs */}
                <div className="border-b border-slate-200 px-5">
                    <div className="flex space-x-6">
                        <button
                            onClick={() => setActiveView('condo')}
                            className={`py-4 text-sm font-medium transition-colors relative ${activeView === 'condo' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            Condo Unit
                            {activeView === 'condo' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900"></div>}
                        </button>
                        <button
                            onClick={() => setActiveView('rent')}
                            className={`py-4 text-sm font-medium transition-colors relative ${activeView === 'rent' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            Rent Unit
                            {activeView === 'rent' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900"></div>}
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="p-5 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by name"
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
                            Search
                        </button>
                        <div className="relative">
                            <select className="appearance-none px-4 py-2.5 pr-10 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                                <option>All Buildings</option>
                                <option>Building A</option>
                                <option>Building B</option>
                                <option>Building C</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="appearance-none px-4 py-2.5 pr-10 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                                <option>All Floor</option>
                                <option>1st Floor</option>
                                <option>2nd Floor</option>
                                <option>3rd Floor</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                        <button
                            onClick={() => setActiveModal(activeView === 'condo' ? 'add-unit' : 'add-owner')}
                            className="px-5 py-2.5 bg-emerald-500 text-white rounded-lg font-medium text-sm hover:bg-emerald-600 transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Add New Unit</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    {activeView === 'condo' ? (
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">No</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Owner's Name</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Room No</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Unit</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Building No</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Floor No</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Price</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Phone No</th>
                                    <th className="text-right py-4 px-5 text-xs font-medium text-slate-400 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {condoUnits.map((unit) => (
                                    <tr key={unit.no} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.no}</td>
                                        <td className="py-4 px-5 text-sm text-slate-900">{unit.ownerName}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.roomNo}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.unit}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.buildingNo}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.floorNo}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.price}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.phoneNo}</td>
                                        <td className="py-4 px-5">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => setActiveModal('edit-unit')} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">No</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Tenant Name</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Room No</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Rental Type</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Rental Term</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Lease Expiry</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Price / Mo</th>
                                    <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Status</th>
                                    <th className="text-right py-4 px-5 text-xs font-medium text-slate-400 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {rentUnits.map((unit) => (
                                    <tr key={unit.no} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.no}</td>
                                        <td className="py-4 px-5 text-sm text-slate-900">{unit.tenantName}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.roomNo}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.rentalType}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.rentalTerm}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.leaseExpiry}</td>
                                        <td className="py-4 px-5 text-sm text-slate-600">{unit.price}</td>
                                        <td className="py-4 px-5">
                                            <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${getStatusStyle(unit.status)}`}>
                                                {unit.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-5">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => setActiveModal('edit-owner')} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Pagination */}
                <div className="p-5 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">8</span> of <span className="font-medium text-slate-900">100</span> entries
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Previous</button>
                        <button className="w-8 h-8 bg-emerald-500 text-white text-sm font-medium rounded-lg">1</button>
                        <button className="w-8 h-8 text-slate-600 text-sm font-medium hover:bg-slate-100 rounded-lg transition-colors">2</button>
                        <button className="w-8 h-8 text-slate-600 text-sm font-medium hover:bg-slate-100 rounded-lg transition-colors">3</button>
                        <span className="text-slate-400">...</span>
                        <button className="w-8 h-8 text-slate-600 text-sm font-medium hover:bg-slate-100 rounded-lg transition-colors">12</button>
                        <button className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Next</button>
                    </div>
                </div>
            </div>

            {/* Add New Unit Modal (Condo) */}
            {activeModal === 'add-unit' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Add New Unit</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Owner Name</label>
                                <input type="text" placeholder="Enter name" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Room Number</label>
                                    <input type="text" placeholder="e.g., 101" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Building</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Building A</option>
                                        <option>Building B</option>
                                        <option>Building C</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Unit Type</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>1 bedroom</option>
                                        <option>2 bedroom</option>
                                        <option>3 bedroom</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Floor</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>1st floor</option>
                                        <option>2nd floor</option>
                                        <option>3rd floor</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Price</label>
                                    <input type="text" placeholder="e.g., B 8500" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                                    <input type="text" placeholder="Phone number" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Cancel</button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Add Unit</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Unit Modal (Condo) */}
            {activeModal === 'edit-unit' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Edit Unit</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Owner Name</label>
                                <input type="text" defaultValue="Wade Warren" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Room Number</label>
                                    <input type="text" defaultValue="101" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Building</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option selected>Building A</option>
                                        <option>Building B</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Unit Type</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option selected>1 bedroom</option>
                                        <option>2 bedroom</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Floor</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option selected>1st floor</option>
                                        <option>2nd floor</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Price</label>
                                    <input type="text" defaultValue="B 8500" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                                    <input type="text" defaultValue="0856565646" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Cancel</button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">Save Changes</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Rent Owner Modal */}
            {activeModal === 'add-owner' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Add Rent Unit</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Tenant Name</label>
                                <input type="text" placeholder="Enter name" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Room Number</label>
                                    <input type="text" placeholder="e.g., 101" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Rental Type</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Studio</option>
                                        <option>1 Bedroom</option>
                                        <option>2 Bedroom</option>
                                        <option>3 Bedroom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Rental Term</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>6 Months</option>
                                        <option>12 Months</option>
                                        <option>24 Months</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Price / Month</label>
                                    <input type="text" placeholder="e.g., $850" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Lease Expiry Date</label>
                                <input type="date" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Cancel</button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Add Unit</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Rent Owner Modal */}
            {activeModal === 'edit-owner' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Edit Rent Unit</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Tenant Name</label>
                                <input type="text" defaultValue="Wade Warren" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Room Number</label>
                                    <input type="text" defaultValue="101" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Rental Type</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option selected>1 Bedroom</option>
                                        <option>2 Bedroom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Rental Term</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option selected>12 Months</option>
                                        <option>6 Months</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Price / Month</label>
                                    <input type="text" defaultValue="$850" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Lease Expiry</label>
                                    <input type="date" defaultValue="2024-10-12" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Status</label>
                                    <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option selected>Rented</option>
                                        <option>Available</option>
                                        <option>Expiring Soon</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Cancel</button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
