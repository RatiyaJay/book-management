const User = require("../models/User");
const jwt = require("jsonwebtoken");

// @desc    Register new user
// @route   POST /register
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "All fields required" });

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ email, password });
  if (user) {
    res
      .status(201)
      .json({ _id: user.id, email: user.email, token: generateToken(user.id) });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

// @desc    Login user & get token
// @route   POST /login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "60s" });
};

module.exports = { registerUser, loginUser };
