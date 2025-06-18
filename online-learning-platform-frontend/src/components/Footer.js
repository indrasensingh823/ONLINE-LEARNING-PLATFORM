import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import './Footer.css'; // Assuming you have a separate CSS file

const Footer = () => {
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>📞 Contact Us</h3>
        <p>Email: support@learnify.com</p>
        <p>Phone: +91-9876543210</p>
      </div>

      <div className="footer-middle">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/resources">Resources</Link>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <b>Learnify</b>. All rights reserved.</p>
     <button className="scroll-to-top" onClick={scrollToTop}>⬆ Top</button>

      </div>
    </footer>
  );
};

export default Footer;
