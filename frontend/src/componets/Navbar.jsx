import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  let userName = "";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      userName = decoded.name;
    } catch (e) {
      console.log("Invalid token", e);
    }
  }

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/cart");

        setCartCount(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCart();
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/logout", {
        withCredentials: true,
      });

      localStorage.removeItem("token");
      localStorage.removeItem("role");

      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] xl:w-[92%] z-50">
        <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-3xl px-5 md:px-8 py-3 shadow-xl">
          {/* MAIN NAV */}
          <div className="flex items-center justify-between gap-3 xl:gap-6">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                D
              </div>

              <h1 className="text-black text-xl font-bold whitespace-nowrap">
                Dhiman Motors
              </h1>
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden xl:flex items-center gap-2 xl:gap-4 font-medium">
              <Link
                to="/"
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                About
              </Link>

              <Link
                to="/shop"
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                Shop
              </Link>

              <Link
                to="/contact"
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                Contact
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* CART */}
              <Link
                to="/cart"
                className="relative text-black bg-gray-200 p-2 rounded-full hover:border hover:border-black duration-200"
              >
                <ShoppingCart size={23} />

                {/* CART BADGE */}
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* PROFILE */}
              {token && (
                <div className="hidden xl:block bg-gray-100 rounded-2xl">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-2 rounded-2xl hover:border hover:border-black duration-200"
                  >
                    {/* FIRST LETTER */}
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold uppercase">
                      {userName?.charAt(0)}
                    </div>

                    {/* USER INFO */}
                    <div>
                      <p className="text-xs text-gray-500">Profile</p>

                      <h2 className="text-black font-semibold">{userName}</h2>
                    </div>
                  </Link>
                </div>
              )}

              {/* LOGIN / LOGOUT */}
              <div className="hidden xl:block">
                {!token ? (
                  <Link
                    to="/login"
                    className="text-white bg-black px-3 py-3 rounded-full hover:scale-105 duration-200"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="text-white bg-black px-3 py-3 rounded-full hover:scale-105 duration-200 cursor-pointer"
                  >
                    Logout
                  </button>
                )}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="xl:hidden text-black"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="xl:hidden mt-5 flex flex-col gap-3 pb-3">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                About
              </Link>

              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                Shop
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                Contact
              </Link>

              {/* MOBILE CART */}
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
              >
                <div className="relative">
                  <ShoppingCart size={24} />

                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    3
                  </span>
                </div>

                <p>Cart</p>
              </Link>

              {/* MOBILE PROFILE */}
              {token && (
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-black px-4 py-2 rounded-full hover:border hover:border-black duration-200"
                >
                  <User size={18} />

                  <span>{userName}</span>
                </Link>
              )}

              {/* MOBILE LOGIN / LOGOUT */}
              {!token ? (
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="/login"
                  className="bg-black text-white px-5 py-2 rounded-full text-center font-semibold"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                  className="bg-black text-white px-5 py-2 rounded-full text-center font-semibold"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* PAGE SPACING */}
      <div
        className={`transition-all duration-300 ${
          menuOpen ? "pt-[420px]" : "pt-28"
        }`}
      ></div>
    </>
  );
}

export default Navbar;
