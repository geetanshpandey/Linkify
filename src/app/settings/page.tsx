"use client";
import React, { useState } from "react";
import NavbarAndSidebar from "@/components/main/navbarsidebar";
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const SettingsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "Liam Livingstone",
    email: "liamecb@gmail.com",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center">
        <NavbarAndSidebar/>
      <div className="w-[80%] p-6 bg-neutral-800 rounded-lg shadow-lg mt-10 border border-gray-700">
        <h1 className="text-3xl font-bold text-blue-400 mb-6"><span className={`${caveat.className}`}>Settings</span></h1>
        <p className="text-gray-400 mb-8">Manage your account settings.</p>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Profile Image */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Profile Image
          </label>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center">
              <span className="text-gray-400">Image</span>
            </div>
            <button className="px-3 py-1 text-sm text-red-500 bg-gray-700 rounded-md hover:bg-gray-600">
              Remove
            </button>
          </div>
        </div>

        {/* Save Changes */}
        <button
          className="w-40 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
          onClick={() => console.log("Saved data:", formData)}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
