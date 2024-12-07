import React, { useState } from "react";
import Modal from "../VendorDashboard/NotificationModal";

const notificationsData = [
  {
    id: 1,
    title: "Maintenance schedule",
    description: "We plan for a scheduled maintenance for Wednesday 8th November 2023. We apologize for the inconvenience.",
  },
  {
    id: 2,
    title: "Upcoming Task",
    description: "Event Reminder for Jane Joe is loading here",
  },
  {
    id: 3,
    title: "Profile Update",
    description: "Event Reminder for Jane Joe is loading here",
  },
  {
    id: 4,
    title: "Vendor Payment Schedule",
    description: "Event Reminder for Jane Joe is loading here",
  },
  {
    id: 5,
    title: "Vendor Selection",
    description: "Event Reminder for Jane Joe is loading here",
  },
  {
    id: 6,
    title: "Continue adding details to new event",
    description: "Event Reminder for Jane Joe is loading here",
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDismiss = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log("Task canceled!");
    closeModal();
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto relative">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-black">Notification</h1>
            <p className="text-gray-500 mt-2">Your Notifications in one place</p>
          </div>
          <div className="bg-white border border-gray-200 shadow rounded-lg p-4 w-82">
            <div className="flex gap-4 justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500">
                  ℹ️
                </div>
                <div>
                  <h3 className="text-black font-bold">Event Reminder</h3>
                  <p className="text-gray-500 text-sm">Event Reminder for Jane Joe</p>
                </div>
              </div>
              <div className="flex gap-3">
              <button
                  className="text-red-600 font-bold w-full text-left"
                  onClick={openModal}
                >
                  View
                </button>
                <button className="text-gray-500 text-lg">✕</button>
               
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search for a notification..."
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-red-200"
          />
        </div>
        <div className="mt-8">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500">
                  ℹ️
                </div>
                <div>
                  <h3 className="font-bold text-black">{notification.title}</h3>
                  <p className="text-gray-500">{notification.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="text-red-600 font-bold"
                  onClick={() => alert(`Viewing ${notification.title}`)}
                >
                  View
                </button>
                <button
                  className="text-gray-500"
                  onClick={() => handleDismiss(notification.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {notifications.length === 0 && (
            <p className="text-gray-500 text-center mt-8">No notifications available.</p>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        title="Upcoming Task"
        description="You have an upcoming task for 27th Nov. 2024. Do you want to cancel this task?"
      />
    </div>
  );
};

export default Notification;
