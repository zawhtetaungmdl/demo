'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import QuickView from './components/dashboard/QuickView';
import ParcelManagement from './components/dashboard/ParcelManagement';
import DailyStaffReport from './components/dashboard/DailyStaffReport';
import Department from './components/dashboard/Department';
import Properties from './components/dashboard/Properties';
import Settings from './components/dashboard/Settings';
import Payment from './components/dashboard/Payment';
import ServiceRequests from './components/dashboard/ServiceRequests';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeTab, setActiveTab] = useState('Quick View');

  const tabs = ['Quick View', 'Parcel Management', 'Daily Staff Report'];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('dashboard');
    setActiveTab('Quick View');
  };

  const handleNavigate = (section: string) => {
    if (section === 'logout') {
      handleLogout();
      return;
    }
    setActiveSection(section);
    // Reset to first tab when navigating back to dashboard
    if (section === 'dashboard') {
      setActiveTab('Quick View');
    }
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex bg-zinc-50 min-h-screen font-sans text-zinc-900">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="flex-1 md:ml-64 p-8">

        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <>
            <div className="flex flex-col space-y-6 mb-8">
              {/* Top Title */}
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Dashboard</h1>

              {/* Navigation Tabs */}
              <div className="border-b border-zinc-200">
                <div className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === tab
                        ? 'text-zinc-900'
                        : 'text-zinc-400 hover:text-zinc-600'
                        }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900 rounded-t-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="animate-in fade-in duration-300">
              {activeTab === 'Quick View' && <QuickView />}
              {activeTab === 'Parcel Management' && <ParcelManagement />}
              {activeTab === 'Daily Staff Report' && <DailyStaffReport />}
            </div>
          </>
        )}

        {/* Department Section */}
        {activeSection === 'department' && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Department</h1>
              <p className="text-zinc-500 mt-2">Manage your staff members and team</p>
            </div>
            <Department />
          </>
        )}

        {/* Placeholder sections for other menu items */}
        {activeSection === 'payment' && (
          <Payment />
        )}

        {activeSection === 'service-requests' && (
          <ServiceRequests />
        )}

        {activeSection === 'properties' && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Properties</h1>
              <p className="text-zinc-500 mt-2">Manage condo units and rental properties</p>
            </div>
            <Properties />
          </>
        )}

        {activeSection === 'settings' && (
          <Settings />
        )}
      </main>
    </div>
  );
}
