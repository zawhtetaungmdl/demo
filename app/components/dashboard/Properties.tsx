'use client';

import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X, Upload, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

type ViewType = 'condo' | 'rent';
type ModalType = 'add-unit' | 'edit-unit' | 'add-owner' | 'edit-owner' | 'confirm-payment' | null;

interface Unit {
    no: number;
    ownerName: string;
    tenantName?: string;
    roomNo: string;
    unit: string;
    buildingNo: string;
    floorNo: string;
    price: string;
    phoneNo: string;
}

export default function Properties() {
    const [activeView, setActiveView] = useState<ViewType>('condo');
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Show 10 items per page

    // Sample data - 25 entries for pagination testing
    const units: Unit[] = [
        { no: 1, ownerName: 'Wade Warren', tenantName: 'John Smith', roomNo: '101', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '1st floor', price: 'B 8500', phoneNo: '0856565646' },
        { no: 2, ownerName: 'Esther Howard', tenantName: 'Sarah Johnson', roomNo: '102', unit: '2 bedroom', buildingNo: 'Building A', floorNo: '1st floor', price: 'B 12000', phoneNo: '0823456789' },
        { no: 3, ownerName: 'Cameron Williamson', tenantName: 'Mike Davis', roomNo: '103', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '1st floor', price: 'B 8500', phoneNo: '0891234567' },
        { no: 4, ownerName: 'Robert Fox', tenantName: 'Emily Brown', roomNo: '201', unit: '2 bedroom', buildingNo: 'Building A', floorNo: '2nd floor', price: 'B 13000', phoneNo: '0867891234' },
        { no: 5, ownerName: 'Marvin McKinney', tenantName: 'David Wilson', roomNo: '202', unit: '3 bedroom', buildingNo: 'Building A', floorNo: '2nd floor', price: 'B 18000', phoneNo: '0845678912' },
        { no: 6, ownerName: 'Jerome Bell', tenantName: 'Lisa Anderson', roomNo: '203', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '2nd floor', price: 'B 9000', phoneNo: '0834567891' },
        { no: 7, ownerName: 'Kristin Watson', tenantName: 'Tom Martinez', roomNo: '301', unit: '2 bedroom', buildingNo: 'Building A', floorNo: '3rd floor', price: 'B 14000', phoneNo: '0823456712' },
        { no: 8, ownerName: 'Darrell Steward', tenantName: 'Anna Garcia', roomNo: '302', unit: '1 bedroom', buildingNo: 'Building A', floorNo: '3rd floor', price: 'B 8800', phoneNo: '0812345678' },
        { no: 9, ownerName: 'Dianne Russell', tenantName: 'Chris Lee', roomNo: '303', unit: '2 bedroom', buildingNo: 'Building A', floorNo: '3rd floor', price: 'B 12500', phoneNo: '0898765432' },
        { no: 10, ownerName: 'Cody Fisher', tenantName: 'Jennifer Taylor', roomNo: '101', unit: '1 bedroom', buildingNo: 'Building B', floorNo: '1st floor', price: 'B 8500', phoneNo: '0887654321' },
        { no: 11, ownerName: 'Theresa Webb', tenantName: 'Kevin White', roomNo: '102', unit: '2 bedroom', buildingNo: 'Building B', floorNo: '1st floor', price: 'B 11500', phoneNo: '0876543219' },
        { no: 12, ownerName: 'Courtney Henry', tenantName: 'Michelle Harris', roomNo: '103', unit: '1 bedroom', buildingNo: 'Building B', floorNo: '1st floor', price: 'B 8700', phoneNo: '0865432198' },
        { no: 13, ownerName: 'Albert Flores', tenantName: 'Robert Clark', roomNo: '201', unit: '3 bedroom', buildingNo: 'Building B', floorNo: '2nd floor', price: 'B 19000', phoneNo: '0854321987' },
        { no: 14, ownerName: 'Jacob Jones', tenantName: 'Patricia Lewis', roomNo: '202', unit: '2 bedroom', buildingNo: 'Building B', floorNo: '2nd floor', price: 'B 13500', phoneNo: '0843219876' },
        { no: 15, ownerName: 'Guy Hawkins', tenantName: 'Daniel Walker', roomNo: '203', unit: '1 bedroom', buildingNo: 'Building B', floorNo: '2nd floor', price: 'B 9200', phoneNo: '0832198765' },
        { no: 16, ownerName: 'Leslie Alexander', tenantName: 'Nancy Hall', roomNo: '301', unit: '2 bedroom', buildingNo: 'Building B', floorNo: '3rd floor', price: 'B 14500', phoneNo: '0821987654' },
        { no: 17, ownerName: 'Ralph Edwards', tenantName: 'Steven Allen', roomNo: '302', unit: '1 bedroom', buildingNo: 'Building B', floorNo: '3rd floor', price: 'B 8900', phoneNo: '0819876543' },
        { no: 18, ownerName: 'Floyd Miles', tenantName: 'Karen Young', roomNo: '303', unit: '2 bedroom', buildingNo: 'Building B', floorNo: '3rd floor', price: 'B 12800', phoneNo: '0898765431' },
        { no: 19, ownerName: 'Ronald Richards', tenantName: 'Mark King', roomNo: '101', unit: '1 bedroom', buildingNo: 'Building C', floorNo: '1st floor', price: 'B 8600', phoneNo: '0887654329' },
        { no: 20, ownerName: 'Jane Cooper', tenantName: 'Betty Wright', roomNo: '102', unit: '3 bedroom', buildingNo: 'Building C', floorNo: '1st floor', price: 'B 20000', phoneNo: '0876543218' },
        { no: 21, ownerName: 'Brooklyn Simmons', tenantName: 'Paul Lopez', roomNo: '103', unit: '2 bedroom', buildingNo: 'Building C', floorNo: '1st floor', price: 'B 11800', phoneNo: '0865432187' },
        { no: 22, ownerName: 'Savannah Nguyen', tenantName: 'Dorothy Hill', roomNo: '201', unit: '1 bedroom', buildingNo: 'Building C', floorNo: '2nd floor', price: 'B 9100', phoneNo: '0854321976' },
        { no: 23, ownerName: 'Kathryn Murphy', tenantName: 'George Scott', roomNo: '202', unit: '2 bedroom', buildingNo: 'Building C', floorNo: '2nd floor', price: 'B 13200', phoneNo: '0843219865' },
        { no: 24, ownerName: 'Annette Black', tenantName: 'Sandra Green', roomNo: '203', unit: '1 bedroom', buildingNo: 'Building C', floorNo: '2nd floor', price: 'B 8750', phoneNo: '0832198754' },
        { no: 25, ownerName: 'Eleanor Pena', tenantName: 'Joshua Adams', roomNo: '301', unit: '2 bedroom', buildingNo: 'Building C', floorNo: '3rd floor', price: 'B 14200', phoneNo: '0821987643' },
    ];

    // Calculate pagination
    const totalPages = Math.ceil(units.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentUnits = units.slice(startIndex, endIndex);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const closeModal = () => setActiveModal(null);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
                {/* Tabs */}
                <div className="flex items-center space-x-6 mb-6 border-b border-zinc-200">
                    <button
                        onClick={() => setActiveView('condo')}
                        className={`pb-3 px-2 text-sm font-semibold transition-colors relative ${activeView === 'condo' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
                            }`}
                    >
                        Condo Unit
                        {activeView === 'condo' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900 rounded-t-full"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveView('rent')}
                        className={`pb-3 px-2 text-sm font-semibold transition-colors relative ${activeView === 'rent' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
                            }`}
                    >
                        Rent Unit
                        {activeView === 'rent' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900 rounded-t-full"></div>
                        )}
                    </button>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
                    <div className="flex-1 relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="w-full pl-10 pr-4 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <select className="flex-1 md:w-40 px-4 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Buildings</option>
                            <option>Building A</option>
                            <option>Building B</option>
                            <option>Building C</option>
                            <option>Building E</option>
                        </select>
                        <select className="flex-1 md:w-40 px-4 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Floor</option>
                            <option>Basement</option>
                            <option>1st Floor</option>
                            <option>2nd Floor</option>
                            <option>3rd Floor</option>
                        </select>
                        <button
                            onClick={() => setActiveModal(activeView === 'condo' ? 'add-unit' : 'add-owner')}
                            className="px-6 py-2.5 bg-zinc-900 text-white rounded-lg text-sm font-bold hover:bg-zinc-800 transition-all flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            <span>{activeView === 'condo' ? 'Add New Unit' : 'Add Rent Owner'}</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-zinc-200">
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">No</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">
                                    {activeView === 'condo' ? "Owner's Name" : "Tenant Name"}
                                </th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">ROOM No</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">Unit</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">Building No</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">Floor No</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">Price</th>
                                <th className="text-left py-3 px-4 text-xs font-bold text-zinc-900 uppercase">Phone no</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUnits.map((unit, idx) => (
                                <tr key={idx} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors group">
                                    <td className="py-3 px-4 text-sm text-zinc-900">{unit.no}</td>
                                    <td className="py-3 px-4 text-sm text-zinc-900">{activeView === 'condo' ? unit.ownerName : unit.tenantName}</td>
                                    <td className="py-3 px-4 text-sm text-zinc-900">{unit.roomNo}</td>
                                    <td className="py-3 px-4 text-sm text-zinc-900">{unit.unit}</td>
                                    <td className="py-3 px-4 text-sm text-zinc-900">{unit.buildingNo}</td>
                                    <td className="py-3 px-4 text-sm text-zinc-900">{unit.floorNo}</td>
                                    <td className="py-3 px-4 text-sm text-zinc-900">{unit.price}</td>
                                    <td className="py-3 px-4 text-sm text-zinc-900">
                                        <div className="flex items-center justify-between">
                                            <span>{unit.phoneNo}</span>
                                            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => setActiveModal(activeView === 'condo' ? 'edit-unit' : 'edit-owner')}
                                                    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-2 mt-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg transition-colors ${currentPage === 1
                            ? 'text-zinc-300 cursor-not-allowed'
                            : 'hover:bg-zinc-100 text-zinc-600'
                            }`}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === page
                                ? 'bg-blue-500 text-white'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg transition-colors ${currentPage === totalPages
                            ? 'text-zinc-300 cursor-not-allowed'
                            : 'hover:bg-zinc-100 text-zinc-600'
                            }`}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Pagination Info */}
                <div className="text-center mt-4 text-sm text-zinc-500">
                    Showing {startIndex + 1} to {Math.min(endIndex, units.length)} of {units.length} entries
                </div>
            </div>

            {/* Add New Unit Modal */}
            {activeModal === 'add-unit' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in">
                        <div className="p-4 border-b border-zinc-200">
                            <h3 className="text-lg font-bold text-zinc-900">Add New Unit</h3>
                        </div>
                        <div className="p-4 space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Customer Name</label>
                                <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Room Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Building Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Unit</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Phone no</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Price</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs text-zinc-500 mb-1">confidential documentation</label>
                                    <button className="w-full h-10 bg-zinc-200 rounded flex items-center justify-center hover:bg-zinc-300 transition-colors">
                                        <Plus className="w-5 h-5 text-zinc-700" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                ADD UNIT
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Unit Modal */}
            {activeModal === 'edit-unit' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in">
                        <div className="p-4 border-b border-zinc-200">
                            <h3 className="text-lg font-bold text-zinc-900">Edit Unit</h3>
                        </div>
                        <div className="p-4 space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Customer Name</label>
                                <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Room Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Building Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Unit</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Phone no</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Price</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs text-zinc-500 mb-1">confidential documentation</label>
                                    <button className="w-full h-10 bg-zinc-200 rounded flex items-center justify-center hover:bg-zinc-300 transition-colors">
                                        <Plus className="w-5 h-5 text-zinc-700" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Rent Owner Modal */}
            {activeModal === 'add-owner' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in max-h-[90vh] overflow-y-auto">
                        <div className="p-4 border-b border-zinc-200">
                            <h3 className="text-lg font-bold text-zinc-900">Add Rent Owner</h3>
                        </div>
                        <div className="p-4 space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Owner's Name</label>
                                <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Room Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Building Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Unit</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Phone no ( owner )</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Price</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs text-zinc-500 mb-1">Contracts documentation</label>
                                    <button className="w-full h-10 bg-zinc-200 rounded flex items-center justify-center hover:bg-zinc-300 transition-colors">
                                        <Plus className="w-5 h-5 text-zinc-700" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Tenant Name</label>
                                <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Contract Time</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Phone no ( Talent )</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Start Date</label>
                                    <input type="date" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">End Date</label>
                                    <input type="date" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Rent Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Rent Owner Modal */}
            {activeModal === 'edit-owner' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in max-h-[90vh] overflow-y-auto">
                        <div className="p-4 border-b border-zinc-200">
                            <h3 className="text-lg font-bold text-zinc-900">Edit Rent Owner</h3>
                        </div>
                        <div className="p-4 space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Owner's Name</label>
                                <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Room Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Building Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Unit</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Phone no ( owner )</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Price</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs text-zinc-500 mb-1">Contracts documentation</label>
                                    <button className="w-full h-10 bg-zinc-200 rounded flex items-center justify-center hover:bg-zinc-300 transition-colors">
                                        <Plus className="w-5 h-5 text-zinc-700" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Tenant Name</label>
                                <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Contract Time</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Phone no ( Talent )</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Start Date</label>
                                    <input type="date" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">End Date</label>
                                    <input type="date" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Save Data
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirm Payment Modal */}
            {activeModal === 'confirm-payment' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
                        <div className="p-4 border-b border-zinc-200">
                            <h3 className="text-lg font-bold text-zinc-900">Confirm Payment</h3>
                        </div>
                        <div className="p-4 space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Name</label>
                                <input type="text" placeholder="Enter Tenant name" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Date</label>
                                    <input type="date" defaultValue="2025-10-27" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Room Number</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Amount</label>
                                    <input type="text" className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Status</label>
                                    <select className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Select status</option>
                                        <option>Paid</option>
                                        <option>Pending</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Payment Proof</label>
                                <div className="border-2 border-dashed border-zinc-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors cursor-pointer bg-zinc-50">
                                    <input type="file" id="payment-proof" accept="image/*" className="hidden" />
                                    <label htmlFor="payment-proof" className="cursor-pointer">
                                        <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                                        <p className="text-zinc-600 text-sm">Upload a file image</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
