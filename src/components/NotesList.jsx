import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes, handleAdd, handleDelete, handleEdit}) => {
  return (
    <div className='notelist'>
        {notes.map(((note)=>
        <Note id={note.id} key={note.id} text={note.text} date={note.date} handleDelete={handleDelete} handleEdit={handleEdit}/>
        ))}
        <AddNote handleAdd={handleAdd} />
    </div>
  )
}

export default NotesList