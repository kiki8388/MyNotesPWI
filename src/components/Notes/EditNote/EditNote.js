import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditNote(props) {

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
      <label>{t('mess')}</label><br></br><br></br>
      <label>{t('author')}</label>
        <input type="text" value={author} onChange={changeAuthorHandler} placeholder={t('enterName')} />
        <label>{t('subject')}</label>
        <input type="text" value={subject} onChange={changeSubjectHandler} placeholder={t('enterSubject')} />
        <label>{t('content')}</label>
        <input type="text" value={content} onChange={changeContentHandler} placeholder={t('enterContent')} />
      <div className="saveButtonLabel">
        <button className="save" onClick={() => editNote()}>{t('save')}</button>
      </div>
    </div>
  );
}