const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/userroute.js");
const productroute = require("./routes/productroute.js");
const cart = require("./routes/cartroute.js");
const order = require("./routes/orderroute.js");


const coonectp = require("./config/db");

app.use("/uploads", express.static("uploads"));
app.use(express.json());
coonectp();
app.use(cookieparser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cars-spare-parts.onrender.com",
    ],
    credentials: true,
  }),
);


app.use("/api", router);
app.use("/api", productroute);
app.use("/api", cart);
app.use("/api", order);


app.get("/", (req, res) => {
  res.send("hello i p");
});

app.listen(process.env.PORT, () => {
  console.log("server is started");
});
