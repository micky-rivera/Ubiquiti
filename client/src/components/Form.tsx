import React, {useState} from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { setSearch } from '../slices/slices';

const Form = () => {
    const [userInput, setUserInput] = useState('');
    const dispatch = useAppDispatch();
    
    const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setUserInput('');
        dispatch(setSearch(''));
    }

    return (
        <>
            <svg className='search-form__svg' fill="#878788" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 60" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
            <form className="search-form">
                <input className="search-form__input" type="text" placeholder="Search" value={userInput} onChange={e => {
                    setUserInput(e.target.value);
                    dispatch(setSearch(e.target.value));
                }}  />
                <button className='search-form__clear-btn' onClick={e => clearForm(e)}>✕</button>
            </form>
        </>
    );
}

export default Form;