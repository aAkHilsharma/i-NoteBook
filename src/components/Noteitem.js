import React from 'react'

const Noteitem = (props) => {
    const {notes} = props;
    return (
        <div className='col-md-3 '>            
           <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{notes.title}</h5>
                    <p className="card-text">{notes.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem