// // import React from 'react'

// // const AuthLayout = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default AuthLayout


// // import React from 'react';
// // import { Outlet } from 'react-router';

// // const AuthLayout = ({ children }) => {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       {children} {/* login / register page will render here */}
// //       <Outlet/>
// //     </div>
// //   )
// // }

// // export default AuthLayout;



// import React from 'react';
// import { Outlet } from 'react-router-dom'; // ✅ react-router-dom, not 'react-router'

// const AuthLayout = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <Outlet /> {/* Nested routes (login/register) will render here */}
//     </div>
//   );
// }

// export default AuthLayout;


import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <Outlet /> {/* This renders Login / Register */}
      </div>
    </div>
  );
}

export default AuthLayout;
