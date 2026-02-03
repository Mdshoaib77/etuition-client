// // // // // // // // // // import React from 'react'

// // // // // // // // // // const Navbar = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <div className="navbar bg-base-100 shadow-sm">
// // // // // // // // // //   <div className="navbar-start">
// // // // // // // // // //     <div className="dropdown">
// // // // // // // // // //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// // // // // // // // // //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
// // // // // // // // // //       </div>
// // // // // // // // // //       <ul
// // // // // // // // // //         tabIndex="-1"
// // // // // // // // // //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
// // // // // // // // // //         <li><a>Item 1</a></li>
// // // // // // // // // //         <li>
// // // // // // // // // //           <a>Parent</a>
// // // // // // // // // //           <ul className="p-2">
// // // // // // // // // //             <li><a>Submenu 1</a></li>
// // // // // // // // // //             <li><a>Submenu 2</a></li>
// // // // // // // // // //           </ul>
// // // // // // // // // //         </li>
// // // // // // // // // //         <li><a>Item 3</a></li>
// // // // // // // // // //       </ul>
// // // // // // // // // //     </div>
// // // // // // // // // //     <a className="btn btn-ghost text-xl">daisyUI</a>
// // // // // // // // // //   </div>
// // // // // // // // // //   <div className="navbar-center hidden lg:flex">
// // // // // // // // // //     <ul className="menu menu-horizontal px-1">
// // // // // // // // // //       <li><a>Item 1</a></li>
// // // // // // // // // //       <li>
// // // // // // // // // //         <details>
// // // // // // // // // //           <summary>Parent</summary>
// // // // // // // // // //           <ul className="p-2 bg-base-100 w-40 z-1">
// // // // // // // // // //             <li><a>Submenu 1</a></li>
// // // // // // // // // //             <li><a>Submenu 2</a></li>
// // // // // // // // // //           </ul>
// // // // // // // // // //         </details>
// // // // // // // // // //       </li>
// // // // // // // // // //       <li><a>Item 3</a></li>
// // // // // // // // // //     </ul>
// // // // // // // // // //   </div>
// // // // // // // // // //   <div className="navbar-end">
// // // // // // // // // //     <a className="btn">Button</a>
// // // // // // // // // //   </div>
// // // // // // // // // // </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default Navbar


// // // // // // // // // import { Link, NavLink } from "react-router-dom";
// // // // // // // // // import { useContext } from "react";
// // // // // // // // // import { AuthContext } from "../context/AuthContext";
// // // // // // // // // import { FaUserCircle } from "react-icons/fa";

// // // // // // // // // const Navbar = () => {
// // // // // // // // //   const { user, role, logout } = useContext(AuthContext);

// // // // // // // // //   const navLinks = (
// // // // // // // // //     <>
// // // // // // // // //       <NavLink to="/" className="font-medium">Home</NavLink>
// // // // // // // // //       <NavLink to="/tuitions" className="font-medium">Tuitions</NavLink>
// // // // // // // // //       <NavLink to="/tutors" className="font-medium">Tutors</NavLink>
// // // // // // // // //       <NavLink to="/about" className="font-medium">About</NavLink>
// // // // // // // // //       <NavLink to="/contact" className="font-medium">Contact</NavLink>
// // // // // // // // //     </>
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="navbar bg-base-100 sticky top-0 z-50 shadow">
// // // // // // // // //       <div className="navbar-start">
// // // // // // // // //         {/* Mobile Menu */}
// // // // // // // // //         <div className="dropdown">
// // // // // // // // //           <label tabIndex={0} className="btn btn-ghost lg:hidden">
// // // // // // // // //             ☰
// // // // // // // // //           </label>
// // // // // // // // //           <ul
// // // // // // // // //             tabIndex={0}
// // // // // // // // //             className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
// // // // // // // // //           >
// // // // // // // // //             {navLinks}
// // // // // // // // //           </ul>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Logo */}
// // // // // // // // //         <Link to="/" className="text-2xl font-bold text-primary">
// // // // // // // // //           eTuition<span className="text-secondary">Bd</span>
// // // // // // // // //         </Link>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Desktop Menu */}
// // // // // // // // //       <div className="navbar-center hidden lg:flex">
// // // // // // // // //         <ul className="menu menu-horizontal gap-6">{navLinks}</ul>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Auth Section */}
// // // // // // // // //       <div className="navbar-end gap-3">
// // // // // // // // //         {!user ? (
// // // // // // // // //           <>
// // // // // // // // //             <Link to="/login" className="btn btn-outline btn-sm">
// // // // // // // // //               Login
// // // // // // // // //             </Link>
// // // // // // // // //             <Link to="/register" className="btn btn-primary btn-sm">
// // // // // // // // //               Register
// // // // // // // // //             </Link>
// // // // // // // // //           </>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="dropdown dropdown-end">
// // // // // // // // //             <label tabIndex={0} className="btn btn-ghost">
// // // // // // // // //               <FaUserCircle size={28} />
// // // // // // // // //             </label>
// // // // // // // // //             <ul
// // // // // // // // //               tabIndex={0}
// // // // // // // // //               className="menu dropdown-content bg-base-100 rounded-box shadow w-52"
// // // // // // // // //             >
// // // // // // // // //               <li>
// // // // // // // // //                 <Link to={`/dashboard/${role}`}>Dashboard</Link>
// // // // // // // // //               </li>
// // // // // // // // //               <li>
// // // // // // // // //                 <button onClick={logout}>Logout</button>
// // // // // // // // //               </li>
// // // // // // // // //             </ul>
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Navbar;


