import React from 'react';
import Form from './Form';
import GridButton from './GridButton';
import Filter from './Filter';
import ListButton from './ListButton';

function Nav() {
  return (
    <div className="nav-bar">
        <Form />
        <div className='buttons'>
            <ListButton />
            <GridButton />
            <Filter />
        </div>
    </div>
  );
}

export default Nav;
