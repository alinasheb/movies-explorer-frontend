import './Header.css';
import { NavLink } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo.svg';


function Header({menuIsOpened, closeMenu, profileActive, loggedIn, openMenu }) {
    const classSetActive = ({isActive})  => isActive ? 'navigation__link_active' : 'navigation__link';
    return (
        <header className={`header ${profileActive && 'header__theme_black'} ${loggedIn && 'header_type_logged-in'}`}>
            <NavLink to='/'><img src={logo} alt='Логотип' className='header__logo' /></NavLink>
            {
                loggedIn ? (
                    <div className='header__wrap'>
                        <div className='header__wrap-menu'>
                            <div className='header__wrap-menu-link'>
                                <NavLink to='/movies' className={classSetActive} onClick={closeMenu}>Фильмы</NavLink>
                                <NavLink to='/saved-movies' className={classSetActive} onClick={closeMenu}>Сохраненные фильмы</NavLink>
                            </div>
                                <NavLink to='/profile' className='navigation__profile' onClick={closeMenu}>
                                    <p className='navigation__title'>Аккаунт</p> 
                                    <div className='navigation__logo'></div>
                                </NavLink>
                        </div>
                            <button className={`header__button-burger-menu `}  onClick={openMenu} />
                            <Navigation 
                            menuIsOpened={menuIsOpened}
                            closeMenu={closeMenu}
                            />
                    </div>
                    ) : (
                        <div className={`header__wrap ${profileActive && 'header__button_hidden'}`}>
                            <NavLink to='/signup' className='header__login'>Регистрация</NavLink>
                            <NavLink to='signin' className='header__button'>Войти</NavLink>
                        </div>
                    )
            }
            
        </header>
    );
}

export default Header;
