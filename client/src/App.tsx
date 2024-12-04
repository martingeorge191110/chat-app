// import { useState } from 'react'
import './index.css';
import './App.css'
// import LoginPage from './pages/login/login.tsx';
import SideBar from './components/side.bar.tsx';
// import ChatPage from './pages/chats/chat.tsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authintication from './pages/authintication/authintication.tsx';
import { RootState } from './redux/store.tsx';
import { useSelector } from 'react-redux';


function App() {
  const token: string = useSelector(
    (state: RootState) => state.user.token
  )

  // setInterval(() => {
  //   console.log(token)
  // }, 2000);

  return (
    <>
      <div className='bg-gradient-to-r from-gray-200 to-gray-100'>
        <BrowserRouter >
          <Route exact path={'/'} component={token ? SideBar : Authintication} />
          <Switch>
            {/* <Route exact path={"/"} component={ChatPage}/> */}
            {/* <Route exact path={"/"} component={LoginPage}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
