import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from './Asset/Group 749.png';
import backgroundImage from "./Asset/Pattern.png"; // Replace with your background image path

const LoginMain = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg">
      {/* Left Side with Welcome Message */}
      <div
        className="w-1/2 flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-16 text-center bg-red-200 bg-opacity-60 rounded-lg shadow-lg w-3/6 min-h-[300px]">
          <h1 className="text-2xl pb-4 text-red-800 font-bold">Welcome Back to Trade Connect!</h1>
          <p className="text-red-800 text-lg mt-2">
            Log in to your account and continue planning your dream event with ease.
          </p>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 flex flex-col ">
        <img src={logo} alt="Logo" className="mb-4 w-20" />
        <h1 className="text-5xl mt-5 mx-10">Log in</h1>
        <p className="text-gray-700 my-5 mx-10">Sign in to your account on trade connect</p>
        <form className="space-y-4 items-center mx-10 justify-center w-3/4">
          <div>
            <label className="block black font-semibold">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-full p-2 border-2 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>

          <div className="relative">
            <label className="block black font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="off"
              className="w-full p-2 border-2 border-red-800 opacity-60 bg-transparent rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 pt-5 flex items-center text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-red-500">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-800 text-white rounded mt-4"
          >
            Log In
          </button>

          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup-main" className="text-red-500">
              Sign up
            </Link>
          </p>

          <button
            type="button"
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded mt-4"
          >
            <img src="/google-icon.png" alt="Google" className="h-5 mr-2" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;
