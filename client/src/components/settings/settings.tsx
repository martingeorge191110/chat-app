import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faLock, faCog } from "@fortawesome/free-solid-svg-icons";
import ProfileCard from "./user.profile.tsx";

const SettingsContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <ProfileCard />
        );
      case "notifications":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">Receive email notifications</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">Receive SMS notifications</span>
              </div>
            </div>
          </div>
        );
      case "account":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Change Password</label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-400"
                  placeholder="New Password"
                />
              </div>
            </div>
          </div>
        );
      case "general":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">General Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Language</span>
                <select className="rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-400">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full bg-gray-100 p-4">
        <ul className="space-y-4">
          <li>
            <button
              className={`w-full flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg ${
                activeSection === "profile" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("profile")}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Profile
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg ${
                activeSection === "notifications" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("notifications")}
            >
              <FontAwesomeIcon icon={faBell} className="mr-2" />
              Notifications
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg ${
                activeSection === "account" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("account")}
            >
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Account
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg ${
                activeSection === "general" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSection("general")}
            >
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              General
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full px-5">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default SettingsContent;
