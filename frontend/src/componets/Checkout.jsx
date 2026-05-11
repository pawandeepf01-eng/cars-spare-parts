import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();
  const [items, setItems] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://cars-spare-parts.onrender.com/addorder",
        {
          items,
          totalItems,
          totalPrice,

          customerName: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
          address: data.address,
        },
        {
          withCredentials: true,
        },
      );
      reset();
      navigate("/ordersucces");
    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => {

  const fetchProducts = async () => {

    // BUY NOW
    if (location.state?.buyNowItem) {
      setItems([location.state.buyNowItem]);
      return;
    }

    // CART PRODUCTS
    try {
      const res = await axios.get("https://cars-spare-parts.onrender.com/cart");

      setItems(res.data);

    } catch (err) {
      console.error("Error fetching:", err.message);
    }
  };

  fetchProducts();

}, [location.state]);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 py-10">
      <div className="w-[95%] xl:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {/* ADDRESS */}
          <div className="bg-white rounded-[35px] shadow-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-yellow-500" size={30} />

              <div>
                <p className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
                  Delivery
                </p>

                <h1 className="text-4xl font-bold text-black">
                  Shipping Address
                </h1>
              </div>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <form
                id="checkout-form"
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10"
              >
                {/* NAME */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* CITY */}
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    {...register("city", {
                      required: "City is required",
                    })}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                  />

                  {errors.city && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* STATE */}
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    {...register("state", {
                      required: "State is required",
                    })}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                  />

                  {errors.state && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.state.message}
                    </p>
                  )}
                </div>

                {/* PINCODE */}
                <div>
                  <input
                    type="text"
                    placeholder="Pincode"
                    {...register("pincode", {
                      required: "Pincode is required",
                    })}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
                  />

                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.pincode.message}
                    </p>
                  )}
                </div>

                {/* ADDRESS */}
                <div className="md:col-span-2">
                  <textarea
                    rows="5"
                    placeholder="Full Address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black resize-none"
                  ></textarea>

                  {errors.address && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* EMPTY CHECKOUT */}
          {items.length === 0 && (
            <div className="bg-white rounded-[35px] shadow-xl border border-gray-200 p-12 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-gray-400">
                No Products Selected
              </h2>
            </div>
          )}
        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="bg-black text-white rounded-[35px] p-8 shadow-2xl h-fit sticky top-10">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="text-yellow-400" size={28} />

            <div>
              <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold">
                Payment
              </p>

              <h2 className="text-4xl font-bold">Order Summary</h2>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-white/5 border border-white/10 rounded-[25px] p-4 flex gap-4"
              >
                {/* IMAGE */}
                <div className="w-[90px] h-[90px] rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={`http://localhost:3000/uploads/${item.img}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-6">
                      {item.name}
                    </h3>

                    <p className="font-bold text-lg whitespace-nowrap">
                      Rs. {item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 text-sm text-gray-300">
                    <p>Qty : {item.quantity}</p>

                    <p>₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="border-t border-white/10 mt-8 pt-8 space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-lg">Total Items</p>

              <h3 className="text-2xl font-bold">{totalItems}</h3>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-lg">Payment Method</p>

              <h3 className="text-lg font-semibold">Cash On Delivery</h3>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <p className="text-2xl font-semibold">Grand Total</p>

              <h2 className="text-4xl font-bold text-yellow-400">
                Rs. {totalPrice}
              </h2>
            </div>
          </div>

          {/* BUTTON */}
          <button
            disabled={isSubmitting}
            type="submit"
            form="checkout-form"
            disabled={items.length === 0}
            className="w-full mt-10 bg-white text-black py-4 rounded-2xl font-semibold text-lg hover:bg-gray-200 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? " Paying": "Pay Securely"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
