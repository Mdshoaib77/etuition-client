// // // import { createBrowserRouter } from "react-router";
// // // import RootLayouts from "../Layouts/RootLayouts";
// // // import { Home } from "lucide-react";

// // // export const router = createBrowserRouter([
// // //   {
// // //     path: "/",
// // //    Component: RootLayouts,
// // //    children: [
// // //     {
// // //       index: true,
// // //       Component: Home,
// // //     }
// // //    ]
// // //   },
// // // ]);


// // import { createBrowserRouter } from "react-router-dom";
// // import RootLayouts from "../Layouts/RootLayouts";
// // import Home from "../Pages/Home/Home";
// // export const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     Component: RootLayouts,
// //     children: [
// //       {
// //         index: true,
// //         Component: Home
// //       },
// //     ],
// //   },
// // ]);



// import { createBrowserRouter } from "react-router-dom";
// import RootLayouts from "../Layouts/RootLayouts";
// import Home from "../Pages/Home/Home";
// import AuthLayout from "../Layouts/AuthLayout";
// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayouts />, // ✅ Component → element
//     children: [
//       {
//         index: true,
//         element: <Home />, // ✅ Component → element
//       },
//     ],
//   },
//   {
//     path: "/auth", // ✅ AuthLayout separate path
//     element: <AuthLayout />,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//     ],
//   },
// ]);


// import { createBrowserRouter } from "react-router-dom";
// import RootLayouts from "../Layouts/RootLayouts";
// import Home from "../Pages/Home/Home";
// import AuthLayout from "../Layouts/AuthLayout";
// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayouts />,
//     children: [
//       { index: true, element: <Home /> },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <AuthLayout />,
//     children: [
//       { path: "login", element: <Login /> },
//       { path: "register", element: <Register /> },
//     ],
//   },
// ]);



import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

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
]);
