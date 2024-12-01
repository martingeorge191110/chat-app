// import { useState } from 'react'
import './index.css';
import './App.css'
// import LoginPage from './pages/login/login.tsx';
import SideBar from './components/side.bar.tsx';
import ChatPage from './pages/chats/chat.tsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <>
      <div className='bg-gradient-to-r from-gray-200 to-gray-100'>
        <SideBar/>
        <BrowserRouter >
          <Switch>
            <Route exact path={"/"} component={ChatPage}/>
          </Switch>
        </BrowserRouter>
        {/* <LoginPage/> */}
      </div>
    </>
  )
}

export default App
