import React from 'react';

const PhonePage: React.FC = () => {




   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-700 to-blue-900 px-4">
         <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
         <h1 className="text-2xl font-bold text-center text-blue-900">Welcome Back!</h1>
         <p className="text-center text-sm text-gray-600">Enter your phone number to sign in or create an account</p>
            <form className="space-y-4">
               <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="+1234567890"/>
               </div>
               <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Send SMS
               </button>
            </form>
            <div className="text-center text-sm text-gray-500">
               By continuing, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </div>
         </div>
      </div>
   );
};

export default PhonePage;
