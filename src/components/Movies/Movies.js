import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ 
    loggedIn, 
    menuIsOpened, 
    openMenu, 
    closeMenu,
    onSubmit,
    movies,
    isLoading,
    isFailed,
    isNotFound,
    searchQuery,
    onCheckbox,
    checked,
    checkedSaveMovies,
    savedMovies,
    onSave,
    onDelete,
    allSavedMovies }) {
    return(
        <>
            <Header 
            loggedIn={loggedIn}
            profileActive={true}
            menuIsOpened={menuIsOpened}
            openMenu={openMenu}
            closeMenu={closeMenu}
            />
            <main className='movies'>
                <SearchForm 
                    onSubmit={onSubmit}
                    searchQuery={searchQuery}
                    onCheckbox={onCheckbox}
                    checked={checked}
                    checkedSaveMovies={checkedSaveMovies}/>
                {isLoading ? (
                <Preloader />
                ) : (
                <MoviesCardList 
                    movies={movies}
                    isNotFound={isNotFound}
                    isFailed={isFailed}
                    searchQuery={searchQuery}
                    savedMovies={savedMovies}
                    onSave={onSave}
                    onDelete={onDelete}
                    onCheckbox={onCheckbox}
                    checked={checked}
                    checkedSaveMovies={checkedSaveMovies}
                    allSavedMovies={allSavedMovies}/>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Movies;