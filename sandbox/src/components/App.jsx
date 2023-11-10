import React, { useState } from "react";
import Header from "./header.jsx";
import Note from "./note.jsx";
import Footer from "./footer.jsx";
import notes from "./notes.js";

function App() {

  const [newNote, setNewNote] = useState({
    content: "",
    title: "",
  });
  // state, function
  const [notesArray, setNotesArray] = useState([]);
  const deleteNote = (title) => {
    const filteredNotes = notesArray.filter((note) => note.title !== title);
    setNotesArray(filteredNotes);
  };

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setNewNote((prevValue) => {
      if (inputName === "title") {
        return {
          title: newValue,
          content: prevValue.note,
        };
      } else if (inputName === "content") {
        return {
          title: prevValue.title,
          content: newValue,
        };
      }
    });
  }

  function addItem(event) {
    event.preventDefault();
    setNotesArray([...notesArray, newNote]);
    setNewNote({
      content: "",
      title: "",
    });
  }
  return (
    <div>
      <Header />
      <div className="createNote">
        <form className="myform">
          <textarea
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={newNote.title}
          />
          <textarea
            name="content"
            placeholder="Take a Note..."
            onChange={handleChange}
            value={newNote.content}
          />
          <button onClick={addItem}> Add </button>
        </form>
        <div>
          {notesArray.map((pass) => (
            <div key={pass.title}>
              <Note
                title={pass.title}
                content={pass.content}
                onClick={() => deleteNote(pass.title)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
