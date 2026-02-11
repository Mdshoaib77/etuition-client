// import React from "react";

// const Loading = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white">
//       <div className="flex flex-col items-center space-y-5">
        
//         {/* Spinner */}
//         <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>

//         {/* Text */}
//         <p className="text-lg md:text-xl font-semibold text-emerald-600 animate-pulse">
//           Loading, please wait...
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Loading;


import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-emerald-100 rounded-full"></div>
        
        {/* Animated Spinner */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="absolute w-20 h-20 border-4 border-t-emerald-600 border-r-transparent border-b-transparent border-l-transparent rounded-full"
        ></motion.div>

        {/* Center Dot */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-4 h-4 bg-emerald-600 rounded-full"
        ></motion.div>
      </div>
      
      <p className="mt-4 text-emerald-800 font-medium animate-pulse">
        Loading Awesome Things...
      </p>
    </div>
  );
};

export default Loading;