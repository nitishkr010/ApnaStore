const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {

  try {

    const { name, email, password } =
      req.body;

    // Existing User
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({

        message: "User already exists",

      });

    }

    // Hash Password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({

      name,
      email,
      password: hashedPassword,

    });

    res.status(201).json({

      message: "Registration Successful",

      user,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } =
      req.body;

    // Find User
    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({

        message: "User not found",

      });

    }

    // Compare Password
    const isMatch =
      await bcrypt.compare(

        password,
        user.password

      );

    if (!isMatch) {

      return res.status(400).json({

        message: "Invalid Password",

      });

    }

    // JWT
    const token = jwt.sign(

      { id: user._id },

      "secretkey",

      { expiresIn: "7d" }

    );

    res.json({

      message: "Login Successful",

      token,

      user,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});

module.exports = router;