import React from 'react';



const LoadingSpinner: React.FC<{operation: string}> = ({operation}) => {
   return (
      <div className="flex items-center justify-center">
         {/* SVG Spinner */}
         <svg
            className="animate-spin h-6 w-6 border-t-4 border-teal-500 border-solid rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
         >
            <circle cx="12" cy="12" r="10" stroke="transparent" strokeWidth="4" fill="none" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="31.4159" strokeDashoffset="25" />
         </svg>
         {/* Text */}
         <span className="ml-2 text-white-700">{operation}...</span>
      </div>
   );
};

export default LoadingSpinner;
