import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 flex items-center justify-center px-4">

      <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-12 text-center max-w-md w-full">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle size={70} className="text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Order Placed Successfully 
        </h1>

        {/* Text */}
        <p className="text-gray-600 mt-4 leading-6">
          Thank you for your purchase! Your order has been received and is being processed.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/userorder")}
          className="mt-8 w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-800 transition duration-300"
        >
          View My Orders
        </button>

      </div>
    </div>
  );
}

export default OrderSuccess;