const express = require("express");
const { newuser,loginuser,getuser,logoutUser,deleteuser,getMe } = require("../controller/usercontroller.js");

const router = express.Router();
const {authMiddleware} = require("../middleware/auth.js");
router.post("/signin", newuser);
router.post("/login", loginuser);
router.post("/logout", logoutUser);
router.get("/showuser", getuser);
router.delete("/deleteuser/:id", deleteuser);
router.get("/me", authMiddleware, getMe);


module.exports = router;