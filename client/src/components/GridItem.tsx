import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function GridItem({name,line, deviceId}: ListItemProps) {
  const state = useAppSelector(state => state.app);

  const resolution = '129x129';

  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${deviceId}_${resolution}.png`;

  return (
    <>
      <div className={state.format === 'grid' ? 'grid-item' : 'hidden'}>
        <div className='grid-item__img'>
          <img src={imageUrl} />
        </div>
        <p className='grid-item__name'>{name}</p>
        <p className='grid-item__line'>{line}</p>
      </div>
    </>
  );
}

export default GridItem;
