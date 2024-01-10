import "./Header.css";
import logo from "../image/logo.png";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Header() { 

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Update state based on scroll position
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <nav className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src={logo}></img>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/complaintform">Complaint form</Link>
            </li>
          </ul>
        </div>

        <div className="header-button">
        <ul className="buttons">
          <li className="signup" >
           <Link to="/signup">Sign up</Link>
          </li>
          <li className="signin" >
           <Link to="/signin">Sign in</Link>
          </li>
        </ul>

        </div>

      </nav>
    
    </div>
  );
}

export default Header;


