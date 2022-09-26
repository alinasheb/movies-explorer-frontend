import './Form.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Form( { title, children, submit, question, road, link } ) {
    return(
        <section className='form'>
            <Link to='/'><img src={logo} alt='Логотип' className='form__logo' /></Link> 
            <h2 className='form__title'>{title}</h2>
            <form action='#' className='form__form'>
                <div className='form_element'>{children}</div>
                <button type='submit'className='form__button'>{submit}</button>
            </form>
            <p className='form__question'>
                {question}
                <Link to={road} className='form__link'>{link}</Link>
            </p>
        </section>
    )
}

export default Form;