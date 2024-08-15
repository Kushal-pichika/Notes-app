// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ darkMode, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');  // Remove login flag from local storage
    setIsLoggedIn(false);
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className='header'>
      <h1>NOTES</h1>
      <button onClick={() => darkMode((prevDarkMode) => !prevDarkMode)} className='toggle'>
        Toggle Mode
      </button>
      {isLoggedIn && (
        <button onClick={handleLogout} className='logout'>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
