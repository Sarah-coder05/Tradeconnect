import React from "react";
import { Link } from "react-router-dom";
import logo from './Asset/Group 749.png';
import image from "./Asset/image1.png"; 

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg">
      {/* Left Side with Background Image */}
      <div className="w-1/2 relative animate-fadeIn">
        <img
          src={image}
          alt="Background"
          className="fixed inset-0 h-full w-1/2 border rounded-50% bg-red-100 object-cover"
        />
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 flex ml-10 flex-col animate-slideIn">
        <img src={logo} alt="Logo" className="mb-4 absolute top-0 w-20 animate-pulse" />

        <form className="shadow ml-10 p-5 w-3/5 mx-5">
          <h1 className="text-3xl text-center mt-20 mx-10 animate-fadeIn">
            Forgot Password?
          </h1>
          <p className="text-gray-700 text-center font-semibold animate-fadeIn">
            Not to worry, we will send you reset instructions.
          </p>
          <p className="text-gray-700 text-center animate-fadeIn">
            Enter your registered Email Address to receive reset instructions.
          </p>
          <div className="relative animate-fadeIn">
            <label className="block text-black pb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-full p-2 border mb-4 border-red-800 opacity-60 bg-transparent rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-800 text-white rounded mt-4 hover:scale-105 transform transition-all"
          >
            <Link to="/Email-sent" className="text-red-200">
              Send recovery instructions
            </Link>
          </button>

          <p className="text-center text-gray-600 mt-4">
            Go back to{" "}
            <Link to="/" className="text-red-500">
              Log in Page
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
