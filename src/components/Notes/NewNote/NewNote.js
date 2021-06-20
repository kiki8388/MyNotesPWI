import React, { useState } from 'react';

function NewNote(props) {

  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const changeAuthorHandler = event => {
    const value = event.target.value;
    setAuthor(value);
  }  
  const changeSubjectHandler = event => {
    const value = event.target.value;
    setSubject(value);
  }  
  const changeContentHandler = event => {
    const value = event.target.value;
    setContent(value);
  }
  const addNote = () => {
    const note = {
      author: author,
      subject: subject,
      content: content
    };
    props.onAdd(note);

    setAuthor('');
    setSubject('');
    setContent('');
    setShowForm(false);
  }

  return (
    showForm ? (
      <div className="addNoteContainer">
        <div className="note">
          <label>Autor:</label>
          <input type="text" value={author} onChange={changeAuthorHandler} placeholder="Wprowadź swoje imię"/>
          <label>Tytuł:</label>
          <input type="text" value={subject} onChange={changeSubjectHandler} placeholder="Wprowadź temat notatki"/>
          <label>Treść:</label>
          <input type="text" value={content} onChange={changeContentHandler} placeholder="Wprowadź treść notatki"/>
          <div className="addButtonLabel">
            <button className="add" onClick={() => addNote()}>Dodaj notatkę</button>
          </div>
        </div>
      </div>
    ) : (
      <button className="newNoteButton" onClick={() => setShowForm(true)}>Stwórz nową notatkę</button>
    )
  );
}

export default NewNote;