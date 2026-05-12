import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://cars-spare-parts.onrender.com/api/cart");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching:", err.message);
      }
    };

    fetchProducts();
  }, []);

  // Increase Quantity
  const increaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = async (id) => {
    try {
      const res = await axios.delete(
        `https://cars-spare-parts.onrender.com/api/deletecart/${id}`,
      );
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  // Total Items
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  // Total Price
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[92%] mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <p className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
            Shopping Cart
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-black mt-3">
            Your Cart
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT SIDE CART ITEMS */}
          <div className="xl:col-span-2">
            {items.length > 0 ? (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-[30px] shadow-lg border border-gray-200 p-5 flex flex-col md:flex-row gap-5"
                  >
                    {/* Image */}
                    <div className="w-full md:w-[240px] h-[220px] rounded-[25px] overflow-hidden">
                      <img
                        src={`https://cars-spare-parts.onrender.com/uploads/${item.img}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-black">
                          {item.name}
                        </h2>

                        <p className="text-2xl font-semibold text-gray-700 mt-3">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center justify-between mt-8 flex-wrap gap-5">
                        <div>
                          <p className="text-gray-500 mb-3 font-medium">
                            Quantity
                          </p>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => decreaseQty(item._id)}
                              className="w-11 h-11 rounded-2xl border border-gray-300 text-xl font-bold hover:bg-black hover:text-white transition"
                            >
                              -
                            </button>

                            <div className="w-14 h-11 rounded-2xl border border-gray-300 flex items-center justify-center font-semibold bg-gray-50">
                              {item.quantity}
                            </div>

                            <button
                              onClick={() => increaseQty(item._id)}
                              className="w-11 h-11 rounded-2xl border border-gray-300 text-xl font-bold hover:bg-black hover:text-white transition"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Total */}
                        <div>
                          <p className="text-gray-500 mb-3 font-medium">
                            Total
                          </p>

                          <h3 className="text-2xl font-bold text-black">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </h3>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item._id)}
                          className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-5 py-3 rounded-2xl transition"
                        >
                          <Trash2 size={20} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[35px] shadow-xl border border-gray-200 min-h-[450px] flex flex-col items-center justify-center text-center px-6">
                {/* ICON */}
                <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mb-8">
                  <ShoppingCart size={50} className="text-gray-400" />
                </div>

                {/* TEXT */}
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Your Cart Is Empty
                </h2>

                <p className="text-gray-500 text-lg mt-4 max-w-[500px] leading-8">
                  Looks like you haven’t added anything to your cart yet. Start
                  exploring amazing products and shop your favorites.
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => navigate("/shop")}
                  className="mt-10 bg-black hover:bg-gray-900 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition duration-300 shadow-lg hover:scale-105"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE SUMMARY */}
          <div className="bg-white rounded-[30px] shadow-xl border border-gray-200 p-8 h-fit sticky top-10">
            <p className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
              Cart Summary
            </p>

            <h2 className="text-4xl font-bold text-black mt-3">Summary</h2>

            {/* Summary Details */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-lg">Total Items</p>

                <h3 className="text-2xl font-bold text-black">{totalItems}</h3>
              </div>

              <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                <p className="text-gray-500 text-lg">Total Price</p>

                <h3 className="text-3xl font-bold text-black">
                  ₹{totalPrice.toLocaleString()}
                </h3>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              disabled={items.length === 0}
              onClick={() => navigate("/checkout")}
              className="w-full mt-10 bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
