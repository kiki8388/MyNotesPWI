import React, { useState } from 'react';

function Note(props) {

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  }
  const editHandler = () => {
    props.onEdit({ 
      author: props.author, 
      subject: props.subject, 
      content: props.content, 
      _id: props.id 
    });
  }

  return (
    <div className="note">
      <p>Autor: {props.author}</p>
      <p>Temat: {props.subject}</p>
      <p1 onClick={toggleContent}>Pokaż/ukryj treść</p1>
      {showContent && (
       <p> <div className="Contentription">Treść: {props.content}</div> </p>
      )}
      <div className="buttons">
        <button onClick={editHandler} >Edytuj</button>
        <button className="delete" onClick={() => props.onDelete(props.id)}>Usuń</button>
      </div>
    </div>
  );
}

export default Note;