// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

// const Login = () => {
//   const { loginUser, googleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [success, setSuccess] = useState("");
//   const [authError, setAuthError] = useState("");

//   const { register, handleSubmit, reset, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     setAuthError("");
//     setSuccess("");

//     loginUser(data.email, data.password)
//       .then(() => {
//         setSuccess("🎉 Login Successful!");
//         reset();
//         setTimeout(() => navigate("/dashboard"), 1000);
//       })
//       .catch(() => {
//         setAuthError("Invalid email or password!");
//       });
//   };

//   // 🔥 Google login
//   const handleGoogleLogin = () => {
//     googleLogin()
//       .then(() => navigate("/dashboard"))
//       .catch(() => setAuthError("Google login failed"));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
//       <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
//         <h1 className="text-4xl font-extrabold text-center mb-6">Welcome Back</h1>

//         {success && <p className="text-green-600 text-center">{success}</p>}
//         {authError && <p className="text-red-500 text-center">{authError}</p>}

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             {...register("email", { required: true })}
//             className="w-full px-4 py-3 border rounded-lg"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             {...register("password", { required: true })}
//             className="w-full px-4 py-3 border rounded-lg"
//           />

//           <button className="w-full py-3 bg-purple-500 text-white rounded-lg">
//             Login
//           </button>
//         </form>

//         {/* 🔥 Google Button */}
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full mt-4 py-3 border rounded-lg flex items-center justify-center gap-2"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             className="w-5"
//           />
//           Continue with Google
//         </button>

//         <p className="text-center mt-6">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-purple-600 font-semibold">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

// const Login = () => {
//   const { loginUser, googleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [success, setSuccess] = useState("");
//   const [authError, setAuthError] = useState("");

//   const { register, handleSubmit, reset, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     setAuthError("");
//     setSuccess("");

//     loginUser(data.email, data.password)
//       .then((result) => {
//         // 🔥 ব্রাউজার থেকে ওই ইমেইলের এগেইন্সটে সেভ করা রোলটি খুঁজে বের করছি
//         const savedRole = localStorage.getItem(`role_${data.email}`) || "student";
        
//         setSuccess("🎉 Login Successful!");
//         reset();

//         // ✅ এখন ইউজার সরাসরি তার নির্দিষ্ট রোলের ড্যাশবোর্ডে চলে যাবে
//         setTimeout(() => navigate(`/dashboard/${savedRole}`), 1000);
//       })
//       .catch(() => {
//         setAuthError("Invalid email or password!");
//       });
//   };

//   // 🔥 Google login
//   const handleGoogleLogin = () => {
//     setAuthError("");
//     googleLogin()
//       .then((result) => {
//         const email = result.user.email;
//         const savedRole = localStorage.getItem(`role_${email}`) || "student";
        
//         setSuccess("🎉 Login Successful!");
//         navigate(`/dashboard/${savedRole}`);
//       })
//       .catch(() => setAuthError("Google login failed"));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
//       <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
//         <h1 className="text-4xl font-extrabold text-center mb-6">Welcome Back</h1>

//         {success && <p className="text-green-600 text-center mb-4 font-semibold">{success}</p>}
//         {authError && <p className="text-red-500 text-center mb-4 text-sm font-medium">{authError}</p>}

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               {...register("email", { required: "Email is required" })}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               {...register("password", { required: "Password is required" })}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//             {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//           </div>

//           <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition-colors">
//             Login
//           </button>
//         </form>

//         <div className="divider my-6 text-gray-400">OR</div>

//         {/* 🔥 Google Button */}
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all font-semibold"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             className="w-5"
//             alt="Google icon"
//           />
//           Continue with Google
//         </button>

//         <p className="text-center mt-6 text-gray-600">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-purple-600 font-bold hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const backendUrl = "http://localhost:5000";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [authError, setAuthError] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setAuthError("");
    setSuccess("");

    try {
      await loginUser(data.email, data.password);

      // fetch JWT + role from backend
      const res = await fetch(`${backendUrl}/jwt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      const { role } = await res.json();
      localStorage.setItem("role", role);

      setSuccess("🎉 Login Successful!");
      reset();
      setTimeout(() => navigate(`/dashboard/${role}`), 1000);
    } catch {
      setAuthError("Invalid email or password!");
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    try {
      const result = await googleLogin();
      const email = result.user.email;

      const res = await fetch(`${backendUrl}/jwt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const { role } = await res.json();
      localStorage.setItem("role", role);

      setSuccess("🎉 Login Successful!");
      navigate(`/dashboard/${role}`);
    } catch {
      setAuthError("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center mb-6">Welcome Back</h1>

        {success && <p className="text-green-600 text-center mb-4 font-semibold">{success}</p>}
        {authError && <p className="text-red-500 text-center mb-4 text-sm font-medium">{authError}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition-colors">
            Login
          </button>
        </form>

        <div className="divider my-6 text-gray-400">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all font-semibold"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
            alt="Google icon"
          />
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-600 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
