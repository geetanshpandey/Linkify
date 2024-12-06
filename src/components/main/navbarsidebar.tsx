"use client";
import React, { useState } from 'react';
import { Search, Home, Menu, User, Settings, Bell, Trash, Plus, Edit, Star, Heart, LogOut, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavbarAndSidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-black border-b border-gray-800 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              {/* Mobile Toggle Button */}
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <Link size={20} className='text-gray-100 mr-2 mt-1'/>
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  Link<span className='text-blue-500'>ify</span>
                </span>
              </a>
            </div>
            <div className="relative flex items-center">
                <Button className='text-white bg-gray-600 hover:bg-gray-700 mr-4'>10/10</Button>
            <div className="relative hidden md:block mr-4">
                {/* Search Icon */}
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>

                {/* Search Input Field */}
                <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                />
                </div>
                <div className='h-8 w-8 bg-blue-600 rounded-full ml-2'></div>
                <div className='h-8 w-8 bg-blue-600 rounded-full ml-2'></div>
                <div className='h-8 w-8 bg-blue-600 rounded-full ml-2'></div>
            </div>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-20 h-screen pt-20 transition-transform bg-black border-r border-gray-900 dark:bg-gray-800 dark:border-gray-700 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
        >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-black dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Search size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Home size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Menu size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><User size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Settings size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><LogOut size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Bell size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Trash size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Plus size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="flex ml-3"><Edit size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="ml-3"><Star size={20}/></span>
                </a>
            </li>
            <li>
                <a
                href="#"
                className="flex items-center p-1 text-gray-200 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
                >
                <span className="ml-3"><Heart size={20}/></span>
                </a>
            </li>
            </ul>
        </div>
        </aside>
    </>
  );
};

export default NavbarAndSidebar;
