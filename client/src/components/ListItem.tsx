import React from 'react';

function ListItem({name,line}: ListItemProps) {
  return (
    <div className="list-item">
        <p>name: {name}</p>
        <p>line: {line}</p>
    </div>
  );
}

export default ListItem;
