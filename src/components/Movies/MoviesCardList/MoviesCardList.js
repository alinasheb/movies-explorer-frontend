import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

    function MoviesCardList({ 
        movies,
        isNotFound,
        isFailed,
        savedMovies,
        onSave,
        onDelete,
        checked,
        checkedSaveMovies,
        allSavedMovies }) {

        const [moviesToShowMore, setMoviesToShowMore] = useState(0);
        const [moviesShownDisplay, setMoviesShownDisplay] = useState(0);
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        const location = useLocation();

        const handleMoreMovies = () => {
          setMoviesShownDisplay((movies) => movies + moviesToShowMore);
        };

          const searchShortMovies = (movies) => {
            const searchShortMoviesArr = movies.slice(0);
            return searchShortMoviesArr.filter((item) => item.duration <= 40);
          };

          let saveMoviesFilterArr = !checkedSaveMovies
            ? searchShortMovies(savedMovies)
            : savedMovies;

          let moviesFilterArr = !checked ? searchShortMovies(movies) : movies;

          useEffect(() => {
            const handleWindowResize = () => {
              setWindowWidth(window.innerWidth);
            };


          if (location.pathname === '/movies') {
            if (windowWidth <= 480) {
              setMoviesShownDisplay(5);
              setMoviesToShowMore(1);
            } else if (windowWidth <= 893 && windowWidth > 480) {
              setMoviesShownDisplay(8);
              setMoviesToShowMore(2);
            } else if (windowWidth <= 1280 && windowWidth > 990) {
              setMoviesShownDisplay(12);
              setMoviesToShowMore(3);
            } else if (windowWidth > 1280) {
              setMoviesShownDisplay(16);
              setMoviesToShowMore(4);
            }
          }
          
          window.addEventListener('resize', handleWindowResize);
            return () => {
          window.removeEventListener('resize', handleWindowResize);
          };
        }, [windowWidth, location]);

        let classTextError = isFailed && !isNotFound ? 'movies-card-list__error_visible' : 'movies-card-list__error';

        let buttonMore =
        !(movies.length > 4) ||
        moviesShownDisplay >= movies.length ||
        moviesShownDisplay >= moviesFilterArr.length ? 'movies-card-list__button_hidden' : 'movies-card-list__button';

        let messageNotFound =
        isNotFound && moviesFilterArr.length === 0 ? 'movies-card-list__not-found_visible' : 'movies-card-list__not-found';

        let moviesBlock = location.pathname === '/movies';
        
    return(
        <section className='movies-card-list'>
          {moviesBlock ? (
          <>
            <ul className='movies-card-list__container'>{moviesFilterArr.slice(0, moviesShownDisplay).map((movie) => {
              return (
              <MoviesCard
                key={movie.id}
                name={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
                movie={movie}
                thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
                allSavedMovies={allSavedMovies}/>
                );
                })}
            <h2 className={messageNotFound}>{moviesFilterArr.length === 0 ? 'Ничего не найдено' : ''}</h2>
            <h2 className={classTextError}> {moviesFilterArr.length === 0 
            ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            : ''}
            </h2>
            </ul>
            <button className={buttonMore} type='button' onClick={handleMoreMovies}>Ещё</button>
          </>
          ) : (
            <ul className='movies-card-list__container'>
              {saveMoviesFilterArr.map((movie) => {
                return (
                  <MoviesCard
                    key={movie._id}
                    name={movie.nameRU}
                    duration={movie.duration}
                    trailerLink={movie.trailerLink}
                    thumbnail={movie.thumbnail}
                    savedMovies={savedMovies}
                    onSave={onSave}
                    onDelete={onDelete}
                    movie={movie}
                    allSavedMovies={allSavedMovies}/>
            );
          })}
              <h2 className={messageNotFound}>{savedMovies.length === 0 ? 'Ничего не найдено' : ''}</h2>
              <h2 className={classTextError}> {savedMovies.length === 0
                ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                : ''}
              </h2>
           </ul>
         )}
      </section>
  );
}

export default MoviesCardList;