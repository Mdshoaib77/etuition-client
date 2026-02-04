// // // // // // // // // import { Outlet, Link } from "react-router-dom";
// // // // // // // // // import useAuth from "../Hooks/useAuth";

// // // // // // // // // const DashboardLayout = () => {
// // // // // // // // //   const { user } = useAuth();

// // // // // // // // //   // Sidebar links based on role
// // // // // // // // //   const studentLinks = (
// // // // // // // // //     <>
// // // // // // // // //       <li><Link to="/dashboard/student/my-tuitions">My Tuitions</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/student/post-tuition">Post Tuition</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/student/applied-tutors">Applied Tutors</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/student/payments">Payments</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/student/profile">Profile</Link></li>
// // // // // // // // //     </>
// // // // // // // // //   );

// // // // // // // // //   const tutorLinks = (
// // // // // // // // //     <>
// // // // // // // // //       <li><Link to="/dashboard/tutor/my-applications">My Applications</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/tutor/ongoing-tuitions">Ongoing Tuitions</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/tutor/revenue">Revenue</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/tutor/profile">Profile</Link></li>
// // // // // // // // //     </>
// // // // // // // // //   );

// // // // // // // // //   const adminLinks = (
// // // // // // // // //     <>
// // // // // // // // //       <li><Link to="/dashboard/admin/user-management">User Management</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/admin/tuition-management">Tuition Management</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/admin/reports">Reports & Analytics</Link></li>
// // // // // // // // //       <li><Link to="/dashboard/admin/profile">Profile</Link></li>
// // // // // // // // //     </>
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex min-h-screen bg-base-200">
// // // // // // // // //       {/* Sidebar */}
// // // // // // // // //       <div className="w-64 bg-base-100 p-4 shadow-md">
// // // // // // // // //         <h2 className="text-xl font-bold mb-4 text-emerald-600">Dashboard</h2>
// // // // // // // // //         <ul className="menu gap-2 font-semibold">
// // // // // // // // //           {user?.role === "student" && studentLinks}
// // // // // // // // //           {user?.role === "tutor" && tutorLinks}
// // // // // // // // //           {user?.role === "admin" && adminLinks}
// // // // // // // // //         </ul>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Main content */}
// // // // // // // // //       <div className="flex-1 p-6">
// // // // // // // // //         <Outlet />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default DashboardLayout;


// // // // // // // // import { Outlet, Link } from "react-router-dom";
// // // // // // // // import useAuth from "../Hooks/useAuth";

// // // // // // // // const DashboardLayout = () => {
// // // // // // // //   const { user } = useAuth();

// // // // // // // //   const sidebarLinks = {
// // // // // // // //     student: [
// // // // // // // //       { name: "My Tuitions", path: "/dashboard/student/my-tuitions" },
// // // // // // // //       { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
// // // // // // // //       { name: "Applied Tutors", path: "/dashboard/student/applied-tutors" },
// // // // // // // //       { name: "Payments", path: "/dashboard/student/payments" },
// // // // // // // //       { name: "Profile", path: "/dashboard/student/profile" },
// // // // // // // //     ],
// // // // // // // //     tutor: [
// // // // // // // //       { name: "My Applications", path: "/dashboard/tutor/my-applications" },
// // // // // // // //       { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
// // // // // // // //       { name: "Revenue", path: "/dashboard/tutor/revenue" },
// // // // // // // //       { name: "Profile", path: "/dashboard/tutor/profile" },
// // // // // // // //     ],
// // // // // // // //     admin: [
// // // // // // // //       { name: "User Management", path: "/dashboard/admin/user-management" },
// // // // // // // //       { name: "Tuition Management", path: "/dashboard/admin/tuition-management" },
// // // // // // // //       { name: "Reports & Analytics", path: "/dashboard/admin/reports" },
// // // // // // // //       { name: "Profile", path: "/dashboard/admin/profile" },
// // // // // // // //     ],
// // // // // // // //   };

