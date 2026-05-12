import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, CreditCard } from "lucide-react";

function Productdetail() {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);

 const addcart = async (data) => {
  try {
    const res = await axios.post(
      "https://cars-spare-parts.onrender.com/api/addcart",
      {
        name: data.name,
        price: data.price,
        img: data.img,
        quantity: quantity,
      }
    );
    

  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://cars-spare-parts.onrender.com/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err.message);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[92%] mx-auto">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="bg-white rounded-[35px] overflow-hidden shadow-xl border border-gray-200">
            <img
              src={`https://cars-spare-parts.onrender.com/uploads/${product.img}`}
              alt={product.name}
              className="w-full h-[350px] md:h-[650px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[35px] border border-gray-200 shadow-xl p-8 md:p-12">
            {/* Tag */}
            <p className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
              Premium Collection
            </p>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <h2 className="text-3xl font-semibold text-gray-800 mt-6">
              {product.price}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-8 mt-6 text-lg">
              {product.discription}
            </p>

            {/* Quantity */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-black mb-4">
                Quantity
              </h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-12 h-12 rounded-2xl border border-gray-300 text-2xl font-bold hover:bg-black hover:text-white transition"
                >
                  -
                </button>

                <div className="w-16 h-12 rounded-2xl border border-gray-300 flex items-center justify-center text-lg font-semibold bg-gray-50">
                  {quantity}
                </div>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-2xl border border-gray-300 text-2xl font-bold hover:bg-black hover:text-white transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              {/* Add To Cart */}
              <button
                onClick={() => {
                  addcart(product);
                }}
                className="flex-1 bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition duration-300"
              >
                <ShoppingCart size={22} />
                Add To Cart
              </button>

              {/* Buy Now */}
              <button
                 onClick={() =>
    navigate("/checkout", {
      state: {
        buyNowItem: {
          ...product,
          quantity: 1,
        },
      },
    })
  }
                className="flex-1 border border-black text-black hover:bg-black hover:text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition duration-300">
                <CreditCard size={22} />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