// // // // // // // // import { useContext } from "react";
// // // // // // // // import { Link, NavLink } from "react-router-dom";
// // // // // // // // import { AuthContext } from "../context/AuthContext";

// // // // // // // // const Navbar = () => {
// // // // // // // //     const { user, logOut, role } = useContext(AuthContext);

// // // // // // // //     const navLinks = (
// // // // // // // //         <>
// // // // // // // //             <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>Home</NavLink></li>
// // // // // // // //             <li><NavLink to="/tuitions">Tuitions</NavLink></li>
// // // // // // // //             <li><NavLink to="/tutors">Tutors</NavLink></li>
// // // // // // // //             <li><NavLink to="/about">About</NavLink></li>
// // // // // // // //             <li><NavLink to="/contact">Contact</NavLink></li>
// // // // // // // //         </>
// // // // // // // //     );

// // // // // // // //     return (
// // // // // // // //         <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 shadow-sm">
// // // // // // // //             <div className="navbar-start">
// // // // // // // //                 <div className="dropdown">
// // // // // // // //                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
// // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
// // // // // // // //                     </label>
// // // // // // // //                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
// // // // // // // //                         {navLinks}
// // // // // // // //                     </ul>
// // // // // // // //                 </div>
// // // // // // // //                 <Link to="/" className="text-2xl font-black tracking-tighter text-primary">
// // // // // // // //                     eTuition<span className="text-secondary">Bd</span>
// // // // // // // //                 </Link>
// // // // // // // //             </div>
// // // // // // // //             <div className="navbar-center hidden lg:flex">
// // // // // // // //                 <ul className="menu menu-horizontal px-1 gap-4 font-medium">
// // // // // // // //                     {navLinks}
// // // // // // // //                 </ul>
// // // // // // // //             </div>
// // // // // // // //             <div className="navbar-end">
// // // // // // // //                 {user ? (
// // // // // // // //                     <div className="dropdown dropdown-end">
// // // // // // // //                         <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-primary">
// // // // // // // //                             <div className="w-10 rounded-full">
// // // // // // // //                                 <img src={user?.photoURL || "https://i.ibb.co/mJR9nkv/user.png"} alt="profile" />
// // // // // // // //                             </div>
// // // // // // // //                         </label>
// // // // // // // //                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200">
// // // // // // // //                             <li className="px-4 py-2 font-bold text-xs uppercase text-slate-400">Account: {role}</li>
// // // // // // // //                             <li><Link to={`/dashboard/${role}`}>Dashboard</Link></li>
// // // // // // // //                             <li><Link to="/dashboard/profile">Profile Settings</Link></li>
// // // // // // // //                             <div className="divider my-0"></div>
// // // // // // // //                             <li><button onClick={logOut} className="text-error">Logout</button></li>
// // // // // // // //                         </ul>
// // // // // // // //                     </div>
// // // // // // // //                 ) : (
// // // // // // // //                     <div className="flex gap-2">
// // // // // // // //                         <Link to="/login" className="btn btn-ghost btn-sm hidden md:flex">Login</Link>
// // // // // // // //                         <Link to="/register" className="btn btn-primary btn-sm rounded-full px-6">Register</Link>
// // // // // // // //                     </div>
// // // // // // // //                 )}
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Navbar;


// // // // // // // import { NavLink } from "react-router-dom";

// // // // // // // const Navbar = () => {
// // // // // // //   const linkClass = ({ isActive }) =>
// // // // // // //     isActive
// // // // // // //       ? "text-blue-500 font-semibold"
// // // // // // //       : "text-slate-700 hover:text-blue-500";

// // // // // // //   return (
// // // // // // //     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
// // // // // // //       {/* Logo */}
// // // // // // //       <h1 className="text-2xl font-bold text-blue-600">
// // // // // // //         eTuitionBD
// // // // // // //       </h1>

// // // // // // //       {/* Menu */}
// // // // // // //       <ul className="flex gap-6">
// // // // // // //         <li>
// // // // // // //           <NavLink to="/" className={linkClass}>
// // // // // // //             Home
// // // // // // //           </NavLink>
// // // // // // //         </li>

// // // // // // //         <li>
// // // // // // //           <NavLink to="/services" className={linkClass}>
// // // // // // //             Services
// // // // // // //           </NavLink>
// // // // // // //         </li>