// // // // // // // //   const links = sidebarLinks[user?.role] || [];

// // // // // // // //   return (
// // // // // // // //     <div className="flex min-h-screen bg-base-200">
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <aside className="w-64 bg-base-100 p-6 shadow-md hidden md:block">
// // // // // // // //         <h2 className="text-2xl font-bold text-emerald-600 mb-6">Dashboard</h2>
// // // // // // // //         <ul className="space-y-3 font-semibold">
// // // // // // // //           {links.map((link) => (
// // // // // // // //             <li key={link.path}>
// // // // // // // //               <Link
// // // // // // // //                 to={link.path}
// // // // // // // //                 className="block px-4 py-2 rounded hover:bg-gray-200 transition"
// // // // // // // //               >
// // // // // // // //                 {link.name}
// // // // // // // //               </Link>
// // // // // // // //             </li>
// // // // // // // //           ))}
// // // // // // // //         </ul>
// // // // // // // //       </aside>

// // // // // // // //       {/* Main content */}
// // // // // // // //       <main className="flex-1 p-6">
// // // // // // // //         <Outlet />
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default DashboardLayout;


// // // // // // // import { Outlet, Link } from "react-router-dom";
// // // // // // // import useAuth from "../Hooks/useAuth";

// // // // // // // const DashboardLayout = () => {
// // // // // // //   const { user } = useAuth();

// // // // // // //   const studentLinks = [
// // // // // // //     { name: "My Tuitions", path: "/dashboard/student/my-tuitions" },
// // // // // // //     { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
// // // // // // //     { name: "Applied Tutors", path: "/dashboard/student/applied-tutors" },
// // // // // // //     { name: "Payments", path: "/dashboard/student/payments" },
// // // // // // //     { name: "Profile", path: "/dashboard/student/profile" },
// // // // // // //   ];

// // // // // // //   const tutorLinks = [
// // // // // // //     { name: "My Applications", path: "/dashboard/tutor/my-applications" },
// // // // // // //     { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
// // // // // // //     { name: "Revenue", path: "/dashboard/tutor/revenue" },
// // // // // // //     { name: "Profile", path: "/dashboard/tutor/profile" },
// // // // // // //   ];

// // // // // // //   const adminLinks = [
// // // // // // //     { name: "User Management", path: "/dashboard/admin/user-management" },
// // // // // // //     { name: "Tuition Management", path: "/dashboard/admin/tuition-management" },
// // // // // // //     { name: "Reports & Analytics", path: "/dashboard/admin/reports" },
// // // // // // //     { name: "Profile", path: "/dashboard/admin/profile" },
// // // // // // //   ];

// // // // // // //   let menuItems = [];
// // // // // // //   if (user?.role === "student") menuItems = studentLinks;
// // // // // // //   if (user?.role === "tutor") menuItems = tutorLinks;
// // // // // // //   if (user?.role === "admin") menuItems = adminLinks;

// // // // // // //   return (
// // // // // // //     <div className="flex min-h-screen bg-base-200">
// // // // // // //       <aside className="w-64 bg-base-100 p-6 shadow-md hidden md:block">
// // // // // // //         <h2 className="text-2xl font-bold mb-6 text-emerald-600">
// // // // // // //           {user?.role?.toUpperCase()} Dashboard
// // // // // // //         </h2>
// // // // // // //         <ul className="space-y-3 font-semibold">
// // // // // // //           {menuItems.map((item) => (
// // // // // // //             <li key={item.path}>
// // // // // // //               <Link
// // // // // // //                 to={item.path}
// // // // // // //                 className="block px-4 py-2 rounded hover:bg-gray-200 transition"
// // // // // // //               >
// // // // // // //                 {item.name}
// // // // // // //               </Link>
// // // // // // //             </li>
// // // // // // //           ))}
// // // // // // //         </ul>
// // // // // // //       </aside>

