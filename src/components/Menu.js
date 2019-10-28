import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  }

  return (
    <ul>
      <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
      <li><NavLink to="/post" activeStyle={activeStyle}>Post</NavLink></li>
    </ul>
  );
};

export default Menu;