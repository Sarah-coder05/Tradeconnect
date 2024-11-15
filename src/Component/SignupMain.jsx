import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./Asset/Pattern.png";
import logo from "./Asset/Group 749.png";

const SignupMain = () => (
  <div className="bg-orange-300 bg-opacity-30 min-h-screen flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative p-4 flex-grow">
      <div className="w-full flex justify-center fixed top-0">
        <img src={logo} alt="Logo" className="w-16 lg:w-20 mb-4" />
      </div>

      <h1 className="text-center lg:text-left text-2xl font-semibold mb-5 lg:mb-10">
        Welcome to Trade Connect
      </h1>

      <p className="text-center lg:text-left text-lg font-semibold pb-5 lg:pb-10">
        Sign up as:
      </p>

      <div className="flex flex-row lg:flex-row gap-4 lg:gap-10 justify-center items-center">
        <button className="btn-primary">
          <Link
            to="/Signup-page"
            className="text-white bg-red-800 px-3 py-2 rounded-xl text-xl"
          >
            Vendor
          </Link>
        </button>
        <button className="btn-primary">
          <Link
            to="/Signup-page"
            className="text-white bg-red-800 px-4 py-2 rounded-xl text-xl"
          >
            Client
          </Link>
        </button>
      </div>
    </div>

    <div
      className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center p-4 flex-grow"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-8 lg:p-16 text-center bg-orange-300 bg-opacity-50 rounded-lg shadow-lg w-5/6 lg:w-3/6 min-h-[200px] lg:min-h-[300px]">
        <h1 className="text-xl lg:text-2xl pb-4 text-red-800 font-bold">
          Join Trade Connect and Make Your Event a Reality!
        </h1>
        <p className="text-red-800 text-sm lg:text-lg mt-2">
          Create your account to start planning, organizing, and connecting with
          top vendors in the industry to make your event a huge success.
        </p>
      </div>
    </div>
  </div>
);

export default SignupMain;
