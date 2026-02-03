// // const StudentDashboard = () => {
// //   return (
// //     <div className="p-8">
// //       <h1 className="text-3xl font-bold">Student Dashboard</h1>
// //       <p>Welcome, student! Here you can manage your tuitions.</p>
// //     </div>
// //   );
// // };

// // export default StudentDashboard;


// import { Link, Outlet } from "react-router-dom";

// const StudentDashboard = () => {
//   const menuItems = [
//     { name: "My Tuitions", path: "/dashboard/student/my-tuitions" },
//     { name: "Post Tuition", path: "/dashboard/student/post-tuition" },
//     { name: "Applied Tutors", path: "/dashboard/student/applied-tutors" },
//     { name: "Payments", path: "/dashboard/student/payments" },
//     { name: "Profile Settings", path: "/dashboard/student/profile" },
//   ];

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-100 p-6 hidden md:block">
//         <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
//         <ul className="space-y-3">
//           {menuItems.map((item) => (
//             <li key={item.path}>
//               <Link
//                 to={item.path}
//                 className="block px-4 py-2 rounded hover:bg-gray-200 font-semibold"
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-white">
//         <h1 className="text-3xl font-bold mb-4">Welcome, Student!</h1>
//         <p className="mb-6">Here you can manage your tuitions and track payments.</p>

//         {/* Nested routes render here */}
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default StudentDashboard;


import { Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, Student!</h1>
      <p className="mb-6">Manage your tuitions, payments, and profile here.</p>

      {/* Nested routes render */}
      <Outlet />
    </div>
  );
};

export default StudentDashboard;
