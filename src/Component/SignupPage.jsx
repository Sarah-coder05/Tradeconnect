import React from 'react';
import { Link } from 'react-router-dom';
import image from './Asset/image.png';

function SignUp() {
  return (
    <div className="flex  justify-center gap-10 items-center min-h-screen w-full">
      {/* Left Side with Image */}
      <div className="w-1/3  relative">
        <img src={image} alt="Logo" className="fixed inset-0 h-full w-1/3 border rounded-50% bg-red-100 object-cover" />
      </div>

      {/* Right Side with Sign-Up Form */}
        <div className=" w-2/3  items-center mx-10 items-center justify-center">
          <h2 className="text-start ml-10 bl-10 text-4xl font-bold">Sign Up</h2>
          <p className='ml-10 bl-10 mb-6 mt-3 text-gray-600 text-lg'>Let's get you started</p>
          <form className='spaace-y-4 w-full'>
          <div>
            <label className="block black ml-10 font-semibold">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              autoComplete="off"
              className="w-3/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>
          <div>
            <label className="block black ml-10 font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              autoComplete="off"
              className="w-3/5 p-2 ml-10 mb-4 border-2 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>
          <div>
            <label className="block ml-10 black font-semibold">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-3/5 p-2 ml-10 border-2 mb-4 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>
            <button className="w-3/5 ml-10 bg-red-800 text-white mx-auto p-2 rounded">
              <Link to="/Create-password">Next</Link>
            </button>
          </form>
          <div className="mt-4 ml-10 pl-10">
            <p>Already have an account? <Link to="/" className="text-red-500">Log In</Link></p>
          </div>
        </div>
    </div>
  );
}

export default SignUp;
