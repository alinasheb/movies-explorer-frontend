import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
// import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ loggedIn, menuIsOpened, openMenu, closeMenu }) {
    return(
        <main className='movies'>
            <Header 
            loggedIn={loggedIn}
            profileActive={true}
            menuIsOpened={menuIsOpened}
            openMenu={openMenu}
            closeMenu={closeMenu}
            />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </main>

    );
}

export default Movies;