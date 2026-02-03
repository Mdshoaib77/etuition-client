// // // // // // // // import { createBrowserRouter } from "react-router";
// // // // // // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // // // // // import { Home } from "lucide-react";

// // // // // // // // export const router = createBrowserRouter([
// // // // // // // //   {
// // // // // // // //     path: "/",
// // // // // // // //    Component: RootLayouts,
// // // // // // // //    children: [
// // // // // // // //     {
// // // // // // // //       index: true,
// // // // // // // //       Component: Home,
// // // // // // // //     }
// // // // // // // //    ]
// // // // // // // //   },
// // // // // // // // ]);


// // // // // // // import { createBrowserRouter } from "react-router-dom";
// // // // // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // // // // import Home from "../Pages/Home/Home";
// // // // // // // export const router = createBrowserRouter([
// // // // // // //   {
// // // // // // //     path: "/",
// // // // // // //     Component: RootLayouts,
// // // // // // //     children: [
// // // // // // //       {
// // // // // // //         index: true,
// // // // // // //         Component: Home
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   },
// // // // // // // ]);



// // // // // // import { createBrowserRouter } from "react-router-dom";
// // // // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // // // import Home from "../Pages/Home/Home";
// // // // // // import AuthLayout from "../Layouts/AuthLayout";
// // // // // // import Login from "../Pages/Auth/Login";
// // // // // // import Register from "../Pages/Auth/Register";

// // // // // // export const router = createBrowserRouter([
// // // // // //   {
// // // // // //     path: "/",
// // // // // //     element: <RootLayouts />, // ✅ Component → element
// // // // // //     children: [
// // // // // //       {
// // // // // //         index: true,
// // // // // //         element: <Home />, // ✅ Component → element
// // // // // //       },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     path: "/auth", // ✅ AuthLayout separate path
// // // // // //     element: <AuthLayout />,
// // // // // //     children: [
// // // // // //       {
// // // // // //         path: "login",
// // // // // //         element: <Login />,
// // // // // //       },
// // // // // //       {
// // // // // //         path: "register",
// // // // // //         element: <Register />,
// // // // // //       },
// // // // // //     ],
// // // // // //   },
// // // // // // ]);


// // // // // // import { createBrowserRouter } from "react-router-dom";
// // // // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // // // import Home from "../Pages/Home/Home";
// // // // // // import AuthLayout from "../Layouts/AuthLayout";
// // // // // // import Login from "../Pages/Auth/Login";
// // // // // // import Register from "../Pages/Auth/Register";

// // // // // // export const router = createBrowserRouter([
// // // // // //   {
// // // // // //     path: "/",
// // // // // //     element: <RootLayouts />,
// // // // // //     children: [
// // // // // //       { index: true, element: <Home /> },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     path: "/auth",
// // // // // //     element: <AuthLayout />,
// // // // // //     children: [
// // // // // //       { path: "login", element: <Login /> },
// // // // // //       { path: "register", element: <Register /> },
// // // // // //     ],
// // // // // //   },
// // // // // // ]);



// // // // // // import { createBrowserRouter } from "react-router-dom";
// // // // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // // // import Home from "../Pages/Home/Home";
// // // // // // import Login from "../Pages/Auth/Login";
// // // // // // import Register from "../Pages/Auth/Register";

// // // // // // export const router = createBrowserRouter([
// // // // // //   {
// // // // // //     path: "/",
// // // // // //     element: <RootLayouts />,
// // // // // //     children: [
// // // // // //       { index: true, element: <Home /> },
// // // // // //       { path: "login", element: <Login /> },
// // // // // //         { path: "register", element: <Register /> },
// // // // // //     ],
// // // // // //   },
// // // // // // ]);


// // // // // import { createBrowserRouter } from "react-router-dom";
// // // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // // import Home from "../Pages/Home/Home";
// // // // // import AuthLayout from "../Layouts/AuthLayout";
// // // // // import Login from "../Pages/Auth/Login";
// // // // // import Register from "../Pages/Auth/Register";

// // // // // // Dashboard pages
// // // // // import StudentDashboard from "../Pages/Dashboard/student/StudentDashboard";
// // // // // import TutorDashboard from "../Pages/Dashboard/tutor/TutorDashboard";
// // // // // import AdminDashboard from "../Pages/Dashboard/admin/AdminDashboard";

