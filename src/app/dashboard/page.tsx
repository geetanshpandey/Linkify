"use client";
import React from 'react';
import { Search, Home, User, Settings, Bell, Plus, Edit, Star, Heart, LogOut, Trash, Menu } from 'lucide-react';
import NavbarAndSidebar from '@/components/main/navbarsidebar';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-black h-screen">
        <NavbarAndSidebar/>
      {/* Main Content */}
      <div className="flex-1 p-6 mt-16 ml-20">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-semibold text-white"><span className={caveat.className}>Dashboard</span></div>
          <div className="flex items-center space-x-4">
            <span>10/10</span>
          </div>
        </div>

        {/* Empty Space */}
        <div className="h-96 border-dashed border-2 border-gray-300 text-center text-gray-500">
          Empty space
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
