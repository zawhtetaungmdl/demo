'use client';

import React, { useState } from 'react';
import { Search, Plus, Upload, X, Calendar, Trash2, FileText } from 'lucide-react';

type ModalType = 'new-payment' | 'confirm-payment' | 'delete-payment' | null;
type PaymentStatus = 'Settled' | 'Overdue';

interface Payment {
    id: number;
    unit: string;
    resident: string;
    type: string;
    dueDate: string;
    amount: string;
    status: PaymentStatus;
    daysInfo?: string;
}

export default function Payment() {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

    // Sample payment data
    const payments: Payment[] = [
        { id: 101, unit: '00101', resident: 'John Doe', type: 'Room Fee', dueDate: 'Oct 25, 2023', amount: '$4500.00', status: 'Settled' },
        { id: 103, unit: '00103', resident: 'Sarah Smith', type: 'Room Fee', dueDate: 'Oct 26, 2023', amount: '$320.00', status: 'Overdue', daysInfo: '365 days late' },
        { id: 104, unit: '00104', resident: 'Mike Johnson', type: 'Room Fee', dueDate: 'Oct 29, 2023', amount: '$4500.00', status: 'Overdue', daysInfo: '730 days late' },
        { id: 105, unit: '00105', resident: 'Emily Davis', type: 'Room Fee', dueDate: 'Oct 27, 2023', amount: '$1250.00', status: 'Settled' },
        { id: 106, unit: '00106', resident: 'Robert Wilson', type: 'Room Fee', dueDate: 'Nov 1, 2023', amount: '$10000.00', status: 'Overdue', daysInfo: '337 days late' },
    ];

    const getStatusColor = (status: PaymentStatus) => {
        switch (status) {
            case 'Settled':
                return 'bg-green-100 text-green-700';
            case 'Overdue':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-zinc-100 text-zinc-700';
        }
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedPayment(null);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Payment</h1>
                    <p className="text-zinc-500 mt-2">Manage resident payments and billing</p>
                </div>
                <button
                    onClick={() => setActiveModal('new-payment')}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                    <Plus className="w-4 h-4" />
                    <span>New Payment</span>
                </button>
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
                                placeholder="Search unit or resident..."
                                className="w-full pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <select className="px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Status</option>
                            <option>Settled</option>
                            <option>Overdue</option>
                        </select>
                    </div>
                </div>

                {/* Payment Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-zinc-50">
                            <tr className="border-b border-zinc-200">
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Unit</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Resident</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Type</th>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Due Date</th>
                                <th className="text-right py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Amount</th>
                                <th className="text-center py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Status</th>
                                <th className="text-center py-3 px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {payments.map((payment) => (
                                <tr key={payment.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="py-3 px-4">
                                        <div className="px-2 py-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center text-white font-mono text-[10px] w-14">
                                            {payment.unit}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <p className="text-sm font-medium text-zinc-900">{payment.resident}</p>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="text-sm text-zinc-600">{payment.type}</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div>
                                            <p className="text-sm text-zinc-900">{payment.dueDate}</p>
                                            {payment.daysInfo && (
                                                <p className="text-xs text-red-600 font-medium mt-0.5">{payment.daysInfo}</p>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <span className="text-sm font-semibold text-zinc-900">{payment.amount}</span>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(payment.status)}`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => {
                                                    setSelectedPayment(payment);
                                                    setActiveModal(payment.status === 'Settled' ? 'delete-payment' : 'confirm-payment');
                                                }}
                                                className="px-4 py-1.5 bg-zinc-100 text-zinc-700 rounded-md text-xs font-semibold hover:bg-zinc-200 transition-colors border border-zinc-200"
                                            >
                                                Manage
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* New Payment Modal */}
            {activeModal === 'new-payment' && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-scale-in">
                        <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-zinc-900">New Payment</h3>
                            <button onClick={closeModal} className="text-zinc-400 hover:text-zinc-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Unit / Resident</label>
                                <select className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select unit or resident</option>
                                    <option>101 - John Doe</option>
                                    <option>103 - Sarah Smith</option>
                                    <option>104 - Mike Johnson</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Select a payment type</label>
                                <select className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Room Fee</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Due Date</label>
                                    <input
                                        type="date"
                                        defaultValue="2023-10-27"
                                        className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-700 mb-1">Amount</label>
                                    <input
                                        type="text"
                                        placeholder="$ 0.00"
                                        className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Status</label>
                                <select className="w-full px-3 py-2 bg-white border border-zinc-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select status</option>
                                    <option>Settled</option>
                                    <option>Overdue</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-700 mb-1">Proof Upload</label>
                                <div className="border-2 border-dashed border-zinc-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer bg-zinc-50">
                                    <input type="file" id="proof-upload" accept="image/*,.pdf" className="hidden" />
                                    <label htmlFor="proof-upload" className="cursor-pointer">
                                        <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                                        <p className="text-sm text-zinc-600 font-medium">Upload a file or drag and drop</p>
                                        <p className="text-xs text-zinc-400 mt-1">PNG, JPG, PDF up to 10MB</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Add Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirm Payment Modal */}
            {activeModal === 'confirm-payment' && selectedPayment && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in">
                        <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-zinc-900">Confirm Payment</h3>
                            <button onClick={closeModal} className="text-zinc-400 hover:text-zinc-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-zinc-600 mb-6">Please review the payment details before confirming:</p>
                            <div className="space-y-3 bg-zinc-50 rounded-lg p-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-sm text-zinc-600">Unit / Resident:</span>
                                    <span className="text-sm font-semibold text-zinc-900">{selectedPayment.unit} / {selectedPayment.resident}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-zinc-600">Type:</span>
                                    <span className="text-sm font-semibold text-zinc-900">{selectedPayment.type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-zinc-600">Payment Method:</span>
                                    <span className="text-sm font-semibold text-zinc-900">Credit Card</span>
                                </div>
                                <div className="flex justify-between pt-3 border-t border-zinc-200">
                                    <span className="text-sm font-semibold text-zinc-900">Total Amount:</span>
                                    <span className="text-lg font-bold text-blue-600">{selectedPayment.amount}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Confirm Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Payment Modal */}
            {activeModal === 'delete-payment' && selectedPayment && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm animate-scale-in">
                        <div className="p-4 border-b border-zinc-200">
                            <h3 className="text-lg font-bold text-zinc-900">Delete Payment</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-zinc-600 mb-2">Are you sure you want to delete this payment?</p>
                            <p className="text-sm text-zinc-900 font-semibold">This action cannot be undone.</p>
                        </div>
                        <div className="p-4 border-t border-zinc-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-zinc-200 text-zinc-700 rounded text-sm font-semibold hover:bg-zinc-300 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2 bg-red-500 text-white rounded text-sm font-semibold hover:bg-red-600 transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
