import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const backendUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ===== EMAIL + PASSWORD LOGIN =====
  const onSubmit = async (data) => {
    setAuthError("");
    setSuccess("");

    try {
      // 🔐 Firebase login
      await loginUser(data.email, data.password);

      // 🔥 Create JWT (cookie)
      await fetch(`${backendUrl}/jwt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ MUST
        body: JSON.stringify({ email: data.email }),
      });

      // 🔥 Get REAL role from DB (fresh)
      const roleRes = await fetch(
        `${backendUrl}/users/role/${data.email}`,
        {
          credentials: "include", // ✅ MUST
        }
      );

      const roleData = await roleRes.json();
      const role = roleData.role;

      // ✅ overwrite role every login
      localStorage.setItem("role", role);

      setSuccess("🎉 Login Successful!");
      reset();

      // ✅ ROLE BASED REDIRECT
      if (role === "admin") {
        navigate("/dashboard/admin");
      } else if (role === "tutor") {
        navigate("/dashboard/tutor");
      } else {
        navigate("/dashboard/student");
      }
    } catch (err) {
      setAuthError("Invalid email or password!");
    }
  };

  // ===== GOOGLE LOGIN =====
  const handleGoogleLogin = async () => {
    setAuthError("");
    setSuccess("");

    try {
      const result = await googleLogin();
      const email = result.user.email;

      // 🔥 Create JWT
      await fetch(`${backendUrl}/jwt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ MUST
        body: JSON.stringify({ email }),
      });

      // 🔥 Get fresh role
      const roleRes = await fetch(
        `${backendUrl}/users/role/${email}`,
        {
          credentials: "include",
        }
      );

      const roleData = await roleRes.json();
      const role = roleData.role;

      localStorage.setItem("role", role);
      setSuccess("🎉 Login Successful!");

      if (role === "admin") {
        navigate("/dashboard/admin");
      } else if (role === "tutor") {
        navigate("/dashboard/tutor");
      } else {
        navigate("/dashboard/student");
      }
    } catch {
      setAuthError("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          Welcome Back
        </h1>

        {success && (
          <p className="text-green-600 text-center mb-4 font-semibold">
            {success}
          </p>
        )}
        {authError && (
          <p className="text-red-500 text-center mb-4 text-sm font-medium">
            {authError}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full px-4 py-3 border rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg">
            Login
          </button>
        </form>

        <div className="divider my-6">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 border rounded-lg flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5"
            alt="Google"
          />
          Continue with Google
        </button>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-600 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
