import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
//import { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom';

function SavedMovies({
    loggedIn, 
    menuIsOpened, 
    openMenu, 
    closeMenu, 
    movies,
    onSubmit,
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
    allSavedMovies
}) {

    

    
    
    return(
        <>
        <Header 
           loggedIn={loggedIn}
            profileActive={true}
            menuIsOpened={menuIsOpened}
            openMenu={openMenu}
            closeMenu={closeMenu}
            />
        <main className='saved-movies'>
            <SearchForm 
            onSubmit={onSubmit}
            searchQuery={searchQuery}
            onCheckbox={onCheckbox}
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}> 
            </SearchForm>
            {isLoading ? (
          <Preloader />
        ) : (
            <MoviesCardList 
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}
            movies={movies}
            isNotFound={isNotFound}
            isFailed={isFailed}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            allSavedMovies={allSavedMovies}></MoviesCardList>
            )}
        </main>
        <Footer />
        </>
    );
}

export default SavedMovies;