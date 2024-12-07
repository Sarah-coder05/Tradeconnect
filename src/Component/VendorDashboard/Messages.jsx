import React, { useState } from "react";
import profile from '../Asset/Frame 10.png';
import profile1 from '../Asset/profile1.png';
import profile2 from '../Asset/profile2.png';
import profile3 from '../Asset/profile3.png';

function Messages() {
  const [selectedUser, setSelectedUser] = useState("Florencio Dorrance");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "Florencio Dorrance", text: "omg, this is amazing", type: "received" },
    { sender: "Florencio Dorrance", text: "perfect! ✅", type: "received" },
    { sender: "Florencio Dorrance", text: "Wow, this is really epic", type: "received" },
    { sender: "You", text: "How are you?", type: "sent" },
    { sender: "You", text: "woohoooo", type: "sent" },
    { sender: "You", text: "Haha oh man", type: "sent" },
    { sender: "You", text: "Haha that\u2019s terrifying 😂", type: "sent" },
  ]);

  const users = [
    { name: "Bryan Odjede", lastMessage: "Haha oh man 🔥", time: "12m", image: profile1 },
    { name: "Florencio Dorrance", lastMessage: "woohoooo", time: "24m", online: true, image: profile2 },
    { name: "Lavern Laboy", lastMessage: "Haha that\u2019s terrifying 😂", time: "1h", image: profile3 },
    { name: "Titus Kitamura", lastMessage: "omg, this is amazing", time: "5h", image: profile2 },
    { name: "Geoffrey Mott", lastMessage: "aww 🥺", time: "2d", image: profile2 },
    { name: "Alfonzo Schuessler", lastMessage: "perfect!", time: "1m", image: profile },
    { name: "Lavern Laboy", lastMessage: "Haha that\u2019s terrifying 😂", time: "1h", image: profile3 },
    { name: "Titus Kitamura", lastMessage: "omg, this is amazing", time: "5h", image: profile2 },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage.trim(), type: "sent" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      
      <div className="w-1/3 border-r border-red-800 p-4 relative">
        
        <input
          type="text"
          placeholder="Search for conversation"
          className="w-full p-2 mb-4 border border-red-800 rounded-md focus:outline-none focus:ring focus:border-red-800"
        />
        <ul className="space-y-2">
          {users.map((user, index) => (
            <li
              key={index}
              onClick={() => setSelectedUser(user.name)}
              className={`flex items-center justify-between p-2 cursor-pointer rounded-md hover:bg-gray-100 ${
                selectedUser === user.name ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex gap-2">
                <img src={user.image} alt="profile" className="w-11 h-11 rounded-full" />
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-sm text-gray-500 truncate">{user.lastMessage}</p>
                </div>
              </div>
              <div className="text-xs text-gray-400">{user.time}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div className="flex gap-3">
            <img src={profile} alt="profile" />
            <div>
              <h2 className="font-bold text-lg">{selectedUser}</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <button className="bg-red-800 text-white px-4 py-2 rounded-md">Call</button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
            >
              <p
                className={`px-4 py-2 rounded-lg ${
                  msg.type === "sent" ? "bg-red-800 text-white" : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center p-4 border-t border-gray-300">
          <input
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-red-300"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-red-800 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
