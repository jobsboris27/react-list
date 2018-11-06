import React from 'react';

const ListItem = ({item, onRemoveHandler}) => {
  const title = item.title ? item.title : item.name;
  return (
  <li className="list">
    {title}
    <button onClick={onRemoveHandler.bind(null, item)}>X</button>
  </li>
  )
}

export default ListItem;