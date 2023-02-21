import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
    const context = useContext(noteContext);
    const {getNotes} = context;
    const {notes, setNotes} = context; 
    useEffect(() => {
        getNotes();
    }, []) 
    const updateNote = ()=>{
        ref.current.click();
    }
    const ref = useRef(null)
    const [note, setNote] = useState({title:"", description:"", tag:"default"});
    const handleClick = (e)=>{
        e.preventDefault();
    }
    const onchange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value});
    }
    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="etitle"
                        name="etitle"
                        aria-describedby="emailHelp"
                        onChange={onchange}
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="edescription"
                        name="edescription"
                        onChange={onchange}
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                        Tag
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="etag"
                        name="etag"
                        onChange={onchange}
                    />
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Update Note</button>
                </div>
                </div>
            </div>
            </div>
        <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note)=>{
                    return <Noteitem key={note._id} note={note} updateNote={updateNote}/>;
                })}
        </div>
        </>
  )
}

export default Notes