import React, {useContext, useEffect} from "react"
import noteContext from "../context/notes/NoteContext"
const About = ()=>{
    const context = useContext(noteContext);
    useEffect(()=>{
        context.update();
        // eslint-disable-next-line
    }, [])
    return(
        <div>
            This is about {context.state.name} and {context.state.class};
        </div>
    )
}
export default About