// // // // // // Route protection
// // // // // import PrivateRoute from "../routes/PrivateRoute";
// // // // // import StudentRoute from "../routes/StudentRoute";
// // // // // import TutorRoute from "../routes/TutorRoute";
// // // // // import AdminRoute from "../routes/AdminRoute";

// // // // // export const router = createBrowserRouter([
// // // // //   {
// // // // //     path: "/",
// // // // //     element: <RootLayouts />,
// // // // //     children: [
// // // // //       { index: true, element: <Home /> },
// // // // //       { path: "login", element: <Login /> },
// // // // //       { path: "register", element: <Register /> },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     path: "/dashboard/student",
// // // // //     element: (
// // // // //       <PrivateRoute>
// // // // //         <StudentRoute>
// // // // //           <StudentDashboard />
// // // // //         </StudentRoute>
// // // // //       </PrivateRoute>
// // // // //     ),
// // // // //   },
// // // // //   {
// // // // //     path: "/dashboard/tutor",
// // // // //     element: (
// // // // //       <PrivateRoute>
// // // // //         <TutorRoute>
// // // // //           <TutorDashboard />
// // // // //         </TutorRoute>
// // // // //       </PrivateRoute>
// // // // //     ),
// // // // //   },
// // // // //   {
// // // // //     path: "/dashboard/admin",
// // // // //     element: (
// // // // //       <PrivateRoute>
// // // // //         <AdminRoute>
// // // // //           <AdminDashboard />
// // // // //         </AdminRoute>
// // // // //       </PrivateRoute>
// // // // //     ),
// // // // //   },
// // // // // ]);



// // // // // import { createBrowserRouter } from "react-router-dom";
// // // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // // import Home from "../Pages/Home/Home";
// // // // // import Login from "../Pages/Auth/Login";
// // // // // import Register from "../Pages/Auth/Register";

// // // // // import DashboardLayout from "../Layouts/DashboardLayout";
// // // // // import StudentDashboard from "../Pages/Dashboard/student/StudentDashboard";
// // // // // import TutorDashboard from "../Pages/Dashboard/tutor/TutorDashboard";
// // // // // import AdminDashboard from "../Pages/Dashboard/admin/AdminDashboard";

// // // // // import PrivateRoute from "../routes/PrivateRoute";
// // // // // import StudentRoute from "../routes/StudentRoute";
// // // // // import TutorRoute from "../routes/TutorRoute";
// // // // // import AdminRoute from "../routes/AdminRoute";

// // // // // export const router = createBrowserRouter([
// // // // //   {
// // // // //     path: "/",
// // // // //     element: <RootLayouts />,
// // // // //     children: [
// // // // //       { index: true, element: <Home /> },
// // // // //       { path: "login", element: <Login /> },
// // // // //       { path: "register", element: <Register /> },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     path: "/dashboard",
// // // // //     element: (
// // // // //       <PrivateRoute>
// // // // //         <DashboardLayout />
// // // // //       </PrivateRoute>
// // // // //     ),
// // // // //     children: [
// // // // //       { path: "student/*", element: <StudentRoute><StudentDashboard /></StudentRoute> },
// // // // //       { path: "tutor/*", element: <TutorRoute><TutorDashboard /></TutorRoute> },
// // // // //       { path: "admin/*", element: <AdminRoute><AdminDashboard /></AdminRoute> },
// // // // //     ],
// // // // //   },
// // // // // ]);



// // // // import { createBrowserRouter } from "react-router-dom";
// // // // import RootLayouts from "../Layouts/RootLayouts";
// // // // import Home from "../Pages/Home/Home";
// // // // import Login from "../Pages/Auth/Login";
// // // // import Register from "../Pages/Auth/Register";

// // // // // Dashboard Layout & Pages
// // // // import DashboardLayout from "../Layouts/DashboardLayout";

// // // // // Student Dashboard & Subpages
// // // // import StudentDashboard from "../Pages/Dashboard/student/StudentDashboard";
// // // // import MyTuitions from "../Pages/Dashboard/student/MyTuitions";
// // // // import PostTuition from "../Pages/Dashboard/student/PostTuition";
// // // // import AppliedTutors from "../Pages/Dashboard/student/AppliedTutors";
// // // // import Payments from "../Pages/Dashboard/student/Payments";
// // // // import StudentProfile from "../Pages/Dashboard/student/Profile";