// // // // // // //         <li>
// // // // // // //           <NavLink to="/tutors" className={linkClass}>
// // // // // // //             Tutors
// // // // // // //           </NavLink>
// // // // // // //         </li>

// // // // // // //         <li>
// // // // // // //           <NavLink to="/login" className={linkClass}>
// // // // // // //             Login
// // // // // // //           </NavLink>
// // // // // // //         </li>
// // // // // // //       </ul>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;



// // // // // // // import { Link } from "react-router-dom";

// // // // // // // const Navbar = () => {
// // // // // // //     // NavLinks gulo ekta variable e rakhlam jate maintain kora shohoj hoy
// // // // // // //     const navLinks = (
// // // // // // //         <>
// // // // // // //             <li><Link to="/" className="hover:text-primary transition-all">Home</Link></li>
// // // // // // //             <li><Link to="/" className="hover:text-primary transition-all">Tuitions</Link></li>
// // // // // // //             <li><Link to="/" className="hover:text-primary transition-all">Tutors</Link></li>
// // // // // // //             <li><Link to="/" className="hover:text-primary transition-all">About</Link></li>
// // // // // // //             <li><Link to="/" className="hover:text-primary transition-all">Contact</Link></li>
// // // // // // //         </>
// // // // // // //     );

// // // // // // //     return (
// // // // // // //         <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-[1000] px-4 md:px-12 border-b border-base-200">
// // // // // // //             {/* Navbar Start: Text Logo */}
// // // // // // //             <div className="navbar-start">
// // // // // // //                 <div className="dropdown">
// // // // // // //                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
// // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
// // // // // // //                         </svg>
// // // // // // //                     </label>
// // // // // // //                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
// // // // // // //                         {navLinks}
// // // // // // //                     </ul>
// // // // // // //                 </div>
// // // // // // //                 {/* Requirements: Display Logo & Website Name as Text */}
// // // // // // //                 <Link to="/" className="text-2xl font-bold tracking-tighter text-primary italic">
// // // // // // //                     eTuition<span className="text-secondary">Bd</span>
// // // // // // //                 </Link>
// // // // // // //             </div>

// // // // // // //             {/* Navbar Center: Navigation Links (Desktop) */}
// // // // // // //             <div className="navbar-center hidden lg:flex">
// // // // // // //                 <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
// // // // // // //                     {navLinks}
// // // // // // //                 </ul>
// // // // // // //             </div>

// // // // // // //             {/* Navbar End: Login & Register Buttons */}
// // // // // // //             <div className="navbar-end gap-2">
// // // // // // //                 <Link to="/" className="btn btn-ghost btn-sm font-bold capitalize">
// // // // // // //                     Login
// // // // // // //                 </Link>
// // // // // // //                 <Link to="/" className="btn btn-primary btn-sm rounded-lg px-6 font-bold capitalize shadow-md shadow-primary/20">
// // // // // // //                     Sign In
// // // // // // //                 </Link>
// // // // // // //             </div>
// // // // // // //         </nav>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Navbar;


// // // // // // import { Link } from "react-router-dom";
// // // // // // import { useState } from "react";

// // // // // // const Navbar = () => {
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // //   // NavLinks gulo ekta variable e rakhlam jate maintain kora shohoj hoy
// // // // // //   const navLinks = (
// // // // // //     <>
// // // // // //       <li>
// // // // // //         <Link to="/" className="hover:text-primary transition-all" onClick={() => setMenuOpen(false)}>
// // // // // //           Home
// // // // // //         </Link>
// // // // // //       </li>
// // // // // //       <li>
// // // // // //         <Link to="/tuitions" className="hover:text-primary transition-all" onClick={() => setMenuOpen(false)}>
// // // // // //           Tuitions
// // // // // //         </Link>
// // // // // //       </li>
// // // // // //       <li>
// // // // // //         <Link to="/tutors" className="hover:text-primary transition-all" onClick={() => setMenuOpen(false)}>
// // // // // //           Tutors
// // // // // //         </Link>
// // // // // //       </li>
// // // // // //       <li>
// // // // // //         <Link to="/about" className="hover:text-primary transition-all" onClick={() => setMenuOpen(false)}>
// // // // // //           About
// // // // // //         </Link>
// // // // // //       </li>
// // // // // //       <li>
// // // // // //         <Link to="/contact" className="hover:text-primary transition-all" onClick={() => setMenuOpen(false)}>
// // // // // //           Contact
// // // // // //         </Link>
// // // // // //       </li>
// // // // // //     </>
// // // // // //   );

// // // // // //   return (
// // // // // //     <nav className="bg-base-100 shadow-sm sticky top-0 z-[1000] border-b border-base-200">
// // // // // //       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">

