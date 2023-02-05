const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// create a user using: POST "/api/auth/createuser"
const JWT_SECRET = "abcdef";
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 2 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Check if email is unique if not send error 
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      //creating a salt and add it to hash
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //using secure password created with salt and hash
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken});
      // if above code does not run then give a error
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured try again!");
    }
  }
);

module.exports = router;
