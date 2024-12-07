import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication cookie or token
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Navigate to the home page
    navigate("/home");
  };

  return (
    <button onClick={handleLogout} style={{ width: "100%", padding: "8px" }}>
      Logout
    </button>
  );
}
