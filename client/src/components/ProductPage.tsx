import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function ProductPage() {
  const state = useAppSelector(state => state.app);

  const resolution = '257x257';

  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${state.chosenProduct.deviceId}_${resolution}.png`;

  return (
    <>
      <div className='product-page'>
          <img className='product-page__img' src={imageUrl} />
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
    </>
  );
}

export default ProductPage;
