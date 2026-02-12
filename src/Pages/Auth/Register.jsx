// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { Link, useNavigate } from "react-router-dom";
// // import useAuth from "../../Hooks/useAuth";

// // const Register = () => {
// //   const { registerUser, googleLogin } = useAuth(); 
// //   const navigate = useNavigate();
// //   const [success, setSuccess] = useState("");
// //   const [authError, setAuthError] = useState("");

// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm();

// //   const onSubmit = (data) => {
// //     setAuthError("");
// //     setSuccess("");

// //     console.log("📌 Form Data:", data);

// //     registerUser(data.email, data.password)
// //       .then((result) => {
// //         console.log("✅ Firebase User:", result.user);

// //         // 🔥 ব্যাকএন্ড না আসা পর্যন্ত ইমেইল অনুযায়ী রোল ব্রাউজারে সেভ করে রাখছি
// //         localStorage.setItem(`role_${data.email}`, data.role);

// //         setSuccess("🎉 Registration Successful!");
// //         reset();

// //         setTimeout(() => {
// //           navigate("/login");
// //         }, 1500);
// //       })
// //       .catch((error) => {
// //         console.error(error.message);
// //         setAuthError(error.message);
// //       });
// //   };

// //   // 🔥 Google Register/Login handler
// //   const handleGoogleRegister = () => {
// //     setAuthError("");
// //     setSuccess("");

// //     googleLogin()
// //       .then((result) => {
// //         console.log("✅ Google User:", result.user);
        
// //         // Google লগইনের ক্ষেত্রে ডিফল্ট হিসেবে স্টুডেন্ট রোল দিচ্ছি
// //         localStorage.setItem(`role_${result.user.email}`, "student");
        
// //         setSuccess("🎉 Google Registration Successful!");

// //         setTimeout(() => {
// //           navigate("/dashboard"); 
// //         }, 1200);
// //       })
// //       .catch((error) => {
// //         console.error(error.message);
// //         setAuthError("Google sign-in failed!");
// //       });
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
// //       <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
// //         <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
// //           Create Account
// //         </h1>
// //         <p className="text-center text-gray-500 mb-6">
// //           Register as Student or Tutor
// //         </p>

// //         {success && (
// //           <p className="text-green-600 text-center mb-4 font-semibold">
// //             {success}
// //           </p>
// //         )}

// //         {authError && (
// //           <p className="text-red-500 text-center mb-4 text-sm">
// //             {authError}
// //           </p>
// //         )}

// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //           <input
// //             type="text"
// //             placeholder="Full Name"
// //             {...register("name", { required: "Name is required" })}
// //             className="w-full px-4 py-3 border rounded-lg"
// //           />
// //           {errors.name && (
// //             <p className="text-red-500 text-sm">{errors.name.message}</p>
// //           )}

