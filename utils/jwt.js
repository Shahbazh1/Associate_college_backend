
const jwt = require("jsonwebtoken");
let JWT_SECRET='MY_SUPER_SECRET_KEY_123'

exports.generateToken = (payload,expiry) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: expiry });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
