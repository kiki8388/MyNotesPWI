import React, { useState } from 'react';

export default function EditNote(props) {

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
  const editNote = () => {
    const note = {
      author: author,
      subject: subject,
      content: content,
      _id: props.id
    };
    props.onEdit(note);
  }
  
  return (
    <div className="note">
      <label>Wypełnij wszystkie pola, aby edycja się powiodła!</label><br></br><br></br>
      <label>Autor:</label>
        <input type="text" value={author} onChange={changeAuthorHandler} placeholder="Wprowadź nowe imię" />
        <label>Tytuł:</label>
        <input type="text" value={subject} onChange={changeSubjectHandler} placeholder="Wprowadź nowy temat notatki" />
        <label>Treść:</label>
        <input type="text" value={content} onChange={changeContentHandler} placeholder="Wprowadź nową treść notatki" />
      <div className="saveButtonLabel">
        <button onClick={() => editNote()}>Zapisz</button>
      </div>
    </div>
  );
}