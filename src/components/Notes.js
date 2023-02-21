import { useContext, useEffect, useRef } from "react";
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
    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
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