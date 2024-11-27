// import { useState } from 'react'
import './index.css';
import './App.css'
import ChatPage from './pages/chats/chat_board';
// import LoginPage from './pages/login/login.tsx';


function App() {

  return (
    <>
      <div className='bg-gradient-to-r from-gray-200 to-gray-100'>
        {/* <Sidebar/> */}
        <ChatPage/>
        {/* <LoginPage/> */}
      </div>
    </>
  )
}

export default App
