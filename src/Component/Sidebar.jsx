import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import logo from "./Asset/Group 749.png";
import { GrMoney } from "react-icons/gr";
import {
  
  FiHome,
  FiUser,
  FiMessageCircle,
  FiSearch,
  FiBell,
  FiSettings,
} from "react-icons/fi"; // Sample icons

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState("/dashboard"); // Track active tab

  // Function to handle active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-white h-screen p-0 flex flex-col shadow mr-5 transition-all duration-300`}
    >
      <div className="mb-8 items-center pl-20">
        <img src={logo} alt="logo" />
      </div>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/dashboard"
          className={`flex items-center text-red-800 p-2 rounded-md ${
            activeTab === "/dashboard" ? "bg-red-700 text-white" : "hover:bg-red-100"
          }`}
          onClick={() => handleTabClick("/dashboard")}
        >
          <FiHome className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Dashboard</span>}
        </Link>
        <Link
          to="/manage-orders"
          className={`flex items-center text-red-800 p-2 rounded-md ${
            activeTab === "/manage-orders" ? "bg-red-700 text-white" : "hover:bg-red-100"
          }`}
          onClick={() => handleTabClick("/manage-orders")}
        >
          <FiUser className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Manage Orders</span>}
        </Link>
        <Link
          to="/messages"
          className={`flex items-center text-red-800 p-2 rounded-md ${
            activeTab === "/messages" ? "bg-red-700 text-white" : "hover:bg-red-100"
          }`}
          onClick={() => handleTabClick("/messages")}
        >
          <FiMessageCircle className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Messages</span>}
        </Link>
        <Link
          to="/subscriptions"
          className={`flex items-center text-red-800 p-2 rounded-md ${
            activeTab === "/subscriptions" ? "bg-red-700 text-white" : "hover:bg-red-100"
          }`}
          onClick={() => handleTabClick("/subscriptions")}
        >
          <FiSearch className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Subscriptions</span>}
        </Link>
        <Link
          to="/transactions"
          className={`flex items-center text-red-800 p-2 rounded-md ${
            activeTab === "/transactions" ? "bg-red-700 text-white" : "hover:bg-red-100"
          }`}
          onClick={() => handleTabClick("/transactions")}
        >
          <GrMoney className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Transactions</span>}
        </Link>
        <Link
          to="/notifications"
          className={`flex items-center text-red-800 p-2 rounded-md ${
            activeTab === "/notifications" ? "bg-red-700 text-white" : "hover:bg-red-100"
          }`}
          onClick={() => handleTabClick("/notifications")}
        >
          <FiBell className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Notifications</span>}
        </Link>
      </nav>
      <div className="flex items-center text-red-800 mt-4 p-2">
        <div className="flex items-center">
          {isOpen && (
            <div className="flex flex-col absolute bottom-0 pb-10 gap-1 text-sm">
              <Link
                to="/settings"
                className={`flex items-center text-red-800 p-2 rounded-md mt-auto ${
                  activeTab === "/settings" ? "bg-red-700" : "hover:bg-red-700"
                }`}
                onClick={() => handleTabClick("/settings")}
              >
                <FiSettings className="mr-2 text-2xl" />
                {isOpen && <span className="text-lg">Settings</span>}
              </Link>
              <div className="flex gap-2">
                <CgProfile className="w-10 h-10" />
                <div>
                  <p>Jane Doe</p>
                  <p>jane@gmail.com.com</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
