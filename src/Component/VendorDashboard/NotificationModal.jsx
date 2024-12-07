import React from "react";
import { CgBell } from "react-icons/cg";

const NotificationModal = ({ isOpen, onClose, onConfirm, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <div className="flex items-center justify-center text-red-600 my-4">
          <CgBell className="rounded-full border bg-red-800 text-white w-10 h-10 p-2"/>
        </div>
        <p className="text-center text-gray-600">{description}</p>
        <div className="flex justify-between mt-6">
          <button
            className="bg-red-800 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            No, Back
          </button>
          <button
            className="border-2 text-gray-800 px-4 py-2 rounded-lg"
            onClick={onConfirm}
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
