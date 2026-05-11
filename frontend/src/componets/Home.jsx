import React from "react";
import Car5 from "../assets/car5.jpg";
import Car6 from "../assets/car6.jpg";
import Car7 from "../assets/car7.jpg";
import { ShoppingBag } from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
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
      <div className=" w-[98%] md:w-[92%] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* IMAGE 1 */}
          <SwiperSlide>
            <div className="relative">
              {/* IMAGE */}
              <img
                src={Car5}
                alt=""
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/45"></div>

              {/* TEXT CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white">
                <p className="uppercase tracking-[6px] text-yellow-400 text-xs sm:text-sm mb-3">
                  Premium Collection
                </p>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
                  Shop Our Premium Auto Parts
                </h1>

                <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-xl">
                  Build Your Dream Car Today with luxury performance parts,
                  premium accessories, and modern automotive styling.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => navigate("/shop")}
                    className=" cursor-pointer bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold duration-300 shadow-xl"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* IMAGE 2 */}
          <SwiperSlide>
            <div className="relative">
              {/* IMAGE */}
              <img
                src={Car6}
                alt=""
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/45"></div>

              {/* TEXT CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white">
                <p className="uppercase tracking-[6px] text-yellow-400 text-xs sm:text-sm mb-3">
                  Premium Collection
                </p>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
                  Shop Our Premium Auto Parts
                </h1>

                <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-xl">
                  Build Your Dream Car Today with luxury performance parts,
                  premium accessories, and modern automotive styling.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => navigate("/shop")}
                    className="cursor-pointer bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold duration-300 shadow-xl"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* IMAGE 3 */}
          <SwiperSlide>
            <div className="relative">
              {/* IMAGE */}
              <img
                src={Car7}
                alt=""
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/45"></div>

              {/* TEXT CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white">
                <p className="uppercase tracking-[6px] text-yellow-400 text-xs sm:text-sm mb-3">
                  Premium Collection
                </p>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
                  Shop Our Premium Auto Parts
                </h1>

                <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-xl">
                  Build Your Dream Car Today with luxury performance parts,
                  premium accessories, and modern automotive styling.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => navigate("/shop")}
                    className="cursor-pointer  bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold duration-300 shadow-xl"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
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
    </div>
  );
}

export default Home;
