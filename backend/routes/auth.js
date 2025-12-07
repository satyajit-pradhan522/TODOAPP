const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
// Register
router.post("/register", async (req, res) => {
  try {
    // Generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // Save user and respond
    const user = await newUser.save();
    res.status(200).json({
      message: "Signed up successfully",
    });
  } catch (err) {
    res.status(200).json({ message: "User Already Exists" });
  }
});

// Log In
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const usernameFound = await User.findOne({ email: email });
    if (!usernameFound) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(
      password,
      usernameFound.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        _id: usernameFound._id,
        username: usernameFound.username,
        email: usernameFound.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
