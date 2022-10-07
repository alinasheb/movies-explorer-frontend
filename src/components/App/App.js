import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as apiAuth from '../../utils/ApiAuth';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import './App.css';


function App() {
 
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isRegisterStatus, setIsRegisterStatus] = useState(false);
  const [isRegisterSending, setIsRegisterSending] = useState(false);
  const [isLoginStatus, setIsLoginStatus] = useState(false);
  const [isLoginSending, setIsLoginSending] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [checked, setChecked] = useState(true);
  const [checkedSaveMovies, setCheckedSaveMovies] = useState(true);
  const [isMessageProfile, setIsMessageProfile] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [allSavedMovies, setAllSavedMovies] = useState([]);

  const handleOpenMenu = () => {
    setMenuIsOpened(true);
    window.addEventListener('click', handleClosePopupWithOverlayClick);
  }

  const handleCloseMenu = () =>  {
    setMenuIsOpened(false);
    window.removeEventListener('click', handleClosePopupWithOverlayClick);
  }

  const handleClosePopupWithOverlayClick = (evt) => {
    if (evt.target.classList.contains('navigation__wrap')) {
    handleCloseMenu();
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      
      apiAuth.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.error(`Данные пользователя не получены: ${err}`);
        });
       if (JSON.parse(localStorage.getItem('filteredMovies'))) {
       setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
         setChecked(JSON.parse(localStorage.getItem('checkbox')));
         setCheckedSaveMovies(
           JSON.parse(localStorage.getItem('checkboxSaveMovies'))
         );
     }
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getMovies(jwt)
        .then((data) => {
          setSavedMovies(data.filter((i) => i.owner === currentUser._id));
          //console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
      
    }
  }, [currentUser]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      apiAuth
        .checkToken(jwt)
        .then((res) => {
          //console.log(res);
          if (res) {
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          onSignOut();
          console.error(err);
        });
    }
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeCheckbox = (evt) => {
    if (location.pathname === '/movies') {
      setChecked(!checked);
      localStorage.setItem('checkbox', !checked);
    } else if (location.pathname === '/saved-movies') {
      setCheckedSaveMovies(!checkedSaveMovies);
      localStorage.setItem('checkboxSaveMovies', !checkedSaveMovies);
    }
  };

  const searchMovies = (movies, name) => {
    return movies.filter((item) =>
      item.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  const handleSearchMovies = (name) => {
    if (!JSON.parse(localStorage.getItem('allMovies'))) {
      moviesApi
        .getAllMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
        })
        .then(() => {
          setIsLoading(true);
          const searchArr = searchMovies(
            JSON.parse(localStorage.getItem('allMovies')),
            name
          );
          setMovies(searchArr);
          setIsNotFound(!movies.length && !isFailed);
          localStorage.setItem('filteredMovies', JSON.stringify(searchArr));
          localStorage.setItem('searchQuery', name);
          localStorage.setItem('checkbox', checked);
          setTimeout(() => setIsLoading(false), 1000);
        })
        .catch((err) => {
          setIsFailed(true);
          console.log(err);
        });
        } else if (JSON.parse(localStorage.getItem('allMovies'))) {
         setIsLoading(true);
         const searchArr = searchMovies(
         JSON.parse(localStorage.getItem('allMovies')),
         name
        );
        setMovies(searchArr);
        setIsNotFound(!movies.length || !isFailed);
        localStorage.setItem('filteredMovies', JSON.stringify(searchArr));
        localStorage.setItem('searchQuery', name);
        localStorage.setItem('checkbox', checked);
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

  const handleSearchSavedMovies = (name) => {
    setIsLoading(true);
    mainApi
      .getMovies()
      .then((movies) => {
        setAllSavedMovies(movies);
        localStorage.setItem('checkboxSaveMovies', checkedSaveMovies);
        const userSavedMovies = movies.filter((movie) => {
          return movie.owner === currentUser._id;
        });
        const searchArr = searchMovies(userSavedMovies, name);
        setSavedMovies(searchArr);
       setIsNotFound(!searchArr.length && !isFailed);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch((err) => console.log(err));
      const searchArr = searchMovies(allSavedMovies, name);
      setSavedMovies(searchArr);
      setIsNotFound(!searchArr.length || !isFailed);
      setTimeout(() => setIsLoading(false), 1000);
  };

  const handleRegister = (name, email, password) => {
    apiAuth
      .register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
        }
        setIsRegisterStatus(false);
      })
      .catch((err) => {
        err.status !== 400
          ? setIsRegisterSending('Пользователь с таким email уже зарегистрирован')
          : setIsRegisterSending(
              'При регистрации пользователя произошла ошибка.'
            );
            setIsRegisterStatus(true);
      });
  };

  const handleLogin = (email, password) => {
    apiAuth
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsLoginStatus(false);
          apiAuth.checkToken(res.token).then((res) => {
            if (res) {
              setTimeout(() => navigate('/movies'), 800);
              setLoggedIn(true);
            }
          });
        }
      })
      .catch((err) => {
        if (err.includes(401)) {
          setIsLoginSending('Вы ввели неправильный логин или пароль.');
        }
        setIsLoginStatus(true);
      });
  };

  const onUpdateUser = (name, email) => {
    apiAuth
      .updateUserInfo(name, email)
      .then((data) => {
        setIsMessageProfile(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => setIsMessageProfile(false), 1000);
      });
  };

  const onSignOut = () => {
    localStorage.clear();
    navigate('/');
    setLoggedIn(false);
    setCurrentUser({});
    setIsRegisterStatus(false);
    setIsRegisterSending(false);
    setIsLoginSending(false);
    setIsLoginStatus(false);
    setIsLoading(false);
    setIsFailed(false);
    setMovies([]);
    setSavedMovies([]);
    setChecked(true);
    setCheckedSaveMovies(true);
   setIsNotFound(false);
  };

    
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <Main
            loggedIn={loggedIn}
            menuIsOpened={menuIsOpened}
            openMenu={handleOpenMenu}
            closeMenu={handleCloseMenu}
          />} 
        />

        <Route path='/movies'  element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies 
              loggedIn={loggedIn}
              menuIsOpened={menuIsOpened}
              openMenu={handleOpenMenu}
              closeMenu={handleCloseMenu}
              onSubmit={handleSearchMovies}
              movies={movies}
              isLoading={isLoading}
              isFailed={isFailed}
              isNotFound={isNotFound}
              searchQuery={localStorage.getItem('searchQuery')}
              onCheckbox={handleChangeCheckbox}
              checked={checked}
              checkedSaveMovies={checkedSaveMovies}
              savedMovies={savedMovies}
              onSave={handleSaveMovie}
              onDelete={handleDeleteMovie}
              allSavedMovies={allSavedMovies}/>
          </ProtectedRoute>}
        />

        <Route path='/saved-movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies
              loggedIn={loggedIn}
              menuIsOpened={menuIsOpened}
              openMenu={handleOpenMenu}
              closeMenu={handleCloseMenu}
              onSubmit={handleSearchSavedMovies}
               movies={movies}
              isLoading={isLoading}
              isFailed={isFailed}
              isNotFound={isNotFound}
              searchQuery={localStorage.getItem('searchQuery')}
              onCheckbox={handleChangeCheckbox}
              checked={checked}
              checkedSaveMovies={checkedSaveMovies}
              savedMovies={savedMovies}
               onSave={handleSaveMovie}
              onDelete={handleDeleteMovie}
              allSavedMovies={allSavedMovies}/>
          </ProtectedRoute>} 
        />

        <Route path='/profile' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Profile
              loggedIn={loggedIn}
              menuIsOpened={menuIsOpened}
              openMenu={handleOpenMenu}
              closeMenu={handleCloseMenu}
              onUpdateUser={onUpdateUser}
              onSignOut={onSignOut}
              isMessageProfile={isMessageProfile}/> 
          </ProtectedRoute>}
        />
         
        <Route path='/signup' element={
          <Register 
            onRegister={handleRegister}
            isRegisterStatus={isRegisterStatus}
            isRegisterSending={isRegisterSending}/>
            }
        />

        <Route path='/signin' element={
          <Login 
            onLogin={handleLogin}
            isLoginSending={isLoginSending}
            isLoginStatus={isLoginStatus}/>
            } 
        />

        <Route path='*' element={
          <ErrorNotFound />
          } 
        />
      </Routes>
    </div>
  </CurrentUserContext.Provider>
  );
}
    
export default App;
