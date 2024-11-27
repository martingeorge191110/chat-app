import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faCog, faComment, faPhone, faArchive, faStar, faCircle,} from "@fortawesome/free-solid-svg-icons";




const ChatPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("chats");

   const chats = [
      {
         id: 1,
         userName: "Alice",
         lastMessage: "See you tomorrow!",
         userPhoto: "https://via.placeholder.com/50",
         time: "10:45 AM",
         unreadCount: 2,
      },
      {
         id: 2,
         userName: "Bob",
         lastMessage: "Can you send me the file?",
         userPhoto: "https://via.placeholder.com/50",
         time: "9:30 AM",
         unreadCount: 0,
      },
   ];

   const handleTabChange = (tab: string) => setActiveTab(tab);

   const renderContent = () => {
      switch (activeTab) {
         case "chats":
         return (
            <ul className="space-y-2">
               {chats.map((chat) => (
               <li
                  key={chat.id}
                  className="flex items-center bg-white p-4 shadow rounded-lg cursor-pointer hover:bg-gray-200 transition transform hover:scale-105 duration-300"
               >
                  <img
                     src={chat.userPhoto}
                     alt={chat.userName}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                     <div className="flex justify-between items-center">
                        <h4 className="font-bold text-gray-700">{chat.userName}</h4>
                        <span className="text-sm text-gray-500">{chat.time}</span>
                     </div>
                     <p className="text-sm text-gray-600 truncate">
                        {chat.lastMessage}
                     </p>
                  </div>
                  {chat.unreadCount > 0 && (
                     <span className="ml-2 bg-green-600 text-white text-xs rounded-full px-2 py-1">
                        {chat.unreadCount}
                     </span>
                  )}
               </li>
               ))}
            </ul>
         );
         case "status":
            return (
               <div className="p-4 text-center animate-fade-in">
                  <p className="text-gray-600">No new statuses available.</p>
               </div>
            );
         case "calls":
            return (
               <div className="p-4 text-center animate-fade-in">
                  <p className="text-gray-600">No recent calls available.</p>
               </div>
         );
         case "starred":
            return (
               <div className="p-4 text-center animate-fade-in">
                  <p className="text-gray-600">No starred messages yet.</p>
               </div>
         );
         case "archives":
            return (
            <div className="p-4 text-center animate-fade-in">
               <p className="text-gray-600">No archived chats found.</p>
            </div>
         );
         default:
            return null;
      }
   };

   return (
      <div className="h-screen w-80 bg-gray-100 flex flex-col shadow-lg">
         {/* Header: User Profile */}
         <div className="bg-green-600 text-white p-4 flex justify-between items-center">
         <div className="flex items-center">
            <img
               src="https://via.placeholder.com/50"
               alt="User"
               className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
               <h3 className="text-lg font-bold">John Doe</h3>
               <p className="text-sm text-gray-200">Online</p>
            </div>
         </div>
         <FontAwesomeIcon icon={faEllipsisV} className="cursor-pointer" />
         </div>

      {/* Tabs */}
      <div className="flex justify-around bg-white border-b border-gray-200">
        <button
          className={`flex-1 p-3 text-center transition-transform duration-200 ${
            activeTab === "chats" ? "bg-gray-200 font-bold scale-105" : "text-gray-600"
          }`}
          onClick={() => handleTabChange("chats")}
        >
          <FontAwesomeIcon icon={faComment} />
          <span className="ml-2">Chats</span>
        </button>
        <button
          className={`flex-1 p-3 text-center transition-transform duration-200 ${
            activeTab === "status" ? "bg-gray-200 font-bold scale-105" : "text-gray-600"
          }`}
          onClick={() => handleTabChange("status")}
        >
          <FontAwesomeIcon icon={faCircle} />
          <span className="ml-2">Status</span>
        </button>
        <button
          className={`flex-1 p-3 text-center transition-transform duration-200 ${
            activeTab === "calls" ? "bg-gray-200 font-bold scale-105" : "text-gray-600"
          }`}
          onClick={() => handleTabChange("calls")}
        >
          <FontAwesomeIcon icon={faPhone} />
          <span className="ml-2">Calls</span>
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="flex-grow overflow-y-auto">{renderContent()}</div>

      {/* Footer: Additional Options */}
      <div className="flex justify-between items-center p-4 border-t border-gray-300 bg-white">
        <button className="p-2 text-gray-700 hover:text-green-600 transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faStar} size="lg" onClick={() => handleTabChange("starred")} />
        </button>
        <button className="p-2 text-gray-700 hover:text-green-600 transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faArchive} size="lg" onClick={() => handleTabChange("archives")} />
        </button>
        <button className="p-2 text-gray-700 hover:text-green-600 transition-transform duration-300 hover:rotate-45">
          <FontAwesomeIcon icon={faCog} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
