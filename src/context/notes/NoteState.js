import React, {useState} from "react";
import noteContext from "./NoteContext";

const NoteState = (props)=>{
    const s1 = {
        "name" : "WebDev",
        "class": "DevOps"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name" : "DevOps",
                "class" : "WebDev"
            })
        }, 1000);
    }
    return(
    <noteContext.Provider value = {{state: state, update: update}} >
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState;