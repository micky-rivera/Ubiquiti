import React from 'react';

function ListItem({name,line}: ListItemProps) {
  return (
    <>
        <p className='list__item--img'>IMAGE</p>
        <p className='list__item--line'>{line}</p>
        <p className='list__item--name'>{name}</p>
    </>
  );
}

export default ListItem;
