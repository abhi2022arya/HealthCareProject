import React from "react";
import "./Footer.css";
import Footer_logo from "../../image/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-1">
        <img src={Footer_logo} alt="" />
      </div>
      <div className="footer-2">
        <ul>
          <li>
            <a href="#"> Etiam dapibus</a>
          </li>
          <li>
            <a href="#"> Nunc sit</a>
          </li>
          <li>
            <a href="#"> Etiam tempor</a>
          </li>
          <li>
            <a href="#"> Lorem ipsum</a>
          </li>
        </ul>
      </div>
      <div className="footer-3">
        <ul>
          <li>
            <a href="#"> Etiam tempor</a>
          </li>
          <li>
            <a href="#"> Lorem ipsum</a>
          </li>
          <li>
            <a href="#"> Etiam dapibus</a>
          </li>
          <li>
            <a href="#"> Nunc sit</a>
          </li>
        </ul>
      </div>
      <div className="footer-4">
        <h2>CALL US</h2>
        <h3>+61 (0) 3 8376 6284</h3>
        <h2>OR WRITE </h2>
        <h3>noreply@envato.com</h3>
      </div>
    </div>
  );
}

export default Footer;
