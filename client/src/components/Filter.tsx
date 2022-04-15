import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setFilters } from '../slices/slices';

function Filter() {
    const state = useAppSelector(state => state.app);
    const dispatch = useAppDispatch();
    const [popUpOpen, setPopUpOpen] = useState(false);

    const handleClick = () => {
        if (popUpOpen) {
            setPopUpOpen(false);
        } else {
            setPopUpOpen(true);
        }
    }

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        let storedFilters: string[] = [];
        if (window.localStorage.filters) {
            storedFilters = JSON.parse(window.localStorage.filters).terms;
        }
        if (event.target.checked === true) {
            if (!state.filters.includes(event.target.id)) {
                window.localStorage.setItem('filters', JSON.stringify({terms: [...storedFilters, event.target.id]}));
                dispatch(setFilters([...state.filters, event.target.id]));
            }
        } else {
            if (state.filters.includes(event.target.id)) {
                window.localStorage.setItem('filters', JSON.stringify({terms: [...storedFilters].filter(item => item !== event.target.id)}));
                dispatch(setFilters([...state.filters].filter(item => item !== event.target.id)))
            }
        }
    }

  return (
    <>
        <p onClick={handleClick} className="filter-btn">Filter</p>
        <div className={popUpOpen ? 'filter-popup' : 'hidden'}>
            <div className='filter-popup__header'>
                <p className='filter-popup__title'>Filter</p>
                <p onClick={handleClick} className='filter-popup__exit'>✕</p>
            </div>
            <div className='filter-popup__body'>
                <p className='filter-popup__section-title'>Product Line</p>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi' onChange={handleCheck} checked={state.filters.includes('UniFi')}/>
                    <label className='filter-popup__label' htmlFor='UniFi'>UniFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi LTE' onChange={handleCheck} checked={state.filters.includes('UniFi LTE')}/>
                    <label className='filter-popup__label' htmlFor='UniFi LTE'>UniFi LTE</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi LED' onChange={handleCheck} checked={state.filters.includes('UniFi LED')}/>
                    <label className='filter-popup__label' htmlFor='UniFi LED'>UniFi LED</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Protect' onChange={handleCheck} checked={state.filters.includes('UniFi Protect')}/>
                    <label className='filter-popup__label' htmlFor='UniFi Protect'>UniFi Protect</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Access' onChange={handleCheck} checked={state.filters.includes('UniFi Access')}/>
                    <label className='filter-popup__label' htmlFor='UniFi Access'>UniFi Access</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Talk' onChange={handleCheck} checked={state.filters.includes('UniFi Talk')}/>
                    <label className='filter-popup__label' htmlFor='UniFi Talk'>UniFi Talk</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirMAX' onChange={handleCheck} checked={state.filters.includes('AirMAX')}/>
                    <label className='filter-popup__label' htmlFor='AirMAX'>AirMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirPrism' onChange={handleCheck} checked={state.filters.includes('AirPrism')}/>
                    <label className='filter-popup__label' htmlFor='AirPrism'>AirPrism</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='EdgeMAX' onChange={handleCheck} checked={state.filters.includes('EdgeMAX')}/>
                    <label className='filter-popup__label' htmlFor='EdgeMAX'>EdgeMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='SunMAX' onChange={handleCheck} checked={state.filters.includes('SunMAX')}/>
                    <label className='filter-popup__label' htmlFor='SunMAX'>SunMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirFiber' onChange={handleCheck} checked={state.filters.includes('AirFiber')}/>
                    <label className='filter-popup__label' htmlFor='AirFiber'>AirFiber</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UFiber' onChange={handleCheck} checked={state.filters.includes('UFiber')}/>
                    <label className='filter-popup__label' htmlFor='UFiber'>UFiber</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='LTU' onChange={handleCheck} checked={state.filters.includes('LTU')}/>
                    <label className='filter-popup__label' htmlFor='LTU'>LTU</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AmpliFi' onChange={handleCheck} checked={state.filters.includes('AmpliFi')}/>
                    <label className='filter-popup__label' htmlFor='AmpliFi'>AmpliFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='mFi' onChange={handleCheck} checked={state.filters.includes('mFi')}/>
                    <label className='filter-popup__label' htmlFor='mFi'>mFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UISP' onChange={handleCheck} checked={state.filters.includes('UISP')}/>
                    <label className='filter-popup__label' htmlFor='UISP'>UISP</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UNMS' onChange={handleCheck} checked={state.filters.includes('UNMS')}/>
                    <label className='filter-popup__label' htmlFor='UISP'>UNMS</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Smart' onChange={handleCheck} checked={state.filters.includes('Smart')}/>
                    <label className='filter-popup__label' htmlFor='Smart'>Smart</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='SmartPower' onChange={handleCheck} checked={state.filters.includes('SmartPower')}/>
                    <label className='filter-popup__label' htmlFor='SmartPower'>SmartPower</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Security' onChange={handleCheck} checked={state.filters.includes('Security')}/>
                    <label className='filter-popup__label' htmlFor='Security'>Security</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Conference' onChange={handleCheck} checked={state.filters.includes('Conference')}/>
                    <label className='filter-popup__label' htmlFor='Conference'>Conference</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Ubiquiti' onChange={handleCheck} checked={state.filters.includes('Ubiquiti')}/>
                    <label className='filter-popup__label' htmlFor='Ubiquiti'>Ubiquiti</label>
                </div>
            </div>
        </div>
    </>
  );
}

export default Filter;
