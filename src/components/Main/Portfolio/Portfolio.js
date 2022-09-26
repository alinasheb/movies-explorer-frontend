import './Portfolio.css';
import linkPortfolio from '../../../images/linkPortfolio.svg';

function Portfolio() {
    return(
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a href='https://alinasheb.github.io/russian-travel/' className='portfolio__link' target='_blank' rel='noreferrer'>Статичный сайт</a>
                    <img src={linkPortfolio} alt ='Стрелочка' className='portfolio__arrow' />
                </li>
                <li className='portfolio__item'>
                    <a href='https://alinasheb.github.io/russian-travel/' className='portfolio__link' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
                    <img src={linkPortfolio} alt ='Стрелочка' className='portfolio__arrow' />
                </li>
                <li className='portfolio__item'>
                    <a href='https://travel.story.nomoredomains.sbs/sing-in' className='portfolio__link' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
                    <img src={linkPortfolio} alt ='Стрелочка' className='portfolio__arrow' />
                </li>   
            </ul>
        </section>

    );
}

export default Portfolio;