import React, { useState } from "react";
import "./navbar.css";
import logo from '../assets/Images/CodeWithSmile Logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
      
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={'/'}><img src={logo} width="50px" height="50px" alt="" /></Link>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search for anything" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Hamburger Menu */}
      <button className="menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Plans & Pricing</a>
        <a href="#">Udemy Business</a>
        <a href="#">Teach on Udemy</a>
      </div>

      <div className="navbar-actions">
       <Link to={'/'}> <button className="btn-login">Log in</button></Link>
       <Link to={'/sign-up'}> <button className="btn-signup">Sign up</button></Link>
        <button className="btn-icon">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="btn-icon">
          <i className="fas fa-globe"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
