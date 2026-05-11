import React from "react";
import About1 from "../assets/About1.jpg";
import About2 from "../assets/About2.jpg";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Car, Users, Award, ImageOffIcon } from "lucide-react";

function About() {
  const Navigate = useNavigate();
  return (
   <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
  <div className="w-[98%] md:w-[92%] mx-auto">
    
    {/* Hero Section */}
    <section className="relative h-[65vh] rounded-[40px] overflow-hidden flex items-center justify-center">
      
      <img
        src={About1}
        alt="Luxury Car"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-wide">
          About Dhiman Motors
        </h1>

        <p className="mt-5 text-gray-200 max-w-2xl mx-auto leading-8 text-sm md:text-lg">
          Premium cars with luxury, performance, and trusted service.
        </p>
      </div>
    </section>

    {/* About Section */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 items-center">
      
      {/* Image */}
      <div className="overflow-hidden rounded-[35px] shadow-2xl">
            <img
              src={About2}
              alt="Showroom"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
      </div>

      {/* Content */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[35px] p-8 md:p-12 shadow-xl">
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Luxury Meets Performance
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
          Dhiman Motors delivers premium driving experiences with
          modern luxury vehicles and trusted customer support.
        </p>

        <p className="mt-4 text-gray-600 leading-8">
          We focus on quality, elegance, and customer satisfaction
          to help you find your dream vehicle.
        </p>

            <button
              onClick={()=>Navigate("/shop")}
              className="mt-8 bg-black text-white px-8 py-3 rounded-2xl hover:scale-105 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>

    {/* Features */}
    <section className="mt-20">
      
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose Us
        </h2>

        <p className="text-gray-500 mt-3">
          Premium quality with trusted experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
        
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition duration-500">
          <h3 className="text-2xl font-semibold text-gray-900">
            Premium Cars
          </h3>

          <p className="text-gray-600 mt-4 leading-7 text-sm">
            Luxury collections with modern features and stylish design.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition duration-500">
          <h3 className="text-2xl font-semibold text-gray-900">
            Trusted Quality
          </h3>

          <p className="text-gray-600 mt-4 leading-7 text-sm">
            Every vehicle is checked carefully for maximum performance.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition duration-500">
          <h3 className="text-2xl font-semibold text-gray-900">
            Fast Support
          </h3>

          <p className="text-gray-600 mt-4 leading-7 text-sm">
            Dedicated support team available for customer assistance.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition duration-500">
          <h3 className="text-2xl font-semibold text-gray-900">
            Best Experience
          </h3>

          <p className="text-gray-600 mt-4 leading-7 text-sm">
            Smooth buying experience with premium service and trust.
          </p>
        </div>
      </div>
    </section>
  </div>
</div>
  );
}

export default About;