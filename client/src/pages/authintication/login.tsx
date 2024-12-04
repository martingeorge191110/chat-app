import React, { useEffect, useState } from "react";
import Input from "../../components/my.input.tsx";
import LoadingSpinner from "../../components/loading.spinner.tsx";
import { loginning, PayloadTypes } from "../../app.types.ts";
import { submit_login } from "../../redux/actions.tsx";
import { useDispatch } from "react-redux";





const LoginPage: React.FC<{setPage: (page: string) => void}> = ({setPage}) => {

   const dispatch = useDispatch()

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loginLoading, setLoginLoading] = useState(false);

   const [data, setData] = useState<{type: string, payload: PayloadTypes} | null>(null)

   const retreiveAccount = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      setLoginLoading(true)

      const body: loginning= {email, password}
      try {
         const data = await submit_login(body)
         console.log(data, "from function")
         setData(data)
         setLoginLoading(false)
      } catch (err) {

      }
   }

   useEffect(() => {
      if (data?.payload && data.payload.success === true)
         dispatch(data), localStorage.setItem("token", JSON.stringify(((data.payload.result) as {token?: string}).token))
      else
         console.log(data)
   }, [data])

   return (
      <div className="min-h-screen bg-teal-600 flex items-center justify-center">
         {/* Container */}
         <div className="bg-white shadow-2xl rounded-lg w-full max-w-lg" style={{ boxShadow: "0 0 12px 10px rgba(255, 255, 255, 0.4)" }}>
            {/* Header */}
            <div className="bg-teal-600 text-white py-4 px-6 rounded-t-lg">
               <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
               <p className="text-center text-teal-200 mt-1">
                  Sign in to your account to continue.
               </p>
            </div>
            {/* Form */}
         <div className="p-6">
            <form className="space-y-5">
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-teal-800">
                     Email Address
                  </label>
                  <Input id="email" type="email" stateValue={email} handleChange={setEmail} placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"/>
               </div>
               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-teal-800">
                     Password
                  </label>
                  <Input id="password" type="password" stateValue={password} handleChange={setPassword} placeholder="••••••••"
                  className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"/>
               </div>
               <button onClick={(e) => retreiveAccount(e)} type="submit"
                  className="w-full py-3 px-4 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                     {loginLoading ? <LoadingSpinner operation="Logging In" /> : "Sign In"}
               </button>
            </form>
            <div className="text-center mt-5">
               <button onClick={() => setPage("forget-password")} className="text-sm text-teal-700 hover:underline">
                  Forgot Password?
               </button>
            </div>
            <div className="text-center mt-3">
               <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button onClick={() => setPage("register")} className="text-teal-700 font-bold hover:underline">
                     Sign Up
                  </button>
               </p>
            </div>
         </div>
         </div>
      </div>
   );
};

export default LoginPage;
