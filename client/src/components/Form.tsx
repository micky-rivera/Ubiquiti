import React, {useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setSearch } from '../slices/slices';

const Form = () => {
    const state = useAppSelector(state => state.app);
    const [userInput, setUserInput] = useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (window.localStorage.search) {
            const search: {term:string} = JSON.parse(window.localStorage.search);
            setUserInput(search.term);
            dispatch(setSearch(search.term));
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('search', JSON.stringify({term: userInput}));
    }, [userInput])
    
    const clearForm = () => {
        setUserInput('');
        dispatch(setSearch(''));
    }

    return (
        <>
            <svg className='search-form__svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.853 16.1465L14.006 13.3025C14.937 12.2115 15.5 10.7975 15.5 9.25049C15.5 5.79849 12.702 3.00049 9.25 3.00049C5.798 3.00049 3 5.79849 3 9.25049C3 12.7025 5.798 15.5005 9.25 15.5005C10.795 15.5005 12.208 14.9385 13.299 14.0095L16.147 16.8535C16.245 16.9515 16.372 16.9995 16.5 16.9995C16.628 16.9995 16.756 16.9505 16.854 16.8525C17.049 16.6585 17.049 16.3415 16.853 16.1465ZM4 9.25049C4 6.35549 6.355 4.00049 9.25 4.00049C12.145 4.00049 14.5 6.35549 14.5 9.25049C14.5 12.1455 12.145 14.5005 9.25 14.5005C6.355 14.5005 4 12.1455 4 9.25049Z" fill="#838691"/>
            </svg>
            <form className="search-form" onSubmit={e => {e.preventDefault();}}>
                <input className="search-form__input" type="text" placeholder="Search" value={userInput} onChange={e => {
                    setUserInput(e.target.value);
                    dispatch(setSearch(e.target.value));
                }}  />
            </form>
                <button className='search-form__clear-btn' onClick={clearForm}>✕</button>
        </>
    );
}

export default Form;