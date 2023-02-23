
import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];


  const [notes, setNotes] = useState(notesInitial);
  
  //fetch all notes
  const getNotes = async(title, description, tag)=>{
    //TODO api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlMTFjZWZlMmRjNDUwYzRlNmVjMzU3In0sImlhdCI6MTY3NTc1Mjk5NH0.2i92gHsvunrS73wf-WOkZSZqgT3awXC85laLUD3wVMk"
      },
    });
    const json = await response.json();
    setNotes(json);
  } 
  
  // add note
  const addNote = async(title, description, tag)=>{
    //TODO api call
    const response = await fetch(`${host}/api/notes/addnewnote`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlMTFjZWZlMmRjNDUwYzRlNmVjMzU3In0sImlhdCI6MTY3NTc1Mjk5NH0.2i92gHsvunrS73wf-WOkZSZqgT3awXC85laLUD3wVMk"
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  }
  // delete note
  const deleteNote = async (id)=>{
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlMTFjZWZlMmRjNDUwYzRlNmVjMzU3In0sImlhdCI6MTY3NTc1Mjk5NH0.2i92gHsvunrS73wf-WOkZSZqgT3awXC85laLUD3wVMk"
      },
    });
    const json = await response.json(); 
    const newNotes = notes.filter((note)=>{return note._id!== id});
    setNotes(newNotes);
  }
  // edit note
  const editNote = async(id, title, description, tag)=>{
    //TODO API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlMTFjZWZlMmRjNDUwYzRlNmVjMzU3In0sImlhdCI6MTY3NTc1Mjk5NH0.2i92gHsvunrS73wf-WOkZSZqgT3awXC85laLUD3wVMk"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 

    let newNote = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for(let i=0; i<newNote.length; i++){
      const element = newNote[i];
      if(element._id === id){
        newNote[i].title = title;
        newNote[i].description = description;
        newNote[i].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  } 
  return (
    <noteContext.Provider value={{notes,setNotes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
