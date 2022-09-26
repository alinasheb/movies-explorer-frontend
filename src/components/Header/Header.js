import './Header.css';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo.svg';


function Header({menuIsOpened, closeMenu, profileActive, loggedIn, openMenu}) {
    return (
        <header className={`header ${profileActive && 'header__theme_black'} ${loggedIn && 'header_type_logged-in'}`}>
            <Link to='/'><img src={logo} alt='Логотип' className='header__logo' /></Link>
            {
                loggedIn ? (
                    <div className='header__wrap'>
                        <div className='header__wrap-menu'>
                            <div className='header__wrap-menu-link'>
                                <Link to='/movies' className='navigation__link navigation__link_active' onClick={closeMenu}>
                                    Фильмы
                                </Link>
                                <Link to='/saved-movies' className='navigation__link' onClick={closeMenu}>
                                    Сохраненные фильмы
                                </Link>
                            </div>
                                <Link to='/profile' className='navigation__profile' onClick={closeMenu}>
                                    <p className='navigation__title'>Аккаунт</p> 
                                    <div className='navigation__logo'></div>
                                </Link>
                        </div>
                            <button className='header__button-burger-menu'  onClick={openMenu} />
                            <Navigation 
                            menuIsOpened={menuIsOpened}
                            closeMenu={closeMenu}
                            />
                    </div>
                    ) : (
                        <div className={`header__wrap ${profileActive && 'header__button_hidden'}`}>
                            <Link to='/signup' className='header__login'>Регистрация</Link>
                            <Link to='signin' className='header__button'>Войти</Link>
                        </div>
                    )
            }
            
        </header>
    );
}

export default Header;

/*${!profileActive && 'header__button-burger-menu_white'}*/