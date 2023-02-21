import React, {useState, useContext, useEffect} from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote, getNotes} = context;
    const [note, setNote] = useState({title:"", description:"", tag:"default"});
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onchange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value});
    }
    useEffect(() => {
      getNotes();
    }, [])
    

  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
