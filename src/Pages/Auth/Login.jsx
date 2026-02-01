// // // // // import React from 'react'

// // // // // const Login = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <h1>Alhamdulliah Login </h1>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default Login


// // // // import React from 'react';

// // // // const Login = () => {
// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // //       <div className="max-w-md w-full p-6 bg-white rounded shadow">
// // // //         <h1 className="text-2xl font-bold mb-4 text-center">Alhamdulliah Login</h1>
// // // //         {/* Form fields add koro ekhane */}
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Login;


// // // import React from "react";

// // // const Login = () => {
// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // //       <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
// // //         <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
// // //         <form className="space-y-4">
// // //           <div>
// // //             <label className="block text-gray-700 font-medium mb-1">Email</label>
// // //             <input
// // //               type="email"
// // //               placeholder="Enter your email"
// // //               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //           </div>
// // //           <div>
// // //             <label className="block text-gray-700 font-medium mb-1">Password</label>
// // //             <input
// // //               type="password"
// // //               placeholder="Enter your password"
// // //               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //           </div>
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
// // //           >
// // //             Login
// // //           </button>
// // //         </form>
// // //         <p className="text-center text-gray-500 mt-4">
// // //           Don't have an account?{" "}
// // //           <a href="/auth/register" className="text-blue-500 hover:underline">
// // //             Register
// // //           </a>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import { Link } from "react-router-dom";

// // const Login = () => {
// //   const { register, handleSubmit, formState: { errors } } = useForm();

// //   const onSubmit = (data) => {
// //     console.log("Login Data:", data);
// //     // Here you can connect Firebase Auth or your backend API
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
// //         <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //           <div>
// //             <label className="block text-gray-700 font-medium mb-1">Email</label>
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               {...register("email", { required: "Email is required" })}
// //               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
// //           </div>

// //           <div>
// //             <label className="block text-gray-700 font-medium mb-1">Password</label>
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               {...register("password", { required: "Password is required", minLength: 6 })}
// //               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
// //           >
// //             Login
// //           </button>
// //         </form>
// //         <p className="text-center text-gray-500 mt-4">
// //           Don't have an account?{" "}
// //           <Link to="/auth/register" className="text-blue-500 hover:underline">
// //             Register
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log("Login Data:", data);
//     // Here you can connect Firebase Auth or your backend API
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               {...register("email", { required: "Email is required" })}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               {...register("password", { required: "Password is required", minLength: 6 })}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-center text-gray-500 mt-4">
//           Don't have an account?{" "}
//           <Link to="/auth/register" className="text-blue-500 hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Add Firebase or API login here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required", minLength: 6 })}
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            {errors.password && <p className="text-red-500 mt-1 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
