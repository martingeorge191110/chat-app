import React from 'react';
import { faCalendar, faCog, faComments, faFileContract, faMessage, faRightFromBracket, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Sidebar: React.FC = () => {


   const items: Array<{
      item: string,
      icon: IconDefinition
   }> = [
      { item: 'Chat', icon: faComments },
      { item: 'Contact', icon: faFileContract },
      { item: 'Notification', icon: faMessage },
      { item: 'Calendar', icon: faCalendar },
      { item: 'Settings', icon: faCog },
   ]


   return (
      <div className="h-screen w-64 fixed left-0 bg-white flex flex-col justify-between shadow-lg">
      {/* User Profile */}
      <div className="flex flex-col items-center mt-10 mb-6">
         <img
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            src="https://via.placeholder.com/150"
            alt="User"
         />
         <h2 className="mt-4  text-gray-500 font-bold text-lg">User Name</h2>
      </div>

      {/* Navigation Items */}
      <nav className="flex-grow">
         <ul className="space-y-2">
            {items.map((item, index) => (
               <li key={index} className="px-4 p-4 pl-10 mt-5 flex items-center cursor-pointer text-gray-500 hover:bg-slate-500 hover:text-white transition-colors duration-300">
                  <span className="material-icons">
                        <FontAwesomeIcon icon={item.icon} />
                     </span>
                  <span className="ml-4 font-bold text-lg">{item.item}</span>
               </li>
            ))}
         </ul>
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 mb-4 border-t border-gray-500">
         <button className="w-full flex text-gray-500 font-bold text-lg border-gray-500 border-solid border-[2px] items-center justify-center py-2 hover:bg-gray-950 hover:border-none hover:text-white hover:bg-opacity-50 transition-colors duration-300 rounded">
            <span className="material-icons"><FontAwesomeIcon icon={faRightFromBracket}/></span>
            <span className="ml-4">Logout</span>
         </button>
      </div>
      </div>
   );
};

export default Sidebar;