// // // // // // //       <main className="flex-1 p-6">
// // // // // // //         <Outlet />
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default DashboardLayout;


// // // // // // import { Outlet, Link } from "react-router-dom";
// // // // // // import useAuth from "../Hooks/useAuth";

// // // // // // const DashboardLayout = () => {
// // // // // //   const { user } = useAuth();

// // // // // //   const studentLinks = [
// // // // // //     { name: "My Tuitions", path: "/dashboard/student/my-tuitions" },
// // // // // //     { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
// // // // // //     { name: "Applied Tutors", path: "/dashboard/student/applied-tutors" },
// // // // // //     { name: "Payments", path: "/dashboard/student/payments" },
// // // // // //     { name: "Profile", path: "/dashboard/student/profile" },
// // // // // //   ];

// // // // // //   const tutorLinks = [
// // // // // //     { name: "My Applications", path: "/dashboard/tutor/my-applications" },
// // // // // //     { name: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions" },
// // // // // //     { name: "Revenue", path: "/dashboard/tutor/revenue" },
// // // // // //     { name: "Profile", path: "/dashboard/tutor/profile" },
// // // // // //   ];

// // // // // //   const adminLinks = [
// // // // // //     { name: "User Management", path: "/dashboard/admin/user-management" },
// // // // // //     { name: "Tuition Management", path: "/dashboard/admin/tuition-management" },
// // // // // //     { name: "Reports & Analytics", path: "/dashboard/admin/reports" },
// // // // // //     { name: "Profile", path: "/dashboard/admin/profile" },
// // // // // //   ];

// // // // // //   let menuItems = [];
// // // // // //   if (user?.role === "student") menuItems = studentLinks;
// // // // // //   if (user?.role === "tutor") menuItems = tutorLinks;
// // // // // //   if (user?.role === "admin") menuItems = adminLinks;

// // // // // //   return (
// // // // // //     <div className="flex min-h-screen bg-base-200">
// // // // // //       <aside className="w-64 bg-base-100 p-6 shadow-md hidden md:block">
// // // // // //         <h2 className="text-2xl font-bold mb-6 text-emerald-600">
// // // // // //           {user?.role?.toUpperCase()} Dashboard
// // // // // //         </h2>
// // // // // //         <ul className="space-y-3 font-semibold">
// // // // // //           {menuItems.map((item) => (
// // // // // //             <li key={item.path}>
// // // // // //               <Link
// // // // // //                 to={item.path}
// // // // // //                 className="block px-4 py-2 rounded hover:bg-gray-200 transition"
// // // // // //               >
// // // // // //                 {item.name}
// // // // // //               </Link>
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>
// // // // // //       </aside>

// // // // // //       <main className="flex-1 p-6">
// // // // // //         <Outlet />
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DashboardLayout;



// // // // // import { Outlet, Link, Navigate, useLocation } from "react-router-dom";
// // // // // import useAuth from "../Hooks/useAuth";

// // // // // const DashboardLayout = () => {
// // // // //   const { user, loading } = useAuth();
// // // // //   const location = useLocation();

// // // // //   if (loading) return <div>Loading...</div>;
// // // // //   if (!user) return <Navigate to="/login" replace />;

// // // // //   const linksByRole = {
// // // // //     student: [
// // // // //       { name: "My Tuitions", path: "my-tuitions" },
// // // // //       { name: "Post Tuition", path: "post-tuition" },
// // // // //       { name: "Applied Tutors", path: "applied-tutors" },
// // // // //       { name: "Payments", path: "payments" },
// // // // //       { name: "Profile", path: "profile" },
// // // // //     ],
// // // // //     tutor: [
// // // // //       { name: "My Applications", path: "my-applications" },
// // // // //       { name: "Ongoing Tuitions", path: "ongoing-tuitions" },
// // // // //       { name: "Revenue", path: "revenue" },
// // // // //       { name: "Profile", path: "profile" },
// // // // //     ],
// // // // //     admin: [
// // // // //       { name: "User Management", path: "user-management" },
// // // // //       { name: "Tuition Management", path: "tuition-management" },
// // // // //       { name: "Reports", path: "reports" },
// // // // //       { name: "Profile", path: "profile" },
// // // // //     ],
// // // // //   };

