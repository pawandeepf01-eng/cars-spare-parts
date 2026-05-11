const { Schema, model } = require("mongoose");

const myschema = new Schema({
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
    default: 1,
  },
});

const mymodel = model("cart", myschema);
module.exports = mymodel;
