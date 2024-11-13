// src/components/AuthLayout.tsx
import React from 'react';

const AuthLayout = ({ children, title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div className="w-full bg-orang-100 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      {children}
    </div>
  </div>
);

export default AuthLayout;
