import React from 'react';

function ListItem({name,line, deviceId}: ListItemProps) {

  const resolution = '25x25';

  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${deviceId}_${resolution}.png`;

  return (
    <>
      <div className='list__item--img'>
        <img src={imageUrl} />
      </div>
      <p className='list__item--line'>{line}</p>
      <p className='list__item--name'>{name}</p>
    </>
  );
}

export default ListItem;
