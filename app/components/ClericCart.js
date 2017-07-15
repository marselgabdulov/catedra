import React from 'react';

export default function ClericCart(props) {
  return (
    <li className="cleric-cart">
      <img src={props.image} alt={props.name} className="square" />
      <span className="position">{props.position}</span>
      <span className="name">{props.name}</span>
    </li>
  )
}
