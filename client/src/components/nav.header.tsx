import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.tsx";
import { UserAccount } from "../app.types.ts";



const NavHeader: React.FC<{handleTabChange: (tab: string) => void}> = ({handleTabChange}) => {

   const user: (UserAccount | null) = useSelector(
      (state: RootState) => state.user.data
   )

   console.log(user)

   return (
      <>
         <div className="bg-teal-600 border-b-[1px] border-gray-300 border-solid text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
               <img src={user?.avatar ? user.avatar : "https://via.placeholder.com/50"} alt="User" className="w-12 h-12 rounded-full object-cover"/>
               <div className="ml-3">
                  <h3 className="text-lg font-bold">{user?.first_n} {user?.last_n}</h3>
                  <p className="text-sm text-gray-200">Online</p>
               </div>
            </div>
            <div className="flex items-center space-x-4">
               <FontAwesomeIcon onClick={() => handleTabChange("search")} icon={faSearch} className="cursor-pointer hover:text-gray-200 transform transition-transform duration-300 hover:scale-110"/>
               <FontAwesomeIcon icon={faEllipsisV} className="cursor-pointer hover:text-gray-200"/>
            </div>
         </div>
      </>
   )
}

export default NavHeader;
