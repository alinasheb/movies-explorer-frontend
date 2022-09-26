import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return(
        <section className='search'>
            <form className='search__form' action='#'>
                <input className='search__input' type='text' placeholder='Фильм'/>
                <button className='search__button' type='submit'>Найти</button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </section>

    );
}

export default SearchForm;