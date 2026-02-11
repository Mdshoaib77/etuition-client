// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Error404 = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-6 text-center">
      
// //       {/* 404 Text */}
// //       <h1 className="text-8xl md:text-9xl font-extrabold text-emerald-600 drop-shadow-lg">
// //         404
// //       </h1>

// //       {/* Heading */}
// //       <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
// //         Oops! Page Not Found
// //       </h2>

// //       {/* Description */}
// //       <p className="mt-3 text-gray-500 max-w-md">
// //         The page you are looking for might have been removed,
// //         renamed, or is temporarily unavailable.
// //       </p>

// //       {/* Button */}
// //       <Link
// //         to="/"
// //         className="mt-6 inline-block px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
// //       >
// //         Go Back Home
// //       </Link>

// //     </div>
// //   );
// // };

// // export default Error404;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Error404 = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
//       <div className="text-center">
//         {/* Animated Illustration Placeholder */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-emerald-600 font-bold text-9xl"
//         >
//           404
//         </motion.div>

//         <h2 className="mt-4 text-3xl font-bold text-gray-800 md:text-4xl">
//           Oops! Page Not Found
//         </h2>
        
//         <p className="mt-4 text-gray-600 max-w-lg mx-auto">
//           The page you are looking for might have been removed, had its name changed, 
//           or is temporarily unavailable. Let's get you back on track!
//         </p>

//         <motion.div 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-8"
//         >
//           <Link
//             to="/"
//             className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all duration-300"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//             </svg>
//             Back to Home
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Error404;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative px-4">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center">
        {/* Animated 404 Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12rem] md:text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-900 leading-none select-none tracking-tighter"
        >
          404
        </motion.h1>

        {/* Floating Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="-mt-8 md:-mt-16"
        >
          <h2 className="text-2xl md:text-4xl font-light text-emerald-50 tracking-widest uppercase">
            Lost in the <span className="text-emerald-500 font-bold">Digital Woods</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto font-light leading-relaxed">
            The path you are looking for has been swallowed by the emerald mist. 
            Let us guide you back to civilization.
          </p>
        </motion.div>

        {/* Interactive Button */}
        <motion.div 
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-full hover:bg-emerald-500 overflow-hidden shadow-[0_0_20px_rgba(5,150,105,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Floating Particles Simulation */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-emerald-500/20 rounded-full blur-sm"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Error404;