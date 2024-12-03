import React, { useEffect, useState } from 'react';
import Input from '../../components/my.input.tsx';
import { useDispatch } from 'react-redux';
import { submit_register } from '../../redux/actions.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store.tsx';

const RegisterPage: React.FC = () => {

   const dispatch = useDispatch()
   const state = useSelector(
      (state: RootState) => state.user
   )

   const [first_n, setFirst_n] = useState("")
   const [last_n, setLast_n] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirm_password, setConfirm_password] = useState("")
   const [register, setreg] = useState<boolean>(false)

   const createAccount = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      const body = {first_n, last_n, email, password, confirm_password}
      try {
         const data = await submit_register(body)
         dispatch(data)
         console.log(data)
         setreg(true)
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      if (register)
         console.log(state)
   }, [register])

   return (
      <div className="min-h-screen bg-teal-600 flex items-center justify-center">
         {/* Container */}
         <div className="bg-white shadow-2xl rounded-lg w-full max-w-2xl" style={{boxShadow: "0 0 12px 10px rgba(255, 255, 255, 0.4)"}}>
            {/* Header */}
            <div className="bg-teal-600 text-white py-4 px-6 rounded-t-lg">
               <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
               <p className="text-center text-teal-200 mt-1">
                  Sign up to get started and enjoy all features!
               </p>
            </div>
            {/* Form */}
            <div className="p-6">
               <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-teal-800">
                           First Name
                        </label>
                        <Input id='first_n' type="text" stateValue={first_n} handleChange={setFirst_n} placeholder="John" className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500" />
                     </div>
                     <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-teal-800">
                           Last Name
                        </label>
                        <Input id='last_n' type="text" stateValue={last_n} handleChange={setLast_n} placeholder="Doe" className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500" />
                     </div>
                  </div>
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium text-teal-800">
                        Email Address
                     </label>
                     <Input id='email' type="email" stateValue={email} handleChange={setEmail} placeholder="you@example.com" className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label htmlFor="password" className="block text-sm font-medium text-teal-800">
                           Password
                        </label>
                        <Input id='password' type="password" stateValue={password} handleChange={setPassword} placeholder="••••••••" className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500" />
                     </div>
                     <div>
                        <label htmlFor="c_password" className="block text-sm font-medium text-teal-800">
                           Confirm Password
                        </label>
                        <Input id='c_password' type="password" stateValue={confirm_password} handleChange={setConfirm_password} placeholder="••••••••" className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"/>
                     </div>
                  </div>
                  <button onClick={async (e) => createAccount(e)} type="submit" className="w-full py-3 px-4 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                     Create Account
                  </button>
               </form>
               <div className="text-center mt-5">
                  <a href="#" className="text-sm text-teal-700 hover:underline"> Forgot Password?</a>
               </div>
               <div className="text-center mt-3">
                  <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                     <a href="./login" className="text-teal-700 font-bold hover:underline" >
                        Sign In
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;
