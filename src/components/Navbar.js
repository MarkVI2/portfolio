import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar neo-box">
      <div className="nav-brand">AAG.</div>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
        >
          Contact Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
