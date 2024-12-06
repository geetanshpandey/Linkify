"use client";
import React, { useState } from "react";
import { Menu , Link } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-nuetral-800 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Link size={20} className="text-gray-100"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Link<span className="text-blue-500">ify</span>
          </span>
        </a>

        {/* User Menu and Mobile Toggle */}
        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
          <Button className="bg-blue-600 text-white hover:bg-blue-500 mr-6 rounded-full p-2 px-6">Clerk</Button>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full dark:focus:ring-gray-600"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full"
              src="/user" // Use a local file in the public folder
              width={40}
              height={40}
              alt="User Photo"
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-12 right-4 z-50 text-base list-none bg-neutral-800 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-100 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-300 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <Menu size={20} className="text-gray-100"/>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 bg-black`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-neutral-700 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/dashboard"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 bg-black"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/workflows"
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Workflows
              </a>
            </li>
            <li>
              <a
                href="/connections"
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Connection
              </a>
            </li>
            <li>
              <a
                href="/billing"
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Billings
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