// // // // // //         {/* Navbar Start: Logo & Mobile Menu */}
// // // // // //         <div className="flex items-center gap-4">
// // // // // //           {/* Mobile Hamburger */}
// // // // // //           <div className="lg:hidden">
// // // // // //             <button
// // // // // //               onClick={() => setMenuOpen(!menuOpen)}
// // // // // //               className="btn btn-ghost p-2 rounded-md"
// // // // // //             >
// // // // // //               <svg
// // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // //                 className="h-6 w-6"
// // // // // //                 fill="none"
// // // // // //                 viewBox="0 0 24 24"
// // // // // //                 stroke="currentColor"
// // // // // //               >
// // // // // //                 <path
// // // // // //                   strokeLinecap="round"
// // // // // //                   strokeLinejoin="round"
// // // // // //                   strokeWidth="2"
// // // // // //                   d="M4 6h16M4 12h16M4 18h16"
// // // // // //                 />
// // // // // //               </svg>
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Logo */}
// // // // // //           <Link to="/" className="text-2xl font-bold tracking-tighter text-primary italic">
// // // // // //             eTuition<span className="text-secondary">Bd</span>
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         {/* Navbar Center: Desktop Links */}
// // // // // //         <div className="hidden lg:flex">
// // // // // //           <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
// // // // // //             {navLinks}
// // // // // //           </ul>
// // // // // //         </div>

// // // // // //         {/* Navbar End: Login Button */}
// // // // // //         <div className="flex items-center">
// // // // // //           <Link
// // // // // //             to="/login"
// // // // // //             className="btn btn-primary rounded-lg px-6 py-2 font-bold capitalize shadow-md shadow-primary/20 hover:scale-105 transition-transform"
// // // // // //           >
// // // // // //             Login
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile Dropdown Menu */}
// // // // // //       {menuOpen && (
// // // // // //         <div className="lg:hidden fixed top-0 left-0 h-full w-1/2 bg-base-100 shadow-md z-50 p-6 transition-all duration-300">
// // // // // //           <ul className="flex flex-col gap-6 font-semibold text-lg">
// // // // // //             {navLinks}
// // // // // //           </ul>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;



// // // // import { Link } from "react-router-dom";
// // // // import { useState } from "react";

