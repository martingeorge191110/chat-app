// import { useState } from 'react'
import './index.css';
import './App.css'
// import Sidebar from './components/nav_bar/nav_bar';
import LoginPage from './pages/login/login.tsx';


function App() {

  return (
    <>
      <div className='bg-gradient-to-r from-gray-200 to-gray-100'>
        {/* <Sidebar/> */}
        <LoginPage/>
      </div>
    </>
  )
}

export default App
