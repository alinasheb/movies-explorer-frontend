import './MoviesCard.css';
import { useLocation } from 'react-router-dom';


function MoviesCard({name, duration, thumbnail, trailerLink, savedMovies, onSave, onDelete, movie, allSavedMovies }) {
      const location = useLocation();
      
      const isSaved = savedMovies.some((m) => m.movieId === movie.id);
      const isAllSaved = allSavedMovies.some((m) => m.movieId === movie.id);

      let addButton = isSaved || isAllSaved ? 'movies-card__button movies-card__button_save' : 'movies-card__button';

      const handleSaveClick = () => {
        if (isSaved) {
          onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
        } else {
          onSave(movie);
        }
      };
    
      const handleDeleteMovie = () => onDelete(movie);

      let hours = Math.floor(duration / 60);
      let minutes = Math.floor(duration - hours * 60); 

    return(
        <div className='movies-card'>
          <a href={trailerLink} className='movies-card__trailer-link' target='_blank' rel='noreferrer'>
            <img src={thumbnail} alt={name} className='movies-card__image' />
          </a>
          <div className='movies-card__info'>
            <h3 className='movies-card__name'>{name}</h3>
            <div className='movies-card__duration'>{hours}ч{minutes}м</div>
          </div>
          {location.pathname === '/movies' 
          && (<button className={addButton} type='button' onClick={handleSaveClick}>Сохранить</button>)}
          {location.pathname === '/saved-movies' 
          && (<button className='movies-card__button movies-card__button_delete'type='button'onClick={handleDeleteMovie}></button>
          )}
        </div>
    );
}

export default MoviesCard;