// // // // // Tutor Dashboard & Subpages
// // // // import TutorDashboard from "../Pages/Dashboard/tutor/TutorDashboard";
// // // // import MyApplications from "../Pages/Dashboard/tutor/MyApplications";
// // // // import OngoingTuitions from "../Pages/Dashboard/tutor/OngoingTuitions";
// // // // import Revenue from "../Pages/Dashboard/tutor/Revenue";
// // // // import TutorProfile from "../Pages/Dashboard/tutor/Profile";

// // // // // Admin Dashboard & Subpages
// // // // import AdminDashboard from "../Pages/Dashboard/admin/AdminDashboard";
// // // // import UserManagement from "../Pages/Dashboard/admin/UserManagement";
// // // // import TuitionManagement from "../Pages/Dashboard/admin/TuitionManagement";
// // // // import Reports from "../Pages/Dashboard/admin/Reports";
// // // // import AdminProfile from "../Pages/Dashboard/admin/Profile";

// // // // // Route Guards
// // // // import PrivateRoute from "../routes/PrivateRoute";
// // // // import StudentRoute from "../routes/StudentRoute";
// // // // import TutorRoute from "../routes/TutorRoute";
// // // // import AdminRoute from "../routes/AdminRoute";

// // // // export const router = createBrowserRouter([
// // // //   {
// // // //     path: "/",
// // // //     element: <RootLayouts />,
// // // //     children: [
// // // //       { index: true, element: <Home /> },
// // // //       { path: "login", element: <Login /> },
// // // //       { path: "register", element: <Register /> },
// // // //     ],
// // // //   },
// // // //   {
// // // //     path: "/dashboard",
// // // //     element: (
// // // //       <PrivateRoute>
// // // //         <DashboardLayout />
// // // //       </PrivateRoute>
// // // //     ),
// // // //     children: [
// // // //       // Student Routes
// // // //       {
// // // //         path: "student",
// // // //         element: <StudentRoute><StudentDashboard /></StudentRoute>,
// // // //         children: [
// // // //           { path: "my-tuitions", element: <MyTuitions /> },
// // // //           { path: "post-tuition", element: <PostTuition /> },
// // // //           { path: "applied-tutors", element: <AppliedTutors /> },
// // // //           { path: "payments", element: <Payments /> },
// // // //           { path: "profile", element: <StudentProfile /> },
// // // //         ],
// // // //       },

// // // //       // Tutor Routes
// // // //       {
// // // //         path: "tutor",
// // // //         element: <TutorRoute><TutorDashboard /></TutorRoute>,
// // // //         children: [
// // // //           { path: "my-applications", element: <MyApplications /> },
// // // //           { path: "ongoing-tuitions", element: <OngoingTuitions /> },
// // // //           { path: "revenue", element: <Revenue /> },
// // // //           { path: "profile", element: <TutorProfile /> },
// // // //         ],
// // // //       },

// // // //       // Admin Routes
// // // //       {
// // // //         path: "admin",
// // // //         element: <AdminRoute><AdminDashboard /></AdminRoute>,
// // // //         children: [
// // // //           { path: "user-management", element: <UserManagement /> },
// // // //           { path: "tuition-management", element: <TuitionManagement /> },
// // // //           { path: "reports", element: <Reports /> },
// // // //           { path: "profile", element: <AdminProfile /> },
// // // //         ],
// // // //       },
// // // //     ],
// // // //   },
// // // // ]);



// // // import { createBrowserRouter } from "react-router-dom";
// // // import RootLayouts from "../Layouts/RootLayouts";
// // // import Home from "../Pages/Home/Home";
// // // import Login from "../Pages/Auth/Login";
// // // import Register from "../Pages/Auth/Register";

// // // // Dashboard Layout & Pages
// // // import DashboardLayout from "../Layouts/DashboardLayout";

// // // // Student
// // // import StudentDashboard from "../Pages/Dashboard/student/StudentDashboard";
// // // import MyTuitions from "../Pages/Dashboard/student/MyTuitions";
// // // import PostTuition from "../Pages/Dashboard/student/PostTuition";
// // // import AppliedTutors from "../Pages/Dashboard/student/AppliedTutors";
// // // import Payments from "../Pages/Dashboard/student/Payments";
// // // import StudentProfile from "../Pages/Dashboard/student/Profile";

