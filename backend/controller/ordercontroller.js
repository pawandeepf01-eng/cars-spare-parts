const Order = require("../model/ordermodel.js");
const addOrder = async (req, res) => {
  try {
    const {
      items,
      totalItems,
      totalPrice,
      customerName,
      email,
      phone,
      city,
      state,
      pincode,
      address,
    } = req.body;

    const newOrder = new Order({
      userId: req.userId, // ADD THIS

      items,
      totalItems,
      totalPrice,
      customerName,
      email,
      phone,
      city,
      state,
      pincode,
      address,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      newOrder,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const getorder = async (req, res) => {
    try {
      
    if (!req.userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    let orders;

    if (req.role === "admin") {
      // Admin sees all orders
      orders = await Order.find();
    } else {
      // Normal user sees only their orders
      orders = await Order.find({ userId: req.userId });
    }

    res.status(200).json(orders);
  } catch (err) {
      console.error(err.message);
      
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addOrder,getorder
};