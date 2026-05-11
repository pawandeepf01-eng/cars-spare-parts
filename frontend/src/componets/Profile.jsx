import React from "react";
import { User, Mail, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

const fetchUser = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/me", {
      withCredentials: true,
    });

    setUser(res.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchUser();
}, []);

  // Example user data
  // const user = {
  //   name: "Prince Dhiman",
  //   email: "prince@gmail.com",
  // };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[92%] mx-auto">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Profile
          </h1>
          <p className="text-gray-500 mt-2">Manage your account information</p>
        </div>

        {localStorage.getItem("role") === "admin" && (
          <div className="w-full bg-white rounded-[30px]  shadow-xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side */}
            <div className="flex flex-col md:flex-row items-center gap-5 ">
              {/* Profile Circle */}
              <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-4xl font-bold shadow-lg">
                {user?.userName?.charAt(0)?.toUpperCase()}
              </div>

              {/* User Info */}
              <div className="text-center md:text-left ">
                <p className="text-gray-500 ">Admin Dashboard</p>
                <li className="list-none mt-4">
                  <Link
                    to="/admin"
                    className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-2xl font-semibold shadow-lg hover:bg-gray-800 hover:scale-105 transition duration-300 w-fit"
                  >
                    <User size={20} />
                    <span>Admin</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        )}

        {/* Profile Card */}
        <div className="mt-5 w-full bg-white rounded-[30px] shadow-xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            {/* Profile Circle */}
            <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-4xl font-bold shadow-lg">
              {user?.userName?.charAt(0)?.toUpperCase()}
            </div>

            {/* User Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <User size={20} />
                <h2 className="text-2xl font-bold text-gray-800">
                  {user.userName}
                </h2>
              </div>

              <div className="flex items-center gap-2 mt-3 text-gray-600 justify-center md:justify-start">
                <Mail size={18} />
                <p>{user.Email}</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <button
            onClick={() => navigate("/userorder")}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300"
          >
            <Package size={20} />
            My Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
