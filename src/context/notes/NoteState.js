import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63e500b9cedd205178169ea6",
      user: "63e11cefe2dc450c4e6ec357",
      title: "Daily Routine",
      description:
        "Do these daily: gym, yoga, meditation, web development, data structures, rest",
      tag: "Development",
      date: "2023-02-09T14:18:33.886Z",
      __v: 0,
    },
    {
      _id: "63e50187dc7e63e6aca902a8",
      user: "63e11cefe2dc450c4e6ec357",
      title: "Daily Routine",
      description:
        "Do these daily: gym, yoga, meditation, web development, data structures, rest",
      tag: "Development",
      date: "2023-02-09T14:21:59.481Z",
      __v: 0,
    },
    {
      _id: "63e5fb18d8b74ca90e1e7ff1",
      user: "63e11cefe2dc450c4e6ec357",
      title: "Daily Routine",
      description:
        "Do these daily: gym, yoga, meditation, web development, data structures, rest",
      tag: "Development",
      date: "2023-02-10T08:06:48.093Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <noteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;