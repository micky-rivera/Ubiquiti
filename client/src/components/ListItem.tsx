import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setChosenProduct } from '../slices/slices';

function ListItem({name,line, deviceId, details}: ListItemProps) {
  const state = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resolution = state.format === 'list' ? '25x25' : '129x129';

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
      <div onClick={handleClick} className={state.format === 'list' ? 'list-item' : 'grid-item'}>
        <div className={state.format === 'list' ? 'list-item__img' : 'grid-item__img'}>
          <img src={imageUrl} />
        </div>
        <p className={state.format === 'list' ? 'list-item__line' : 'grid-item__line'}>{line}</p>
        <p className={state.format === 'list' ? 'list-item__name' : 'grid-item__name'}>{name}</p>
      </div>
    </>
  );
}

export default ListItem;
