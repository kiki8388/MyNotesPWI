import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function NewNote(props) {

  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const {t} = useTranslation();

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
          <label>{t('author')}</label>
          <input type="text" value={author} onChange={changeAuthorHandler} placeholder={t('enterName')}/>
          <label>{t('subject')}</label>
          <input type="text" value={subject} onChange={changeSubjectHandler} placeholder={t('enterSubject')}/>
          <label>{t('content')}</label>
          <input type="text" value={content} onChange={changeContentHandler} placeholder={t('enterContent')}/>
          <div className="addButtonLabel">
            <button className="add" onClick={() => addNote()}>{t('add')}</button>
          </div>
        </div>
      </div>
    ) : (
      <button className="newNoteButton" onClick={() => setShowForm(true)}>{t('newNote')}</button>
    )
  );
}

export default NewNote;