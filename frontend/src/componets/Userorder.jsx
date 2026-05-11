import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  MapPin,
  BadgeIndianRupee,
  Package,
  CalendarDays,
} from "lucide-react";

function Userorder() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/userorder",
        {
          withCredentials: true,
        }
      );

      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[92%] mx-auto">
        
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            My Orders
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Track and manage all your orders
          </p>
        </div>

        {/* Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-[35px] shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-500"
            >
              
              {/* Top Section */}
              <div className="bg-black text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {user.customerName}
                  </h2>

                  <p className="text-gray-300 text-sm mt-1">
                    Order ID : {user._id.slice(0, 10)}...
                  </p>
                </div>

                <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  {user.orderStatus}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-4">
                
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={18} />
                  <p>{user.email}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} />
                  <p>{user.phone}</p>
                </div>

                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin size={18} className="mt-1" />
                  <p>
                    {user.address}, {user.city}, {user.state} -{" "}
                    {user.pincode}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Package size={18} />
                  <p>Total Items : {user.totalItems}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <BadgeIndianRupee size={18} />
                  <p>Total Price : ₹{user.totalPrice}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <CalendarDays size={18} />
                  <p>
                    Ordered On :{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Payment */}
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Payment Method
                    </p>

                    <p className="font-semibold text-gray-800">
                      {user.paymentMethod}
                    </p>
                  </div>

                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {user.orderStatus}
                  </div>
                </div>

                {/* Products */}
                <div className="pt-5 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Ordered Products
                  </h3>

                  <div className="space-y-4">
                    {user.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl"
                      >
                        <img
                          src={`http://localhost:3000/uploads/${item.img}`}
                          alt={item.name}
                          className="w-20 h-20 rounded-2xl object-cover"
                        />

                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-800">
                            {item.name}
                          </h4>

                          <p className="text-gray-500">
                            Quantity : {item.quantity}
                          </p>
                        </div>

                        <div className="font-bold text-lg text-black">
                          ₹{item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {users.length === 0 && (
          <div className="w-full flex justify-center items-center py-24">
            <div className="bg-white shadow-lg rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                No Orders Found
              </h2>

              <p className="text-gray-500 mt-3">
                Your orders will appear here
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Userorder;