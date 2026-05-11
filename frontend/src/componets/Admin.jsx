import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
    
  function handlerouteback() {
    navigate("/");
  }
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onsubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("discription", data.discription);
      formData.append("img", data.img[0]); // file input gives array

      // Send with axios
      const res = await axios.post("http://localhost:3000/api/add", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(res.data.message);

      reset();
      navigate("/")
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

return (
  <>
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[92%] mx-auto flex justify-center items-center min-h-screen">
        
        <form
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-5 w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-10"
        >
          {/* Heading */}
          <div className="text-center mb-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Add Product
            </h1>
            <p className="text-gray-500 mt-2">
              Upload and manage your store products
            </p>
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">
              {errors.name ? (
                <p className="text-red-600">{errors.name.message}</p>
              ) : (
                "Product Name"
              )}
            </label>

            <input
              className="p-3 border-2 border-gray-200 rounded-xl outline-none
              focus:ring-2 focus:ring-black/20 focus:border-black transition"
              {...register("name", {
                required: "name is required",
                pattern: {
                  // value: /^[A-Za-z ]+$/,
                  message: "Only letters are allowed",
                },
              })}
              placeholder="Enter your product name"
              type="text"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">
              {errors.price ? (
                <p className="text-red-600">{errors.price.message}</p>
              ) : (
                "Price"
              )}
            </label>

            <input
              className="p-3 border-2 border-gray-200 rounded-xl outline-none
              focus:ring-2 focus:ring-black/20 focus:border-black transition"
              {...register("price", {
                required: "price is required",
                pattern: {
                  // value: /^[A-Za-z ]+$/,
                  message: "Only letters are allowed",
                },
              })}
              placeholder="Enter your price"
              type="number"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">
              {errors.discription ? (
                <p className="text-red-600">
                  {errors.discription.message}
                </p>
              ) : (
                "Description"
              )}
            </label>

            <textarea
              rows={4}
              className="p-3 border-2 border-gray-200 rounded-xl outline-none
              focus:ring-2 focus:ring-black/20 focus:border-black transition resize-none"
              {...register("discription", {
                required: "price is required",
                pattern: {
                  // value: /^[A-Za-z ]+$/,
                  message: "Only letters are allowed",
                },
              })}
              placeholder="Enter your product description"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">
              {errors.img ? (
                <p className="text-red-600">{errors.img.message}</p>
              ) : (
                "Product Image"
              )}
            </label>

            <input
              className="p-3 border-2 border-dashed border-gray-300 rounded-xl 
              outline-none cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              {...register("img", {
                required: "img is required",
              })}
              type="file"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4">
            <button
              type="button"
              onClick={handlerouteback}
              className="w-full sm:w-1/2 bg-gray-200 text-gray-800 p-3 rounded-xl 
              font-semibold hover:bg-gray-300 transition duration-300"
            >
              Back
            </button>

            <button
              type="submit"
              className="w-full sm:w-1/2 bg-black text-white p-3 rounded-xl 
              font-semibold hover:bg-gray-800 transition duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit Product"}
            </button>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-green-600 font-medium mt-2">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  </>
);
}

export default Admin;
