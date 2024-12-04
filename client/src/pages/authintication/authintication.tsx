import React, { useState } from "react";
import RegisterPage from "./register.tsx";
import LoginPage from "./login.tsx";
import ForgotPasswordPage from "./forget_password.tsx";


const Authintication: React.FC = () => {

   const [currentPage, setCurrentPage] = useState<string>("register")


   return (
      <>
         {
            currentPage === "register" ? <RegisterPage setPage={setCurrentPage}/> :
            currentPage === "login" ? <LoginPage setPage={setCurrentPage}/> : 
            <ForgotPasswordPage setPage={setCurrentPage}/>
         }
      </>
   )
}

export default Authintication;
