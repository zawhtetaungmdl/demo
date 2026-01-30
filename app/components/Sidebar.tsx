import React from 'react';
import { LayoutDashboard, CreditCard, Bell, Building2, Users, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
    activeSection: string;
    onNavigate: (section: string) => void;
    userRole: string;
}

const Sidebar = ({ activeSection, onNavigate, userRole }: SidebarProps) => {
    interface MenuItem {
        name: string;
        id: string;
        icon: React.ElementType;
        badge?: string;
    }

    const allMenuItems: MenuItem[] = [
        { name: 'Dashboard', id: 'dashboard', icon: LayoutDashboard },
        { name: 'Payment', id: 'payment', icon: CreditCard },
        { name: 'Service Requests', id: 'service-requests', icon: Bell },
        { name: 'Properties', id: 'properties', icon: Building2 },
        { name: 'Department', id: 'department', icon: Users },
    ];

    const getVisibleMenuItems = () => {
        if (userRole === 'technician') {
            return allMenuItems.filter(item => !['dashboard', 'payment', 'properties', 'department'].includes(item.id));
        }
        if (userRole === 'staff') {
            return allMenuItems.filter(item => !['payment', 'service-requests', 'department'].includes(item.id));
        }
        return allMenuItems;
    };

    const menuItems = getVisibleMenuItems();

    const getUserDetails = () => {
        switch (userRole) {
            case 'technician':
                return { name: 'Tech Support', role: 'Staff Technician', seed: 'Felix' };
            case 'staff':
                return { name: 'Operations Staff', role: 'Junior Staff', seed: 'Molly' };
            default:
                return { name: 'Zoey Admin', role: 'Condo Admin', seed: 'Zoey' };
        }
    };

    const user = getUserDetails();

    return (
        <aside className="fixed left-0 top-0 h-screen w-56 bg-white border-r border-slate-200 flex flex-col z-50">
            {/* Logo */}
            <div className="p-6">
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">GEO SPACE</h1>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 px-3 space-y-1 mt-2">
                {menuItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.name}
                            onClick={() => onNavigate(item.id)}
                            className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${isActive
                                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                                : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'
                                }`} />
                            <span className="font-medium text-sm">{item.name}</span>

                            {item.badge && (
                                <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${isActive
                                    ? 'bg-white/20 text-white'
                                    : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="px-3 pb-6 space-y-1">
                {/* User Profile */}
                <button
                    onClick={() => onNavigate('profile')}
                    className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors group relative ${activeSection === 'profile'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                >
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 overflow-hidden border border-slate-200">
                        <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.seed}&backgroundColor=f1f5f9`}
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <span className="font-bold text-[13px] block leading-tight">{user.name}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-tight ${activeSection === 'profile' ? 'text-white/70' : 'text-slate-400'}`}>{user.role}</span>
                    </div>
                </button>

                {/* Settings */}
                <button
                    onClick={() => onNavigate('settings')}
                    className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors group relative ${activeSection === 'settings'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                >
                    <Settings className={`w-5 h-5 mr-3 ${activeSection === 'settings' ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'
                        }`} />
                    <span className="font-medium text-sm">Settings</span>
                </button>

                {/* Logout */}
                <button
                    onClick={() => onNavigate('logout')}
                    className="w-full flex items-center px-3 py-2.5 rounded-lg transition-colors group text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                >
                    <LogOut className="w-5 h-5 mr-3 text-slate-400 group-hover:text-slate-600" />
                    <span className="font-medium text-sm">Log Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
