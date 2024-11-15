import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiHome, FiUser, FiMessageCircle, FiSearch, FiDollarSign, FiSettings } from "react-icons/fi"; // Sample icons

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-0"
      } bg-red-800 h-screen p-0 flex flex-col transition-all duration-300`}
    >
      <div className="text-white font-bold text-2xl mb-8 text-center">Trade Connect</div>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center text-white hover:bg-red-700 p-2 rounded-md"
        >
          <FiHome className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Dashboard</span>}
        </Link>
        <Link
          to="/edit-profile"
          className="flex items-center text-white hover:bg-red-700 p-2 rounded-md"
        >
          <FiUser className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Edit Profile</span>}
        </Link>
        <Link
          to="/messages"
          className="flex items-center text-white hover:bg-red-700 p-2 rounded-md"
        >
          <FiMessageCircle className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Messages</span>}
        </Link>
        <Link
          to="/search-vendors"
          className="flex items-center text-white hover:bg-red-700 p-2 rounded-md"
        >
          <FiSearch className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Search Vendors</span>}
        </Link>
        <Link
          to="/transactions"
          className="flex items-center text-white hover:bg-red-700 p-2 rounded-md"
        >
          <FiDollarSign className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Transactions</span>}
        </Link>
        <Link
          to="/settings"
          className="flex items-center text-white hover:bg-red-700 p-2 rounded-md mt-auto"
        >
          <FiSettings className="mr-4 text-2xl" />
          {isOpen && <span className="text-lg">Settings</span>}
        </Link>
      </nav>
      <div className="flex items-center text-white mt-4 p-2">
          <div className="flex items-center">
            {isOpen && (
              <div className="flex absolute bottom-0 pb-10 text-sm">
                <div className="pt-4 "><CgProfile className="w-10"/></div>
                <div>
                <p>Jane Doe</p>
                <p>jane@domain.com</p>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
