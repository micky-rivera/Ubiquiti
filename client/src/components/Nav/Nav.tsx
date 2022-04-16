import React from 'react';
import Form from '../Form/Form';
import GridButton from '../GridButton/GridButton';
import Filter from '../Filter/Filter';
import ListButton from '../ListButton/ListButton';

function Nav() {
  return (
    <div className="nav-bar">
        <Form />
        <div className='buttons' data-testid='buttons'>
            <ListButton />
            <GridButton />
            <Filter />
        </div>
    </div>
  );
}

export default Nav;
