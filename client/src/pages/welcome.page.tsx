import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WelcomePage: React.FC = () => {






   return (
      <div className="min-h-screen ml-80 bg-gradient-to-r from-teal-600 to-white flex items-center justify-center">
         {/* Main Container */}
         <motion.div className="bg-gradient-to-r from-white to-teal-300 rounded-lg w-full max-w-3xl shadow-2xl p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {/* Header with Animated Text */}
            <div className="text-center mb-8">
               <motion.h2 className="text-4xl font-bold text-teal-700" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1 }} >
                  Welcome to our Chat App Web
               </motion.h2>
               <p className="text-lg text-gray-600 mt-2">
                  Connect with your friends and family through Chat App on your computer.
               </p>
            </div>

            {/* Logo with Animation */}
            {/* <div className="text-center mb-6">
               <motion.img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/WhatsApp_logo.svg" alt="WhatsApp Logo" className="mx-auto w-32 h-32" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}/>
            </div> */}

            {/* Instructions Section */}
            <div className="text-center mb-6">
               <p className="text-xl text-gray-600 mb-4">
                  To get started, open Chat App on your phone and scan the QR code.
               </p>

            {/* CTA Button */}
            <motion.button className="bg-teal-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} >
               Open WhatsApp on Your Phone
            </motion.button>
            </div>

            {/* Help Center Link */}
            <div className="text-center mt-6">
               <p className="text-sm text-gray-600">
                  Need help?{" "}
                  <Link to="/help" className="text-teal-700 font-bold hover:underline">
                     Visit our Help Center
                  </Link>
               </p>
            </div>

            {/* Footer with Additional Information */}
            <div className="text-center mt-6">
               <p className="text-sm text-gray-500">
                  ChatApp Web is a browser-based app to mirror your phone’s WhatsApp
                  account on your desktop. Make sure your phone is connected to the
                  internet.
               </p>
            </div>
         </motion.div>
      </div>
   );
};

export default WelcomePage;
