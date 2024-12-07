import React, { useState } from "react";
import graph from '../Asset/graph.png'
import chart from '../Asset/pie chart.png'
import { CgCalendarDates, CgSandClock } from "react-icons/cg";
import { Link } from "react-router-dom";
// import { FaEvernote } from "react-icons/fa";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Upcoming Events");

  const events = [
    { name: "Thanksgiving", date: "Nov 27th, 2024", time: "10:00 AM", icon: "📅" },
    { name: "New Month", date: "Dec 1st, 2024", time: "10:00 AM", icon: "📅" },
    { name: "Black Friday", date: "Nov 30th, 2024", time: "10:00 AM", icon: "📅" },
    { name: "Christmas Eve", date: "Dec 24th, 2024", time: "10:00 AM", icon: "📅" },
    { name: "Boxing Day", date: "Dec 26th, 2024", time: "10:00 AM", icon: "📅" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Welcome Jane! 👋</h1>
        <button className="bg-[#992B1C] text-white px-4 py-2 rounded-md hover:bg-[#8A2519] transition duration-200">
  <Link to="/subscriptions" className="text-white">
    Upgrade Plan
  </Link>
</button>

      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-purple-100 text-purple-600 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-green-100 text-green-600 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold">Completed Events</h2>
          <p className="text-3xl font-bold">32</p>
        </div>
        <div className="bg-blue-100 text-blue-600 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold">Ongoing Events</h2>
          <p className="text-3xl font-bold">7</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Financial Overview</h2>
          <div className="flex items-center justify-between mb-4">
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">7 days</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">30 days</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">90 days</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">6 months</button>
            <button className="px-4 py-2 text-sm bg-gray-200 rounded-md">1 year</button>
          </div>
          <div className=" rounded-md"><img src={graph} alt='graph'/></div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex items-center justify-center">
        <img src={chart} alt='graph'/>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 mb-4">
        {[
          "Ongoing Events",
          "Completed Events",
          "Upcoming Events",
        ].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab
                ? "text-red-800 border-b-2 border-red-500"
                : "text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <h3 className="text-red-800 text-xl font-semibold">{activeTab}</h3>
              <p className="px-2 text-2xl ml-auto bg-red-800 rounded-full text-white">&gt;</p>
            </div>
            <div className="flex gap-1">
            <CgCalendarDates className="mt-1"/><p className="text-black">Event Name: {event.name}</p>
            </div>
            <div className="flex gap-1">
            <CgCalendarDates className="mt-1"/><p className="text-black">Event Date: {event.date}</p>
            </div>
            <div className="flex gap-1">
            <CgSandClock className="mt-1"/><p className="text-black">Starts: {event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
