import React from 'react';

const BusinessInfo = () => {
  return (
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-semibold">Business Information</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Business Name" className="w-full p-2 border" />
        <input type="text" placeholder="Address" className="w-full p-2 border" />
        <input type="text" placeholder="Phone Number" className="w-full p-2 border" />
        <input type="text" placeholder="City" className="w-full p-2 border" />
        <input type="text" placeholder="State" className="w-full p-2 border" />
        <input type="text" placeholder="Zip" className="w-full p-2 border" />
        <button type="submit" className="mt-4 bg-red-600 text-white py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
};

export default BusinessInfo;
