"use client";
import React, { useState } from "react";
import NavbarAndSidebar from "@/components/main/navbarsidebar";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center">
      <NavbarAndSidebar />
      <div className="mt-20 mb-8 w-[80%] grid grid-cols-1 gap-6">
        {/* Section 1 */}
        <div className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg shadow-lg border border-gray-700">
          {/* Left Section: Logo, Name, and Description */}
          <div>
            <div className="flex">
              <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
              <h1 className={`text-2xl font-bold mt-4 ml-2 ${caveat.className}`}>Liam Livingstone</h1>
            </div>
            <p className="text-gray-400 mt-2">Software Engineer | Open Source Enthusiast</p>
          </div>

          {/* Right Section: Button */}
          <div>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
              Connect
            </button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg shadow-lg border border-gray-700">
          <div>
            <div className="flex">
              <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
              <h1 className={`text-2xl font-bold mt-4 ml-2 ${caveat.className}`}>John Doe</h1>
            </div>
            <p className="text-gray-400 mt-2">Backend Developer | Cloud Enthusiast</p>
          </div>
          <div>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
              Connect
            </button>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg shadow-lg border border-gray-700">
          <div>
            <div className="flex">
              <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
              <h1 className={`text-2xl font-bold mt-4 ml-2 ${caveat.className}`}>Alice Smith</h1>
            </div>
            <p className="text-gray-400 mt-2">UI/UX Designer | Illustrator</p>
          </div>
          <div>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
              Connect
            </button>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg shadow-lg border border-gray-700">
          <div>
            <div className="flex">
              <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
              <h1 className={`text-2xl font-bold mt-4 ml-2 ${caveat.className}`}>Emma Watson</h1>
            </div>
            <p className="text-gray-400 mt-2">DevOps Engineer | Automation Enthusiast</p>
          </div>
          <div>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
