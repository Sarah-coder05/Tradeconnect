import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupMain from './Component/SignupMain';
import SignUp from './Component/SignupPage';
import CreatePassword from './Component/CreatePassword';
import AuthVerification from './Component/AuthVerification';
import ForgotPassword from './Component/ForgotPassword';
import ForgotPasswordEmailSent from './Component/ForgotPasswordEmailSent';
import ResetPassword from './Component/ResetPassword';
import PasswordChanged from './Component/PasswordChanged';
import LoginMain from './Component/Login';
import Sidebar from './Component/Sidebar';
import EditProfile from './Component/EditProfile';
import BusinessInfo from './Component/BusinessInfo';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const LayoutWithSidebar = ({ children }) => (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <button onClick={toggleSidebar} className="text-2xl p-4">
          &#9776;
        </button>
        {children}
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginMain />} />
        <Route path="/signup-main" element={<SignupMain />} />
        <Route path="/signup-page" element={<SignUp />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/auth-verification" element={<AuthVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<ForgotPasswordEmailSent />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-changed" element={<PasswordChanged />} />

        {/* Route without /dashboard prefix */}
        <Route path="/edit-profile" element={<LayoutWithSidebar><EditProfile /></LayoutWithSidebar>} />
        <Route path="/business-info" element={<LayoutWithSidebar><BusinessInfo /></LayoutWithSidebar>} />
      </Routes>
    </Router>
  );
}

export default App;
