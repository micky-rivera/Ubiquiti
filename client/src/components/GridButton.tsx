import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { setFormat } from '../slices/slices';

function GridButton() {
    const state = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();

    const handleClick= () => {
        if (state.format === 'list') {
            window.localStorage.setItem('format', JSON.stringify({type: 'grid'}));
            dispatch(setFormat('grid'));
        }
    }

  return (
    <>
        <div className={state.format === 'grid' ? "hidden" : 'grid-btn'}>
            <svg onClick={handleClick} className='grid-btn__svg' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 8.5V4H4.5V8.5H9ZM4.5 3H9C9.552 3 10 3.448 10 4V8.5C10 9.052 9.552 9.5 9 9.5H4.5C3.948 9.5 3.5 9.052 3.5 8.5V4C3.5 3.448 3.948 3 4.5 3ZM9 16V11.5H4.5V16H9ZM4.5 10.5H9C9.552 10.5 10 10.948 10 11.5V16C10 16.552 9.552 17 9 17H4.5C3.948 17 3.5 16.552 3.5 16V11.5C3.5 10.948 3.948 10.5 4.5 10.5ZM16.5 4V8.5H12V4H16.5ZM16.5 3H12C11.448 3 11 3.448 11 4V8.5C11 9.052 11.448 9.5 12 9.5H16.5C17.052 9.5 17.5 9.052 17.5 8.5V4C17.5 3.448 17.052 3 16.5 3ZM16.5 16V11.5H12V16H16.5ZM12 10.5H16.5C17.052 10.5 17.5 10.948 17.5 11.5V16C17.5 16.552 17.052 17 16.5 17H12C11.448 17 11 16.552 11 16V11.5C11 10.948 11.448 10.5 12 10.5Z" fill="#838691"/>
            </svg>
        </div>
        <div className={state.format === 'grid' ? "grid-btn" : 'hidden'}>
            <svg onClick={handleClick} className='grid-btn__svg' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 4C0.5 1.79086 2.29086 0 4.5 0H16.5C18.7091 0 20.5 1.79086 20.5 4V16C20.5 18.2091 18.7091 20 16.5 20H4.5C2.29086 20 0.5 18.2091 0.5 16V4Z" fill="#F6F6F8"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9 3C9.552 3 10 3.448 10 4V8.5C10 9.052 9.552 9.5 9 9.5H4.5C3.948 9.5 3.5 9.052 3.5 8.5V4C3.5 3.448 3.948 3 4.5 3H9ZM3.5 11.5C3.5 10.948 3.948 10.5 4.5 10.5H9C9.552 10.5 10 10.948 10 11.5V16C10 16.552 9.552 17 9 17H4.5C3.948 17 3.5 16.552 3.5 16V11.5ZM12 3C11.448 3 11 3.448 11 4V8.5C11 9.052 11.448 9.5 12 9.5H16.5C17.052 9.5 17.5 9.052 17.5 8.5V4C17.5 3.448 17.052 3 16.5 3H12ZM11 11.5C11 10.948 11.448 10.5 12 10.5H16.5C17.052 10.5 17.5 10.948 17.5 11.5V16C17.5 16.552 17.052 17 16.5 17H12C11.448 17 11 16.552 11 16V11.5Z" fill="#838691"/>
            </svg>
        </div>
    </>
  );
}

export default GridButton;
