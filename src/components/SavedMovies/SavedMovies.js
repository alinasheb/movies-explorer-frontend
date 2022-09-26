import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
//import Preloader from '../Movies/Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies({ loggedIn, menuIsOpened, openMenu, closeMenu }) {
    
    return(
        <section className='saved-movies'>
            <Header 
            loggedIn={loggedIn}
            profileActive={true}
            menuIsOpened={menuIsOpened}
            openMenu={openMenu}
            closeMenu={closeMenu}
            />
            <SearchForm />
            <MoviesCardList type='save' size={3}></MoviesCardList>
            <Footer />
        </section>
            
    );
}

export default SavedMovies;