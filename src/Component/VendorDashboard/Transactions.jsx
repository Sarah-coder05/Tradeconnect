import React, { useState } from "react";

function Transactions() {
  const [activeTab, setActiveTab] = useState("All transactions");

  const transactions = [
    { id: 1, client: "Bryan Odjede", amount: "₦5,000", status: "Pending", transactionId: "c4ghf500w2", date: "17/11/2024" },
    { id: 2, client: "Bryan Odjede", amount: "₦5,000", status: "Confirmed", transactionId: "c4ghf500w2", date: "17/11/2024" },
    { id: 3, client: "Bryan Odjede", amount: "₦5,000", status: "Confirmed", transactionId: "c4ghf500w2", date: "17/11/2024" },
    { id: 4, client: "Bryan Odjede", amount: "₦5,000", status: "Pending", transactionId: "c4ghf500w2", date: "17/11/2024" },
    { id: 5, client: "Bryan Odjede", amount: "₦5,000", status: "Pending", transactionId: "c4ghf500w2", date: "17/11/2024" },
    { id: 6, client: "Bryan Odjede", amount: "₦5,000", status: "Declined", transactionId: "c4ghf500w2", date: "17/11/2024" },
  ];

  return (
    <div className="">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <div className="flex space-x-4">
          <button className="bg-[#992B1C] text-white px-4 py-2 rounded-md">Export</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Filters</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mx-auto mb-4">
        <div className="bg-red-50 border shadow p-2 rounded-lg">
          <h3 className="text-black">Total Earnings:<span className="text-xl text-black font-bold"> ₦500,000</span></h3>
        </div>
        <div className="bg-red-50 border shadow p-4 rounded-lg">
          <h3 className="text-black">Pending Payments:<span className="text-xl text-black font-bold"> ₦340,000</span></h3>
        </div>
        <div className="bg-red-50 border shadow p-4 rounded-lg">
          <h3 className="text-black">Monthly Income:<span className="text-xl text-black font-bold"> ₦400,000</span></h3>
        </div>
      </div>
      <div className="flex items-center space-x-6 border-b border-gray-300 mb-4">
        {["All transactions", "Completed", "Pending", "Declined"].map((tab) => (
          <button
            key={tab}
            className={`py-2 ${
              activeTab === tab
                ? "text-red-800 text-xl border-b-2 border-red-500"
                : "text-black text-lg"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} <span className="ml-2 border p-2 rounded-full text-sm">{Math.floor(Math.random() * 50)}</span>
          </button>
        ))}
      </div>
      <div className="bg-white shadow rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="pl-3 bg-red-100">S/N</th>
              <th className="p-4">Client Name</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Transaction ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id} className="border-b hover:bg-gray-50">
                <td className="pl-3 bg-red-100">{index + 1}</td>
                <td className="p-4">{transaction.client}</td>
                <td className="p-4">{transaction.amount}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      transaction.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : transaction.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="p-4">{transaction.transactionId}</td>
                <td className="p-4">{transaction.date}</td>
                <td className="p-4">
                  <button className="bg-[#992B1C] text-white px-4 py-2 rounded-md">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between p-4">
          <p className="text-sm text-gray-500">Showing 1 to 10 of 94 Transactions</p>
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Prev</button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
