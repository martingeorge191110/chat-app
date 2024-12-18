import { faArchive, faCog, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



const NavFooter: React.FC<{tab: string, handleTabChange: (tab: string) => void}> = ({tab, handleTabChange}) => {


   return (
      <>
         <div className="flex justify-between items-center p-4 border-t border-gray-300 bg-white">
            <button className={`${tab === "starred" ? "text-teal-600": ""} p-2 text-gray-700 hover:text-teal-600 transition-transform duration-300 hover:scale-110`}>
               <FontAwesomeIcon icon={faStar} size="lg" onClick={() => handleTabChange("starred")} />
            </button>
            <button className={`${tab === "archives" ? "text-teal-600": ""} p-2 text-gray-700 hover:text-teal-600 transition-transform duration-300 hover:scale-110`}>
               <FontAwesomeIcon icon={faArchive} size="lg" onClick={() => handleTabChange("archives")} />
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 transition-transform duration-300 hover:rotate-45">
               <FontAwesomeIcon icon={faCog} size="lg" onClick={() => handleTabChange("settings")}/>
            </button>
         </div>
      </>
   )
}

export default NavFooter;
