import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">DrinkMixer</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
