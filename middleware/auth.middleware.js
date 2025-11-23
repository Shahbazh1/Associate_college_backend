const { verifyToken } = require("../utils/jwt");

module.exports = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ msg: "Token missing" });
  }

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
};