// // // // //   const menuItems = linksByRole[user.role] || [];

// // // // //   let defaultPath = "";
// // // // //   if (user.role === "student") defaultPath = "student/my-tuitions";
// // // // //   if (user.role === "tutor") defaultPath = "tutor/my-applications";
// // // // //   if (user.role === "admin") defaultPath = "admin/user-management";

// // // // //   // Direct /dashboard redirect
// // // // //   if (location.pathname === "/dashboard") {
// // // // //     return <Navigate to={`/dashboard/${defaultPath}`} replace />;
// // // // //   }

// // // // //   return (
// // // // //     <div className="flex min-h-screen bg-base-200">
// // // // //       <aside className="w-64 bg-base-100 p-6 shadow-md hidden md:block">
// // // // //         <h2 className="text-2xl font-bold mb-6 text-emerald-600">
// // // // //           {user.role.toUpperCase()} Dashboard
// // // // //         </h2>
// // // // //         <ul className="space-y-3 font-semibold">
// // // // //           {menuItems.map((item) => (
// // // // //             <li key={item.path}>
// // // // //               <Link to={item.path} className="block px-4 py-2 rounded hover:bg-gray-200">
// // // // //                 {item.name}
// // // // //               </Link>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </aside>

// // // // //       <main className="flex-1 p-6">
// // // // //         <Outlet />
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DashboardLayout;


// // // // import { Outlet, Link, Navigate, useLocation } from "react-router-dom";
// // // // import useAuth from "../Hooks/useAuth";

// // // // const DashboardLayout = () => {
// // // //   const { user, loading } = useAuth();
// // // //   const location = useLocation();

// // // //   if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
// // // //   if (!user) return <Navigate to="/login" replace />;

// // // //   const linksByRole = {
// // // //     student: [
// // // //       { name: "My Tuitions", path: "my-tuitions" },
// // // //       { name: "Post Tuition", path: "post-tuition" },
// // // //       { name: "Applied Tutors", path: "applied-tutors" },
// // // //       { name: "Payments", path: "payments" },
// // // //       { name: "Profile", path: "profile" },
// // // //     ],
// // // //     tutor: [
// // // //       { name: "My Applications", path: "my-applications" },
// // // //       { name: "Ongoing Tuitions", path: "ongoing-tuitions" },
// // // //       { name: "Revenue", path: "revenue" },
// // // //       { name: "Profile", path: "profile" },
// // // //     ],
// // // //     admin: [
// // // //       { name: "User Management", path: "user-management" },
// // // //       { name: "Tuition Management", path: "tuition-management" },
// // // //       { name: "Reports", path: "reports" },
// // // //       { name: "Profile", path: "profile" },
// // // //     ],
// // // //   };

// // // //   const menuItems = linksByRole[user.role] || [];

// // // //   // default path redirect
// // // //   let defaultPath = "";
// // // //   if (user.role === "student") defaultPath = "student/my-tuitions";
// // // //   if (user.role === "tutor") defaultPath = "tutor/my-applications";
// // // //   if (user.role === "admin") defaultPath = "admin/user-management";

// // // //   if (location.pathname === "/dashboard") {
// // // //     return <Navigate to={`/dashboard/${defaultPath}`} replace />;
// // // //   }

