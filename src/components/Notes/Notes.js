import React from 'react';
import './Notes.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';
import EditNote from './EditNote/EditNote';
import Modal from 'react-modal';
import axios from '../../axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import i18next from 'i18next';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      showEditModal: false,
      editNote: {}
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes() {
    const res = await axios.get('/notes');
    const notes = res.data;
    this.setState({ notes });
  }

  async deleteNote(id) {
    const notes = [...this.state.notes]
                    .filter(note => note._id !== id);
    await axios.delete('/notes/' + id);
    this.setState({ notes });
  }

  async addNote(note) {
    const notes = [...this.state.notes];
    try {
      const res = await axios.post('/notes', note);
      const newNote = res.data;
      notes.push(newNote);
      this.setState({ notes });
    } catch (err) {
      NotificationManager.error("Musisz wypełnić wszystkie pola!/You must fill all the fields!");
    }
  }

  async editNote(note) {
    await axios.put('/notes/' + note._id, note);
    const notes = [...this.state.notes];
    const index = notes.findIndex(x => x._id === note._id);
    if (index >= 0) {
      notes[index] = note;
      this.setState({ notes });
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  }

  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note });
  }

  render() {
    return (
    <div className="mainNotes">
      <NotificationContainer />

      <div class="header-div">
        <span style={{color:'#ff0000'}}>M</span>
        <span style={{color:'#ffd900'}}>y</span>
        <span style={{color:'#48FF00'}}>N</span>
        <span style={{color:'#00FF91'}}>o</span>
        <span style={{color:'#0091FF'}}>t</span>
        <span style={{color:'#4800FF'}}>e</span>
        <span style={{color:'#FF00DA'}}>s</span>
      </div>

      <div className="languages">
        <button className="pl" onClick={() => i18next.changeLanguage('pl')}></button>
        <button className="en" onClick={() => i18next.changeLanguage('en')}></button>
      </div>

      <NewNote
        onAdd={(note) => this.addNote(note)} />

      <Modal className="editContainer"
        isOpen={this.state.showEditModal}
        contentLabel="Edytuj notatkę" >
            <EditNote
              author={this.state.editNote.author}
              subject={this.state.editNote.subject}
              content={this.state.editNote.content}
              id={this.state.editNote._id}
              onEdit={note => this.editNote(note)} />
              <div className="cancelButtonLabel">
                <button className="cancel" onClick={() => this.toggleModal()}>Cancel/Anuluj</button>
              </div>
      </Modal>

      {this.state.notes.map(note => (
        <Note 
          key={note._id}
          author={note.author}
          subject={note.subject}
          content={note.content}
          id={note._id}
          onEdit={(note) => this.editNoteHandler(note)}
          onDelete={(id) => this.deleteNote(id)} />
      ))}

    </div>
    );
  }
}

export default Notes;