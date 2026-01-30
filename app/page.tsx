'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import QuickView from './components/dashboard/QuickView';
import ParcelManagement from './components/dashboard/ParcelManagement';
import DailyStaffReport from './components/dashboard/DailyStaffReport';
import AllStaffReports from './components/dashboard/AllStaffReports';
import Department from './components/dashboard/Department';
import Properties from './components/dashboard/Properties';
import Settings from './components/dashboard/Settings';
import Profile from './components/dashboard/Profile';
import Payment from './components/dashboard/Payment';
import ServiceRequests from './components/dashboard/ServiceRequests';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('admin');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeTab, setActiveTab] = useState('Quick View');
  const [showAllReports, setShowAllReports] = useState(false);

  const allTabs = ['Quick View', 'Parcel Management', 'Daily Staff Report'];

  const handleLogin = (user: { email: string; role: string }) => {
    setIsLoggedIn(true);
    setUserRole(user.role);

    // Set initial section based on role
    if (user.role === 'technician') {
      setActiveSection('service-requests');
    } else {
      setActiveSection('dashboard');
      if (user.role === 'staff') {
        setActiveTab('Parcel Management');
      } else {
        setActiveTab('Quick View');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('admin');
    setActiveSection('dashboard');
    setActiveTab('Quick View');
    setShowAllReports(false);
  };

  const handleNavigate = (section: string) => {
    if (section === 'logout') {
      handleLogout();
      return;
    }
    setActiveSection(section);
    setShowAllReports(false);

    // Handle initial tab selection for specific roles when navigating back to dashboard
    if (section === 'dashboard') {
      if (userRole === 'staff') {
        setActiveTab('Parcel Management');
      } else {
        setActiveTab('Quick View');
      }
    }
  };

  // Role-based tab filtering for Dashboard
  const getVisibleTabs = () => {
    if (userRole === 'staff') {
      return ['Parcel Management'];
    }
    return allTabs;
  };

  const visibleTabs = getVisibleTabs();

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex bg-slate-50 min-h-screen font-sans text-slate-900">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} userRole={userRole} />
      <main className="flex-1 ml-56 p-8">

        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <>
            <div className="flex flex-col space-y-6 mb-8">
              {/* Top Title */}
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-black tracking-tight text-slate-900">Operations Control</h1>
              </div>

              {/* Navigation Tabs */}
              <div className="border-b border-slate-200">
                <div className="flex space-x-10">
                  {visibleTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setShowAllReports(false);
                      }}
                      className={`pb-4 text-[11px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab
                        ? 'text-blue-600'
                        : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full shadow-[0_-2px_8px_rgba(59,130,246,0.3)]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="animate-fade-in">
              {activeTab === 'Quick View' && userRole !== 'staff' && <QuickView onViewAllStaff={() => handleNavigate('department')} />}
              {activeTab === 'Parcel Management' && <ParcelManagement />}
              {activeTab === 'Daily Staff Report' && userRole !== 'staff' && (
                showAllReports ? <AllStaffReports onBack={() => setShowAllReports(false)} /> : <DailyStaffReport onShowAll={() => setShowAllReports(true)} />
              )}
            </div>
          </>
        )}

        {/* Department Section */}
        {activeSection === 'department' && (
          <Department />
        )}

        {/* Payment Section */}
        {activeSection === 'payment' && (
          <Payment />
        )}

        {/* Service Requests Section */}
        {activeSection === 'service-requests' && (
          <ServiceRequests />
        )}

        {/* Properties Section */}
        {activeSection === 'properties' && (
          <Properties />
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <Settings />
        )}

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <Profile />
        )}
      </main>
    </div>
  );
}
