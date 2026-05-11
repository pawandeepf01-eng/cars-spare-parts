import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // const hello = (data) => {
  //   console.log(data);
  // };

  const sendToWhatsApp = (data) => {
    const phoneNumber = "919478409565"; // 👈 your WhatsApp number (with country code)

    const message = `
Customer Support Request - Dhiman Motors
Name: ${data.userName}
Email: ${data.Email}
Message: ${data.message || "No message"}
  `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-black/10 pt-8 pb-12">
      <div className="w-[98%] md:w-[92%] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[35px] p-8 md:p-12 shadow-2xl h-full flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-[5px] text-gray-500 text-sm font-semibold">
                Contact
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-5">
                Let’s shape the next premium customer moment.
              </h1>

              <p className="text-gray-600 mt-8 leading-8 text-lg">
                For order help, collaborations, or support, the Dhiman Motors
                team is ready with a cleaner and more production-ready contact
                experience.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 mt-14">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>

                  <h3 className="text-xl font-semibold text-gray-900">
                    dhimanmotors@gmail.com
                  </h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone</p>

                  <h3 className="text-xl font-semibold text-gray-900">
                    +91 98765 43210
                  </h3>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Location</p>

                  <h3 className="text-xl font-semibold text-gray-900">
                    Punjab, India
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(sendToWhatsApp)}
            className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[35px] shadow-2xl p-8 md:p-10"
          >
            {/* Form Heading */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mt-4">
                Send Message
              </h2>

              <p className="text-gray-600 mt-4 leading-7 text-lg">
                We’d love to hear from you.
              </p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT SIDE */}
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="text-gray-700 font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-2 p-4 rounded-2xl bg-white border border-gray-300 focus:outline-none focus:border-black transition"
                    {...register("userName", {
                      required: "User name is required",
                    })}
                  />

                  {errors.userName && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.userName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-700 font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 p-4 rounded-2xl bg-white border border-gray-300 focus:outline-none focus:border-black transition"
                    {...register("Email", {
                      required: "Email is required",
                    })}
                  />

                  {errors.Email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.Email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col h-full">
                {/* Message */}
                <div className="">
                  <label className="text-gray-700 font-semibold">Message</label>

                  <textarea
                    rows="8"
                    placeholder="Write your message..."
                    className="w-full mt-2 p-4 rounded-2xl bg-white border border-gray-300 focus:outline-none focus:border-black transition resize-none"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="mt-6 bg-black text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
