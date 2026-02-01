// // import React from 'react'

// // const useAuth = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default useAuth


// // import { useContext } from "react";
// // import { AuthContext } from "../context/AuthContext";

// // const useAuth = () => {
// //   const auth = useContext(AuthContext);
// //   return auth;
// // };

// // export default useAuth;


// // src/hooks/useAuth.jsx
// import { useContext } from "react";
// // 🔹 correct import path to AuthProvider.jsx
// import { AuthContext } from "../context/AuthProvider";

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default useAuth;


// src/hooks/useAuth.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => useContext(AuthContext);

export default useAuth;
