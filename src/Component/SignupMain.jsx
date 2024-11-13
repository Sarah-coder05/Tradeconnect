// src/components/SignupMain.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './Asset/Pattern.png'
import logo from './Asset/Group 749.png'

const SignupMain = () => (
    <div className='bg-orange-300 bg-opacity-30'>
    <div className="flex min-h-screen  gap-6 justify-center items-center mx-auto  rounded-lg">
    <div className='w-1/2 flex  flex-col'>
    <img src={logo} alt="Logo" className="mb-4 absolute top-0 p-10 w-30 " />
    <h1 className='text-center text-2xl font-semibold mb-10'>Welcome to Trade connect</h1>
    <p className='text-center text-lg font-semibold pb-10 mb-5'>Sign up as:</p>
    <div className='flex justify-center gap-10'>
        <button className="btn-primary "><Link to="/Signup-page" className="text-white bg-red-800 px-3 mr-5 py-2 rounded-xl text-xl mt-4">Vendor</Link></button>
        <button className="btn-primary"><Link to="/Signup-page" className="text-white bg-red-800 px-4 ml-5 py-2 rounded-xl text-xl mt-4 ">Client</Link></button>
    </div>
    </div>
    <div
        className="w-1/2 flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-16 text-center bg-orange-300 bg-opacity-50 rounded-lg shadow-lg w-3/6 min-h-[300px]">
          <h1 className="text-2xl pb-4 text-red-800 font-bold">Join Trade Connect and Make Your Event a Reality!</h1>
          <p className="text-red-800 text-lg mt-2">
          Create your account to start planning, organizing, and connecting with top vendors in the industry to make your event a huge success.
          </p>
        </div>
      </div>
  </div>
  </div>
);

export default SignupMain;
