const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // User ID
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    // Products
    items: [
      {
        name: {
          type: String,
          required: true,
        },

        img: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    // Order Summary
    totalItems: {
      type: Number,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    // Customer Details
    customerName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    // Payment
    paymentMethod: {
      type: String,
      default: "Cash On Delivery",
    },

    // Status
    orderStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);