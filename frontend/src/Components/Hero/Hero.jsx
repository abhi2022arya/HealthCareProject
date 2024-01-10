import React from "react";
import "./Hero.css";
import face_img from "../../image/face.png";

// navbar ko static karna hai.


function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>WELCOME ON OUR CLINIC'S SITE</h2>
        <div>
          <div className="hero-p1">
            <p>Take care</p>
            <p>of your health</p>
          </div>
          <div className="hero-p2"> 
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            natus nulla, dignissimos mollitia veniam maiores. Consectetur
            accusamus at earum modi iure dicta fuga ea impedit!
          </p>
            </div>  
        
        </div>
        <div className="hero-button">
          <div className="hero-book-button">
            <div>Book a visit</div>
          </div>
          <div className="hero-read-button">
            <div>Read more</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={face_img}></img>
      </div>
    </div>
  );
}

export default Hero;
