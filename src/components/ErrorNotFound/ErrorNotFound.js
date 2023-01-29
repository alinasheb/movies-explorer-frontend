import { Link } from 'react-router-dom';
import './ErrorNotFound.css';

function ErrorNotFound() {
    return(
        <section className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__subtitle'>Страница не найдена</p>
            <Link to={-1} className='not-found__button'>Назад</Link>
        </section>
    )
}

export default ErrorNotFound;