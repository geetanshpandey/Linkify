"use client";
import React, { useState } from "react";
import { Caveat } from "next/font/google";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NavbarAndSidebar from "@/components/main/navbarsidebar";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Toast, ToastAction, ToastProvider, ToastTitle, ToastDescription } from "@/components/ui/toast";

// Define the type for social media settings
interface SocialMediaSettings {
  setting1?: string;
  setting2?: string;
  // Add more settings as needed
}

const socialMediaActions = [
  { id: "facebook", name: "Facebook", description: "Facebook description here." },
  { id: "twitter", name: "Twitter", description: "Twitter description here." },
  { id: "instagram", name: "Instagram", description: "Instagram description here." },
  { id: "linkedin", name: "LinkedIn", description: "LinkedIn description here." },
  { id: "snapchat", name: "Snapchat", description: "Snapchat description here." },
  { id: "youtube", name: "YouTube", description: "YouTube description here." },
];

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Dashboard: React.FC = () => {
  const { workflowId } = useParams();
  const [editorContent, setEditorContent] = useState<any[]>([]); // Allow multiple items
  const [settings, setSettings] = useState<SocialMediaSettings>({});
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const moveToEditor = (socialMedia: any) => {
    // Check if the social media item already exists in the editor
    if (editorContent.some(item => item.id === socialMedia.id)) {
      setToastMessage(`${socialMedia.name} already exists in the editor.`);
      return;
    }

    setEditorContent((prevContent) => [...prevContent, socialMedia]);
    setSelectedSocialMedia(socialMedia); // Select the newly added item
    setSettings({});
  };

  const handleDragStart = (e: React.DragEvent, socialMedia: any) => {
    e.dataTransfer.setData("socialMedia", JSON.stringify(socialMedia));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("socialMedia");
    const socialMedia = JSON.parse(data);
    moveToEditor(socialMedia);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSettingsChange = (setting: string, value: any) => {
    setSettings((prevSettings: SocialMediaSettings) => ({
      ...prevSettings,
      [setting]: value,
    }));
  };

  const handleSelectSocialMedia = (socialMedia: any) => {
    setSelectedSocialMedia(socialMedia); // Update selected social media for settings
    setSettings({}); // Clear settings when selecting a new item
  };

  return (
    <ToastProvider>
      <div className="flex bg-black min-h-screen md:overflow-hidden inset-0">
        <NavbarAndSidebar />
        <div className="flex-1 p-6 sm:ml-20 mt-20 bg-black flex flex-col">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 w-full h-full">
            {/* Left section */}
            <div
              className="h-full p-6 bg-gray-800 text-white rounded-lg md:w-[70%] w-full"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <h1 className="text-3xl font-bold mb-4">Editor: {workflowId}</h1>
              {editorContent.length > 0 ? (
                <div className="space-y-4">
                  {editorContent.map((socialMedia, index) => (
                    <div
                      key={index}
                      className="bg-blue-500 p-4 rounded-lg cursor-pointer"
                      onClick={() => handleSelectSocialMedia(socialMedia)} // Update settings when clicked
                    >
                      <div className="flex">
                        <div className="h-10 w-10 bg-white rounded-full"></div>
                        <h2 className="text-xl font-semibold mt-2 ml-4">{socialMedia.name}</h2>
                      </div>
                      <p className="mt-1">{socialMedia.description}</p>
                      {selectedSocialMedia && selectedSocialMedia.id === socialMedia.id && (
                        <div className="mt-1">
                          <h3 className="text-sm">settings opened</h3>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Drag a social media section to the editor.</p>
              )}
            </div>

            {/* Right section */}
            <div className="h-full p-6 bg-gray-800 rounded-lg md:w-[30%] w-full flex-1">
              <Tabs defaultValue="actions" className="h-full">
                <TabsList>
                  <TabsTrigger value="actions" className="text-gray-400 text-lg font-semibold">
                    Actions
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="text-gray-400 text-lg font-semibold">
                    Settings
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="actions" className="h-full mt-4">
                  <div className="space-y-4 overflow-y-auto h-[90%]">
                    {socialMediaActions.map((socialMedia) => (
                      <div
                        key={socialMedia.id}
                        className="bg-gray-700 text-white px-2 py-1 rounded-lg cursor-pointer border border-gray-600"
                        draggable
                        onDragStart={(e) => handleDragStart(e, socialMedia)}
                      >
                        <div className="flex justify-between pt-1">
                          <div className="h-10 w-10 rounded-full bg-pink-600"></div>
                          <h3 className="font-semibold ml-2 mt-2">{socialMedia.name}</h3>
                        </div>
                        <p className="text-end -mt-1">{socialMedia.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="settings">
                  <div className="text-gray-400">
                    {selectedSocialMedia ? (
                      <>
                        <div className="flex justify-between space-x-6 border-b border-gray-600 pb-2">
                        <h2 className="text-xl font-semibold text-white pb-1 mt-6">
                          {selectedSocialMedia.name}
                        </h2>
                        <Button className="bg-blue-600 text-white mt-6">Connect</Button>
                        </div>
                        <div className="space-y-2 mt-4">
                          <div className="text-center">Action</div>
                          <div>
                            <label htmlFor="setting1" className="text-sm text-gray-200">
                              Text
                            </label>
                            <input
                              id="setting1"
                              type="text"
                              className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-md"
                              value={settings.setting1 || ""}
                              onChange={(e) => handleSettingsChange("setting1", e.target.value)}
                            />
                          </div>
                          <div>
                            <label htmlFor="setting2" className="text-sm text-gray-200">
                              Setting 2
                            </label>
                            <input
                              id="setting2"
                              type="text"
                              className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-md"
                              value={settings.setting2 || ""}
                              onChange={(e) => handleSettingsChange("setting2", e.target.value)}
                            />
                          </div>
                          <div className="text-center mt-4">
                            <Button className="bg-blue-500 text-white hover:bg-blue-600 px-10 mt-4">
                              Test
                            </Button>
                          </div>
                          <div className="text-center mt-4">
                            <Button className="bg-black text-white hover:bg-gray-900 px-10 mt-4">
                              Save
                            </Button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p>Select a social media action to configure its settings.</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Toast notification */}
        {toastMessage && (
          <Toast>
            <ToastTitle>{toastMessage}</ToastTitle>
            <ToastAction altText="Close">Close</ToastAction>
          </Toast>
        )}
      </div>
    </ToastProvider>
  );
};

export default Dashboard;
