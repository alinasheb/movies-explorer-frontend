import '../Form/Form.css';
import { Validator } from '../../utils/Validator';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register({ onRegister, isRegisterStatus, isRegisterSending }) {
  const validateInput = Validator();
  const { name, email, password } = validateInput.errors;
  const errorMessage = !validateInput.isValid ? 'form__error form__error_visible' : 'form__error';
  const errorButton = isRegisterStatus ? 'form__error form__error_visible' : 'form__error';

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = validateInput.values;
    onRegister(name, email, password);
    validateInput.resetForm();
  };
    return(
    <div className='form'>
      <Link to='/'><img src={logo} alt='Логотип' className='form__logo' /></Link> 
      <h2 className='form__title'>Добро пожаловать</h2>
      <form className='form__form' onSubmit={handleSubmit} noValidate action='#'>
        <label className='form__field'>
          <span className='form__label'>Имя</span>
          <input className='form__input'
                type='text' 
                name='name' 
                placeholder='Имя' 
                minLength='3' 
                maxLength='30'  
                pattern='[A-Za-zА-Яа-яЁё\s-]+'
                onChange={validateInput.handleChange}
                value={validateInput?.values?.name || ''}
                required/>
                <span className={errorMessage}>{name}</span>
        </label>

        <label className='form__field'>
          <span className='form__label'>E-mail</span>
          <input className='form__input' 
                type='email' 
                name='email' 
                placeholder='Email' 
                minLength='3' 
                maxLength='30' 
                required 
                autoComplete='off'
                pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                onChange={validateInput.handleChange}
                value={validateInput?.values?.email || ''}/>
          <span className={errorMessage}>{email}</span>
        </label>

        <label className='form__field'>
          <span className='form__label'>Пароль</span>
          <input className='form__input form__input_error' 
                type='password' 
                name='password' 
                placeholder='password' 
                minLength='5' 
                maxLength='30' 
                required 
                autoComplete='off'
                onChange={validateInput.handleChange}
                value={validateInput?.values?.password || ''}/>
                <span className={errorMessage}>{password}</span>
        </label>
        <span className={errorButton}>{isRegisterSending}</span>
        <button type='submit'className='form__button'disabled={!validateInput.isValid}>Зарегистрироваться</button>
        <p className='form__question'>Уже зарегистрированы?
        <Link to='/signin' className='form__link'>Войти</Link>
        </p>
    </form>
  </div>  
 );
}

export default Register;