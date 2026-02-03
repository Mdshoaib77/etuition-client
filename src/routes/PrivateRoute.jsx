// // // import { Navigate, useLocation } from "react-router-dom";
// // // import useAuth from "../Hooks/useAuth";

// // // const PrivateRoute = ({ children }) => {
// // //   const { user, loading } = useAuth();
// // //   const location = useLocation();

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center">
// // //         <span className="loading loading-spinner loading-lg text-primary"></span>
// // //       </div>
// // //     );
// // //   }

// // //   if (!user) {
// // //     return <Navigate to="/login" state={{ from: location }} replace />;
// // //   }

// // //   return children;
// // // };

// // // export default PrivateRoute;



// // import useAuth from "../Hooks/useAuth";
// // import { Navigate } from "react-router-dom";

// // const PrivateRoute = ({ children }) => {
// //   const { user, loading } = useAuth();

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <span className="loading loading-spinner loading-lg"></span>
// //       </div>
// //     );
// //   }

// //   if (!user) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return children;
// // };

// // export default PrivateRoute;


// import { Navigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (!user) return <Navigate to="/login" replace />;

//   return children;
// };

// export default PrivateRoute;


import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
