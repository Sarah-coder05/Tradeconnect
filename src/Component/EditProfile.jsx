import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/business-info');
  };

  return (
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-semibold">Edit Profile</h1>
      <form className="space-y-4">
        <input type="text" placeholder="First Name" className="w-full p-2 border" />
        <input type="text" placeholder="Last Name" className="w-full p-2 border" />
        <input type="text" placeholder="Business or Service" className="w-full p-2 border" />
        <input type="text" placeholder="Address" className="w-full p-2 border" />
        <input type="text" placeholder="Pricing" className="w-full p-2 border" />
        <button type="button" onClick={handleContinue} className="mt-4 bg-red-600 text-white py-2 px-4">
          Continue
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
