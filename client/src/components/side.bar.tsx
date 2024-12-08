import React, { useState } from "react";
import NavHeader from "./nav.header";
import NavSection from "./nav.section";
import NavChat from "./nav.chats";
import NavFooter from "./nav.footer";




const SideBar: React.FC = () => {
   const [activeTab, setActiveTab] = useState<string>("chats");


   const handleTabChange = (tab: string) => setActiveTab(tab);

   return (
      <div className="h-screen w-[24rem]  bg-gray-100 fixed left-0 flex flex-col shadow-lg">
         {/* Header: User Profile */}
         <NavHeader handleTabChange={handleTabChange}/>

         {/* Tabs */}
         <NavSection activeTab={activeTab} handleTabChange={handleTabChange}/>

         {/* Dynamic Content */}
         <div className="flex-grow overflow-y-auto">{
            activeTab === "chats" ? <NavChat /> :
            <div className="p-4 text-center animate-fade-in">
               <p className="text-gray-600">No recent {activeTab} available.</p>
            </div> 
         }</div>

         {/* Footer: Additional Options */}
      
         <NavFooter tab={activeTab} handleTabChange={handleTabChange}/>
      </div>
   );
};

export default SideBar;
