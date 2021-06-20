import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Note(props) {

  const [showContent, setShowContent] = useState(false);
  const {t} = useTranslation();

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
      <p>{t('author')} {props.author}</p>
      <p>{t('subject')} {props.subject}</p>
      <p1 onClick={toggleContent}>{t('show')}</p1>
      {showContent && (
       <p> <div className="Contentription">{t('content')} {props.content}</div> </p>
      )}
      <div className="buttons">
        <button onClick={editHandler} >{t('edit')}</button>
        <button className="delete" onClick={() => props.onDelete(props.id)}>{t('delete')}</button>
      </div>
    </div>
  );
}

export default Note;