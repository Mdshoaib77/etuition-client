// // // import React from 'react'
// // // import { AuthContext } from './AuthContext'

// // // const AuthProvider = () => {
// // //   return (
// // //     <AuthContext>

// // //     </AuthContext>
// // //   )
// // // }

// // // export default AuthProvider


// // // import { createContext, useEffect, useState } from "react";
// // // import { auth } from "../Firebase/firebase.init";
// // // import {
// // //   onAuthStateChanged,
// // //   signInWithEmailAndPassword,
// // //   signOut,
// // // } from "firebase/auth";

// // // export const AuthContext = createContext(null);

// // // const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   // login
// // //   const loginUser = (email, password) => {
// // //     setLoading(true);
// // //     return signInWithEmailAndPassword(auth, email, password);
// // //   };

// // //   // logout
// // //   const logoutUser = () => {
// // //     setLoading(true);
// // //     return signOut(auth);
// // //   };

// // //   // auth observer
// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //       setUser(currentUser);
// // //       setLoading(false);
// // //     });
// // //     return () => unsubscribe();
// // //   }, []);

// // //   const authInfo = {
// // //     user,
// // //     loading,
// // //     loginUser,
// // //     logoutUser,
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={authInfo}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export default AuthProvider;


// // // src/context/AuthProvider.jsx
// // import { createContext, useEffect, useState } from "react";
// // import { auth } from "../Firebase/firebase.init";
// // import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// // export const AuthContext = createContext(null);

// // const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // login
// //   const loginUser = (email, password) => {
// //     setLoading(true);
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };

// //   // logout
// //   const logoutUser = () => {
// //     setLoading(true);
// //     return signOut(auth);
// //   };

// //   // auth observer
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const authInfo = { user, loading, loginUser, logoutUser };

// //   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
// // };

// // export default AuthProvider;


// // src/context/AuthProvider.jsx



// import { createContext, useEffect, useState } from "react";
// import { auth } from "../firebase/firebase.init";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // register
//   const registerUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // login
//   const loginUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // logout
//   const logoutUser = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // auth observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     registerUser, // 🔹 add this
//     loginUser,
//     logoutUser,
//   };

//   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;


import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/firebase.init";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register (email/password)
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login (email/password)
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔥 Google login/register
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    googleLogin, // 🔥 added
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
