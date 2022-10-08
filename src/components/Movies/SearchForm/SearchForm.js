import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSubmit, searchQuery, onCheckbox, checked, checkedSaveMovies }) {
    const [query, setQuery] = useState('');
    const [isFormValidate, setIsFormValidate] = useState(false);
    const [errorQuery, setErrorQuery] = useState(''); 
    const location = useLocation();

    useEffect(() => {
      if (searchQuery && location.pathname === '/movies') {
        setQuery(searchQuery);
      }
    }, []);

    const handleChange = (evt) => {
        setQuery(evt.target.value);
        setIsFormValidate(evt.target.closest('form').checkValidity());
      };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsFormValidate(evt.target.closest('form').checkValidity());
        if (!isFormValidate) {
          return setErrorQuery('Нужно ввести ключевое слово');
        }
        onSubmit(query);
      };

      
    return(
        <section className='search'>
            <form className='search__form' action='#'  onSubmit={handleSubmit} noValidate>
                <input className='search__input' 
                        type='text' 
                        placeholder='Фильм'
                        onChange={handleChange}
                        value={query}
                        minLength='1'
                        maxLength='30' 
                        required/>
                 <button className='search__button' type='submit'>Найти</button>
            </form>
            <span className='search__error'>{!isFormValidate && errorQuery}</span>
            <FilterCheckbox
              onCheckbox={onCheckbox}
              checked={checked} 
              checkedSaveMovies={checkedSaveMovies}>
            </FilterCheckbox>
        </section>
    );
}

export default SearchForm;