import './Register.css';
import Form from '../Form/Form';

function Register() {
    return(
        <Form
        title='Добро пожаловать!'
        submit='Зарегистрироваться'
        question='Уже зарегистрированы?'
        link='Войти'
        road='/signin'>
            <label className='form__field'>
                    <span className='form__label'>Имя</span>
                    <input className='form__input' type='text' name='text' placeholder='Имя' minLength='3' maxLength='30' required />
                </label>

                <label className='form__field'>
                    <span className='form__label'>E-mail</span>
                    <input className='form__input' type='email' name='email' placeholder='Email' minLength='3' maxLength='30' required />
                </label>

                <label className='form__field'>
                    <span className='form__label'>Пароль</span>
                    <input className='form__input form__input_error' type='password' name='password' placeholder='password' minLength='5' maxLength='30' required />
                    <span className='form__error'>Что-то пошло не так...</span>
                </label>


        </Form>
        
        
    );
}

export default Register;