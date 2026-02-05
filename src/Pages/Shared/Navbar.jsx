// // // import { Link, useNavigate, NavLink } from "react-router-dom";
// // // import { useState } from "react";
// // // import useAuth from "../../Hooks/useAuth";

// // // const Navbar = () => {
// // //   const { user, loading, logoutUser } = useAuth();
// // //   const navigate = useNavigate();

// // //   const handleLogout = async () => {
// // //     await logoutUser();
// // //     navigate("/login");
// // //   };

// // //   // ড্রপডাউন মেনু লিঙ্কে ক্লিক করলে মেনু বন্ধ করার জন্য ফাংশন
// // //   const closeDropdown = () => {
// // //     const elem = document.activeElement;
// // //     if (elem) {
// // //       elem.blur();
// // //     }
// // //   };

// // //   const navLinks = (
// // //     <>
// // //       <li><NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Home</NavLink></li>
// // //       <li><NavLink to="/tuitions" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Tuitions</NavLink></li>
// // //       <li><NavLink to="/tutors" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Tutors</NavLink></li>
// // //       <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>About</NavLink></li>
// // //       <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Contact</NavLink></li>
// // //     </>
// // //   );

// // //   const dashboardLinks = () => {
// // //     if (user?.role === "student") return [
// // //       { name: "My Dashboard", path: "/dashboard/student" },
// // //       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
// // //       { name: "Profile", path: "/dashboard/student/profile" },
// // //     ];
// // //     if (user?.role === "tutor") return [
// // //       { name: "My Dashboard", path: "/dashboard/tutor" },
// // //       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
// // //       { name: "Profile", path: "/dashboard/tutor/profile" },
// // //     ];
// // //     if (user?.role === "admin") return [
// // //       { name: "Admin Home", path: "/dashboard/admin" },
// // //       { name: "User Management", path: "/dashboard/admin/user-management" },
// // //       { name: "Profile", path: "/dashboard/admin/profile" },
// // //     ];
// // //     return [];
// // //   };

// // //   return (
// // //     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
// // //       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">
// // //         {/* Logo */}
// // //         <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic">
// // //           eTuition<span className="text-secondary">Bd</span>
// // //         </Link>

// // //         {/* Desktop Links */}
// // //         <div className="hidden lg:flex">
// // //           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
// // //             {navLinks}
// // //           </ul>
// // //         </div>

// // //         {/* Profile / Auth */}
// // //         <div className="flex items-center gap-4">
// // //           {loading ? (
// // //             <span className="loading loading-spinner loading-md text-emerald-600"></span>
// // //           ) : !user?.email ? (
// // //             <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold transition-all shadow-md">
// // //               Login
// // //             </Link>
// // //           ) : (
// // //             <div className="dropdown dropdown-end">
// // //               <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
// // //                 <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
// // //                   <img 
// // //                     src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} 
// // //                     alt="Profile" 
// // //                     referrerPolicy="no-referrer"
// // //                   />
// // //                 </div>
// // //               </label>
// // //               <ul tabIndex={0} className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-box w-60 mt-4 border border-base-200">
// // //                 <li className="menu-title px-4 py-2 text-emerald-600 font-bold border-b border-base-100 mb-2">
// // //                   {user?.displayName || "User"}
// // //                 </li>
// // //                 {dashboardLinks().map(item => (
// // //                   <li key={item.path}>
// // //                     <Link to={item.path} onClick={closeDropdown} className="py-3 hover:bg-emerald-50 hover:text-emerald-600">
// // //                       {item.name}
// // //                     </Link>
// // //                   </li>
// // //                 ))}
// // //                 <div className="divider my-1"></div>
// // //                 <li>
// // //                   <button 
// // //                     onClick={() => { handleLogout(); closeDropdown(); }} 
// // //                     className="text-red-500 hover:bg-red-50 py-3 font-semibold"
// // //                   >
// // //                     Logout
// // //                   </button>
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import { Link, useNavigate, NavLink } from "react-router-dom";
// // import { useState } from "react";
// // import useAuth from "../../Hooks/useAuth";

// // const Navbar = () => {
// //   const { user, loading, logoutUser } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = async () => {
// //     await logoutUser();
// //     navigate("/login");
// //   };

// //   const closeDropdown = () => {
// //     const elem = document.activeElement;
// //     if (elem) elem.blur();
// //   };

// //   const navLinks = (
// //     <>
// //       <li>
// //         <NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
// //           Home
// //         </NavLink>
// //       </li>
// //       <li>
// //         <NavLink to="/tuitions" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
// //           Tuitions
// //         </NavLink>
// //       </li>
// //       <li>
// //         <NavLink to="/tutors" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
// //           Tutors
// //         </NavLink>
// //       </li>
// //       <li>
// //         <NavLink to="/about" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
// //           About
// //         </NavLink>
// //       </li>
// //       <li>
// //         <NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
// //           Contact
// //         </NavLink>
// //       </li>
// //     </>
// //   );