// // // // const Navbar = () => {
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   const navLinks = (
// // // //     <>
// // // //       <li>
// // // //         <Link
// // // //           to="/"
// // // //           className="hover:text-primary transition-all"
// // // //           onClick={() => setMenuOpen(false)}
// // // //         >
// // // //           Home
// // // //         </Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link
// // // //           to="/tuitions"
// // // //           className="hover:text-primary transition-all"
// // // //           onClick={() => setMenuOpen(false)}
// // // //         >
// // // //           Tuitions
// // // //         </Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link
// // // //           to="/tutors"
// // // //           className="hover:text-primary transition-all"
// // // //           onClick={() => setMenuOpen(false)}
// // // //         >
// // // //           Tutors
// // // //         </Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link
// // // //           to="/about"
// // // //           className="hover:text-primary transition-all"
// // // //           onClick={() => setMenuOpen(false)}
// // // //         >
// // // //           About
// // // //         </Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link
// // // //           to="/contact"
// // // //           className="hover:text-primary transition-all"
// // // //           onClick={() => setMenuOpen(false)}
// // // //         >
// // // //           Contact
// // // //         </Link>
// // // //       </li>
// // // //     </>
// // // //   );

// // // //   return (
// // // //     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
// // // //       <div className="max-w-7xl  mx-auto flex items-center justify-between px-4 md:px-12 h-20">
// // // //         {/* Navbar Start: Logo & Mobile Menu */}
// // // //         <div className="flex items-center gap-4">
// // // //           {/* Mobile Hamburger */}
// // // //           <div className="lg:hidden">
// // // //             <button
// // // //               onClick={() => setMenuOpen(true)}
// // // //               className="btn btn-ghost p-2 rounded-md hover:bg-base-200 transition"
// // // //             >
// // // //               <svg
// // // //                 xmlns="http://www.w3.org/2000/svg"
// // // //                 className="h-6 w-6"
// // // //                 fill="none"
// // // //                 viewBox="0 0 24 24"
// // // //                 stroke="currentColor"
// // // //               >
// // // //                 <path
// // // //                   strokeLinecap="round"
// // // //                   strokeLinejoin="round"
// // // //                   strokeWidth="2"
// // // //                   d="M4 6h16M4 12h16M4 18h16"
// // // //                 />
// // // //               </svg>
// // // //             </button>
// // // //           </div>

// // // //           {/* Logo */}
// // // //           <Link
// // // //             to="/"
// // // //             className="text-2xl md:text-3xl font-bold tracking-tighter text-emerald-600 italic hover:scale-105 transition-transform"
// // // //           >
// // // //             eTuition<span className="text-secondary">Bd</span>
// // // //           </Link>
// // // //         </div>

// // // //         {/* Navbar Center: Desktop Links */}
// // // //         <div className="hidden lg:flex">
// // // //           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
// // // //             {navLinks}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Navbar End: Login Button */}
// // // //         <div className="flex items-center">
// // // //           {/* <Link
// // // //             to="/login"
// // // //             className="btn btn-primary rounded-lg px-6 py-2 font-bold capitalize shadow-md shadow-primary/30 hover:scale-105 transition-transform"
// // // //           >
// // // //             Login
// // // //           </Link> */}
// // // //           <Link
// // // //   to="/login"
// // // //   className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold capitalize shadow-lg shadow-emerald-200 hover:scale-105 transition-all duration-300 active:scale-95"
// // // // >
// // // //   Login
// // // // </Link>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Dropdown Menu */}
// // // //       <div
// // // //         className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-base-100 shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out ${
// // // //           menuOpen ? "translate-x-0" : "-translate-x-full"
// // // //         }`}
// // // //       >
// // // //         {/* Close Button */}
// // // //         <div className="flex justify-end mb-8">
// // // //           <button
// // // //             onClick={() => setMenuOpen(false)}
// // // //             className="btn btn-ghost btn-sm p-2 rounded-full hover:bg-base-200 transition"
// // // //           >
// // // //             <svg
// // // //               xmlns="http://www.w3.org/2000/svg"
// // // //               className="h-5 w-5"
// // // //               viewBox="0 0 20 20"
// // // //               fill="currentColor"
// // // //             >
// // // //               <path
// // // //                 fillRule="evenodd"
// // // //                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// // // //                 clipRule="evenodd"
// // // //               />
// // // //             </svg>
// // // //           </button>
// // // //         </div>

// // // //         {/* Menu Links */}
// // // //         <ul className="flex flex-col gap-6 font-semibold text-lg">
// // // //           {navLinks}
// // // //         </ul>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { useState } from "react";
// // // // import useAuth from "../../Hooks/useAuth";

// // // // const Navbar = () => {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const { user, loading, logoutUser } = useAuth();
// // // //   const navigate = useNavigate();

// // // //   const handleLogout = async () => {
// // // //     await logoutUser();
// // // //     navigate("/login");
// // // //   };

// // // //   const navLinks = (
// // // //     <>
// // // //       <li>
// // // //         <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link to="/tuitions" onClick={() => setMenuOpen(false)}>Tuitions</Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link to="/tutors" onClick={() => setMenuOpen(false)}>Tutors</Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
// // // //       </li>
// // // //       <li>
// // // //         <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
// // // //       </li>
// // // //     </>
// // // //   );

// // // //   return (
// // // //     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
// // // //       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">
// // // //         {/* Logo & Mobile Menu */}
// // // //         <div className="flex items-center gap-4">
// // // //           <div className="lg:hidden">
// // // //             <button onClick={() => setMenuOpen(true)} className="btn btn-ghost p-2 rounded-md hover:bg-base-200 transition">
// // // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// // // //               </svg>
// // // //             </button>
// // // //           </div>
// // // //           <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic hover:scale-105 transition-transform">
// // // //             eTuition<span className="text-secondary">Bd</span>
// // // //           </Link>
// // // //         </div>

// // // //         {/* Desktop Links */}
// // // //         <div className="hidden lg:flex">
// // // //           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
// // // //             {navLinks}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Auth Buttons */}
// // // //         <div className="flex items-center gap-4 relative">
// // // //           {!loading && (!user?.email ? (
// // // //             <Link
// // // //               to="/login"
// // // //               className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg hover:scale-105 transition-all"
// // // //             >
// // // //               Login
// // // //             </Link>
// // // //           ) : (
// // // //             <div className="dropdown dropdown-end">
// // // //               <label tabIndex={0} className="btn bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer">
// // // //                 {user?.displayName || "Profile"}
// // // //               </label>
// // // //               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
// // // //                 <li>
// // // //                   <Link to={
// // // //                     user.role === "student" ? "/dashboard/student" :
// // // //                     user.role === "tutor" ? "/dashboard/tutor" :
// // // //                     "/dashboard/admin"
// // // //                   }>Dashboard</Link>
// // // //                 </li>
// // // //                 <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
// // // //               </ul>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile menu */}
// // // //       <div className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-base-100 shadow-lg p-6 transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
// // // //         <div className="flex justify-end mb-8">
// // // //           <button onClick={() => setMenuOpen(false)} className="btn btn-ghost btn-sm p-2 rounded-full hover:bg-base-200">✕</button>
// // // //         </div>
// // // //         <ul className="flex flex-col gap-6 font-semibold text-lg">
// // // //           {navLinks}
// // // //           {!loading && (!user?.email ? (
// // // //             <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
// // // //           ) : (
// // // //             <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // import { Link, useNavigate } from "react-router-dom";
// // // import { useState } from "react";
// // // import useAuth from "../../Hooks/useAuth";

// // // const Navbar = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const { user, loading, logoutUser } = useAuth();
// // //   const navigate = useNavigate();

// // //   const handleLogout = async () => {
// // //     await logoutUser();
// // //     navigate("/login");
// // //   };

// // //   const navLinks = (
// // //     <>
// // //       <li>
// // //         <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
// // //       </li>
// // //       <li>
// // //         <Link to="/tuitions" onClick={() => setMenuOpen(false)}>Tuitions</Link>
// // //       </li>
// // //       <li>
// // //         <Link to="/tutors" onClick={() => setMenuOpen(false)}>Tutors</Link>
// // //       </li>
// // //       <li>
// // //         <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
// // //       </li>
// // //       <li>
// // //         <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
// // //       </li>
// // //     </>
// // //   );

// // //   return (
// // //     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
// // //       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">
// // //         {/* Logo & Mobile Menu */}
// // //         <div className="flex items-center gap-4">
// // //           <div className="lg:hidden">
// // //             <button onClick={() => setMenuOpen(true)} className="btn btn-ghost p-2 rounded-md hover:bg-base-200 transition">
// // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// // //               </svg>
// // //             </button>
// // //           </div>
// // //           <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic hover:scale-105 transition-transform">
// // //             eTuition<span className="text-secondary">Bd</span>
// // //           </Link>
// // //         </div>

// // //         {/* Desktop Links */}
// // //         <div className="hidden lg:flex">
// // //           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
// // //             {navLinks}
// // //           </ul>
// // //         </div>

// // //         {/* Auth Buttons */}
// // //         <div className="flex items-center gap-4 relative">
// // //           {!loading && (!user?.email ? (
// // //             <Link
// // //               to="/login"
// // //               className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg hover:scale-105 transition-all"
// // //             >
// // //               Login
// // //             </Link>
// // //           ) : (
// // //             <div className="dropdown dropdown-end">
// // //               {/* 🔥 Profile Image instead of text */}
// // //               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
// // //                 <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
// // //                   <img src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} alt="Profile" />
// // //                 </div>
// // //               </label>
// // //               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
// // //                 <li>
// // //                   <Link to={
// // //                     user.role === "student" ? "/dashboard/student" :
// // //                     user.role === "tutor" ? "/dashboard/tutor" :
// // //                     "/dashboard/admin"
// // //                   }>Dashboard</Link>
// // //                 </li>
// // //                 <li>
// // //                   <button onClick={handleLogout} className="text-red-600">Logout</button>
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Mobile menu */}
// // //       <div className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-base-100 shadow-lg p-6 transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
// // //         <div className="flex justify-end mb-8">
// // //           <button onClick={() => setMenuOpen(false)} className="btn btn-ghost btn-sm p-2 rounded-full hover:bg-base-200">✕</button>
// // //         </div>
// // //         <ul className="flex flex-col gap-6 font-semibold text-lg">
// // //           {navLinks}
// // //           {!loading && (!user?.email ? (
// // //             <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
// // //           ) : (
// // //             <>
// // //               <li className="flex items-center gap-2">
// // //                 <img src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} alt="Profile" className="w-8 h-8 rounded-full" />
// // //                 <span>{user.displayName || "Profile"}</span>
// // //               </li>
// // //               <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
// // //             </>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import { Link, useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import useAuth from "../../Hooks/useAuth";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const { user, loading, logoutUser } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = async () => {
// //     await logoutUser();
// //     navigate("/login");
// //   };

