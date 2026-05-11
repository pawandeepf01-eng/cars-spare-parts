import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Trash } from "lucide-react";

function Adminuser() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://cars-spare-parts.onrender.com/api/showuser");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  const deleteCartItem = async (id) => {
    try {
      const res = await axios.delete(
        `https://cars-spare-parts.onrender.com/api/deleteuser/${id}`,
      );

      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        All Users
      </h1>

      <div className="bg-white/70 backdrop-blur-md border border-black/10 shadow-xl rounded-3xl overflow-hidden w-full max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-3 md:grid-cols-5 bg-black text-white font-semibold py-4 px-6 text-sm md:text-base">
          <p>Name</p>
          <p>Email</p>
          <p className="hidden md:block">Role</p>
          <p className="hidden md:block">Date</p>
          <p className="text-center">Action</p>
        </div>

        {items.map((item) => {
          const isAdmin = item.role?.toLowerCase() === "admin";

          return (
            <div
              key={item._id}
              className={`grid grid-cols-3 md:grid-cols-5 items-center px-6 py-5 border-b border-gray-100 transition duration-200 ${
                isAdmin ? "bg-green-50" : "hover:bg-gray-50"
              }`}
            >
              {/* Name */}
              <div className="font-semibold text-gray-800">{item.userName}</div>

              {/* Email */}
              <div className="text-gray-600 truncate">{item.Email}</div>

              {/* Role */}
              <div className="hidden md:block">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    isAdmin
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.role}
                </span>
              </div>

              {/* Date */}
              <div className="hidden md:block text-gray-500 text-sm">
                {new Date(item.createdAt).toLocaleDateString()}
              </div>

              {/* Action */}
              <div className="flex justify-center">
                <button
                  disabled={isAdmin}
                  onClick={() => !isAdmin && deleteCartItem(item._id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold transition duration-300 ${
                    isAdmin
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                >
                  <Trash size={16} />
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Adminuser;
