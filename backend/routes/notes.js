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
// Route 3: Update note: "api/notes/updatenote" Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const {title, description, tag} = req.body;
    const newNote = {};
    
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};
    
    let note = await Notes.findById(req.params.id);
    
    if(!note){return res.status(404).send("Not found")};
    if(note.user.toString() !== req.user.id){
        return res.status(401).send({error: "Unauthorized access"});
    }
    
    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
    res.json(note);
  });

// Route 4: Delete an existing note: "api/notes/deletenote" Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  const {title, description, tag} = req.body;

  //Finding the note 
  let note = await Notes.findById(req.params.id);
  if(!note){return res.status(404).send("Not found")};

  //Allow deletion only if user owns the note
  if(note.user.toString() !== req.user.id){
      return res.status(401).send({error: "Unauthorized access"});
  }
  
  note = await Notes.findByIdAndDelete(req.params.id);
  res.json({"success": "Note has been deleted successfully!"});
});

module.exports = router;
