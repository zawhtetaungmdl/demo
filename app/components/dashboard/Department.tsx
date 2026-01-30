'use client';

import React, { useState } from 'react';
import {
    Users,
    Search,
    Plus,
    Pencil,
    Trash2,
    X,
    Upload,
    Clock,
    Calendar,
    Mail,
    Phone,
    IdCard,
    UserCircle2
} from 'lucide-react';

interface StaffMember {
    id: string;
    name: string;
    role: string;
    phoneNo: string;
    nationalId: string;
    gmail: string;
}

type ModalType = 'confirm' | 'add' | 'edit' | null;

export default function Department() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

    const [confirmForm, setConfirmForm] = useState({
        staffMember: '',
        date: '',
        startTime: '',
        endTime: '',
        description: '',
        image: null as File | null
    });

    const [staffForm, setStaffForm] = useState({
        name: '',
        phoneNo: '',
        nationalId: '',
        staffId: '',
        role: '',
        gmail: '',
        salary: '',
        image: null as File | null
    });

    const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
        { id: 'ST 006', name: 'Jane Cooper', role: 'Staff Manager', phoneNo: '081222656', nationalId: 'MJ15645465', gmail: 'abcdefi@gmail.com' },
        { id: 'ST 007', name: 'Robert Fox', role: 'Technician', phoneNo: '081222657', nationalId: 'MJ15645466', gmail: 'robert@gmail.com' },
        { id: 'ST 008', name: 'Cody Fisher', role: 'Security Guard', phoneNo: '081222658', nationalId: 'MJ15645467', gmail: 'cody@gmail.com' },
        { id: 'ST 009', name: 'Esther Howard', role: 'Staff Manager', phoneNo: '081222659', nationalId: 'MJ15645468', gmail: 'esther@gmail.com' },
        { id: 'ST 010', name: 'Jenny Wilson', role: 'Supervisor', phoneNo: '081222660', nationalId: 'MJ15645469', gmail: 'jenny@gmail.com' },
    ]);

    const filteredStaff = staffMembers.filter(staff =>
        staff.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, formType: 'confirm' | 'staff') => {
        const file = e.target.files?.[0];
        if (file) {
            if (formType === 'confirm') {
                setConfirmForm({ ...confirmForm, image: file });
            } else {
                setStaffForm({ ...staffForm, image: file });
            }
        }
    };

    const openModal = (type: ModalType, staff?: StaffMember) => {
        setActiveModal(type);
        if (staff && type === 'edit') {
            setSelectedStaff(staff);
            setStaffForm({
                name: staff.name,
                phoneNo: staff.phoneNo,
                nationalId: staff.nationalId,
                staffId: staff.id,
                role: staff.role,
                gmail: staff.gmail,
                salary: '',
                image: null
            });
        }
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedStaff(null);
        setConfirmForm({ staffMember: '', date: '', startTime: '', endTime: '', description: '', image: null });
        setStaffForm({ name: '', phoneNo: '', nationalId: '', staffId: '', role: '', gmail: '', salary: '', image: null });
    };

    const handleDeleteStaff = (staffId: string) => {
        setStaffMembers(staffMembers.filter(s => s.id !== staffId));
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Department</h1>
                <p className="text-slate-500 text-sm mt-1">Manage your staff members and team</p>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {/* Title Section */}
                <div className="p-5 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">All Staff Member List</h2>
                            <p className="text-sm text-slate-500">Manage your team members</p>
                        </div>
                    </div>

                    {/* Search and Actions */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by name"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
                            <Search className="w-4 h-4" />
                            <span>Search</span>
                        </button>
                        <button
                            onClick={() => setActiveModal('confirm')}
                            className="px-5 py-2.5 bg-emerald-500 text-white rounded-lg font-medium text-sm hover:bg-emerald-600 transition-colors flex items-center gap-2"
                        >
                            <Clock className="w-4 h-4" />
                            <span>Confirm</span>
                        </button>
                        <button
                            onClick={() => setActiveModal('add')}
                            className="px-5 py-2.5 bg-slate-800 text-white rounded-lg font-medium text-sm hover:bg-slate-700 transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Add Staff</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Staff ID</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Name</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Role</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Phone No</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">National ID</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-400 uppercase">Gmail</th>
                                <th className="text-right py-4 px-5 text-xs font-medium text-slate-400 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredStaff.map((staff, index) => (
                                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="py-4 px-5 text-sm text-slate-600">{staff.id}</td>
                                    <td className="py-4 px-5 text-sm text-slate-900">{staff.name}</td>
                                    <td className="py-4 px-5 text-sm text-slate-600">{staff.role}</td>
                                    <td className="py-4 px-5 text-sm text-slate-600">{staff.phoneNo}</td>
                                    <td className="py-4 px-5 text-sm text-slate-600">{staff.nationalId}</td>
                                    <td className="py-4 px-5 text-sm text-slate-600">{staff.gmail}</td>
                                    <td className="py-4 px-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => openModal('edit', staff)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteStaff(staff.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                            >
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

            {/* Confirm Staff Availability Modal */}
            {activeModal === 'confirm' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Confirm Staff Availability</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Staff Member</label>
                                    <select
                                        value={confirmForm.staffMember}
                                        onChange={(e) => setConfirmForm({ ...confirmForm, staffMember: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select staff</option>
                                        {staffMembers.map((staff, idx) => (
                                            <option key={idx} value={staff.id}>{staff.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Date</label>
                                    <input
                                        type="date"
                                        value={confirmForm.date}
                                        onChange={(e) => setConfirmForm({ ...confirmForm, date: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Start Time</label>
                                    <input
                                        type="time"
                                        value={confirmForm.startTime}
                                        onChange={(e) => setConfirmForm({ ...confirmForm, startTime: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">End Time</label>
                                    <input
                                        type="time"
                                        value={confirmForm.endTime}
                                        onChange={(e) => setConfirmForm({ ...confirmForm, endTime: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
                                <textarea
                                    value={confirmForm.description}
                                    onChange={(e) => setConfirmForm({ ...confirmForm, description: e.target.value })}
                                    placeholder="Add details..."
                                    rows={3}
                                    className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add New Staff Modal */}
            {activeModal === 'add' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Add New Staff Member</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex justify-center">
                                <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer">
                                    <input type="file" id="staff-image" accept="image/*" onChange={(e) => handleImageUpload(e, 'staff')} className="hidden" />
                                    <label htmlFor="staff-image" className="cursor-pointer text-center">
                                        <Upload className="w-5 h-5 text-slate-400 mx-auto" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Staff Name</label>
                                <input type="text" value={staffForm.name} onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })} placeholder="Enter name" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone No</label>
                                    <input type="text" value={staffForm.phoneNo} onChange={(e) => setStaffForm({ ...staffForm, phoneNo: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">National ID</label>
                                    <input type="text" value={staffForm.nationalId} onChange={(e) => setStaffForm({ ...staffForm, nationalId: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Staff ID</label>
                                    <input type="text" value={staffForm.staffId} onChange={(e) => setStaffForm({ ...staffForm, staffId: e.target.value })} placeholder="e.g., ST 006" className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Role</label>
                                    <select value={staffForm.role} onChange={(e) => setStaffForm({ ...staffForm, role: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">Select role</option>
                                        <option>Staff Manager</option>
                                        <option>Technician</option>
                                        <option>Security Guard</option>
                                        <option>Supervisor</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Gmail</label>
                                <input type="email" value={staffForm.gmail} onChange={(e) => setStaffForm({ ...staffForm, gmail: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                Add Staff
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Staff Modal */}
            {activeModal === 'edit' && selectedStaff && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Edit Staff Member</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex justify-center">
                                <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer">
                                    <input type="file" id="edit-staff-image" accept="image/*" onChange={(e) => handleImageUpload(e, 'staff')} className="hidden" />
                                    <label htmlFor="edit-staff-image" className="cursor-pointer text-center">
                                        <Upload className="w-5 h-5 text-slate-400 mx-auto" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Staff Name</label>
                                <input type="text" value={staffForm.name} onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone No</label>
                                    <input type="text" value={staffForm.phoneNo} onChange={(e) => setStaffForm({ ...staffForm, phoneNo: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">National ID</label>
                                    <input type="text" value={staffForm.nationalId} onChange={(e) => setStaffForm({ ...staffForm, nationalId: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Staff ID</label>
                                    <input type="text" value={staffForm.staffId} onChange={(e) => setStaffForm({ ...staffForm, staffId: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Role</label>
                                    <select value={staffForm.role} onChange={(e) => setStaffForm({ ...staffForm, role: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">Select role</option>
                                        <option>Staff Manager</option>
                                        <option>Technician</option>
                                        <option>Security Guard</option>
                                        <option>Supervisor</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Gmail</label>
                                <input type="email" value={staffForm.gmail} onChange={(e) => setStaffForm({ ...staffForm, gmail: e.target.value })} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
