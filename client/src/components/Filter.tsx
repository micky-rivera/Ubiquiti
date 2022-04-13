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
        if (event.target.checked === true) {
            if (!state.filters.includes(event.target.id)) {
                dispatch(setFilters([...state.filters, event.target.id]));
            }
        } else {
            if (state.filters.includes(event.target.id)) {
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
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UniFi'>UniFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi LTE' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UniFi LTE'>UniFi LTE</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi LED' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UniFi LED'>UniFi LED</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Protect' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UniFi Protect'>UniFi Protect</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Access' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UniFi Access'>UniFi Access</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Talk' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UniFi Talk'>UniFi Talk</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirMAX' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='AirMAX'>AirMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirPrism' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='AirPrism'>AirPrism</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='EdgeMAX' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='EdgeMAX'>EdgeMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='SunMAX' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='SunMAX'>SunMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirFiber' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='AirFiber'>AirFiber</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UFiber' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UFiber'>UFiber</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='LTU' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='LTU'>LTU</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AmpliFi' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='AmpliFi'>AmpliFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='mFi' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='mFi'>mFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UISP' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UISP'>UISP</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UNMS' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='UISP'>UNMS</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Smart' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='Smart'>Smart</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='SmartPower' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='SmartPower'>SmartPower</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Security' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='Security'>Security</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Conference' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='Conference'>Conference</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Ubiquiti' onChange={handleCheck}/>
                    <label className='filter-popup__label' htmlFor='Ubiquiti'>Ubiquiti</label>
                </div>
            </div>
        </div>
    </>
  );
}

export default Filter;
