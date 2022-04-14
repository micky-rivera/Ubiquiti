import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setChosenProduct } from '../slices/slices';

function ListItem({name,line, deviceId, details}: ListItemProps) {
  const state = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resolution = '25x25';

  const imageUrl = `https://static.ui.com/fingerprint/ui/icons/${deviceId}_${resolution}.png`;

  const thisProduct = {
    name: name,
    line: line,
    deviceId: deviceId,
    details: details,
  }

  const handleClick = () => {
    dispatch(setChosenProduct(thisProduct));
    navigate('/product');
  }

  return (
    <>
      <div onClick={handleClick} className={state.format === 'list' ? 'list-item' : 'hidden'}>
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
