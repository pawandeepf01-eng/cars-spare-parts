import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", data, {
        withCredentials: true,
      });

      setMessage(res.data.message);

      const role = res.data.role;
      const token = res.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      navigate("/");
      reset();
    } catch (err) {
      console.log(err.message);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[80%] mx-auto flex">
        {/* LEFT SIDE - BRAND (hidden on mobile) */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-black to-gray-800 text-white items-center justify-center p-10 rounded-3xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-wide">Dhiman Motor</h1>

            <p className="mt-4 text-gray-300 text-lg">
              Premium Auto Parts Store
            </p>

            <p className="mt-2 text-gray-400 text-sm">
              Quality • Trust • Performance
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - LOGIN */}
        <div className="w-full md:w-1/2 flex items-center  px-4">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8">
            <div className="text-center mb-6">
              {" "}
              <h1 className="text-3xl font-bold text-black">Login</h1>{" "}
              <p className="text-yellow-600 mt-2">
                {" "}
                Enter your Email and Password to continue to your account
              </p>{" "}
            </div>
            {/* your existing login form stays SAME here */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />

                {errors.Email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("Password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                {errors.Password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Password.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-gray-400 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Google */}
            <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition">
              <FcGoogle size={24} />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* Sign In */}
            <p className="text-center text-gray-500 text-sm mt-6">
              Don't have an account?{" "}
              <Link
                to="/signin"
                className="text-gray-700 font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
