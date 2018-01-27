import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar = props => {
  return (
    <div className="navbar-container">
      <NavLink
      className="navbar-item"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/jokes"
      >
        Jokes
      </NavLink>
      <NavLink
      className="navbar-item"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/jokes/new"
      >
        Submit
      </NavLink>
     </div>
  );
}

export default NavBar;
