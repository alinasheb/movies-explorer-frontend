import '../Form/Form.css';
import { Validator } from '../../utils/Validator';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login({ onLogin, isLoginSending, isLoginStatus }) {
    const validateInput = Validator();
    const { email, password } = validateInput.errors;
    const errorMessage = !validateInput.isValid ? 'form__error form__error_visible' : 'form__error';
    const errorButton = isLoginStatus ? 'form__error form__error_visible' : 'form__error';

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = validateInput.values;
        onLogin(email, password);
        validateInput.resetForm();
      };

    return(
        <div className='form'>
          <Link to='/'><img src={logo} alt='Логотип' className='form__logo' /></Link> 
          <h2 className='form__title'>Рады видеть!</h2>
          <form className='form__form' onSubmit={handleSubmit} noValidate action='#'>
            <label className='form__field'>
              <span className='form__label'>E-mail</span>
              <input className='form__input'
                  type='email' 
                  autoComplete='off' 
                  name='email'
                  placeholder='Email'
                  minLength='3'
                  maxLength='30'  
                  pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                  onChange={validateInput.handleChange}
                  value={validateInput?.values?.email || ''}
                  required/>
                  <span className={errorMessage}>{email}</span>
            </label>

            <label className='form__field form__field_last'>
              <span className='form__label'>Пароль</span>
              <input className='form__input form__input_error'
                    type='password' 
                    autoComplete='off'
                    name='password'
                    placeholder='Пароль'
                    minLength='5'
                    maxLength='30'
                    required 
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.password || ''}/>
                    <span className={errorMessage}>{password}</span>
              </label>
              <span className={errorButton}>{isLoginSending}</span>
              <button type='submit' className='form__button' disabled={!validateInput.isValid}>Войти</button>
              <p className='form__question'>Ещё не зарегистрированы?
              <Link to='/signup' className='form__link'>Регистрация</Link>
              </p>
          </form>
      </div>
    );
}

export default Login;