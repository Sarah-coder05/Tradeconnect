import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from './Asset/image.png';

function CreatePassword() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex justify-center gap-10 items-center min-h-screen w-full">
      {/* Left Side with Image */}
      <div className="w-1/3 relative">
        <img src={image} alt="Logo" className="fixed inset-0 h-full w-1/3 border rounded-50% bg-red-100 object-cover" />
      </div>

      {/* Right Side with Form */}
      <div className="w-2/3 items-center mx-10 justify-center">
        <h2 className="text-start ml-10 text-4xl font-semibold">Create a Password</h2>
        <p className="ml-10 text-start mb-6 mt-3 text-gray-600 text-lg">Must be at least 8 characters</p>
        <form className="space-y-4 w-full">
          <div>
            <label className="block text-black ml-10 font-semibold">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              className="w-3/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>
          <div>
            <label className="block text-black ml-10 font-semibold">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              autoComplete="off"
              className="w-3/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-60 rounded"
            />
          </div>
          <label className="block ml-10 mb-4">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to the terms and conditions
          </label>
          <p className="mb-4 ml-10">
            Already have an account? <Link to="/" className="text-red-500">Log In</Link>
          </p>
          <div className="w-3/5 ml-10 bg-red-800 text-red-200 text-lg p-2 rounded">
            <button type="submit" className="w-full"><Link to="/" className="text-red-500">Sign Up</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
