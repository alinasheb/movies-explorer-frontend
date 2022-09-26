import './MoviesCard.css';


function MoviesCard({name, duration, image, type}) {
    let buttonClassName = `movies-card__button ${type === 'save' ? 'movies-card__button_delete' : ''}`;
    return(
        <div className='movies-card'>
            <button type='button' className={buttonClassName}>Сохранить</button>
            <img src={image} alt={name} className='movies-card__image' />
            <div className='movies-card__info'>
                <h3 className='movies-card__name'>{name}</h3>
                <p className='movies-card__duration'>{duration}</p>
            </div>
        </div>
    );
}

export default MoviesCard;