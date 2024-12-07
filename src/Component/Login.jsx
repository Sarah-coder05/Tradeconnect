import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from './Asset/Group 749.png';
import { Link } from "react-router-dom";
import backgroundImage from "./Asset/Pattern.png";

const LoginMain = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg p-4">
      <div
        className="w-full lg:w-1/2 flex items-center justify-center min-h-[50vh] lg:min-h-screen bg-cover bg-center mb-4 lg:mb-0 animate-fadeIn"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-8 lg:p-16 text-center bg-red-200 bg-opacity-60 rounded-lg shadow-lg w-5/6 lg:w-3/6 min-h-[200px] lg:min-h-[300px]">
          <h1 className="text-xl lg:text-2xl pb-4 text-red-800 font-bold animate-bounce">
            Welcome Back to Trade Connect!
          </h1>
          <p className="text-red-800 text-sm lg:text-lg mt-2">
            Log in to your account and continue planning your dream event with ease.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center relative animate-slideIn">
        <div className="w-full flex justify-center left-0 fixed top-0 animate-pulse">
          <img src={logo} alt="Logo" className="w-16 lg:w-20 mb-4" />
        </div>

        <form
          className="space-y-4 items-center mx-auto w-full lg:w-3/5 p-5 shadow-lg rounded-lg mt-16 lg:mt-0"
          onSubmit={handleLogin}
        >
          <h1 className="text-3xl lg:text-5xl mt-5 animate-fadeIn">Log in</h1>
          <p className="text-gray-700 my-5 text-center lg:text-left animate-fadeIn">
            Sign in to your account on Trade Connect
          </p>

          <div className="w-full px-2 lg:px-0">
            <label className="block text-black font-semibold">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-full p-2 border-2 bg-transparent border-red-800 opacity-60 rounded animate-slideIn"
            />
          </div>

          <div className="relative w-full px-2 lg:px-0">
            <label className="block text-black font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="off"
              className="w-full p-2 border-2 border-red-800 opacity-60 bg-transparent rounded animate-slideIn"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="flex justify-end w-full px-2 lg:px-0">
            <a href="/forgot-password" className="text-sm text-red-500">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full lg:w-4/5 mx-auto py-2 hover:bg-red-700 bg-red-800 px-7 grid justify-items-center text-white rounded mt-4 animate-scaleUp"
          >
            Log In
          </button>

          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup-main" className="text-red-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;
