import './AboutProject.css';

function AboutProject() {
    return(
        <section className='about-project' id='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <ul className='about-project__list'>
                <li className='about-project__item'>
                    <h3 className='about-project__item-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__item-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className='about-project__item'>
                    <h3 className='about-project__item-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__item-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about-project__progress">
                <div className='about-project__progress-time about-project__progress-time-green'>1 неделя</div>
                <div className='about-project__progress-time about-project__progress-time-gray'>4 недели</div>
                <p className='about-project__progress-tech'>Back-end</p>
                <p className='about-project__progress-tech'>Front-end</p>
            </div>
        </section>

    );
}

export default AboutProject;