'use client';

import React, { useState } from 'react';
import { Search, Plus, Upload, X } from 'lucide-react';

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

    const closeModal = () => {
        setActiveModal(null);
        setSelectedPayment(null);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Payment</h1>
                    <p className="text-slate-500 mt-1 text-sm">Manage resident payments and billing</p>
                </div>
                <button
                    onClick={() => setActiveModal('new-payment')}
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    <span>New Payment</span>
                </button>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {/* Search and Filters */}
                <div className="p-4 border-b border-slate-100">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search unit or resident..."
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
                            Search
                        </button>
                        <select className="px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                            <option>All Status</option>
                            <option>Settled</option>
                            <option>Overdue</option>
                        </select>
                    </div>
                </div>

                {/* Payment Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Unit</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Resident</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Type</th>
                                <th className="text-left py-4 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Due Date</th>
                                <th className="text-right py-4 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Amount</th>
                                <th className="text-center py-4 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
                                <th className="text-center py-4 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {payments.map((payment) => (
                                <tr key={payment.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="inline-block px-2.5 py-1 bg-blue-600 text-white rounded text-xs font-medium">
                                            {payment.unit}
                                        </span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <p className="text-sm font-medium text-slate-900">{payment.resident}</p>
                                    </td>
                                    <td className="py-4 px-5">
                                        <span className="text-sm text-slate-600">{payment.type}</span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <div>
                                            <p className="text-sm text-slate-900">{payment.dueDate}</p>
                                            {payment.daysInfo && (
                                                <p className="text-xs text-red-500 font-medium mt-0.5">{payment.daysInfo}</p>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 px-5 text-right">
                                        <span className="text-sm font-semibold text-slate-900">{payment.amount}</span>
                                    </td>
                                    <td className="py-4 px-5 text-center">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${payment.status === 'Settled'
                                            ? 'bg-emerald-50 text-emerald-600'
                                            : 'bg-red-50 text-red-600'
                                            }`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-5">
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => {
                                                    setSelectedPayment(payment);
                                                    setActiveModal(payment.status === 'Settled' ? 'delete-payment' : 'confirm-payment');
                                                }}
                                                className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors border border-slate-200"
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
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">New Payment</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Unit / Resident</label>
                                <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select unit or resident</option>
                                    <option>101 - John Doe</option>
                                    <option>103 - Sarah Smith</option>
                                    <option>104 - Mike Johnson</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Select a payment type</label>
                                <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Room Fee</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Due Date</label>
                                    <input
                                        type="date"
                                        defaultValue="2023-10-27"
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Amount</label>
                                    <input
                                        type="text"
                                        placeholder="$ 0.00"
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Status</label>
                                <select className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select status</option>
                                    <option>Settled</option>
                                    <option>Overdue</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Proof Upload</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer bg-slate-50">
                                    <input type="file" id="proof-upload" accept="image/*,.pdf" className="hidden" />
                                    <label htmlFor="proof-upload" className="cursor-pointer">
                                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                        <p className="text-sm text-slate-600 font-medium">Upload a file or drag and drop</p>
                                        <p className="text-xs text-slate-400 mt-1">PNG, JPG, PDF up to 10MB</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
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
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Confirm Payment</h3>
                            <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5">
                            <p className="text-sm text-slate-600 mb-5">Please review the payment details before confirming:</p>
                            <div className="space-y-3 bg-slate-50 rounded-lg p-4 mb-5">
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Unit / Resident:</span>
                                    <span className="text-sm font-medium text-slate-900">{selectedPayment.unit} / {selectedPayment.resident}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Type:</span>
                                    <span className="text-sm font-medium text-slate-900">{selectedPayment.type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-slate-500">Payment Method:</span>
                                    <span className="text-sm font-medium text-slate-900">Credit Card</span>
                                </div>
                                <div className="flex justify-between pt-3 border-t border-slate-200">
                                    <span className="text-sm font-medium text-slate-900">Total Amount:</span>
                                    <span className="text-lg font-bold text-blue-600">{selectedPayment.amount}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
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
                        <div className="p-5 border-b border-slate-200">
                            <h3 className="text-lg font-semibold text-slate-900">Delete Payment</h3>
                        </div>
                        <div className="p-5">
                            <p className="text-sm text-slate-600 mb-2">Are you sure you want to delete this payment?</p>
                            <p className="text-sm text-slate-900 font-medium">This action cannot be undone.</p>
                        </div>
                        <div className="p-5 border-t border-slate-200 flex gap-3">
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={closeModal} className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
