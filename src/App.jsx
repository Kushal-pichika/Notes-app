import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Load notes for the current user from localStorage when the app starts or when the user changes
  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    const savedUser = localStorage.getItem('currentUser');

    if (loggedIn && savedUser) {
      setIsLoggedIn(true);
      setCurrentUser(savedUser);

      const savedNotes = JSON.parse(localStorage.getItem(`notes-${savedUser}`)) || [];
      setNotes(savedNotes);
    }
  }, [currentUser]);

  // Save notes for the current user to localStorage whenever they change
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`notes-${currentUser}`, JSON.stringify(notes));
    }
  }, [notes, currentUser]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText, date: new Date().toLocaleString() } : note
      )
    );
  };

  return (
    <Router>
      <div className={`${darkMode && 'darkmode'}`}>
        <div className='container'>
          <Header
            darkMode={setDarkMode}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setCurrentUser={setCurrentUser}
          />
          <Routes>
            <Route path="/" element={<Navigate to={isLoggedIn ? "/notes" : "/login"} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/notes" element={
              isLoggedIn ? (
                <>
                  <Search handleSearch={setSearch} />
                  <NotesList
                    notes={notes.filter((note) => note.text.toLowerCase().includes(search))}
                    handleEdit={editNote}
                    handleAdd={addNote}
                    handleDelete={deleteNote}
                  />
                </>
              ) : (
                <Navigate to="/login" />
              )
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
