import React from 'react';
import ListItem from "../list-item/List-item";

const List = ({list, title, onRemoveHandler}) => {
  const items = list.map((item, index) => <ListItem key={index} 
                                                    item={item}
                                                    onRemoveHandler={onRemoveHandler}/>);
  return (
    <>
    <span>
      {title}
    </span>
    <ul className="list">
      {items}
    </ul>
    </>
  )
}

export default List;