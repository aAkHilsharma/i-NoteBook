import React from 'react'

const Noteitem = (props) => {
    const {notes} = props;
    return (
        <div>
            {notes.title}
            {notes.description}
        </div>
    )
}

export default Noteitem