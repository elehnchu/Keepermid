import React from "react";

function Note(props) {
  return (
    <div className="note">
      <ul>
        <h1>
          <span className="title"> {props.title}</span>
        </h1>
        <p>
          <span className="notes"> {props.content} </span>
        </p>
        <button onClick={props.onClick}> delete </button>
      </ul>
    </div>
  );
}

export default Note;
