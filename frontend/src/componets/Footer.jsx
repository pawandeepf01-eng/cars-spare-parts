import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  User,
  RotateCcw,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white px-8 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo / About */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            Dhiman Motors
          </h1>

          <p className="text-gray-400 mt-4 leading-7 text-sm">
            Premium vehicle collection with modern design, trusted quality,
            and best customer experience.
          </p>
        </div>

        {/* Collection */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Collection
          </h2>

          <ul className=" text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Sports Cars
            </li>

            <li  className="hover:text-white transition cursor-pointer">
              Luxury Cars
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Bikes
            </li>
            <li className="hover:text-white transition cursor-pointer">
              New Arrivals
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Support
          </h2>

          <ul className=" text-gray-400">
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <ShoppingBag size={18} />
              Shopping
            </li>

            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <User size={18} />
              Profile
            </li>

            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <RotateCcw size={18} />
              Return Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Contact
          </h2>

          <ul className=" text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={18} />
              +91 98765 43210
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} />
              dhimanmotors@gmail.com
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} />
              Punjab, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-6 pt-6 text-center text-gray-500 text-sm">
        © 2026 Dhiman Motors. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;