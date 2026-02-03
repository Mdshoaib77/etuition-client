// import { Link, useNavigate, NavLink } from "react-router-dom";
// import { useState } from "react";
// import useAuth from "../../Hooks/useAuth";

// const Navbar = () => {
//   const { user, loading, logoutUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logoutUser();
//     navigate("/login");
//   };

//   // ড্রপডাউন মেনু লিঙ্কে ক্লিক করলে মেনু বন্ধ করার জন্য ফাংশন
//   const closeDropdown = () => {
//     const elem = document.activeElement;
//     if (elem) {
//       elem.blur();
//     }
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
//     if (user?.role === "student") return [
//       { name: "My Dashboard", path: "/dashboard/student" },
//       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
//       { name: "Profile", path: "/dashboard/student/profile" },
//     ];
//     if (user?.role === "tutor") return [
//       { name: "My Dashboard", path: "/dashboard/tutor" },
//       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
//       { name: "Profile", path: "/dashboard/tutor/profile" },
//     ];
//     if (user?.role === "admin") return [
//       { name: "Admin Home", path: "/dashboard/admin" },
//       { name: "User Management", path: "/dashboard/admin/user-management" },
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

//         {/* Profile / Auth */}
//         <div className="flex items-center gap-4">
//           {loading ? (
//             <span className="loading loading-spinner loading-md text-emerald-600"></span>
//           ) : !user?.email ? (
//             <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold transition-all shadow-md">
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
//               <ul tabIndex={0} className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-box w-60 mt-4 border border-base-200">
//                 <li className="menu-title px-4 py-2 text-emerald-600 font-bold border-b border-base-100 mb-2">
//                   {user?.displayName || "User"}
//                 </li>
//                 {dashboardLinks().map(item => (
//                   <li key={item.path}>
//                     <Link to={item.path} onClick={closeDropdown} className="py-3 hover:bg-emerald-50 hover:text-emerald-600">
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//                 <div className="divider my-1"></div>
//                 <li>
//                   <button 
//                     onClick={() => { handleLogout(); closeDropdown(); }} 
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
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, loading, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) elem.blur();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/tuitions" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
          Tuitions
        </NavLink>
      </li>
      <li>
        <NavLink to="/tutors" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
          Tutors
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-600" : ""}>
          Contact
        </NavLink>
      </li>
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
        <Link to="/" className="text-2xl md:text-3xl font-bold text-emerald-600 italic">
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
            <Link
              to="/login"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-bold transition-all shadow-md"
            >
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

              <ul
                tabIndex={0}
                className="dropdown-content menu p-3 shadow-xl bg-base-100 rounded-box w-60 mt-4 border border-base-200"
              >
                <li className="menu-title px-4 py-2 text-emerald-600 font-bold border-b border-base-100 mb-2">
                  {user?.displayName || "User"}
                </li>

                {dashboardLinks().map(item => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={closeDropdown}
                      className="py-3 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <div className="divider my-1"></div>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeDropdown();
                    }}
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