// // // //   return (
// // // //     <div className="flex min-h-screen bg-base-200">
// // // //       {/* Sidebar */}
// // // //       <aside className="w-64 bg-base-100 p-6 shadow-md hidden md:block">
// // // //         <h2 className="text-2xl font-bold mb-6 text-emerald-600">
// // // //           {user.role.toUpperCase()} Dashboard
// // // //         </h2>
// // // //         <ul className="space-y-3 font-semibold">
// // // //           {menuItems.map(item => (
// // // //             <li key={item.path}>
// // // //               <Link
// // // //                 to={`/dashboard/${user.role}/${item.path}`}
// // // //                 className="block px-4 py-2 rounded hover:bg-gray-200 transition"
// // // //               >
// // // //                 {item.name}
// // // //               </Link>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </aside>

// // // //       {/* Main content */}
// // // //       <main className="flex-1 p-6">
// // // //         <Outlet />
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashboardLayout;


// // // import { Outlet, Link, Navigate, useLocation } from "react-router-dom";
// // // import useAuth from "../Hooks/useAuth";

// // // const DashboardLayout = () => {
// // //   const { user, loading } = useAuth();
// // //   const location = useLocation();

// // //   if (loading)
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center">
// // //         <span className="loading loading-spinner loading-lg"></span>
// // //       </div>
// // //     );

// // //   if (!user) return <Navigate to="/login" replace />;

// // //   const linksByRole = {
// // //     student: [
// // //       { name: "My Tuitions", path: "my-tuitions" },
// // //       { name: "Post Tuition", path: "post-tuition" },
// // //       { name: "Applied Tutors", path: "applied-tutors" },
// // //       { name: "Payments", path: "payments" },
// // //       { name: "Profile", path: "profile" },
// // //     ],
// // //     tutor: [
// // //       { name: "My Applications", path: "my-applications" },
// // //       { name: "Ongoing Tuitions", path: "ongoing-tuitions" },
// // //       { name: "Revenue", path: "revenue" },
// // //       { name: "Profile", path: "profile" },
// // //     ],
// // //     admin: [
// // //       { name: "User Management", path: "user-management" },
// // //       { name: "Tuition Management", path: "tuition-management" },
// // //       { name: "Reports", path: "reports" },
// // //       { name: "Profile", path: "profile" },
// // //     ],
// // //   };

// // //   const menuItems = linksByRole[user?.role] || [];

// // //   // default path
// // //   let defaultPath = "";
// // //   if (user?.role === "student") defaultPath = "student/my-tuitions";
// // //   if (user?.role === "tutor") defaultPath = "tutor/my-applications";
// // //   if (user?.role === "admin") defaultPath = "admin/user-management";

// // //   // redirect /dashboard
// // //   if (location.pathname === "/dashboard") {
// // //     return <Navigate to={`/dashboard/${defaultPath}`} replace />;
// // //   }

// // //   return (
// // //     <div className="flex min-h-screen bg-base-200">
// // //       {/* Sidebar */}
// // //       <aside className="w-64 bg-base-100 p-6 shadow-md hidden md:block">
// // //         <h2 className="text-2xl font-bold mb-6 text-emerald-600">
// // //           {user?.role ? user.role.toUpperCase() : "Dashboard"}
// // //         </h2>
// // //         <ul className="space-y-3 font-semibold">
// // //           {menuItems.map((item) => (
// // //             <li key={item.path}>
// // //               <Link
// // //                 to={`/dashboard/${user?.role}/${item.path}`}
// // //                 className="block px-4 py-2 rounded hover:bg-gray-200 transition"
// // //               >
// // //                 {item.name}
// // //               </Link>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </aside>

// // //       {/* Main */}
// // //       <main className="flex-1 p-6">
// // //         <Outlet />
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default DashboardLayout;


// // // src/Layouts/DashboardLayout.jsx


// // import { Outlet, Link, Navigate, useLocation } from "react-router-dom";
// // import useAuth from "../Hooks/useAuth";

// // const DashboardLayout = () => {
// //   const { user, loading } = useAuth();
// //   const location = useLocation();

// //   if (loading) return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <span className="loading loading-spinner loading-lg"></span>
// //     </div>
// //   );

