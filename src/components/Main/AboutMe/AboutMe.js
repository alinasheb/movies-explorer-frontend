import './AboutMe.css';
import studentPhoto from '../../../images/studentPhoto.jpg';

function AboutMe() {
    return(
        <section className='about-me' id='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>Алина</h3>
                    <p className='about-me__profession'>Фронтенд-разработчик, 28 лет</p>
                    <p className='about-me__description'>Я живу в Москве, закончила факультет экономики РГАУ-МСХА им.Тимирязева. Я люблю слушать музыку и читать книги, особенно мне по душе творечество Дж.Р.Р. Толкина. Обучение начала год назад. Стараюсь посвящать учебе максимум времени, чтобы приобрести необходимые скиллы и в будущем найти классную работу.</p>
            <a href='https://github.com/alinasheb' target='_blank' className='about-me__link' rel='noreferrer'>Github</a>
                </div>
                <img src={studentPhoto} alt='Фото студента' className='about-me__photo' />
            </div>
        </section>
    );
}

export default AboutMe;