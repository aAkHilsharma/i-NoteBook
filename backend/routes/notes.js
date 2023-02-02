const express = require("express");

const router = express.Router();

router.get("/",(req, res)=>{
    obj = {
        example: "Notes"
    }
    res.json(obj);
})

module.exports = router