// //   if (!user) return <Navigate to="/login" replace />;

// //   // Role-based links
// //   const linksByRole = {
// //     student: [
// //       { name: "My Tuitions", path: "my-tuitions" },
// //       { name: "Post Tuition", path: "post-tuition" },
// //       { name: "Applied Tutors", path: "applied-tutors" },
// //       { name: "Payments", path: "payments" },
// //       { name: "Profile", path: "profile" },
// //     ],
// //     tutor: [
// //       { name: "My Applications", path: "my-applications" },
// //       { name: "Ongoing Tuitions", path: "ongoing-tuitions" },
// //       { name: "Revenue", path: "revenue" },
// //       { name: "Profile", path: "profile" },
// //     ],
// //     admin: [
// //       { name: "User Management", path: "user-management" },
// //       { name: "Tuition Management", path: "tuition-management" },
// //       { name: "Reports", path: "reports" },
// //       { name: "Profile", path: "profile" },
// //     ],
// //   };

// //   const menuItems = linksByRole[user.role] || [];

// //   // Default path based on role
// //   let defaultPath = "";
// //   if (user.role === "student") defaultPath = "student/my-tuitions";
// //   if (user.role === "tutor") defaultPath = "tutor/my-applications";
// //   if (user.role === "admin") defaultPath = "admin/user-management";

// //   // Redirect if user goes to /dashboard directly
// //   if (location.pathname === "/dashboard") {
// //     return <Navigate to={`/dashboard/${defaultPath}`} replace />;
// //   }

// //   return (
// //     <div className="flex min-h-screen bg-base-200">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-base-100 p-6 shadow-md hidden md:block">
// //         <h2 className="text-2xl font-bold mb-6 text-emerald-600">
// //           {user.role?.toUpperCase()} Dashboard
// //         </h2>
// //         <ul className="space-y-3 font-semibold">
// //           {menuItems.map((item) => (
// //             <li key={item.path}>
// //               <Link
// //                 to={item.path}
// //                 className="block px-4 py-2 rounded hover:bg-gray-200"
// //               >
// //                 {item.name}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </aside>

// //       {/* Main content */}
// //       <main className="flex-1 p-6">
// //         <Outlet />
// //       </main>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;


// // import { Outlet, Link, Navigate, useLocation, NavLink } from "react-router-dom";
// // import useAuth from "../Hooks/useAuth";

// // const DashboardLayout = () => {
// //   const { user, loading } = useAuth();
// //   const location = useLocation();

// //   if (loading) return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <span className="loading loading-spinner loading-lg text-emerald-600"></span>
// //     </div>
// //   );

// //   if (!user) return <Navigate to="/login" replace />;

// //   // Role-based links configuration
// //   const linksByRole = {
// //     student: [
// //       { name: "My Tuitions", path: "my-tuitions" },
// //       { name: "Post Tuition", path: "post-tuition" },
// //       { name: "Applied Tutors", path: "applied-tutors" },
// //       { name: "Payments", path: "payments" },
// //       { name: "Profile", path: "profile" },
// //     ],
// //     tutor: [
// //       { name: "My Applications", path: "my-applications" },
// //       { name: "Ongoing Tuitions", path: "ongoing-tuitions" },
// //       { name: "Revenue", path: "revenue" },
// //       { name: "Profile", path: "profile" },
// //     ],
// //     admin: [
// //       { name: "User Management", path: "user-management" },
// //       { name: "Tuition Management", path: "tuition-management" },
// //       { name: "Reports", path: "reports" },
// //       { name: "Profile", path: "profile" },
// //     ],
// //   };

// //   const menuItems = linksByRole[user.role] || [];

// //   // 🔥 Default redirection based on role
// //   if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
// //     const defaultPaths = {
// //       student: "student/my-tuitions",
// //       tutor: "tutor/my-applications",
// //       admin: "admin/user-management"
// //     };
// //     return <Navigate to={`/dashboard/${defaultPaths[user.role]}`} replace />;
// //   }

