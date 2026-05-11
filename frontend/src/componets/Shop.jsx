import React from 'react'
import { useState, useEffect } from "react"
import { ShoppingBag } from "lucide-react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Shop() {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/products",
        );
        setproducts(res.data);
      } catch (err) {
        console.error("Error fetching:", err.message);
      }
    };
    fetchProducts();
    }, []);
  
  const handleCardClick = (id) => {
        navigate(`/productdetail/${id}`);
  };
  
  return (
        <div className=" w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      {/* Heading */}
      <h1 className="text-gray-800 text-4xl font-bold text-center mb-10">
        Trending Products
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 ">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => handleCardClick(product._id)}
            className="group relative w-[320px] bg-gradient-to-br from-gray-50 via-white to-black/10 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={`http://localhost:3000/uploads/${product.img}`}
                alt={product.name}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            
            </div>

            {/* Content */}
            <div className="p-5 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-wide text-black">
                  {product.name}
                </h2>

                <p className="text-lg font-semibold text-gray-800  p-2 rounded-2xl">
                  Rs.{product.price}
                </p>
              </div>

              <p className="text-gray-800 text-sm leading-6 mt-3 line-clamp-2">
                {product.discription}
              </p>

              {/* Button */}
              <button
                 onClick={(e) => {
    e.stopPropagation();

    navigate("/checkout", {
      state: {
        buyNowItem: {
          ...product,
          quantity: 1,
        },
      },
    });
  }}
                className="mt-5 w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300"
              >
                <ShoppingBag size={18} />
                Shop Now
              </button>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
