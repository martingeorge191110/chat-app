import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



const NavHeader: React.FC = () => {


   return (
      <>
         <div className="bg-teal-600 border-b-[1px] border-gray-300 border-solid text-white p-4 flex justify-between items-center">
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
      </>
   )
}

export default NavHeader;