// //   return (
// //     <div className="flex min-h-screen bg-base-200">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-base-100 p-6 shadow-xl hidden md:block border-r border-base-300">
// //         <div className="mb-10 text-center">
// //           <Link to="/" className="text-2xl font-bold text-emerald-600 italic">
// //             eTuition<span className="text-secondary">Bd</span>
// //           </Link>
// //           <div className="mt-4 p-2 bg-emerald-50 rounded-lg">
// //              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
// //                {user.role} Panel
// //              </p>
// //           </div>
// //         </div>

// //         <nav>
// //           <ul className="space-y-2">
// //             {menuItems.map((item) => (
// //               <li key={item.path}>
// //                 <NavLink
// //                   // 🔥 ইউজার রোল এবং পাথ কম্বাইন করা হয়েছে যেন সঠিক পেজে যায়
// //                   to={`/dashboard/${user.role}/${item.path}`}
// //                   className={({ isActive }) =>
// //                     `block px-4 py-3 rounded-lg font-medium transition-all ${
// //                       isActive
// //                         ? "bg-emerald-600 text-white shadow-md"
// //                         : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
// //                     }`
// //                   }
// //                 >
// //                   {item.name}
// //                 </NavLink>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         {/* Home Button for convenience */}
// //         <div className="mt-10 pt-6 border-t border-gray-100">
// //            <Link to="/" className="text-sm text-gray-500 hover:text-emerald-600 flex items-center gap-2">
// //              ← Back to Home
// //            </Link>
// //         </div>
// //       </aside>

// //       {/* Main content */}
// //       <main className="flex-1 p-8 overflow-y-auto">
// //         <header className="mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm md:hidden">
// //            <h2 className="font-bold text-emerald-600 uppercase">{user.role} Dashboard</h2>
// //            {/* Mobile Menu can be added here */}
// //         </header>
        
// //         <div className="max-w-6xl mx-auto">
// //            <Outlet />
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;

// import { Outlet, Link, Navigate, useLocation, NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useAuth from "../Hooks/useAuth";

// const DashboardLayout = () => {
//   const { user, loading } = useAuth();
//   const location = useLocation();
//   const [role, setRole] = useState(user?.role || localStorage.getItem("role"));

//   // 🔥 Sync role from backend if missing or updated (admin change)
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`http://localhost:5000/users/role/${user.email}`, { credentials: "include" })
//         .then(res => res.json())
//         .then(data => {
//           if (data.role) {
//             setRole(data.role);
//             localStorage.setItem("role", data.role);
//           }
//         });
//     }
//   }, [user]);

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <span className="loading loading-spinner loading-lg text-emerald-600"></span>
//     </div>
//   );

//   if (!user) return <Navigate to="/login" replace />;

//   // Role-based links configuration
//   const linksByRole = {
//     student: [
//       { name: "My Tuitions", path: "my-tuitions" },
//       { name: "Post Tuition", path: "post-tuition" },
//       { name: "Applied Tutors", path: "applied-tutors" },
//       { name: "Payments", path: "payments" },
//       { name: "Profile", path: "profile" },
//     ],
//     tutor: [
//       { name: "My Applications", path: "my-applications" },
//       { name: "Ongoing Tuitions", path: "ongoing-tuitions" },
//       { name: "Revenue", path: "revenue" },
//       { name: "Profile", path: "profile" },
//     ],
//     admin: [
//       { name: "User Management", path: "user-management" },
//       { name: "Tuition Management", path: "tuition-management" },
//       { name: "Reports", path: "reports" },
//       { name: "Profile", path: "profile" },
//     ],
//   };

//   const menuItems = linksByRole[role] || [];

