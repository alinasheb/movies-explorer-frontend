import './Footer.css';

function Footer() {
    return(
        <footer className='footer'>
            <p className='footer__copyright'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info'>
                <p className='footer__date'>© 2022</p>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <a href='https://practicum.yandex.ru' target='_blank' rel='noreferrer' className='footer__link'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__item'>
                        <a href='https://github.com/alinasheb' target='_blank' rel='noreferrer' className='footer__link'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

export default Footer;