import './Profile.css';
import Header from '../Header/Header';
import { useState, useContext } from 'react';
import { Validator } from '../../utils/Validator';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function Profile({ loggedIn, menuIsOpened, openMenu, closeMenu,  onUpdateUser, onSignOut, isMessageProfile }) {
    const currentUser = useContext(CurrentUserContext);
    const [isEditProfile, setIsEditProfile] = useState(true);
    const validateInput = Validator();
    const { nameErr, emailErr } = validateInput.errors;
    const errorMessage = !validateInput.isValid ? 'profile__error profile__error_visible' : 'profile__error';

    const toggleInput = (e) => {
        e.preventDefault();
        console.log(isEditProfile);

        setIsEditProfile((state) => !state);
      };

    let disableUserCurrentCheck =
    (currentUser.name === validateInput?.values?.name &&
      typeof validateInput?.values?.email === 'undefined') ||
    (currentUser.email === validateInput?.values?.email &&
      typeof validateInput?.values?.email === 'undefined');
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = validateInput.values;
        if (!name) {
          onUpdateUser(currentUser.name, email);
        } else if (!email) {
          onUpdateUser(name, currentUser.email);
        } else {
          onUpdateUser(name, email);
        }
        setTimeout(() => setIsEditProfile((state) => !state), 1000);
       validateInput.resetForm();
      };

      let classNameMessageBtn = isMessageProfile ? 'profile__button-msg' : 'profile__button-msg profile__button-msg_hidden';


    return(
    <div className='profile'>
      <Header 
        loggedIn={loggedIn}
        profileActive={true}
        menuIsOpened={menuIsOpened}
        openMenu={openMenu}
        closeMenu={closeMenu}/>
       
       <form action='#' className='profile__form' onSubmit={handleSubmit} noValidate>
        <h2 className='profile__title'> Привет, {currentUser.name}!</h2> 
        <label className='profile__field profile__field_line'>
          <span className='profile__label'>Имя</span>
          <input className='profile__input'
                type='text' 
                name='name' 
                placeholder={currentUser.name}
                pattern='[A-Za-zА-Яа-яЁё\s-]+'
                onChange={validateInput.handleChange}
                value={validateInput?.values?.name ?? currentUser.name}
                {...(!isEditProfile ? {} : { disabled: true })}
                minLength='3' 
                maxLength='30' 
                required='{true}'/>
        </label>
        <span className={errorMessage}>{nameErr}</span>

        <label className='profile__field'>
          <span className='profile__label'>E-mail</span>
          <input className='profile__input profile__input_placeholder'
                type='email' 
                name='email' 
                minLength='3' 
                maxLength='30' 
                required='{true}'
                placeholder={currentUser.email}
                pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                onChange={validateInput.handleChange}
                value={validateInput?.values?.email ?? currentUser.email}
                {...(!isEditProfile ? {} : { disabled: true })} />
        </label>
        <span className={errorMessage}>{emailErr}</span>
        {!isEditProfile && (
          <>
            <span className={classNameMessageBtn}>Данные успешно изменены!</span>
            <button className='profile__save' disabled={disableUserCurrentCheck || !validateInput.isValid}>Сохранить</button>
          </>
        )}
        {isEditProfile && (
          <ul className='profile__list'>
            <li className='profile__caption'>
              <button className='profile__question' onClick={toggleInput}>Редактировать</button>
            </li>
            <li className='profile__caption'>
              <button className='profile__log' onClick={onSignOut}>Выйти из аккаунта</button>
            </li>
          </ul>
        )}
      </form>
    </div>
  );
}

export default Profile;