// //   // Main navigation links
// //   const navLinks = (
// //     <>
// //       <li>
// //         <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
// //       </li>
// //       <li>
// //         <Link to="/tuitions" onClick={() => setMenuOpen(false)}>Tuitions</Link>
// //       </li>
// //       <li>
// //         <Link to="/tutors" onClick={() => setMenuOpen(false)}>Tutors</Link>
// //       </li>
// //       <li>
// //         <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
// //       </li>
// //       <li>
// //         <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
// //       </li>
// //     </>
// //   );

// //   // Dashboard links based on role
// //   const dashboardLinks = () => {
// //     if (user?.role === "student") return [
// //       { name: "My Tuitions", path: "/dashboard/student/my-tuitions" },
// //       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
// //       { name: "Applied Tutors", path: "/dashboard/student/applied-tutors" },
// //       { name: "Payments", path: "/dashboard/student/payments" },
// //       { name: "Profile", path: "/dashboard/student/profile" },
// //     ];
// //     if (user?.role === "tutor") return [
// //       { name: "My Applications", path: "/dashboard/tutor/my-applications" },
// //       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
// //       { name: "Revenue", path: "/dashboard/tutor/revenue" },
// //       { name: "Profile", path: "/dashboard/tutor/profile" },
// //     ];
// //     if (user?.role === "admin") return [
// //       { name: "User Management", path: "/dashboard/admin/user-management" },
// //       { name: "Tuition Management", path: "/dashboard/admin/tuition-management" },
// //       { name: "Reports & Analytics", path: "/dashboard/admin/reports" },
// //       { name: "Profile", path: "/dashboard/admin/profile" },
// //     ];
// //     return [];
// //   };

