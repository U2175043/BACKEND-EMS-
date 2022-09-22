const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTKEY, { expiresIn: "3d" });
};

router.post("/", async (req, res) => {
    const { Email, Password } = req.body;

    try {
      const user = await User.signup(Email, Password);

      // create token
      const token = createToken(user._id);

      res.status(200).json({ Email, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

module.exports = router;
