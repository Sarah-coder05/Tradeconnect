import React, { useState } from "react";

const ConfirmPlanModal = ({ onClose }) => {
  const [selectedGateway, setSelectedGateway] = useState("");

  const handleContinue = () => {
    if (!selectedGateway) {
      alert("Please select a payment gateway.");
      return;
    }
    alert(`You selected ${selectedGateway}. Proceeding with payment.`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Confirm plan</h2>
        <div className="mb-4">
          <p className="text-lg font-medium">
            <span className="font-bold">Pro Plan:</span> Premium Package
          </p>
          <p className="text-xl font-bold text-[#992B1C]">₦450 / month</p>
        </div>
        <p className="mb-4 text-sm font-medium">
          Select preferred payment gateway below
        </p>
        <div className="border-3"></div>
        <div className="flex gap-4 items-center mb-6">
          {["Paystack", "Flutterwave", "Stripe"].map((gateway) => (
            <label
              key={gateway}
              className={`flex items-center gap-2 cursor-pointer ${
                selectedGateway === gateway
                  ? "text-[#992B1C] font-semibold"
                  : "text-gray-600"
              }`}
            >
              <input
                type="radio"
                name="payment-gateway"
                value={gateway}
                className="accent-[#992B1C]"
                checked={selectedGateway === gateway}
                onChange={() => setSelectedGateway(gateway)}
              />
              {gateway}
            </label>
          ))}
        </div>
        <button
          className="bg-[#992B1C] text-white py-2 px-6 rounded-md w-full hover:bg-[#7a2116] transition-colors"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConfirmPlanModal;
