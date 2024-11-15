import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/business-info');
  };

  return (
    <div style={{ backgroundColor: '', minHeight: '100vh' }} className="p-8">
      <h1 className="text-2xl font-semibold">Edit Profile</h1>
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="First Name" className="w-full p-2 border" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" className="w-full p-2 border" />
          </div>
          <div>
            <label>Business or Service</label>
            <input type="text" placeholder="Business or Service" className="w-full p-2 border" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" placeholder="Address" className="w-full p-2 border" />
          </div>
          <div className="">
            <label>Pricing</label>
            <input type="text" placeholder="Pricing" className="w-full p-2 border" />
          </div>
        </div>
        <button
          type="button"
          onClick={handleContinue}
          className="absolute bottom-0 bg-red-600 text-white py-2 px-4"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
