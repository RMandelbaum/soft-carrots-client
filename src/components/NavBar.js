import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'


const NavBar = props => {
  return (
    <div className="navbar-container">
      <NavLink
      className="navbar-item"
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/jokes"
      >
        JOKES
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/random"
          >
            RANDOM
          </NavLink>

      <NavLink
        className="navbar-item"
        to="/jokes/new"
      >
        SUBMIT
      </NavLink>
     </div>
  );
}


export default NavBar;
