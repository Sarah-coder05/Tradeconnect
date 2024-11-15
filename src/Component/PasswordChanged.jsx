import React from "react";
import { Link } from "react-router-dom";
import logo from './Asset/Group 749.png';
// import email from './Asset/email.png'
import image from "./Asset/image1.png"; 

const LoginMain = () => {
  return (
    <div className="flex min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg">
      {/* Left Side with Background Image */}
      <div className="w-1/2 relative">
        <img src={image} alt="Background" className="fixed inset-0 h-full w-1/2 border rounded-50% bg-red-100 object-cover" />
      </div>
      
      {/* Right Side with Form */}
      <div className="w-1/2 ">
        <img src={logo} alt="Logo" className="mb-4 absolute top-0 h-fit w-20" />
        <div className=" w-3/5 shadow p-10 ml-10">
          <h1 className="text-3xl text-center mt-20 mx-10">Password Changed</h1>
          <p className="text-gray-700 text-center my-5 mx-10">Your password has been Successfully changed</p>
          <button
            type="submit"
            className="w-full py-3 bg-red-800 text-white rounded mt-4"
          >
            <Link to="/" className="text-red-200">
             Sign in to Account
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