// //           <input
// //             type="email"
// //             placeholder="Email Address"
// //             {...register("email", {
// //               required: "Email is required",
// //               pattern: {
// //                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// //                 message: "Enter a valid email address",
// //               },
// //             })}
// //             className="w-full px-4 py-3 border rounded-lg"
// //           />
// //           {errors.email && (
// //             <p className="text-red-500 text-sm">{errors.email.message}</p>
// //           )}

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             {...register("password", {
// //               required: "Password is required",
// //               pattern: {
// //                 value:
// //                   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
// //                 message:
// //                   "8+ chars, uppercase, lowercase, number & special char required",
// //               },
// //             })}
// //             className="w-full px-4 py-3 border rounded-lg"
// //           />
// //           {errors.password && (
// //             <p className="text-red-500 text-sm">
// //               {errors.password.message}
// //             </p>
// //           )}

// //           <input
// //             type="tel"
// //             placeholder="Phone Number"
// //             {...register("phone", { required: "Phone number is required" })}
// //             className="w-full px-4 py-3 border rounded-lg"
// //           />
// //           {errors.phone && (
// //             <p className="text-red-500 text-sm">{errors.phone.message}</p>
// //           )}

// //           <select
// //             {...register("role", { required: "Role is required" })}
// //             className="w-full px-4 py-3 border rounded-lg"
// //           >
// //             <option value="">Select Role</option>
// //             <option value="student">Student</option>
// //             <option value="tutor">Tutor</option>
// //           </select>
// //           {errors.role && (
// //             <p className="text-red-500 text-sm">{errors.role.message}</p>
// //           )}

// //           <button
// //             type="submit"
// //             className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg"
// //           >
// //             Register
// //           </button>
// //         </form>

// //         <button
// //           onClick={handleGoogleRegister}
// //           className="w-full mt-4 py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
// //         >
// //           <img
// //             src="https://www.svgrepo.com/show/475656/google-color.svg"
// //             alt="google"
// //             className="w-5"
// //           />
// //           Continue with Google
// //         </button>

// //         <p className="text-center mt-6 text-gray-600">
// //           Already have an account?{" "}
// //           <Link
// //             to="/login"
// //             className="text-green-600 font-semibold hover:underline"
// //           >
// //             Login
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { Link, useNavigate } from "react-router-dom";
// // import useAuth from "../../Hooks/useAuth";

// // const backendUrl = "http://localhost:5000"; // backend URL

// // const Register = () => {
// //   const { registerUser, googleLogin } = useAuth();
// //   const navigate = useNavigate();
// //   const [success, setSuccess] = useState("");
// //   const [authError, setAuthError] = useState("");

// //   const { register, handleSubmit, reset, formState: { errors } } = useForm();

// //   // ===== Email Registration =====
// //   const onSubmit = (data) => {
// //     setAuthError("");
// //     setSuccess("");

// //     registerUser(data.email, data.password)
// //       .then((result) => {
// //         const saveUser = {
// //           name: data.name,
// //           email: data.email,
// //           phone: data.phone,
// //           role: data.role,
// //         };

// //         // Save user to MongoDB
// //         fetch(`${backendUrl}/users`, {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(saveUser),
// //         })
// //           .then(res => res.json())
// //           .then(() => {
// //             setSuccess("🎉 Registration Successful!");
// //             reset();
// //             setTimeout(() => navigate("/login"), 1200);
// //           })
// //           .catch(err => console.error("MongoDB Error:", err));
// //       })
// //       .catch((err) => setAuthError(err.message));
// //   };

// //   // ===== Google Registration =====
// //   const handleGoogleRegister = () => {
// //     setAuthError("");
// //     setSuccess("");

// //     googleLogin()
// //       .then((result) => {
// //         const saveUser = {
// //           name: result.user.displayName,
// //           email: result.user.email,
// //           role: "student",
// //         };

// //         fetch(`${backendUrl}/users`, {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(saveUser),
// //         })
// //           .then(res => res.json())
// //           .then(() => {
// //             setSuccess("🎉 Google Registration Successful!");
// //             setTimeout(() => navigate("/dashboard"), 1200);
// //           })
// //           .catch(err => console.error("MongoDB Error:", err));
// //       })
// //       .catch(() => setAuthError("Google sign-in failed!"));
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
// //       <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
// //         <h1 className="text-4xl font-bold text-center mb-4">Create Account</h1>

// //         {success && <p className="text-green-600 text-center">{success}</p>}
// //         {authError && <p className="text-red-500 text-center">{authError}</p>}

// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
// //           <input placeholder="Full Name" {...register("name", { required: true })} className="w-full p-3 border rounded" />
// //           <input placeholder="Email" type="email" {...register("email", { required: true })} className="w-full p-3 border rounded" />
// //           <input placeholder="Password" type="password" {...register("password", { required: true })} className="w-full p-3 border rounded" />
// //           <input placeholder="Phone" {...register("phone", { required: true })} className="w-full p-3 border rounded" />
// //           <select {...register("role", { required: true })} className="w-full p-3 border rounded">
// //             <option value="">Select Role</option>
// //             <option value="student">Student</option>
// //             <option value="tutor">Tutor</option>
// //           </select>
// //           <button className="w-full bg-green-500 text-white py-3 rounded">Register</button>
// //         </form>

// //         <button onClick={handleGoogleRegister} className="w-full mt-4 border py-3 rounded">Continue with Google</button>

// //         <p className="text-center mt-4">
// //           Already have an account? <Link to="/login" className="text-green-600 font-bold">Login</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { Link, useNavigate } from "react-router-dom";
// // import useAuth from "../../Hooks/useAuth";

// // const backendUrl = "http://localhost:5000";

// // const Register = () => {
// //   const { registerUser, googleLogin } = useAuth();
// //   const navigate = useNavigate();
// //   const [success, setSuccess] = useState("");
// //   const [authError, setAuthError] = useState("");

// //   const { register, handleSubmit, reset } = useForm();

// //   const onSubmit = (data) => {
// //     setAuthError("");
// //     setSuccess("");

// //     registerUser(data.email, data.password)
// //       .then(() => {
// //         const saveUser = {
// //           name: data.name,
// //           email: data.email,
// //           phone: data.phone,
// //           role: data.role,
// //         };

// //         fetch(`${backendUrl}/users`, {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(saveUser),
// //         })
// //           .then(res => res.json())
// //           .then(() => {
// //             setSuccess("🎉 Registration Successful!");
// //             reset();
// //             setTimeout(() => navigate("/login"), 1200);
// //           })
// //           .catch(err => console.error("MongoDB Error:", err));
// //       })
// //       .catch(err => setAuthError(err.message));
// //   };

// //   const handleGoogleRegister = () => {
// //     setAuthError("");
// //     setSuccess("");

// //     googleLogin()
// //       .then((result) => {
// //         const saveUser = {
// //           name: result.user.displayName,
// //           email: result.user.email,
// //           role: "student",
// //         };

// //         fetch(`${backendUrl}/users`, {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(saveUser),
// //         })
// //           .then(res => res.json())
// //           .then(() => {
// //             setSuccess("🎉 Google Registration Successful!");
// //             setTimeout(() => navigate("/dashboard"), 1200);
// //           })
// //           .catch(err => console.error("MongoDB Error:", err));
// //       })
// //       .catch(() => setAuthError("Google sign-in failed!"));
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
// //       <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
// //         <h1 className="text-4xl font-bold text-center mb-4">Create Account</h1>

// //         {success && <p className="text-green-600 text-center">{success}</p>}
// //         {authError && <p className="text-red-500 text-center">{authError}</p>}

// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
// //           <input placeholder="Full Name" {...register("name", { required: true })} className="w-full p-3 border rounded" />
// //           <input placeholder="Email" type="email" {...register("email", { required: true })} className="w-full p-3 border rounded" />
// //           <input placeholder="Password" type="password" {...register("password", { required: true })} className="w-full p-3 border rounded" />
// //           <input placeholder="Phone" {...register("phone", { required: true })} className="w-full p-3 border rounded" />
// //           <select {...register("role", { required: true })} className="w-full p-3 border rounded">
// //             <option value="">Select Role</option>
// //             <option value="student">Student</option>
// //             <option value="tutor">Tutor</option>
// //           </select>
// //           <button className="w-full bg-green-500 text-white py-3 rounded">Register</button>
// //         </form>

// //         <button onClick={handleGoogleRegister} className="w-full mt-4 border py-3 rounded">Continue with Google</button>

// //         <p className="text-center mt-4">
// //           Already have an account? <Link to="/login" className="text-green-600 font-bold">Login</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;



// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

// const backendUrl = "http://localhost:5000";

// const Register = () => {
//   const { registerUser, googleLogin } = useAuth();
//   const navigate = useNavigate();
//   const [success, setSuccess] = useState("");
//   const [authError, setAuthError] = useState("");

//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data) => {
//     setAuthError("");
//     setSuccess("");

//     try {
//       await registerUser(data.email, data.password);

//       const saveUser = {
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         role: data.role,
//       };

//       const res = await fetch(`${backendUrl}/users`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(saveUser),
//       });
//       await res.json();

//       // JWT generate & set token cookie
//       await fetch(`${backendUrl}/jwt`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: data.email }),
//       });

//       setSuccess("🎉 Registration Successful!");
//       reset();
//       setTimeout(() => navigate("/login"), 1200);
//     } catch (err) {
//       console.error(err);
//       setAuthError(err.message || "Registration Failed!");
//     }
//   };

//   const handleGoogleRegister = async () => {
//     setAuthError("");
//     setSuccess("");

//     try {
//       const result = await googleLogin();
//       const saveUser = {
//         name: result.user.displayName,
//         email: result.user.email,
//         role: "student",
//       };

//       await fetch(`${backendUrl}/users`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(saveUser),
//       });

//       // JWT generate & set token cookie
//       await fetch(`${backendUrl}/jwt`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: result.user.email }),
//       });

//       setSuccess("🎉 Google Registration Successful!");
//       setTimeout(() => navigate("/dashboard/student"), 1200);
//     } catch (err) {
//       console.error(err);
//       setAuthError("Google sign-in failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
//         <h1 className="text-4xl font-bold text-center mb-4">Create Account</h1>

//         {success && <p className="text-green-600 text-center">{success}</p>}
//         {authError && <p className="text-red-500 text-center">{authError}</p>}

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
//           <input placeholder="Full Name" {...register("name", { required: true })} className="w-full p-3 border rounded" />
//           <input placeholder="Email" type="email" {...register("email", { required: true })} className="w-full p-3 border rounded" />
//           <input placeholder="Password" type="password" {...register("password", { required: true })} className="w-full p-3 border rounded" />
//           <input placeholder="Phone" {...register("phone", { required: true })} className="w-full p-3 border rounded" />
//           <select {...register("role", { required: true })} className="w-full p-3 border rounded">
//             <option value="">Select Role</option>
//             <option value="student">Student</option>
//             <option value="tutor">Tutor</option>
//           </select>
//           <button className="w-full bg-green-500 text-white py-3 rounded">Register</button>
//         </form>

//         <button onClick={handleGoogleRegister} className="w-full mt-4 border py-3 rounded">Continue with Google</button>

//         <p className="text-center mt-4">
//           Already have an account? <Link to="/login" className="text-green-600 font-bold">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const backendUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const { registerUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [authError, setAuthError] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setAuthError("");
    setSuccess("");

    try {
      await registerUser(data.email, data.password);

      const saveUser = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
      };

      const res = await fetch(`${backendUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      });
      await res.json();

      // 🔥 JWT generate & set token cookie
      await fetch(`${backendUrl}/jwt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ REQUIRED
        body: JSON.stringify({ email: data.email }),
      });

      setSuccess("🎉 Registration Successful!");
      reset();
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      console.error(err);
      setAuthError(err.message || "Registration Failed!");
    }
  };

  const handleGoogleRegister = async () => {
    setAuthError("");
    setSuccess("");

    try {
      const result = await googleLogin();

      const saveUser = {
        name: result.user.displayName,
        email: result.user.email,
        role: "student",
      };

      await fetch(`${backendUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      });

      // 🔥 JWT generate & set token cookie
      await fetch(`${backendUrl}/jwt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ REQUIRED
        body: JSON.stringify({ email: result.user.email }),
      });

      setSuccess("🎉 Google Registration Successful!");
      setTimeout(() => navigate("/dashboard/student"), 1200);
    } catch (err) {
      console.error(err);
      setAuthError("Google sign-in failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-4">Create Account</h1>

        {success && <p className="text-green-600 text-center">{success}</p>}
        {authError && <p className="text-red-500 text-center">{authError}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <input
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="w-full p-3 border rounded"
          />
          <input
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
            className="w-full p-3 border rounded"
          />
          <input
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
            className="w-full p-3 border rounded"
          />
          <input
            placeholder="Phone"
            {...register("phone", { required: true })}
            className="w-full p-3 border rounded"
          />
          <select
            {...register("role", { required: true })}
            className="w-full p-3 border rounded"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>

          <button className="w-full bg-green-500 text-white py-3 rounded">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleRegister}
          className="w-full mt-4 border py-3 rounded"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
