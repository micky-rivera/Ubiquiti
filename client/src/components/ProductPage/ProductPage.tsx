import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

function ProductPage() {
  const state = useAppSelector(state => state.app);
  const navigate = useNavigate();

  const resolution = '257x257';

  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${state.chosenProduct.deviceId}_${resolution}.png`;

  const handleClick = () => {
    navigate('/');
  }

  useEffect(() => {
    if (state.chosenProduct.name === '') {
        navigate('/');
    }
  }, [])

  return (
    <>
        <div className='product-page__nav'>
            <div className='product-page__back-btn'>
            <svg data-testid='back-btn-svg' onClick={handleClick} className='product-page__back-btn-svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6516 15.253C12.8471 15.0575 12.8471 14.7405 12.6516 14.545L8.40863 10.303L12.6516 6.06098C12.8471 5.86553 12.847 5.54857 12.6514 5.35323C12.456 5.15811 12.1394 5.15822 11.9441 5.35348L7.70163 9.596C7.31117 9.98646 7.31171 10.6201 7.70218 11.0105L11.9437 15.253C12.1392 15.4485 12.4561 15.4485 12.6516 15.253Z" fill="#838691"/>
            </svg>
            </div>
            <p className='product-page__title' data-testid='title'>{state.chosenProduct.name}</p>
        </div>
        <div className='product-page'>
            <div className='product-page__img-container'>
                <img className='product-page__img' src={imageUrl} data-testid='img' />
            </div>
            <div className='product-page__info' data-testid='info'>
                <div className='product-page__row'>
                        <p className='product-page__label'>Name</p>
                        <p className='product-page__content'>{state.chosenProduct.name}</p>
                    </div>
                <div className='product-page__row'>
                        <p className='product-page__label'>Product line</p>
                        <p className='product-page__content'>{state.chosenProduct.line}</p>
                    </div>
                {state.chosenProduct.details.map((detail, index) => (
                    <div key={index} className='product-page__row'>
                        <p className='product-page__label'>{detail.label}</p>
                        <p className='product-page__content'>{detail.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
}

export default ProductPage;
