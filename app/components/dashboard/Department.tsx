'use client';

import React, { useState } from 'react';
import {
    Users,
    Search,
    Plus,
    Edit2,
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
    contactInfo: string;
    roleId: string;
    image?: string;
}

type ModalType = 'confirm' | 'add' | 'edit' | null;

export default function Department() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

    // Form states
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
        contactInfo: '',
        roleId: '',
        image: null as File | null
    });

    // Sample data
    const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
        {
            id: 'ST 006',
            name: 'Jane Cooper',
            role: 'Staff Manager',
            phoneNo: '081222656',
            nationalId: 'MJ15645465',
            gmail: 'abcdefi@gmail.com',
            contactInfo: 'jane@example.com',
            roleId: 'MGR001'
        },
        {
            id: 'ST 006',
            name: 'Jane Cooper',
            role: 'Staff Manager',
            phoneNo: '081222656',
            nationalId: 'MJ15645465',
            gmail: 'abcdefi@gmail.com',
            contactInfo: 'jane@example.com',
            roleId: 'MGR001'
        },
        {
            id: 'ST 006',
            name: 'Jane Cooper',
            role: 'Staff Manager',
            phoneNo: '081222656',
            nationalId: 'MJ15645465',
            gmail: 'abcdefi@gmail.com',
            contactInfo: 'jane@example.com',
            roleId: 'MGR001'
        },
        {
            id: 'ST 006',
            name: 'Jane Cooper',
            role: 'Staff Manager',
            phoneNo: '081222656',
            nationalId: 'MJ15645465',
            gmail: 'abcdefi@gmail.com',
            contactInfo: 'jane@example.com',
            roleId: 'MGR001'
        },
        {
            id: 'ST 006',
            name: 'Jane Cooper',
            role: 'Staff Manager',
            phoneNo: '081222656',
            nationalId: 'MJ15645465',
            gmail: 'abcdefi@gmail.com',
            contactInfo: 'jane@example.com',
            roleId: 'MGR001'
        },
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
                contactInfo: staff.contactInfo,
                roleId: staff.roleId,
                image: null
            });
        }
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedStaff(null);
        setConfirmForm({
            staffMember: '',
            date: '',
            startTime: '',
            endTime: '',
            description: '',
            image: null
        });
        setStaffForm({
            name: '',
            phoneNo: '',
            nationalId: '',
            staffId: '',
            contactInfo: '',
            roleId: '',
            image: null
        });
    };

    const handleDeleteStaff = (staffId: string) => {
        setStaffMembers(staffMembers.filter(s => s.id !== staffId));
        closeModal();
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-900">All Staff Member List</h2>
                            <p className="text-sm text-zinc-500 mt-0.5">Manage your team members</p>
                        </div>
                    </div>
                </div>

                {/* Search and Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <button
                        onClick={() => setActiveModal('confirm')}
                        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                        <Clock className="w-5 h-5" />
                        <span>Confirm Availability</span>
                    </button>
                    <button
                        onClick={() => setActiveModal('add')}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                        <Plus className="w-5 h-5" />
                        <span>Add Staff</span>
                    </button>
                </div>
            </div>

            {/* Staff Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Staff ID</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Phone NO</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">National ID</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">Gmail</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-zinc-600 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {filteredStaff.map((staff, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-zinc-50 transition-colors"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <td className="px-6 py-4 text-sm font-medium text-zinc-900">{staff.id}</td>
                                    <td className="px-6 py-4 text-sm text-zinc-700">{staff.name}</td>
                                    <td className="px-6 py-4 text-sm text-zinc-700">{staff.role}</td>
                                    <td className="px-6 py-4 text-sm text-zinc-700">{staff.phoneNo}</td>
                                    <td className="px-6 py-4 text-sm text-zinc-700">{staff.nationalId}</td>
                                    <td className="px-6 py-4 text-sm text-zinc-700">{staff.gmail}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center space-x-2">
                                            <button
                                                onClick={() => openModal('edit', staff)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit2 className="w-4 h-4" />
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
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-scale-in">
                        <div className="p-6 border-b border-zinc-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-zinc-900">Confirm Staff Availability</h3>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-zinc-500" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">Staff Member</label>
                                    <div className="relative">
                                        <UserCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                        <select
                                            value={confirmForm.staffMember}
                                            onChange={(e) => setConfirmForm({ ...confirmForm, staffMember: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        >
                                            <option value="">select staff member</option>
                                            {staffMembers.map((staff, idx) => (
                                                <option key={idx} value={staff.id}>{staff.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                        <input
                                            type="date"
                                            value={confirmForm.date}
                                            onChange={(e) => setConfirmForm({ ...confirmForm, date: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">Start Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                        <input
                                            type="time"
                                            value={confirmForm.startTime}
                                            onChange={(e) => setConfirmForm({ ...confirmForm, startTime: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">End Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                        <input
                                            type="time"
                                            value={confirmForm.endTime}
                                            onChange={(e) => setConfirmForm({ ...confirmForm, endTime: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">Description</label>
                                    <textarea
                                        value={confirmForm.description}
                                        onChange={(e) => setConfirmForm({ ...confirmForm, description: e.target.value })}
                                        placeholder="Add Details Description"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">Image Upload</label>
                                    <div className="border-2 border-dashed border-zinc-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                                        <input
                                            type="file"
                                            id="confirm-image"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload(e, 'confirm')}
                                            className="hidden"
                                        />
                                        <label htmlFor="confirm-image" className="cursor-pointer">
                                            <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                                            <p className="text-sm text-zinc-600 font-medium">Upload Image</p>
                                            {confirmForm.image && (
                                                <p className="text-xs text-emerald-600 mt-2">{confirmForm.image.name}</p>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-zinc-200 flex justify-end space-x-3">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 border border-zinc-300 text-zinc-700 rounded-xl font-medium hover:bg-zinc-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add New Staff Modal */}
            {activeModal === 'add' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-scale-in">
                        <div className="p-6 border-b border-zinc-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-zinc-900">Add New Staff Member</h3>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-zinc-500" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-3 gap-6">
                                {/* Image Upload */}
                                <div className="col-span-3 sm:col-span-1 flex justify-center">
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-zinc-300 flex items-center justify-center bg-zinc-50 hover:border-blue-400 transition-colors cursor-pointer">
                                            <input
                                                type="file"
                                                id="staff-image"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(e, 'staff')}
                                                className="hidden"
                                            />
                                            <label htmlFor="staff-image" className="cursor-pointer text-center">
                                                <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-1" />
                                                <p className="text-xs text-zinc-600">Upload Image</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="col-span-3 sm:col-span-2 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Staff Name</label>
                                        <input
                                            type="text"
                                            value={staffForm.name}
                                            onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-2">Phone No</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    type="text"
                                                    value={staffForm.phoneNo}
                                                    onChange={(e) => setStaffForm({ ...staffForm, phoneNo: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-2">National ID</label>
                                            <div className="relative">
                                                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    type="text"
                                                    value={staffForm.nationalId}
                                                    onChange={(e) => setStaffForm({ ...staffForm, nationalId: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-3 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Staff ID</label>
                                        <input
                                            type="text"
                                            value={staffForm.staffId}
                                            onChange={(e) => setStaffForm({ ...staffForm, staffId: e.target.value })}
                                            placeholder="eg. ST - 006"
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Contact Info / Gmail</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                            <input
                                                type="email"
                                                value={staffForm.contactInfo}
                                                onChange={(e) => setStaffForm({ ...staffForm, contactInfo: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Role ID</label>
                                        <select
                                            value={staffForm.roleId}
                                            onChange={(e) => setStaffForm({ ...staffForm, roleId: e.target.value })}
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select a role</option>
                                            <option value="MGR001">Staff Manager</option>
                                            <option value="DEV001">Developer</option>
                                            <option value="DES001">Designer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-zinc-200 flex justify-end space-x-3">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 border border-zinc-300 text-zinc-700 rounded-xl font-medium hover:bg-zinc-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={closeModal}
                                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Staff Modal */}
            {activeModal === 'edit' && selectedStaff && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-scale-in">
                        <div className="p-6 border-b border-zinc-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-zinc-900">Edit Staff Member</h3>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-zinc-500" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-3 gap-6">
                                {/* Image Upload */}
                                <div className="col-span-3 sm:col-span-1 flex justify-center">
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-zinc-300 flex items-center justify-center bg-zinc-50 hover:border-blue-400 transition-colors cursor-pointer">
                                            <input
                                                type="file"
                                                id="edit-staff-image"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(e, 'staff')}
                                                className="hidden"
                                            />
                                            <label htmlFor="edit-staff-image" className="cursor-pointer text-center">
                                                <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-1" />
                                                <p className="text-xs text-zinc-600">Upload Image</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="col-span-3 sm:col-span-2 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Staff Name</label>
                                        <input
                                            type="text"
                                            value={staffForm.name}
                                            onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-2">Phone No</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    type="text"
                                                    value={staffForm.phoneNo}
                                                    onChange={(e) => setStaffForm({ ...staffForm, phoneNo: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-2">National ID</label>
                                            <div className="relative">
                                                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                                <input
                                                    type="text"
                                                    value={staffForm.nationalId}
                                                    onChange={(e) => setStaffForm({ ...staffForm, nationalId: e.target.value })}
                                                    className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-3 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Staff ID</label>
                                        <input
                                            type="text"
                                            value={staffForm.staffId}
                                            onChange={(e) => setStaffForm({ ...staffForm, staffId: e.target.value })}
                                            placeholder="eg. ST - 006"
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Contact Info / Gmail</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                            <input
                                                type="email"
                                                value={staffForm.contactInfo}
                                                onChange={(e) => setStaffForm({ ...staffForm, contactInfo: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">Role ID</label>
                                        <select
                                            value={staffForm.roleId}
                                            onChange={(e) => setStaffForm({ ...staffForm, roleId: e.target.value })}
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select a role</option>
                                            <option value="MGR001">Staff Manager</option>
                                            <option value="DEV001">Developer</option>
                                            <option value="DES001">Designer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-zinc-200 flex justify-between">
                            <button
                                onClick={() => handleDeleteStaff(selectedStaff.id)}
                                className="px-6 py-2.5 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                            <div className="flex space-x-3">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-2.5 border border-zinc-300 text-zinc-700 rounded-xl font-medium hover:bg-zinc-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
