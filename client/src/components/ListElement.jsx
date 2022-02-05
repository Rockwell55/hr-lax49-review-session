import React from 'react';

const ListElement = (props) => (
  <span>
    <div>{props.name}</div>
    <img src={props.image}></img>
  </span>
);

export default ListElement;