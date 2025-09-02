import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Left - Logo / Brand */}
        <div className="footer-brand">
         <Link to={"/"}> <img src="https://varhamindustries.com/wp-content/uploads/2025/07/Group-884229.png" alt="Logo" className="footer-logo" /></Link>
          <h3></h3>
        </div>

        {/* Middle - Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/mission">Mission & Vision</Link>
          <Link to="/capabilities">Our Capabilities</Link>
          <Link to="/careers">Careers</Link>
        </div>

        {/* Right - Social Media */}
        <div className="footer-socials">
          {/* <Link to="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </Link> */}
          <Link to="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"><FaLinkedin /></i>
          </Link>
          {/* <Link to="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </Link> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2025 – VARHAM INDUSTRIES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
