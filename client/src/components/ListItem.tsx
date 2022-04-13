import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function ListItem({name,line, deviceId}: ListItemProps) {
  const state = useAppSelector(state => state.app);

  const resolution = '25x25';

  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${deviceId}_${resolution}.png`;

  return (
    <>
      <div className={state.format === 'list' ? 'list-item' : 'hidden'}>
        <div className='list-item__img'>
          <img src={imageUrl} />
        </div>
        <p className='list-item__line'>{line}</p>
        <p className='list-item__name'>{name}</p>
      </div>
    </>
  );
}

export default ListItem;
