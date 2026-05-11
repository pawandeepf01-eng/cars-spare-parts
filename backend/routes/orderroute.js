const express = require("express");
const router = express.Router();


const {addOrder,getorder}=require("../controller/ordercontroller.js")
const {authMiddleware} = require("../middleware/auth.js");



router.post("/addorder",authMiddleware, addOrder);
router.get("/userorder", authMiddleware,getorder)


module.exports = router;