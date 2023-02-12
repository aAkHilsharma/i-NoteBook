import React from "react";
import noteContext from "./NoteContext";

const NoteState = (props)=>{
    const state = {
        "name" : "Akhil",
        "class": "1a"
    }
    return(
    <noteContext.Provider value = {state} >
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState;