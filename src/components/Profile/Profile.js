import './Profile.css';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';


function Profile({ loggedIn, menuIsOpened, openMenu, closeMenu }) {
    return(
        <div className='profile'>
             <Header 
            loggedIn={loggedIn}
            profileActive={true}
            menuIsOpened={menuIsOpened}
            openMenu={openMenu}
            closeMenu={closeMenu}
            />
            
            <form action='#' className='profile__form'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
                <label className='profile__field profile__field_line'>
                    <span className='profile__label'>Имя</span>
                    <input className='profile__input' type='text' name='text' placeholder='Виталий' minLength='3' maxLength='30' required />
                </label>

                <label className='profile__field'>
                    <span className='profile__label'>E-mail</span>
                    <input className='profile__input profile__input_placeholder' type='email' name='email' placeholder='pochta@yandex.ru' minLength='3' maxLength='30' required />
                </label>
                
                <div className='profile__caption'>
                    <Link to='/profile' className='profile__question'>Редактировать</Link>
                    <Link to='/signin' className='profile__log'>Выйти из аккаунта</Link>
                    
                </div>
            </form>
        </div>
    );
}

export default Profile;