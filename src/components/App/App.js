import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';


function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const [menuIsOpened, setMenuIsOpened] = useState(false);

  function handleOpenMenu() {
    setMenuIsOpened(true);
    window.addEventListener('click', handleClosePopupWithOverlayClick);
  }

  function handleCloseMenu() {
    setMenuIsOpened(false);
    window.removeEventListener('click', handleClosePopupWithOverlayClick);
  }

  function handleClosePopupWithOverlayClick(evt) {
    if (evt.target.classList.contains('navigation__wrap')) {
      handleCloseMenu();
    }
  }

  return (
    <div className='app'>
      <Routes>
      
        <Route path='/' element={<Main
        loggedIn={loggedIn}
        menuIsOpened={menuIsOpened}
        openMenu={handleOpenMenu}
        closeMenu={handleCloseMenu}
         />} />

        <Route path='/movies' element={<Movies 
        loggedIn={loggedIn}
        menuIsOpened={menuIsOpened}
        openMenu={handleOpenMenu}
        closeMenu={handleCloseMenu}
        />} />

        <Route path='/saved-movies' element={<SavedMovies
        loggedIn={loggedIn}
        menuIsOpened={menuIsOpened}
        openMenu={handleOpenMenu}
        closeMenu={handleCloseMenu}
         />} />

        <Route path='/profile' element={<Profile
        loggedIn={loggedIn}
        menuIsOpened={menuIsOpened}
        openMenu={handleOpenMenu}
        closeMenu={handleCloseMenu}
         />} />
         
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<ErrorNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
