const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1: Get all the notes:GET "api/notes/fetchallnotes" Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
// Route 2: Add a new note: "api/notes/fetchallnotes" Login required
router.post(
  "/addnewnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 characters").isLength({min: 5}),
  ],
  async (req, res) => {
    try {
      const {title, description, tag} = req.body;  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
        console.log(error);
        return res.status(403).send({ error: "Internal server error" });
    }
  }
);
module.exports = router;
