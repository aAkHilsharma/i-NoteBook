const express = require('express');
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({min: 2}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5}),
], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = User.findOne({email: req.body.email});
    if(user){
        return req.status(400).json({error: "Sorry a user with this email already exists"});
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,  
    })
})

module.exports = router; 