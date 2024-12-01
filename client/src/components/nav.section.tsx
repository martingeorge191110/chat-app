import { faCircle, faComment, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



const NavSection: React.FC<{activeTab: string, handleTabChange: (tab: string) => void}> = ({activeTab, handleTabChange}) => {


   return (
      <>
         <div className="flex justify-around bg-white border-b border-gray-200">
            <button className={`flex-1 p-3 text-center hover:text-teal-600 transition-transform duration-200 ${
               activeTab === "chats" ? "bg-gray-200 font-bold" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("chats")}>
               <FontAwesomeIcon icon={faComment} />
               <span className="ml-2">Chats</span>
            </button>
            <button className={`flex-1 p-3 hover:text-teal-600 text-center transition-transform duration-200 ${
               activeTab === "status" ? "bg-gray-200 font-bold " : "text-gray-600"
            }`}
            onClick={() => handleTabChange("status")}>
               <FontAwesomeIcon icon={faCircle} />
               <span className="ml-2">Status</span>
            </button>
            <button className={`flex-1 p-3 hover:text-teal-600 text-center transition-transform duration-200 ${
               activeTab === "calls" ? "bg-gray-200 font-bold" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("calls")}>
               <FontAwesomeIcon icon={faPhone} />
               <span className="ml-2">Calls</span>
            </button>
         </div>
      </>
   )
}

export default NavSection;
