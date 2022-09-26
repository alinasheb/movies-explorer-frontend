import React from 'react';

import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation({ menuIsOpened, closeMenu }) {
    return(
        <div className={`navigation__wrap ${!menuIsOpened && 'navigation__wrap_hidden'}`}>
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <Link to='/' className='navigation__link' onClick={closeMenu}>Главная</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='/movies' className='navigation__link navigation__link_active' onClick={closeMenu}>Фильмы</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='/saved-movies' className='navigation__link' onClick={closeMenu}>Сохраненные фильмы</Link>
                    </li>
                </ul>
                <Link to='/profile' className='navigation__profile' onClick={closeMenu}>
                    <p className='navigation__title'>Аккаунт</p> 
                    <div className='navigation__logo'></div>
                </Link>
            </nav>
            <button className='navigation__button' type='button' onClick={closeMenu} />
        </div>
    )
}

export default Navigation;