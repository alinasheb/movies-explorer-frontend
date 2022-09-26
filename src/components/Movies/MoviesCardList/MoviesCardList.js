import './MoviesCardList.css';
import moviesDate from '../../../utils/moviesDate';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';

    function MoviesCardList({ type, size }) {
        const [movies, setMovies] = useState([]);

        useEffect(() => {
            if (size === 3) return setMovies(moviesDate.slice(0, 3));
            const windowSize = window.innerWidth;
            if (windowSize <= 350) {
              return setMovies(moviesDate.slice(0, 5));
            } else if (windowSize <= 780) {
              return setMovies(moviesDate.slice(0, 8));
            } else {
              return setMovies(moviesDate);
            }
          }, [moviesDate]);

    let hiddenButton = `movies-card-list__button ${
        type === 'save' ? 'movies-card-list__button_hidden' : ''}`;
    return(
        <section className='movies-card-list'>
            <ul className='movies-card-list__container'>
                {movies.map((movie) => {
                    return (
                        <MoviesCard
                        key={movie.id}
                        name={movie.title}
                        duration={movie.duration}
                        image={movie.image}
                        type={type}
                        />
                    );
                })}
            </ul>
            <button className={hiddenButton} type='button'>Ещё</button>
        </section>
         
    );
}

export default MoviesCardList;