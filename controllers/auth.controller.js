const bcrypt = require("bcryptjs");
const { generateToken, verifyToken } = require("../utils/jwt");

// Dummy in-memory user storage (replace with DB later)
let users = []; // stores registered users

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ msg: "Invalid email" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid password" });
  }

  // Generate tokens
  const accessToken = generateToken(
    { email: user.email, roll_no: user.roll_no },
    "15m" // access token expires in 15 minutes
  );

  const refreshToken = generateToken(
    { email: user.email, roll_no: user.roll_no },
    "7d" // refresh token expires in 7 days
  );

  // Store refresh token somewhere (in DB ideally; here in memory for demo)
  user.refreshToken = refreshToken;

  // Send tokens as cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false, // set true in production
    sameSite: "lax",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false, // set true in production
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // Respond with basic user info
  res.json({
    msg: "You logged in successfully",
    user: { roll_no: user.roll_no, email: user.email, name: user.name },
  });
};


exports.register = async (req, res) => {
  try {
    const { name, email, password, roll_no } = req.body;
    console.log(name, email, password, roll_no);

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    console.log(name, email, password, roll_no);
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user (dummy id, replace with DB auto-increment or UUID later)
    const newUser = {
      roll_no:roll_no,
      name:name,
      email:email,
      password: hashedPassword
    };

    users.push(newUser);
    console.log("users", users)
res.json({
  msg: "User registered successfully",
  user: { roll_no: newUser.roll_no, name: newUser.name, email: newUser.email }
});


  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logged Out" });
};
