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
import Payment from "../Pages/Dashboard/student/Payment"; 
import StudentProfile from "../Pages/Dashboard/student/Profile";
import PaymentSuccess from "../Pages/Dashboard/student/PaymentSuccess";

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

// Public Pages
import Tutions from "../Pages/Tutions";
import Tutors from "../Pages/Tutors";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import TuitionDetails from "../Pages/TuitionDetails";

// ✅ NEW IMPORT (404 Page)
import Error404 from "../Pages/Error404";

// ✅ OPTIONAL (If you want to use Loading globally later)
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "tuitions", element: <Tutions /> },
      { path: "tuition/:id", element: <TuitionDetails /> },
      { path: "tutors", element: <Tutors /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // ✅ 404 Route Added (Very Important)
      { path: "*", element: <Error404 /> },
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
          { index: true, element: <MyTuitions /> },
          { path: "my-tuitions", element: <MyTuitions /> },
          { path: "post-tuition", element: <PostTuition /> },
          { path: "applied-tutors", element: <AppliedTutors /> },

          {
            path: "payments",
            children: [
              { index: true, element: <Payments /> },
              { path: "success", element: <PaymentSuccess /> }
            ]
          },

          { path: "payment-process", element: <Payment /> },
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
