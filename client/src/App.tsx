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
import WelcomePage from './pages/welcome.page.tsx';
import { useEffect, useState } from 'react';
import PageLoader from './pages/loading.page.tsx';
import { useDispatch } from 'react-redux';
import { check_verifing_account } from './redux/actions.tsx';
import ChatPage from './pages/chats/chat.tsx';


function App() {
  const dispatch = useDispatch()


  const token: string = useSelector(
    (state: RootState) => state.user.token
  )

  const [isLoading, setIsLoading] = useState(true)
  const [accountValid, setAccountValid] = useState(false)

  const step_2_verify_account = async () => {

    try {
      const result = await check_verifing_account(token)

      if (result.payload.success === true) {
        dispatch(result)
        setAccountValid(true)
      } else {
        setAccountValid(false)
      }
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setAccountValid(false)
    }
  }

  useEffect(() => {
    if (token)
      step_2_verify_account()
    else
      setIsLoading(false)

  }), [token]

  // useEffect(())

  return (
    <>
      <div className='bg-gradient-to-r from-gray-200 to-gray-100'>
        {
          isLoading ? <PageLoader /> :
          <BrowserRouter >
            <Route component={accountValid ? SideBar : Authintication} />
            <Route exact path={'/'} component={accountValid ? WelcomePage: Authintication} />
              <Switch>
                <Route exact path={"/chat"} component={ChatPage}/>
              {/* <Route exact path={"/"} component={LoginPage}/> */}
              </Switch>
          </BrowserRouter>
        }
      </div>
    </>
  )
}

export default App
