import React from 'react';
import { Link } from 'react-router-dom';
import image from './Asset/image.png';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row justify-center items-center  min-h-screen lg:gap-0 w-full gap-9 bg-gray-100">
      {/* Left Side with Image */}
      <div className="w-full lg:w-1/3 lg:h-screen flex flex-grow flex-col items-center justify-center">
        <img
          src={image}
          alt="Logo"
          className="h-48 w-full lg:h-full lg:w-full lg:rounded-none bg-red-100 lg:bg-red-100 object-cover"
        />
      </div>

      {/* Right Side with Sign-Up Form */}
      <div className="w-full lg:w-2/3 p-10 flex justify-center">
        <form className="space-y-4 w-full lg:w-3/5 lg:shadow-lg lg:p-5">
          <h2 className="text-3xl lg:text-4xl font-bold text-start lg:ml-10">Sign Up</h2>
          <p className="text-gray-600 text-lg mb-4 text-start lg:ml-10">Let's get you started</p>
          
          <div>
            <label className="block font-semibold text-start lg:ml-10">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              autoComplete="off"
              className="w-full lg:w-4/5 p-2 border-2 border-red-800 opacity-60 rounded lg:ml-10"
            />
          </div>
          
          <div>
            <label className="block font-semibold text-start lg:ml-10">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              autoComplete="off"
              className="w-full lg:w-4/5 p-2 border-2 border-red-800 opacity-60 rounded lg:ml-10"
            />
          </div>
          
          <div>
            <label className="block font-semibold text-start lg:ml-10">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-full lg:w-4/5 p-2 border-2 border-red-800 opacity-60 rounded lg:ml-10"
            />
          </div>
          
          <button className="w-full lg:w-4/5 bg-red-800 text-white p-2 rounded lg:ml-10">
            <Link to="/Create-password">Next</Link>
          </button>
          
          <div className="text-center lg:text-start lg:ml-10 mt-4">
            <p>
              Already have an account? <Link to="/" className="text-red-500">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
