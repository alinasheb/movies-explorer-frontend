import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';


function FilterCheckbox({ onCheckbox, checked, checkedSaveMovies }) {
    const location = useLocation(); 
    const handleCheckbox = (evt) => {
        onCheckbox(evt.target.checked);
      };
      
    return(
        <div className='checkbox'>
            <label className='checkbox__filter'>
                {location.pathname === '/movies' ? (
                    <input className='checkbox__input' 
                            name='filter-checkbox' 
                            type='checkbox' 
                            id='filter-checkbox'
                            defaultValue='yes'
                            checked={checked}
                            onChange={handleCheckbox}/>
                    ) : (
                    <input className='checkbox__input' 
                            name='filter-checkbox' 
                            type='checkbox' 
                            id='filter-checkbox'
                            defaultValue='yes'
                            checked={checkedSaveMovies}
                            onChange={handleCheckbox}/>
                            )}
                    <span className='checkbox__input-switch'></span>
            </label>
            <p className='checkbox__title'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;