// //   const dashboardLinks = () => {
// //     if (user?.role === "student") return [
// //       { name: "My Dashboard", path: "/dashboard/student" },
// //       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
// //       { name: "Profile", path: "/dashboard/student/profile" },
// //     ];
// //     if (user?.role === "tutor") return [
// //       { name: "My Dashboard", path: "/dashboard/tutor" },
// //       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
// //       { name: "Profile", path: "/dashboard/tutor/profile" },
// //     ];
// //     if (user?.role === "admin") return [
// //       { name: "Admin Home", path: "/dashboard/admin" },
// //       { name: "User Management", path: "/dashboard/admin/user-management" },
// //       { name: "Profile", path: "/dashboard/admin/profile" },
// //     ];
// //     return [];
// //   };

// //   return (
// //     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
// //       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">
// //         <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic">
// //           eTuition<span className="text-secondary">Bd</span>
// //         </Link>

// //         {/* Desktop Links */}
// //         <div className="hidden lg:flex">
// //           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">{navLinks}</ul>
// //         </div>

// //         {/* Profile / Auth */}
// //         <div className="flex items-center gap-4">
// //           {loading ? (
// //             <span className="loading loading-spinner loading-md text-emerald-600"></span>
// //           ) : !user?.email ? (
// //             <Link
// //               to="/login"
// //               className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold transition-all shadow-md"
// //             >
// //               Login
// //             </Link>
// //           ) : (
// //             <div className="dropdown dropdown-end">
// //               <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
// //                 <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
// //                   <img
// //                     src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"}
// //                     alt="Profile"
// //                     referrerPolicy="no-referrer"
// //                   />
// //                 </div>
// //               </label>

// //               <ul
// //                 tabIndex={0}
// //                 className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-box w-60 mt-4 border border-base-200"
// //               >
// //                 <li className="menu-title px-4 py-2 text-emerald-600 font-bold border-b border-base-100 mb-2">
// //                   {user?.displayName || "User"}
// //                 </li>

// //                 {dashboardLinks().map(item => (
// //                   <li key={item.path}>
// //                     <Link
// //                       to={item.path}
// //                       onClick={closeDropdown}
// //                       className="py-3 hover:bg-emerald-50 hover:text-emerald-600"
// //                     >
// //                       {item.name}
// //                     </Link>
// //                   </li>
// //                 ))}

