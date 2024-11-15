import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const AuthVerification = () => (
  <AuthLayout title="Verification Link Sent">
    <p className="text-center text-gray-700">
      A verification link has been sent to your email. Please check your inbox and click on the link to verify your account.
    </p>
    <button className="btn-primary w-full mt-4"><Link to="/" className="text-red-500">Return to Login</Link></button>
  </AuthLayout>
);

export default AuthVerification;
