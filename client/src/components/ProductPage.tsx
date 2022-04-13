import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function ProductPage({name, line, deviceId}: ProductPageProps) {
  const state = useAppSelector(state => state.app);

  const resolution = '257x257';

  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${deviceId}_${resolution}.png`;

  return (
    <>
      <div className='product-page'>
          <img src={imageUrl} />
          <p>product details will go here</p>
      </div>
    </>
  );
}

export default ProductPage;
