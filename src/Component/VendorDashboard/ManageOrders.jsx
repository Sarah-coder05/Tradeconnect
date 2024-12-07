
import React, { useState } from "react";
import { FaRegCheckCircle,FaPhotoVideo, FaRegEdit, FaTrashAlt } from "react-icons/fa"; 

function Dashboard() {
  const data = [
    { client: "John Doe", order: "Venue", category: "Venue", amount: "$1,400" },
    { client: "Anna Simon", order: "Catering", category: "Catering", amount: "$2,000" },
    { client: "Leah Jacob", order: "Photography", category: "Photography", amount: "$700" },
    { client: "Declan Rice", order: "Decorations", category: "Decorations", amount: "$1,000" },
    { client: "Wesley Cain", order: "Wedding cake", category: "Catering", amount: "$500" },
    { client: "Diana Jacob", order: "Dress & attire", category: "Fashion Design", amount: "$1,500" },
    { client: "Eve Adam", order: "Event rentals", category: "Event rentals", amount: "$1,000" },
    { client: "Timothy Paul", order: "Transportation", category: "Courier Service", amount: "$300" },
    { client: "Beauty Zion", order: "Makeup", category: "Beauty & health", amount: "$800" },
    { client: "Ofana Rica", order: "Courier Service", category: "Courier Service", amount: "$1,000" },
  ];
  const [selectedClients, setSelectedClients] = useState([]);
  const toggleSelectClient = (client) => {
    setSelectedClients((prev) =>
      prev.includes(client)
        ? prev.filter((item) => item !== client)
        : [...prev, client]
    );
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome Jane! 👋</h1>
        <button className="bg-[#992B1C] text-white px-4 py-2 rounded-md">Upgrade Plan</button>
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

      <table className="min-w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="bg-gray-200">
          <th className="py-3 px-6 bg-red-100 text-left"></th>
            <th className="py-3 px-6 text-left">Client</th>
            <th className="py-3 px-6 text-left">Order</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Amount ($)</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b-4 border-gray-800 hover:bg-gray-100 transition-all duration-300"
            >
                <td className="pl-5 bg-red-100">
                <input
                  type="checkbox"
                  checked={selectedClients.includes(item.client)}
                  onChange={() => toggleSelectClient(item.client)}
                  className="cursor-pointer"
                />
              </td>
              <td className="py-3 px-6">{item.client}</td>
              <td className=" py-3 px-6"> {item.order}</td>
              <td className="flex py-3 px-6"><FaPhotoVideo className="mr-2 mt-1 text-green-500" /> {item.category}</td>
              <td className="py-3 px-6">{item.amount}</td>
              <td className="py-3 px-6 flex gap-4 items-center">
                <FaRegCheckCircle className="text-green-500 cursor-pointer" />
                <FaRegEdit className="text-blue-500 cursor-pointer" />
                <FaTrashAlt className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
