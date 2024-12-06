"use client";
import React, { useState } from "react";
import NavbarAndSidebar from "@/components/main/navbarsidebar";
import { Caveat } from "next/font/google";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Dashboard: React.FC = () => {
  const [upcomingBoxes, setUpcomingBoxes] = useState<string[]>([]);

  // Function to add a new upcoming box
  const addUpcomingBox = () => {
    setUpcomingBoxes((prevBoxes) => [...prevBoxes, `Box ${prevBoxes.length + 1}`]);
  };

  return (
    <div className="flex bg-black min-h-screen">
      <NavbarAndSidebar />
      <div className="flex-1 p-6 bg-black sm:ml-20 mt-20 bg-black">
        {/* Workflows Section */}
        <div className="border border-gray-700 rounded-lg p-4 bg-black shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-3xl font-semibold text-white ${caveat.className}`}>
              Workflows
            </h2>
            <button
              onClick={addUpcomingBox}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex justify-center text-center text-gray-200 mb-4">
            All workflows are listed below.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {upcomingBoxes.map((box, index) => (
              <Link href={`/workflows/${box}`} key={index}>
                <div className="text-white font-semibold border border-gray-800 rounded-md p-4 shadow-sm cursor-pointer hover:bg-neutral-800">
                  {box}
                  <div className="flex items-center space-x-4 mt-4">
                    <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                    <div className="space-y-2 w-full">
                      <Skeleton className="h-4 w-[80%] bg-blue-50" />
                      <Skeleton className="h-4 w-[90%] bg-blue-50" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
