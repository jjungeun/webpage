import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const menuStyle = {
    color: 'white'
  }

  const activeStyle = {
    color: 'green'
  }

  return (
    <ul className="ul">
      <li className="li">
        <NavLink exact to="/" activeStyle={activeStyle} style={menuStyle}>Home</NavLink>
      </li>
      <li className="li">
        <NavLink to="/post" activeStyle={activeStyle} style={menuStyle}>Post</NavLink>
      </li>
    </ul>
  );
};

export default Menu;