// //                 <div className="divider my-1"></div>
// //                 <li>
// //                   <button
// //                     onClick={() => {
// //                       handleLogout();
// //                       closeDropdown();
// //                     }}
// //                     className="text-red-500 hover:bg-red-50 py-3 font-semibold"
// //                   >
// //                     Logout
// //                   </button>
// //                 </li>
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import { Link, useNavigate, NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import useAuth from "../../Hooks/useAuth";

// const Navbar = () => {
//   const { user, loading, logoutUser } = useAuth();
//   const navigate = useNavigate();
//   const [role, setRole] = useState(user?.role || "");

//   // Sync role if user changes or reload
//   useEffect(() => {
//     if (user?.role) setRole(user.role);
//     else {
//       const storedRole = localStorage.getItem("role");
//       if (storedRole) setRole(storedRole);
//     }
//   }, [user]);

//   const handleLogout = async () => {
//     await logoutUser();
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   const closeDropdown = () => {
//     const elem = document.activeElement;
//     if (elem) elem.blur();
//   };

//   const navLinks = (
//     <>
//       <li><NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Home</NavLink></li>
//       <li><NavLink to="/tuitions" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Tuitions</NavLink></li>
//       <li><NavLink to="/tutors" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Tutors</NavLink></li>
//       <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>About</NavLink></li>
//       <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Contact</NavLink></li>
//     </>
//   );

//   const dashboardLinks = () => {
//     if (role === "student") return [
//       { name: "My Dashboard", path: "/dashboard/student/my-tuitions" },
//       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
//       { name: "Profile", path: "/dashboard/student/profile" },
//     ];
//     if (role === "tutor") return [
//       { name: "My Dashboard", path: "/dashboard/tutor/my-applications" },
//       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
//       { name: "Profile", path: "/dashboard/tutor/profile" },
//     ];
//     if (role === "admin") return [
//       { name: "Admin Home", path: "/dashboard/admin/user-management" },
//       { name: "User Management", path: "/dashboard/admin/user-management" },
//       { name: "Tuition Management", path: "/dashboard/admin/tuition-management" },
//       { name: "Reports", path: "/dashboard/admin/reports" },
//       { name: "Profile", path: "/dashboard/admin/profile" },
//     ];
//     return [];
//   };

//   return (
//     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">
//         <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic">
//           eTuition<span className="text-secondary">Bd</span>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">{navLinks}</ul>
//         </div>

//         {/* Profile / Auth */}
//         <div className="flex items-center gap-4">
//           {loading ? (
//             <span className="loading loading-spinner loading-md text-emerald-600"></span>
//           ) : !user?.email ? (
//             <Link
//               to="/login"
//               className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold transition-all shadow-md"
//             >
//               Login
//             </Link>
//           ) : (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
//                 <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
//                   <img
//                     src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"}
//                     alt="Profile"
//                     referrerPolicy="no-referrer"
//                   />
//                 </div>
//               </label>

//               <ul
//                 tabIndex={0}
//                 className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-box w-60 mt-4 border border-base-200"
//               >
//                 <li className="menu-title px-4 py-2 text-emerald-600 font-bold border-b border-base-100 mb-2">
//                   {user?.displayName || "User"}
//                 </li>

//                 {dashboardLinks().map(item => (
//                   <li key={item.path}>
//                     <Link
//                       to={item.path}
//                       onClick={closeDropdown}
//                       className="py-3 hover:bg-emerald-50 hover:text-emerald-600"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}

//                 <div className="divider my-1"></div>
//                 <li>
//                   <button
//                     onClick={() => {
//                       handleLogout();
//                       closeDropdown();
//                     }}
//                     className="text-red-500 hover:bg-red-50 py-3 font-semibold"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // আধুনিক আইকন

const Navbar = () => {
  const { user, loading, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState(user?.role || "");
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু স্টেট

  useEffect(() => {
    if (user?.role) setRole(user.role);
    else {
      const storedRole = localStorage.getItem("role");
      if (storedRole) setRole(storedRole);
    }
  }, [user]);

  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem("role");
    navigate("/login");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <li><NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-emerald-600 font-bold" : "hover:text-emerald-500 transition-colors"}>Home</NavLink></li>
      <li><NavLink to="/tuitions" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-emerald-600 font-bold" : "hover:text-emerald-500 transition-colors"}>Tuitions</NavLink></li>
      <li><NavLink to="/tutors" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-emerald-600 font-bold" : "hover:text-emerald-500 transition-colors"}>Tutors</NavLink></li>
      <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-emerald-600 font-bold" : "hover:text-emerald-500 transition-colors"}>About</NavLink></li>
      <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-emerald-600 font-bold" : "hover:text-emerald-500 transition-colors"}>Contact</NavLink></li>
    </>
  );

  const dashboardLinks = () => {
    if (role === "student") return [
      { name: "My Dashboard", path: "/dashboard/student/my-tuitions" },
      { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
      { name: "Profile", path: "/dashboard/student/profile" },
    ];
    if (role === "tutor") return [
      { name: "My Dashboard", path: "/dashboard/tutor/my-applications" },
      { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
      { name: "Profile", path: "/dashboard/tutor/profile" },
    ];
    if (role === "admin") return [
      { name: "Admin Home", path: "/dashboard/admin/user-management" },
      { name: "User Management", path: "/dashboard/admin/user-management" },
      { name: "Tuition Management", path: "/dashboard/admin/tuition-management" },
      { name: "Reports", path: "/dashboard/admin/reports" },
      { name: "Profile", path: "/dashboard/admin/profile" },
    ];
    return [];
  };

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">
        
        {/* Mobile Menu Button - LEFT SIDE */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 text-emerald-600 focus:outline-none">
            <Menu size={28} />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic flex-1 lg:flex-none text-center lg:text-left">
          eTuition<span className="text-secondary">Bd</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">{navLinks}</ul>
        </div>

        {/* Profile / Auth */}
        <div className="flex items-center gap-4">
          {loading ? (
            <span className="loading loading-spinner loading-md text-emerald-600"></span>
          ) : !user?.email ? (
            <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 md:px-8 py-2 md:py-2.5 rounded-lg font-bold transition-all shadow-md text-sm md:text-base">
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} alt="Profile" referrerPolicy="no-referrer" />
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-box w-60 mt-4 border border-base-200">
                <li className="menu-title px-4 py-2 text-emerald-600 font-bold border-b border-base-100 mb-2">{user?.displayName || "User"}</li>
                {dashboardLinks().map(item => (
                  <li key={item.path}><Link to={item.path} className="py-3 hover:bg-emerald-50 hover:text-emerald-600">{item.name}</Link></li>
                ))}
                <div className="divider my-1"></div>
                <li><button onClick={handleLogout} className="text-red-500 hover:bg-red-50 py-3 font-semibold">Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-[1100] lg:hidden backdrop-blur-sm"
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[70%] sm:w-[50%] bg-base-100 z-[1200] lg:hidden shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-2xl font-bold text-emerald-600 italic">Menu</span>
                <button onClick={toggleMenu} className="p-2 bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-100 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-6 font-semibold text-xl list-none">
                {navLinks}
              </ul>

              <div className="mt-10 border-t pt-6">
                 <p className="text-xs text-gray-400 text-center italic">© 2026 eTuitionBd - Best Tutor Platform</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;