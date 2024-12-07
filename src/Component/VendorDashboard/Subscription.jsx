"use client";
import { FaAngellist } from "react-icons/fa";
import React, { useState } from "react";

function Subscription() {
  const commonFeatures = [
    "14 Days Trial",
    "Access to Basic Vendor List",
    "Limited Messaging Per Day",
    "Limited Vendor Engagements",
    "Access to Vendors Rating and Reviews",
  ];

  const plans = [
    {
      type: "monthly",
      options: [
        {
          title: "Free Plan",
          price: 0,
          featureDescription: "Basic features included in the free plan.",
          features: [...commonFeatures],
        },
        {
          title: "Standard Plan",
          price: 10,
          featureDescription:
            "Everything in the free plan plus additional standard features.",
          features: [
            ...commonFeatures,
            "Priority Support",
            "Enhanced Vendor Search",
          ],
        },
        {
          title: "Premium Plan",
          price: 20,
          featureDescription:
            "Everything in the standard plan plus all premium features.",
          features: [
            ...commonFeatures,
            "Unlimited Messaging",
            "Advanced Vendor Analytics",
          ],
        },
      ],
    },
    {
      type: "annually",
      options: [
        {
          title: "Free Plan",
          price: 0,
          featureDescription: "Basic features included in the free plan.",
          features: [...commonFeatures],
        },
        {
          title: "Standard Plan",
          price: 100,
          featureDescription:
            "Everything in the free plan plus additional standard features.",
          features: [
            ...commonFeatures,
            "Priority Support",
            "Enhanced Vendor Search",
          ],
        },
        {
          title: "Premium Plan",
          price: 200,
          featureDescription:
            "Everything in the standard plan plus all premium features.",
          features: [
            ...commonFeatures,
            "Unlimited Messaging",
            "Advanced Vendor Analytics",
          ],
        },
      ],
    },
  ];

  const [selectedType, setSelectedType] = useState("monthly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const selectedPlanData = plans.find((plan) => plan.type === selectedType);

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <h1 className="text- font-medium text-3xl text-black">
        Payments and Subscription
      </h1>
      <div className="flex gap-4 mb-6 my-5 justify-start">
        <button
          onClick={() => setSelectedType("monthly")}
          className={`p-2 ${
            selectedType === "monthly"
              ? "bg-[#992B1C] text-white"
              : "bg-gray-200 text-black"
          } rounded-md`}
        >
          Monthly
        </button>
        <button
          onClick={() => setSelectedType("annually")}
          className={`p-2 ${
            selectedType === "annually"
              ? "bg-[#992B1C] text-white"
              : "bg-gray-200 text-black"
          } rounded-md`}
        >
          Annually
        </button>
      </div>

      <div className="grid grid-cols-1 m-10 md:grid-cols-3 gap-6">
        {selectedPlanData.options.map((option, index) => (
          <div
            key={index}
            className="border p-6 rounded-md relative hover:bg-red-800 hover:text-white transition-all duration-300 hover:scale-105 flex flex-col"
          >
            <p className="font-semibold text-lg">{option.title}</p>
            <div className="text-lg font-bold my-4">
              ${option.price}{" "}
              <span className="text-sm font-normal">
                Per {selectedType === "monthly" ? "Month" : "Year"}
              </span>
            </div>
            <p className="mb-4">{option.featureDescription}</p>
            <div className="flex-1">
              {option.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 mb-2">
                  <FaAngellist
                    className="text-red-600 hover:text-white transition-colors duration-300"
                    size={20}
                  />
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button
                className="bg-[#992B1C] text-white px-6 py-3 rounded-md w-full"
                onClick={() => handleGetStarted(option)}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Confirm Plan</h2>
            <div className="mb-4">
              <p className="text-lg font-medium">
                <span className="font-bold">{selectedPlan.title}:</span>{" "}
                {selectedPlan.featureDescription}
              </p>
              <p className="text-xl font-bold text-[#992B1C]">
                ${selectedPlan.price} / month
              </p>
            </div>

            <p className="mb-4 text-sm font-medium">
              Select preferred payment gateway below
            </p>
            <div className="flex gap-4 items-center mb-6">
              {["Paystack", "Flutterwave", "Stripe"].map((gateway) => (
                <label
                  key={gateway}
                  className="flex items-center gap-2 cursor-pointer text-gray-600"
                >
                  <input
                    type="radio"
                    name="payment-gateway"
                    value={gateway}
                    className="accent-[#992B1C]"
                  />
                  {gateway}
                </label>
              ))}
            </div>
            <button
              className="bg-[#992B1C] text-white py-2 px-6 rounded-md w-full hover:bg-[#7a2116] transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Subscription;
