import React from 'react';

import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation({ menuIsOpened, closeMenu }) {
    const classSetActive = ({isActive})  => isActive ? 'navigation__link_active' : 'navigation__link';
    return(
        <div className={`navigation__wrap ${!menuIsOpened && 'navigation__wrap_hidden'}`}>
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <NavLink to='/' className={classSetActive}  onClick={closeMenu}>Главная</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink to='/movies' className={classSetActive} onClick={closeMenu}>Фильмы</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink to='/saved-movies' className={classSetActive} onClick={closeMenu}>Сохраненные фильмы</NavLink>
                    </li>
                </ul>
                <NavLink to='/profile' className='navigation__profile' onClick={closeMenu}>
                    <p className='navigation__title'>Аккаунт</p> 
                    <div className='navigation__logo'></div>
                </NavLink>
            </nav>
            <button className='navigation__button' type='button' onClick={closeMenu} />
        </div>
    )
}

export default Navigation;