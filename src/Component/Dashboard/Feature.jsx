import React from "react";
import handshake from "../Asset/handshake.png";
import vector from "../Asset/vector.png";
import groups from "../Asset/groups.png";

const Features = () => {
  const features = [
    {
      image: groups, 
      text: "Connect with vendors from the comfort of your home.",
    },
    {
      image: handshake, 
      text: "Service exchanges can occur seamlessly, enabling bartering, and collaboration.",
    },
    {
      image: vector, 
      text: "Clients or event hosts can find, book, and coordinate with multiple vendors on one platform.",
    },
  ];

  return (
    <div className="flex flex-col my-10 gap-6 max-w-2xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative flex items-center p-2 bg-red-100 h-20 rounded-2xl border-8 border-red-800"
        >
          <div className="absolute -left-8 flex items-center justify-center bg-red-100 border-8 border-red-800 p-3 rounded-full">
            <img
              src={feature.image}
              alt={`Feature ${index + 1}`}
              className="w-14 h-14"
            />
          </div>
          <div className="ml-12 text-center text-lg text-gray-700">{feature.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Features;
