import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Component/Login';
import SignupMain from './Component/SignupMain';
import SignUp from './Component/SignupPage';
import CreatePassword from './Component/CreatePassword';
import AuthVerification from './Component/AuthVerification';
import ForgotPassword from './Component/ForgotPassword';
import ForgotPasswordEmailSent from './Component/ForgotPasswordEmailSent';
import ResetPassword from './Component/ResetPassword';
import PasswordChanged from './Component/PasswordChanged';
import LoginMain from './Component/Login';


function App () {
  return (
    <Router>
      <Routes>
        
      <Route path="/" element={<LoginMain/>} />
      <Route path="/signup-main" element={<SignupMain/>} />
      <Route path="/Signup-page" element={<SignUp/>} />
      <Route path="/Create-password" element={<CreatePassword/>} />
      <Route path="/Auth-Verification" element={<AuthVerification/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/Email-sent" element={<ForgotPasswordEmailSent/>} />
      <Route path="/Reset-password" element={<ResetPassword/>} />
      <Route path="/Password-changed" element={<PasswordChanged/>} />
      </Routes>
    </Router>
  )
}

export default App;