// import React from 'react'

// const Register = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default Register



import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    // Add Firebase or API registration here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Create Account</h1>
        <p className="text-center text-gray-500 mb-6">Register as Student or Tutor</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required", minLength: 6 })}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", { required: "Phone is required" })}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}

          <select
            {...register("role", { required: "Role is required" })}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-blue-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
