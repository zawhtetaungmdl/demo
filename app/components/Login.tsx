'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Building2, Mail, ArrowRight, AlertCircle } from 'lucide-react';

interface LoginProps {
    onLogin: (user: { email: string; role: string }) => void;
}

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const credentials: { [key: string]: string } = {
            'admin@geospace.com': 'admin',
            'Technician@geospace.com': 'technician',
            'Staff@geospace.com': 'staff'
        };

        if (password === 'demo1234' && credentials[email]) {
            onLogin({ email, role: credentials[email] });
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Image */}
            <div className="hidden lg:block relative h-full">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Skyscraper"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Right Column: Form */}
            <div className="flex flex-col justify-center items-center p-8 bg-white h-full overflow-y-auto">
                <div className="w-full max-w-[400px] space-y-8">
                    {/* Header */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-slate-900 tracking-tight">CMS</span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900">Employee Login</h1>
                        <p className="text-slate-500">Log in to your Condo Management System account</p>
                    </div>

                    {error && (
                        <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm font-bold animate-shake">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p>{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label className="block text-sm font-semibold text-slate-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full h-12 px-4 pr-10 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                                    required
                                />
                                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <label className="block text-sm font-semibold text-slate-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full h-12 px-4 pr-10 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center space-x-2 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="peer h-4 w-4 border-slate-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                                    />
                                </div>
                                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">Remember me</span>
                            </label>
                            <button
                                type="button"
                                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group"
                        >
                            Sign In
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="text-center text-sm text-slate-500 mt-8 space-y-4">
                        <p>
                            Forgot your employee credentials?{' '}
                            <button className="text-slate-700 font-semibold hover:underline">
                                Contact your IT administrator
                            </button>
                        </p>
                        <div className="pt-4 border-t border-slate-100 flex flex-col gap-1 items-center">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Demo Accounts</p>
                            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                                <span className="text-[10px] font-bold text-slate-400 italic">admin@geospace.com</span>
                                <span className="text-[10px] font-bold text-slate-400 italic">Technician@geospace.com</span>
                                <span className="text-[10px] font-bold text-slate-400 italic">Staff@geospace.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
