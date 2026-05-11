import React, { useState } from "react";
import axios from "axios";

function Emailverification() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = email, 2 = otp
  const [message, setMessage] = useState("");

  // Send OTP
  const sendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/send-otp", {
        email,
      });

      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/verify-otp", {
        email,
        otp,
      });

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[92%] mx-auto flex items-center justify-center">

        {/* Card */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-[30px] p-8">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Email Verification
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Verify your email to continue
          </p>

          {/* STEP 1 - EMAIL */}
          {step === 1 && (
            <div className="mt-8 space-y-5">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                onClick={sendOtp}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Verify
              </button>

            </div>
          )}

          {/* STEP 2 - OTP */}
          {step === 2 && (
            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button
                onClick={verifyOtp}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Verify OTP
              </button>

            </div>
          )}

          {/* Message */}
          {message && (
            <p className="text-center text-sm mt-5 text-gray-600">
              {message}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}

export default Emailverification;