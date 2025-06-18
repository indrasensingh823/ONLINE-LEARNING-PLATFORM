import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Learnify</Link>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link></li>
          <li><Link to="/register" onClick={() => setMobileMenuOpen(false)}>Register</Link></li>
          <li><Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>Cources</Link></li>
          <li><Link to="/resources" onClick={() => setMobileMenuOpen(false)}>Resources</Link></li>
          <li><Link to="/quiz" onClick={() => setMobileMenuOpen(false)}>Quiz</Link></li>
          <li><Link to="/profile" onClick={() => setMobileMenuOpen(false)}>👤</Link></li>


        </ul>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {/* Hamburger icon */}
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