// // // // Tutor
// // // import TutorDashboard from "../Pages/Dashboard/tutor/TutorDashboard";
// // // import MyApplications from "../Pages/Dashboard/tutor/MyApplications";
// // // import OngoingTuitions from "../Pages/Dashboard/tutor/OngoingTuitions";
// // // import Revenue from "../Pages/Dashboard/tutor/Revenue";
// // // import TutorProfile from "../Pages/Dashboard/tutor/Profile";

// // // // Admin
// // // import AdminDashboard from "../Pages/Dashboard/admin/AdminDashboard";
// // // import UserManagement from "../Pages/Dashboard/admin/UserManagement";
// // // import TuitionManagement from "../Pages/Dashboard/admin/TuitionManagement";
// // // import Reports from "../Pages/Dashboard/admin/Reports";
// // // import AdminProfile from "../Pages/Dashboard/admin/Profile";

// // // // Route Guards
// // // import PrivateRoute from "../routes/PrivateRoute";
// // // import StudentRoute from "../routes/StudentRoute";
// // // import TutorRoute from "../routes/TutorRoute";
// // // import AdminRoute from "../routes/AdminRoute";

// // // export const router = createBrowserRouter([
// // //   {
// // //     path: "/",
// // //     element: <RootLayouts />,
// // //     children: [
// // //       { index: true, element: <Home /> },
// // //       { path: "login", element: <Login /> },
// // //       { path: "register", element: <Register /> },
// // //     ],
// // //   },
// // //   {
// // //     path: "/dashboard",
// // //     element: (
// // //       <PrivateRoute>
// // //         <DashboardLayout />
// // //       </PrivateRoute>
// // //     ),
// // //     children: [
// // //       // Student
// // //       {
// // //         path: "student",
// // //         element: <StudentRoute><StudentDashboard /></StudentRoute>,
// // //         children: [
// // //           { path: "my-tuitions", element: <MyTuitions /> },
// // //           { path: "post-tuition", element: <PostTuition /> },
// // //           { path: "applied-tutors", element: <AppliedTutors /> },
// // //           { path: "payments", element: <Payments /> },
// // //           { path: "profile", element: <StudentProfile /> },
// // //         ],
// // //       },
// // //       // Tutor
// // //       {
// // //         path: "tutor",
// // //         element: <TutorRoute><TutorDashboard /></TutorRoute>,
// // //         children: [
// // //           { path: "my-applications", element: <MyApplications /> },
// // //           { path: "ongoing-tuitions", element: <OngoingTuitions /> },
// // //           { path: "revenue", element: <Revenue /> },
// // //           { path: "profile", element: <TutorProfile /> },
// // //         ],
// // //       },
// // //       // Admin
// // //       {
// // //         path: "admin",
// // //         element: <AdminRoute><AdminDashboard /></AdminRoute>,
// // //         children: [
// // //           { path: "user-management", element: <UserManagement /> },
// // //           { path: "tuition-management", element: <TuitionManagement /> },
// // //           { path: "reports", element: <Reports /> },
// // //           { path: "profile", element: <AdminProfile /> },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // // ]);



// // import { createBrowserRouter } from "react-router-dom";
// // import RootLayouts from "../Layouts/RootLayouts";
// // import Home from "../Pages/Home/Home";
// // import Login from "../Pages/Auth/Login";
// // import Register from "../Pages/Auth/Register";

// // // Dashboard Layout & Pages
// // import DashboardLayout from "../Layouts/DashboardLayout";

// // // Student
// // import StudentDashboard from "../Pages/Dashboard/student/StudentDashboard";
// // import MyTuitions from "../Pages/Dashboard/student/MyTuitions";
// // import PostTuition from "../Pages/Dashboard/student/PostTuition";
// // import AppliedTutors from "../Pages/Dashboard/student/AppliedTutors";
// // import Payments from "../Pages/Dashboard/student/Payments";
// // import StudentProfile from "../Pages/Dashboard/student/Profile";

// // // Tutor
// // import TutorDashboard from "../Pages/Dashboard/tutor/TutorDashboard";
// // import MyApplications from "../Pages/Dashboard/tutor/MyApplications";
// // import OngoingTuitions from "../Pages/Dashboard/tutor/OngoingTuitions";
// // import Revenue from "../Pages/Dashboard/tutor/Revenue";
// // import TutorProfile from "../Pages/Dashboard/tutor/Profile";

