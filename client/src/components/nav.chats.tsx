import React, { useEffect } from "react";
import { newName } from "../redux/actions.tsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



const NavChat: React.FC = () =>{

   const dispatch = useDispatch()
   const state = useSelector(
      state  => state
   )

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

   useEffect(() => {
      if (state)
         console.log(state)
   }, [])
   return (
   <>
      <ul className="space-y-2">
         {chats.map((chat) => (
            <li onClick={() => {
               dispatch(newName(chat.userName))
            }} key={chat.id} className="flex items-center bg-white p-4 shadow rounded-lg cursor-pointer hover:bg-gray-200 transition transform hover:scale-105 duration-300">
            <img src={chat.userPhoto} alt={chat.userName} className="w-12 h-12 rounded-full object-cover mr-4"/>
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
               <span className="ml-2 bg-teal-600 text-white text-xs rounded-full px-2 py-1">
                  {chat.unreadCount}
               </span>)}
            </li>
         ))}
      </ul>
   </>
   )
}

export default NavChat;
