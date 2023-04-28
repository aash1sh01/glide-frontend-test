import {useState,React} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';
import logo from '../Assets/logo.png';

function Header() {
  

 

  return (
    <header className="header">
        <img src={logo} className="logo" />
      
      
      <nav className= "navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/jobs" className="navbar-link">Jobs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/community" className="navbar-link">Community</Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">Resources</Link>
          </li>
        </ul>
      </nav>
      <nav className="mobile-menu">
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <Link to="/jobs" className="mobile-menu-link">Jobs</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/community" className="mobile-menu-link">Community</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/resources" className="mobile-menu-link">Resources</Link>
          </li>
        </ul>
      </nav>
     
    </header>
  );
}

export default Header;
