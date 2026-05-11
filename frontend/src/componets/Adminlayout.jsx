import React from "react";
import { Outlet,Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 p-3">

      {/* WRAPPER like navbar style */}
      <div className="w-[95%] xl:w-[92%] mx-auto flex flex-col md:flex-row min-h-screen gap-4">

        {/* SIDEBAR */}
        <div className="w-full md:w-72 bg-white/70 backdrop-blur-md border border-black/10 rounded-3xl shadow-xl p-6 md:sticky md:top-4 md:h-[calc(100vh-2rem)]">

          <h1 className="text-2xl font-bold mb-6 text-center md:text-left text-gray-800">
            Admin Panel
          </h1>

          <ul className="flex flex-col gap-3">

            <li>
              <Link
                to="/admin/showuser"
                className="block p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                Users
              </Link>
            </li>

            <li>
              <Link
                to="/admin/addproduct"
                className="block p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                Add Product
              </Link>
            </li>

            <li>
              <Link
                to="/admin/deleteproduct"
                className="block p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                Remove Product
              </Link>
            </li>

            <li>
              <Link
                to="/admin/adminorders"
                className="block p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              >
                 Orders
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTENT */}
        <main
          className="flex-1 bg-white/70 backdrop-blur-md border border-black/10 rounded-3xl shadow-xl p-6 md:p-8 bg-cover bg-center"
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AdminLayout;