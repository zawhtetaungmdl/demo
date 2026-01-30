import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, CreditCard, Bell, Building2, Users, Settings, LogOut, CircleUser } from 'lucide-react';

interface SidebarProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
    const menuItems = [
        { name: 'Dashboard', id: 'dashboard', icon: LayoutDashboard, badge: '24' },
        { name: 'Payment', id: 'payment', icon: CreditCard },
        { name: 'Service Requests', id: 'service-requests', icon: Bell },
        { name: 'Properties', id: 'properties', icon: Building2 },
        { name: 'Department', id: 'department', icon: Users },
    ];

    const bottomItems = [
        { name: 'Zoey with use image', href: '#', icon: CircleUser },
        { name: 'Setting', href: '#', icon: Settings },
        { name: 'Log Out', href: '#', icon: LogOut },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white text-zinc-600 border-r border-zinc-200 flex flex-col font-sans z-50">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-zinc-800 tracking-tight">GEO SPACE</h1>
            </div>

            <nav className="flex-1 px-4 space-y-1 mt-4">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => onNavigate(item.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 group nav-ripple ${activeSection === item.id
                            ? 'bg-blue-50 text-blue-600 shadow-sm'
                            : 'hover:bg-zinc-50 text-zinc-500 hover:text-zinc-900'
                            }`}
                    >
                        <item.icon className={`w-5 h-5 mr-3 ${activeSection === item.id ? 'text-blue-600' : 'text-zinc-500 group-hover:text-zinc-900'}`} />
                        <span className="font-medium text-sm">{item.name}</span>
                        {item.badge && (
                            <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-md ${activeSection === item.id ? 'text-blue-600' : 'text-zinc-500'
                                }`}>
                                {item.badge}
                            </span>
                        )}
                    </button>
                ))}
            </nav>

            <div className="px-4 pb-8 space-y-1">
                {bottomItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => {
                            if (item.name === 'Setting') {
                                onNavigate('settings');
                            } else if (item.name === 'Zoey with use image') {
                                onNavigate('profile');
                            } else if (item.name === 'Log Out') {
                                onNavigate('logout');
                            }
                        }}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors group nav-ripple ${(item.name === 'Setting' && activeSection === 'settings') ||
                            (item.name === 'Zoey with use image' && activeSection === 'profile')
                            ? 'bg-blue-50 text-blue-600 shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                            }`}
                    >
                        <item.icon className={`w-5 h-5 mr-3 ${(item.name === 'Setting' && activeSection === 'settings') ||
                            (item.name === 'Zoey with use image' && activeSection === 'profile')
                            ? 'text-blue-600'
                            : 'text-zinc-800 group-hover:text-black'
                            }`} />
                        <span className="font-medium text-sm">{item.name}</span>
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
