const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { userName, UserEmail, password, role } = req.body;

    // Validate required fields
    if (!userName || !UserEmail || !password) {
      console.error("Validation Error: Missing required fields");
      return res.status(400).json({
        message: "All fields (userName, UserEmail, password) are required",
        success: false,
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ userName }, { UserEmail }],
    });

    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    // Hash password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user instance
    const newUser = new User({
      userName,
      UserEmail,
      password: hashedPassword,
      role: role || "user", // Default role if not provided
    });

    console.log("New User Created:", newUser);

    // Save user to the database
    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error("Registration Error:", error.message || error);

    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message || "Unknown error",
    });
  }
};

const loginUser = async (req, res) => {
  const { UserEmail, password } = req.body;

  const checkUser = await User.findOne({ UserEmail });

  if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
    return res.status(401).json({
      message: "Invalid credentials",
      success: false,
    });
  }

  const accessToken = jwt.sign(
    {
      _id: checkUser._id,
      userName: checkUser.userName,
      userEmail: checkUser.UserEmail,
      role: checkUser.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "120m" }
  );

  return res.status(200).json({
    message: "Login successful",
    success: true,
    data: {
      accessToken,
      user: {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.UserEmail,
        role: checkUser.role,
      },
    },
  });
};

module.exports = { registerUser, loginUser };