// //   return (
// //     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
// //       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">

// //         {/* Logo & Mobile Menu Button */}
// //         <div className="flex items-center gap-4">
// //           <div className="lg:hidden">
// //             <button onClick={() => setMenuOpen(true)} className="btn btn-ghost p-2 rounded-md hover:bg-base-200 transition">
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// //               </svg>
// //             </button>
// //           </div>
// //           <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic hover:scale-105 transition-transform">
// //             eTuition<span className="text-secondary">Bd</span>
// //           </Link>
// //         </div>

// //         {/* Desktop Links */}
// //         <div className="hidden lg:flex">
// //           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
// //             {navLinks}
// //           </ul>
// //         </div>

// //         {/* Auth/Profile */}
// //         <div className="flex items-center gap-4 relative">
// //           {!loading && (!user?.email ? (
// //             <Link
// //               to="/login"
// //               className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg hover:scale-105 transition-all"
// //             >
// //               Login
// //             </Link>
// //           ) : (
// //             <div className="dropdown dropdown-end">
// //               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
// //                 <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
// //                   <img src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} alt="Profile" />
// //                 </div>
// //               </label>

// //               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
// //                 {dashboardLinks().map(item => (
// //                   <li key={item.path}>
// //                     <Link to={item.path}>{item.name}</Link>
// //                   </li>
// //                 ))}
// //                 <li>
// //                   <button onClick={handleLogout} className="text-red-600">Logout</button>
// //                 </li>
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-base-100 shadow-lg p-6 transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
// //         <div className="flex justify-end mb-8">
// //           <button onClick={() => setMenuOpen(false)} className="btn btn-ghost btn-sm p-2 rounded-full hover:bg-base-200">✕</button>
// //         </div>
// //         <ul className="flex flex-col gap-6 font-semibold text-lg">
// //           {navLinks}
// //           {!loading && (!user?.email ? (
// //             <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
// //           ) : (
// //             <>
// //               {dashboardLinks().map(item => (
// //                 <li key={item.path}>
// //                   <Link to={item.path} onClick={() => setMenuOpen(false)}>{item.name}</Link>
// //                 </li>
// //               ))}
// //               <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
// //             </>
// //           ))}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import useAuth from "../../Hooks/useAuth";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, loading, logoutUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logoutUser();
//     navigate("/login");
//   };

//   // Main navigation links
//   const navLinks = (
//     <>
//       <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//       <li><Link to="/tuitions" onClick={() => setMenuOpen(false)}>Tuitions</Link></li>
//       <li><Link to="/tutors" onClick={() => setMenuOpen(false)}>Tutors</Link></li>
//       <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
//       <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
//     </>
//   );

//   // Dashboard links based on role
//   const getDashboardLinks = () => {
//     if (!user) return [];
//     if (user.role === "student") return [
//       { name: "My Tuitions", path: "/dashboard/student/my-tuitions" },
//       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
//       { name: "Applied Tutors", path: "/dashboard/student/applied-tutors" },
//       { name: "Payments", path: "/dashboard/student/payments" },
//       { name: "Profile", path: "/dashboard/student/profile" },
//     ];
//     if (user.role === "tutor") return [
//       { name: "My Applications", path: "/dashboard/tutor/my-applications" },
//       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
//       { name: "Revenue", path: "/dashboard/tutor/revenue" },
//       { name: "Profile", path: "/dashboard/tutor/profile" },
//     ];
//     if (user.role === "admin") return [
//       { name: "User Management", path: "/dashboard/admin/user-management" },
//       { name: "Tuition Management", path: "/dashboard/admin/tuition-management" },
//       { name: "Reports & Analytics", path: "/dashboard/admin/reports" },
//       { name: "Profile", path: "/dashboard/admin/profile" },
//     ];
//     return [];
//   };

//   // Auto navigate to dashboard after login
//   useEffect(() => {
//     if (user?.role) {
//       const firstRoute = getDashboardLinks()[0]?.path;
//       if (firstRoute) navigate(firstRoute, { replace: true });
//     }
//   }, [user]);

//   return (
//     <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">

//         {/* Logo & Mobile Menu Button */}
//         <div className="flex items-center gap-4">
//           <div className="lg:hidden">
//             <button onClick={() => setMenuOpen(true)} className="btn btn-ghost p-2 rounded-md hover:bg-base-200 transition">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//           <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic hover:scale-105 transition-transform">
//             eTuition<span className="text-secondary">Bd</span>
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
//             {navLinks}
//           </ul>
//         </div>

//         {/* Auth/Profile */}
//         <div className="flex items-center gap-4 relative">
//           {!loading && (!user?.email ? (
//             <Link
//               to="/login"
//               className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg hover:scale-105 transition-all"
//             >
//               Login
//             </Link>
//           ) : (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
//                   <img src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} alt="Profile" />
//                 </div>
//               </label>

