// import { createContext, useEffect, useState } from "react";
// import { auth, googleProvider } from "../firebase/firebase.init";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const registerUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const loginUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleLogin = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logoutUser = () => {
//     setLoading(true);
//     return signOut(auth).then(() => setUser(null));
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         // ব্যাকএন্ড না আসা পর্যন্ত লোকাল স্টোরেজ থেকে রোল নিচ্ছি
//         const savedRole = localStorage.getItem(`role_${currentUser.email}`);
//         setUser({ ...currentUser, role: savedRole || "student" });
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = { user, setUser, loading, registerUser, loginUser, googleLogin, logoutUser };

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
const backendUrl = "http://localhost:5000";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const googleLogin = () => signInWithPopup(auth, googleProvider);

  const logoutUser = async () => {
    setUser(null);
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      // 🔥 get role from backend (JWT cookie auto sent)
      const res = await fetch(`${backendUrl}/users/role/${currentUser.email}`, {
        credentials: "include",
      });
      const data = await res.json();

      setUser({
        email: currentUser.email,
        role: data.role,
      });

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, registerUser, loginUser, googleLogin, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