// // // Admin
// // import AdminDashboard from "../Pages/Dashboard/admin/AdminDashboard";
// // import UserManagement from "../Pages/Dashboard/admin/UserManagement";
// // import TuitionManagement from "../Pages/Dashboard/admin/TuitionManagement";
// // import Reports from "../Pages/Dashboard/admin/Reports";
// // import AdminProfile from "../Pages/Dashboard/admin/Profile";

// // // Route Guards
// // import PrivateRoute from "../routes/PrivateRoute";
// // import StudentRoute from "../routes/StudentRoute";
// // import TutorRoute from "../routes/TutorRoute";
// // import AdminRoute from "../routes/AdminRoute";

// // export const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <RootLayouts />,
// //     children: [
// //       { index: true, element: <Home /> },
// //       { path: "login", element: <Login /> },
// //       { path: "register", element: <Register /> },
// //     ],
// //   },
// //   {
// //     path: "/dashboard",
// //     element: (
// //       <PrivateRoute>
// //         <DashboardLayout />
// //       </PrivateRoute>
// //     ),
// //     children: [
// //       // Student
// //       {
// //         path: "student",
// //         element: <StudentRoute><StudentDashboard /></StudentRoute>,
// //         children: [
// //           { path: "my-tuitions", element: <MyTuitions /> },
// //           { path: "post-tuition", element: <PostTuition /> },
// //           { path: "applied-tutors", element: <AppliedTutors /> },
// //           { path: "payments", element: <Payments /> },
// //           { path: "profile", element: <StudentProfile /> },
// //         ],
// //       },
// //       // Tutor
// //       {
// //         path: "tutor",
// //         element: <TutorRoute><TutorDashboard /></TutorRoute>,
// //         children: [
// //           { path: "my-applications", element: <MyApplications /> },
// //           { path: "ongoing-tuitions", element: <OngoingTuitions /> },
// //           { path: "revenue", element: <Revenue /> },
// //           { path: "profile", element: <TutorProfile /> },
// //         ],
// //       },
// //       // Admin
// //       {
// //         path: "admin",
// //         element: <AdminRoute><AdminDashboard /></AdminRoute>,
// //         children: [
// //           { path: "user-management", element: <UserManagement /> },
// //           { path: "tuition-management", element: <TuitionManagement /> },
// //           { path: "reports", element: <Reports /> },
// //           { path: "profile", element: <AdminProfile /> },
// //         ],
// //       },
// //     ],
// //   },
// // ]);


// import { createBrowserRouter } from "react-router-dom";
// import RootLayouts from "../Layouts/RootLayouts";
// import Home from "../Pages/Home/Home";
// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";

// import DashboardLayout from "../Layouts/DashboardLayout";

// // Student
// import StudentDashboard from "../Pages/Dashboard/student/StudentDashboard";
// import MyTuitions from "../Pages/Dashboard/student/MyTuitions";
// import PostTuition from "../Pages/Dashboard/student/PostTuition";
// import AppliedTutors from "../Pages/Dashboard/student/AppliedTutors";
// import Payments from "../Pages/Dashboard/student/Payments";
// import StudentProfile from "../Pages/Dashboard/student/Profile";

// // Tutor
// import TutorDashboard from "../Pages/Dashboard/tutor/TutorDashboard";
// import MyApplications from "../Pages/Dashboard/tutor/MyApplications";
// import OngoingTuitions from "../Pages/Dashboard/tutor/OngoingTuitions";
// import Revenue from "../Pages/Dashboard/tutor/Revenue";
// import TutorProfile from "../Pages/Dashboard/tutor/Profile";

// // Admin
// import AdminDashboard from "../Pages/Dashboard/admin/AdminDashboard";
// import UserManagement from "../Pages/Dashboard/admin/UserManagement";
// import TuitionManagement from "../Pages/Dashboard/admin/TuitionManagement";
// import Reports from "../Pages/Dashboard/admin/Reports";
// import AdminProfile from "../Pages/Dashboard/admin/Profile";