//               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
//                 {getDashboardLinks().map(item => (
//                   <li key={item.path}>
//                     <Link to={item.path}>{item.name}</Link>
//                   </li>
//                 ))}
//                 <li>
//                   <button onClick={handleLogout} className="text-red-600">Logout</button>
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-base-100 shadow-lg p-6 transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <div className="flex justify-end mb-8">
//           <button onClick={() => setMenuOpen(false)} className="btn btn-ghost btn-sm p-2 rounded-full hover:bg-base-200">✕</button>
//         </div>
//         <ul className="flex flex-col gap-6 font-semibold text-lg">
//           {navLinks}
//           {!loading && (!user?.email ? (
//             <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
//           ) : (
//             <>
//               {getDashboardLinks().map(item => (
//                 <li key={item.path}>
//                   <Link to={item.path} onClick={() => setMenuOpen(false)}>{item.name}</Link>
//                 </li>
//               ))}
//               <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
//             </>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import useAuth from "../../Hooks/useAuth";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, loading, logoutUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logoutUser();
//     navigate("/login");
//   };

//   const navLinks = (
//     <>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/tuitions">Tuitions</Link></li>
//       <li><Link to="/tutors">Tutors</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </>
//   );

//   const dashboardLinks = () => {
//     if (user?.role === "student") return [
//       { name: "My Tuitions", path: "/dashboard/student/my-tuitions" },
//       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
//       { name: "Applied Tutors", path: "/dashboard/student/applied-tutors" },
//       { name: "Payments", path: "/dashboard/student/payments" },
//       { name: "Profile", path: "/dashboard/student/profile" },
//     ];
//     if (user?.role === "tutor") return [
//       { name: "My Applications", path: "/dashboard/tutor/my-applications" },
//       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
//       { name: "Revenue", path: "/dashboard/tutor/revenue" },
//       { name: "Profile", path: "/dashboard/tutor/profile" },
//     ];
//     if (user?.role === "admin") return [
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
//         {/* Logo */}
//         <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic">
//           eTuition<span className="text-secondary">Bd</span>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
//             {navLinks}
//           </ul>
//         </div>

//         {/* Profile */}
//         <div className="flex items-center gap-4 relative">
//           {!loading && (!user?.email ? (
//             <Link to="/login" className="bg-emerald-600 text-white px-8 py-2.5 rounded-lg font-bold">
//               Login
//             </Link>
//           ) : (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
//                   <img src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} alt="Profile" />
//                 </div>
//               </label>
//               <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
//                 {dashboardLinks().map(item => (
//                   <li key={item.path}><Link to={item.path}>{item.name}</Link></li>
//                 ))}
//                 <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, loading, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  // ড্রপডাউন মেনু লিঙ্কে ক্লিক করলে মেনু বন্ধ করার জন্য ফাংশন
  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  const navLinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Home</NavLink></li>
      <li><NavLink to="/tuitions" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Tuitions</NavLink></li>
      <li><NavLink to="/tutors" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Tutors</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>About</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>Contact</NavLink></li>
    </>
  );

  const dashboardLinks = () => {
    if (user?.role === "student") return [
      { name: "My Dashboard", path: "/dashboard/student" },
      { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
      { name: "Profile", path: "/dashboard/student/profile" },
    ];
    if (user?.role === "tutor") return [
      { name: "My Dashboard", path: "/dashboard/tutor" },
      { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
      { name: "Profile", path: "/dashboard/tutor/profile" },
    ];
    if (user?.role === "admin") return [
      { name: "Admin Home", path: "/dashboard/admin" },
      { name: "User Management", path: "/dashboard/admin/user-management" },
      { name: "Profile", path: "/dashboard/admin/profile" },
    ];
    return [];
  };

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-[1000] border-b border-base-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic">
          eTuition<span className="text-secondary">Bd</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-lg">
            {navLinks}
          </ul>
        </div>

        {/* Profile / Auth */}
        <div className="flex items-center gap-4">
          {loading ? (
            <span className="loading loading-spinner loading-md text-emerald-600"></span>
          ) : !user?.email ? (
            <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold transition-all shadow-md">
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
                  <img 
                    src={user?.photoURL || "https://i.ibb.co/9gK4k2P/avatar.png"} 
                    alt="Profile" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-box w-60 mt-4 border border-base-200">
                <li className="menu-title px-4 py-2 text-emerald-600 font-bold border-b border-base-100 mb-2">
                  {user?.displayName || "User"}
                </li>
                {dashboardLinks().map(item => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={closeDropdown} className="py-3 hover:bg-emerald-50 hover:text-emerald-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <div className="divider my-1"></div>
                <li>
                  <button 
                    onClick={() => { handleLogout(); closeDropdown(); }} 
                    className="text-red-500 hover:bg-red-50 py-3 font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;