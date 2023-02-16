import React, {useContext} from "react"
import noteContext from "../context/notes/NoteContext";


export default function Home(){
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return(
        <div>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="container my-3">
                <h2>Your Notes</h2>
                {notes.map((note)=>{
                    return note.title;
                })}
            </div>
        </div>
    )
}