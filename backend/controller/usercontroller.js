const user = require("../Model/usermodel.js");
const dotenv=require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const newuser = async (req, res) => {

  try {

    const { userName, Email, Password, role } = req.body;

    const hashPassword = await bcrypt.hash(Password, 10);

    const newUser = new user({
      userName,
      Email,
      Password: hashPassword,
      role,
    });

    await newUser.save();

    const token = jwt.sign(
      {
        role: newUser.role,
            name: newUser.userName,
        id: newUser._id,
      },
      process.env.Hello,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      role: newUser.role,
    });

  } catch (err) {

    console.log(err.message);

    res.status(500).json({
      message: err.message,
    });

  }
};



const loginuser = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const find = await user.findOne({ Email });
    if (!find) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(Password, find.Password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { role: find.role, name: find.userName,id:find._id },
      process.env.Hello,
      {
        expiresIn: "1h",
      },
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res
      .status(200)
      .json({ message: "loggin succesfully", token, role: find.role });
    // console.log(token);
  } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
      
  }
};


const getuser = async (req, res) => {
  try {
    const data = await user.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};


const deleteuser = async (req, res) => {
  try {
    const { id } = req.params; // get id from URL
    await user.findByIdAndDelete(id);

    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};



const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true, // true if HTTPS
    sameSite: "none", // must match login
  });
  res.json({ message: "Logged out successfully" });
};

const getMe = async (req, res) => {
  try {
    const User = await user.findById(req.userId).select("-Password");

    res.status(200).json(User);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { newuser,loginuser,logoutUser,getuser ,deleteuser,getMe};