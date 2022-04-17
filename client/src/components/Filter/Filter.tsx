import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setFilters } from '../../slices/slices';

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
            if (!state.filters.includes(event.target.id.toLowerCase())) {
                window.localStorage.setItem('filters', JSON.stringify({terms: [...storedFilters, event.target.id.toLowerCase()]}));
                dispatch(setFilters([...state.filters, event.target.id.toLowerCase()]));
            }
        } else {
            if (state.filters.includes(event.target.id.toLowerCase())) {
                window.localStorage.setItem('filters', JSON.stringify({terms: [...storedFilters].filter(item => item !== event.target.id.toLowerCase())}));
                dispatch(setFilters([...state.filters].filter(item => item !== event.target.id.toLowerCase())));
            }
        }
    }

  return (
    <>
        <p onClick={handleClick} className="filter-btn" data-testid='filter-btn'>Filter</p>
        <div className={popUpOpen ? 'filter-popup' : 'hidden'}>
            <div className='filter-popup__header'>
                <p className='filter-popup__title'>Filter</p>
                <p onClick={handleClick} className='filter-popup__exit'>✕</p>
            </div>
            <div className='filter-popup__body' data-testid='filter-popup__body'>
                <p className='filter-popup__section-title'>Product Line</p>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi' onChange={handleCheck} checked={state.filters.includes('unifi')}/>
                    <label className='filter-popup__label' htmlFor='UniFi'>UniFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi LTE' onChange={handleCheck} checked={state.filters.includes('unifi lte')}/>
                    <label className='filter-popup__label' htmlFor='UniFi LTE'>UniFi LTE</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi LED' onChange={handleCheck} checked={state.filters.includes('unifi led')}/>
                    <label className='filter-popup__label' htmlFor='UniFi LED'>UniFi LED</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Protect' onChange={handleCheck} checked={state.filters.includes('unifi protect')}/>
                    <label className='filter-popup__label' htmlFor='UniFi Protect'>UniFi Protect</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Access' onChange={handleCheck} checked={state.filters.includes('unifi access')}/>
                    <label className='filter-popup__label' htmlFor='UniFi Access'>UniFi Access</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UniFi Talk' onChange={handleCheck} checked={state.filters.includes('unifi talk')}/>
                    <label className='filter-popup__label' htmlFor='UniFi Talk'>UniFi Talk</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirMAX' onChange={handleCheck} checked={state.filters.includes('airmax')}/>
                    <label className='filter-popup__label' htmlFor='AirMAX'>AirMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirPrism' onChange={handleCheck} checked={state.filters.includes('airprism')}/>
                    <label className='filter-popup__label' htmlFor='AirPrism'>AirPrism</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirCube' onChange={handleCheck} checked={state.filters.includes('aircube')}/>
                    <label className='filter-popup__label' htmlFor='AirCube'>AirCube</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='EdgeMAX' onChange={handleCheck} checked={state.filters.includes('edgemax')}/>
                    <label className='filter-popup__label' htmlFor='EdgeMAX'>EdgeMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='SunMAX' onChange={handleCheck} checked={state.filters.includes('sunmax')}/>
                    <label className='filter-popup__label' htmlFor='SunMAX'>SunMAX</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AirFiber' onChange={handleCheck} checked={state.filters.includes('airfiber')}/>
                    <label className='filter-popup__label' htmlFor='AirFiber'>AirFiber</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UFiber' onChange={handleCheck} checked={state.filters.includes('ufiber')}/>
                    <label className='filter-popup__label' htmlFor='UFiber'>UFiber</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='LTU' onChange={handleCheck} checked={state.filters.includes('ltu')}/>
                    <label className='filter-popup__label' htmlFor='LTU'>LTU</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='AmpliFi' onChange={handleCheck} checked={state.filters.includes('amplifi')}/>
                    <label className='filter-popup__label' htmlFor='AmpliFi'>AmpliFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='mFi' onChange={handleCheck} checked={state.filters.includes('mfi')}/>
                    <label className='filter-popup__label' htmlFor='mFi'>mFi</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UISP' onChange={handleCheck} checked={state.filters.includes('uisp')}/>
                    <label className='filter-popup__label' htmlFor='UISP'>UISP</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='UNMS' onChange={handleCheck} checked={state.filters.includes('unms')}/>
                    <label className='filter-popup__label' htmlFor='UISP'>UNMS</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Smart' onChange={handleCheck} checked={state.filters.includes('smart')}/>
                    <label className='filter-popup__label' htmlFor='Smart'>Smart</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='SmartPower' onChange={handleCheck} checked={state.filters.includes('smartpower')}/>
                    <label className='filter-popup__label' htmlFor='SmartPower'>SmartPower</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Security' onChange={handleCheck} checked={state.filters.includes('security')}/>
                    <label className='filter-popup__label' htmlFor='Security'>Security</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Conference' onChange={handleCheck} checked={state.filters.includes('conference')}/>
                    <label className='filter-popup__label' htmlFor='Conference'>Conference</label>
                </div>
                <div className='filter-popup__option'>
                    <input className='filter-popup__checkbox' type='checkbox' id='Ubiquiti' onChange={handleCheck} checked={state.filters.includes('ubiquiti')}/>
                    <label className='filter-popup__label' htmlFor='Ubiquiti'>Ubiquiti</label>
                </div>
            </div>
        </div>
    </>
  );
}

export default Filter;
