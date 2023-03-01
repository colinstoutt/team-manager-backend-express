const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Add the SECRET
const SECRET = process.env.SECRET;

const index = async (req, res) => {
  try {
    res.json(await User.find({}));
  } catch (error) {
    // send error to user
    res.status(400).json(error);
  }
};

const signup = async (req, res) => {
  try {
    let user = await User.create(req.body);
    const token = createJWT(user);
    // Send back a JWT
    res.json({ token });
  } catch (error) {
    // Probably a duplicate email
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
};

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = {
  signup,
  login,
  index,
};
