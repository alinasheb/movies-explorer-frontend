import './Login.css';
import Form from '../Form/Form';

function Login() {
    return(
        <Form
        title='Рады видеть!'
        submit='Войти'
        question='Ещё не зарегистрированы?'
        link='Регистрация'
        road='/signup'>
            <label className='form__field'>
                    <span className='form__label'>E-mail</span>
                    <input className='form__input' type='email' autoComplete='off' name='email' placeholder='Email' minLength='3' maxLength='30' required />
                </label>

                <label className='form__field form__field_last'>
                    <span className='form__label'>Пароль</span>
                    <input className='form__input' type='password' autoComplete='off'name='password' placeholder='Пароль' minLength='5' maxLength='30' required />
                </label>
        </Form>

    );
}

export default Login;