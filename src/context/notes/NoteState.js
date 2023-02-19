import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "63es500b9cedd205178169ea6",
      "user": "63e11cefe2dc450c4e6ec357",
      "title": "Daily Routine",
      "description":
        "Do these daily: gym, yoga, meditation, web development, data structures, rest",
      "tag": "Development",
      "date": "2023-02-09T14:18:33.886Z",
      "__v": 0,
    },
    {
      "_id": "63e50187dc7e6d3e6aca902a8",
      "user": "63e11cefe2dc450c4e6ec357",
      "title": "Daily Routine",
      "description":
        "Do these daily: gym, yoga, meditation, web development, data structures, rest",
      "tag": "Development",
      "date": "2023-02-09T14:21:59.481Z",
     "__v": 0,
    }
  ];
  const [notes, setNotes] = useState(notesInitial);
  // add note
  const addNote = (title, description, tag)=>{
    //TODO api call
    const note = {
      "_id": "63e5fb18d8ab74ca90e1e7ff1",
      "user": "63e11cefe2dc450c4e6ec357",
      "title": "Daily Routine ADDED",
      "description":
        "Do these daily: gym, yoga, meditation, web development, data structures, rest",
      "tag": "Development",
      "date": "2023-02-10T08:06:48.093Z",
      "__v": 0,
    }
    setNotes(notes.concat(note));
  }
  // delete note
  const deleteNote = ()=>{

  }
  // edit note
  const editNote = ()=>{

  } 
  return (
    <noteContext.Provider value={{notes,setNotes, addNote, deleteNote, editNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
