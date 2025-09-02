import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-wrapper">
      <div className="navbar">
        {/* Left side: Hamburger + Logo */}
        <div className="brand-wrapper">
          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img
                src="https://varhamindustries.com/wp-content/uploads/2025/07/Group-884229.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>

        <ul className="nav-links desktop">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Aboutus</Link>
          </li>
          <li>
            <Link to="/mission">Mission & Vision</Link>
          </li>
          <li>
            <Link to="/capabilities">Our Capabilities</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </div>

      <div
        className={`side-drawer ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu} // <-- closes when clicking inside
      >
        <div className="drawer-header">
          <p>MENU</p>
          <span className="close-btn" onClick={toggleMenu}>
            ×
          </span>
        </div>
        <ul onClick={(e) => e.stopPropagation()}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/mission" onClick={toggleMenu}>
              Mission & Vision
            </Link>
          </li>
          <li>
            <Link to="/capabilities" onClick={toggleMenu}>
              Our Capabilities
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={toggleMenu}>
              Careers
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Navbar;
