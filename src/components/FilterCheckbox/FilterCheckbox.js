import './FilterCheckbox.css';

function FilterCheckbox() {
    return(
        <div className='checkbox'>
            <label className='checkbox__filter'>
                <input className='checkbox__input' name='checkbox-filter' type='checkbox' />
                <span className='checkbox__input-switch'></span>
            </label>
            <p className='checkbox__title'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;