// // Route Guards
// import PrivateRoute from "../routes/PrivateRoute";
// import StudentRoute from "../routes/StudentRoute";
// import TutorRoute from "../routes/TutorRoute";
// import AdminRoute from "../routes/AdminRoute";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayouts />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "login", element: <Login /> },
//       { path: "register", element: <Register /> },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       // Student
//       {
//         path: "student",
//         element: <StudentRoute><StudentDashboard /></StudentRoute>,
//         children: [
//           { path: "my-tuitions", element: <MyTuitions /> },
//           { path: "post-tuition", element: <PostTuition /> },
//           { path: "applied-tutors", element: <AppliedTutors /> },
//           { path: "payments", element: <Payments /> },
//           { path: "profile", element: <StudentProfile /> },
//         ],
//       },
//       // Tutor
//       {
//         path: "tutor",
//         element: <TutorRoute><TutorDashboard /></TutorRoute>,
//         children: [
//           { path: "my-applications", element: <MyApplications /> },
//           { path: "ongoing-tuitions", element: <OngoingTuitions /> },
//           { path: "revenue", element: <Revenue /> },
//           { path: "profile", element: <TutorProfile /> },
//         ],
//       },
//       // Admin
//       {
//         path: "admin",
//         element: <AdminRoute><AdminDashboard /></AdminRoute>,
//         children: [
//           { path: "user-management", element: <UserManagement /> },
//           { path: "tuition-management", element: <TuitionManagement /> },
//           { path: "reports", element: <Reports /> },
//           { path: "profile", element: <AdminProfile /> },
//         ],
//       },
//     ],
//   },
// ]);


import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

import DashboardLayout from "../Layouts/DashboardLayout";

// Student
import StudentDashboard from "../Pages/Dashboard/student/StudentDashboard";
import MyTuitions from "../Pages/Dashboard/student/MyTuitions";
import PostTuition from "../Pages/Dashboard/student/PostTuition";
import AppliedTutors from "../Pages/Dashboard/student/AppliedTutors";
import Payments from "../Pages/Dashboard/student/Payments";
import StudentProfile from "../Pages/Dashboard/student/Profile";

// Tutor
import TutorDashboard from "../Pages/Dashboard/tutor/TutorDashboard";
import MyApplications from "../Pages/Dashboard/tutor/MyApplications";
import OngoingTuitions from "../Pages/Dashboard/tutor/OngoingTuitions";
import Revenue from "../Pages/Dashboard/tutor/Revenue";
import TutorProfile from "../Pages/Dashboard/tutor/Profile";

// Admin
import AdminDashboard from "../Pages/Dashboard/admin/AdminDashboard";
import UserManagement from "../Pages/Dashboard/admin/UserManagement";
import TuitionManagement from "../Pages/Dashboard/admin/TuitionManagement";
import Reports from "../Pages/Dashboard/admin/Reports";
import AdminProfile from "../Pages/Dashboard/admin/Profile";

// Route Guards
import PrivateRoute from "../routes/PrivateRoute";
import StudentRoute from "../routes/StudentRoute";
import TutorRoute from "../routes/TutorRoute";
import AdminRoute from "../routes/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // 🔥 Student Routes
      {
        path: "student",
        element: (
          <StudentRoute>
            <StudentDashboard />
          </StudentRoute>
        ),
        children: [
          // index: true দিলে /dashboard/student এ ঢুকলেই MyTuitions দেখাবে
          { index: true, element: <MyTuitions /> }, 
          { path: "my-tuitions", element: <MyTuitions /> },
          { path: "post-tuition", element: <PostTuition /> },
          { path: "applied-tutors", element: <AppliedTutors /> },
          { path: "payments", element: <Payments /> },
          { path: "profile", element: <StudentProfile /> },
        ],
      },
      // 🔥 Tutor Routes
      {
        path: "tutor",
        element: (
          <TutorRoute>
            <TutorDashboard />
          </TutorRoute>
        ),
        children: [
          { index: true, element: <MyApplications /> },
          { path: "my-applications", element: <MyApplications /> },
          { path: "ongoing-tuitions", element: <OngoingTuitions /> },
          { path: "revenue", element: <Revenue /> },
          { path: "profile", element: <TutorProfile /> },
        ],
      },
      // 🔥 Admin Routes
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
        children: [
          { index: true, element: <UserManagement /> },
          { path: "user-management", element: <UserManagement /> },
          { path: "tuition-management", element: <TuitionManagement /> },
          { path: "reports", element: <Reports /> },
          { path: "profile", element: <AdminProfile /> },
        ],
      },
    ],
  },
]);