//   // 🔥 Default redirection based on role
//   if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
//     const defaultPaths = {
//       student: "student/my-tuitions",
//       tutor: "tutor/my-applications",
//       admin: "admin/user-management"
//     };
//     return <Navigate to={`/dashboard/${defaultPaths[role]}`} replace />;
//   }

//   return (
//     <div className="flex min-h-screen bg-base-200">
//       {/* Sidebar */}
//       <aside className="w-64 bg-base-100 p-6 shadow-xl hidden md:block border-r border-base-300">
//         <div className="mb-10 text-center">
//           <Link to="/" className="text-2xl font-bold text-emerald-600 italic">
//             eTuition<span className="text-secondary">Bd</span>
//           </Link>
//           <div className="mt-4 p-2 bg-emerald-50 rounded-lg">
//             <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
//               {role} Panel
//             </p>
//           </div>
//         </div>

//         <nav>
//           <ul className="space-y-2">
//             {menuItems.map((item) => (
//               <li key={item.path}>
//                 <NavLink
//                   to={`/dashboard/${role}/${item.path}`}
//                   className={({ isActive }) =>
//                     `block px-4 py-3 rounded-lg font-medium transition-all ${
//                       isActive
//                         ? "bg-emerald-600 text-white shadow-md"
//                         : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Home Button */}
//         <div className="mt-10 pt-6 border-t border-gray-100">
//           <Link to="/" className="text-sm text-gray-500 hover:text-emerald-600 flex items-center gap-2">
//             ← Back to Home
//           </Link>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         <header className="mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm md:hidden">
//           <h2 className="font-bold text-emerald-600 uppercase">{role} Dashboard</h2>
//         </header>

//         <div className="max-w-6xl mx-auto">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;



import { Outlet, Link, Navigate, useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  // 🔥 ALWAYS sync role from DB (admin change handle)
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/role/${user.email}`, {
        credentials: "include",
      })
        .then(res => res.json())
        .then(data => {
          if (data?.role) {
            setRole(data.role);
            localStorage.setItem("role", data.role);
          }
          setRoleLoading(false);
        })
        .catch(() => setRoleLoading(false));
    }
  }, [user]);

  if (loading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  // ===== Role based sidebar links =====
  const linksByRole = {
    student: [
      { name: "My Tuitions", path: "my-tuitions" },
      { name: "Post Tuition", path: "post-tuition" },
      { name: "Applied Tutors", path: "applied-tutors" },
      { name: "Payments", path: "payments" },
      { name: "Profile", path: "profile" },
    ],
    tutor: [
      { name: "My Applications", path: "my-applications" },
      { name: "Ongoing Tuitions", path: "ongoing-tuitions" },
      { name: "Revenue", path: "revenue" },
      { name: "Profile", path: "profile" },
    ],
    admin: [
      { name: "User Management", path: "user-management" },
      { name: "Tuition Management", path: "tuition-management" },
      { name: "Reports", path: "reports" },
      { name: "Profile", path: "profile" },
    ],
  };

  const menuItems = linksByRole[role] || [];

  // 🔥 Auto redirect based on role
  if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
    const defaultRoute = {
      student: "/dashboard/student/my-tuitions",
      tutor: "/dashboard/tutor/my-applications",
      admin: "/dashboard/admin/user-management",
    };
    return <Navigate to={defaultRoute[role]} replace />;
  }

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 p-6 shadow-xl hidden md:block border-r border-base-300">
        <div className="mb-10 text-center">
          <Link to="/" className="text-2xl font-bold text-emerald-600 italic">
            eTuition<span className="text-secondary">Bd</span>
          </Link>
          <div className="mt-4 p-2 bg-emerald-50 rounded-lg">
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              {role} Panel
            </p>
          </div>
        </div>

        <nav>
          <ul className="space-y-2">
            {menuItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={`/dashboard/${role}/${item.path}`}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-emerald-600 flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm md:hidden">
          <h2 className="font-bold text-emerald-600 uppercase">
            {role} Dashboard
          </h2>
        </header>

        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
